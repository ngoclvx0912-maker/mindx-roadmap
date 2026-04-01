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

    let html = `
      <div class="trn-dash-welcome">
        <h2>Xin chào, ${escHtml(state.userName)}! 👋</h2>
        <p>Chào mừng bạn đến hệ thống đào tạo TVTS MindX. Hoàn thành các bài học và quiz để nâng cao kỹ năng tư vấn.</p>
        ${rank ? `<div class="trn-dash-rank-badge">${getRankIcon(rank)}</div>` : ''}
      </div>

      <div class="trn-dash-stats">
        <div class="trn-stat-box">
          <div class="trn-stat-box-icon">📊</div>
          <div class="trn-stat-box-value">${completion}%</div>
          <div class="trn-stat-box-label">K12 Onboard</div>
        </div>
        <div class="trn-stat-box">
          <div class="trn-stat-box-icon">🎯</div>
          <div class="trn-stat-box-value">${csk12completion}%</div>
          <div class="trn-stat-box-label">CS K12 Onboard</div>
        </div>
        <div class="trn-stat-box">
          <div class="trn-stat-box-icon">🚀</div>
          <div class="trn-stat-box-value">${k18completion}%</div>
          <div class="trn-stat-box-label">K18 Onboard</div>
        </div>
        <div class="trn-stat-box">
          <div class="trn-stat-box-icon">📚</div>
          <div class="trn-stat-box-value">${lessonsCount}</div>
          <div class="trn-stat-box-label">Bài học đã xem</div>
        </div>
        <div class="trn-stat-box">
          <div class="trn-stat-box-icon">📝</div>
          <div class="trn-stat-box-value">${avgScore}</div>
          <div class="trn-stat-box-label">Điểm TB Quiz</div>
        </div>
      </div>

      <div class="trn-dash-progress">
        <h3>Tiến độ K12 Onboard</h3>
        ${TRAINING_DATA.onboard.days.map(day => {
          const total = day.sections.length;
          const done = day.sections.filter(s => state.lessonsViewed[s.id]).length;
          const pct = total > 0 ? Math.round((done/total)*100) : 0;
          const colors = { 1:'red', 2:'blue', 3:'green', 4:'orange', 5:'purple' };
          return `
            <div class="trn-progress-bar-container">
              <div class="trn-progress-label">
                <span>Ngày ${day.day}: ${day.title}</span>
                <span>${done}/${total} (${pct}%)</span>
              </div>
              <div class="trn-progress-bar">
                <div class="trn-progress-fill ${colors[day.day]}" style="width:${pct}%"></div>
              </div>
            </div>`;
        }).join('')}
      </div>

      ${TRAINING_DATA.onboardCSK12 ? `
      <div class="trn-dash-progress">
        <h3>Tiến độ CS K12 Onboard</h3>
        ${TRAINING_DATA.onboardCSK12.days.map(day => {
          const total = day.sections.length;
          const done = day.sections.filter(s => state.lessonsViewed[s.id]).length;
          const pct = total > 0 ? Math.round((done/total)*100) : 0;
          const colors = { 1:'red', 2:'blue', 3:'green', 4:'orange', 5:'purple' };
          return `
            <div class="trn-progress-bar-container">
              <div class="trn-progress-label">
                <span>CS K12 Ngày ${day.day}: ${day.title}</span>
                <span>${done}/${total} (${pct}%)</span>
              </div>
              <div class="trn-progress-bar">
                <div class="trn-progress-fill ${colors[day.day]}" style="width:${pct}%"></div>
              </div>
            </div>`;
        }).join('')}
      </div>
      ` : ''}

      ${TRAINING_DATA.onboardK18 ? `
      <div class="trn-dash-progress">
        <h3>Tiến độ K18 Onboard</h3>
        ${TRAINING_DATA.onboardK18.days.map(day => {
          const total = day.sections.length;
          const done = day.sections.filter(s => state.lessonsViewed[s.id]).length;
          const pct = total > 0 ? Math.round((done/total)*100) : 0;
          const colors = { 1:'red', 2:'blue', 3:'green', 4:'orange', 5:'purple' };
          return `
            <div class="trn-progress-bar-container">
              <div class="trn-progress-label">
                <span>K18 Ngày ${day.day}: ${day.title}</span>
                <span>${done}/${total} (${pct}%)</span>
              </div>
              <div class="trn-progress-bar">
                <div class="trn-progress-fill ${colors[day.day]}" style="width:${pct}%"></div>
              </div>
            </div>`;
        }).join('')}
      </div>
      ` : ''}

      <h3 style="font-size:1rem;font-weight:700;margin-bottom:16px;">Lộ trình Onboard K12 (5 ngày)</h3>
      <div class="trn-dash-days-grid">
        ${TRAINING_DATA.onboard.days.map(day => `
          <div class="trn-dash-day-card" onclick="window._trnNavigate('day${day.day}')">
            <div class="trn-day-icon">${day.icon}</div>
            <div class="trn-day-num" style="color:${day.color}">Ngày ${day.day}</div>
            <div class="trn-day-title">${day.title}</div>
            <div class="trn-day-subtitle">${day.subtitle}</div>
          </div>
        `).join('')}
      </div>

      ${TRAINING_DATA.onboardCSK12 ? `
      <h3 style="font-size:1rem;font-weight:700;margin:24px 0 16px;">Lộ trình Onboard CS K12 (5 ngày)</h3>
      <div class="trn-dash-days-grid">
        ${TRAINING_DATA.onboardCSK12.days.map(day => `
          <div class="trn-dash-day-card" onclick="window._trnNavigate('csk12_day${day.day}')">
            <div class="trn-day-icon">${day.icon}</div>
            <div class="trn-day-num" style="color:${day.color}">CS Ngày ${day.day}</div>
            <div class="trn-day-title">${day.title}</div>
            <div class="trn-day-subtitle">${day.subtitle}</div>
          </div>
        `).join('')}
      </div>
      ` : ''}

      ${TRAINING_DATA.onboardK18 ? `
      <h3 style="font-size:1rem;font-weight:700;margin:24px 0 16px;">Lộ trình Onboard K18 Sale (5 ngày)</h3>
      <div class="trn-dash-days-grid">
        ${TRAINING_DATA.onboardK18.days.map(day => `
          <div class="trn-dash-day-card" onclick="window._trnNavigate('k18_day${day.day}')">
            <div class="trn-day-icon">${day.icon}</div>
            <div class="trn-day-num" style="color:${day.color}">K18 Ngày ${day.day}</div>
            <div class="trn-day-title">${day.title}</div>
            <div class="trn-day-subtitle">${day.subtitle}</div>
          </div>
        `).join('')}
      </div>
      ` : ''}
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: DAY PAGE (K12) ---- */
  function renderDay(dayId) {
    const dayNum = parseInt(dayId.replace('day',''));
    const dayData = TRAINING_DATA.onboard.days.find(d => d.day === dayNum);
    if (!dayData) { renderDashboard(); return; }

    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = `Ngày ${dayData.day}: ${dayData.title}`;

    let html = `
      <div class="trn-day-header ${dayId}">
        <div class="trn-day-badge">NGÀY ${dayData.day} / 5</div>
        <h2>${dayData.icon} ${dayData.title}</h2>
        <p>${dayData.subtitle}</p>
      </div>
      <div class="trn-section-list">
        ${dayData.sections.map((section, idx) => {
          const isViewed = state.lessonsViewed[section.id];
          return `
            <div class="trn-section-card" data-section="${section.id}">
              <div class="trn-section-card-header" onclick="window._trnToggleSection('${section.id}')">
                <span class="trn-sec-icon">${section.icon}</span>
                <span class="trn-sec-title">${section.title}</span>
                <span class="trn-sec-status ${isViewed ? 'complete' : 'incomplete'}">${isViewed ? '✓ Hoàn thành' : 'Chưa xem'}</span>
                <span class="trn-sec-arrow">▸</span>
              </div>
              <div class="trn-section-card-body" id="trnSecBody_${section.id}">
                ${section.content}
                ${section.quiz ? `
                  <button class="trn-quiz-start-btn" onclick="window._trnStartQuiz('${section.quiz.id}')">
                    📝 Làm Quiz: ${section.quiz.title} (${section.quiz.questions.length} câu)
                  </button>
                  ${state.quizzes[section.quiz.id] ? `<span style="margin-left:12px;font-size:0.8rem;color:#059669;font-weight:600;">Điểm cao nhất: ${getScore(section.quiz.id)}/10</span>` : ''}
                ` : ''}
                <br>
                <button class="trn-mark-complete-btn ${isViewed ? 'completed' : ''}" onclick="window._trnMarkComplete('${section.id}', this)" ${isViewed ? 'disabled' : ''}>
                  ${isViewed ? '✓ Đã hoàn thành' : '✓ Đánh dấu hoàn thành'}
                </button>
              </div>
            </div>`;
        }).join('')}
      </div>
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: K18 DAY PAGE ---- */
  function renderK18Day(dayId) {
    const dayNum = parseInt(dayId.replace('k18_day',''));
    const dayData = TRAINING_DATA.onboardK18 ? TRAINING_DATA.onboardK18.days.find(d => d.day === dayNum) : null;
    if (!dayData) { renderDashboard(); return; }

    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = `K18 Ngày ${dayData.day}: ${dayData.title}`;

    let html = `
      <div class="trn-day-header" style="background: linear-gradient(135deg, ${dayData.color} 0%, ${dayData.color}dd 100%);">
        <div class="trn-day-badge">K18 NGÀY ${dayData.day} / 5</div>
        <h2>${dayData.icon} ${dayData.title}</h2>
        <p>${dayData.subtitle}</p>
      </div>
      <div class="trn-section-list">
        ${dayData.sections.map((section, idx) => {
          const isViewed = state.lessonsViewed[section.id];
          return `
            <div class="trn-section-card" data-section="${section.id}">
              <div class="trn-section-card-header" onclick="window._trnToggleSection('${section.id}')">
                <span class="trn-sec-icon">${section.icon}</span>
                <span class="trn-sec-title">${section.title}</span>
                <span class="trn-sec-status ${isViewed ? 'complete' : 'incomplete'}">${isViewed ? '✓ Hoàn thành' : 'Chưa xem'}</span>
                <span class="trn-sec-arrow">▸</span>
              </div>
              <div class="trn-section-card-body" id="trnSecBody_${section.id}">
                ${section.content}
                ${section.quiz ? `
                  <button class="trn-quiz-start-btn" onclick="window._trnStartQuiz('${section.quiz.id}')">
                    📝 Làm Quiz: ${section.quiz.title} (${section.quiz.questions.length} câu)
                  </button>
                  ${state.quizzes[section.quiz.id] ? `<span style="margin-left:12px;font-size:0.8rem;color:#059669;font-weight:600;">Điểm cao nhất: ${getScore(section.quiz.id)}/10</span>` : ''}
                ` : ''}
                <br>
                <button class="trn-mark-complete-btn ${isViewed ? 'completed' : ''}" onclick="window._trnMarkComplete('${section.id}', this)" ${isViewed ? 'disabled' : ''}>
                  ${isViewed ? '✓ Đã hoàn thành' : '✓ Đánh dấu hoàn thành'}
                </button>
              </div>
            </div>`;
        }).join('')}
      </div>
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: CS K12 DAY PAGE ---- */
  function renderCSK12Day(dayId) {
    const dayNum = parseInt(dayId.replace('csk12_day',''));
    const dayData = TRAINING_DATA.onboardCSK12 ? TRAINING_DATA.onboardCSK12.days.find(d => d.day === dayNum) : null;
    if (!dayData) { renderDashboard(); return; }

    var pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = `CS K12 Ngày ${dayData.day}: ${dayData.title}`;

    let html = `
      <div class="trn-day-header" style="background: linear-gradient(135deg, ${dayData.color} 0%, ${dayData.color}dd 100%);">
        <div class="trn-day-badge">CS K12 NGÀY ${dayData.day} / 5</div>
        <h2>${dayData.icon} ${dayData.title}</h2>
        <p>${dayData.subtitle}</p>
      </div>
      <div class="trn-section-list">
        ${dayData.sections.map((section, idx) => {
          const isViewed = state.lessonsViewed[section.id];
          return `
            <div class="trn-section-card" data-section="${section.id}">
              <div class="trn-section-card-header" onclick="window._trnToggleSection('${section.id}')">
                <span class="trn-sec-icon">${section.icon}</span>
                <span class="trn-sec-title">${section.title}</span>
                <span class="trn-sec-status ${isViewed ? 'complete' : 'incomplete'}">${isViewed ? '✓ Hoàn thành' : 'Chưa xem'}</span>
                <span class="trn-sec-arrow">▸</span>
              </div>
              <div class="trn-section-card-body" id="trnSecBody_${section.id}">
                ${section.content}
                ${section.quiz ? `
                  <button class="trn-quiz-start-btn" onclick="window._trnStartQuiz('${section.quiz.id}')">
                    📝 Làm Quiz: ${section.quiz.title} (${section.quiz.questions.length} câu)
                  </button>
                  ${state.quizzes[section.quiz.id] ? `<span style="margin-left:12px;font-size:0.8rem;color:#059669;font-weight:600;">Điểm cao nhất: ${getScore(section.quiz.id)}/10</span>` : ''}
                ` : ''}
                <br>
                <button class="trn-mark-complete-btn ${isViewed ? 'completed' : ''}" onclick="window._trnMarkComplete('${section.id}', this)" ${isViewed ? 'disabled' : ''}>
                  ${isViewed ? '✓ Đã hoàn thành' : '✓ Đánh dấu hoàn thành'}
                </button>
              </div>
            </div>`;
        }).join('')}
      </div>
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

    let startBtn = '';
    if (trackId === 'k12_sale') {
      startBtn = `<button class="trn-quiz-start-btn" style="margin-top:20px" onclick="window._trnNavigate('day1')">Bắt đầu Onboard K12 Sale (5 ngày) →</button>`;
    } else if (trackId === 'k12_cs') {
      startBtn = `<button class="trn-quiz-start-btn" style="margin-top:20px" onclick="window._trnNavigate('csk12_day1')">Bắt đầu Onboard CS K12 (5 ngày) →</button>`;
    } else if (trackId === 'k18_sale') {
      startBtn = `<button class="trn-quiz-start-btn" style="margin-top:20px" onclick="window._trnNavigate('k18_day1')">Bắt đầu Onboard K18 (5 ngày) →</button>`;
    }

    let html = `
      <div class="trn-track-header">
        <div class="trn-track-icon">${track.icon}</div>
        <h2>${track.title}</h2>
        <p>${track.description}</p>
        <p style="font-size:0.85rem;color:#4A5568;line-height:1.6;">${track.detail}</p>
        <h4 style="margin-top:16px;margin-bottom:12px;font-size:0.92rem;">Các module đào tạo:</h4>
        <ul class="trn-track-modules">
          ${track.modules.map(m => `<li>${m}</li>`).join('')}
        </ul>
        ${startBtn}
      </div>
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: QUIZ HUB ---- */
  function renderQuizHub() {
    const quizzes = [];

    TRAINING_DATA.onboard.days.forEach(day => {
      day.sections.forEach(s => {
        if (s.quiz) {
          quizzes.push({ ...s.quiz, dayTitle: `K12 Ngày ${day.day}`, sectionTitle: s.title, icon: day.icon });
        }
      });
    });

    if (TRAINING_DATA.onboardCSK12) {
      TRAINING_DATA.onboardCSK12.days.forEach(day => {
        day.sections.forEach(s => {
          if (s.quiz) {
            quizzes.push({ ...s.quiz, dayTitle: `CS K12 Ngày ${day.day}`, sectionTitle: s.title, icon: day.icon });
          }
        });
      });
    }

    if (TRAINING_DATA.onboardK18) {
      TRAINING_DATA.onboardK18.days.forEach(day => {
        day.sections.forEach(s => {
          if (s.quiz) {
            quizzes.push({ ...s.quiz, dayTitle: `K18 Ngày ${day.day}`, sectionTitle: s.title, icon: day.icon });
          }
        });
      });
    }

    let html = `
      <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">Tất cả Quiz</h3>
      <div class="trn-quiz-hub-grid">
        ${quizzes.map(q => {
          const score = getScore(q.id);
          return `
            <div class="trn-quiz-hub-card" onclick="window._trnStartQuiz('${q.id}')">
              <div class="trn-qh-icon">${q.icon || '📝'}</div>
              <div class="trn-qh-title">${q.title}</div>
              <div class="trn-qh-meta">${q.dayTitle} — ${q.questions.length} câu</div>
              ${score !== null ? `<div class="trn-qh-score">Điểm: ${score}/10 (Rank ${getRank(parseFloat(score))})</div>` : '<div class="trn-qh-meta" style="margin-top:8px;">Chưa làm</div>'}
            </div>`;
        }).join('')}
      </div>
    `;

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
    let html = `<h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">💡 Tips tư vấn hàng tuần</h3>`;

    TRAINING_DATA.microlearning.tips.forEach(tip => {
      const isRead = state.tipsRead[tip.id];
      html += `
        <div class="trn-tip-card">
          <div class="trn-tip-week">${tip.week}</div>
          <div class="trn-tip-title">${tip.title}</div>
          <div class="trn-tip-content">${tip.content}</div>
          <button class="trn-tip-mark-btn ${isRead ? 'read' : ''}" onclick="window._trnMarkTipRead('${tip.id}', this)">
            ${isRead ? '✓ Đã đọc' : 'Đánh dấu đã đọc'}
          </button>
        </div>`;
    });

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
    let html = `<h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">📖 Case Study thực tế</h3>`;

    TRAINING_DATA.microlearning.caseStudies.forEach(cs => {
      html += `
        <div class="trn-case-card">
          <span class="trn-case-type ${cs.type}">${cs.type === 'success' ? '✓ Thành công' : '✗ Thất bại'}</span>
          <div class="trn-case-title">${cs.title}</div>
          <div class="trn-case-content">${cs.content}</div>
        </div>`;
    });

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: QUIZ FRIDAY ---- */
  function renderFriday() {
    let html = `
      <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:8px;">🎯 Quiz Friday</h3>
      <p style="font-size:0.85rem;color:#4A5568;margin-bottom:20px;">5 câu hỏi nhanh mỗi tuần — kiểm tra kiến thức tư vấn!</p>
      <button class="trn-quiz-start-btn" onclick="window._trnStartQuiz('quiz_friday')">Bắt đầu Quiz Friday (5 câu)</button>
      ${state.quizzes['quiz_friday'] ? `<span style="margin-left:12px;font-size:0.8rem;color:#059669;font-weight:600;">Điểm: ${getScore('quiz_friday')}/10</span>` : ''}
    `;

    pageContent.innerHTML = html;
  }

  /* ---- RENDER: LEADERBOARD ---- */
  function renderLeaderboard() {
    let entries = [...TRAINING_DATA.sampleLeaderboard];
    const overallScore = getOverallScore();
    if (overallScore !== null && state.userName) {
      const existing = entries.findIndex(e => e.name === state.userName);
      const userEntry = {
        name: state.userName,
        score: parseFloat(overallScore),
        completion: getCompletionPercent(),
        rank: getOverallRank(),
        date: new Date().toISOString().slice(0,10)
      };
      if (existing >= 0) entries[existing] = userEntry;
      else entries.push(userEntry);
    }

    entries.sort((a,b) => b.score - a.score);

    let html = `
      <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">🏆 Bảng xếp hạng TVTS</h3>
      <table class="trn-leaderboard-table">
        <thead>
          <tr>
            <th style="width:60px;">#</th>
            <th>Họ tên</th>
            <th>Điểm</th>
            <th>Hoàn thành</th>
            <th>Rank</th>
            <th>Ngày</th>
          </tr>
        </thead>
        <tbody>
          ${entries.map((e, i) => {
            const isMe = e.name === state.userName;
            const topClass = i === 0 ? 'top1' : i === 1 ? 'top2' : i === 2 ? 'top3' : '';
            return `
              <tr style="${isMe ? 'background:#FFF5F5;font-weight:600;' : ''}">
                <td><span class="trn-lb-rank-num ${topClass}">${i+1}</span></td>
                <td>${escHtml(e.name)} ${isMe ? '(Bạn)' : ''}</td>
                <td>${e.score.toFixed(1)}</td>
                <td>${e.completion}%</td>
                <td><span class="trn-lb-badge trn-rank-${e.rank}">${e.rank} ${getRankIcon(e.rank)}</span></td>
                <td>${e.date}</td>
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

    let html = `
      <div class="trn-settings-section">
        <h3>👤 Hồ sơ</h3>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Tên</span>
          <span class="trn-settings-value">${escHtml(state.userName)}</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Điểm trung bình</span>
          <span class="trn-settings-value">${overallScore || '—'}</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Rank</span>
          <span class="trn-settings-value">${overallRank ? overallRank + ' ' + getRankIcon(overallRank) : '—'}</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">K12 Hoàn thành</span>
          <span class="trn-settings-value">${getCompletionPercent()}%</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">CS K12 Hoàn thành</span>
          <span class="trn-settings-value">${getCSK12CompletionPercent()}%</span>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">K18 Hoàn thành</span>
          <span class="trn-settings-value">${getK18CompletionPercent()}%</span>
        </div>
      </div>

      <div class="trn-settings-section">
        <h3>🔧 Tùy chọn</h3>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Đổi tên</span>
          <button class="trn-settings-btn" onclick="window._trnChangeName()">Đổi tên</button>
        </div>
        <div class="trn-settings-row">
          <span class="trn-settings-label">Xóa dữ liệu học tập</span>
          <button class="trn-settings-btn danger" onclick="window._trnResetProgress()">Xóa toàn bộ</button>
        </div>
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
      saveState();
      renderSettings();
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
