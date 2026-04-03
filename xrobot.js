/* X-Robot v1 — Full-screen Sales Flow for Robotics (Chạm vào Robot — Chạm vào Tương lai) */
(function () {
  "use strict";

  var currentSlide = 0;
  var totalSlides = 11;
  var container = null;
  var isActive = false;
  var detailOverlay = null;

  // ===== DETAIL DATA =====
  var detailData = {
    slide2: [
      "🇯🇵 Nhật Bản: Lập trình bắt buộc từ lớp 1 (từ 2020). Trường tiểu học Nhật chuẩn bị robot cho từng học sinh.",
      "🇬🇧 Anh Quốc: Computing (lập trình + robotics) là môn bắt buộc từ lớp 1–lớp 9, bộ Giáo dục ban hành 2014.",
      "🇸🇬 Singapore: Robotics & Coding tích hợp vào Smart Nation Initiative — mỗi học sinh tiểu học có ít nhất 1 học kỳ tiếp xúc robotics.",
      "🇰🇷 Hàn Quốc: 34 giờ lập trình bắt buộc mỗi năm từ tiểu học (từ 2019), thi đấu VEX tổ chức cấp quốc gia.",
      "🇦🇺 Úc: Digital Technologies là môn học bắt buộc trong chương trình quốc gia từ 2017.",
      "🇺🇸 Mỹ: Hơn 40 bang đưa CS/Robotics vào chương trình K-12, VEX Robotics Competition có 30,000 đội tham gia.",
      "🇫🇮 Phần Lan: Lập trình và robotics tích hợp vào toán học từ lớp 1 — top 3 thế giới về giáo dục STEM.",
      "VEX IQ — kit MindX dùng từ Năm 3 — là bộ kit chính thức của VEX Robotics Competition tại 80+ quốc gia.",
      "Tại các trường quốc tế Hà Nội, TPHCM — Robotics Club là hoạt động ngoại khóa có danh sách chờ. Nhiều PH đã bắt đầu cho con từ 4–5 tuổi."
    ],
    slide3: [
      { icon: "🔧", name: "Lắp ráp — Hands-on thật sự", items: [
        "Con CHẠM, CẦM, LẮP — không phải kéo thả trên màn hình",
        "Bàn tay nhỏ học cách phối hợp bánh răng, kết nối cảm biến",
        "Kỹ năng vận động tinh + phối hợp tay-mắt phát triển mạnh",
        "MIT Media Lab: trẻ học hiệu quả nhất khi TẠO RA, không phải xem"
      ]},
      { icon: "🧠", name: "Logic & Lập trình", items: [
        "Năm 0–1: kéo thả trực quan (Spike App, VEXcode GO)",
        "Năm 2: điều kiện if/else, vòng lặp, debug",
        "Năm 3: text-based code, PID controller, thuật toán",
        "Nền tảng cho MỌI ngôn ngữ lập trình sau này"
      ]},
      { icon: "💡", name: "Sáng tạo & Giải quyết vấn đề", items: [
        "Bài toán thật: thiết kế robot giao hàng, gắp vật đúng chỗ",
        "Không có đáp án mẫu — con phải tự tìm giải pháp",
        "Vòng lặp: thiết kế → thử → hỏng → sửa → thành công",
        "Quy trình kỹ sư thật — không phải bài tập trên giấy"
      ]},
      { icon: "🤝", name: "Tự tin & Teamwork", items: [
        "Lớp 6–10 bạn chia nhóm: thiết kế, lắp ráp, lập trình, test",
        "Con học lắng nghe, phân chia, thuyết trình trước nhóm",
        "Kỹ năng mà chương trình phổ thông không dạy đủ",
        "Con tự tin nói 'Con làm được!' vì con thực sự đã làm"
      ]}
    ],
    slide4: [
      { year: "Năm 0", name: "Kỹ sư Robot nhí", color: "#F59E0B", keywords: ["LEGO Spike", "4+", "Kéo thả"], items: {
        "Tư duy": "Khơi gợi tò mò STEM, nhận biết nguyên nhân-kết quả",
        "Kỹ năng": "Phối hợp tay-mắt, lắp ráp LEGO, kéo thả lập trình đơn giản",
        "Kiến thức": "Cảm biến màu, khoảng cách, motor servo cơ bản",
        "Sản phẩm": "Robot động vật, xe cứu hộ, trực thăng LEGO",
        "Kit": "LEGO Spike Essential — chuẩn quốc tế, an toàn 100%",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 1", name: "Nhập môn Robotics", color: "#2563EB", keywords: ["VEX GO", "6+", "Block Code"], items: {
        "Tư duy": "Tư duy thiết kế kỹ thuật, lập trình mục tiêu",
        "Kỹ năng": "Lắp robot phức tạp hơn, lập trình block để hoàn thành nhiệm vụ",
        "Kiến thức": "VEXcode GO, cơ chế bánh xe và cánh tay, teamwork",
        "Sản phẩm": "Robot giao hàng, băng chuyền, cánh cửa thông minh",
        "Kit": "VEX GO — chuẩn thi đấu VEX GO Challenge, 80+ quốc gia",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 2", name: "Truy tìm bí ẩn", color: "#059669", keywords: ["VEX GO+", "8+", "if/else"], items: {
        "Tư duy": "Tư duy logic điều kiện, debug, trình bày thiết kế",
        "Kỹ năng": "Lập trình if/else, vòng lặp, tích hợp nhiều cảm biến",
        "Kiến thức": "Thuật toán cơ bản, tối ưu giải pháp kỹ thuật",
        "Sản phẩm": "Robot cứu hộ tự né vật cản, xe gom rác, robot phân loại",
        "Kit": "VEX GO nâng cao — tích hợp cảm biến, logic phức tạp",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 3", name: "Sáng tạo Robot", color: "#E31F26", keywords: ["VEX IQ", "10+", "PID"], items: {
        "Tư duy": "Tư duy kỹ thuật hệ thống, tinh thần thi đấu quốc tế",
        "Kỹ năng": "Lập trình text-based, PID controller, thuật toán điều hướng",
        "Kiến thức": "Python/VEXcode V5, encoder, cơ chế truyền động nâng cao",
        "Sản phẩm": "Xe tự lái PID, cánh tay robot, robot VEX IQ Challenge",
        "Kit": "VEX IQ — kit thi đấu chính thức VEX IQ Challenge thế giới",
        "Thời lượng": "3 HP × 14 buổi"
      }}
    ],
    slide5: [
      { year: "Năm 0", color: "#F59E0B", items: [
        "🤖 Robot động vật: Bạch tuộc vẫy chân, cá sấu há miệng theo cảm biến",
        "🚁 Trực thăng cứu hộ: Cánh quạt quay khi nút bấm, đèn hiệu sáng theo lệnh",
        "🚚 Xe vận chuyển: Di chuyển từ A → B tránh vật cản bằng cảm biến khoảng cách"
      ]},
      { year: "Năm 1", color: "#2563EB", items: [
        "📦 Robot giao hàng: Vận chuyển hàng qua đường ray, dừng đúng trạm theo lệnh lập trình",
        "⚙️ Băng chuyền tự động: Phân loại vật theo màu sắc bằng cảm biến quang học",
        "🚪 Cánh cửa thông minh: Tự mở khi phát hiện người, tự đóng sau 3 giây"
      ]},
      { year: "Năm 2", color: "#059669", items: [
        "🚨 Robot cứu hộ: Tự né vật cản, phát tín hiệu cảnh báo, di chuyển đường cong",
        "🗑️ Xe gom rác tự động: Phát hiện vật, gom về điểm tập kết, phân loại theo kích thước",
        "🤝 Robot trợ thủ: Phối hợp 2 robot cùng hoàn thành nhiệm vụ"
      ]},
      { year: "Năm 3", color: "#E31F26", items: [
        "🏎️ Xe tự lái PID: Giữ đường thẳng, vào cua chính xác bằng thuật toán PID",
        "🦾 Cánh tay robot: Gắp, di chuyển, thả vật đúng tọa độ — giống nhà máy thật",
        "🏆 Robot thi đấu: Thiết kế toàn bộ cho VEX IQ Challenge — sẵn sàng thi quốc gia"
      ]}
    ],
    slide9: [
      { icon: "👦", name: "Đình Phát — Bắt đầu lúc 7 tuổi", items: [
        "Vào MindX Robotics khi còn chưa biết đọc hết bảng chữ cái",
        "Ba năm sau, thi VEX IQ cấp thành phố và lọt vào Top 5",
        "Điều ba mẹ ấn tượng nhất: 'Con không còn sợ thất bại'",
        "Khi robot hỏng, con ngồi tìm lỗi, không khóc, không bỏ cuộc",
        "\"Đây là kỹ năng sống mà trường học không dạy được\" — Ba Đình Phát"
      ]},
      { icon: "⭐", name: "Thống kê học viên MindX", items: [
        "80,000+ học viên — từ 4 tuổi đến 25+ tuổi",
        "50+ cơ sở toàn quốc — Hà Nội, TPHCM, và 15+ tỉnh thành",
        "Tỷ lệ học viên Robotics tiếp tục sang Coding: >65%",
        "Học viên đạt giải thi Robotics cấp thành phố và quốc gia",
        "95% phụ huynh hài lòng sau buổi trải nghiệm đầu tiên"
      ]}
    ]
  };

  function buildPresentation() {
    if (container) return;
    container = document.createElement("div");
    container.id = "xrPresentation";
    container.className = "xr-presentation";

    var exitBtn = document.createElement("button");
    exitBtn.className = "xr-exit-btn";
    exitBtn.innerHTML = "✕ Thoát";
    exitBtn.addEventListener("click", deactivate);

    var slidesWrap = document.createElement("div");
    slidesWrap.className = "xr-slides";
    slidesWrap.id = "xrSlides";

    var slides = [
      buildSlide0(),
      buildSlide1(),
      buildSlide2(),
      buildSlide3(),
      buildSlide4(),
      buildSlide5(),
      buildSlide6(),
      buildSlide7(),
      buildSlide8(),
      buildSlide9(),
      buildSlide10()
    ];
    slides.forEach(function (s, i) {
      s.setAttribute("data-slide", i);
      if (i === 0) s.classList.add("active");
      slidesWrap.appendChild(s);
    });

    var nav = document.createElement("div");
    nav.className = "xr-nav";
    nav.innerHTML =
      '<button class="xr-nav-btn xr-nav-prev" id="xrPrev" disabled>← Quay lại</button>' +
      '<div class="xr-nav-dots" id="xrDots"></div>' +
      '<button class="xr-nav-btn xr-nav-next" id="xrNext">Tiếp theo →</button>';

    detailOverlay = document.createElement("div");
    detailOverlay.className = "xr-detail-overlay";
    detailOverlay.id = "xrDetailOverlay";
    detailOverlay.addEventListener("click", function(e) {
      if (e.target === detailOverlay) closeDetail();
    });

    container.appendChild(exitBtn);
    container.appendChild(slidesWrap);
    container.appendChild(nav);
    container.appendChild(detailOverlay);
    document.body.appendChild(container);

    var dotsWrap = document.getElementById("xrDots");
    for (var i = 0; i < totalSlides; i++) {
      var dot = document.createElement("button");
      dot.className = "xr-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("data-index", i);
      dot.addEventListener("click", function () {
        goToSlide(parseInt(this.getAttribute("data-index")));
      });
      dotsWrap.appendChild(dot);
    }

    document.getElementById("xrPrev").addEventListener("click", prevSlide);
    document.getElementById("xrNext").addEventListener("click", nextSlide);
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
      '<div class="xr-detail-panel">' +
        '<button class="xr-detail-close">✕</button>' +
        '<div class="xr-detail-title">' + title + '</div>' +
        '<div class="xr-detail-body">' + contentHTML + '</div>' +
      '</div>';
    detailOverlay.querySelector(".xr-detail-close").addEventListener("click", closeDetail);
    detailOverlay.classList.add("open");
  }

  function closeDetail() {
    if (detailOverlay) detailOverlay.classList.remove("open");
  }

  function buildListHTML(items) {
    var html = '<ul class="xr-detail-list">';
    for (var i = 0; i < items.length; i++) {
      html += '<li>' + items[i] + '</li>';
    }
    html += '</ul>';
    return html;
  }

  function buildKVHTML(obj) {
    var html = '<div class="xr-detail-kv">';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      html += '<div class="xr-detail-kv-row">' +
        '<span class="xr-detail-kv-key">' + keys[i] + '</span>' +
        '<span class="xr-detail-kv-val">' + obj[keys[i]].replace(/\n/g, '<br>') + '</span>' +
      '</div>';
    }
    html += '</div>';
    return html;
  }

  function makeClickable(el, onClick) {
    el.style.cursor = "pointer";
    el.classList.add("xr-clickable");
    el.addEventListener("click", function(e) {
      e.stopPropagation();
      onClick();
    });
    var hint = document.createElement("div");
    hint.className = "xr-click-hint";
    hint.textContent = "Nhấn để xem chi tiết";
    el.appendChild(hint);
  }

  function goToSlide(index) {
    if (index < 0 || index >= totalSlides || index === currentSlide) return;
    closeDetail();
    var slides = document.querySelectorAll("#xrSlides .xr-slide");
    var dots = document.querySelectorAll("#xrDots .xr-dot");

    slides.forEach(function(sl) { sl.classList.remove("active", "exit-left"); });
    currentSlide = index;
    slides[currentSlide].classList.add("active");
    slides[currentSlide].scrollTop = 0;

    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === currentSlide);
    });

    document.getElementById("xrPrev").disabled = currentSlide === 0;
    var nextBtn = document.getElementById("xrNext");
    if (currentSlide === totalSlides - 1) {
      nextBtn.innerHTML = "✓ Hoàn thành";
    } else {
      nextBtn.innerHTML = "Tiếp theo →";
    }
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
    var slides = document.querySelectorAll("#xrSlides .xr-slide");
    slides.forEach(function (s, i) {
      s.classList.remove("active", "exit-left");
      if (i === 0) s.classList.add("active");
    });
    var dots = document.querySelectorAll("#xrDots .xr-dot");
    dots.forEach(function (d, i) { d.classList.toggle("active", i === 0); });
    document.getElementById("xrPrev").disabled = true;
    document.getElementById("xrNext").innerHTML = "Tiếp theo →";
    container.classList.add("active");
  }

  function deactivate() {
    isActive = false;
    closeDetail();
    if (container) {
      container.classList.remove("active");
      var slides = container.querySelectorAll(".xr-slide.active");
      slides.forEach(function(s) { s.classList.remove("active"); });
    }
  }

  // ===== SLIDE BUILDERS =====

  // Slide 0 — COVER
  function buildSlide0() {
    var s = el("div", "xr-slide");
    s.innerHTML =
      '<img src="./mindx-logo.png" alt="MindX" class="xr-logo-large">' +
      '<div class="xr-title-hero">X-Robotics: <span class="xr-accent">Chạm vào Robot</span><br>— Chạm vào Tương lai</div>' +
      '<p class="xr-tagline">Lộ trình Robotics 4 năm — từ khám phá đến sáng tạo</p>' +
      '<div class="xr-stats" style="margin-top:clamp(16px,3vh,28px)">' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">4 tuổi+</div>' +
          '<div class="xr-stat-label">Bắt đầu từ<br>LEGO Spike Essential</div>' +
        '</div>' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">80+</div>' +
          '<div class="xr-stat-label">quốc gia dùng<br>kit VEX chuẩn thi đấu</div>' +
        '</div>' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">6–10</div>' +
          '<div class="xr-stat-label">bạn/lớp — 90 phút/buổi<br>giáo viên chuyên biệt</div>' +
        '</div>' +
      '</div>' +
      '<p style="font-size:0.75rem;color:#aaa;margin-top:8px">MindX Technology School · X-Robotics — Chương trình Robotics K12</p>';
    return s;
  }

  // Slide 1 — FEAR: Tại sao Robot?
  function buildSlide1() {
    var s = el("div", "xr-slide");
    s.innerHTML =
      '<div class="xr-title-large">Robot không chỉ là <span class="xr-accent">đồ chơi</span></div>' +
      '<p class="xr-subtitle">Robot là cầu nối duy nhất giữa thế giới thật và kỹ năng số — con CHẠM VÀO được công nghệ, không chỉ nhìn màn hình.</p>' +
      '<div class="xr-stats">' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">MIT</div>' +
          '<div class="xr-stat-label">Media Lab: trẻ học hiệu quả nhất<br>khi TẠO RA, không phải xem</div>' +
        '</div>' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">30,000</div>' +
          '<div class="xr-stat-label">đội từ 80+ quốc gia<br>VEX Robotics Competition</div>' +
        '</div>' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">80+</div>' +
          '<div class="xr-stat-label">quốc gia — tiêu chuẩn<br>giáo dục toàn cầu</div>' +
        '</div>' +
      '</div>' +
      '<div class="xr-quote">' +
        '\"Tell me and I forget. Teach me and I remember. <span class="xr-accent">Involve me and I learn.</span>\"' +
        '<div style="font-size:0.72rem;color:#aaa;margin-top:6px">— Benjamin Franklin</div>' +
      '</div>' +
      '<p class="xr-footnote">Robotics là môn học INVOLVE con nhiều nhất — Cơ khí + Điện tử + Lập trình + Toán trong 1 buổi học.</p>';
    return s;
  }

  // Slide 2 — FEAR: Thế giới đang dạy Robot
  function buildSlide2() {
    var s = el("div", "xr-slide");
    s.innerHTML =
      '<div class="xr-title-large">Thế giới đã chạy —<br><span class="xr-accent">Việt Nam đang bắt đầu</span></div>' +
      '<div class="xr-stats" id="xrSlide2Stats" style="cursor:pointer">' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">25+</div>' +
          '<div class="xr-stat-label">quốc gia đưa lập trình & Robotics<br>vào chương trình bắt buộc</div>' +
        '</div>' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">Nhật · Anh</div>' +
          '<div class="xr-stat-label">Singapore · Hàn Quốc<br>Bắt buộc từ lớp 1</div>' +
        '</div>' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">80+</div>' +
          '<div class="xr-stat-label">quốc gia dùng VEX IQ<br>kit MindX Năm 3</div>' +
        '</div>' +
      '</div>' +
      '<div class="xr-quote">Con Quý Phụ huynh đang ở đâu trong bản đồ này? Câu hỏi không phải \"Con có thích Robot không?\" — đây là câu hỏi <span class="xr-accent">\"Con có được trang bị đủ cho thế giới con sẽ sống không?\"</span></div>';

    setTimeout(function() {
      var statsEl = document.getElementById("xrSlide2Stats");
      if (!statsEl) return;
      makeClickable(statsEl, function() {
        showDetail("🌍 25+ quốc gia đã triển khai Robotics & Coding bắt buộc", buildListHTML(detailData.slide2));
      });
    }, 0);
    return s;
  }

  // Slide 3 — HOPE: 4 giá trị Robotics
  function buildSlide3() {
    var s = el("div", "xr-slide");
    s.innerHTML =
      '<div class="xr-title-large">Con được gì sau mỗi buổi <span class="xr-accent">Robotics?</span></div>' +
      '<p class="xr-subtitle">Robotics không dạy con \"về Robot\" — Robotics dạy con cách TƯ DUY, HÀNH ĐỘNG và KHÔNG BỎ CUỘC.</p>' +
      '<div class="xr-grid-4" id="xrSlide3Grid"></div>' +
      '<div class="xr-quote" style="margin-top:clamp(8px,1.5vh,16px)">Mỗi buổi học: Con lắp → con thử → robot hỏng → con sửa → robot chạy. <span class="xr-accent">Đây là vòng lặp của mọi kỹ sư trên thế giới.</span></div>';

    setTimeout(function() {
      var grid = document.getElementById("xrSlide3Grid");
      if (!grid) return;
      detailData.slide3.forEach(function(card) {
        var cardEl = document.createElement("div");
        cardEl.className = "xr-card";
        cardEl.innerHTML =
          '<span class="xr-card-icon">' + card.icon + '</span>' +
          '<div class="xr-card-title">' + card.name + '</div>' +
          '<div class="xr-card-desc">' + card.items[0] + '</div>';
        makeClickable(cardEl, function() {
          showDetail(card.icon + ' ' + card.name, buildListHTML(card.items));
        });
        grid.appendChild(cardEl);
      });
    }, 0);
    return s;
  }

  // Slide 4 — HOPE: Lộ trình 4 năm (Staircase)
  function buildSlide4() {
    var s = el("div", "xr-slide");
    var courses = detailData.slide4;
    var stepIncrement = 44; // px per step — 4 steps, generous spacing

    var stairsHtml = '<div class="xr-staircase" id="xrSlide4Stairs">';
    courses.forEach(function (c, i) {
      var riserH = i * stepIncrement;
      stairsHtml +=
        '<div class="xr-stair" data-stair="' + i + '">' +
          '<div class="xr-stair-bar" style="background:' + c.color + '">' +
            '<span class="xr-stair-year">' + c.year + '</span>' +
            '<span class="xr-stair-name">' + c.name + '</span>' +
          '</div>' +
          '<div class="xr-stair-col" style="height:' + riserH + 'px">' +
            '<div class="xr-stair-riser" style="background:' + c.color + '"></div>' +
            (c.keywords && riserH > 30 ? '<div class="xr-stair-keywords">' + c.keywords.map(function(k) { return '<span>' + k + '</span>'; }).join('') + '</div>' : '') +
          '</div>' +
          '<div class="xr-stair-outcome">Nhấn để xem chi tiết</div>' +
        '</div>';
    });
    stairsHtml += '</div>';

    s.innerHTML =
      '<div class="xr-title-large">4 năm — Mỗi năm con là <span class="xr-accent">một phiên bản mới</span></div>' +
      '<p class="xr-subtitle">Từ kéo thả vui vẻ đến robot tự điều hướng PID — đúng độ tuổi, đúng thách thức.</p>' +
      stairsHtml +
      '<div class="xr-quote">Mỗi năm con tiến 1 bậc. <span class="xr-accent">Lắp ráp → Logic → Sáng tạo → Thi đấu.</span> Nhấn vào từng bậc để xem chi tiết.</div>';

    setTimeout(function() {
      var stairs = document.querySelectorAll("#xrSlide4Stairs .xr-stair");
      stairs.forEach(function(stairEl, i) {
        var c = courses[i];
        stairEl.style.cursor = "pointer";
        stairEl.classList.add("xr-clickable");
        stairEl.addEventListener("click", function(e) {
          e.stopPropagation();
          showDetail(
            '<span style="color:' + c.color + '">' + c.year + '</span> — ' + c.name,
            buildKVHTML(c.items)
          );
        });
      });
    }, 0);
    return s;
  }

  // Slide 5 — PROOF: Sản phẩm con tạo ra
  function buildSlide5() {
    var s = el("div", "xr-slide");
    s.innerHTML =
      '<div class="xr-title-large">Không phải bài tập — đây là <span class="xr-accent">sản phẩm con TẠO RA</span></div>' +
      '<p class="xr-subtitle">Mỗi năm, con rời khỏi MindX với thứ gì đó CHẠY ĐƯỢC, NHÌN THẤY ĐƯỢC, và tự hào được.</p>' +
      '<div class="xr-year-grid" id="xrSlide5Grid"></div>' +
      '<div class="xr-quote" style="margin-top:clamp(8px,1.5vh,16px)">Không có bài kiểm tra, không có điểm số. Chỉ có câu hỏi: <span class="xr-accent">\"Robot của con có hoàn thành nhiệm vụ không?\"</span></div>';

    setTimeout(function() {
      var grid = document.getElementById("xrSlide5Grid");
      if (!grid) return;
      detailData.slide5.forEach(function(yearGroup) {
        var col = document.createElement("div");
        col.className = "xr-year-col";

        var headerSpan = document.createElement("div");
        headerSpan.className = "xr-year-header";
        headerSpan.style.background = yearGroup.color;
        headerSpan.textContent = yearGroup.year;
        col.appendChild(headerSpan);

        yearGroup.items.forEach(function(item) {
          var itemDiv = document.createElement("div");
          itemDiv.className = "xr-year-item";
          var parts = item.match(/^(\S+)\s+(.*)/);
          if (parts) {
            itemDiv.innerHTML =
              '<span class="xr-year-emoji">' + parts[1] + '</span>' +
              '<span>' + parts[2] + '</span>';
          } else {
            itemDiv.textContent = item;
          }
          col.appendChild(itemDiv);
        });

        makeClickable(col, function() {
          showDetail(yearGroup.year + ' — Sản phẩm con tạo ra', buildListHTML(yearGroup.items));
        });
        grid.appendChild(col);
      });
    }, 0);
    return s;
  }

  // Slide 6 — PROOF: Kit & Cơ sở vật chất
  function buildSlide6() {
    var s = el("div", "xr-slide");

    var kits = [
      {
        icon: "🧱",
        name: "LEGO Spike Essential",
        sub: "Năm 0 — Dành cho trẻ 4+ tuổi",
        color: "#F59E0B",
        badge: "Năm 0",
        items: "Kit LEGO Education chính thức · An toàn tuyệt đối · 100+ quốc gia · Cảm biến màu + khoảng cách + motor servo"
      },
      {
        icon: "⚙️",
        name: "VEX GO",
        sub: "Năm 1–2 — Dành cho trẻ 6–9 tuổi",
        color: "#2563EB",
        badge: "Năm 1–2",
        items: "Kit thi đấu VEX GO Challenge quốc tế · Phần cứng kim loại bền · VEXcode GO → VEXcode V5 Blocks · 80+ quốc gia"
      },
      {
        icon: "🔬",
        name: "VEX IQ",
        sub: "Năm 3 — Dành cho trẻ 10+ tuổi",
        color: "#E31F26",
        badge: "Năm 3",
        items: "Kit thi đấu VEX IQ Challenge · Lập trình Python/C++ · PID controller · Tương đương học sinh Mỹ chuẩn bị VEX Worlds"
      }
    ];

    var kitsHtml = '<div class="xr-kit-section" id="xrSlide6Kits">';
    kits.forEach(function(k) {
      kitsHtml +=
        '<div class="xr-kit-card">' +
          '<div class="xr-kit-header" style="border-left:4px solid ' + k.color + '">' +
            '<div class="xr-kit-icon">' + k.icon + '</div>' +
            '<div class="xr-kit-info">' +
              '<div class="xr-kit-name">' + k.name + '</div>' +
              '<div class="xr-kit-sub">' + k.sub + '</div>' +
            '</div>' +
            '<div class="xr-kit-badge" style="background:' + k.color + '">' + k.badge + '</div>' +
          '</div>' +
          '<div class="xr-kit-items">' + k.items + '</div>' +
        '</div>';
    });
    kitsHtml += '</div>';

    s.innerHTML =
      '<div class="xr-title-large">Kit quốc tế — Cơ sở vật chất <span class="xr-accent">chuẩn thi đấu</span></div>' +
      '<p class="xr-subtitle">Con học MindX đang dùng cùng bộ kit với học sinh các trường top Mỹ, Nhật, Singapore.</p>' +
      kitsHtml +
      '<div class="xr-quote" style="margin-top:clamp(8px,1.5vh,16px)">' +
        '<strong>Không gian học tập:</strong> Lớp 6–10 bạn · Mỗi bàn 1-2 con · 1 bộ kit riêng · 90 phút/buổi · ' +
        '<span class="xr-accent">100% giáo viên được đào tạo chuyên biệt Robotics</span> · Phòng học có camera an toàn.' +
      '</div>';
    return s;
  }

  // Slide 7 — TRUST: Lớp nhỏ, giáo viên tận tâm
  function buildSlide7() {
    var s = el("div", "xr-slide");
    s.innerHTML =
      '<div class="xr-title-large">Mỗi con đều được nhìn thấy —<br><span class="xr-accent">không ai bị bỏ lại</span></div>' +
      '<p class="xr-subtitle">6–10 bạn/lớp: Đủ nhỏ để con được hướng dẫn riêng, đủ lớn để con học được từ bạn bè.</p>' +
      '<div class="xr-checks">' +
        '<div class="xr-check">' +
          '<div class="xr-check-icon">✓</div>' +
          '<div class="xr-check-text"><strong>Tối đa 10 bạn/lớp</strong> — MindX cam kết không tăng sĩ số. Mỗi nhóm 2-3 bạn có 1 bộ kit riêng.</div>' +
        '</div>' +
        '<div class="xr-check">' +
          '<div class="xr-check-icon">✓</div>' +
          '<div class="xr-check-text"><strong>100% giáo viên chuyên biệt Robotics</strong> — Không phải giáo viên toán/tin kiêm nhiệm. Được đào tạo cách làm việc với trẻ 4–10 tuổi.</div>' +
        '</div>' +
        '<div class="xr-check">' +
          '<div class="xr-check-icon">✓</div>' +
          '<div class="xr-check-text"><strong>Phản hồi sau mỗi buổi</strong> — Giáo viên ghi chú tiến độ từng con. Phụ huynh nhận feedback sau lớp.</div>' +
        '</div>' +
        '<div class="xr-check">' +
          '<div class="xr-check-icon">✓</div>' +
          '<div class="xr-check-text"><strong>An toàn tuyệt đối</strong> — LEGO Spike: không chi tiết nhỏ nguy hiểm. VEX: kim loại mỏng nhẹ, không sắc cạnh. Phòng học có camera giám sát.</div>' +
        '</div>' +
        '<div class="xr-check">' +
          '<div class="xr-check-icon">✓</div>' +
          '<div class="xr-check-text"><strong>\"Con sợ quá khó?\"</strong> — Năm 0 bắt đầu từ \"kéo thả để bật đèn\". Bé 4 tuổi nào cũng làm được. Thách thức tăng từng bước nhỏ.</div>' +
        '</div>' +
      '</div>' +
      '<div class="xr-quote">Robotics không học tốt trong lớp 30 người. Con cần được giáo viên đứng cạnh, hỏi <span class="xr-accent">\"sao robot chưa chạy?\"</span> và dẫn con tìm ra lỗi.</div>';
    return s;
  }

  // Slide 8 — TRUST: Bridge → Coding/AI (10-year journey)
  function buildSlide8() {
    var s = el("div", "xr-slide");

    var tlItems = [
      { age: "4 tuổi", label: "Năm 0", desc: "LEGO Spike<br>Kỹ sư Robot nhí", color: "#F59E0B" },
      { age: "6 tuổi", label: "Năm 1", desc: "VEX GO<br>Nhập môn Robotics", color: "#2563EB" },
      { age: "8 tuổi", label: "Năm 2", desc: "VEX GO+<br>Truy tìm bí ẩn", color: "#059669" },
      { age: "10 tuổi", label: "Năm 3", desc: "VEX IQ<br>Sáng tạo Robot", color: "#E31F26" },
      { age: "12–14 tuổi", label: "Coding", desc: "Scratch → Python<br>App → Game", color: "#8B5CF6" },
      { age: "15–18+ tuổi", label: "Chuyên sâu", desc: "CS · Web · Data<br>AI/Machine Learning", color: "#111827" }
    ];

    var tlHtml = '<div class="xr-timeline">';
    tlItems.forEach(function(t) {
      tlHtml +=
        '<div class="xr-tl-item">' +
          '<div class="xr-tl-dot" style="background:' + t.color + '"></div>' +
          '<div class="xr-tl-label" style="color:' + t.color + '">' + t.label + '</div>' +
          '<div style="font-size:0.55rem;color:#aaa;margin:2px 0">' + t.age + '</div>' +
          '<div class="xr-tl-desc">' + t.desc + '</div>' +
        '</div>';
    });
    tlHtml += '</div>';

    s.innerHTML =
      '<div class="xr-title-large">Robotics là <span class="xr-accent">điểm khởi đầu</span><br>hành trình 10+ năm</div>' +
      '<p class="xr-subtitle">Sau Robotics, con có nền tảng logic và hands-on để bước thẳng vào Coding, AI, hoặc bất kỳ lĩnh vực công nghệ nào.</p>' +
      tlHtml +
      '<div class="xr-checks" style="max-width:600px;margin-top:clamp(8px,1.5vh,16px)">' +
        '<div class="xr-check">' +
          '<div class="xr-check-icon">→</div>' +
          '<div class="xr-check-text"><strong>Robotics → Coding:</strong> Con đã lập trình robot → hiểu vòng lặp, điều kiện → học Scratch/Python dễ hơn 3×.</div>' +
        '</div>' +
        '<div class="xr-check">' +
          '<div class="xr-check-icon">→</div>' +
          '<div class="xr-check-text"><strong>Robotics → AI:</strong> PID controller = nguyên lý cơ bản của Machine Learning. Con hiểu \"robot học từ sai lầm\" — tư duy nền tảng của AI.</div>' +
        '</div>' +
        '<div class="xr-check">' +
          '<div class="xr-check-icon">✓</div>' +
          '<div class="xr-check-text"><strong>50+ cơ sở toàn quốc</strong> — Con học liên tục dù gia đình có chuyển nơi ở. Lộ trình từ 4 tuổi đến 18+ không bị gián đoạn.</div>' +
        '</div>' +
      '</div>';
    return s;
  }

  // Slide 9 — TRUST: Social proof
  function buildSlide9() {
    var s = el("div", "xr-slide");
    s.innerHTML =
      '<div class="xr-title-large"><span class="xr-accent">80,000+</span> học viên.<br>Hàng ngàn gia đình đã tin tưởng MindX.</div>' +
      '<div class="xr-stats" id="xrSlide9Stats" style="cursor:pointer">' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">50+</div>' +
          '<div class="xr-stat-label">cơ sở toàn quốc<br>HN · TPHCM · 15+ tỉnh thành</div>' +
        '</div>' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">80,000+</div>' +
          '<div class="xr-stat-label">học viên<br>từ 4 đến 25+ tuổi</div>' +
        '</div>' +
        '<div class="xr-stat">' +
          '<div class="xr-stat-number">>65%</div>' +
          '<div class="xr-stat-label">học viên Robotics<br>tiếp tục sang Coding</div>' +
        '</div>' +
      '</div>' +
      '<div class="xr-case-study">' +
        '<div class="xr-case-title">📖 Case study — Đình Phát (bắt đầu lúc 7 tuổi)</div>' +
        '<div class="xr-case-text">Đình Phát vào MindX Robotics khi còn chưa biết đọc hết bảng chữ cái. Ba năm sau, bé thi VEX IQ cấp thành phố và lọt vào Top 5. Điều ba mẹ ấn tượng nhất không phải giải thưởng — mà là <strong>\"con không còn sợ thất bại. Khi robot hỏng, con ngồi tìm lỗi, không khóc, không bỏ cuộc.\"</strong></div>' +
      '</div>' +
      '<div class="xr-testimonials">' +
        '<div class="xr-testimonial">' +
          '<div class="xr-testimonial-text">\"Lúc đầu tôi nghĩ Robotics là \'học cho vui\'. Sau 6 tháng, tôi thấy con tự ngồi vẽ sơ đồ mạch điện khi về nhà, tự hỏi \'tại sao cái này hoạt động vậy?\'. Đó là lúc tôi hiểu — đây không phải học thêm, đây là cách con học cách TƯ DUY.\"</div>' +
          '<div class="xr-testimonial-author">— Chị Thanh Hà, Phụ huynh học viên Robotics Năm 2, Hà Nội</div>' +
        '</div>' +
        '<div class="xr-testimonial">' +
          '<div class="xr-testimonial-text">\"Con nhà tôi 5 tuổi, tôi lo quá nhỏ. Nhưng sau buổi trải nghiệm đầu tiên, con về nhà kể vanh vách \'con làm robot bật đèn bằng tay con chạm vào\'. Mắt con sáng lên — tôi đăng ký ngay.\"</div>' +
          '<div class="xr-testimonial-author">— Anh Minh Quân, Phụ huynh học viên Robotics Năm 0, TPHCM</div>' +
        '</div>' +
      '</div>';

    setTimeout(function() {
      var statsEl = document.getElementById("xrSlide9Stats");
      if (!statsEl) return;
      makeClickable(statsEl, function() {
        var html = '';
        detailData.slide9.forEach(function(item) {
          html += '<div style="margin-bottom:14px"><strong>' + item.icon + ' ' + item.name + '</strong>' + buildListHTML(item.items) + '</div>';
        });
        showDetail("📊 Số liệu & Câu chuyện MindX Robotics", html);
      });
    }, 0);
    return s;
  }

  // Slide 10 — ACT: CTA
  function buildSlide10() {
    var s = el("div", "xr-slide");
    s.innerHTML =
      '<div class="xr-title-large">Đặt lịch — Con <span class="xr-accent">chạm vào Robot</span><br>ngay buổi đầu tiên</div>' +
      '<div class="xr-cta-box xr-cta-enroll">' +
        '<div class="xr-cta-title">Buổi trải nghiệm Robot miễn phí — 60 phút</div>' +
        '<div class="xr-cta-checks">' +
          '<div class="xr-cta-check">✅ Con được cầm kit <strong>LEGO Spike hoặc VEX GO</strong> thật</div>' +
          '<div class="xr-cta-check">✅ Con lắp được <strong>1 cấu trúc robot hoàn chỉnh</strong></div>' +
          '<div class="xr-cta-check">✅ Con lập trình (kéo thả) để <strong>robot di chuyển theo ý muốn</strong></div>' +
          '<div class="xr-cta-check">✅ Phụ huynh được <strong>tư vấn 1-1</strong> về lộ trình cá nhân cho con</div>' +
          '<div class="xr-cta-check">✅ <strong>Không áp lực mua</strong> — con trải nghiệm xong, Quý Phụ huynh tự quyết định</div>' +
        '</div>' +
        '<div style="font-size:0.82rem;opacity:0.85;margin-bottom:16px">⏰ Chỉ <strong>5 suất/tuần</strong> tại mỗi cơ sở — đặt lịch để giữ chỗ</div>' +
        '<div class="xr-cta-btn">ĐĂNG KÝ NGAY — Trải nghiệm miễn phí</div>' +
      '</div>' +
      '<div class="xr-quote" style="font-style:italic;font-size:clamp(0.78rem,0.88rem,0.95rem)">' +
        'Mỗi ngày chờ đợi là một ngày con đi sau các bạn cùng trang lứa. Nhưng điều quan trọng hơn: mỗi ngày con chưa được <span class="xr-accent">CHẠM vào Robot</span> là một ngày con chưa biết mình có thể làm được điều kỳ diệu gì.' +
      '</div>' +
      '<div style="margin-top:clamp(12px,2vh,20px);display:flex;gap:16px;justify-content:center;flex-wrap:wrap;font-size:0.78rem;color:#aaa">' +
        '<span>🌐 mindx.edu.vn</span>' +
        '<span>📱 Fanpage: MindX Technology School</span>' +
        '<span>🏫 50+ cơ sở toàn quốc</span>' +
      '</div>';
    return s;
  }

  function el(tag, cls) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }

  window.xrobotActivate = activate;
  window.xrobotDeactivate = deactivate;
})();
