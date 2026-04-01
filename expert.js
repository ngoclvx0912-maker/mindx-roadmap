/* ══════════════════════════════════════════════════════════
   Expert Q&A — "Hỏi Chuyên gia" Frontend
   ══════════════════════════════════════════════════════════ */
(function() {
  'use strict';

  // API base — Google Apps Script backend (production) or localhost (dev)
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySnPbdLFoA2GSQ1g7u0JbGCdFP2Dt0pz31FQ5LbeRf3XVbVbQUoPkTZIaNuDPH_RuR/exec';
  const USE_APPS_SCRIPT = !APPS_SCRIPT_URL.includes('APPS_SCRIPT_DEPLOY_ID');
  const EXPERT_API = USE_APPS_SCRIPT ? APPS_SCRIPT_URL : 'http://localhost:8001';

  // Helper: fetch from Apps Script (uses GET with query params for Workspace compatibility)
  async function gsFetch(action, body) {
    if (!USE_APPS_SCRIPT) return null;
    let url = `${APPS_SCRIPT_URL}?action=${action}`;
    if (body) {
      Object.keys(body).forEach(k => {
        if (body[k]) url += `&${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`;
      });
    }
    const r = await fetch(url);
    return r.json();
  }

  // Simple markdown formatter
  function formatMarkdown(text) {
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    // Headers: ## text -> <strong>text</strong>
    html = html.replace(/^#{1,3}\s+(.+)$/gm, '<strong>$1</strong>');
    // Bold: **text** -> <strong>text</strong>
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Italic: *text* -> <em>text</em>
    html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
    // Bullet lists: - text -> • text
    html = html.replace(/^[-•]\s+/gm, '• ');
    // Horizontal rules: --- -> <hr style>
    html = html.replace(/^-{3,}$/gm, '<hr style="border:none;border-top:1px solid #eee;margin:8px 0">');
    // Blockquotes: > text
    html = html.replace(/^&gt;\s*(.+)$/gm, '<span style="color:#888;border-left:2px solid #ddd;padding-left:8px;display:inline-block">$1</span>');
    // Newlines
    html = html.replace(/\n/g, '<br>');
    return html;
  }

  let isOpen = false;
  let currentMode = 'ai'; // 'ai' or 'telegram'
  let messages = [];
  let telegramPolling = null;
  let telegramConfigured = false;

  // ── Get current context (which flow/page user is viewing) ──
  function getCurrentContext() {
    // Check if any sales flow is active
    const xmemberEl = document.getElementById('xmemberOverlay');
    const xartEl = document.getElementById('xartOverlay');
    const xmember2El = document.getElementById('xmember2Overlay');

    if (xmemberEl && xmemberEl.style.visibility !== 'hidden') return 'X-Coding Sales Flow';
    if (xartEl && xartEl.style.visibility !== 'hidden') return 'X-Art Sales Flow';
    if (xmember2El && xmember2El.style.visibility !== 'hidden') return 'Du Học Sales Flow';

    // Check sidebar active item
    const activeNav = document.querySelector('.nav-item.active');
    if (activeNav) {
      const label = activeNav.querySelector('.nav-label');
      if (label) return 'Roadmap ' + label.textContent;
    }
    return 'Trang chủ';
  }

  // ── Create DOM ────────────────────────────────────────────
  function createExpertUI() {
    // 1. Floating Action Button
    const fab = document.createElement('button');
    fab.className = 'expert-fab';
    fab.id = 'expertFab';
    fab.innerHTML = `
      <span class="fab-open">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          <circle cx="12" cy="10" r="0.5" fill="currentColor"/>
          <circle cx="8" cy="10" r="0.5" fill="currentColor"/>
          <circle cx="16" cy="10" r="0.5" fill="currentColor"/>
        </svg>
      </span>
      <span class="fab-close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </span>
    `;
    document.body.appendChild(fab);

    // 2. Overlay
    const overlay = document.createElement('div');
    overlay.className = 'expert-panel-overlay';
    overlay.id = 'expertOverlay';
    document.body.appendChild(overlay);

    // 3. Panel
    const panel = document.createElement('div');
    panel.className = 'expert-panel';
    panel.id = 'expertPanel';
    panel.innerHTML = `
      <div class="expert-header">
        <div class="expert-header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M12 2C6.48 2 2 6 2 11c0 2.5 1.1 4.8 3 6.5V22l4-2c1 .3 2 .5 3 .5 5.52 0 10-4 10-9S17.52 2 12 2z"/>
          </svg>
        </div>
        <div class="expert-header-text">
          <h3>Hỏi Chuyên gia</h3>
          <p>Đội ngũ MindX sẵn sàng tư vấn</p>
        </div>
      </div>

      <div class="expert-mode-tabs">
        <button class="expert-mode-tab active" data-mode="ai">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          Chuyên gia
        </button>
        <button class="expert-mode-tab" data-mode="telegram">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.28-.02-.12.03-2.07 1.32-5.84 3.87-.55.38-1.05.56-1.5.55-.49-.01-1.44-.28-2.15-.51-.87-.28-1.56-.43-1.5-.91.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.62 4.75-1.9 5.28-1.91.12 0 .37.03.54.18.14.12.18.29.2.45-.01.06.01.24 0 .38z"/>
          </svg>
          Ban lãnh đạo
        </button>
      </div>

      <div class="expert-body" id="expertBody">
        <!-- Welcome screen -->
        <div class="expert-welcome" id="expertWelcome">
          <div class="expert-welcome-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M12 2C6.48 2 2 6 2 11c0 2.5 1.1 4.8 3 6.5V22l4-2c1 .3 2 .5 3 .5 5.52 0 10-4 10-9S17.52 2 12 2z"/>
            </svg>
          </div>
          <h4 id="expertWelcomeTitle">Xin chào! 👋</h4>
          <p id="expertWelcomeDesc">MindX rất vui được hỗ trợ Quý Phụ huynh. Quý PH có câu hỏi gì về lộ trình học tập, chương trình đào tạo hay du học, MindX sẵn sàng tư vấn ạ!</p>
          <div class="expert-suggestions" id="expertSuggestions">
            <button class="expert-suggestion">Con tôi nên bắt đầu học từ đâu?</button>
            <button class="expert-suggestion">MindX khác gì các trung tâm khác?</button>
            <button class="expert-suggestion">Chương trình du học hoạt động thế nào?</button>
          </div>
        </div>
      </div>

      <div class="expert-input-area">
        <div class="expert-input-wrapper">
          <textarea class="expert-input" id="expertInput" placeholder="Nhập câu hỏi..." rows="1"></textarea>
        </div>
        <button class="expert-send-btn" id="expertSendBtn" disabled>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    `;
    document.body.appendChild(panel);

    // 4. Add nav button in sidebar
    const sidebarFooter = document.querySelector('.sidebar-footer');
    if (sidebarFooter) {
      const navBtn = document.createElement('button');
      navBtn.className = 'nav-expert-btn';
      navBtn.id = 'expertNavBtn';
      navBtn.innerHTML = `
        <svg class="expert-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
        Hỏi Chuyên gia
      `;
      sidebarFooter.insertBefore(navBtn, sidebarFooter.firstChild);
      navBtn.addEventListener('click', togglePanel);
    }

    // ── Event listeners ──
    fab.addEventListener('click', togglePanel);
    overlay.addEventListener('click', closePanel);

    // Mode tabs
    panel.querySelectorAll('.expert-mode-tab').forEach(tab => {
      tab.addEventListener('click', () => switchMode(tab.dataset.mode));
    });

    // Input handling
    const input = document.getElementById('expertInput');
    const sendBtn = document.getElementById('expertSendBtn');

    input.addEventListener('input', () => {
      sendBtn.disabled = !input.value.trim();
      // Auto-resize
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (input.value.trim()) sendMessage();
      }
    });

    sendBtn.addEventListener('click', sendMessage);

    // Suggestion buttons
    panel.querySelectorAll('.expert-suggestion').forEach(btn => {
      btn.addEventListener('click', () => {
        input.value = btn.textContent;
        input.dispatchEvent(new Event('input'));
        sendMessage();
      });
    });

    // Check Telegram status
    checkTelegramStatus();
  }

  // ── Toggle panel ──────────────────────────────────────────
  function togglePanel() {
    isOpen = !isOpen;
    const fab = document.getElementById('expertFab');
    const panel = document.getElementById('expertPanel');
    const overlay = document.getElementById('expertOverlay');

    fab.classList.toggle('active', isOpen);
    panel.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);

    if (isOpen) {
      setTimeout(() => document.getElementById('expertInput').focus(), 350);
    }
  }

  function closePanel() {
    isOpen = false;
    document.getElementById('expertFab').classList.remove('active');
    document.getElementById('expertPanel').classList.remove('open');
    document.getElementById('expertOverlay').classList.remove('open');
  }

  // ── Switch mode ───────────────────────────────────────────
  function switchMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.expert-mode-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.mode === mode);
    });

    const welcome = document.getElementById('expertWelcome');
    const title = document.getElementById('expertWelcomeTitle');
    const desc = document.getElementById('expertWelcomeDesc');
    const suggestions = document.getElementById('expertSuggestions');
    const input = document.getElementById('expertInput');

    if (mode === 'ai') {
      if (title) title.textContent = 'Xin chào Quý Phụ huynh! 👋';
      if (desc) desc.textContent = 'MindX rất vui được hỗ trợ Quý Phụ huynh. Quý PH có câu hỏi gì về lộ trình học tập, chương trình đào tạo hay du học, MindX sẵn sàng tư vấn ạ!';
      if (suggestions) suggestions.style.display = '';
      input.placeholder = 'Nhập câu hỏi...';
      input.disabled = false;
    } else {
      if (title) title.textContent = 'Kết nối Ban lãnh đạo 🎯';
      if (desc) {
        if (telegramConfigured) {
          desc.textContent = 'Câu hỏi của Quý PH sẽ được gửi trực tiếp đến Ban lãnh đạo MindX. Ban lãnh đạo sẽ phản hồi ngay khi có thể.';
        } else {
          desc.textContent = 'Tính năng này đang được thiết lập. Vui lòng sử dụng chế độ Chuyên gia hoặc liên hệ hotline MindX.';
        }
      }
      if (suggestions) suggestions.style.display = 'none';
      input.placeholder = telegramConfigured ? 'Nhập câu hỏi cho Ban lãnh đạo...' : 'Đang thiết lập...';
      input.disabled = !telegramConfigured;
    }

    // Show welcome if no messages in this mode
    const modeMessages = messages.filter(m => m.mode === mode);
    if (welcome) {
      welcome.style.display = modeMessages.length === 0 ? '' : 'none';
    }

    renderMessages();
  }

  // ── Check Telegram status ─────────────────────────────────
  async function checkTelegramStatus() {
    try {
      const data = USE_APPS_SCRIPT
        ? await gsFetch('telegram_status')
        : await (await fetch(`${EXPERT_API}/api/expert/telegram/status`)).json();
      telegramConfigured = data.configured;
    } catch (e) {
      telegramConfigured = false;
    }
  }

  // ── Send message ──────────────────────────────────────────
  async function sendMessage() {
    const input = document.getElementById('expertInput');
    const question = input.value.trim();
    if (!question) return;

    // Add user message
    messages.push({
      role: 'user',
      text: question,
      time: new Date(),
      mode: currentMode,
    });

    input.value = '';
    input.style.height = 'auto';
    document.getElementById('expertSendBtn').disabled = true;

    // Hide welcome
    const welcome = document.getElementById('expertWelcome');
    if (welcome) welcome.style.display = 'none';

    renderMessages();
    scrollToBottom();

    if (currentMode === 'ai') {
      await sendAI(question);
    } else {
      await sendTelegram(question);
    }
  }

  // ── AI Mode ───────────────────────────────────────────────
  async function sendAI(question) {
    // Show typing indicator
    showTyping('ai');

    try {
      const aiPayload = { question: question, context: '' };
      let data;
      if (USE_APPS_SCRIPT) {
        data = await gsFetch('ai', aiPayload);
      } else {
        const resp = await fetch(`${EXPERT_API}/api/expert/ai`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(aiPayload),
        });
        if (!resp.ok) throw new Error('Server error');
        data = await resp.json();
      }
      hideTyping();
      if (data.error) throw new Error(data.error);
      messages.push({
        role: 'bot',
        text: data.answer,
        time: new Date(),
        mode: 'ai',
      });

    } catch (e) {
      hideTyping();
      messages.push({
        role: 'bot',
        text: 'Xin lỗi, hiện tại MindX chưa thể kết nối. Quý PH vui lòng thử lại sau hoặc chuyển sang kênh "Ban lãnh đạo" ạ!',
        time: new Date(),
        mode: 'ai',
        isError: true,
      });
    }

    renderMessages();
    scrollToBottom();
  }

  // ── Telegram Mode ─────────────────────────────────────────
  async function sendTelegram(question) {
    showTyping('telegram', 'Đang gửi câu hỏi đến chuyên gia...');

    try {
      const tgPayload = { question: question, parent_name: 'Phụ huynh', context: '' };
      let data;
      if (USE_APPS_SCRIPT) {
        data = await gsFetch('telegram', tgPayload);
      } else {
        const resp = await fetch(`${EXPERT_API}/api/expert/telegram`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tgPayload),
        });
        if (!resp.ok) throw new Error('Send failed');
        data = await resp.json();
      }
      hideTyping();
      if (data.error) throw new Error(data.error);

      // Add waiting message
      messages.push({
        role: 'bot',
        text: '✅ Câu hỏi đã được gửi đến Ban lãnh đạo MindX. Ban lãnh đạo sẽ phản hồi sớm nhất có thể.',
        time: new Date(),
        mode: 'telegram',
        questionId: data.question_id,
        isWaiting: true,
      });

      renderMessages();
      scrollToBottom();

      // Start polling for answer
      startPolling(data.question_id);

    } catch (e) {
      hideTyping();
      messages.push({
        role: 'bot',
        text: 'Không thể gửi câu hỏi lúc này. Vui lòng thử lại sau.',
        time: new Date(),
        mode: 'telegram',
        isError: true,
      });
      renderMessages();
      scrollToBottom();
    }
  }

  // ── Polling for Telegram replies ──────────────────────────
  function startPolling(questionId) {
    if (telegramPolling) clearInterval(telegramPolling);

    let elapsed = 0;
    let lastAnswerCount = 0;
    let idleSinceLastAnswer = 0; // seconds since last NEW answer
    const IDLE_TIMEOUT = 120; // keep polling 2 min after last answer

    // Kick server to check Telegram before starting poll loop
    if (USE_APPS_SCRIPT) {
      gsFetch('force_poll').catch(() => {});
    }

    telegramPolling = setInterval(async () => {
      elapsed += 3;

      try {
        // Every 15s, kick server to check Telegram for new replies
        if (USE_APPS_SCRIPT && elapsed % 15 === 0) {
          gsFetch('force_poll').catch(() => {});
        }

        const data = USE_APPS_SCRIPT
          ? await gsFetch('poll&id=' + questionId)
          : await (await fetch(`${EXPERT_API}/api/expert/telegram/poll/${questionId}`)).json();

        if (data.status === 'answered') {
          const answers = data.answers || [{ text: data.answer, name: data.answered_by, time: data.answered_at }];
          const newCount = answers.length;

          if (newCount > lastAnswerCount) {
            // New reply(s) arrived
            lastAnswerCount = newCount;
            idleSinceLastAnswer = 0;

            // Build combined text from ALL replies
            const combinedText = answers.map(a => `💬 ${a.name}:\n${a.text}`).join('\n\n━━━━━━━━━━━━━━━━━━\n\n');

            const waitMsg = messages.find(m => m.questionId === questionId);
            if (waitMsg) {
              waitMsg.isWaiting = false;
              waitMsg.text = combinedText;
              if (newCount > 1) waitMsg.text += '\n\n📌 ' + newCount + ' phản hồi từ Ban lãnh đạo';
            }

            renderMessages();
            scrollToBottom();
          } else {
            idleSinceLastAnswer += 3;
          }

          // Stop polling after IDLE_TIMEOUT since last new answer
          if (idleSinceLastAnswer >= IDLE_TIMEOUT) {
            clearInterval(telegramPolling);
            telegramPolling = null;
          }
        } else if (data.status === 'timeout' || elapsed > 1800) {
          clearInterval(telegramPolling);
          telegramPolling = null;

          if (lastAnswerCount === 0) {
            const waitMsg = messages.find(m => m.questionId === questionId);
            if (waitMsg) {
              waitMsg.isWaiting = false;
              waitMsg.text = 'Ban lãnh đạo chưa phản hồi. Câu hỏi đã được ghi nhận, MindX sẽ liên hệ lại Quý PH qua hotline ạ.';
            }
            renderMessages();
          }
        }
      } catch (e) {
        // Silent retry
      }
    }, 3000);
  }

  // ── Render messages ───────────────────────────────────────
  function renderMessages() {
    const body = document.getElementById('expertBody');
    const welcome = document.getElementById('expertWelcome');

    // Filter by current mode
    const modeMessages = messages.filter(m => m.mode === currentMode);

    // Show welcome if no messages
    if (welcome) {
      welcome.style.display = modeMessages.length === 0 ? '' : 'none';
    }

    // Remove old message elements (keep welcome)
    body.querySelectorAll('.expert-msg, .expert-typing').forEach(el => el.remove());

    modeMessages.forEach(msg => {
      const div = document.createElement('div');
      div.className = `expert-msg ${msg.role === 'user' ? 'user' : 'bot'}`;

      const avatarContent = msg.role === 'user' ? '👤' : '🎓';

      // Format text — basic markdown + newlines
      const formattedText = formatMarkdown(msg.text);

      let waitingHtml = '';
      if (msg.isWaiting) {
        waitingHtml = `
          <div class="expert-telegram-waiting">
            <div class="waiting-dots" style="display:flex;gap:4px;justify-content:center;margin-top:8px">
              <span style="width:6px;height:6px;border-radius:50%;background:#E31F26;animation:expertDotBounce 1.2s ease infinite"></span>
              <span style="width:6px;height:6px;border-radius:50%;background:#E31F26;animation:expertDotBounce 1.2s ease infinite;animation-delay:0.15s"></span>
              <span style="width:6px;height:6px;border-radius:50%;background:#E31F26;animation:expertDotBounce 1.2s ease infinite;animation-delay:0.3s"></span>
            </div>
            <p style="font-size:11px;color:#999;margin-top:6px">Đang chờ phản hồi...</p>
          </div>
        `;
      }

      const timeStr = msg.time.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

      div.innerHTML = `
        <div class="expert-msg-avatar">${avatarContent}</div>
        <div>
          <div class="expert-msg-bubble">${formattedText}${waitingHtml}</div>
          <div class="expert-msg-meta">${timeStr}</div>
        </div>
      `;

      body.appendChild(div);
    });
  }

  // ── Typing indicator ──────────────────────────────────────
  function showTyping(mode, customText) {
    const body = document.getElementById('expertBody');
    hideTyping();

    const div = document.createElement('div');
    div.className = 'expert-typing';
    div.id = 'expertTypingIndicator';
    div.innerHTML = `
      <div class="expert-msg-avatar" style="background:#FFF0F0;color:#E31F26;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px">🎓</div>
      <div>
        <div class="expert-typing-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="expert-typing-text">${customText || (mode === 'ai' ? 'Đang phân tích...' : 'Đang gửi...')}</div>
      </div>
    `;
    body.appendChild(div);
    scrollToBottom();
  }

  function hideTyping() {
    const el = document.getElementById('expertTypingIndicator');
    if (el) el.remove();
  }

  // ── Scroll ────────────────────────────────────────────────
  function scrollToBottom() {
    const body = document.getElementById('expertBody');
    if (body) {
      requestAnimationFrame(() => {
        body.scrollTop = body.scrollHeight;
      });
    }
  }

  // ── Init ──────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createExpertUI);
  } else {
    createExpertUI();
  }
})();
