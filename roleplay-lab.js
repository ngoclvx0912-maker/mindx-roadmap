/* ============================================================
   MindX AI Role-Play Lab — Main Module (v1.0)
   Renders inside #roleplayContainer within the Roadmap webapp.
   Uses window.RolePlayData for seed content.
   Version: 1.0 | April 2026
   ============================================================ */

window.RolePlayLab = (function() {
  'use strict';

  // ===================================================================
  // 1. CONSTANTS & CONFIGURATION
  // ===================================================================
  const STORAGE_KEY = 'mindx_roleplay';
  const API_URL = 'https://api.perplexity.ai/chat/completions';
  const API_KEY = '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';
  const LOG_ENDPOINT = 'https://script.google.com/macros/s/AKfycbySnPbdLFoA2GSQ1g7u0JbGCdFP2Dt0pz31FQ5LbeRf3XVbVbQUoPkTZIaNuDPH_RuR/exec';
  const MAX_MESSAGES = 20;
  const STAGE_LABELS = {
    opening: 'Mở đầu',
    discovery: 'Khai thác nhu cầu',
    value: 'Truyền tải giá trị',
    objection: 'Xử lý phản đối',
    closing: 'Chốt'
  };
  const DIFFICULTY_LABELS = { easy: 'Dễ', medium: 'Trung bình', hard: 'Khó', boss: 'Boss' };
  const MODE_LABELS = { practice: 'Luyện tập', exam: 'Thi thử', boss: 'Boss Fight' };

  // ===================================================================
  // 2. SAFE STORAGE WRAPPER
  // ===================================================================
  const safeStorage = (() => {
    const mem = {};
    const fallback = {
      getItem: k => (k in mem) ? mem[k] : null,
      setItem: (k, v) => { mem[k] = String(v); },
      removeItem: k => { delete mem[k]; }
    };
    try {
      const ls = window['local' + 'Storage'];
      const tk = '__rpl_test__';
      ls.setItem(tk, tk);
      ls.removeItem(tk);
      return ls;
    } catch(e) {
      return fallback;
    }
  })();

  // ===================================================================
  // 2B. EMPLOYEE SESSION HELPER
  // ===================================================================
  const EMPLOYEE_SESSION_KEY = 'mindx_employee_session';
  const EMPLOYEE_SESSION_EXPIRY = 24 * 60 * 60 * 1000;

  function getEmployeeSession() {
    try {
      var raw = safeStorage.getItem(EMPLOYEE_SESSION_KEY);
      if (!raw) return null;
      var session = JSON.parse(raw);
      if (Date.now() - session.loginAt > EMPLOYEE_SESSION_EXPIRY) return null;
      return session;
    } catch (e) { return null; }
  }

  // ===================================================================
  // 3. STATE
  // ===================================================================
  let state = {
    currentPage: 'home',
    selectedAcademy: null,
    selectedLesson: null,
    selectedPersona: null,
    selectedScenario: null,
    chatMode: 'practice',
    messages: [],
    isTyping: false,
    isScoring: false,
    sessionId: null,
    sessionStartTime: null,
    timerInterval: null,
    elapsedSeconds: 0,
    scoreReport: null,
    filters: { product: 'all', difficulty: 'all', stage: 'all' },
    progress: {
      lessonsCompleted: {},
      quizScores: {},
      sessionsPlayed: [],
      bestScores: {}
    }
  };

  let initialized = false;
  let container = null;
  let data = null; // will point to window.RolePlayData

  // ===================================================================
  // 4. STATE PERSISTENCE
  // ===================================================================
  function loadProgress() {
    try {
      const saved = safeStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state.progress = { ...state.progress, ...parsed };
      }
    } catch(e) { console.warn('[RolePlayLab] Failed to load progress', e); }
  }

  function saveProgress() {
    try {
      safeStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch(e) { console.warn('[RolePlayLab] Failed to save progress', e); }
  }

  // ===================================================================
  // 5. UTILITIES
  // ===================================================================
  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str || '';
    return d.innerHTML;
  }

  function generateId() {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function getScoreColor(score) {
    if (score >= 80) return 'green';
    if (score >= 60) return 'yellow';
    return 'red';
  }

  function getScoreLabel(score) {
    if (score >= 90) return 'Xuất sắc';
    if (score >= 80) return 'Giỏi';
    if (score >= 65) return 'Khá';
    if (score >= 50) return 'Trung bình';
    return 'Cần cải thiện';
  }

  function getDifficultyClass(d) {
    return 'rpl-badge--' + (d || 'easy');
  }

  function getProductClass(p) {
    return p === 'duhoc' ? 'rpl-badge--duhoc' : 'rpl-badge--danghanh';
  }

  function getProductLabel(p) {
    return p === 'duhoc' ? 'Du Học' : 'Đa Ngành';
  }

  function findAcademy(id) {
    return data.academies.find(a => a.id === id);
  }

  function findPersona(id) {
    return data.personas.find(p => p.id === id);
  }

  function findScenario(id) {
    return data.scenarios.find(s => s.id === id);
  }

  function countCompletedLessons(academyId) {
    const ac = findAcademy(academyId);
    if (!ac) return 0;
    return ac.lessons.filter(l => state.progress.lessonsCompleted[l.id]).length;
  }

  function getTotalSessions() {
    return (state.progress.sessionsPlayed || []).length;
  }

  function getAverageScore() {
    const sessions = state.progress.sessionsPlayed || [];
    if (!sessions.length) return 0;
    const scored = sessions.filter(s => s.score > 0);
    if (!scored.length) return 0;
    return Math.round(scored.reduce((a, s) => a + s.score, 0) / scored.length);
  }

  function getStreak() {
    const sessions = state.progress.sessionsPlayed || [];
    if (!sessions.length) return 0;
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      if (sessions.some(s => s.date && s.date.slice(0, 10) === dateStr)) {
        streak++;
      } else if (i > 0) break;
    }
    return streak;
  }

  // ===================================================================
  // 6. AI INTEGRATION
  // ===================================================================
  async function callAI(messages, systemPrompt, opts) {
    opts = opts || {};
    var controller = new AbortController();
    var timeoutId = setTimeout(function() { controller.abort(); }, 30000);
    try {
      var response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'sonar',
          messages: [{ role: 'system', content: systemPrompt }, ...messages],
          temperature: opts.temperature || 0.7,
          max_tokens: opts.max_tokens || 500,
          search_context: 'off'
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (!response.ok) {
        var errText = await response.text();
        console.error('[RolePlayLab] API response:', response.status, errText);
        throw new Error('API ' + response.status + ': ' + errText.substring(0, 100));
      }
      var result = await response.json();
      return result.choices[0].message.content;
    } catch(e) {
      clearTimeout(timeoutId);
      console.error('[RolePlayLab] AI call failed:', e);
      throw e;
    }
  }

  function buildRoleplaySystemPrompt() {
    const persona = findPersona(state.selectedPersona);
    const scenario = findScenario(state.selectedScenario);
    if (!persona || !scenario) return '';

    const template = data.promptTemplates.roleplay;
    const personaData = `Tên: ${persona.name}
Avatar: ${persona.avatar}
Tagline: ${persona.tagline}
Sản phẩm: ${getProductLabel(persona.product)}
Độ khó: ${DIFFICULTY_LABELS[persona.difficulty]}
Gia đình: ${persona.profile.familyDesc}
Con: ${persona.profile.childAge}
Lo lắng chính: ${persona.profile.mainConcern}
Nỗi sợ: ${persona.profile.mainFear}
Mức tin tưởng (1-5): ${persona.profile.trustLevel}
Phong cách giao tiếp: ${persona.profile.communicationStyle}
Objections thường gặp:
${persona.objections.map((o, i) => (i + 1) + '. ' + o).join('\n')}`;

    const scenarioData = `Tên kịch bản: ${scenario.name}
Giai đoạn: ${STAGE_LABELS[scenario.stage]}
Mục tiêu: ${scenario.objective}
Bối cảnh: ${scenario.context}
CTA mong đợi: ${scenario.desiredCTA}`;

    let modeInstructions = '';
    if (state.chatMode === 'practice') {
      modeInstructions = 'Chế độ LUYỆN TẬP: Đóng vai vừa phải, cho Sale cơ hội sửa lỗi. Nếu Sale sai → gợi ý nhẹ thông qua phản ứng PH.';
    } else if (state.chatMode === 'exam') {
      modeInstructions = 'Chế độ THI THỬ: Đóng vai thực tế. Không gợi ý. Phản ứng tự nhiên hoàn toàn.';
    } else if (state.chatMode === 'boss') {
      modeInstructions = 'Chế độ BOSS: Khó tính tối đa. Objection liên tục, đòi proof, dễ mất kiên nhẫn. Khó thuyết phục.';
    }

    return template
      .replace('{persona_data}', personaData)
      .replace('{scenario_data}', scenarioData)
      .replace('{extra_instructions}', persona.systemPromptExtra + '\n\n' + modeInstructions);
  }

  function buildScoringPrompt() {
    const persona = findPersona(state.selectedPersona);
    const scenario = findScenario(state.selectedScenario);
    const product = persona ? persona.product : 'duhoc';
    const kb = data.knowledgeBase[product];

    const template = data.promptTemplates.scoring;
    const personaData = `${persona.name} (${persona.tagline}) — Độ khó: ${DIFFICULTY_LABELS[persona.difficulty]}`;
    const scenarioData = `${scenario.name} — Giai đoạn: ${STAGE_LABELS[scenario.stage]} — Mục tiêu: ${scenario.objective}`;
    const kbText = `Những điều NÊN nói:\n${kb.whatToSay.join('\n')}\n\nNhững điều KHÔNG được nói:\n${kb.whatNotToSay.join('\n')}\n\nRed Lines:\n${kb.redLines.join('\n')}`;

    return template
      .replace('{scenario_data}', scenarioData)
      .replace('{persona_data}', personaData)
      .replace('{mode}', MODE_LABELS[state.chatMode])
      .replace('{knowledge_base}', kbText);
  }

  function buildHintPrompt() {
    const persona = findPersona(state.selectedPersona);
    const scenario = findScenario(state.selectedScenario);
    const last4 = state.messages.slice(-4).map(m =>
      (m.role === 'user' ? 'Sale' : 'PH') + ': ' + m.content
    ).join('\n');

    return data.promptTemplates.hint
      .replace('{product_name}', getProductLabel(persona.product))
      .replace('{scenario_name}', scenario.name)
      .replace('{persona_name}', persona.name)
      .replace('{persona_summary}', persona.tagline + ' — ' + persona.profile.mainConcern)
      .replace('{last_4_messages}', last4);
  }

  // ===================================================================
  // 7. SESSION LOGGING
  // ===================================================================
  function logSession(sessionData) {
    try {
      const payload = {
        action: 'roleplay_saveSession',
        sessionId: sessionData.sessionId,
        date: new Date().toISOString(),
        scenario: sessionData.scenario,
        persona: sessionData.persona,
        mode: sessionData.mode,
        score: sessionData.score || 0,
        turns: sessionData.turns || 0,
        duration: sessionData.duration || 0,
        transcript: JSON.stringify(sessionData.transcript || [])
      };
      fetch(LOG_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function() { /* silent fail */ });
    } catch(e) { /* silent */ }
  }

  function logSessionRemote(scoreData) {
    try {
      var employee = getEmployeeSession();
      var scenario = findScenario(state.selectedScenario);
      var persona = findPersona(state.selectedPersona);
      var academy = findAcademy(state.selectedAcademy);
      var chiTiet = scoreData.chiTiet || {};

      var transcriptSummary = '';
      if (state.messages.length > 0) {
        transcriptSummary = state.messages.slice(0, 6).map(function(m) {
          return (m.role === 'user' ? 'TVTS' : 'PH') + ': ' + (m.content || '').substring(0, 80);
        }).join(' | ').substring(0, 500);
      }

      var payload = {
        action: 'log_roleplay',
        sessionId: state.sessionId,
        timestampStart: state.sessionStartTime,
        timestampEnd: new Date().toISOString(),
        employeeId: employee ? employee.msnv : 'unknown',
        employeeName: employee ? employee.name : 'unknown',
        bu: employee ? employee.bu : '',
        academyId: state.selectedAcademy || '',
        academyName: academy ? academy.name : '',
        productType: state.selectedAcademy || '',
        scenarioId: state.selectedScenario || '',
        scenarioTitle: scenario ? scenario.name : '',
        personaId: state.selectedPersona || '',
        personaName: persona ? persona.name : '',
        mode: state.chatMode,
        totalMessages: state.messages.length,
        totalScore: scoreData.diemTongKet || 0,
        needDiscoveryScore: (chiTiet.hieuNhuCau || {}).diem || 0,
        questioningScore: (chiTiet.datCauHoi || {}).diem || 0,
        valueCommunicationScore: (chiTiet.truyenTaiGiaTri || {}).diem || 0,
        scopeAccuracyScore: (chiTiet.khongOverclaim || {}).diem || 0,
        objectionHandlingScore: (chiTiet.xuLyObjection || {}).diem || 0,
        trustBuildingScore: (chiTiet.taoNiemTin || {}).diem || 0,
        ctaNavigationScore: (chiTiet.dieuHuongCTA || {}).diem || 0,
        communicationQualityScore: (chiTiet.vanPhong || {}).diem || 0,
        finalVerdict: scoreData.xepLoai || '',
        strengths: scoreData.diemManhNhat || '',
        weaknesses: scoreData.diemYeuNhat || '',
        recommendedNextScenario: scoreData.loiKhuyenSoMot || '',
        transcriptSummary: transcriptSummary,
        rawTranscriptJson: JSON.stringify(state.messages),
        rawScoreJson: JSON.stringify(scoreData),
        status: 'completed',
        deviceInfo: navigator.userAgent.substring(0, 200),
        appVersion: '1.1'
      };

      fetch(LOG_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload)
      }).catch(function() {
        // Save to retry queue
        try {
          var queue = JSON.parse(safeStorage.getItem('rpl_retry_queue') || '[]');
          queue.push(payload);
          if (queue.length > 20) queue = queue.slice(-20);
          safeStorage.setItem('rpl_retry_queue', JSON.stringify(queue));
        } catch(e) { /* silent */ }
      });
    } catch(e) {
      console.warn('[RolePlayLab] Remote log failed:', e);
    }
  }

  function retryPendingLogs() {
    try {
      var raw = safeStorage.getItem('rpl_retry_queue');
      if (!raw) return;
      var queue = JSON.parse(raw);
      if (!queue.length) return;
      safeStorage.removeItem('rpl_retry_queue');
      queue.forEach(function(payload) {
        fetch(LOG_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(payload)
        }).catch(function() { /* give up on double-fail */ });
      });
    } catch(e) { /* silent */ }
  }

  // ===================================================================
  // 8. NAVIGATION
  // ===================================================================
  // ===================================================================
  // 4B. SESSION RECOVERY (save/resume mid-chat on refresh)
  // ===================================================================
  var CHAT_STATE_KEY = 'rpl_chat_state';

  function saveChatState() {
    if (state.currentPage !== 'chat') return;
    try {
      safeStorage.setItem(CHAT_STATE_KEY, JSON.stringify({
        selectedPersona: state.selectedPersona,
        selectedScenario: state.selectedScenario,
        selectedAcademy: state.selectedAcademy,
        chatMode: state.chatMode,
        messages: state.messages,
        sessionId: state.sessionId,
        sessionStartTime: state.sessionStartTime,
        elapsedSeconds: state.elapsedSeconds,
        savedAt: Date.now()
      }));
    } catch (e) { /* quota exceeded — ignore */ }
  }

  function clearChatState() {
    safeStorage.removeItem(CHAT_STATE_KEY);
  }

  function getSavedChatState() {
    try {
      var raw = safeStorage.getItem(CHAT_STATE_KEY);
      if (!raw) return null;
      var saved = JSON.parse(raw);
      // Expire after 2 hours
      if (Date.now() - saved.savedAt > 2 * 60 * 60 * 1000) {
        clearChatState();
        return null;
      }
      return saved;
    } catch (e) { return null; }
  }

  function resumeChatState(saved) {
    state.selectedPersona = saved.selectedPersona;
    state.selectedScenario = saved.selectedScenario;
    state.selectedAcademy = saved.selectedAcademy;
    state.chatMode = saved.chatMode;
    state.messages = saved.messages;
    state.sessionId = saved.sessionId;
    state.sessionStartTime = saved.sessionStartTime;
    state.elapsedSeconds = saved.elapsedSeconds;
    state.isTyping = false;
    state.scoreReport = null;
    clearChatState();
    navigate('chat');
    // Resume timer
    state.timerInterval = setInterval(function() {
      state.elapsedSeconds++;
      var timerEl = document.getElementById('rplTimer');
      if (timerEl) timerEl.textContent = formatTime(state.elapsedSeconds);
      if (data) {
        var modeConfig = data.scoringRubric.modes[state.chatMode];
        if (modeConfig.timeLimit && state.elapsedSeconds >= modeConfig.timeLimit) {
          clearInterval(state.timerInterval);
          endSession();
        }
      }
    }, 1000);
  }

  function navigate(page, opts) {
    opts = opts || {};
    // Clear timer if leaving chat
    if (state.currentPage === 'chat' && page !== 'chat' && page !== 'score') {
      clearInterval(state.timerInterval);
    }
    state.currentPage = page;
    if (opts.academy) state.selectedAcademy = opts.academy;
    if (opts.lesson) state.selectedLesson = opts.lesson;
    if (opts.persona) state.selectedPersona = opts.persona;
    if (opts.scenario) state.selectedScenario = opts.scenario;
    render();
  }

  function goBack() {
    const map = {
      academy: 'home',
      lesson: 'academy',
      personas: 'home',
      scenarios: 'home',
      chat: 'scenarios',
      score: 'home',
      dashboard: 'home'
    };
    const target = map[state.currentPage] || 'home';
    navigate(target);
  }

  // ===================================================================
  // 9. MAIN RENDER
  // ===================================================================
  function render() {
    if (!container) return;
    container.innerHTML = '';

    const root = document.createElement('div');
    root.className = 'rpl-root';

    // Top bar (not on home page)
    if (state.currentPage !== 'home') {
      root.appendChild(renderTopBar());
    }

    // Page content
    const pageEl = document.createElement('div');
    pageEl.className = state.currentPage === 'chat' ? '' : 'rpl-page';

    switch(state.currentPage) {
      case 'home':      pageEl.appendChild(renderHome()); break;
      case 'academy':   pageEl.appendChild(renderAcademy()); break;
      case 'lesson':    pageEl.appendChild(renderLesson()); break;
      case 'personas':  pageEl.appendChild(renderPersonas()); break;
      case 'scenarios': pageEl.appendChild(renderScenarios()); break;
      case 'chat':      pageEl.appendChild(renderChat()); break;
      case 'score':     pageEl.appendChild(renderScore()); break;
      case 'dashboard': pageEl.appendChild(renderDashboard()); break;
      default:          pageEl.appendChild(renderHome());
    }

    root.appendChild(pageEl);
    container.appendChild(root);
  }

  function renderTopBar() {
    const bar = document.createElement('div');
    bar.className = 'rpl-topbar';

    const titles = {
      academy: findAcademy(state.selectedAcademy) ? findAcademy(state.selectedAcademy).name : 'Academy',
      lesson: 'Bài học',
      personas: 'Thư viện Persona',
      scenarios: 'Kịch bản luyện tập',
      chat: 'Role-Play',
      score: 'Kết quả',
      dashboard: 'Dashboard'
    };

    bar.innerHTML = `
      <button class="rpl-topbar-back" id="rplBack">←</button>
      <div class="rpl-topbar-title">${esc(titles[state.currentPage] || '')}</div>
    `;

    bar.querySelector('#rplBack').addEventListener('click', function() {
      if (state.currentPage === 'chat') {
        if (confirm('Bạn có muốn rời phiên luyện tập? Dữ liệu sẽ không được lưu.')) goBack();
      } else {
        goBack();
      }
    });
    return bar;
  }

  // ===================================================================
  // 10. HOME PAGE
  // ===================================================================
  function renderHome() {
    const frag = document.createElement('div');

    // Employee greeting
    var employee = getEmployeeSession();
    if (employee) {
      const empBar = document.createElement('div');
      empBar.className = 'rpl-card';
      empBar.style.cssText = 'padding:10px 16px;margin-bottom:12px;background:linear-gradient(135deg,#EEF2FF,#F0FDF4);border-left:3px solid #4F46E5';
      empBar.innerHTML = '<div style="font-weight:600;font-size:13px">👋 Xin chào, ' + esc(employee.name) + '</div>' +
        '<div class="rpl-text-sm rpl-text-muted">' + esc(employee.bu || '') + (employee.position ? ' • ' + esc(employee.position) : '') + '</div>';
      frag.appendChild(empBar);
    }

    // Hero
    const hero = document.createElement('div');
    hero.className = 'rpl-hero';
    hero.innerHTML = `
      <div class="rpl-hero-icon">🤖</div>
      <h1>AI Role-Play Lab</h1>
      <p>Luyện tư vấn với AI — Scale training, không cần Leader ngồi kèm</p>
    `;
    frag.appendChild(hero);

    // Stats
    const statsRow = document.createElement('div');
    statsRow.className = 'rpl-stats-row';
    const totalSess = getTotalSessions();
    const avgScore = getAverageScore();
    const streak = getStreak();
    statsRow.innerHTML = `
      <div class="rpl-stat-item">
        <div class="rpl-stat-num">${totalSess}</div>
        <div class="rpl-stat-label">Phiên đã chơi</div>
      </div>
      <div class="rpl-stat-item">
        <div class="rpl-stat-num">${avgScore || '—'}</div>
        <div class="rpl-stat-label">Điểm TB</div>
      </div>
      <div class="rpl-stat-item">
        <div class="rpl-stat-num">${streak}</div>
        <div class="rpl-stat-label">Streak ngày</div>
      </div>
    `;
    frag.appendChild(statsRow);

    // Academy cards
    const title1 = document.createElement('div');
    title1.className = 'rpl-section-title';
    title1.textContent = '📚 Chọn Academy';
    frag.appendChild(title1);

    const acCards = document.createElement('div');
    acCards.className = 'rpl-academy-cards';
    data.academies.forEach(function(ac) {
      const completed = countCompletedLessons(ac.id);
      const total = ac.lessons.length;
      const pct = total > 0 ? Math.round(completed / total * 100) : 0;
      const card = document.createElement('div');
      card.className = 'rpl-card rpl-card--clickable rpl-academy-card';
      card.style.borderLeftColor = ac.color;
      card.innerHTML = `
        <div class="rpl-ac-icon">${ac.icon}</div>
        <div class="rpl-ac-name">${esc(ac.name)}</div>
        <div class="rpl-ac-desc">${esc(ac.description).substring(0, 80)}...</div>
        <div class="rpl-progress-bar"><div class="rpl-progress-fill" style="width:${pct}%;background:${ac.color}"></div></div>
        <div class="rpl-text-sm rpl-text-muted" style="margin-top:4px">${completed}/${total} bài học</div>
      `;
      card.addEventListener('click', function() { navigate('academy', { academy: ac.id }); });
      acCards.appendChild(card);
    });
    frag.appendChild(acCards);

    // Quick actions
    const title2 = document.createElement('div');
    title2.className = 'rpl-section-title';
    title2.textContent = '⚡ Luyện ngay';
    frag.appendChild(title2);

    const actions = document.createElement('div');
    actions.className = 'rpl-quick-actions';
    actions.innerHTML = `
      <button class="rpl-btn rpl-btn--primary rpl-btn--lg" id="rplQuickPlay">🎯 Bắt đầu Role-Play</button>
    `;
    frag.appendChild(actions);

    // Bottom links
    const links = document.createElement('div');
    links.className = 'rpl-quick-actions';
    links.style.marginTop = '8px';
    links.innerHTML = `
      <button class="rpl-btn rpl-btn--ghost rpl-btn--sm" id="rplNavPersonas">👥 Persona</button>
      <button class="rpl-btn rpl-btn--ghost rpl-btn--sm" id="rplNavScenarios">📋 Kịch bản</button>
      <button class="rpl-btn rpl-btn--ghost rpl-btn--sm" id="rplNavDash">📊 Dashboard</button>
    `;
    frag.appendChild(links);

    // Event listeners (defer to after DOM attached)
    setTimeout(function() {
      var el;
      el = document.getElementById('rplQuickPlay');
      if (el) el.addEventListener('click', function() { navigate('scenarios'); });
      el = document.getElementById('rplNavPersonas');
      if (el) el.addEventListener('click', function() { navigate('personas'); });
      el = document.getElementById('rplNavScenarios');
      if (el) el.addEventListener('click', function() { navigate('scenarios'); });
      el = document.getElementById('rplNavDash');
      if (el) el.addEventListener('click', function() { navigate('dashboard'); });
    }, 0);

    return frag;
  }

  // ===================================================================
  // 11. ACADEMY PAGE
  // ===================================================================
  function renderAcademy() {
    const frag = document.createElement('div');
    const ac = findAcademy(state.selectedAcademy);
    if (!ac) {
      frag.innerHTML = '<div class="rpl-empty"><div class="rpl-empty-icon">❓</div><p>Academy không tồn tại</p></div>';
      return frag;
    }

    // Header
    const header = document.createElement('div');
    header.className = 'rpl-academy-header';
    header.innerHTML = `
      <div class="rpl-academy-header-icon">${ac.icon}</div>
      <div class="rpl-academy-header-info">
        <h2>${esc(ac.name)}</h2>
        <p>${esc(ac.description)}</p>
      </div>
    `;
    frag.appendChild(header);

    // Why matters
    if (ac.whyMatters) {
      const why = document.createElement('div');
      why.className = 'rpl-card rpl-mb-16';
      why.innerHTML = '<div style="font-weight:600;margin-bottom:6px">🎯 Vì sao quan trọng?</div><div class="rpl-text-sm" style="white-space:pre-line;color:var(--rpl-muted)">' + esc(ac.whyMatters) + '</div>';
      frag.appendChild(why);
    }

    // Progress
    const completed = countCompletedLessons(ac.id);
    const total = ac.lessons.length;
    const pct = total > 0 ? Math.round(completed / total * 100) : 0;
    const progBar = document.createElement('div');
    progBar.className = 'rpl-mb-16';
    progBar.innerHTML = `
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
        <span>Tiến độ</span><span style="font-weight:600">${completed}/${total} bài học (${pct}%)</span>
      </div>
      <div class="rpl-progress-bar" style="height:8px"><div class="rpl-progress-fill" style="width:${pct}%;background:${ac.color}"></div></div>
    `;
    frag.appendChild(progBar);

    // Lesson list
    const list = document.createElement('div');
    list.className = 'rpl-lesson-list';
    ac.lessons.forEach(function(lesson, idx) {
      const done = !!state.progress.lessonsCompleted[lesson.id];
      const card = document.createElement('div');
      card.className = 'rpl-lesson-card';
      card.innerHTML = `
        <div class="rpl-lc-icon">${lesson.icon}</div>
        <div class="rpl-lc-num ${done ? 'done' : ''}">${done ? '✓' : (idx + 1)}</div>
        <div class="rpl-lc-info">
          <div class="rpl-lc-title">${esc(lesson.title)}</div>
        </div>
        <div class="rpl-lc-arrow">›</div>
      `;
      card.addEventListener('click', function() {
        navigate('lesson', { lesson: lesson.id });
      });
      list.appendChild(card);
    });
    frag.appendChild(list);

    // Footer — Role-Play CTA
    const footer = document.createElement('div');
    footer.className = 'rpl-academy-footer';
    if (pct < 100) {
      footer.innerHTML = `
        <p>💡 Khuyến khích hoàn thành bài học trước khi Role-Play để đạt kết quả tốt nhất!</p>
        <button class="rpl-btn rpl-btn--primary" id="rplStartRP">🎯 Bắt đầu Role-Play</button>
      `;
    } else {
      footer.innerHTML = `
        <p>🎉 Bạn đã hoàn thành tất cả bài học! Sẵn sàng luyện tập!</p>
        <button class="rpl-btn rpl-btn--primary" id="rplStartRP">🚀 Bắt đầu Role-Play</button>
      `;
    }
    frag.appendChild(footer);

    setTimeout(function() {
      var el = document.getElementById('rplStartRP');
      if (el) el.addEventListener('click', function() {
        state.filters.product = ac.id === 'duhoc' ? 'duhoc' : 'danghanh';
        navigate('scenarios');
      });
    }, 0);

    return frag;
  }

  // ===================================================================
  // 12. LESSON PAGE
  // ===================================================================
  function renderLesson() {
    const frag = document.createElement('div');
    // Find lesson across all academies
    let lesson = null;
    let academy = null;
    let lessonIdx = -1;
    data.academies.forEach(function(ac) {
      ac.lessons.forEach(function(l, i) {
        if (l.id === state.selectedLesson) {
          lesson = l;
          academy = ac;
          lessonIdx = i;
        }
      });
    });

    if (!lesson) {
      frag.innerHTML = '<div class="rpl-empty"><div class="rpl-empty-icon">❓</div><p>Bài học không tồn tại</p></div>';
      return frag;
    }

    // Breadcrumb
    const bc = document.createElement('div');
    bc.className = 'rpl-breadcrumb';
    bc.innerHTML = `
      <a id="rplBcHome">Home</a><span class="sep"></span>
      <a id="rplBcAcademy">${esc(academy.name)}</a><span class="sep"></span>
      <span>${esc(lesson.title)}</span>
    `;
    frag.appendChild(bc);

    // Header
    const header = document.createElement('div');
    header.className = 'rpl-lesson-header';
    header.innerHTML = `<h2>${lesson.icon} ${esc(lesson.title)}</h2>
    <div class="rpl-text-sm rpl-text-muted">Bài ${lessonIdx + 1}/${academy.lessons.length}</div>`;
    frag.appendChild(header);

    // Content
    const content = document.createElement('div');
    content.className = 'rpl-lesson-content';
    content.innerHTML = lesson.content;
    frag.appendChild(content);

    // Quiz
    if (lesson.quiz && lesson.quiz.length > 0) {
      const quizSec = document.createElement('div');
      quizSec.className = 'rpl-quiz-section';
      quizSec.innerHTML = '<h3>📝 Kiểm tra nhanh</h3>';

      lesson.quiz.forEach(function(q, qi) {
        const qDiv = document.createElement('div');
        qDiv.className = 'rpl-quiz-q';
        qDiv.innerHTML = '<div class="rpl-quiz-q-text">' + (qi + 1) + '. ' + esc(q.q) + '</div>';
        const optsDiv = document.createElement('div');
        optsDiv.className = 'rpl-quiz-opts';

        const explainDiv = document.createElement('div');
        explainDiv.className = 'rpl-quiz-explain';
        explainDiv.textContent = q.explanation || '';

        q.options.forEach(function(opt, oi) {
          const optBtn = document.createElement('div');
          optBtn.className = 'rpl-quiz-opt';
          optBtn.textContent = opt;
          optBtn.addEventListener('click', function() {
            // Disable all opts
            optsDiv.querySelectorAll('.rpl-quiz-opt').forEach(function(el) {
              el.classList.add('disabled');
            });
            if (oi === q.correct) {
              optBtn.classList.add('correct');
            } else {
              optBtn.classList.add('wrong');
              optsDiv.children[q.correct].classList.add('correct');
            }
            explainDiv.classList.add('show');
            // Save quiz result
            if (!state.progress.quizScores[lesson.id]) state.progress.quizScores[lesson.id] = {};
            state.progress.quizScores[lesson.id]['q' + qi] = (oi === q.correct);
            saveProgress();
          });
          optsDiv.appendChild(optBtn);
        });

        qDiv.appendChild(optsDiv);
        qDiv.appendChild(explainDiv);
        quizSec.appendChild(qDiv);
      });
      frag.appendChild(quizSec);
    }

    // Complete button
    const done = !!state.progress.lessonsCompleted[lesson.id];
    const completeBtn = document.createElement('button');
    completeBtn.className = 'rpl-btn rpl-btn--primary rpl-btn--full rpl-mb-16';
    completeBtn.textContent = done ? '✅ Đã hoàn thành' : '✅ Hoàn thành bài học';
    if (done) completeBtn.style.background = '#34c759';
    completeBtn.addEventListener('click', function() {
      state.progress.lessonsCompleted[lesson.id] = true;
      saveProgress();
      completeBtn.textContent = '✅ Đã hoàn thành';
      completeBtn.style.background = '#34c759';
    });
    frag.appendChild(completeBtn);

    // Nav: prev/next
    const nav = document.createElement('div');
    nav.className = 'rpl-lesson-nav';
    const prevLesson = lessonIdx > 0 ? academy.lessons[lessonIdx - 1] : null;
    const nextLesson = lessonIdx < academy.lessons.length - 1 ? academy.lessons[lessonIdx + 1] : null;

    if (prevLesson) {
      const prevBtn = document.createElement('button');
      prevBtn.className = 'rpl-btn rpl-btn--ghost';
      prevBtn.textContent = '← ' + prevLesson.title;
      prevBtn.addEventListener('click', function() { navigate('lesson', { lesson: prevLesson.id }); });
      nav.appendChild(prevBtn);
    } else {
      nav.appendChild(document.createElement('span'));
    }
    if (nextLesson) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'rpl-btn rpl-btn--secondary';
      nextBtn.textContent = nextLesson.title + ' →';
      nextBtn.addEventListener('click', function() { navigate('lesson', { lesson: nextLesson.id }); });
      nav.appendChild(nextBtn);
    }
    frag.appendChild(nav);

    // Bind breadcrumb
    setTimeout(function() {
      var el;
      el = document.getElementById('rplBcHome');
      if (el) el.addEventListener('click', function() { navigate('home'); });
      el = document.getElementById('rplBcAcademy');
      if (el) el.addEventListener('click', function() { navigate('academy', { academy: academy.id }); });
    }, 0);

    return frag;
  }

  // ===================================================================
  // 13. PERSONAS PAGE
  // ===================================================================
  function renderPersonas() {
    const frag = document.createElement('div');

    frag.innerHTML = '<div class="rpl-section-title rpl-mb-8">👥 Thư viện Persona</div><p class="rpl-text-sm rpl-text-muted rpl-mb-16">Chọn persona để xem chi tiết hoặc bắt đầu luyện tập</p>';

    // Filters
    const filterRow = document.createElement('div');
    filterRow.className = 'rpl-filter-row';
    var filterOpts = [
      { key: 'all', label: 'Tất cả' },
      { key: 'duhoc', label: '✈️ Du Học' },
      { key: 'danghanh', label: '🎯 Đa Ngành' }
    ];
    filterOpts.forEach(function(f) {
      const btn = document.createElement('button');
      btn.className = 'rpl-filter-btn' + (state.filters.product === f.key ? ' active' : '');
      btn.textContent = f.label;
      btn.addEventListener('click', function() {
        state.filters.product = f.key;
        render();
      });
      filterRow.appendChild(btn);
    });
    // Difficulty filter
    var diffOpts = [
      { key: 'all', label: 'Mọi độ khó' },
      { key: 'easy', label: '🟢 Dễ' },
      { key: 'medium', label: '🟡 TB' },
      { key: 'hard', label: '🔴 Khó' },
      { key: 'boss', label: '💀 Boss' }
    ];
    diffOpts.forEach(function(f) {
      const btn = document.createElement('button');
      btn.className = 'rpl-filter-btn' + (state.filters.difficulty === f.key ? ' active' : '');
      btn.textContent = f.label;
      btn.addEventListener('click', function() {
        state.filters.difficulty = f.key;
        render();
      });
      filterRow.appendChild(btn);
    });
    frag.appendChild(filterRow);

    // Grid
    const grid = document.createElement('div');
    grid.className = 'rpl-persona-grid';
    var filtered = data.personas.filter(function(p) {
      if (state.filters.product !== 'all' && p.product !== state.filters.product) return false;
      if (state.filters.difficulty !== 'all' && p.difficulty !== state.filters.difficulty) return false;
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="rpl-empty" style="grid-column:1/-1"><div class="rpl-empty-icon">🔍</div><p>Không tìm thấy persona phù hợp</p></div>';
    } else {
      filtered.forEach(function(p) {
        const card = document.createElement('div');
        card.className = 'rpl-card rpl-card--clickable rpl-persona-card';
        card.innerHTML = `
          <div class="rpl-persona-avatar">${p.avatar}</div>
          <div class="rpl-persona-name">${esc(p.name)}</div>
          <div class="rpl-persona-tag">${esc(p.tagline)}</div>
          <span class="rpl-badge ${getDifficultyClass(p.difficulty)}">${DIFFICULTY_LABELS[p.difficulty]}</span>
          <span class="rpl-badge ${getProductClass(p.product)}" style="margin-left:4px">${getProductLabel(p.product)}</span>
        `;
        card.addEventListener('click', function() { showPersonaModal(p.id); });
        grid.appendChild(card);
      });
    }
    frag.appendChild(grid);
    return frag;
  }

  function showPersonaModal(personaId) {
    const p = findPersona(personaId);
    if (!p) return;

    const overlay = document.createElement('div');
    overlay.className = 'rpl-modal-overlay';
    overlay.innerHTML = `
      <div class="rpl-modal">
        <button class="rpl-modal-close" id="rplModalClose">✕</button>
        <div style="text-align:center;margin-bottom:16px">
          <div style="font-size:48px">${p.avatar}</div>
          <h2 style="margin:8px 0 4px">${esc(p.name)}</h2>
          <p class="rpl-text-muted">${esc(p.tagline)}</p>
          <span class="rpl-badge ${getDifficultyClass(p.difficulty)}">${DIFFICULTY_LABELS[p.difficulty]}</span>
          <span class="rpl-badge ${getProductClass(p.product)}" style="margin-left:4px">${getProductLabel(p.product)}</span>
        </div>
        <div style="font-size:13px;line-height:1.6">
          <p><strong>👨‍👩‍👧 Gia đình:</strong> ${esc(p.profile.familyDesc)}</p>
          <p><strong>👧 Con:</strong> ${esc(p.profile.childAge)}</p>
          <p><strong>❓ Lo lắng chính:</strong> ${esc(p.profile.mainConcern)}</p>
          <p><strong>😨 Nỗi sợ:</strong> ${esc(p.profile.mainFear)}</p>
          <p><strong>💬 Phong cách:</strong> ${esc(p.profile.communicationStyle)}</p>
          <p><strong>💰 Sẵn sàng chi:</strong> ${'⭐'.repeat(p.profile.willingnessToPay)}${'☆'.repeat(5 - p.profile.willingnessToPay)}</p>
          <p><strong>🤝 Mức tin tưởng:</strong> ${'⭐'.repeat(p.profile.trustLevel)}${'☆'.repeat(5 - p.profile.trustLevel)}</p>
          <div style="margin-top:12px"><strong>⚡ Objections thường gặp:</strong></div>
          <ul>${p.objections.map(function(o) { return '<li>' + esc(o) + '</li>'; }).join('')}</ul>
        </div>
        <div style="margin-top:16px;text-align:center">
          <button class="rpl-btn rpl-btn--primary" id="rplModalPlay">🎯 Luyện với ${esc(p.name)}</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) overlay.remove();
    });
    overlay.querySelector('#rplModalClose').addEventListener('click', function() { overlay.remove(); });
    overlay.querySelector('#rplModalPlay').addEventListener('click', function() {
      overlay.remove();
      state.selectedPersona = p.id;
      // Find matching scenarios
      const matching = data.scenarios.filter(function(s) { return s.product === p.product; });
      if (matching.length > 0) {
        showPreChatModal(p.id, matching[0].id);
      }
    });
  }

  // ===================================================================
  // 14. SCENARIOS PAGE
  // ===================================================================
  function renderScenarios() {
    const frag = document.createElement('div');
    frag.innerHTML = '<div class="rpl-section-title rpl-mb-8">📋 Kịch bản luyện tập</div><p class="rpl-text-sm rpl-text-muted rpl-mb-16">Chọn kịch bản để bắt đầu role-play</p>';

    // Filters
    const filterRow = document.createElement('div');
    filterRow.className = 'rpl-filter-row';
    [
      { key: 'all', label: 'Tất cả' },
      { key: 'duhoc', label: '✈️ Du Học' },
      { key: 'danghanh', label: '🎯 Đa Ngành' }
    ].forEach(function(f) {
      const btn = document.createElement('button');
      btn.className = 'rpl-filter-btn' + (state.filters.product === f.key ? ' active' : '');
      btn.textContent = f.label;
      btn.addEventListener('click', function() {
        state.filters.product = f.key;
        render();
      });
      filterRow.appendChild(btn);
    });
    frag.appendChild(filterRow);

    // Stage filter
    const stageFilter = document.createElement('div');
    stageFilter.className = 'rpl-filter-row';
    [{ key: 'all', label: 'Mọi giai đoạn' }].concat(
      Object.keys(STAGE_LABELS).map(function(k) { return { key: k, label: STAGE_LABELS[k] }; })
    ).forEach(function(f) {
      const btn = document.createElement('button');
      btn.className = 'rpl-filter-btn' + (state.filters.stage === f.key ? ' active' : '');
      btn.textContent = f.label;
      btn.addEventListener('click', function() {
        state.filters.stage = f.key;
        render();
      });
      stageFilter.appendChild(btn);
    });
    frag.appendChild(stageFilter);

    // Group by stage
    var filtered = data.scenarios.filter(function(s) {
      if (state.filters.product !== 'all' && s.product !== state.filters.product) return false;
      if (state.filters.stage !== 'all' && s.stage !== state.filters.stage) return false;
      return true;
    });

    var grouped = {};
    filtered.forEach(function(s) {
      if (!grouped[s.stage]) grouped[s.stage] = [];
      grouped[s.stage].push(s);
    });

    var stageOrder = ['opening', 'discovery', 'value', 'objection', 'closing'];
    stageOrder.forEach(function(stage) {
      if (!grouped[stage] || grouped[stage].length === 0) return;
      const group = document.createElement('div');
      group.className = 'rpl-stage-group';
      group.innerHTML = '<div class="rpl-stage-title">' + STAGE_LABELS[stage] + '</div>';

      grouped[stage].forEach(function(s) {
        const sugPersona = findPersona(s.suggestedPersona);
        const bestScore = state.progress.bestScores[s.id];
        const card = document.createElement('div');
        card.className = 'rpl-card rpl-card--clickable rpl-scenario-card';
        card.innerHTML = `
          <div class="rpl-sc-info">
            <div class="rpl-sc-name">${esc(s.name)}</div>
            <div class="rpl-sc-meta">
              <span class="rpl-badge ${getProductClass(s.product)}">${getProductLabel(s.product)}</span>
              ${sugPersona ? '<span class="rpl-text-sm rpl-text-muted">' + sugPersona.avatar + ' ' + esc(sugPersona.name) + '</span>' : ''}
              ${bestScore ? '<span class="rpl-badge rpl-badge--completed">' + bestScore + ' điểm</span>' : ''}
            </div>
          </div>
          <div class="rpl-sc-action"><span class="rpl-btn rpl-btn--sm rpl-btn--primary">Luyện</span></div>
        `;
        card.addEventListener('click', function() {
          showPreChatModal(s.suggestedPersona, s.id);
        });
        group.appendChild(card);
      });
      frag.appendChild(group);
    });

    if (filtered.length === 0) {
      frag.innerHTML += '<div class="rpl-empty"><div class="rpl-empty-icon">🔍</div><p>Không tìm thấy kịch bản phù hợp</p></div>';
    }

    return frag;
  }

  // ===================================================================
  // 15. PRE-CHAT MODAL (Persona + Mode selection)
  // ===================================================================
  function showPreChatModal(personaId, scenarioId) {
    const scenario = findScenario(scenarioId);
    if (!scenario) return;
    const product = scenario.product;
    const compatiblePersonas = data.personas.filter(function(p) { return p.product === product; });
    let chosenPersonaId = personaId || (compatiblePersonas[0] ? compatiblePersonas[0].id : null);
    let chosenMode = 'practice';

    const overlay = document.createElement('div');
    overlay.className = 'rpl-modal-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;background:rgba(0,0,0,0.65);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;';

    function renderModal() {
      const persona = findPersona(chosenPersonaId);
      overlay.innerHTML = `
        <div class="rpl-modal" style="background:#fff;border-radius:16px;max-width:500px;width:100%;max-height:85vh;overflow-y:auto;padding:24px;box-shadow:0 20px 60px rgba(0,0,0,0.3);position:relative;">
          <button class="rpl-modal-close" id="rplPreClose" style="position:absolute;top:12px;right:12px;background:none;border:none;font-size:20px;cursor:pointer;">✕</button>
          <h2 style="margin:0 0 4px;font-size:18px">🎯 Thiết lập phiên Role-Play</h2>
          <p class="rpl-text-sm rpl-text-muted rpl-mb-16">${esc(scenario.name)}</p>

          <div class="rpl-mb-16">
            <div style="font-weight:600;font-size:13px;margin-bottom:8px">Chọn Persona:</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              ${compatiblePersonas.map(function(p) {
                return '<button class="rpl-filter-btn' + (p.id === chosenPersonaId ? ' active' : '') + '" data-pid="' + p.id + '">' + p.avatar + ' ' + esc(p.name) + ' <span class="rpl-badge ' + getDifficultyClass(p.difficulty) + '" style="margin-left:4px;font-size:10px">' + DIFFICULTY_LABELS[p.difficulty] + '</span></button>';
              }).join('')}
            </div>
          </div>

          ${persona ? '<div class="rpl-card rpl-mb-16" style="font-size:12px;padding:12px"><strong>' + persona.avatar + ' ' + esc(persona.name) + '</strong> — ' + esc(persona.tagline) + '<br><span class="rpl-text-muted">' + esc(persona.profile.mainConcern) + '</span></div>' : ''}

          <div class="rpl-mb-16">
            <div style="font-weight:600;font-size:13px;margin-bottom:8px">Chế độ chơi:</div>
            <div class="rpl-mode-select">
              <div class="rpl-mode-opt ${chosenMode === 'practice' ? 'active' : ''}" data-mode="practice">
                <div class="mode-icon">📝</div>
                <div class="mode-name">Luyện tập</div>
                <div class="mode-desc">Có gợi ý, không giới hạn</div>
              </div>
              <div class="rpl-mode-opt ${chosenMode === 'exam' ? 'active' : ''}" data-mode="exam">
                <div class="mode-icon">📋</div>
                <div class="mode-name">Thi thử</div>
                <div class="mode-desc">Không gợi ý, 15 phút</div>
              </div>
              <div class="rpl-mode-opt ${chosenMode === 'boss' ? 'active' : ''}" data-mode="boss">
                <div class="mode-icon">💀</div>
                <div class="mode-name">Boss Fight</div>
                <div class="mode-desc">Cực khó, 10 phút</div>
              </div>
            </div>
          </div>

          <div style="text-align:center">
            <button class="rpl-btn rpl-btn--primary rpl-btn--lg rpl-btn--full" id="rplStartChat">🚀 Bắt đầu</button>
          </div>
        </div>
      `;

      // Bind events
      overlay.querySelectorAll('[data-pid]').forEach(function(btn) {
        btn.addEventListener('click', function() {
          chosenPersonaId = btn.dataset.pid;
          renderModal();
        });
      });
      overlay.querySelectorAll('[data-mode]').forEach(function(el) {
        el.addEventListener('click', function() {
          chosenMode = el.dataset.mode;
          renderModal();
        });
      });
      overlay.querySelector('#rplPreClose').addEventListener('click', function() { overlay.remove(); });
      overlay.querySelector('#rplStartChat').addEventListener('click', function() {
        overlay.remove();
        startChatSession(chosenPersonaId, scenarioId, chosenMode);
      });
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) overlay.remove();
      });
    }

    renderModal();
    document.body.appendChild(overlay);
  }

  // ===================================================================
  // 16. CHAT SESSION
  // ===================================================================
  function startChatSession(personaId, scenarioId, mode) {
    const scenario = findScenario(scenarioId);
    const persona = findPersona(personaId);
    if (!scenario || !persona) return;

    state.selectedPersona = personaId;
    state.selectedScenario = scenarioId;
    state.chatMode = mode;
    state.sessionId = generateId();
    state.sessionStartTime = Date.now();
    state.elapsedSeconds = 0;
    state.isTyping = false;
    state.isScoring = false;
    state.scoreReport = null;

    // Initial message from persona (AI)
    state.messages = [
      { role: 'assistant', content: scenario.openingMessage, time: new Date().toISOString() }
    ];

    navigate('chat');
    saveChatState();

    // Start timer
    state.timerInterval = setInterval(function() {
      state.elapsedSeconds++;
      var timerEl = document.getElementById('rplTimer');
      if (timerEl) timerEl.textContent = formatTime(state.elapsedSeconds);
      // Check time limit for exam/boss
      var modeConfig = data.scoringRubric.modes[state.chatMode];
      if (modeConfig.timeLimit && state.elapsedSeconds >= modeConfig.timeLimit) {
        clearInterval(state.timerInterval);
        endSession();
      }
    }, 1000);
  }

  function renderChat() {
    const frag = document.createElement('div');
    const persona = findPersona(state.selectedPersona);
    const scenario = findScenario(state.selectedScenario);
    if (!persona || !scenario) {
      frag.innerHTML = '<div class="rpl-page"><div class="rpl-empty"><div class="rpl-empty-icon">❓</div><p>Phiên không hợp lệ</p></div></div>';
      return frag;
    }

    const userMsgCount = state.messages.filter(function(m) { return m.role === 'user'; }).length;
    const maxTurns = data.scoringRubric.modes[state.chatMode].maxTurns || MAX_MESSAGES;

    const wrap = document.createElement('div');
    wrap.className = 'rpl-chat-wrap';

    // Top bar
    const topbar = document.createElement('div');
    topbar.className = 'rpl-chat-topbar';
    topbar.innerHTML = `
      <div class="rpl-chat-persona-avatar">${persona.avatar}</div>
      <div class="rpl-chat-persona-info">
        <div class="rpl-chat-persona-name">${esc(persona.name)}</div>
        <div class="rpl-chat-persona-scenario">${esc(scenario.name)}</div>
      </div>
      <div class="rpl-chat-meta">
        <span class="rpl-badge rpl-badge--${state.chatMode}">${MODE_LABELS[state.chatMode]}</span>
        <span>⏱ <span id="rplTimer">${formatTime(state.elapsedSeconds)}</span></span>
        <span>💬 ${userMsgCount}/${Math.floor(maxTurns / 2)}</span>
      </div>
      <button class="rpl-chat-end-btn" id="rplEndSession">Kết thúc</button>
    `;
    wrap.appendChild(topbar);

    // Messages area
    const msgArea = document.createElement('div');
    msgArea.className = 'rpl-chat-messages';
    msgArea.id = 'rplMessages';

    // System message
    const sysMsg = document.createElement('div');
    sysMsg.className = 'rpl-msg rpl-msg--system';
    sysMsg.textContent = '🎯 ' + scenario.objective;
    msgArea.appendChild(sysMsg);

    // Messages
    state.messages.forEach(function(msg) {
      const el = document.createElement('div');
      el.className = 'rpl-msg ' + (msg.role === 'user' ? 'rpl-msg--user' : 'rpl-msg--ai');
      const label = document.createElement('div');
      label.className = 'rpl-msg-label';
      label.textContent = msg.role === 'user' ? 'Bạn (Sale)' : persona.name + ' (PH)';
      el.appendChild(label);
      const text = document.createElement('div');
      text.textContent = msg.content;
      el.appendChild(text);
      msgArea.appendChild(el);
    });

    // Typing indicator
    if (state.isTyping) {
      const typing = document.createElement('div');
      typing.className = 'rpl-typing';
      typing.innerHTML = '<div class="rpl-typing-dot"></div><div class="rpl-typing-dot"></div><div class="rpl-typing-dot"></div>';
      msgArea.appendChild(typing);
    }

    wrap.appendChild(msgArea);

    // Hint area
    const hintArea = document.createElement('div');
    hintArea.id = 'rplHintArea';
    wrap.appendChild(hintArea);

    // Input area
    const inputArea = document.createElement('div');
    inputArea.className = 'rpl-chat-input-area';

    if (state.chatMode === 'practice') {
      const hintBtn = document.createElement('button');
      hintBtn.className = 'rpl-hint-btn';
      hintBtn.textContent = '💡 Gợi ý';
      hintBtn.id = 'rplHintBtn';
      inputArea.appendChild(hintBtn);
    }

    const input = document.createElement('textarea');
    input.className = 'rpl-chat-input';
    input.id = 'rplChatInput';
    input.placeholder = 'Nhập tin nhắn...';
    input.rows = 1;
    input.disabled = state.isTyping;
    inputArea.appendChild(input);

    const sendBtn = document.createElement('button');
    sendBtn.className = 'rpl-chat-send';
    sendBtn.id = 'rplSendBtn';
    sendBtn.innerHTML = '↑';
    sendBtn.disabled = state.isTyping;
    inputArea.appendChild(sendBtn);

    wrap.appendChild(inputArea);
    frag.appendChild(wrap);

    // Event binding
    setTimeout(function() {
      var msgAreaEl = document.getElementById('rplMessages');
      if (msgAreaEl) msgAreaEl.scrollTop = msgAreaEl.scrollHeight;

      var sendBtnEl = document.getElementById('rplSendBtn');
      var inputEl = document.getElementById('rplChatInput');

      function handleSend() {
        if (!inputEl || state.isTyping) return;
        var text = inputEl.value.trim();
        if (!text) return;
        sendUserMessage(text);
      }

      if (sendBtnEl) sendBtnEl.addEventListener('click', handleSend);
      if (inputEl) {
        inputEl.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        });
        // Auto-resize
        inputEl.addEventListener('input', function() {
          inputEl.style.height = 'auto';
          inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + 'px';
        });
        inputEl.focus();
      }

      var endEl = document.getElementById('rplEndSession');
      if (endEl) endEl.addEventListener('click', function() {
        if (state.messages.filter(function(m) { return m.role === 'user'; }).length < 2) {
          if (!confirm('Bạn mới trả lời ít. Chắc chắn muốn kết thúc?')) return;
        }
        endSession();
      });

      var hintEl = document.getElementById('rplHintBtn');
      if (hintEl) hintEl.addEventListener('click', requestHint);
    }, 0);

    return frag;
  }

  async function sendUserMessage(text) {
    // Guard: prevent double send while AI is typing
    if (state.isTyping) return;
    // Guard: prevent send during scoring
    if (state.isScoring) return;

    const maxTurns = data.scoringRubric.modes[state.chatMode].maxTurns || MAX_MESSAGES;
    const totalMsgs = state.messages.length;

    if (totalMsgs >= maxTurns) {
      endSession();
      return;
    }

    // Add user message
    state.messages.push({ role: 'user', content: text, time: new Date().toISOString() });
    state.isTyping = true;
    render();

    // Scroll to bottom
    setTimeout(function() {
      var el = document.getElementById('rplMessages');
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);

    try {
      // Build conversation for API — ensure alternating user/assistant after system
      var apiMessages = [];
      state.messages.forEach(function(m) {
        if (m.role === 'system') return; // skip system messages in chat
        apiMessages.push({ role: m.role, content: m.content });
      });
      // Perplexity API requires first message after system to be 'user'
      // If first msg is 'assistant' (opening), prepend a dummy user greeting
      if (apiMessages.length > 0 && apiMessages[0].role === 'assistant') {
        apiMessages.unshift({ role: 'user', content: 'Xin ch\u00e0o' });
      }

      var response = await callAI(apiMessages, buildRoleplaySystemPrompt());

      state.messages.push({ role: 'assistant', content: response, time: new Date().toISOString() });
      state.isTyping = false;
      saveChatState();

      // Check if max turns reached
      if (state.messages.length >= maxTurns) {
        state.messages.push({ role: 'system', content: '⏰ Đã đạt giới hạn tin nhắn. Phiên sẽ được chấm điểm.', time: new Date().toISOString() });
        render();
        setTimeout(function() { endSession(); }, 1500);
        return;
      }

      render();
      setTimeout(function() {
        var el = document.getElementById('rplMessages');
        if (el) el.scrollTop = el.scrollHeight;
        var inputEl = document.getElementById('rplChatInput');
        if (inputEl) inputEl.focus();
      }, 50);
    } catch(err) {
      console.error('[RolePlayLab] Chat error:', err);
      state.isTyping = false;
      state.messages.push({ role: 'assistant', content: 'Xin lỗi, hệ thống đang gặp trục trặc (' + (err.message || 'unknown') + '). Bạn thử gửi lại nhé.', time: new Date().toISOString() });
      render();
    }
  }

  async function requestHint() {
    if (state.messages.length < 2) return;
    var hintArea = document.getElementById('rplHintArea');
    if (!hintArea) return;

    hintArea.innerHTML = '<div class="rpl-hint-box">💡 Đang tạo gợi ý...</div>';

    try {
      var hintText = await callAI(
        [{ role: 'user', content: 'Cho tôi gợi ý cho tin nhắn tiếp theo.' }],
        buildHintPrompt(),
        { max_tokens: 200 }
      );
      hintArea.innerHTML = '<div class="rpl-hint-box">💡 ' + esc(hintText) + '</div>';
    } catch(e) {
      hintArea.innerHTML = '<div class="rpl-hint-box">⚠️ Không thể tạo gợi ý. Thử lại sau.</div>';
    }

    setTimeout(function() {
      if (hintArea) hintArea.innerHTML = '';
    }, 15000);
  }

  // ===================================================================
  // 17. END SESSION & SCORING
  // ===================================================================
  async function endSession() {
    // Guard: prevent double scoring
    if (state.isScoring) return;
    state.isScoring = true;
    // Clear timer
    if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
    state.isTyping = false;
    clearChatState();

    // Show loading
    state.currentPage = 'score';
    state.scoreReport = null;
    render();

    try {
      // Build transcript for scoring
      var transcriptText = state.messages
        .filter(function(m) { return m.role !== 'system'; })
        .map(function(m) {
          return (m.role === 'user' ? 'Sale' : 'PH') + ': ' + m.content;
        }).join('\n\n');

      var scoringPrompt = buildScoringPrompt();
      var scoringMessages = [
        { role: 'user', content: '=== TRANSCRIPT ===\n\n' + transcriptText + '\n\n=== HÃY CHẤM ĐIỂM ===' }
      ];

      var response = await callAI(scoringMessages, scoringPrompt, {
        temperature: 0.1,
        max_tokens: 2000
      });

      // Parse JSON from response
      var jsonMatch = response.match(/\{[\s\S]*\}/);
      var scoreData;
      if (jsonMatch) {
        try {
          scoreData = JSON.parse(jsonMatch[0]);
        } catch(parseErr) {
          try {
            var cleaned = jsonMatch[0]
              .replace(/,\s*}/g, '}')
              .replace(/,\s*]/g, ']')
              .replace(/[\x00-\x1F]+/g, ' ');
            scoreData = JSON.parse(cleaned);
          } catch(parseErr2) {
            console.error('[RolePlayLab] Score parse failed:', parseErr2, jsonMatch[0].substring(0,200));
            scoreData = { diemTongKet: 50, xepLoai: 'Trung b\u00ecnh', nhanXetTongQuat: 'H\u1ec7 th\u1ed1ng kh\u00f4ng parse \u0111\u01b0\u1ee3c \u0111i\u1ec3m chi ti\u1ebft. Vui l\u00f2ng th\u1eed l\u1ea1i.', chiTiet: {} };
          }
        }
      } else {
        console.error('[RolePlayLab] No JSON in scoring response:', response.substring(0,300));
        scoreData = { diemTongKet: 50, xepLoai: 'Trung b\u00ecnh', nhanXetTongQuat: 'H\u1ec7 th\u1ed1ng kh\u00f4ng nh\u1eadn \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 ch\u1ea5m \u0111i\u1ec3m. Vui l\u00f2ng th\u1eed l\u1ea1i.', chiTiet: {} };
      }

      state.scoreReport = scoreData;

      // Save to progress
      var sessionRecord = {
        sessionId: state.sessionId,
        date: new Date().toISOString(),
        scenarioId: state.selectedScenario,
        personaId: state.selectedPersona,
        mode: state.chatMode,
        score: scoreData.diemTongKet || 0,
        turns: state.messages.length,
        duration: state.elapsedSeconds
      };
      state.progress.sessionsPlayed.push(sessionRecord);

      // Update best score
      var currentBest = state.progress.bestScores[state.selectedScenario] || 0;
      if (scoreData.diemTongKet > currentBest) {
        state.progress.bestScores[state.selectedScenario] = scoreData.diemTongKet;
      }
      saveProgress();

      // Log to server (legacy)
      logSession({
        sessionId: state.sessionId,
        scenario: findScenario(state.selectedScenario).name,
        persona: findPersona(state.selectedPersona).name,
        mode: state.chatMode,
        score: scoreData.diemTongKet,
        turns: state.messages.length,
        duration: state.elapsedSeconds,
        transcript: state.messages
      });

      // Log to RolePlaySessions sheet (production)
      logSessionRemote(scoreData);

    } catch(err) {
      console.error('[RolePlayLab] Scoring failed:', err);
      state.scoreReport = {
        diemTongKet: 0,
        xepLoai: 'Lỗi',
        nhanXetTongQuat: 'Không thể chấm điểm phiên này. Lỗi: ' + (err.message || 'unknown'),
        chiTiet: {},
        diemManhNhat: '',
        diemYeuNhat: '',
        loiKhuyenSoMot: 'Hãy thử lại phiên khác.'
      };
    } finally {
      state.isScoring = false;
    }

    navigate('score');
    render();
  }

  // ===================================================================
  // 18. SCORE PAGE
  // ===================================================================
  function renderScore() {
    const frag = document.createElement('div');
    const report = state.scoreReport;

    // Loading state
    if (!report) {
      frag.innerHTML = `
        <div class="rpl-loading">
          <div class="rpl-loading-spinner"></div>
          <p>Đang chấm điểm phiên luyện tập...</p>
          <p class="rpl-text-sm rpl-text-muted">AI đang phân tích cuộc hội thoại của bạn</p>
        </div>
      `;
      return frag;
    }

    const score = report.diemTongKet || 0;
    const colorClass = getScoreColor(score);
    const label = report.xepLoai || getScoreLabel(score);

    // Hero score
    const hero = document.createElement('div');
    hero.className = 'rpl-score-hero';
    hero.innerHTML = `
      <div class="rpl-score-big ${colorClass}">${score}</div>
      <div class="rpl-score-label">${esc(label)}</div>
      <div class="rpl-score-sublabel">${esc(MODE_LABELS[state.chatMode])} • ${state.messages.length} tin nhắn • ${formatTime(state.elapsedSeconds)}</div>
    `;
    frag.appendChild(hero);

    // General comment
    if (report.nhanXetTongQuat) {
      const comment = document.createElement('div');
      comment.className = 'rpl-card rpl-mb-16';
      comment.innerHTML = '<div style="font-weight:600;margin-bottom:6px">📋 Nhận xét tổng quan</div><div class="rpl-text-sm">' + esc(report.nhanXetTongQuat) + '</div>';
      frag.appendChild(comment);
    }

    // Criteria breakdown + radar
    if (report.chiTiet && Object.keys(report.chiTiet).length > 0) {
      const radarWrap = document.createElement('div');
      radarWrap.className = 'rpl-radar-wrap';
      const canvas = document.createElement('canvas');
      canvas.className = 'rpl-radar-canvas';
      canvas.id = 'rplRadarCanvas';
      canvas.width = 350;
      canvas.height = 350;
      radarWrap.appendChild(canvas);
      frag.appendChild(radarWrap);

      // Criteria rows
      const criteriaSection = document.createElement('div');
      criteriaSection.className = 'rpl-section-title';
      criteriaSection.textContent = '📊 Chi tiết 8 tiêu chí';
      frag.appendChild(criteriaSection);

      const criteriaList = document.createElement('div');
      criteriaList.className = 'rpl-score-criteria';

      var criteriaMap = {
        hieuNhuCau: { name: 'Hiểu nhu cầu PH', max: 15 },
        datCauHoi: { name: 'Đặt câu hỏi khám phá', max: 10 },
        truyenTaiGiaTri: { name: 'Truyền tải giá trị', max: 20 },
        khongOverclaim: { name: 'Không overclaim', max: 10 },
        xuLyObjection: { name: 'Xử lý phản đối', max: 15 },
        taoNiemTin: { name: 'Tạo niềm tin', max: 10 },
        dieuHuongCTA: { name: 'Điều hướng CTA', max: 10 },
        vanPhong: { name: 'Văn phong', max: 10 }
      };

      var radarScores = [];
      var radarLabels = [];

      Object.keys(criteriaMap).forEach(function(key) {
        var c = report.chiTiet[key];
        var meta = criteriaMap[key];
        if (!c) return;
        var diem = c.diem || 0;
        var pct = Math.round(diem / meta.max * 100);
        var barColor = pct >= 80 ? 'var(--rpl-green)' : pct >= 60 ? 'var(--rpl-orange)' : 'var(--rpl-red)';

        radarScores.push(pct / 100);
        radarLabels.push(meta.name);

        var row = document.createElement('div');
        row.className = 'rpl-criteria-row';
        row.innerHTML = `
          <div class="rpl-criteria-name">${meta.name}</div>
          <div class="rpl-criteria-bar"><div class="rpl-criteria-fill" style="width:${pct}%;background:${barColor}"></div></div>
          <div class="rpl-criteria-score" style="color:${barColor}">${diem}/${meta.max}</div>
        `;
        // Expand on click
        if (c.nhanXet) {
          row.style.cursor = 'pointer';
          row.addEventListener('click', function() {
            var detail = row.querySelector('.rpl-criteria-detail');
            if (detail) {
              detail.remove();
            } else {
              var d = document.createElement('div');
              d.className = 'rpl-criteria-detail';
              d.style.cssText = 'font-size:12px;margin-top:8px;padding-top:8px;border-top:1px solid var(--rpl-border);width:100%;';
              d.textContent = c.nhanXet;
              row.appendChild(d);
            }
          });
        }
        criteriaList.appendChild(row);
      });
      frag.appendChild(criteriaList);

      // Draw radar chart
      setTimeout(function() {
        drawRadarChart('rplRadarCanvas', radarLabels, radarScores);
      }, 50);
    }

    // Strengths
    if (report.diemManhNhat) {
      const sec = document.createElement('div');
      sec.className = 'rpl-feedback-section';
      sec.innerHTML = `
        <div class="rpl-feedback-title">✅ Điểm mạnh nhất</div>
        <div class="rpl-feedback-item good">${esc(report.diemManhNhat)}</div>
      `;
      frag.appendChild(sec);
    }

    // Weaknesses
    if (report.diemYeuNhat) {
      const sec = document.createElement('div');
      sec.className = 'rpl-feedback-section';
      sec.innerHTML = `
        <div class="rpl-feedback-title">❌ Cần cải thiện nhất</div>
        <div class="rpl-feedback-item bad">${esc(report.diemYeuNhat)}</div>
      `;
      frag.appendChild(sec);
    }

    // Top advice
    if (report.loiKhuyenSoMot) {
      const sec = document.createElement('div');
      sec.className = 'rpl-feedback-section';
      sec.innerHTML = `
        <div class="rpl-feedback-title">💡 Lời khuyên #1</div>
        <div class="rpl-feedback-item" style="border-left:3px solid var(--rpl-blue)">${esc(report.loiKhuyenSoMot)}</div>
      `;
      frag.appendChild(sec);
    }

    // Red lines
    if (report.danhSachRedLine && report.danhSachRedLine.length > 0) {
      const sec = document.createElement('div');
      sec.className = 'rpl-feedback-section';
      sec.innerHTML = '<div class="rpl-feedback-title">🚨 Red Line Vi Phạm</div>';
      report.danhSachRedLine.forEach(function(rl) {
        var item = document.createElement('div');
        item.className = 'rpl-feedback-item bad';
        item.innerHTML = '<strong>' + esc(rl.noiDung || '') + '</strong><br>' + esc(rl.viPham || '');
        sec.appendChild(item);
      });
      frag.appendChild(sec);
    }

    // Transcript toggle
    const transcriptSection = document.createElement('div');
    transcriptSection.className = 'rpl-mb-24';
    const toggleEl = document.createElement('div');
    toggleEl.className = 'rpl-transcript-toggle';
    toggleEl.innerHTML = '📜 Xem transcript <span>▼</span>';
    const bodyEl = document.createElement('div');
    bodyEl.className = 'rpl-transcript-body';

    state.messages.forEach(function(msg) {
      if (msg.role === 'system') return;
      const msgEl = document.createElement('div');
      msgEl.className = 'rpl-transcript-msg';
      msgEl.innerHTML = `
        <div class="rpl-transcript-sender ${msg.role === 'user' ? 'sale' : 'ai'}">${msg.role === 'user' ? 'Sale' : 'Phụ huynh'}</div>
        <div>${esc(msg.content)}</div>
      `;
      bodyEl.appendChild(msgEl);
    });

    toggleEl.addEventListener('click', function() {
      bodyEl.classList.toggle('open');
      toggleEl.querySelector('span').textContent = bodyEl.classList.contains('open') ? '▲' : '▼';
    });

    transcriptSection.appendChild(toggleEl);
    transcriptSection.appendChild(bodyEl);
    frag.appendChild(transcriptSection);

    // Actions
    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;justify-content:center;';
    actions.innerHTML = `
      <button class="rpl-btn rpl-btn--primary" id="rplScoreRetry">🔄 Luyện tiếp</button>
      <button class="rpl-btn rpl-btn--ghost" id="rplScoreHome">🏠 Về trang chủ</button>
    `;
    frag.appendChild(actions);

    setTimeout(function() {
      var el;
      el = document.getElementById('rplScoreRetry');
      if (el) el.addEventListener('click', function() { navigate('scenarios'); });
      el = document.getElementById('rplScoreHome');
      if (el) el.addEventListener('click', function() { navigate('home'); });
    }, 0);

    return frag;
  }

  // ===================================================================
  // 19. RADAR CHART (Pure Canvas)
  // ===================================================================
  function drawRadarChart(canvasId, labels, values) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var cx = w / 2;
    var cy = h / 2;
    var radius = Math.min(cx, cy) - 45;
    var n = labels.length;
    if (n === 0) return;

    ctx.clearRect(0, 0, w, h);

    // Draw grid circles
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;
    for (var level = 1; level <= 4; level++) {
      var r = radius * level / 4;
      ctx.beginPath();
      for (var i = 0; i <= n; i++) {
        var angle = (Math.PI * 2 * i / n) - Math.PI / 2;
        var x = cx + r * Math.cos(angle);
        var y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 0.5;
    for (var i = 0; i < n; i++) {
      var angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
      ctx.stroke();
    }

    // Draw data polygon
    ctx.beginPath();
    ctx.fillStyle = 'rgba(227, 31, 38, 0.15)';
    ctx.strokeStyle = '#E31F26';
    ctx.lineWidth = 2;
    for (var i = 0; i <= n; i++) {
      var idx = i % n;
      var angle = (Math.PI * 2 * idx / n) - Math.PI / 2;
      var val = Math.max(0, Math.min(1, values[idx] || 0));
      var x = cx + radius * val * Math.cos(angle);
      var y = cy + radius * val * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.fill();
    ctx.stroke();

    // Draw data points
    for (var i = 0; i < n; i++) {
      var angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      var val = Math.max(0, Math.min(1, values[i] || 0));
      var x = cx + radius * val * Math.cos(angle);
      var y = cy + radius * val * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#E31F26';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Draw labels
    ctx.fillStyle = '#333';
    ctx.font = '11px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var i = 0; i < n; i++) {
      var angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      var lx = cx + (radius + 28) * Math.cos(angle);
      var ly = cy + (radius + 28) * Math.sin(angle);
      // Adjust alignment based on position
      if (Math.abs(Math.cos(angle)) > 0.5) {
        ctx.textAlign = Math.cos(angle) > 0 ? 'left' : 'right';
        lx += Math.cos(angle) > 0 ? 4 : -4;
      } else {
        ctx.textAlign = 'center';
      }
      // Wrap long labels
      var words = labels[i].split(' ');
      if (words.length > 2) {
        ctx.fillText(words.slice(0, 2).join(' '), lx, ly - 6);
        ctx.fillText(words.slice(2).join(' '), lx, ly + 6);
      } else {
        ctx.fillText(labels[i], lx, ly);
      }
    }

    // Draw percentage labels on circles
    ctx.fillStyle = '#aaa';
    ctx.font = '9px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'right';
    for (var level = 1; level <= 4; level++) {
      ctx.fillText(level * 25 + '%', cx - 4, cy - radius * level / 4 + 3);
    }
  }

  // ===================================================================
  // 20. DASHBOARD PAGE
  // ===================================================================
  function renderDashboard() {
    const frag = document.createElement('div');
    const sessions = state.progress.sessionsPlayed || [];
    const scored = sessions.filter(function(s) { return s.score > 0; });

    // Employee info + remote load button
    var employee = getEmployeeSession();
    var dashHeader = '<div class="rpl-section-title rpl-mb-16">📊 Dashboard</div>';
    if (employee) {
      dashHeader += '<div class="rpl-card" style="padding:10px 16px;margin-bottom:12px;background:#F8FAFC;display:flex;align-items:center;justify-content:space-between">' +
        '<span class="rpl-text-sm">👤 ' + esc(employee.name) + ' — ' + esc(employee.bu || '') + '</span>' +
        '<button class="rpl-btn rpl-btn--ghost rpl-btn--sm" id="rplLoadRemote" style="font-size:11px">☁️ Tải từ server</button></div>';
    }
    dashHeader += '<div id="rplRemoteStatus"></div>';
    frag.innerHTML = dashHeader;

    // Wire remote load button after DOM attach
    setTimeout(function() {
      var loadBtn = document.getElementById('rplLoadRemote');
      if (loadBtn) {
        loadBtn.addEventListener('click', function() {
          loadBtn.disabled = true;
          loadBtn.textContent = 'Đang tải...';
          var statusEl = document.getElementById('rplRemoteStatus');
          var emp = getEmployeeSession();
          var isLeader = emp && (emp.position === 'STL' || emp.position === 'FM' || emp.position === 'CM');
          var url = LOG_ENDPOINT + '?action=get_roleplay_sessions';
          if (!isLeader && emp) {
            url += '&employee_id=' + encodeURIComponent(emp.msnv);
          } else if (isLeader && emp) {
            url += '&bu=' + encodeURIComponent(emp.bu);
          }
          fetch(url).then(function(r) { return r.json(); }).then(function(result) {
            if (result.ok && result.sessions && result.sessions.length > 0) {
              var html = '<div class="rpl-section-title" style="margin:12px 0 8px">☁️ Dữ liệu từ server (' + result.sessions.length + ' phiên)</div>';
              result.sessions.slice(0, 20).forEach(function(s) {
                var scoreColor = s.totalScore >= 80 ? 'green' : s.totalScore >= 60 ? 'orange' : 'red';
                html += '<div class="rpl-card" style="padding:10px 14px;margin-bottom:6px">' +
                  '<div style="display:flex;align-items:center;gap:8px">' +
                  '<div style="flex:1;min-width:0">' +
                  '<div style="font-weight:600;font-size:12px">' + esc(s.scenarioTitle || s.scenarioId || '—') + '</div>' +
                  '<div class="rpl-text-sm rpl-text-muted">' + esc(s.personaName || '') + ' • ' + esc(s.mode || '') + (isLeader ? ' • ' + esc(s.employeeName || '') : '') + '</div></div>' +
                  '<div style="text-align:right"><div style="font-size:18px;font-weight:800;color:var(--rpl-' + scoreColor + ')">' + (s.totalScore || 0) + '</div>' +
                  '<div class="rpl-text-sm rpl-text-muted">' + (s.timestampEnd ? new Date(s.timestampEnd).toLocaleDateString('vi-VN') : '') + '</div></div></div></div>';
              });
              if (statusEl) statusEl.innerHTML = html;
            } else {
              if (statusEl) statusEl.innerHTML = '<div class="rpl-text-sm rpl-text-muted" style="text-align:center;padding:8px">Chưa có dữ liệu từ server</div>';
            }
            loadBtn.textContent = '☁️ Tải từ server';
            loadBtn.disabled = false;
          }).catch(function() {
            if (statusEl) statusEl.innerHTML = '<div class="rpl-text-sm" style="text-align:center;padding:8px;color:#DC2626">Lỗi kết nối server</div>';
            loadBtn.textContent = '☁️ Tải từ server';
            loadBtn.disabled = false;
          });
        });
      }
    }, 0);

    // Stats grid
    const grid = document.createElement('div');
    grid.className = 'rpl-dash-grid';
    const totalSess = sessions.length;
    const avgScore = scored.length > 0 ? Math.round(scored.reduce(function(a, s) { return a + s.score; }, 0) / scored.length) : 0;
    const topScore = scored.length > 0 ? Math.max.apply(null, scored.map(function(s) { return s.score; })) : 0;
    const totalTime = sessions.reduce(function(a, s) { return a + (s.duration || 0); }, 0);

    grid.innerHTML = `
      <div class="rpl-dash-stat"><div class="rpl-dash-stat-num">${totalSess}</div><div class="rpl-dash-stat-label">Phiên luyện tập</div></div>
      <div class="rpl-dash-stat"><div class="rpl-dash-stat-num">${avgScore}</div><div class="rpl-dash-stat-label">Điểm trung bình</div></div>
      <div class="rpl-dash-stat"><div class="rpl-dash-stat-num">${topScore}</div><div class="rpl-dash-stat-label">Điểm cao nhất</div></div>
      <div class="rpl-dash-stat"><div class="rpl-dash-stat-num">${formatTime(totalTime)}</div><div class="rpl-dash-stat-label">Tổng thời gian</div></div>
    `;
    frag.appendChild(grid);

    // Recent sessions
    if (sessions.length > 0) {
      const recentTitle = document.createElement('div');
      recentTitle.className = 'rpl-section-title';
      recentTitle.textContent = '📋 Phiên gần đây';
      frag.appendChild(recentTitle);

      var recentSessions = sessions.slice(-10).reverse();
      recentSessions.forEach(function(s) {
        var scenario = findScenario(s.scenarioId);
        var persona = findPersona(s.personaId);
        var card = document.createElement('div');
        card.className = 'rpl-card';
        card.style.padding = '12px 16px';
        var scoreColor = getScoreColor(s.score);
        card.innerHTML = `
          <div style="display:flex;align-items:center;gap:10px">
            <div style="font-size:24px">${persona ? persona.avatar : '👤'}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:600;font-size:13px">${scenario ? esc(scenario.name) : 'Kịch bản'}</div>
              <div class="rpl-text-sm rpl-text-muted">${persona ? esc(persona.name) : ''} • ${MODE_LABELS[s.mode] || s.mode} • ${formatTime(s.duration || 0)}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:20px;font-weight:800;color:var(--rpl-${scoreColor === 'yellow' ? 'orange' : scoreColor})">${s.score}</div>
              <div class="rpl-text-sm rpl-text-muted">${s.date ? new Date(s.date).toLocaleDateString('vi-VN') : ''}</div>
            </div>
          </div>
        `;
        frag.appendChild(card);
      });
    }

    // Best scores by scenario
    var bestEntries = Object.entries(state.progress.bestScores || {});
    if (bestEntries.length > 0) {
      const bestTitle = document.createElement('div');
      bestTitle.className = 'rpl-section-title';
      bestTitle.style.marginTop = '20px';
      bestTitle.textContent = '🏆 Điểm cao nhất theo kịch bản';
      frag.appendChild(bestTitle);

      bestEntries.sort(function(a, b) { return b[1] - a[1]; });
      bestEntries.slice(0, 10).forEach(function(entry, idx) {
        var scenario = findScenario(entry[0]);
        var row = document.createElement('div');
        row.className = 'rpl-lb-row';
        row.innerHTML = `
          <div class="rpl-lb-rank">${idx + 1}</div>
          <div class="rpl-lb-name">${scenario ? esc(scenario.name) : entry[0]}</div>
          <div class="rpl-lb-score" style="color:var(--rpl-${getScoreColor(entry[1]) === 'yellow' ? 'orange' : getScoreColor(entry[1])})">${entry[1]}</div>
        `;
        frag.appendChild(row);
      });
    }

    // Lessons progress summary
    const lessonsTitle = document.createElement('div');
    lessonsTitle.className = 'rpl-section-title';
    lessonsTitle.style.marginTop = '20px';
    lessonsTitle.textContent = '📚 Tiến độ bài học';
    frag.appendChild(lessonsTitle);

    data.academies.forEach(function(ac) {
      var completed = countCompletedLessons(ac.id);
      var total = ac.lessons.length;
      var pct = total > 0 ? Math.round(completed / total * 100) : 0;
      var bar = document.createElement('div');
      bar.className = 'rpl-bar-row';
      bar.innerHTML = `
        <div class="rpl-bar-label">${ac.icon} ${esc(ac.name)}</div>
        <div class="rpl-bar-track"><div class="rpl-bar-fill" style="width:${pct}%;background:${ac.color}"></div></div>
        <div class="rpl-bar-val">${pct}%</div>
      `;
      frag.appendChild(bar);
    });

    // Empty state
    if (sessions.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'rpl-empty rpl-mb-24';
      empty.innerHTML = '<div class="rpl-empty-icon">📊</div><p>Chưa có dữ liệu. Hãy bắt đầu phiên luyện tập đầu tiên!</p>';
      empty.innerHTML += '<button class="rpl-btn rpl-btn--primary" id="rplDashStart">🎯 Bắt đầu ngay</button>';
      frag.appendChild(empty);
      setTimeout(function() {
        var el = document.getElementById('rplDashStart');
        if (el) el.addEventListener('click', function() { navigate('scenarios'); });
      }, 0);
    }

    return frag;
  }

  // ===================================================================
  // 21. PUBLIC API
  // ===================================================================
  return {
    init: function(containerEl) {
      if (!containerEl) {
        console.error('[RolePlayLab] Container element not found');
        return;
      }
      container = containerEl;
      data = window.RolePlayData;

      if (!data) {
        container.innerHTML = '<div class="rpl-root"><div class="rpl-page"><div class="rpl-empty"><div class="rpl-empty-icon">⚠️</div><p>Không tìm thấy dữ liệu Role-Play. Hãy kiểm tra roleplay-data.js</p></div></div></div>';
        return;
      }

      loadProgress();
      initialized = true;

      // Retry any failed remote logs from previous session
      retryPendingLogs();

      // Check for saved mid-chat session (recovery on refresh)
      var savedChat = getSavedChatState();
      if (savedChat) {
        var persona = findPersona(savedChat.selectedPersona);
        var scenario = findScenario(savedChat.selectedScenario);
        if (persona && scenario) {
          var resumeBar = document.createElement('div');
          resumeBar.style.cssText = 'background:#fff3cd;border:1px solid #ffc107;border-radius:8px;padding:12px 16px;margin:12px;display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;';
          resumeBar.innerHTML = '<span>Bạn có phiên <b>' + scenario.name + '</b> chưa hoàn thành (' + savedChat.messages.length + ' tin nhắn). Tiếp tục?</span><span style="display:flex;gap:8px"><button id="rplResumeYes" style="background:#28a745;color:#fff;border:none;border-radius:6px;padding:6px 14px;cursor:pointer;font-size:13px">Tiếp tục</button><button id="rplResumeNo" style="background:#dc3545;color:#fff;border:none;border-radius:6px;padding:6px 14px;cursor:pointer;font-size:13px">Bỏ qua</button></span>';
          container.appendChild(resumeBar);
          document.getElementById('rplResumeYes').addEventListener('click', function() {
            resumeBar.remove();
            resumeChatState(savedChat);
          });
          document.getElementById('rplResumeNo').addEventListener('click', function() {
            resumeBar.remove();
            clearChatState();
            render();
          });
          return;
        }
        clearChatState();
      }

      render();
    },

    destroy: function() {
      clearInterval(state.timerInterval);
      if (container) container.innerHTML = '';
      initialized = false;
    },

    show: function() {
      if (container) container.style.display = '';
      if (initialized) render();
    },

    hide: function() {
      if (container) container.style.display = 'none';
      clearInterval(state.timerInterval);
    },

    // Expose for parent app integration
    getProgress: function() {
      return state.progress;
    },

    navigateTo: function(page, opts) {
      navigate(page, opts);
    }
  };

})();
