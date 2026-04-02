/* X-member2 — Bảo trợ du học CNTT + Art Full-screen Presentation */
(function () {
  "use strict";

  var currentSlide = 0;
  var totalSlides = 14;
  var container = null;
  var isActive = false;
  var detailOverlay = null;

  function buildPresentation() {
    if (container) return;
    container = document.createElement("div");
    container.id = "xm2Presentation";
    container.className = "xm2-presentation";

    var exitBtn = document.createElement("button");
    exitBtn.className = "xm2-exit-btn";
    exitBtn.innerHTML = "✕ Thoát";
    exitBtn.addEventListener("click", deactivate);

    var slidesWrap = document.createElement("div");
    slidesWrap.className = "xm2-slides";
    slidesWrap.id = "xm2Slides";

    var slides = [
      buildSlide1(),        // 0: Cover
      buildSlide2(),        // 1: AI đang thay đổi mọi thứ
      buildSlideMarketB(),  // 2: PH hành động
      buildSlideMarketC(),  // 3: Du học data
      buildSlide3(),        // 4: 2 tracks
      buildSlide4(),        // 5: 6 USP
      buildSlide5(),        // 6: Lộ trình
      buildSlide6(),        // 7: CNTT 3 ngách
      buildSlide7(),        // 8: Art portfolio
      buildSlide8(),        // 9: So sánh hồ sơ
      buildSlide9(),        // 10: Hackathon
      buildSlide10(),       // 11: Chính sách
      buildSlideCaseStudy(),// 12: Case study
      buildSlide11()        // 13: CTA
    ];
    slides.forEach(function (s, i) {
      s.setAttribute("data-slide", i);
      if (i === 0) s.classList.add("active");
      slidesWrap.appendChild(s);
    });

    var nav = document.createElement("div");
    nav.className = "xm2-nav";
    nav.innerHTML =
      '<button class="xm2-nav-btn xm2-nav-prev" id="xm2Prev" disabled>← Quay lại</button>' +
      '<div class="xm2-nav-dots" id="xm2Dots"></div>' +
      '<button class="xm2-nav-btn xm2-nav-next" id="xm2Next">Tiếp theo →</button>';

    detailOverlay = document.createElement("div");
    detailOverlay.className = "xm2-detail-overlay";
    detailOverlay.id = "xm2DetailOverlay";
    detailOverlay.addEventListener("click", function(e) {
      if (e.target === detailOverlay) closeDetail();
    });

    container.appendChild(exitBtn);
    container.appendChild(slidesWrap);
    container.appendChild(nav);
    container.appendChild(detailOverlay);
    document.body.appendChild(container);

    var dotsWrap = document.getElementById("xm2Dots");
    for (var i = 0; i < totalSlides; i++) {
      var dot = document.createElement("button");
      dot.className = "xm2-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("data-index", i);
      dot.addEventListener("click", function () {
        goToSlide(parseInt(this.getAttribute("data-index")));
      });
      dotsWrap.appendChild(dot);
    }

    document.getElementById("xm2Prev").addEventListener("click", prevSlide);
    document.getElementById("xm2Next").addEventListener("click", nextSlide);
    document.addEventListener("keydown", handleKey);
  }

  function handleKey(e) {
    if (!isActive) return;
    if (detailOverlay && detailOverlay.classList.contains("open")) {
      if (e.key === "Escape") { e.preventDefault(); closeDetail(); }
      return;
    }
    if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nextSlide(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prevSlide(); }
    if (e.key === "Escape") deactivate();
  }

  // ===== DETAIL PANEL =====
  function showDetail(title, contentHTML) {
    if (!detailOverlay) return;
    detailOverlay.innerHTML =
      '<div class="xm2-detail-panel">' +
        '<button class="xm2-detail-close">✕</button>' +
        '<div class="xm2-detail-title">' + title + '</div>' +
        '<div class="xm2-detail-body">' + contentHTML + '</div>' +
      '</div>';
    detailOverlay.querySelector(".xm2-detail-close").addEventListener("click", closeDetail);
    detailOverlay.classList.add("open");
  }

  function closeDetail() {
    if (detailOverlay) detailOverlay.classList.remove("open");
  }

  function buildListHTML(items) {
    var html = '<ul class="xm2-detail-list">';
    for (var i = 0; i < items.length; i++) {
      html += '<li>' + items[i] + '</li>';
    }
    html += '</ul>';
    return html;
  }

  function makeClickable(el, onClick) {
    el.style.cursor = "pointer";
    el.classList.add("xm2-clickable");
    el.addEventListener("click", function(e) {
      e.stopPropagation();
      onClick();
    });
    var hint = document.createElement("div");
    hint.className = "xm2-click-hint";
    hint.textContent = "Nhấn để xem chi tiết";
    el.appendChild(hint);
  }

  function goToSlide(index) {
    if (index < 0 || index >= totalSlides || index === currentSlide) return;
    closeDetail();
    var slides = document.querySelectorAll("#xm2Slides .xm2-slide");
    var dots = document.querySelectorAll("#xm2Dots .xm2-dot");
    slides.forEach(function(sl) { sl.classList.remove("active"); });
    currentSlide = index;
    slides[currentSlide].classList.add("active");
    slides[currentSlide].scrollTop = 0;
    dots.forEach(function (d, i) { d.classList.toggle("active", i === currentSlide); });
    document.getElementById("xm2Prev").disabled = currentSlide === 0;
    var nextBtn = document.getElementById("xm2Next");
    nextBtn.innerHTML = currentSlide === totalSlides - 1 ? "✓ Hoàn thành" : "Tiếp theo →";
  }

  function nextSlide() {
    if (currentSlide === totalSlides - 1) { deactivate(); return; }
    goToSlide(currentSlide + 1);
  }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function activate() {
    buildPresentation();
    isActive = true;
    currentSlide = 0;
    closeDetail();
    var slides = document.querySelectorAll("#xm2Slides .xm2-slide");
    slides.forEach(function (s, i) {
      s.classList.remove("active");
      if (i === 0) s.classList.add("active");
    });
    var dots = document.querySelectorAll("#xm2Dots .xm2-dot");
    dots.forEach(function (d, i) { d.classList.toggle("active", i === 0); });
    document.getElementById("xm2Prev").disabled = true;
    document.getElementById("xm2Next").innerHTML = "Tiếp theo →";
    container.classList.add("active");
  }

  function deactivate() {
    isActive = false;
    closeDetail();
    if (container) {
      container.classList.remove("active");
      var slides = container.querySelectorAll(".xm2-slide.active");
      slides.forEach(function(s) { s.classList.remove("active"); });
    }
  }

  // ===== SLIDE BUILDERS =====

  // Slide 1: Welcome
  function buildSlide1() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<img src="./mindx-logo.png" alt="MindX" class="xm2-logo-large">' +
      '<div class="xm2-title-hero">Bảo trợ Du học<br><span class="xm2-accent-blue">CNTT</span> & <span class="xm2-accent-purple">Art</span></div>' +
      '<p class="xm2-tagline">X-Global Tech Seed · X-Global Art Seed</p>' +
      '<p class="xm2-sub-tagline">Chương trình ươm tạo portfolio & hồ sơ du học độc quyền tại Việt Nam</p>';
    return s;
  }

  // Slide 2: AI đang thay đổi mọi thứ
  function buildSlide2() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">AI đang thay đổi <span class="xm2-accent-red">mọi thứ</span></div>' +
      '<div class="xm2-stats">' +
        '<div class="xm2-stat">' +
          '<div class="xm2-stat-number">92 triệu</div>' +
          '<div class="xm2-stat-label">việc làm bị thay thế<br>đến 2030</div>' +
          '<div class="xm2-stat-note">WEF 2025</div>' +
        '</div>' +
        '<div class="xm2-stat">' +
          '<div class="xm2-stat-number">74.5%</div>' +
          '<div class="xm2-stat-label">công việc lập trình<br>có thể bị AI làm</div>' +
          '<div class="xm2-stat-note">Anthropic 2026</div>' +
        '</div>' +
        '<div class="xm2-stat">' +
          '<div class="xm2-stat-number">9.03%</div>' +
          '<div class="xm2-stat-label">thất nghiệp thanh niên VN<br>cao nhất 14 năm</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm2-quote">"Bạn sẽ không mất việc vào tay AI, nhưng bạn sẽ mất việc vào tay người <span class="xm2-accent-red">BIẾT SỬ DỤNG AI.</span>"</div>' +
      '<div class="xm2-subtitle" style="font-size:0.85rem;color:#999;margin-top:4px">— Jensen Huang, CEO Nvidia (2025)</div>';
    return s;
  }

  // Slide Market B: Phụ huynh khắp thế giới đang hành động
  function buildSlideMarketB() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">Phụ huynh khắp thế giới <span class="xm2-accent-red">đang hành động</span></div>' +
      '<div class="xm2-stats">' +
        '<div class="xm2-stat">' +
          '<div class="xm2-stat-number blue">25+</div>' +
          '<div class="xm2-stat-label">quốc gia đưa lập trình<br>vào bắt buộc từ tiểu học</div>' +
        '</div>' +
        '<div class="xm2-stat">' +
          '<div class="xm2-stat-number">24%</div>' +
          '<div class="xm2-stat-label">chi tiêu hộ gia đình VN<br>dành cho giáo dục</div>' +
        '</div>' +
        '<div class="xm2-stat">' +
          '<div class="xm2-stat-number purple">$132 tỷ</div>' +
          '<div class="xm2-stat-label">thị trường STEM K-12<br>toàn cầu 2030</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm2-quote">"Nhật Bản, Anh, Singapore đã dạy code từ lớp 1. Câu hỏi không phải con CÓ NÊN học — mà là <span class="xm2-accent-red">BẮT ĐẦU TỪ BAO GIỜ.</span>"</div>';
    return s;
  }

  // Slide Market C: 250,000 SV Việt đang du học
  function buildSlideMarketC() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large"><span class="xm2-accent-red">250,000</span> sinh viên Việt đang du học — Kỷ lục mới</div>' +
      '<div class="xm2-stats" id="xm2MarketCStats">' +
        '<div class="xm2-stat">' +
          '<div class="xm2-stat-number">250,000</div>' +
          '<div class="xm2-stat-label">SV Việt đang du học<br>Top 1 ASEAN</div>' +
          '<div class="xm2-stat-note">Bộ GD&ĐT 2025</div>' +
        '</div>' +
        '<div class="xm2-stat">' +
          '<div class="xm2-stat-number">1%</div>' +
          '<div class="xm2-stat-label">tỷ lệ đỗ học bổng<br>Chevening</div>' +
          '<div class="xm2-stat-note">cạnh tranh khốc liệt</div>' +
        '</div>' +
        '<div class="xm2-stat">' +
          '<div class="xm2-stat-number blue">57%</div>' +
          '<div class="xm2-stat-label">SV quốc tế tại Mỹ<br>chọn ngành STEM</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm2-quote">"Hội đồng tuyển sinh tìm <span class="xm2-accent-red">nhà kiến tạo</span>, không tìm cỗ máy thi cử. Portfolio thực tế là chìa khóa."</div>';

    setTimeout(function() {
      var statsEl = document.getElementById("xm2MarketCStats");
      if (!statsEl) return;
      makeClickable(statsEl, function() {
        showDetail("📊 ROI Du Học & Tiêu Chí Xét Tuyển", buildListHTML([
          "<strong>ROI Du Học theo quốc gia:</strong>",
          "🇺🇸 Mỹ: $25-50K/năm → lương $90-110K → hoàn vốn 1-1.6 năm",
          "🇬🇧 Anh: £15-25K → £32-45K → hoàn vốn 0.8-1.3 năm",
          "🇸🇬 Singapore: SGD 30-45K → SGD 55-85K → hoàn vốn 0.8-2 năm",
          "",
          "<strong>Tiêu chí xét tuyển ĐH quốc tế (theo thứ tự ưu tiên):</strong>",
          "1. Portfolio & sản phẩm thực tế",
          "2. Bài luận cá nhân (Personal Essay)",
          "3. Thư giới thiệu (Letter of Recommendation)",
          "4. Hoạt động ngoại khóa — độ sâu > độ rộng",
          "5. Kỹ năng lãnh đạo & sáng kiến (Leadership)"
        ]));
      });
    }, 0);

    return s;
  }

  // Slide 3: 2 tracks overview
  function buildSlide3() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">2 ngành — <span class="xm2-accent-red">2 chương trình</span> chuyên biệt</div>' +
      '<p class="xm2-subtitle">MindX cung cấp 2 lộ trình bảo trợ du học chuyên sâu</p>' +
      '<div class="xm2-tracks" id="xm2Tracks"></div>';

    setTimeout(function() {
      var tracks = document.getElementById("xm2Tracks");
      if (!tracks) return;

      var techCard = document.createElement("div");
      techCard.className = "xm2-track-card tech";
      techCard.innerHTML =
        '<div class="xm2-track-badge">CNTT</div>' +
        '<div class="xm2-track-name">X-Global Tech Seed</div>' +
        '<div class="xm2-track-tagline">Vườn ươm Hạt giống Công nghệ Toàn cầu</div>' +
        '<div class="xm2-track-targets">' +
          '<span>Web/App Dev</span><span>Data Analyst</span><span>UI/UX</span>' +
        '</div>';
      makeClickable(techCard, function() {
        showDetail('💻 X-Global Tech Seed', buildListHTML([
          'Chương trình ươm tạo danh mục đầu tư (portfolio) và hồ sơ năng lực công nghệ độc quyền tại Việt Nam',
          'Giúp học viên kiến tạo sản phẩm công nghệ thực tế — lợi thế cạnh tranh tuyệt đối khi săn học bổng',
          'Hướng tới các trường đại học top đầu thế giới về công nghệ: MIT, Stanford, CMU, Georgia Tech...',
          '3 ngách chuyên môn: Lập trình (Web), Dữ liệu (Data Analyst), Thiết kế (UI/UX)',
          'Tất cả đều tích hợp AI Agent vào sản phẩm',
          'Thời lượng: ~2.5 tháng (Build & Polish 48h + Launch & Internship 15 buổi)'
        ]));
      });
      tracks.appendChild(techCard);

      var artCard = document.createElement("div");
      artCard.className = "xm2-track-card art";
      artCard.innerHTML =
        '<div class="xm2-track-badge purple">Art</div>' +
        '<div class="xm2-track-name">X-Global Art Seed</div>' +
        '<div class="xm2-track-tagline">Vườn ươm Hạt giống Nghệ thuật Toàn cầu</div>' +
        '<div class="xm2-track-targets">' +
          '<span>Graphic Design</span><span>Motion</span><span>UI/UX Art</span>' +
        '</div>';
      makeClickable(artCard, function() {
        showDetail('🎨 X-Global Art Seed', buildListHTML([
          'Chương trình bảo trợ du học ngành Art & Design',
          'Hỗ trợ xây dựng portfolio nghệ thuật chuẩn quốc tế — đa phương tiện',
          'Hướng tới các trường thiết kế hàng đầu: Parsons, RISD, SCAD, RMIT, UAL...',
          'Không cần học thêm Năm 7 — nội dung riêng phù hợp hồ sơ du học',
          'Viết Artist Statement, phỏng vấn kỹ thuật',
          'Portfolio kết hợp: Digital Art + Motion + UI/UX + AI-generated content'
        ]));
      });
      tracks.appendChild(artCard);
    }, 0);
    return s;
  }

  // Slide 4: 6 USP — Điểm khác biệt
  function buildSlide4() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">6 điểm <span class="xm2-accent-red">khác biệt độc quyền</span></div>' +
      '<p class="xm2-subtitle">Các trường đại học hàng đầu tìm kiếm nhà kiến tạo tương lai, không phải cỗ máy thi cử</p>' +
      '<div class="xm2-usp-grid" id="xm2USPGrid"></div>';

    setTimeout(function() {
      var grid = document.getElementById("xm2USPGrid");
      if (!grid) return;

      var usps = [
        { icon: "📂", title: "Hồ Sơ Độc Bản", desc: "Tech Portfolio thực chiến (GitHub/Dashboard/Figma) giải quyết vấn đề xã hội — thứ trường Top tìm kiếm", detail: [
          "Tech Portfolio thực chiến: Web/Dashboard/App Concept trên GitHub/Figma",
          "Dự án giải quyết vấn đề xã hội cụ thể — không phải bài tập demo",
          "Thay thế giấy chứng nhận phong trào bằng sản phẩm \"sống\" có link truy cập",
          "Đúng chuẩn quốc tế: chính xác những gì hội đồng tuyển sinh đang tìm kiếm"
        ]},
        { icon: "🤖", title: "Học Thật - Làm Thật - Đón Đầu AI", desc: "Kỹ năng Prompting + AI Agent — không gõ code truyền thống, tư duy đột phá", detail: [
          "Tích hợp AI/AI Agent trực tiếp vào sản phẩm của học viên",
          "Kỹ năng Prompting + AI Agent — không chỉ gõ code truyền thống",
          "Hồ sơ bật lên sự hiện đại, tư duy đột phá, đạt chuẩn quốc tế",
          "Chứng minh khả năng ứng dụng công nghệ tiên tiến vào thực tế"
        ]},
        { icon: "💎", title: "Đầu Tư 1 Được 2", desc: "PH không chỉ trả cho hồ sơ — mua năng lực: Code/Data/Design + Storytelling", detail: [
          "Không chỉ được hồ sơ du học — con có năng lực thực: Code/Data/Design",
          "Kỹ năng Storytelling: kể câu chuyện cá nhân thuyết phục",
          "Dù không đi du học, năng lực kỹ thuật + AI vẫn là vũ khí suốt đời",
          "Portfolio hoàn chỉnh phục vụ cả xin việc, khởi nghiệp, học bổng trong nước"
        ]},
        { icon: "📍", title: "A-Z Tracking", desc: "Từ ý tưởng dự án → bàn giao hồ sơ → theo dõi đến Visa", detail: [
          "Phase 1: Chốt Scope — chọn vấn đề xã hội + ý tưởng dự án",
          "Phase 2-3: Build sản phẩm + Hackathon → đóng gói portfolio",
          "Phase 4: Bàn giao — Link Web/Dashboard/Figma, GitHub, Bài luận, LOR, Chứng nhận",
          "Phase 5: Check-in & Tracking — cập nhật Visa, vinh danh khi nhận kết quả"
        ]},
        { icon: "🏆", title: "Chứng Nhận KÉP tại Hackathon", desc: "Học viên vừa BTC vừa Thí sinh → minh chứng Leadership mạnh mẽ", detail: [
          "Vai trò KÉP: Ban Tổ Chức + Thí sinh trong cùng một sự kiện",
          "BTC: Ứng dụng AI lập kế hoạch, truyền thông, điều phối sự kiện thực tế",
          "Thí sinh: Hoàn thiện dự án, thuyết trình tiếng Anh, phản biện trước Hội đồng",
          "Chứng nhận BTC + Giải thưởng Hackathon — minh chứng Leadership mạnh mẽ"
        ]},
        { icon: "🤝", title: "Bảo Trợ Kết Nối Việc Làm 06 Tháng", desc: "Sau khi tốt nghiệp ĐH và trở về VN — Career Coaching + mạng lưới tuyển dụng", detail: [
          "Bảo trợ kết nối việc làm 06 tháng sau tốt nghiệp ĐH",
          "Career Coaching 1-1: tối ưu CV/Portfolio theo chuẩn quốc tế",
          "Mạng lưới tuyển dụng chuyên biệt (Group Zalo theo ngành)",
          "Cộng đồng MindX Alumni đang du học & làm việc toàn cầu"
        ]}
      ];

      usps.forEach(function(usp) {
        var card = document.createElement("div");
        card.className = "xm2-usp-card";
        card.innerHTML =
          '<div class="xm2-usp-icon">' + usp.icon + '</div>' +
          '<div class="xm2-usp-title">' + usp.title + '</div>' +
          '<div class="xm2-usp-desc">' + usp.desc + '</div>';
        makeClickable(card, function() {
          showDetail(usp.icon + ' ' + usp.title, buildListHTML(usp.detail));
        });
        grid.appendChild(card);
      });
    }, 0);
    return s;
  }

  // Slide 5: Lộ trình ươm tạo (4 phases + Internship)
  function buildSlide5() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">Lộ trình ươm tạo <span class="xm2-accent-red">5 giai đoạn</span></div>' +
      '<p class="xm2-subtitle">Từ ý tưởng → sản phẩm → Hackathon → bàn giao hồ sơ → theo dõi đến Visa</p>' +
      '<div class="xm2-phases">' +
        '<div class="xm2-phase" id="xm2Phase1">' +
          '<div class="xm2-phase-badge">Phase 1</div>' +
          '<div class="xm2-phase-name">Onboarding & Chốt Scope</div>' +
          '<div class="xm2-phase-steps">' +
            '<div class="xm2-step">🎯 Phân tích pool dự án, chọn vấn đề xã hội</div>' +
            '<div class="xm2-step">💡 Chốt ý tưởng + ngách chuyên môn (Web/Data/UI-UX)</div>' +
          '</div>' +
        '</div>' +
        '<div class="xm2-phase-connector">→</div>' +
        '<div class="xm2-phase" id="xm2Phase2">' +
          '<div class="xm2-phase-badge green">Phase 2</div>' +
          '<div class="xm2-phase-name">Build & Storytelling cùng AI</div>' +
          '<div class="xm2-phase-steps">' +
            '<div class="xm2-step">💻 Thực thi dự án Web/Data/UI-UX tích hợp AI Agent</div>' +
            '<div class="xm2-step">🎤 Mock Interview & AI brainstorming Personal Statement</div>' +
            '<div class="xm2-step">📝 Viết bài luận + nhận Letter of Recommendation</div>' +
          '</div>' +
        '</div>' +
        '<div class="xm2-phase-connector">→</div>' +
        '<div class="xm2-phase">' +
          '<div class="xm2-phase-badge" style="background:#D97706;color:#fff">Phase 3</div>' +
          '<div class="xm2-phase-name">Capstone Hackathon</div>' +
          '<div class="xm2-phase-steps">' +
            '<div class="xm2-step">🏆 Vai trò KÉP: BTC + Thí sinh trong cùng sự kiện</div>' +
            '<div class="xm2-step">🎬 Media ghi hình toàn bộ quá trình → tư liệu hồ sơ</div>' +
            '<div class="xm2-step">🎤 Thuyết trình tiếng Anh, phản biện trước Hội đồng</div>' +
          '</div>' +
        '</div>' +
        '<div class="xm2-phase-connector">→</div>' +
        '<div class="xm2-phase">' +
          '<div class="xm2-phase-badge" style="background:#DB2777;color:#fff">Phase 4</div>' +
          '<div class="xm2-phase-name">Bàn Giao Hồ Sơ</div>' +
          '<div class="xm2-phase-steps">' +
            '<div class="xm2-step">📦 Đóng gói: Link Web/Dashboard/Figma, GitHub, Bài luận</div>' +
            '<div class="xm2-step">📝 LOR, Chứng nhận BTC + Giải thưởng Hackathon</div>' +
          '</div>' +
        '</div>' +
        '<div class="xm2-phase-connector">→</div>' +
        '<div class="xm2-phase">' +
          '<div class="xm2-phase-badge" style="background:#6D28D9;color:#fff">Phase 5</div>' +
          '<div class="xm2-phase-name">Check-in & Tracking</div>' +
          '<div class="xm2-phase-steps">' +
            '<div class="xm2-step">📍 Cập nhật Visa, hỗ trợ hồ sơ bổ sung</div>' +
            '<div class="xm2-step">🎉 Vinh danh khi nhận kết quả + Case Study</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm2-quote">Kèm <strong>Thực tập 15 buổi</strong> tại phòng ban MindX (R&D, Tech, Marketing...) + <strong>Bảo trợ việc làm 06 tháng</strong> sau tốt nghiệp ĐH</div>';
    return s;
  }

  // Slide 6: CNTT — 3 ngách chuyên môn
  function buildSlide6() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large"><span class="xm2-accent-blue">CNTT</span> — 3 ngách chuyên môn mũi nhọn</div>' +
      '<p class="xm2-subtitle">Cá nhân hóa theo 3 khối ngành hot nhất — tất cả đều tích hợp AI Agent</p>' +
      '<div class="xm2-specializations" id="xm2Specs"></div>';

    setTimeout(function() {
      var grid = document.getElementById("xm2Specs");
      if (!grid) return;

      var specs = [
        { icon: "🌐", name: "Web Coding", color: "#2563EB", desc: "Xây dựng & triển khai Web/App tích hợp AI Agent",
          detail: [
            "<strong>Lớp 8-9:</strong> Website tĩnh nâng cao nhận thức xã hội (HTML/CSS/JS + AI hỗ trợ)",
            "<strong>Lớp 10-12:</strong> Web Application MVP có logic JS, API, GitHub",
            "",
            "Chốt Stack & Kiến trúc (React, Node.js, Python)",
            "System Design, Database Schema, GitHub",
            "Backend (RESTful API) + Frontend (UI, Data binding)",
            "AI Agent pair-programming: debug, gợi ý thuật toán",
            "Deploy lên AWS, Vercel, Firebase",
            "Clean Code, Security audit (SQL Injection, XSS)"
          ]},
        { icon: "📈", name: "Data Analysis", color: "#059669", desc: "Phân tích dữ liệu & trực quan hóa — từ Infographic đến Interactive Dashboard",
          detail: [
            "<strong>Lớp 8-9:</strong> Infographic/Báo cáo tĩnh trực quan hóa (Google Sheets)",
            "<strong>Lớp 10-12:</strong> Interactive Dashboard hoàn chỉnh (BI Tools: PowerBI/Tableau)",
            "",
            "Thu thập dữ liệu (Web Scraping, API, Kaggle)",
            "EDA, Missing values, Feature Engineering",
            "AI detect outliers, viết truy vấn phức tạp",
            "Xuất bản Data Blog trên Medium/LinkedIn"
          ]},
        { icon: "🎨", name: "UI/UX Design", color: "#8B5CF6", desc: "Case study trọn gói từ Research đến Usability Test",
          detail: [
            "<strong>Lớp 8-9:</strong> App Concept (bản thiết kế ứng dụng giải quyết vấn đề xã hội)",
            "<strong>Lớp 10-12:</strong> Interactive Prototype Figma, luồng người dùng phức tạp",
            "",
            "User Persona, UX Research, Information Architecture",
            "Hi-Fi Design với Design System",
            "AI gen ảnh minh họa (Midjourney/DALL-E)",
            "Prototype tương tác + Micro-interactions",
            "Case Study trên Behance",
            "Usability Test với 20 users"
          ]}
      ];

      specs.forEach(function(spec) {
        var card = document.createElement("div");
        card.className = "xm2-spec-card";
        card.style.borderTopColor = spec.color;
        card.innerHTML =
          '<div class="xm2-spec-icon" style="background:' + spec.color + '15;color:' + spec.color + '">' + spec.icon + '</div>' +
          '<div class="xm2-spec-name" style="color:' + spec.color + '">' + spec.name + '</div>' +
          '<div class="xm2-spec-desc">' + spec.desc + '</div>';
        makeClickable(card, function() {
          showDetail(spec.icon + ' ' + spec.name, buildListHTML(spec.detail));
        });
        grid.appendChild(card);
      });
    }, 0);
    return s;
  }

  // Slide 7: Art — Portfolio nghệ thuật
  function buildSlide7() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large"><span class="xm2-accent-purple">Art</span> — Portfolio nghệ thuật chuẩn quốc tế</div>' +
      '<p class="xm2-subtitle">Không cần học thêm Năm 7 — nội dung riêng phù hợp hồ sơ du học ngành thiết kế</p>' +
      '<div class="xm2-art-flow">' +
        '<div class="xm2-art-item" id="xm2Art1">' +
          '<div class="xm2-art-num">01</div>' +
          '<div class="xm2-art-name">Portfolio đa phương tiện</div>' +
          '<div class="xm2-art-desc">Digital Art + Motion + UI/UX + AI-generated content — một portfolio đầy đủ chiều sâu</div>' +
        '</div>' +
        '<div class="xm2-art-item" id="xm2Art2">' +
          '<div class="xm2-art-num">02</div>' +
          '<div class="xm2-art-name">Artist Statement & Interview</div>' +
          '<div class="xm2-art-desc">Viết bài tự giới thiệu nghệ thuật + luyện phỏng vấn kỹ thuật bằng tiếng Anh</div>' +
        '</div>' +
        '<div class="xm2-art-item" id="xm2Art3">' +
          '<div class="xm2-art-num">03</div>' +
          '<div class="xm2-art-name">Case Study chuyên nghiệp</div>' +
          '<div class="xm2-art-desc">Từ concept → final work với documentation đầy đủ — đúng chuẩn trường thiết kế quốc tế</div>' +
        '</div>' +
        '<div class="xm2-art-item" id="xm2Art4">' +
          '<div class="xm2-art-num">04</div>' +
          '<div class="xm2-art-name">Behance & GitHub showcase</div>' +
          '<div class="xm2-art-desc">Đăng portfolio chuyên nghiệp lên Behance — link trực tiếp trong hồ sơ du học</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm2-target-schools">' +
        '<div class="xm2-school-label">Hướng tới</div>' +
        '<div class="xm2-school-list">Parsons · RISD · SCAD · RMIT · UAL · Pratt · SVA</div>' +
      '</div>';
    return s;
  }

  // Slide 8: So sánh hồ sơ thường vs MindX
  function buildSlide8() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">Hồ sơ thông thường vs <span class="xm2-accent-red">Hồ sơ MindX</span></div>' +
      '<div class="xm2-compare">' +
        '<div class="xm2-compare-col normal">' +
          '<div class="xm2-compare-header">Hồ sơ thông thường</div>' +
          '<div class="xm2-compare-item">❌ Bài tập demo trên máy cá nhân</div>' +
          '<div class="xm2-compare-item">❌ Hoạt động ngoại khóa chung chung</div>' +
          '<div class="xm2-compare-item">❌ Thư giới thiệu từ giáo viên trường</div>' +
          '<div class="xm2-compare-item">❌ Bảng điểm toàn lý thuyết</div>' +
          '<div class="xm2-compare-item">❌ Không có kinh nghiệm thực tập</div>' +
          '<div class="xm2-compare-item">❌ Không có link sản phẩm "sống"</div>' +
        '</div>' +
        '<div class="xm2-compare-vs">VS</div>' +
        '<div class="xm2-compare-col mindx">' +
          '<div class="xm2-compare-header mindx">Hồ sơ MindX</div>' +
          '<div class="xm2-compare-item">✅ Tech Portfolio thực chiến (Web/Dashboard/App trên GitHub/Figma)</div>' +
          '<div class="xm2-compare-item">✅ Chứng nhận KÉP Hackathon (BTC + Thí sinh)</div>' +
          '<div class="xm2-compare-item">✅ Bài luận Personal Statement được AI brainstorm</div>' +
          '<div class="xm2-compare-item">✅ LOR từ Mentor/Giảng viên MindX bảo chứng năng lực</div>' +
          '<div class="xm2-compare-item">✅ Media tư liệu hình ảnh/video toàn bộ quá trình</div>' +
          '<div class="xm2-compare-item">✅ Internship tại DN thực tế + Bảng điểm kỹ thuật</div>' +
        '</div>' +
      '</div>';
    return s;
  }

  // Slide 9: Hackathon & Demo Day
  function buildSlide9() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">Capstone Hackathon — <span class="xm2-accent-red">Vai Trò KÉP</span></div>' +
      '<p class="xm2-subtitle">HV vừa BTC vừa Thí sinh — minh chứng Leadership mạnh mẽ nhất cho hồ sơ du học</p>' +
      '<div class="xm2-usp-grid" id="xm2HackGrid"></div>';

    setTimeout(function() {
      var grid = document.getElementById("xm2HackGrid");
      if (!grid) return;

      var roles = [
        { icon: "👔", title: "Vai trò BTC", desc: "Ứng dụng AI lập kế hoạch, truyền thông, điều phối sự kiện thực tế", detail: [
          "Ứng dụng AI lập kế hoạch & truyền thông sự kiện",
          "Điều phối sự kiện thực tế: hệ thống chấm điểm, check-in QR, sân khấu",
          "Phân công: Ban Kỹ thuật (nhập điểm live), Ban Trải nghiệm (Booth), Ban Sân khấu (MC song ngữ)",
          "Chứng nhận Ban Tổ Chức — minh chứng Leadership cho hồ sơ"
        ]},
        { icon: "🏆", title: "Vai trò Thí sinh", desc: "Hoàn thiện dự án, thuyết trình tiếng Anh, phản biện trước Hội đồng", detail: [
          "Hoàn thiện dự án trong 90 phút Final Sprint",
          "Thuyết trình tiếng Anh (Pitching) trước Ban Giám khảo",
          "Phản biện và bảo vệ sản phẩm trước Hội đồng",
          "Giải thưởng Hackathon — điểm cộng hồ sơ du học"
        ]},
        { icon: "🎬", title: "Media & Tư liệu", desc: "Ghi hình toàn bộ quá trình (BTC + thi đấu) → tư liệu hồ sơ", detail: [
          "Ghi hình toàn bộ quá trình: vai trò BTC + thi đấu",
          "Video highlight cá nhân — đính kèm hồ sơ du học",
          "Ảnh hoạt động chuyên nghiệp cho Portfolio/LinkedIn",
          "Tư liệu chứng minh năng lực toàn diện trước hội đồng tuyển sinh"
        ]},
        { icon: "📦", title: "Sản phẩm đầu ra", desc: "Chứng nhận BTC + Giải thưởng Hackathon + Media package", detail: [
          "Chứng nhận Ban Tổ Chức (Leadership proof)",
          "Giải thưởng Hackathon (Technical proof)",
          "Video/Ảnh tư liệu toàn bộ quá trình",
          "Booth Tour — trưng bày sản phẩm trước khách mời & phụ huynh"
        ]}
      ];

      roles.forEach(function(role) {
        var card = document.createElement("div");
        card.className = "xm2-usp-card";
        card.innerHTML =
          '<div class="xm2-usp-icon">' + role.icon + '</div>' +
          '<div class="xm2-usp-title">' + role.title + '</div>' +
          '<div class="xm2-usp-desc">' + role.desc + '</div>';
        makeClickable(card, function() {
          showDetail(role.icon + ' ' + role.title, buildListHTML(role.detail));
        });
        grid.appendChild(card);
      });
    }, 0);

    return s;
  }

  // Slide 10: Chính sách hỗ trợ hồ sơ du học
  function buildSlide10() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">Chính sách <span class="xm2-accent-red">hỗ trợ & cam kết</span></div>' +
      '<div class="xm2-compare">' +
        '<div class="xm2-compare-col mindx">' +
          '<div class="xm2-compare-header mindx">MindX Cam Kết</div>' +
          '<div class="xm2-compare-item">✅ Kết nối tối thiểu 05 đối tác du học uy tín</div>' +
          '<div class="xm2-compare-item">✅ Danh sách 20 trường Top ngành Tech</div>' +
          '<div class="xm2-compare-item">✅ Sổ tay du học các quốc gia</div>' +
          '<div class="xm2-compare-item">✅ Cộng đồng MindX Alumni đang du học & làm việc toàn cầu</div>' +
          '<div class="xm2-compare-item">✅ Workshop du học cùng đối tác/đại diện trường</div>' +
          '<div class="xm2-compare-item">✅ Bảo trợ kết nối việc làm 06 tháng sau tốt nghiệp ĐH</div>' +
          '<div class="xm2-compare-item">✅ Career Coaching 1-1: tối ưu CV/Portfolio chuẩn quốc tế</div>' +
          '<div class="xm2-compare-item">✅ Mạng lưới tuyển dụng chuyên biệt (Group Zalo theo ngành)</div>' +
        '</div>' +
        '<div class="xm2-compare-vs"></div>' +
        '<div class="xm2-compare-col normal">' +
          '<div class="xm2-compare-header">MindX Không Cam Kết</div>' +
          '<div class="xm2-compare-item">❌ Không cam kết tỷ lệ đỗ 100%</div>' +
          '<div class="xm2-compare-item">❌ Không chịu trách nhiệm thay đổi chính sách nhập cư</div>' +
          '<div class="xm2-compare-item">❌ Không cam kết thay khả năng tài chính gia đình</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm2-quote">MindX đồng hành xây dựng <span class="xm2-accent-red">hồ sơ năng lực</span> — kết nối đối tác du học uy tín để gia đình lựa chọn.</div>';
    return s;
  }

  // Slide Case Study: 3 case studies du học
  function buildSlideCaseStudy() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">Học viên MindX — <span class="xm2-accent-red">Hành trình thực tế</span></div>' +
      '<p class="xm2-subtitle">Từ MindX đến các trường đại học & công ty hàng đầu thế giới</p>' +
      '<div class="xm2-usp-grid" id="xm2CaseGrid"></div>';

    setTimeout(function() {
      var grid = document.getElementById("xm2CaseGrid");
      if (!grid) return;

      var cases = [
        { icon: "🏆", name: "Nguyễn Nhật Quang", highlight: "C4T → Rice #17 → Microsoft", color: "#2563EB",
          detail: [
            "Cựu học viên <strong>Code For Teen (C4T)</strong> tại MindX",
            "Học bổng toàn phần <strong>284,000 USD (~6.5 tỷ)</strong> — Rice University #17 Hoa Kỳ",
            "GPA <strong>3.86/4</strong> — 3 năm trợ giảng 6 môn kỹ thuật",
            "Thực tập tại <strong>Facebook/Meta</strong> (tính năng \"tặng sao\" cho Reels)",
            "Thực tập tại <strong>Nvidia</strong> (mô phỏng xe tự lái — tự học C++ trong 1 tuần)",
            "Trúng tuyển <strong>Microsoft</strong> — bộ phận Cloud Data & AI (2024)"
          ]},
        { icon: "🌏", name: "Trần Tuệ Nhi", highlight: "C4T → VinUni → Sheffield → Singapore", color: "#8B5CF6",
          detail: [
            "Cựu học viên <strong>Code For Teen (C4T)</strong> tại MindX",
            "Học bổng <strong>100%</strong> ngành CS tại <strong>VinUniversity</strong>",
            "Thạc sĩ tại <strong>University of Sheffield</strong> (Russell Group, Anh Quốc)",
            "<strong>Huy chương Vàng Quốc tế + Giải Đặc biệt IYSA</strong> — World Science Competition",
            "Quán quân <strong>KPMG Ideation Challenge</strong>; thực tập tại <strong>KPMG Big4</strong>",
            "Quản lý Dự án tại <strong>Savvycom</strong> — DN phần mềm hàng đầu VN",
            "Hiện là <strong>Project Manager tại Singapore</strong> — platform 5+ tỷ giao dịch, 10 quốc gia"
          ]},
        { icon: "💻", name: "Bùi Quang Huy", highlight: "C4T → Miami → Google Silicon Valley", color: "#2563EB",
          detail: [
            "Học viên <strong>Code For Teen (C4T) 2017</strong> → giảng viên lớp CS03 tại MindX",
            "Học bổng toàn phần 4 năm tại <strong>Miami University, Mỹ</strong>",
            "<strong>3 lần President's List</strong> — danh sách SV xuất sắc",
            "2 lần thực tập tại <strong>Google</strong> (Google Cloud + Google Search)",
            "Gia nhập đội ngũ <strong>Google Search Experience</strong>, San Francisco (02/2023)"
          ]}
      ];

      cases.forEach(function(cs) {
        var card = document.createElement("div");
        card.className = "xm2-usp-card";
        card.style.borderTopColor = cs.color;
        card.innerHTML =
          '<div class="xm2-usp-icon">' + cs.icon + '</div>' +
          '<div class="xm2-usp-title">' + cs.name + '</div>' +
          '<div class="xm2-usp-desc" style="color:' + cs.color + ';font-weight:600">' + cs.highlight + '</div>';
        makeClickable(card, function() {
          showDetail(cs.icon + ' ' + cs.name + ' — ' + cs.highlight, buildListHTML(cs.detail));
        });
        grid.appendChild(card);
      });
    }, 0);

    return s;
  }

  // Slide 11: CTA
  function buildSlide11() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">Hành trình bắt đầu từ hôm nay</div>' +
      '<div class="xm2-cta-box xm2-cta-enroll">' +
        '<div class="xm2-cta-title">Mỗi ngày chờ đợi là một ngày<br>con đi sau các bạn cùng trang lứa</div>' +
        '<div class="xm2-cta-checks">' +
          '<div class="xm2-cta-check">✔ <strong>Tư duy</strong> — Tư duy toàn cầu, chuẩn quốc tế từ sớm</div>' +
          '<div class="xm2-cta-check">✔ <strong>Kỹ năng</strong> — Xây dựng portfolio, sẵn sàng du học</div>' +
          '<div class="xm2-cta-check">✔ <strong>Kiến thức</strong> — Nền tảng công nghệ &amp; nghệ thuật số chuẩn quốc tế</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;gap:12px;justify-content:center;margin:16px 0;flex-wrap:wrap">' +
        '<div style="background:#F0FDF4;border:2px solid #16A34A;border-radius:12px;padding:14px 20px;text-align:center;flex:1;min-width:180px;max-width:240px">' +
          '<div style="font-size:0.8rem;color:#16A34A;font-weight:700;margin-bottom:4px">Lộ trình Bảo trợ</div>' +
          '<div style="font-size:1.4rem;font-weight:800;color:#16A34A">Miễn phí 100%</div>' +
        '</div>' +
        '<div style="background:#EFF6FF;border:2px solid #2563EB;border-radius:12px;padding:14px 20px;text-align:center;flex:1;min-width:180px;max-width:240px">' +
          '<div style="font-size:0.8rem;color:#2563EB;font-weight:700;margin-bottom:4px">HV đang học MindX</div>' +
          '<div style="font-size:1.4rem;font-weight:800;color:#2563EB">21.000.000 VNĐ</div>' +
          '<div style="font-size:0.75rem;color:#2563EB">Giảm 30%</div>' +
        '</div>' +
        '<div style="background:#FFF7ED;border:2px solid #EA580C;border-radius:12px;padding:14px 20px;text-align:center;flex:1;min-width:180px;max-width:240px">' +
          '<div style="font-size:0.8rem;color:#EA580C;font-weight:700;margin-bottom:4px">Khách mới</div>' +
          '<div style="font-size:1.4rem;font-weight:800;color:#EA580C">30.000.000 VNĐ</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm2-cta-tracks">' +
        '<div class="xm2-cta-track blue">💻 CNTT — X-Global Tech Seed</div>' +
        '<div class="xm2-cta-track purple">🎨 Art — X-Global Art Seed</div>' +
      '</div>' +
      '<p class="xm2-subtitle" style="margin-top:12px;margin-bottom:0;font-size:0.95rem;color:#999">Anh/chị đã thấy lộ trình — hãy để con bước vào hành trình du học sớm nhất có thể.</p>';
    return s;
  }

  function el(tag, cls) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }

  window.xmember2Activate = activate;
  window.xmember2Deactivate = deactivate;
})();
