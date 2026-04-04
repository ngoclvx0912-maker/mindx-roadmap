/* ============================================================
   MindX Training Module — Embedded Mode
   Renders inside #trainingContainer within the Roadmap webapp.
   No standalone sidebar/login — managed by parent app.
   Version: 2.0-embed | March 2026
   ============================================================ */

window.TrainingEmbed = (function() {
  'use strict';

  const STORAGE_KEY = 'mindx_training';
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySnPbdLFoA2GSQ1g7u0JbGCdFP2Dt0pz31FQ5LbeRf3XVbVbQUoPkTZIaNuDPH_RuR/exec';

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

  /* ---- Quiz Registry ---- */
  var quizRegistry = [];

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

  // ===== REMOTE SCORE SAVE (Google Sheets) =====
  function saveQuizScoreRemote(quizId, score, total, attemptNum, timeSeconds) {
    try {
      var emp = getEmployeeSession();
      if (!emp || !emp.msnv) return; // only save if logged in with MSNV
      var entry = quizRegistry.find(function(q) { return q.id === quizId; });
      var overallScore = getProgramScore(null);
      var completion = 0;
      var programs = getPrograms();
      if (programs.length > 0) {
        var totalComp = 0;
        programs.forEach(function(p) { totalComp += getProgramCompletion(p.key); });
        completion = Math.round(totalComp / programs.length);
      }
      var overallRank = overallScore ? getRank(parseFloat(overallScore), completion, checkAllFinalExams()) : '';
      var payload = {
        action: 'save_quiz_score',
        employeeId: emp.msnv || '',
        employeeName: emp.name || state.userName || '',
        bu: emp.bu || '',
        region: emp.region || '',
        quizId: quizId,
        program: entry ? entry.program : '',
        quizTitle: entry ? entry.title : quizId,
        type: entry ? entry.type : 'quiz',
        weight: entry ? entry.weight : 1,
        score: score,
        total: total,
        attempt: attemptNum,
        timeSeconds: timeSeconds || 0,
        overallScore: overallScore || '',
        overallRank: overallRank || '',
        completion: completion
      };
      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function() { /* silent */ });
    } catch(e) { /* silent */ }
  }

  // ===== REMOTE LEADERBOARD FETCH =====
  var _cachedLeaderboard = null;
  var _lbCacheTime = 0;
  function fetchLeaderboard(callback) {
    // Cache for 60 seconds
    if (_cachedLeaderboard && (Date.now() - _lbCacheTime < 60000)) {
      callback(_cachedLeaderboard);
      return;
    }
    var url = APPS_SCRIPT_URL + '?action=get_training_leaderboard';
    fetch(url)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data && data.ok && data.entries) {
          _cachedLeaderboard = data.entries;
          _lbCacheTime = Date.now();
          callback(data.entries);
        } else {
          callback([]);
        }
      })
      .catch(function() { callback(_cachedLeaderboard || []); });
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
      var best = getBestScore(id);
      if (best === null) return;
      results.push({
        id: id,
        score: best.toFixed(1),
        total: q.total,
        correct: q.score,
        timestamp: q.timestamp || (q.attempts && q.attempts.length ? new Date(q.attempts[q.attempts.length-1].date).getTime() : 0)
      });
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

  /* ---- QUIZ REGISTRY ---- */
  function buildQuizRegistry() {
    var registry = [];
    var programs = [
      { key: 'onboard', program: 'sale_k12', label: 'Sale K12 Onboard', role: 'sale' },
      { key: 'onboardCSK12', program: 'csk12', label: 'CS K12 Onboard', role: 'cs' },
      { key: 'onboardK18', program: 'k18_sale', label: 'K18 Sale Onboard', role: 'sale' }
    ];

    // Auto-scan for any NEW programs not in the hardcoded list
    Object.keys(TRAINING_DATA).forEach(function(key) {
      if (key.startsWith('onboard') && TRAINING_DATA[key] && TRAINING_DATA[key].days) {
        var found = programs.find(function(p) { return p.key === key; });
        if (!found) {
          programs.push({ key: key, program: key, label: TRAINING_DATA[key].title || key, role: 'all' });
        }
      }
    });

    programs.forEach(function(prog) {
      var data = TRAINING_DATA[prog.key];
      if (!data || !data.days) return;
      data.days.forEach(function(day) {
        day.sections.forEach(function(section) {
          if (!section.quiz) return;
          var isFinal = section.quiz.questions && section.quiz.questions.length >= 20;
          registry.push({
            id: section.quiz.id,
            sectionId: section.id,
            program: prog.program,
            programLabel: prog.label,
            programKey: prog.key,
            day: day.day,
            dayLabel: day.title || day.subtitle || '',
            type: isFinal ? 'final_exam' : 'quiz',
            title: section.quiz.title || section.title,
            questionCount: section.quiz.questions ? section.quiz.questions.length : 0,
            weight: isFinal ? 3 : 1,
            maxAttempts: isFinal ? 3 : null,
            scorable: true,
            leaderboardGroup: ['total', prog.program],
            role: prog.role,
            tags: [prog.program]
          });
        });
      });
    });

    // Add microlearning quizzes
    if (TRAINING_DATA.microlearning && TRAINING_DATA.microlearning.quizFriday) {
      TRAINING_DATA.microlearning.quizFriday.forEach(function(q) {
        registry.push({
          id: q.id || 'quiz_friday',
          program: 'microlearning',
          programLabel: 'Quiz Friday',
          programKey: 'microlearning',
          type: 'microlearning',
          title: q.title || 'Quiz Friday',
          questionCount: q.questions ? q.questions.length : 0,
          weight: 0.5,
          maxAttempts: null,
          scorable: true,
          leaderboardGroup: ['total', 'quiz_friday'],
          role: 'all',
          tags: ['microlearning', 'friday']
        });
      });
      // Also register combined quiz_friday as a scorable entry if quizFriday is an array of questions
      if (!Array.isArray(TRAINING_DATA.microlearning.quizFriday[0]) && TRAINING_DATA.microlearning.quizFriday[0] && TRAINING_DATA.microlearning.quizFriday[0].q) {
        // quizFriday is a flat array of questions (not an array of quiz objects)
        // Remove what we added above and add a single entry
        registry = registry.filter(function(r) { return r.program !== 'microlearning'; });
        registry.push({
          id: 'quiz_friday',
          program: 'microlearning',
          programLabel: 'Quiz Friday',
          programKey: 'microlearning',
          type: 'microlearning',
          title: 'Quiz Friday',
          questionCount: TRAINING_DATA.microlearning.quizFriday.length,
          weight: 0.5,
          maxAttempts: null,
          scorable: true,
          leaderboardGroup: ['total', 'quiz_friday'],
          role: 'all',
          tags: ['microlearning', 'friday']
        });
      }
    }

    return registry;
  }

  function getAllQuizzes() {
    return quizRegistry.map(function(entry) {
      var quizData = findQuizData(entry.id);
      return {
        registry: entry,
        quiz: quizData,
        academy: entry.programLabel,
        dayTitle: entry.day ? 'Ngày ' + entry.day : '',
        icon: '📝'
      };
    }).filter(function(q) { return q.quiz; });
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
    quizRegistry = buildQuizRegistry();

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
    // Centralized view switch: hide K12/18+ content, show training
    if (window.switchView) window.switchView("training");

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

  // Get best score for a quiz (supports multi-attempt)
  function getBestScore(quizId) {
    var q = state.quizzes[quizId];
    if (!q) return null;
    // Multi-attempt format
    if (q.attempts && q.attempts.length > 0) {
      return Math.max.apply(null, q.attempts.map(function(a) { return a.score; }));
    }
    // Legacy single-attempt format
    if (q.score !== undefined && q.total !== undefined) {
      return (q.score / q.total) * 10;
    }
    return null;
  }

  // Get number of attempts for a quiz
  function getAttemptCount(quizId) {
    var q = state.quizzes[quizId];
    if (!q) return 0;
    if (q.attempts) return q.attempts.length;
    if (q.score !== undefined) return 1;
    return 0;
  }

  // Backward-compatible single-quiz score display string
  function getScore(quizId) {
    var best = getBestScore(quizId);
    if (best === null) return null;
    return best.toFixed(1);
  }

  // Get weighted score for a specific program (or all programs when programId is falsy)
  function getProgramScore(programId) {
    var entries = quizRegistry.filter(function(q) {
      return q.scorable && (programId ? q.program === programId : true);
    });
    var totalWeighted = 0, totalWeight = 0;
    entries.forEach(function(q) {
      var result = getBestScore(q.id);
      if (result !== null) {
        totalWeighted += result * q.weight;
        totalWeight += q.weight;
      }
    });
    if (totalWeight === 0) return null;
    return (totalWeighted / totalWeight).toFixed(1);
  }

  // Get completion % for a program by programKey (TRAINING_DATA key)
  function getProgramCompletion(programKey) {
    var data = TRAINING_DATA[programKey];
    if (!data || !data.days) return 0;
    var total = 0, completed = 0;
    data.days.forEach(function(day) {
      day.sections.forEach(function(s) {
        total++;
        if (state.lessonsViewed[s.id]) completed++;
      });
    });
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }

  // Get deduplicated programs list from registry (excludes microlearning)
  function getPrograms() {
    var seen = {};
    var programs = [];
    quizRegistry.forEach(function(q) {
      if (q.program === 'microlearning') return;
      if (!seen[q.program]) {
        seen[q.program] = true;
        programs.push({ id: q.program, label: q.programLabel, key: q.programKey });
      }
    });
    return programs;
  }

  // Check if all final exams are >= 9
  function checkAllFinalExams() {
    var finals = quizRegistry.filter(function(q) { return q.type === 'final_exam'; });
    if (finals.length === 0) return false;
    return finals.every(function(q) {
      var score = getBestScore(q.id);
      return score !== null && score >= 9;
    });
  }

  // Upgraded rank with S+
  function getRank(score, completion, allFinalExamsAbove9) {
    if (score === null || score === undefined) return null;
    var s = parseFloat(score);
    if (isNaN(s)) return null;
    // Support legacy call with just score number
    if (completion === undefined) {
      if (s >= 9.0) return 'S';
      if (s >= 8.0) return 'A';
      if (s >= 7.0) return 'B';
      if (s >= 6.0) return 'C';
      return 'F';
    }
    if (s >= 9.5 && completion >= 100 && allFinalExamsAbove9) return 'S+';
    if (s >= 9.0 && completion >= 90) return 'S';
    if (s >= 8.0) return 'A';
    if (s >= 7.0) return 'B';
    if (s >= 6.0) return 'C';
    return 'F';
  }

  function getRankIcon(rank) {
    var icons = { 'S+': '👑', S: '⭐', A: '🔵', B: '🟢', C: '🟡', F: '🔴' };
    return icons[rank] || '';
  }

  // Registry-driven overall score (weighted)
  function getOverallScore() {
    return getProgramScore(null);
  }

  function getOverallRank() {
    var score = getOverallScore();
    if (score === null) return null;
    var completion = getCompletionPercent();
    var allFinals = checkAllFinalExams();
    return getRank(parseFloat(score), completion, allFinals);
  }

  // Completion helpers (registry-driven, backward compatible)
  function getCompletionPercent() {
    return getProgramCompletion('onboard');
  }

  function getK18CompletionPercent() {
    return getProgramCompletion('onboardK18');
  }

  function getCSK12CompletionPercent() {
    return getProgramCompletion('onboardCSK12');
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
      var totalCompletion = Math.round((getCompletionPercent() + getK18CompletionPercent() + getCSK12CompletionPercent()) / 3);
      var userEntry = { name: displayName, score: parseFloat(overallScore), completion: totalCompletion, rank: getOverallRank() };
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
        ${(function() {
          var progIcons = { 'sale_k12': '🎯', 'csk12': '💚', 'k18_sale': '🚀' };
          var progColors = { 'sale_k12': 'red', 'csk12': 'green', 'k18_sale': 'blue' };
          var progPages = { 'sale_k12': 'day1', 'csk12': 'csk12_day1', 'k18_sale': 'k18_day1' };
          return getPrograms().map(function(prog) {
            var pCompletion = getProgramCompletion(prog.key);
            var pScore = getProgramScore(prog.id);
            var pRank = pScore ? getRank(parseFloat(pScore), pCompletion, checkAllFinalExams()) : null;
            var sectionCount = TRAINING_DATA[prog.key] ? TRAINING_DATA[prog.key].days.reduce(function(a,d){return a+d.sections.length;},0) : 0;
            var dayCount = TRAINING_DATA[prog.key] ? TRAINING_DATA[prog.key].days.length : 0;
            var icon = progIcons[prog.id] || '📚';
            var colorClass = progColors[prog.id] || 'red';
            var navPage = progPages[prog.id] || (prog.key + '1');
            return '<div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;cursor:pointer;" onclick="window._trnNavigate(\'' + navPage + '\')">' +
              '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">' +
              '<span style="font-size:1.5rem;">' + icon + '</span>' +
              '<div>' +
              '<div style="font-size:0.92rem;font-weight:700;color:#1A202C;">' + prog.label + '</div>' +
              '<div style="font-size:0.72rem;color:#A0AEC0;">' + dayCount + ' ngày &bull; ' + sectionCount + ' phần' +
              (pScore ? ' &bull; ' + pScore + '/10 ' + (pRank ? getRankIcon(pRank) : '') : '') + '</div>' +
              '</div></div>' +
              '<div class="trn-progress-bar"><div class="trn-progress-fill ' + colorClass + '" style="width:' + pCompletion + '%"></div></div>' +
              '<div style="font-size:0.75rem;color:#A0AEC0;margin-top:6px;">' + pCompletion + '% ho\u00e0n th\u00e0nh</div>' +
              '</div>';
          }).join('');
        })()}
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
    var completedQuizzes = allQ.filter(function(q) { return state.quizzes[q.registry.id]; }).length;
    var avgStr = getQuizAverage();
    var programs = getPrograms();

    var html = '<div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;margin-bottom:20px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;">' +
      '<div style="text-align:center;"><div style="font-size:1.8rem;font-weight:800;color:#1A202C;">' + completedQuizzes + '/' + totalQuizzes + '</div><div style="font-size:0.72rem;color:#A0AEC0;">Quiz đã làm</div></div>' +
      '<div style="text-align:center;"><div style="font-size:1.8rem;font-weight:800;color:#1A202C;">' + avgStr + '</div><div style="font-size:0.72rem;color:#A0AEC0;">Điểm TB (có trọng số)</div></div>' +
      '<div style="flex:1;"><div class="trn-progress-bar" style="height:10px;"><div class="trn-progress-fill red" style="width:' + (totalQuizzes > 0 ? Math.round(completedQuizzes/totalQuizzes*100) : 0) + '%"></div></div></div>' +
      '</div>';

    // Render per-program groups
    programs.forEach(function(prog) {
      var progQuizzes = allQ.filter(function(q) { return q.registry.program === prog.id; });
      if (progQuizzes.length === 0) return;

      var progScore = getProgramScore(prog.id);
      html += '<h3 style="font-size:0.95rem;font-weight:700;margin:20px 0 8px;color:#1A202C;">' +
        prog.label + (progScore ? ' <span style="font-weight:400;color:#4A5568;font-size:0.82rem;">— ' + progScore + '/10</span>' : '') + '</h3>';

      // Group by day within program
      var days = {};
      progQuizzes.forEach(function(q) {
        var dk = q.registry.day || 0;
        if (!days[dk]) days[dk] = [];
        days[dk].push(q);
      });

      Object.keys(days).sort(function(a,b){return parseInt(a)-parseInt(b);}).forEach(function(dayKey) {
        if (parseInt(dayKey) > 0) {
          html += '<div style="font-size:0.78rem;font-weight:700;color:#2563EB;margin:12px 0 6px;text-transform:uppercase;letter-spacing:0.05em;">Ngày ' + dayKey + '</div>';
        }
        html += '<div class="trn-quiz-hub-grid">';
        days[dayKey].forEach(function(q) {
          var score = getScore(q.registry.id);
          var rk = score !== null ? getRank(parseFloat(score)) : null;
          var statusIcon = rk ? (rk === 'F' ? '✗' : '✓') : '—';
          var statusColor = rk ? (rk === 'F' ? '#E31F26' : '#059669') : '#A0AEC0';
          var attempts = getAttemptCount(q.registry.id);
          var maxAttempts = q.registry.maxAttempts;
          var locked = maxAttempts && attempts >= maxAttempts;
          var weightLabel = q.registry.type === 'final_exam' ? ' • Thi cuối khóa' : '';
          html += '<div class="trn-quiz-hub-card" ' + (locked ? '' : 'onclick="window._trnStartQuiz(\'' + q.registry.id + '\')"') + ' style="' + (locked ? 'opacity:0.7;cursor:default;' : 'cursor:pointer;') + '">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;">' +
            '<div class="trn-qh-icon">' + q.icon + '</div>' +
            '<span style="font-size:0.72rem;font-weight:700;color:' + statusColor + ';">' + statusIcon + ' ' + (rk ? 'Rank ' + rk : 'Chưa làm') + '</span>' +
            '</div>' +
            '<div class="trn-qh-title">' + q.registry.title + '</div>' +
            '<div class="trn-qh-meta">' + (q.dayTitle || '') + ' — ' + q.registry.questionCount + ' câu • ×' + q.registry.weight + weightLabel + '</div>' +
            (score !== null ? '<div class="trn-qh-score">Điểm cao nhất: ' + score + '/10' + (attempts > 0 ? ' (' + attempts + ' lượt)' : '') + '</div>' : '') +
            (locked ? '<div style="margin-top:6px;font-size:0.72rem;color:#E31F26;font-weight:600;">Đã hết lượt thi (' + attempts + '/' + maxAttempts + ')</div>' :
              (score !== null ? '<div style="margin-top:6px;"><button style="padding:4px 12px;background:#F8F9FA;border:1px solid #E2E8F0;border-radius:6px;font-family:inherit;font-size:0.72rem;font-weight:600;cursor:pointer;">Làm lại</button></div>' : '')) +
            '</div>';
        });
        html += '</div>';
      });
    });

    // Microlearning / Quiz Friday section
    var fridayQ = allQ.filter(function(q) { return q.registry.program === 'microlearning'; });
    if (fridayQ.length > 0) {
      html += '<h3 style="font-size:0.95rem;font-weight:700;margin:20px 0 8px;color:#1A202C;">Microlearning</h3>';
      html += '<div class="trn-quiz-hub-grid">';
      fridayQ.forEach(function(q) {
        var score = getScore(q.registry.id);
        var rk = score !== null ? getRank(parseFloat(score)) : null;
        var statusIcon = rk ? (rk === 'F' ? '✗' : '✓') : '—';
        var statusColor = rk ? (rk === 'F' ? '#E31F26' : '#059669') : '#A0AEC0';
        html += '<div class="trn-quiz-hub-card" onclick="window._trnStartQuiz(\'' + q.registry.id + '\')">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;">' +
          '<div class="trn-qh-icon">🎯</div>' +
          '<span style="font-size:0.72rem;font-weight:700;color:' + statusColor + ';">' + statusIcon + ' ' + (rk ? 'Rank ' + rk : 'Chưa làm') + '</span>' +
          '</div>' +
          '<div class="trn-qh-title">' + q.registry.title + '</div>' +
          '<div class="trn-qh-meta">Hàng tuần — ' + q.registry.questionCount + ' câu</div>' +
          (score !== null ? '<div class="trn-qh-score">Điểm cao nhất: ' + score + '/10</div>' : '') +
          (score !== null ? '<div style="margin-top:6px;"><button style="padding:4px 12px;background:#F8F9FA;border:1px solid #E2E8F0;border-radius:6px;font-family:inherit;font-size:0.72rem;font-weight:600;cursor:pointer;">Làm lại</button></div>' : '') +
          '</div>';
      });
      html += '</div>';
    }

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: QUIZ RESULTS ---- */
  function renderQuizResults() {
    var overallScore = getOverallScore();
    var overallRank = getOverallRank();
    var programs = getPrograms();
    var allQ = getAllQuizzes();

    var html = '<div class="trn-dash-welcome" style="margin-bottom:24px;">' +
      '<h2>Kết quả tổng hợp</h2>' +
      '<p>Điểm có trọng số: ' + (overallScore || '—') + '/10' +
      (overallRank ? ' | Rank: ' + overallRank + ' ' + getRankIcon(overallRank) : '') + '</p>' +
      '</div>';

    var hasAny = Object.keys(state.quizzes).length > 0;
    if (!hasAny) {
      html += '<p style="color:#A0AEC0;font-size:0.85rem;">Bạn chưa làm quiz nào. Hãy bắt đầu từ lộ trình Onboard!</p>';
      pageContent.innerHTML = html;
      return;
    }

    // Per-program breakdown
    programs.forEach(function(prog) {
      var progScore = getProgramScore(prog.id);
      var progCompletion = getProgramCompletion(prog.key);
      var progRank = progScore ? getRank(parseFloat(progScore), progCompletion, checkAllFinalExams()) : null;
      var progQuizzes = allQ.filter(function(q) { return q.registry.program === prog.id && state.quizzes[q.registry.id]; });
      if (progQuizzes.length === 0) return;

      html += '<div style="margin-bottom:24px;">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">' +
        '<h3 style="font-size:0.95rem;font-weight:700;margin:0;">' + prog.label + '</h3>' +
        (progScore ? '<div style="display:flex;align-items:center;gap:8px;">' +
          '<span style="font-size:0.92rem;font-weight:700;">' + progScore + '/10</span>' +
          (progRank ? '<span class="trn-lb-badge trn-rank-' + progRank + '">' + progRank + ' ' + getRankIcon(progRank) + '</span>' : '') +
          '</div>' : '') +
        '</div>' +
        '<div class="trn-results-grid">';

      progQuizzes.forEach(function(q) {
        var score = getScore(q.registry.id);
        var rank = score !== null ? getRank(parseFloat(score)) : null;
        var bestNum = getBestScore(q.registry.id);
        var attempts = getAttemptCount(q.registry.id);
        var qData = state.quizzes[q.registry.id];
        var date = qData && qData.timestamp ? new Date(qData.timestamp).toLocaleDateString('vi-VN') : '—';
        var correctCount = qData && qData.score !== undefined ? qData.score : '—';
        var totalCount = qData && qData.total !== undefined ? qData.total : '—';
        var typeLabel = q.registry.type === 'final_exam' ? ' 🎓 Thi cuối' : '';

        html += '<div class="trn-result-card">' +
          '<div class="trn-rc-quiz">' +
          '<div class="trn-rc-quiz-name">' + q.registry.title + typeLabel + '</div>' +
          '<div class="trn-rc-quiz-date">' + date + ' — ' + correctCount + '/' + totalCount + ' câu đúng' +
          (attempts > 1 ? ' &bull; ' + attempts + ' lượt' : '') + '</div>' +
          '</div>' +
          '<div class="trn-rc-score">' + (score || '—') + '/10</div>' +
          (rank ? '<span class="trn-lb-badge trn-rank-' + rank + '">' + rank + '</span>' : '') +
          '</div>';
      });

      html += '</div></div>';
    });

    // Microlearning results
    var fridayDone = allQ.filter(function(q) { return q.registry.program === 'microlearning' && state.quizzes[q.registry.id]; });
    if (fridayDone.length > 0) {
      html += '<div style="margin-bottom:24px;">' +
        '<h3 style="font-size:0.95rem;font-weight:700;margin-bottom:12px;">Microlearning</h3>' +
        '<div class="trn-results-grid">';
      fridayDone.forEach(function(q) {
        var score = getScore(q.registry.id);
        var rank = score !== null ? getRank(parseFloat(score)) : null;
        var qData = state.quizzes[q.registry.id];
        var date = qData && qData.timestamp ? new Date(qData.timestamp).toLocaleDateString('vi-VN') : '—';
        html += '<div class="trn-result-card">' +
          '<div class="trn-rc-quiz">' +
          '<div class="trn-rc-quiz-name">' + q.registry.title + '</div>' +
          '<div class="trn-rc-quiz-date">' + date + '</div>' +
          '</div>' +
          '<div class="trn-rc-score">' + (score || '—') + '/10</div>' +
          (rank ? '<span class="trn-lb-badge trn-rank-' + rank + '">' + rank + '</span>' : '') +
          '</div>';
      });
      html += '</div></div>';
    }

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
  function renderLeaderboard(activeTab) {
    var emp = getEmployeeSession();
    var displayName = emp && emp.name ? emp.name : state.userName;
    var userBU = emp && emp.bu ? emp.bu : '';
    var overallScore = getOverallScore();
    var overallRank = getOverallRank();
    var medals = ['🥇','🥈','🥉'];

    // Build tab list dynamically from registry
    var tabs = [{ id: 'total', label: 'Tổng hợp' }];
    getPrograms().forEach(function(p) { tabs.push({ id: p.id, label: p.label }); });
    tabs.push({ id: 'quiz_friday', label: 'Quiz Friday' });

    if (!activeTab) activeTab = 'total';

    // Expose re-render for tab clicks
    window._trnLbTab = function(tab) { renderLeaderboard(tab); };

    // Show loading state while fetching remote leaderboard
    pageContent.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#A0AEC0;"><div style="font-size:2rem;margin-bottom:12px;">⏳</div>Đang tải bảng xếp hạng...</div>';

    // Fetch real data from Google Sheets
    var userMSNV = emp && emp.msnv ? emp.msnv : '';
    fetchLeaderboard(function(remoteEntries) {
      _renderLeaderboardWithData(remoteEntries, activeTab, tabs, displayName, userMSNV, userBU, overallScore, overallRank);
    });
  }

  function _renderLeaderboardWithData(remoteEntries, activeTab, tabs, displayName, userMSNV, userBU, overallScore, overallRank) {
    var medals = ['🥇','🥈','🥉'];
    var baseEntries = remoteEntries.slice();

    // Inject current user's LOCAL score if not in remote yet (just finished quiz, hasn't synced)
    if (overallScore !== null && userMSNV) {
      var totalCompletion = 0;
      var programs = getPrograms();
      if (programs.length > 0) {
        var tc = 0;
        programs.forEach(function(p) { tc += getProgramCompletion(p.key); });
        totalCompletion = Math.round(tc / programs.length);
      }
      var found = baseEntries.findIndex(function(e) { return e.employeeId === userMSNV; });
      var localEntry = {
        employeeId: userMSNV,
        name: displayName,
        score: parseFloat(overallScore),
        completion: totalCompletion,
        rank: overallRank,
        bu: userBU
      };
      if (found >= 0) {
        // Use higher score between remote and local
        if (localEntry.score > baseEntries[found].score) baseEntries[found] = localEntry;
      } else {
        baseEntries.push(localEntry);
      }
    }

    baseEntries.sort(function(a,b) { return b.score - a.score; });
    var userRankPos = baseEntries.findIndex(function(e) { return e.employeeId === userMSNV || e.name === displayName; });
    var totalPeople = baseEntries.length;

    // Tabs HTML
    var tabsHtml = '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">' +
      tabs.map(function(t) {
        var isActive = t.id === activeTab;
        return '<button onclick="window._trnLbTab(\'' + t.id + '\')" style="padding:6px 14px;border-radius:20px;border:1px solid ' +
          (isActive ? '#E31F26' : '#E2E8F0') + ';background:' + (isActive ? '#E31F26' : '#FFFFFF') +
          ';color:' + (isActive ? '#FFFFFF' : '#4A5568') + ';font-family:inherit;font-size:0.78rem;font-weight:' +
          (isActive ? '700' : '500') + ';cursor:pointer;">' + t.label + '</button>';
      }).join('') +
      '</div>';

    var html = '';

    // User's own stat card
    if (overallScore !== null) {
      html += '<div style="background:#FFFFFF;border-radius:10px;padding:20px;border:1px solid #F1F5F9;margin-bottom:20px;display:flex;align-items:center;gap:20px;">' +
        '<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#E31F26,#B91C22);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800;">' +
        (userRankPos >= 0 ? userRankPos + 1 : '—') + '</div>' +
        '<div>' +
        '<div style="font-size:0.92rem;font-weight:700;">Điểm của bạn: ' + overallScore + '/10</div>' +
        '<div style="font-size:0.78rem;color:#A0AEC0;">Xếp hạng ' + (userRankPos >= 0 ? '#' + (userRankPos+1) : '—') + ' trên ' + baseEntries.length + ' người ' + (userBU ? '&bull; BU: ' + escHtml(userBU) : '') + '</div>' +
        '</div>' +
        (overallRank ? '<span class="trn-lb-badge trn-rank-' + overallRank + '" style="font-size:0.85rem;padding:6px 16px;">' + overallRank + ' ' + getRankIcon(overallRank) + '</span>' : '') +
        '</div>';
    }

    html += tabsHtml;
    html += '<h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">🏆 Bảng xếp hạng TVTS</h3>';

    // Scoring method explanation
    var scoringNote = activeTab === 'total'
      ? 'Tất cả quiz có trọng số (×1 = quiz thường, ×3 = thi cuối, ×0.5 = Quiz Friday)'
      : 'Chỉ tính quiz thuộc chương trình này';
    html += '<div style="background:#F8F9FA;border-radius:8px;padding:12px 16px;font-size:0.78rem;color:#4A5568;margin-bottom:16px;line-height:1.5;">' +
      '<strong>Cách tính điểm:</strong> ' + scoringNote + '. Rank: S+ (≥9.5, 100%, tất cả thi cuối ≥9) &bull; S (≥9, ≥90%) &bull; A (≥8) &bull; B (≥7) &bull; C (≥6) &bull; F (<6)' +
      '</div>';

    html += '<table class="trn-leaderboard-table"><thead><tr>' +
      '<th style="width:60px;">#</th><th>Họ tên</th><th>BU</th><th>Điểm</th><th>Hoàn thành</th><th>Rank</th>' +
      '</tr></thead><tbody>';

    // Show top 20 + current user if outside top 20
    var MAX_SHOW = 20;
    var userShown = false;
    var top20 = baseEntries.slice(0, MAX_SHOW);

    top20.forEach(function(e, i) {
      var isMe = (e.employeeId && e.employeeId === userMSNV) || e.name === displayName;
      if (isMe) userShown = true;
      var topClass = i === 0 ? 'top1' : i === 1 ? 'top2' : i === 2 ? 'top3' : '';
      var rk = e.rank || getRank(e.score, e.completion || 0, false);
      var rankBadge = rk ? '<span class="trn-lb-badge trn-rank-' + rk + '">' + rk + ' ' + getRankIcon(rk) + '</span>' : '—';
      html += '<tr style="' + (isMe ? 'background:#FFF5F5;font-weight:600;' : '') + '">' +
        '<td><span class="trn-lb-rank-num ' + topClass + '">' + (i < 3 ? medals[i] : (i+1)) + '</span></td>' +
        '<td>' + escHtml(e.name || '') + (isMe ? ' <span style="font-size:0.72rem;color:#E31F26;">(Bạn)</span>' : '') + '</td>' +
        '<td style="font-size:0.78rem;color:#4A5568;">' + (e.bu ? escHtml(e.bu) : '—') + '</td>' +
        '<td style="font-weight:700;">' + (e.score != null ? e.score.toFixed(1) : '—') + '</td>' +
        '<td>' + (e.completion || 0) + '%</td>' +
        '<td>' + rankBadge + '</td>' +
        '</tr>';
    });

    // If current user is outside top 20, add separator + their row
    if (!userShown && userRankPos >= MAX_SHOW) {
      html += '<tr style="border-top:2px dashed #E2E8F0;"><td colspan="6" style="text-align:center;color:#A0AEC0;font-size:0.75rem;padding:6px 0;">&#8230;</td></tr>';
      var me = baseEntries[userRankPos];
      var myRank = me.rank || getRank(me.score, me.completion || 0, false);
      var myBadge = myRank ? '<span class="trn-lb-badge trn-rank-' + myRank + '">' + myRank + ' ' + getRankIcon(myRank) + '</span>' : '—';
      html += '<tr style="background:#FFF5F5;font-weight:600;">' +
        '<td><span class="trn-lb-rank-num">' + (userRankPos+1) + '</span></td>' +
        '<td>' + escHtml(me.name || '') + ' <span style="font-size:0.72rem;color:#E31F26;">(Bạn)</span></td>' +
        '<td style="font-size:0.78rem;color:#4A5568;">' + (me.bu ? escHtml(me.bu) : '—') + '</td>' +
        '<td style="font-weight:700;">' + (me.score != null ? me.score.toFixed(1) : '—') + '</td>' +
        '<td>' + (me.completion || 0) + '%</td>' +
        '<td>' + myBadge + '</td>' +
        '</tr>';
    }

    if (baseEntries.length === 0) {
      html += '<tr><td colspan="6" style="text-align:center;color:#A0AEC0;padding:40px 0;">Chưa có dữ liệu. Hãy làm quiz đầu tiên!</td></tr>';
    }

    html += '</tbody></table>';
    html += '<div style="text-align:center;font-size:0.72rem;color:#A0AEC0;margin-top:12px;">Hiển thị top ' + Math.min(MAX_SHOW, baseEntries.length) + '/' + totalPeople + ' nhân viên • Cập nhật tự động khi làm quiz</div>';
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
        ${getPrograms().map(function(prog) {
          return '<div class="trn-settings-row">' +
            '<span class="trn-settings-label">' + prog.label + '</span>' +
            '<span class="trn-settings-value">' + getProgramCompletion(prog.key) + '%</span>' +
            '</div>';
        }).join('')}
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

    // Multi-attempt tracking with max-attempt enforcement
    var quizId = currentQuiz.id;
    var entry = quizRegistry.find(function(q) { return q.id === quizId; });

    // Check max attempts before saving (shouldn't reach here if locked, but guard anyway)
    if (entry && entry.maxAttempts) {
      var prevAttempts = getAttemptCount(quizId);
      if (prevAttempts >= entry.maxAttempts) {
        // Max attempts already reached — do not save, still show result
      } else {
        // Store attempt
        if (!state.quizzes[quizId]) {
          state.quizzes[quizId] = { attempts: [], score: score, total: total, timestamp: Date.now() };
        }
        if (!state.quizzes[quizId].attempts) state.quizzes[quizId].attempts = [];
        state.quizzes[quizId].attempts.push({
          score: (score / total) * 10,
          time: timeTaken,
          date: new Date().toISOString().split('T')[0],
          answers: quizState.answers.slice()
        });
        // Keep best score in top-level for backward compatibility
        var bestScore = Math.max.apply(null, state.quizzes[quizId].attempts.map(function(a) { return a.score; }));
        state.quizzes[quizId].score = Math.round(bestScore * total / 10);
        state.quizzes[quizId].total = total;
        state.quizzes[quizId].timestamp = Date.now();
        saveState();
      }
    } else {
      // No max attempt limit — save best score (legacy + attempts tracking)
      if (!state.quizzes[quizId]) {
        state.quizzes[quizId] = { attempts: [], score: score, total: total, timestamp: Date.now() };
      }
      if (!state.quizzes[quizId].attempts) state.quizzes[quizId].attempts = [];
      state.quizzes[quizId].attempts.push({
        score: (score / total) * 10,
        time: timeTaken,
        date: new Date().toISOString().split('T')[0],
        answers: quizState.answers.slice()
      });
      // Keep best score in top-level for backward compatibility
      var bestAll = Math.max.apply(null, state.quizzes[quizId].attempts.map(function(a) { return a.score; }));
      state.quizzes[quizId].score = Math.round(bestAll * total / 10);
      state.quizzes[quizId].total = total;
      state.quizzes[quizId].timestamp = Date.now();
      saveState();
    }

    // === REMOTE SAVE to Google Sheets ===
    var attemptNum = state.quizzes[quizId] && state.quizzes[quizId].attempts ? state.quizzes[quizId].attempts.length : 1;
    saveQuizScoreRemote(quizId, score, total, attemptNum, timeTaken);

    document.getElementById('trnQuizModal').classList.add('hidden');

    const resultIcons = { 'S+': '👑', S: '🌟', A: '🎯', B: '👍', C: '📝', F: '💪' };
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
