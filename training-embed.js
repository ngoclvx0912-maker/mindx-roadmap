/* ============================================================
   MindX Training Module — Embedded Mode
   Renders inside #trainingContainer within the Roadmap webapp.
   No standalone sidebar/login — managed by parent app.
   Version: 2.0-embed | March 2026
   ============================================================ */

window.TrainingEmbed = (function() {
  'use strict';

  const STORAGE_KEY = 'mindx_training';

  /* ---- Safe Storage Wrapper ---- */
  const safeStorage = (() => {
    const mem = {};
    const fallback = {
      getItem: k => (k in mem) ? mem[k] : null,
      setItem: (k, v) => { mem[k] = String(v); },
      removeItem: k => { delete mem[k]; }
    };
    try {
      const ls = window['local' + 'Storage'];
      const tk = '__st__';
      ls.setItem(tk, tk);
      ls.removeItem(tk);
      return ls;
    } catch(e) {
      return fallback;
    }
  })();

  /* ---- State ---- */
  let state = {
    userName: '',
    currentPage: 'dashboard',
    quizzes: {},
    lessonsViewed: {},
    tipsRead: {},
    casesRead: {},
    timeSpent: {}
  };

  let initialized = false;
  let container = null;
  let subnavEl = null;
  let pageContent = null;

  /* ---- Load / Save State ---- */
  function loadState() {
    try {
      const saved = safeStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
      }
    } catch(e) { console.warn('Failed to load state', e); }
    // Auto-set userName from employee session if not already set
    if (!state.userName) {
      try {
        var empRaw = localStorage.getItem('mindx_employee_session');
        if (empRaw) {
          var emp = JSON.parse(empRaw);
          if (emp && emp.name) {
            state.userName = emp.name;
            saveState();
          }
        }
      } catch(e) { /* ignore */ }
    }
  }

  function saveState() {
    try {
      safeStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch(e) { console.warn('Failed to save state', e); }
  }

  /* ---- UTILS ---- */
  function escHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function getEmployeeSession() {
    try {
      var raw = safeStorage.getItem('mindx_employee_session');
      if (!raw) return null;
      return JSON.parse(raw);
    } catch(e) { return null; }
  }

  function getLastIncompleteLesson() {
    var programs = [
      { data: TRAINING_DATA.onboard, prefix: 'day', label: 'K12 Sale' },
      { data: TRAINING_DATA.onboardCSK12, prefix: 'csk12_day', label: 'CS K12' },
      { data: TRAINING_DATA.onboardK18, prefix: 'k18_day', label: 'K18 Sale' }
    ];
    for (var p = 0; p < programs.length; p++) {
      var prog = programs[p];
      if (!prog.data) continue;
      for (var d = 0; d < prog.data.days.length; d++) {
        var day = prog.data.days[d];
        for (var s = 0; s < day.sections.length; s++) {
          if (!state.lessonsViewed[day.sections[s].id]) {
            return { page: prog.prefix + day.day, label: prog.label + ' - Ngày ' + day.day + ': ' + day.title, section: day.sections[s].title };
          }
        }
      }
    }
    return null;
  }

  function getRecentQuizScores(limit) {
    var results = [];
    var ids = Object.keys(state.quizzes);
    ids.forEach(function(id) {
      var q = state.quizzes[id];
      results.push({ id: id, score: ((q.score / q.total) * 10).toFixed(1), total: q.total, correct: q.score, timestamp: q.timestamp });
    });
    results.sort(function(a, b) { return b.timestamp - a.timestamp; });
    return results.slice(0, limit || 3);
  }

  function getUnreadTipCount() {
    if (!TRAINING_DATA.microlearning || !TRAINING_DATA.microlearning.tips) return { read: 0, total: 0 };
    var total = TRAINING_DATA.microlearning.tips.length;
    var read = TRAINING_DATA.microlearning.tips.filter(function(t) { return state.tipsRead[t.id]; }).length;
    return { read: read, total: total };
  }

  function getUnreadTip() {
    if (!TRAINING_DATA.microlearning || !TRAINING_DATA.microlearning.tips) return null;
    var unread = TRAINING_DATA.microlearning.tips.filter(function(t) { return !state.tipsRead[t.id]; });
    if (unread.length === 0) return null;
    return unread[Math.floor(Math.random() * unread.length)];
  }

  function getAllQuizzes() {
    var quizzes = [];
    TRAINING_DATA.onboard.days.forEach(function(day) {
      day.sections.forEach(function(s) {
        if (s.quiz) quizzes.push({ quiz: s.quiz, academy: 'K12 Sale', dayTitle: 'Ngày ' + day.day, icon: day.icon });
      });
    });
    if (TRAINING_DATA.onboardCSK12) {
      TRAINING_DATA.onboardCSK12.days.forEach(function(day) {
        day.sections.forEach(function(s) {
          if (s.quiz) quizzes.push({ quiz: s.quiz, academy: 'CS K12', dayTitle: 'Ngày ' + day.day, icon: day.icon });
        });
      });
    }
    if (TRAINING_DATA.onboardK18) {
      TRAINING_DATA.onboardK18.days.forEach(function(day) {
        day.sections.forEach(function(s) {
          if (s.quiz) quizzes.push({ quiz: s.quiz, academy: 'K18 Sale', dayTitle: 'Ngày ' + day.day, icon: day.icon });
        });
      });
    }
    return quizzes;
  }

  /* ---- Init ---- */
  function init() {
    if (initialized) {
      // Already initialized, just show and navigate
      navigate(state.currentPage || 'dashboard');
      return;
    }

    container = document.getElementById('trainingContainer');
    if (!container) return;

    loadState();

    // Build internal structure
    container.innerHTML = '';

    // Name overlay (inside container)
    const nameOvl = document.createElement('div');
    nameOvl.className = 'trn-name-overlay' + (state.userName ? ' hidden' : '');
    nameOvl.id = 'trnNameOverlay';
    nameOvl.innerHTML = `
      <div class="trn-name-card">
        <div class="trn-name-icon">👋</div>
        <h2>Chào mừng bạn đến MindX Training!</h2>
        <p>Nhập tên của bạn để bắt đầu:</p>
        <input type="text" id="trnUserName" class="trn-name-input" placeholder="Họ và tên...">
        <button class="trn-name-btn" id="trnNameBtn">Bắt đầu</button>
      </div>
    `;
    container.appendChild(nameOvl);

    // Sub-navigation removed — handled by sidebar
    subnavEl = null;

    // Page content area
    pageContent = document.createElement('div');
    pageContent.className = 'trn-page-content';
    pageContent.id = 'trnPageContent';
    container.appendChild(pageContent);

    // Quiz Modal
    const quizModal = document.createElement('div');
    quizModal.className = 'trn-quiz-modal hidden';
    quizModal.id = 'trnQuizModal';
    quizModal.innerHTML = `
      <div class="trn-quiz-container">
        <div class="trn-quiz-header">
          <h3 class="trn-quiz-title" id="trnQuizTitle">Quiz</h3>
          <div class="trn-quiz-meta">
            <span class="trn-quiz-timer hidden" id="trnQuizTimer">⏱ 30:00</span>
            <span class="trn-quiz-progress" id="trnQuizProgress">1/5</span>
          </div>
          <button class="trn-quiz-close" id="trnQuizClose">✕</button>
        </div>
        <div class="trn-quiz-body" id="trnQuizBody">
          <div class="trn-quiz-question" id="trnQuizQuestion"></div>
          <div class="trn-quiz-options" id="trnQuizOptions"></div>
          <div class="trn-quiz-feedback hidden" id="trnQuizFeedback"></div>
        </div>
        <div class="trn-quiz-footer">
          <button class="trn-quiz-btn-secondary hidden" id="trnQuizPrev">← Trước</button>
          <button class="trn-quiz-btn-primary" id="trnQuizNext">Tiếp theo →</button>
        </div>
      </div>
    `;
    container.appendChild(quizModal);

    // Quiz Results Modal
    const resultsModal = document.createElement('div');
    resultsModal.className = 'trn-quiz-results-modal hidden';
    resultsModal.id = 'trnQuizResultsModal';
    resultsModal.innerHTML = `
      <div class="trn-quiz-results-container">
        <div class="trn-quiz-results-header" id="trnQuizResultsHeader"></div>
        <div class="trn-quiz-results-body" id="trnQuizResultsBody"></div>
        <div class="trn-quiz-results-footer">
          <button class="trn-quiz-btn-secondary" id="trnQuizReview">Xem lại đáp án</button>
          <button class="trn-quiz-btn-primary" id="trnQuizResultsClose">Đóng</button>
        </div>
      </div>
    `;
    container.appendChild(resultsModal);

    // Setup name prompt
    setupNamePrompt();

    // Setup quiz close via Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isTrnQuizOpen()) {
        e.preventDefault();
        closeTrnQuiz();
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.trn-subnav-group')) {
        const groups = container.querySelectorAll('.trn-subnav-group.open');
        groups.forEach(g => g.classList.remove('open'));
      }
    });

    initialized = true;

    if (state.userName) {
      navigate(state.currentPage || 'dashboard');
    }
  }

  /* ---- Name Prompt ---- */
  function setupNamePrompt() {
    const nameBtn = document.getElementById('trnNameBtn');
    const nameInput = document.getElementById('trnUserName');
    if (!nameBtn || !nameInput) return;

    function doName() {
      const name = nameInput.value.trim();
      if (name.length >= 2) {
        state.userName = name;
        saveState();
        document.getElementById('trnNameOverlay').classList.add('hidden');
        navigate('dashboard');
      }
    }

    nameBtn.addEventListener('click', doName);
    nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') doName(); });
  }

  /* ---- Sub-Navigation (moved to sidebar) ---- */
  function buildSubnav() { /* no-op — nav is in sidebar */ }
  function setActiveSubnav(page) {
    /* Highlight matching sidebar item */
    var ch = document.getElementById('navGroupTrainingChildren');
    if (!ch) return;
    ch.querySelectorAll('.nav-item').forEach(function(b){ b.classList.remove('active'); });
    var match = ch.querySelector('[data-trn-page="'+page+'"]');
    if (match) {
      match.classList.add('active');
      var sg = match.closest('.trn-sidebar-subgroup');
      if (sg) {
        sg.classList.add('open');
        var sgBtn = sg.querySelector('.trn-sidebar-subgroup-btn');
        if (sgBtn) { sgBtn.classList.add('active'); var ar = sgBtn.querySelector('.trn-sg-arrow'); if(ar) ar.textContent='\u25BC'; }
      }
    }
  }

  /* ---- NAVIGATION ---- */
  function navigate(page) {
    state.currentPage = page;
    saveState();
    setActiveSubnav(page);

    // Update page title in roadmap topbar
    var titleMap = {
      'dashboard': 'Tổng quan Đào tạo',
      'quiz_hub': 'Quiz kiến thức',
      'quiz_results': 'Kết quả & Rank',
      'micro_tips': 'Tip of the Week',
      'micro_cases': 'Case Study',
      'micro_friday': 'Quiz Friday',
      'leaderboard': 'Bảng xếp hạng',
      'settings': 'Cài đặt'
    };
    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
      pageTitle.textContent = titleMap[page] || 'Đào tạo TVTS';
    }

    // Render
    if (page === 'dashboard') renderDashboard();
    else if (page.startsWith('csk12_day')) renderCSK12Day(page);
    else if (page.startsWith('k18_day')) renderK18Day(page);
    else if (page.startsWith('day')) renderDay(page);
    else if (page.startsWith('track_')) renderTrack(page.replace('track_',''));
    else if (page === 'quiz_hub') renderQuizHub();
    else if (page === 'quiz_results') renderQuizResults();
    else if (page === 'micro_tips') renderTips();
    else if (page === 'micro_cases') renderCases();
    else if (page === 'micro_friday') renderFriday();
    else if (page === 'leaderboard') renderLeaderboard();
    else if (page === 'settings') renderSettings();
    else renderDashboard();

    // Scroll to top
    var mainEl = document.getElementById('mainContent');
    if (mainEl) mainEl.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }

  // Expose for onclick handlers in rendered HTML
  window._trnNavigate = function(page) { navigate(page); };

  /* ---- SCORING / RANK ---- */
  function getScore(quizId) {
    const q = state.quizzes[quizId];
    if (!q) return null;
    return ((q.score / q.total) * 10).toFixed(1);
  }

  function getRank(score) {
    if (score >= 9) return 'S';
    if (score >= 8) return 'A';
    if (score >= 7) return 'B';
    if (score >= 6) return 'C';
    return 'F';
  }

  function getRankIcon(rank) {
    const icons = { S: '⭐', A: '🔵', B: '🟢', C: '🟡', F: '🔴' };
    return icons[rank] || '';
  }

  function getOverallScore() {
    const quizIds = Object.keys(state.quizzes);
    if (quizIds.length === 0) return null;
    let total = 0, count = 0;
    quizIds.forEach(id => {
      const q = state.quizzes[id];
      total += (q.score / q.total) * 10;
      count++;
    });
    return (total / count).toFixed(1);
  }

  function getOverallRank() {
    const score = getOverallScore();
    if (score === null) return null;
    return getRank(parseFloat(score));
  }

  function getCompletionPercent() {
    const allSections = [];
    if (typeof TRAINING_DATA !== 'undefined' && TRAINING_DATA.onboard) {
      TRAINING_DATA.onboard.days.forEach(day => {
        day.sections.forEach(s => allSections.push(s.id));
      });
    }
    if (allSections.length === 0) return 0;
    const completed = allSections.filter(id => state.lessonsViewed[id]).length;
    return Math.round((completed / allSections.length) * 100);
  }

  function getK18CompletionPercent() {
    const allSections = [];
    if (typeof TRAINING_DATA !== 'undefined' && TRAINING_DATA.onboardK18) {
      TRAINING_DATA.onboardK18.days.forEach(day => {
        day.sections.forEach(s => allSections.push(s.id));
      });
    }
    if (allSections.length === 0) return 0;
    const completed = allSections.filter(id => state.lessonsViewed[id]).length;
    return Math.round((completed / allSections.length) * 100);
  }

  function getCSK12CompletionPercent() {
    const allSections = [];
    if (typeof TRAINING_DATA !== 'undefined' && TRAINING_DATA.onboardCSK12) {
      TRAINING_DATA.onboardCSK12.days.forEach(day => {
        day.sections.forEach(s => allSections.push(s.id));
      });
    }
    if (allSections.length === 0) return 0;
    const completed = allSections.filter(id => state.lessonsViewed[id]).length;
    return Math.round((completed / allSections.length) * 100);
  }

  function getLessonsCompleted() {
    return Object.keys(state.lessonsViewed).length;
  }

  function getQuizAverage() {
    const s = getOverallScore();
    return s !== null ? s : '—';
  }

  /* ---- RENDER: DASHBOARD ---- */
  function renderDashboard() {
    const completion = getCompletionPercent();
    const k18completion = getK18CompletionPercent();
    const csk12completion = getCSK12CompletionPercent();
    const rank = getOverallRank();
    const avgScore = getQuizAverage();
    const lessonsCount = getLessonsCompleted();
    const emp = getEmployeeSession();
    const displayName = emp && emp.name ? emp.name : state.userName;
    const buLabel = emp && emp.bu ? emp.bu : '';
    const nextLesson = getLastIncompleteLesson();
    const recentQuizzes = getRecentQuizScores(3);
    const tipInfo = getUnreadTipCount();
    const randomTip = getUnreadTip();

    // Leaderboard mini — top 5
    var lbEntries = TRAINING_DATA.sampleLeaderboard ? [...TRAINING_DATA.sampleLeaderboard] : [];
    var overallScore = getOverallScore();
    if (overallScore !== null && displayName) {
      var existing = lbEntries.findIndex(function(e) { return e.name === displayName; });
      var userEntry = { name: displayName, score: parseFloat(overallScore), completion: completion, rank: getOverallRank() };
      if (existing >= 0) lbEntries[existing] = userEntry; else lbEntries.push(userEntry);
    }
    lbEntries.sort(function(a,b) { return b.score - a.score; });
    var top5 = lbEntries.slice(0, 5);

    let html = `
      <div class="trn-dash-welcome">
        <h2>Xin chào, ${escHtml(displayName)}! 👋</h2>
        <p>${buLabel ? '<span style="display:inline-block;padding:3px 12px;background:rgba(255,255,255,0.2);border-radius:12px;font-size:0.75rem;font-weight:700;margin-right:8px;">' + escHtml(buLabel) + '</span>' : ''}Chào mừng bạn đến hệ thống đào tạo TVTS MindX</p>
        ${rank ? `<div class="trn-dash-rank-badge">${getRankIcon(rank)}</div>` : ''}
      </div>

      ${nextLesson ? `
      <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;margin-bottom:20px;display:flex;align-items:center;gap:16px;cursor:pointer;" onclick="window._trnNavigate('${nextLesson.page}')">
        <div style="width:48px;height:48px;border-radius:12px;background:#EFF6FF;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;">📖</div>
        <div style="flex:1;">
          <div style="font-size:0.72rem;font-weight:700;color:#2563EB;text-transform:uppercase;letter-spacing:0.05em;">Tiếp tục học</div>
          <div style="font-size:0.92rem;font-weight:700;color:#1A202C;margin-top:2px;">${escHtml(nextLesson.label)}</div>
          <div style="font-size:0.78rem;color:#A0AEC0;margin-top:2px;">${escHtml(nextLesson.section)}</div>
        </div>
        <div style="font-size:1.2rem;color:#2563EB;">→</div>
      </div>` : ''}

      <div class="trn-dash-stats">
        <div class="trn-stat-box">
          <div class="trn-stat-box-icon">📚</div>
          <div class="trn-stat-box-value">${lessonsCount}</div>
          <div class="trn-stat-box-label">Bài học đã xem</div>
        </div>
        <div class="trn-stat-box">
          <div class="trn-stat-box-icon">📝</div>
          <div class="trn-stat-box-value">${Object.keys(state.quizzes).length}</div>
          <div class="trn-stat-box-label">Quiz đã làm</div>
        </div>
        <div class="trn-stat-box">
          <div class="trn-stat-box-icon">⭐</div>
          <div class="trn-stat-box-value">${avgScore}</div>
          <div class="trn-stat-box-label">Điểm TB Quiz</div>
        </div>
        <div class="trn-stat-box">
          <div class="trn-stat-box-icon">💡</div>
          <div class="trn-stat-box-value">${tipInfo.read}/${tipInfo.total}</div>
          <div class="trn-stat-box-label">Tips đã đọc</div>
        </div>
      </div>

      <h3 style="font-size:1rem;font-weight:700;margin-bottom:16px;">Lộ trình đào tạo</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:24px;">
        <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;cursor:pointer;" onclick="window._trnNavigate('day1')">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
            <span style="font-size:1.5rem;">🎯</span>
            <div>
              <div style="font-size:0.92rem;font-weight:700;color:#1A202C;">Sale K12 Onboard</div>
              <div style="font-size:0.72rem;color:#A0AEC0;">5 ngày &bull; ${TRAINING_DATA.onboard.days.reduce(function(a,d){return a+d.sections.length;},0)} phần</div>
            </div>
          </div>
          <div class="trn-progress-bar"><div class="trn-progress-fill red" style="width:${completion}%"></div></div>
          <div style="font-size:0.75rem;color:#A0AEC0;margin-top:6px;">${completion}% hoàn thành</div>
        </div>
        ${TRAINING_DATA.onboardCSK12 ? `
        <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;cursor:pointer;" onclick="window._trnNavigate('csk12_day1')">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
            <span style="font-size:1.5rem;">💚</span>
            <div>
              <div style="font-size:0.92rem;font-weight:700;color:#1A202C;">CS K12 Onboard</div>
              <div style="font-size:0.72rem;color:#A0AEC0;">5 ngày &bull; ${TRAINING_DATA.onboardCSK12.days.reduce(function(a,d){return a+d.sections.length;},0)} phần</div>
            </div>
          </div>
          <div class="trn-progress-bar"><div class="trn-progress-fill green" style="width:${csk12completion}%"></div></div>
          <div style="font-size:0.75rem;color:#A0AEC0;margin-top:6px;">${csk12completion}% hoàn thành</div>
        </div>` : ''}
        ${TRAINING_DATA.onboardK18 ? `
        <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;cursor:pointer;" onclick="window._trnNavigate('k18_day1')">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
            <span style="font-size:1.5rem;">🚀</span>
            <div>
              <div style="font-size:0.92rem;font-weight:700;color:#1A202C;">K18 Sale Onboard</div>
              <div style="font-size:0.72rem;color:#A0AEC0;">5 ngày &bull; ${TRAINING_DATA.onboardK18.days.reduce(function(a,d){return a+d.sections.length;},0)} phần</div>
            </div>
          </div>
          <div class="trn-progress-bar"><div class="trn-progress-fill blue" style="width:${k18completion}%"></div></div>
          <div style="font-size:0.75rem;color:#A0AEC0;margin-top:6px;">${k18completion}% hoàn thành</div>
        </div>` : ''}
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;margin-bottom:24px;">
        <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;">
          <h3 style="font-size:0.92rem;font-weight:700;margin-bottom:12px;">📝 Quiz gần đây</h3>
          ${recentQuizzes.length === 0 ? '<p style="font-size:0.82rem;color:#A0AEC0;">Chưa có kết quả quiz nào</p>' :
            recentQuizzes.map(function(r) {
              var rk = getRank(parseFloat(r.score));
              return '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid #F1F5F9;">' +
                '<div style="font-size:0.82rem;font-weight:500;">' + escHtml(r.id) + '</div>' +
                '<div style="display:flex;align-items:center;gap:8px;">' +
                '<span style="font-size:0.82rem;font-weight:700;">' + r.score + '/10</span>' +
                '<span class="trn-lb-badge trn-rank-' + rk + '" style="font-size:0.68rem;">' + rk + '</span></div></div>';
            }).join('')}
          ${recentQuizzes.length > 0 ? '<button style="margin-top:10px;padding:6px 14px;background:#F8F9FA;border:1px solid #E2E8F0;border-radius:6px;font-family:inherit;font-size:0.75rem;font-weight:600;cursor:pointer;" onclick="window._trnNavigate(\'quiz_hub\')">Xem tất cả quiz →</button>' : ''}
        </div>

        <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;">
          <h3 style="font-size:0.92rem;font-weight:700;margin-bottom:12px;">💡 Gợi ý Microlearning</h3>
          ${randomTip ? `
            <div style="font-size:0.68rem;font-weight:700;color:#2563EB;text-transform:uppercase;">${randomTip.week}</div>
            <div style="font-size:0.88rem;font-weight:700;margin:4px 0 6px;">${escHtml(randomTip.title)}</div>
            <div style="font-size:0.82rem;color:#4A5568;line-height:1.5;">${escHtml(randomTip.content).substring(0, 150)}...</div>
            <button style="margin-top:10px;padding:6px 14px;background:#F8F9FA;border:1px solid #E2E8F0;border-radius:6px;font-family:inherit;font-size:0.75rem;font-weight:600;cursor:pointer;" onclick="window._trnNavigate('micro_tips')">Xem tất cả tips →</button>
          ` : '<p style="font-size:0.82rem;color:#059669;font-weight:600;">Bạn đã đọc tất cả tips!</p>'}
        </div>
      </div>

      <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;margin-bottom:24px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
          <h3 style="font-size:0.92rem;font-weight:700;">🏆 Bảng xếp hạng</h3>
          <button style="padding:4px 12px;background:#F8F9FA;border:1px solid #E2E8F0;border-radius:6px;font-family:inherit;font-size:0.72rem;font-weight:600;cursor:pointer;" onclick="window._trnNavigate('leaderboard')">Xem đầy đủ →</button>
        </div>
        <table style="width:100%;font-size:0.82rem;border-collapse:collapse;">
          ${top5.map(function(e, i) {
            var isMe = e.name === displayName;
            var medals = ['🥇','🥈','🥉'];
            return '<tr style="' + (isMe ? 'background:#FFF5F5;font-weight:600;' : '') + '">' +
              '<td style="padding:6px 8px;width:30px;">' + (i < 3 ? medals[i] : (i+1)) + '</td>' +
              '<td style="padding:6px 8px;">' + escHtml(e.name) + (isMe ? ' (Bạn)' : '') + '</td>' +
              '<td style="padding:6px 8px;text-align:right;font-weight:700;">' + e.score.toFixed(1) + '</td></tr>';
          }).join('')}
        </table>
      </div>
    `;

    pageContent.innerHTML = html;
  }

  /* ---- Helper: Day page navigation buttons ---- */
  function buildDayNav(dayNum, totalDays, pagePrefix) {
    var prev = dayNum > 1 ? `<button class="trn-quiz-btn-secondary" onclick="window._trnNavigate('${pagePrefix}${dayNum-1}')">← Ngày ${dayNum-1}</button>` : '<span></span>';
    var next = dayNum < totalDays ? `<button class="trn-quiz-btn-primary" onclick="window._trnNavigate('${pagePrefix}${dayNum+1}')">Ngày ${dayNum+1} →</button>` : '<span></span>';
    return `<div style="display:flex;justify-content:space-between;align-items:center;margin-top:24px;padding-top:16px;border-top:1px solid #F1F5F9;">${prev}${next}</div>`;
  }

  function buildDayProgressBar(dayData) {
    var total = dayData.sections.length;
    var done = dayData.sections.filter(function(s) { return state.lessonsViewed[s.id]; }).length;
    var pct = total > 0 ? Math.round((done/total)*100) : 0;
    return `<div style="background:#FFFFFF;border-radius:10px;padding:14px 20px;border:1px solid #F1F5F9;margin-bottom:16px;display:flex;align-items:center;gap:14px;">
      <span style="font-size:0.82rem;font-weight:600;white-space:nowrap;">Tiến độ: ${done}/${total}</span>
      <div class="trn-progress-bar" style="flex:1;"><div class="trn-progress-fill red" style="width:${pct}%"></div></div>
      <span style="font-size:0.82rem;font-weight:700;color:${pct===100?'#059669':'#A0AEC0'};">${pct}%</span>
    </div>`;
  }

  function buildSectionCards(dayData) {
    return dayData.sections.map(function(section, idx) {
      var isViewed = state.lessonsViewed[section.id];
      var hasQuiz = section.quiz;
      var quizPassed = hasQuiz && state.quizzes[section.quiz.id];
      var sectionDone = isViewed && (!hasQuiz || quizPassed);
      return `
        <div class="trn-section-card" data-section="${section.id}">
          <div class="trn-section-card-header" onclick="window._trnToggleSection('${section.id}')">
            <span class="trn-sec-icon">${section.icon}</span>
            <span class="trn-sec-title">${section.title}</span>
            <span class="trn-sec-status ${sectionDone ? 'complete' : 'incomplete'}">${sectionDone ? '✓ Hoàn thành' : isViewed ? '📝 Chưa làm quiz' : 'Chưa xem'}</span>
            <span class="trn-sec-arrow">▸</span>
          </div>
          <div class="trn-section-card-body" id="trnSecBody_${section.id}">
            ${section.content}
            ${hasQuiz ? `
              <button class="trn-quiz-start-btn" onclick="window._trnStartQuiz('${section.quiz.id}')">
                📝 ${quizPassed ? 'Làm lại' : 'Làm'} Quiz: ${section.quiz.title} (${section.quiz.questions.length} câu)
              </button>
              ${quizPassed ? '<span style="margin-left:12px;font-size:0.8rem;color:#059669;font-weight:600;">Điểm cao nhất: ' + getScore(section.quiz.id) + '/10</span>' : ''}
            ` : ''}
            <br>
            <button class="trn-mark-complete-btn ${isViewed ? 'completed' : ''}" onclick="window._trnMarkComplete('${section.id}', this)" ${isViewed ? 'disabled' : ''}>
              ${isViewed ? '✓ Đã hoàn thành' : '✓ Đánh dấu hoàn thành'}
            </button>
          </div>
        </div>`;
    }).join('');
  }

  /* ---- RENDER: DAY PAGE (K12) ---- */
  function renderDay(dayId) {
    const dayNum = parseInt(dayId.replace('day',''));
    const dayData = TRAINING_DATA.onboard.days.find(d => d.day === dayNum);
    if (!dayData) { renderDashboard(); return; }
    const totalDays = TRAINING_DATA.onboard.days.length;

    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = `Ngày ${dayData.day}: ${dayData.title}`;

    let html = `
      <div class="trn-day-header ${dayId}">
        <div class="trn-day-badge">NGÀY ${dayData.day} / ${totalDays}</div>
        <h2>${dayData.icon} ${dayData.title}</h2>
        <p>${dayData.subtitle}</p>
      </div>
      ${buildDayProgressBar(dayData)}
      <div class="trn-section-list">
        ${buildSectionCards(dayData)}
      </div>
      ${buildDayNav(dayNum, totalDays, 'day')}
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: K18 DAY PAGE ---- */
  function renderK18Day(dayId) {
    const dayNum = parseInt(dayId.replace('k18_day',''));
    const dayData = TRAINING_DATA.onboardK18 ? TRAINING_DATA.onboardK18.days.find(d => d.day === dayNum) : null;
    if (!dayData) { renderDashboard(); return; }
    const totalDays = TRAINING_DATA.onboardK18.days.length;

    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = `K18 Ngày ${dayData.day}: ${dayData.title}`;

    let html = `
      <div class="trn-day-header" style="background: linear-gradient(135deg, ${dayData.color} 0%, ${dayData.color}dd 100%);">
        <div class="trn-day-badge">K18 NGÀY ${dayData.day} / ${totalDays}</div>
        <h2>${dayData.icon} ${dayData.title}</h2>
        <p>${dayData.subtitle}</p>
      </div>
      ${buildDayProgressBar(dayData)}
      <div class="trn-section-list">
        ${buildSectionCards(dayData)}
      </div>
      ${buildDayNav(dayNum, totalDays, 'k18_day')}
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: CS K12 DAY PAGE ---- */
  function renderCSK12Day(dayId) {
    const dayNum = parseInt(dayId.replace('csk12_day',''));
    const dayData = TRAINING_DATA.onboardCSK12 ? TRAINING_DATA.onboardCSK12.days.find(d => d.day === dayNum) : null;
    if (!dayData) { renderDashboard(); return; }
    const totalDays = TRAINING_DATA.onboardCSK12.days.length;

    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = `CS K12 Ngày ${dayData.day}: ${dayData.title}`;

    let html = `
      <div class="trn-day-header" style="background: linear-gradient(135deg, ${dayData.color} 0%, ${dayData.color}dd 100%);">
        <div class="trn-day-badge">CS K12 NGÀY ${dayData.day} / ${totalDays}</div>
        <h2>${dayData.icon} ${dayData.title}</h2>
        <p>${dayData.subtitle}</p>
      </div>
      ${buildDayProgressBar(dayData)}
      <div class="trn-section-list">
        ${buildSectionCards(dayData)}
      </div>
      ${buildDayNav(dayNum, totalDays, 'csk12_day')}
    `;

    pageContent.innerHTML = html;
  }

  /* ---- Toggle Section ---- */
  window._trnToggleSection = function(sectionId) {
    const body = document.getElementById('trnSecBody_' + sectionId);
    if (!body) return;
    const header = body.previousElementSibling;
    const isOpen = body.classList.contains('open');
    if (isOpen) {
      body.classList.remove('open');
      header.classList.remove('open');
    } else {
      body.classList.add('open');
      header.classList.add('open');
    }
  };

  window._trnMarkComplete = function(sectionId, btn) {
    state.lessonsViewed[sectionId] = true;
    saveState();
    btn.textContent = '✓ Đã hoàn thành';
    btn.classList.add('completed');
    btn.disabled = true;
    const card = btn.closest('.trn-section-card');
    const status = card.querySelector('.trn-sec-status');
    if (status) {
      status.textContent = '✓ Hoàn thành';
      status.className = 'trn-sec-status complete';
    }
  };

  /* ---- RENDER: TRACK PAGE ---- */
  function renderTrack(trackId) {
    const track = TRAINING_DATA.tracks[trackId];
    if (!track) { renderDashboard(); return; }

    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = track.title;

    var trackProgMap = {
      k12_sale: { fn: getCompletionPercent, page: 'day1', label: 'Sale K12 Onboard', days: 5, color: 'red' },
      k12_cs: { fn: getCSK12CompletionPercent, page: 'csk12_day1', label: 'CS K12 Onboard', days: 5, color: 'green' },
      k18_sale: { fn: getK18CompletionPercent, page: 'k18_day1', label: 'K18 Sale Onboard', days: 5, color: 'blue' }
    };
    var prog = trackProgMap[trackId];
    var pct = prog ? prog.fn() : 0;
    var startPage = prog ? prog.page : '';
    var btnLabel = pct > 0 ? 'Tiếp tục' : 'Bắt đầu';

    let html = `
      <div class="trn-track-header">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
          <div class="trn-track-icon" style="font-size:2.5rem;">${track.icon}</div>
          <div>
            <h2 style="margin:0;">${track.title}</h2>
            <p style="margin:4px 0 0;font-size:0.82rem;color:#A0AEC0;">${track.description}</p>
          </div>
        </div>
        ${prog ? `
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div class="trn-progress-bar" style="flex:1;"><div class="trn-progress-fill ${prog.color}" style="width:${pct}%"></div></div>
          <span style="font-size:0.82rem;font-weight:700;color:${pct===100?'#059669':'#A0AEC0'};">${pct}%</span>
        </div>` : ''}
        <p style="font-size:0.85rem;color:#4A5568;line-height:1.6;">${track.detail}</p>
        <h4 style="margin-top:16px;margin-bottom:12px;font-size:0.92rem;">Các module đào tạo:</h4>
        <ul class="trn-track-modules">
          ${track.modules.map(m => `<li>${m}</li>`).join('')}
        </ul>
        ${startPage ? `<button class="trn-quiz-start-btn" style="margin-top:20px" onclick="window._trnNavigate('${startPage}')">${btnLabel} ${track.title} (${prog ? prog.days : ''} ngày) →</button>` : ''}
      </div>
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: QUIZ HUB ---- */
  function renderQuizHub() {
    var allQ = getAllQuizzes();
    var totalQuizzes = allQ.length;
    var completedQuizzes = allQ.filter(function(q) { return state.quizzes[q.quiz.id]; }).length;
    var avgStr = getQuizAverage();

    // Group by academy
    var groups = {};
    allQ.forEach(function(q) {
      if (!groups[q.academy]) groups[q.academy] = [];
      groups[q.academy].push(q);
    });

    // Add Quiz Friday
    if (TRAINING_DATA.microlearning && TRAINING_DATA.microlearning.quizFriday) {
      if (!groups['Microlearning']) groups['Microlearning'] = [];
      groups['Microlearning'].push({ quiz: { id: 'quiz_friday', title: 'Quiz Friday', questions: TRAINING_DATA.microlearning.quizFriday }, academy: 'Microlearning', dayTitle: 'Hàng tuần', icon: '🎯' });
    }

    let html = `
      <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;margin-bottom:20px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
        <div style="text-align:center;">
          <div style="font-size:1.8rem;font-weight:800;color:#1A202C;">${completedQuizzes}/${totalQuizzes}</div>
          <div style="font-size:0.72rem;color:#A0AEC0;">Quiz đã làm</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:1.8rem;font-weight:800;color:#1A202C;">${avgStr}</div>
          <div style="font-size:0.72rem;color:#A0AEC0;">Điểm TB</div>
        </div>
        <div style="flex:1;">
          <div class="trn-progress-bar" style="height:10px;"><div class="trn-progress-fill red" style="width:${totalQuizzes > 0 ? Math.round(completedQuizzes/totalQuizzes*100) : 0}%"></div></div>
        </div>
      </div>
    `;

    Object.keys(groups).forEach(function(academy) {
      html += `<h3 style="font-size:0.95rem;font-weight:700;margin:20px 0 12px;color:#1A202C;">${academy}</h3>`;
      html += '<div class="trn-quiz-hub-grid">';
      groups[academy].forEach(function(q) {
        var score = getScore(q.quiz.id);
        var rk = score !== null ? getRank(parseFloat(score)) : null;
        var statusIcon = rk ? (rk === 'F' ? '✗' : '✓') : '—';
        var statusColor = rk ? (rk === 'F' ? '#E31F26' : '#059669') : '#A0AEC0';
        html += `
          <div class="trn-quiz-hub-card" onclick="window._trnStartQuiz('${q.quiz.id}')">
            <div style="display:flex;align-items:center;justify-content:space-between;">
              <div class="trn-qh-icon">${q.icon || '📝'}</div>
              <span style="font-size:0.72rem;font-weight:700;color:${statusColor};">${statusIcon} ${rk ? 'Rank ' + rk : 'Chưa làm'}</span>
            </div>
            <div class="trn-qh-title">${q.quiz.title}</div>
            <div class="trn-qh-meta">${q.dayTitle} — ${q.quiz.questions.length} câu</div>
            ${score !== null ? `<div class="trn-qh-score">Điểm cao nhất: ${score}/10</div>` : ''}
            ${score !== null ? '<div style="margin-top:6px;"><button style="padding:4px 12px;background:#F8F9FA;border:1px solid #E2E8F0;border-radius:6px;font-family:inherit;font-size:0.72rem;font-weight:600;cursor:pointer;">Làm lại</button></div>' : ''}
          </div>`;
      });
      html += '</div>';
    });

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: QUIZ RESULTS ---- */
  function renderQuizResults() {
    const quizIds = Object.keys(state.quizzes);
    const overallScore = getOverallScore();
    const overallRank = getOverallRank();

    let html = `
      <div class="trn-dash-welcome" style="margin-bottom:24px;">
        <h2>Kết quả tổng hợp</h2>
        <p>Điểm trung bình: ${overallScore || '—'}/10 ${overallRank ? `| Rank: ${overallRank} ${getRankIcon(overallRank)}` : ''}</p>
      </div>
      <div class="trn-results-grid">
        ${quizIds.length === 0 ? '<p style="color:#A0AEC0;font-size:0.85rem;">Bạn chưa làm quiz nào. Hãy bắt đầu từ lộ trình Onboard!</p>' : ''}
        ${quizIds.map(id => {
          const q = state.quizzes[id];
          const score = ((q.score / q.total) * 10).toFixed(1);
          const rank = getRank(parseFloat(score));
          const date = new Date(q.timestamp).toLocaleDateString('vi-VN');
          return `
            <div class="trn-result-card">
              <div class="trn-rc-quiz">
                <div class="trn-rc-quiz-name">${id}</div>
                <div class="trn-rc-quiz-date">${date} — ${q.score}/${q.total} câu đúng</div>
              </div>
              <div class="trn-rc-score">${score}/10</div>
              <span class="trn-lb-badge trn-rank-${rank}">${rank}</span>
            </div>`;
        }).join('')}
      </div>
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: TIPS ---- */
  function renderTips() {
    var tips = TRAINING_DATA.microlearning.tips;
    var info = getUnreadTipCount();

    let html = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0;">💡 Tips tư vấn hàng tuần</h3>
        <span style="font-size:0.82rem;font-weight:600;color:${info.read === info.total ? '#059669' : '#A0AEC0'};">${info.read}/${info.total} đã đọc</span>
      </div>
    `;

    tips.forEach(function(tip) {
      var isRead = state.tipsRead[tip.id];
      html += `
        <div class="trn-tip-card" style="border-left:4px solid ${isRead ? '#059669' : '#2563EB'};">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span class="trn-tip-week">${tip.week}</span>
            ${isRead ? '<span style="font-size:0.68rem;font-weight:700;color:#059669;background:#ECFDF5;padding:2px 8px;border-radius:8px;">Đã đọc</span>' : ''}
          </div>
          <div class="trn-tip-title">${tip.title}</div>
          <div class="trn-tip-content">${tip.content}</div>
          <button class="trn-tip-mark-btn ${isRead ? 'read' : ''}" onclick="window._trnMarkTipRead('${tip.id}', this)">
            ${isRead ? '✓ Đã đọc' : 'Đánh dấu đã đọc'}
          </button>
        </div>`;
    });

    if (info.read === info.total && info.total > 0) {
      html += '<div style="text-align:center;padding:20px;font-size:0.88rem;color:#059669;font-weight:600;">Bạn đã đọc tất cả tips! Quay lại vào tuần tới.</div>';
    }

    pageContent.innerHTML = html;
  }

  window._trnMarkTipRead = function(tipId, btn) {
    state.tipsRead[tipId] = true;
    saveState();
    btn.textContent = '✓ Đã đọc';
    btn.classList.add('read');
  };

  /* ---- RENDER: CASES ---- */
  function renderCases() {
    var cases = TRAINING_DATA.microlearning.caseStudies;
    var totalCases = cases.length;
    var readCases = cases.filter(function(c) { return state.casesRead && state.casesRead[c.id]; }).length;

    let html = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0;">📖 Case Study thực tế</h3>
        <span style="font-size:0.82rem;font-weight:600;color:${readCases === totalCases ? '#059669' : '#A0AEC0'};">${readCases}/${totalCases} đã đọc</span>
      </div>
    `;

    cases.forEach(function(cs) {
      var isRead = state.casesRead && state.casesRead[cs.id];
      // Extract key takeaway from content (last line after "Bài học:")
      var takeaway = '';
      var match = cs.content.match(/<strong>Bài học:<\/strong>\s*(.*?)$/s);
      if (match) takeaway = match[1].replace(/<[^>]*>/g, '').trim();

      html += `
        <div class="trn-case-card" style="border-left:4px solid ${cs.type === 'success' ? '#059669' : '#E31F26'};">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <span class="trn-case-type ${cs.type}">${cs.type === 'success' ? '✓ Thành công' : '✗ Thất bại'}</span>
            ${isRead ? '<span style="font-size:0.68rem;font-weight:700;color:#059669;background:#ECFDF5;padding:2px 8px;border-radius:8px;">Đã đọc</span>' : ''}
          </div>
          <div class="trn-case-title">${cs.title}</div>
          <div class="trn-case-content">${cs.content}</div>
          ${takeaway ? '<div style="margin-top:10px;padding:10px 14px;background:#FFFBEB;border-radius:6px;font-size:0.82rem;border-left:3px solid #D97706;"><strong>Bài học chính:</strong> ' + escHtml(takeaway.substring(0, 200)) + '</div>' : ''}
          <button class="trn-tip-mark-btn ${isRead ? 'read' : ''}" onclick="window._trnMarkCaseRead('${cs.id}', this)" style="margin-top:12px;">
            ${isRead ? '✓ Đã đọc' : 'Đánh dấu đã đọc'}
          </button>
        </div>`;
    });

    pageContent.innerHTML = html;
  }

  window._trnMarkCaseRead = function(caseId, btn) {
    if (!state.casesRead) state.casesRead = {};
    state.casesRead[caseId] = true;
    saveState();
    btn.textContent = '✓ Đã đọc';
    btn.classList.add('read');
  };

  /* ---- RENDER: QUIZ FRIDAY ---- */
  function renderFriday() {
    var fridayScore = getScore('quiz_friday');
    var fridayRank = fridayScore !== null ? getRank(parseFloat(fridayScore)) : null;
    var tipInfo = getUnreadTipCount();
    var casesTotal = TRAINING_DATA.microlearning.caseStudies.length;
    var casesRead = TRAINING_DATA.microlearning.caseStudies.filter(function(c) { return state.casesRead && state.casesRead[c.id]; }).length;

    let html = `
      <div style="background:linear-gradient(135deg,#7C3AED,#6D28D9);border-radius:14px;padding:28px 32px;color:white;margin-bottom:24px;">
        <h2 style="font-size:1.3rem;font-weight:800;margin-bottom:6px;">🎯 Friday Learning</h2>
        <p style="font-size:0.85rem;opacity:0.9;">Nội dung đào tạo cuối tuần — quiz nhanh, tips và case study</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:24px;">
        <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;">
          <div style="font-size:1.3rem;margin-bottom:8px;">📝</div>
          <div style="font-size:0.92rem;font-weight:700;margin-bottom:4px;">Quiz Friday</div>
          <div style="font-size:0.78rem;color:#A0AEC0;margin-bottom:12px;">5 câu hỏi nhanh — kiểm tra kiến thức tư vấn</div>
          ${fridayScore !== null ? `
            <div style="font-size:0.82rem;font-weight:600;color:#059669;margin-bottom:8px;">Điểm: ${fridayScore}/10 <span class="trn-lb-badge trn-rank-${fridayRank}">${fridayRank}</span></div>
            <button class="trn-quiz-start-btn" onclick="window._trnStartQuiz('quiz_friday')" style="font-size:0.82rem;padding:8px 18px;">Làm lại Quiz</button>
          ` : `
            <button class="trn-quiz-start-btn" onclick="window._trnStartQuiz('quiz_friday')" style="font-size:0.82rem;padding:8px 18px;">Bắt đầu Quiz (5 câu)</button>
          `}
        </div>

        <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;cursor:pointer;" onclick="window._trnNavigate('micro_tips')">
          <div style="font-size:1.3rem;margin-bottom:8px;">💡</div>
          <div style="font-size:0.92rem;font-weight:700;margin-bottom:4px;">Tips tuần này</div>
          <div style="font-size:0.78rem;color:#A0AEC0;margin-bottom:8px;">${tipInfo.read}/${tipInfo.total} tips đã đọc</div>
          <div class="trn-progress-bar" style="height:6px;"><div class="trn-progress-fill blue" style="width:${tipInfo.total > 0 ? Math.round(tipInfo.read/tipInfo.total*100) : 0}%"></div></div>
        </div>

        <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;cursor:pointer;" onclick="window._trnNavigate('micro_cases')">
          <div style="font-size:1.3rem;margin-bottom:8px;">📖</div>
          <div style="font-size:0.92rem;font-weight:700;margin-bottom:4px;">Case Study</div>
          <div style="font-size:0.78rem;color:#A0AEC0;margin-bottom:8px;">${casesRead}/${casesTotal} case đã đọc</div>
          <div class="trn-progress-bar" style="height:6px;"><div class="trn-progress-fill green" style="width:${casesTotal > 0 ? Math.round(casesRead/casesTotal*100) : 0}%"></div></div>
        </div>
      </div>

      <div style="background:#F8F9FA;border-radius:10px;padding:16px 20px;font-size:0.82rem;color:#4A5568;line-height:1.5;">
        <strong>📅 Gợi ý:</strong> Mỗi thứ 6, hãy dành 15 phút để làm Quiz Friday, đọc 1 tip mới và 1 case study. Kiến thức tích lũy dần sẽ giúp bạn tư vấn chuyên nghiệp hơn!
      </div>
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: LEADERBOARD ---- */
  function renderLeaderboard() {
    var emp = getEmployeeSession();
    var displayName = emp && emp.name ? emp.name : state.userName;
    var userBU = emp && emp.bu ? emp.bu : '';

    let entries = [...TRAINING_DATA.sampleLeaderboard];
    const overallScore = getOverallScore();
    if (overallScore !== null && displayName) {
      const existing = entries.findIndex(e => e.name === displayName);
      const userEntry = {
        name: displayName,
        score: parseFloat(overallScore),
        completion: getCompletionPercent(),
        rank: getOverallRank(),
        date: new Date().toISOString().slice(0,10),
        bu: userBU
      };
      if (existing >= 0) entries[existing] = userEntry;
      else entries.push(userEntry);
    }

    entries.sort((a,b) => b.score - a.score);

    // Find user rank
    var userRankPos = entries.findIndex(function(e) { return e.name === displayName; });
    var medals = ['🥇','🥈','🥉'];

    let html = `
      ${overallScore !== null ? `
      <div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;margin-bottom:20px;display:flex;align-items:center;gap:20px;">
        <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#E31F26,#B91C22);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800;">${userRankPos >= 0 ? userRankPos + 1 : '—'}</div>
        <div>
          <div style="font-size:0.92rem;font-weight:700;">Điểm của bạn: ${overallScore}/10</div>
          <div style="font-size:0.78rem;color:#A0AEC0;">Xếp hạng ${userRankPos >= 0 ? '#' + (userRankPos+1) : '—'} trên ${entries.length} người ${userBU ? '&bull; BU: ' + escHtml(userBU) : ''}</div>
        </div>
        ${getOverallRank() ? '<span class="trn-lb-badge trn-rank-' + getOverallRank() + '" style="font-size:0.85rem;padding:6px 16px;">' + getOverallRank() + ' ' + getRankIcon(getOverallRank()) + '</span>' : ''}
      </div>` : ''}

      <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">🏆 Bảng xếp hạng TVTS</h3>

      <div style="background:#F8F9FA;border-radius:8px;padding:12px 16px;font-size:0.78rem;color:#4A5568;margin-bottom:16px;line-height:1.5;">
        <strong>Cách tính điểm:</strong> Điểm = Trung bình tất cả quiz đã làm (thang 10). Rank: S (≥9) &bull; A (≥8) &bull; B (≥7) &bull; C (≥6) &bull; F (<6)
      </div>

      <table class="trn-leaderboard-table">
        <thead>
          <tr>
            <th style="width:60px;">#</th>
            <th>Họ tên</th>
            <th>Điểm</th>
            <th>Hoàn thành</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          ${entries.map((e, i) => {
            const isMe = e.name === displayName;
            const topClass = i === 0 ? 'top1' : i === 1 ? 'top2' : i === 2 ? 'top3' : '';
            return `
              <tr style="${isMe ? 'background:#FFF5F5;font-weight:600;' : ''}">
                <td><span class="trn-lb-rank-num ${topClass}">${i < 3 ? medals[i] : (i+1)}</span></td>
                <td>${escHtml(e.name)} ${isMe ? '<span style="font-size:0.72rem;color:#E31F26;">(Bạn)</span>' : ''}</td>
                <td style="font-weight:700;">${e.score.toFixed(1)}</td>
                <td>${e.completion}%</td>
                <td><span class="trn-lb-badge trn-rank-${e.rank}">${e.rank} ${getRankIcon(e.rank)}</span></td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: SETTINGS ---- */
  function renderSettings() {
    const overallScore = getOverallScore();
    const overallRank = getOverallRank();
    const emp = getEmployeeSession();

    let html = `
      <div class="trn-settings-section">
        <h3>👤 Thông tin nhân viên</h3>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Mã NV</span>
          <span class="trn-settings-value" style="font-weight:700;color:#1A202C;">${emp && emp.msnv ? escHtml(emp.msnv) : '—'}</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Họ tên</span>
          <span class="trn-settings-value" style="color:#1A202C;">${emp && emp.name ? escHtml(emp.name) : escHtml(state.userName)}</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">BU</span>
          <span class="trn-settings-value">${emp && emp.bu ? escHtml(emp.bu) : '—'}</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Vị trí</span>
          <span class="trn-settings-value">${emp && emp.position ? escHtml(emp.position) : '—'}</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Khu vực</span>
          <span class="trn-settings-value">${emp && emp.region ? escHtml(emp.region) : '—'}</span>
        </div>
      </div>

      <div class="trn-settings-section">
        <h3>📊 Tiến độ đào tạo</h3>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Điểm trung bình</span>
          <span class="trn-settings-value" style="font-weight:700;">${overallScore || '—'}/10</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Rank</span>
          <span class="trn-settings-value">${overallRank ? '<span class="trn-lb-badge trn-rank-' + overallRank + '">' + overallRank + ' ' + getRankIcon(overallRank) + '</span>' : '—'}</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">K12 Sale Onboard</span>
          <span class="trn-settings-value">${getCompletionPercent()}%</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">CS K12 Onboard</span>
          <span class="trn-settings-value">${getCSK12CompletionPercent()}%</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">K18 Sale Onboard</span>
          <span class="trn-settings-value">${getK18CompletionPercent()}%</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Bài học đã xem</span>
          <span class="trn-settings-value">${getLessonsCompleted()}</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Quiz đã làm</span>
          <span class="trn-settings-value">${Object.keys(state.quizzes).length}</span>
        </div>
      </div>

      <div class="trn-settings-section">
        <h3>🔧 Tùy chọn</h3>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Đổi tên hiển thị</span>
          <button class="trn-settings-btn" onclick="window._trnChangeName()">Đổi tên</button>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Xóa cache đào tạo</span>
          <button class="trn-settings-btn danger" onclick="window._trnResetProgress()">Xóa toàn bộ</button>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Đăng xuất</span>
          <button class="trn-settings-btn danger" onclick="window._trnLogout()">Đăng xuất</button>
        </div>
      </div>

      <div style="text-align:center;padding:20px 0;font-size:0.72rem;color:#A0AEC0;">
        MindX Training Platform v2.1 &bull; April 2026
      </div>
    `;

    pageContent.innerHTML = html;
  }

  window._trnChangeName = function() {
    const name = prompt('Nhập tên mới:', state.userName);
    if (name && name.trim().length >= 2) {
      state.userName = name.trim();
      saveState();
      renderSettings();
    }
  };

  window._trnResetProgress = function() {
    if (confirm('Bạn có chắc muốn xóa toàn bộ dữ liệu học tập? Hành động này không thể hoàn tác.')) {
      state.quizzes = {};
      state.lessonsViewed = {};
      state.tipsRead = {};
      state.timeSpent = {};
      state.casesRead = {};
      saveState();
      renderSettings();
    }
  };

  window._trnLogout = function() {
    if (confirm('Đăng xuất khỏi hệ thống đào tạo?')) {
      try { safeStorage.removeItem('mindx_employee_session'); } catch(e) {}
      window.location.reload();
    }
  };

  /* ============================================================
     QUIZ ENGINE
     ============================================================ */
  let currentQuiz = null;
  let quizState = {
    questions: [],
    currentIndex: 0,
    answers: [],
    answered: [],
    score: 0,
    startTime: 0,
    timerInterval: null,
    timerRemaining: 0
  };

  function isTrnQuizOpen() {
    const modal = document.getElementById('trnQuizModal');
    return modal && !modal.classList.contains('hidden');
  }

  function findQuizData(quizId) {
    for (const day of TRAINING_DATA.onboard.days) {
      for (const section of day.sections) {
        if (section.quiz && section.quiz.id === quizId) return section.quiz;
      }
    }
    if (TRAINING_DATA.onboardCSK12) {
      for (const day of TRAINING_DATA.onboardCSK12.days) {
        for (const section of day.sections) {
          if (section.quiz && section.quiz.id === quizId) return section.quiz;
        }
      }
    }
    if (TRAINING_DATA.onboardK18) {
      for (const day of TRAINING_DATA.onboardK18.days) {
        for (const section of day.sections) {
          if (section.quiz && section.quiz.id === quizId) return section.quiz;
        }
      }
    }
    if (quizId === 'quiz_friday') {
      return { id: 'quiz_friday', title: 'Quiz Friday', questions: TRAINING_DATA.microlearning.quizFriday };
    }
    return null;
  }

  window._trnStartQuiz = function(quizId) {
    const quizData = findQuizData(quizId);
    if (!quizData) { alert('Quiz không tìm thấy!'); return; }

    currentQuiz = quizData;
    quizState = {
      questions: [...quizData.questions],
      currentIndex: 0,
      answers: new Array(quizData.questions.length).fill(-1),
      answered: new Array(quizData.questions.length).fill(false),
      score: 0,
      startTime: Date.now(),
      timerInterval: null,
      timerRemaining: quizData.timer || 0
    };

    const modal = document.getElementById('trnQuizModal');
    modal.classList.remove('hidden');
    document.getElementById('trnQuizTitle').textContent = quizData.title;

    if (quizData.timer) {
      document.getElementById('trnQuizTimer').classList.remove('hidden');
      quizState.timerRemaining = quizData.timer;
      updateTrnTimerDisplay();
      quizState.timerInterval = setInterval(() => {
        quizState.timerRemaining--;
        updateTrnTimerDisplay();
        if (quizState.timerRemaining <= 0) {
          clearInterval(quizState.timerInterval);
          finishTrnQuiz();
        }
      }, 1000);
    } else {
      document.getElementById('trnQuizTimer').classList.add('hidden');
    }

    renderTrnQuizQuestion();

    document.getElementById('trnQuizClose').onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeTrnQuiz();
    };

    // Click outside quiz container to close
    modal.onclick = function(e) {
      if (e.target === modal) closeTrnQuiz();
    };

    document.getElementById('trnQuizNext').onclick = trnQuizNext;
    document.getElementById('trnQuizPrev').onclick = trnQuizPrev;
  };

  function updateTrnTimerDisplay() {
    const mins = Math.floor(quizState.timerRemaining / 60);
    const secs = quizState.timerRemaining % 60;
    const el = document.getElementById('trnQuizTimer');
    el.textContent = `⏱ ${mins}:${secs.toString().padStart(2,'0')}`;
    if (quizState.timerRemaining < 60) el.style.color = '#E31F26';
  }

  function renderTrnQuizQuestion() {
    const idx = quizState.currentIndex;
    const q = quizState.questions[idx];
    const total = quizState.questions.length;

    document.getElementById('trnQuizProgress').textContent = `${idx+1}/${total}`;
    document.getElementById('trnQuizQuestion').textContent = `Câu ${idx+1}: ${q.q}`;

    const letters = ['A','B','C','D'];
    let optHtml = '';
    q.options.forEach((opt, i) => {
      let cls = 'trn-quiz-option';
      if (quizState.answered[idx]) {
        cls += ' disabled';
        if (i === q.correct) cls += ' correct';
        else if (i === quizState.answers[idx] && i !== q.correct) cls += ' wrong';
      } else if (quizState.answers[idx] === i) {
        cls += ' selected';
      }
      optHtml += `
        <div class="${cls}" data-idx="${i}" onclick="window._trnSelectOption(${i})">
          <span class="trn-quiz-option-letter">${letters[i]}</span>
          <span>${escHtml(opt)}</span>
        </div>`;
    });
    document.getElementById('trnQuizOptions').innerHTML = optHtml;

    const fbEl = document.getElementById('trnQuizFeedback');
    if (quizState.answered[idx]) {
      const isCorrect = quizState.answers[idx] === q.correct;
      fbEl.innerHTML = q.explanation || '';
      fbEl.className = `trn-quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`;
      fbEl.classList.remove('hidden');
    } else {
      fbEl.classList.add('hidden');
    }

    document.getElementById('trnQuizPrev').classList.toggle('hidden', idx === 0);
    if (idx === total - 1 && quizState.answered[idx]) {
      document.getElementById('trnQuizNext').textContent = 'Xem kết quả';
    } else {
      document.getElementById('trnQuizNext').textContent = 'Tiếp theo →';
    }
  }

  window._trnSelectOption = function(optIdx) {
    const idx = quizState.currentIndex;
    if (quizState.answered[idx]) return;

    quizState.answers[idx] = optIdx;
    quizState.answered[idx] = true;

    const q = quizState.questions[idx];
    if (optIdx === q.correct) quizState.score++;

    renderTrnQuizQuestion();
  };

  function trnQuizNext() {
    const idx = quizState.currentIndex;
    const total = quizState.questions.length;

    if (!quizState.answered[idx]) {
      alert('Vui lòng chọn đáp án trước khi tiếp tục.');
      return;
    }

    if (idx === total - 1) {
      finishTrnQuiz();
      return;
    }

    quizState.currentIndex++;
    renderTrnQuizQuestion();
  }

  function trnQuizPrev() {
    if (quizState.currentIndex > 0) {
      quizState.currentIndex--;
      renderTrnQuizQuestion();
    }
  }

  function finishTrnQuiz() {
    if (quizState.timerInterval) clearInterval(quizState.timerInterval);

    const timeTaken = Math.round((Date.now() - quizState.startTime) / 1000);
    const total = quizState.questions.length;
    const score = quizState.score;
    const scoreOutOf10 = ((score / total) * 10).toFixed(1);
    const rank = getRank(parseFloat(scoreOutOf10));

    // Save best score
    const existing = state.quizzes[currentQuiz.id];
    if (!existing || score > existing.score) {
      state.quizzes[currentQuiz.id] = {
        score: score,
        total: total,
        timestamp: Date.now(),
        answers: [...quizState.answers],
        timeTaken: timeTaken
      };
      saveState();
    }

    document.getElementById('trnQuizModal').classList.add('hidden');

    const resultIcons = { S: '🌟', A: '🎯', B: '👍', C: '📝', F: '💪' };
    const resultMsgs = {
      S: 'Xuất sắc! Bạn nắm vững kiến thức!',
      A: 'Rất tốt! Tiếp tục phát huy!',
      B: 'Tốt! Còn vài điểm cần ôn lại.',
      C: 'Được rồi! Hãy xem lại bài học nhé.',
      F: 'Cần ôn tập thêm. Đừng nản!'
    };

    document.getElementById('trnQuizResultsHeader').innerHTML = `
      <div class="trn-result-icon">${resultIcons[rank]}</div>
      <h3>${currentQuiz.title}</h3>
      <div class="trn-result-score" style="color:${rank === 'S' ? '#F59E0B' : rank === 'F' ? '#E31F26' : '#1A202C'};">${scoreOutOf10}/10</div>
      <span class="trn-result-rank trn-rank-${rank}">Rank ${rank}</span>
      <p style="margin-top:12px;font-size:0.85rem;color:#4A5568;">${resultMsgs[rank]}</p>
    `;

    const mins = Math.floor(timeTaken / 60);
    const secs = timeTaken % 60;

    document.getElementById('trnQuizResultsBody').innerHTML = `
      <div class="trn-result-stats">
        <div class="trn-result-stat">
          <div class="trn-result-stat-value" style="color:#059669;">${score}</div>
          <div class="trn-result-stat-label">Câu đúng</div>
        </div>
        <div class="trn-result-stat">
          <div class="trn-result-stat-value" style="color:#E31F26;">${total - score}</div>
          <div class="trn-result-stat-label">Câu sai</div>
        </div>
        <div class="trn-result-stat">
          <div class="trn-result-stat-value">${total}</div>
          <div class="trn-result-stat-label">Tổng câu</div>
        </div>
        <div class="trn-result-stat">
          <div class="trn-result-stat-value">${mins}:${secs.toString().padStart(2,'0')}</div>
          <div class="trn-result-stat-label">Thời gian</div>
        </div>
      </div>
    `;

    document.getElementById('trnQuizResultsModal').classList.remove('hidden');

    document.getElementById('trnQuizResultsClose').onclick = () => {
      document.getElementById('trnQuizResultsModal').classList.add('hidden');
      navigate(state.currentPage);
    };

    document.getElementById('trnQuizReview').onclick = () => {
      document.getElementById('trnQuizResultsModal').classList.add('hidden');
      showTrnQuizReview();
    };
  }

  function showTrnQuizReview() {
    const questions = quizState.questions;
    const answers = quizState.answers;
    const letters = ['A','B','C','D'];

    let html = `
      <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">📋 Xem lại đáp án — ${currentQuiz.title}</h3>
      <button class="trn-quiz-btn-secondary" onclick="window._trnNavigate('${state.currentPage}')" style="margin-bottom:20px;">← Quay lại</button>
    `;

    questions.forEach((q, i) => {
      const userAns = answers[i];
      const isCorrect = userAns === q.correct;
      html += `
        <div style="background:#FFFFFF;border-radius:10px;padding:16px 20px;margin-bottom:12px;border:1px solid #F1F5F9;border-left:4px solid ${isCorrect ? '#059669' : '#E31F26'};">
          <div style="font-weight:600;font-size:0.88rem;margin-bottom:10px;">Câu ${i+1}: ${escHtml(q.q)}</div>
          ${q.options.map((opt, j) => {
            let style = 'padding:6px 10px;margin:4px 0;border-radius:6px;font-size:0.82rem;';
            if (j === q.correct) style += 'background:#ECFDF5;color:#059669;font-weight:600;';
            else if (j === userAns) style += 'background:#FFF5F5;color:#E31F26;';
            return `<div style="${style}">${letters[j]}. ${escHtml(opt)} ${j === q.correct ? '✓' : ''} ${j === userAns && j !== q.correct ? '✗' : ''}</div>`;
          }).join('')}
          <div style="margin-top:8px;font-size:0.78rem;color:#4A5568;font-style:italic;">${q.explanation || ''}</div>
        </div>`;
    });

    pageContent.innerHTML = html;
    var pt = document.getElementById('pageTitle');
    if (pt) pt.textContent = 'Xem lại đáp án';
  }

  function closeTrnQuiz() {
    if (quizState.timerInterval) clearInterval(quizState.timerInterval);
    document.getElementById('trnQuizModal').classList.add('hidden');
    currentQuiz = null;
  }

  /* ---- Public API ---- */
  return {
    init: init,
    navigate: navigate,
    getState: function() { return state; }
  };

})();
