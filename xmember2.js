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
        { icon: "🤖", title: "Dẫn Đầu Xu Hướng AI", desc: "Tích hợp AI/AI Agent vào sản phẩm — hồ sơ bật lên sự hiện đại, tư duy đột phá, đạt chuẩn quốc tế", detail: [
          "Tích hợp AI/AI Agent trực tiếp vào sản phẩm của học viên",
          "Hồ sơ bật lên sự hiện đại, tư duy đột phá",
          "Đạt chuẩn quốc tế — nổi bật giữa hàng ngàn ứng viên",
          "Chứng minh khả năng ứng dụng công nghệ tiên tiến vào thực tế"
        ]},
        { icon: "🚀", title: "Sản Phẩm Thực Tế, Người Dùng Thật", desc: "Deploy lên AWS/App Store/CH Play với tối thiểu 20 người dùng thật", detail: [
          "Sản phẩm triển khai thực tế trên AWS / App Store / CH Play",
          "Tối thiểu 20 người dùng thật — chứng minh tính ứng dụng",
          "Link sản phẩm \"sống\" (Live Demo) đính kèm trực tiếp vào hồ sơ",
          "Không phải bài tập demo nằm trên máy tính"
        ]},
        { icon: "👑", title: "Kỹ Năng Lãnh Đạo (Leadership)", desc: "Đóng vai trò ban tổ chức vận hành Hackathon & Demo Day, nhận giấy chứng nhận", detail: [
          "Đóng vai trò ban tổ chức vận hành Hackathon & Demo Day",
          "Nhận giấy chứng nhận hoạt động ngoại khóa",
          "Rèn kỹ năng lãnh đạo, điều phối sự kiện thực tế",
          "Chứng minh tinh thần Leadership — khác biệt với hồ sơ kỹ thuật thuần túy"
        ]},
        { icon: "📝", title: "Chứng Thực Năng Lực (LOR)", desc: "Thư giới thiệu từ chuyên gia công nghệ, Quản lý học thuật, hoặc CEO MindX", detail: [
          "Letter of Recommendation từ chuyên gia công nghệ",
          "Thư từ Quản lý học thuật hoặc CEO MindX (chỉ dành cho HV xuất sắc)",
          "Bảo chứng năng lực kỹ thuật thực tế — uy tín hơn khen chung chung",
          "Có giá trị đặc biệt với hội đồng tuyển sinh quốc tế"
        ]},
        { icon: "💼", title: "Thực Tập Chuyên Môn Thực Tế (Internship)", desc: "Thực tập tại các phòng ban MindX, mentor đồng hành, đánh giá từ Trưởng bộ phận", detail: [
          "Thực tập tại các phòng ban MindX (R&D, Tech, Marketing...)",
          "Mentor đồng hành suốt quá trình thực tập",
          "Đánh giá từ Trưởng bộ phận — giấy xác nhận thực tập chính thức",
          "Trải nghiệm môi trường doanh nghiệp, rèn tác phong chuyên nghiệp"
        ]},
        { icon: "📊", title: "Bảng Điểm Kỹ Thuật (Tech-focused Transcript)", desc: "Nổi bật Tech Stack, ngôn ngữ lập trình, công cụ đã làm chủ", detail: [
          "Bảng điểm chi tiết theo chuẩn quốc tế",
          "Nổi bật Tech Stack, ngôn ngữ lập trình, công cụ đã làm chủ",
          "Đánh đúng vào điều hội đồng tuyển sinh ngành kỹ thuật tìm kiếm",
          "Khác biệt so với bảng điểm trường phổ thông truyền thống"
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
      '<div class="xm2-title-large">Lộ trình ươm tạo <span class="xm2-accent-red">~2.5 tháng</span></div>' +
      '<p class="xm2-subtitle">Giai đoạn 1: Build & Polish — 48 giờ · 16 buổi</p>' +
      '<div class="xm2-phases">' +
        '<div class="xm2-phase" id="xm2Phase1">' +
          '<div class="xm2-phase-badge">Phase 1</div>' +
          '<div class="xm2-phase-name">Product Foundation</div>' +
          '<div class="xm2-phase-meta">Buổi 1-2</div>' +
          '<div class="xm2-phase-steps">' +
            '<div class="xm2-step">🎯 Định hướng & tư duy MVP</div>' +
            '<div class="xm2-step">🏗️ Kiến trúc hệ thống & Kế hoạch dự án</div>' +
          '</div>' +
        '</div>' +
        '<div class="xm2-phase-connector">→</div>' +
        '<div class="xm2-phase" id="xm2Phase2">' +
          '<div class="xm2-phase-badge green">Phase 2</div>' +
          '<div class="xm2-phase-name">Core Development & MVP</div>' +
          '<div class="xm2-phase-meta">Buổi 3-9</div>' +
          '<div class="xm2-phase-steps">' +
            '<div class="xm2-step">💻 Phát triển MVP tích hợp AI Agent</div>' +
            '<div class="xm2-step">🔍 Code Review / Design Review / Data Validation</div>' +
            '<div class="xm2-step">✅ Hoàn thiện 100% tính năng cốt lõi</div>' +
          '</div>' +
        '</div>' +
        '<div class="xm2-phase-connector">→</div>' +
        '<div class="xm2-phase">' +
          '<div class="xm2-phase-badge" style="background:#D97706;color:#fff">Phase 3</div>' +
          '<div class="xm2-phase-name">Global Portfolio & Go-to-Market</div>' +
          '<div class="xm2-phase-meta">Buổi 10-14</div>' +
          '<div class="xm2-phase-steps">' +
            '<div class="xm2-step">📦 Đóng gói Portfolio chuẩn quốc tế (CV, Motivation Letter)</div>' +
            '<div class="xm2-step">🚀 Deploy & Go-to-Market (20 real users)</div>' +
            '<div class="xm2-step">🎤 Mock Interview & Chốt hồ sơ</div>' +
            '<div class="xm2-step">📝 Nhận Letter of Recommendation</div>' +
          '</div>' +
        '</div>' +
        '<div class="xm2-phase-connector">→</div>' +
        '<div class="xm2-phase">' +
          '<div class="xm2-phase-badge" style="background:#DB2777;color:#fff">Phase 4</div>' +
          '<div class="xm2-phase-name">Final Sprint & Demo Day</div>' +
          '<div class="xm2-phase-meta">Buổi 15-16</div>' +
          '<div class="xm2-phase-steps">' +
            '<div class="xm2-step">🔧 Hotfix Checklist & Sprint cuối</div>' +
            '<div class="xm2-step">🏆 Hackathon Day: 90 phút Final Sprint + Pitching</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm2-quote">Giai đoạn 2: <strong>Launch — Thực tập 15 buổi</strong> tại phòng ban MindX (R&D, Tech, Marketing...)</div>';
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
        { icon: "🌐", name: "Lập trình (Web)", color: "#2563EB", desc: "Xây dựng & triển khai Web/App tích hợp AI Agent",
          detail: [
            "Chốt Stack & Kiến trúc (React, Node.js, Python)",
            "System Design, Database Schema, GitHub",
            "Backend (RESTful API) + Frontend (UI, Data binding)",
            "AI Agent pair-programming: debug, gợi ý thuật toán",
            "Deploy lên AWS, Vercel, Firebase",
            "Clean Code, Security audit (SQL Injection, XSS)"
          ]},
        { icon: "📈", name: "Dữ liệu (Data Analyst)", color: "#059669", desc: "Phân tích dữ liệu & xuất bản Data Blog trên Medium/LinkedIn",
          detail: [
            "Thu thập dữ liệu (Web Scraping, API, Kaggle)",
            "EDA, Missing values, Feature Engineering",
            "AI detect outliers, viết truy vấn phức tạp",
            "Dashboard tương tác PowerBI/Tableau",
            "Xuất bản Data Blog trên Medium/LinkedIn"
          ]},
        { icon: "🎨", name: "Thiết kế (UI/UX)", color: "#8B5CF6", desc: "Case study trọn gói từ Research đến Usability Test",
          detail: [
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
          '<div class="xm2-compare-item">✅ Sản phẩm thật, 20 user thật</div>' +
          '<div class="xm2-compare-item">✅ Điều phối sự kiện + Trợ giảng</div>' +
          '<div class="xm2-compare-item">✅ Letter từ chuyên gia / CEO MindX</div>' +
          '<div class="xm2-compare-item">✅ Bảng điểm kỹ thuật (Tech Stack)</div>' +
          '<div class="xm2-compare-item">✅ Internship tại DN thực tế</div>' +
          '<div class="xm2-compare-item">✅ Live Demo + Portfolio link</div>' +
        '</div>' +
      '</div>';
    return s;
  }

  // Slide 9: Hackathon & Demo Day
  function buildSlide9() {
    var s = el("div", "xm2-slide");
    s.innerHTML =
      '<div class="xm2-title-large">Hackathon & <span class="xm2-accent-red">Demo Day</span></div>' +
      '<p class="xm2-subtitle">Mô hình: 2 ca thi đấu (Sáng/Chiều) — HV đổi vai: Thí sinh ↔ Ban Tổ Chức</p>' +
      '<div class="xm2-usp-grid" id="xm2HackGrid"></div>';

    setTimeout(function() {
      var grid = document.getElementById("xm2HackGrid");
      if (!grid) return;

      var roles = [
        { icon: "⚙️", title: "Ban Kỹ thuật & Dữ liệu", desc: "Quản lý hệ thống, nhập điểm live, AI tóm tắt", detail: [
          "Quản lý hệ thống chấm điểm và hạ tầng kỹ thuật",
          "Nhập điểm live trong suốt sự kiện",
          "AI tóm tắt kết quả và phân tích dữ liệu real-time"
        ]},
        { icon: "🎪", title: "Ban Trải nghiệm", desc: "Check-in QR, hướng dẫn khách Booth, chụp ảnh", detail: [
          "Check-in QR cho khách tham dự",
          "Hướng dẫn khách tham quan Booth trưng bày",
          "Chụp ảnh, ghi nhận hoạt động sự kiện"
        ]},
        { icon: "🎤", title: "Ban Sân khấu", desc: "MC song ngữ, time-keeper, điều phối chương trình", detail: [
          "MC song ngữ (Việt - Anh) dẫn chương trình",
          "Time-keeper đảm bảo đúng lịch trình",
          "Điều phối toàn bộ flow sân khấu"
        ]},
        { icon: "🏆", title: "Agenda sự kiện", desc: "Khai mạc → 90\' Final Sprint → Pitching → Booth Tour", detail: [
          "Khai mạc và giới thiệu sự kiện",
          "90 phút Final Sprint — hoàn thiện sản phẩm",
          "Pitching trước Ban Giám khảo",
          "Booth Tour — trưng bày và giới thiệu sản phẩm"
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
      '<div class="xm2-title-large">Chính sách <span class="xm2-accent-red">hỗ trợ hồ sơ du học</span></div>' +
      '<div class="xm2-compare">' +
        '<div class="xm2-compare-col mindx">' +
          '<div class="xm2-compare-header mindx">MindX Cam Kết Cung Cấp</div>' +
          '<div class="xm2-compare-item">✅ Mạng lưới tối thiểu 05 đối tác tư vấn du học chất lượng cao</div>' +
          '<div class="xm2-compare-item">✅ Bảng so sánh chi phí minh bạch & đánh giá chi tiết về các đối tác</div>' +
          '<div class="xm2-compare-item">✅ Bộ thông tin tổng hợp 50 trường ĐH Top đầu (chọn lọc từ đối tác)</div>' +
        '</div>' +
        '<div class="xm2-compare-vs"></div>' +
        '<div class="xm2-compare-col normal">' +
          '<div class="xm2-compare-header">MindX Không Thực Hiện & Không Cam Kết</div>' +
          '<div class="xm2-compare-item">❌ Không thu hộ phí dịch vụ — chỉ giới thiệu & kết nối</div>' +
          '<div class="xm2-compare-item">❌ Không cam kết đỗ du học 100% — phụ thuộc gia đình & visa</div>' +
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
        '<div class="xm2-cta-btn">ĐĂNG KÝ NGAY — Bắt đầu hành trình</div>' +
      '</div>' +
      '<div class="xm2-cta-tracks">' +
        '<div class="xm2-cta-track blue">💻 CNTT — X-Global Tech Seed</div>' +
        '<div class="xm2-cta-track purple">🎨 Art — X-Global Art Seed</div>' +
      '</div>' +
      '<p class="xm2-subtitle" style="margin-top:16px;margin-bottom:0;font-size:0.95rem;color:#999">Anh/chị đã thấy lộ trình — hãy để con bước vào hành trình du học sớm nhất có thể.</p>';
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
