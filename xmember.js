/* X-Coding v4 — Full-screen Presentation with Click-to-Detail */
(function () {
  "use strict";

  var currentSlide = 0;
  var totalSlides = 18;
  var container = null;
  var isActive = false;
  var detailOverlay = null;

  // ===== DETAIL DATA =====
  var detailData = {
    slide3: [
      { icon: "🧠", name: "Tư duy logic", items: [
        "Nghiên cứu từ MIT: trẻ 6–12 tuổi có giai đoạn phát triển tư duy logic mạnh nhất",
        "Lập trình rèn phân tích, phân rã vấn đề — nền tảng cho MỌI ngành nghề",
        "Trẻ học code sớm có điểm Toán cao hơn 15–20% (Code.org Research)",
        "Tư duy thuật toán = tư duy có hệ thống: Input → Process → Output"
      ]},
      { icon: "💡", name: "Sáng tạo", items: [
        "Biến ý tưởng thành sản phẩm thật từ 8 tuổi — game, app, website",
        "Không chỉ tiêu thụ công nghệ, mà TẠO RA công nghệ",
        "Phát triển Growth Mindset: thử → sai → học → cải thiện",
        "Mỗi dự án hoàn thành = một bước trưởng thành về sự tự tin"
      ]},
      { icon: "🔧", name: "Giải quyết vấn đề", items: [
        "Kỹ năng #1 theo WEF cho thế kỷ 21",
        "Chia nhỏ vấn đề lớn → từng bước nhỏ — áp dụng cho mọi tình huống",
        "Debug code = rèn tính kiên nhẫn + phản biện",
        "Con học cách đối mặt thử thách thay vì bỏ cuộc"
      ]},
      { icon: "🎯", name: "Tự tin & Kỷ luật", items: [
        "Mỗi dự án hoàn thành = một thành tựu cụ thể con có thể chỉ ra",
        "Trình bày sản phẩm trước lớp → rèn kỹ năng thuyết trình từ sớm",
        "Kỷ luật viết code = kỷ luật tư duy: cẩn thận, tỉ mỉ, chính xác",
        "Con tự tin khi biết mình có thể TẠO RA thứ gì đó từ con số 0"
      ]}
    ],
    slide4: [
      { year: "Năm 1", name: "Scratch", color: "#2563EB", keywords: ["Kéo thả", "Thuật toán", "Game đơn giản"], items: {
        "Tư duy": "Thuật toán trực quan — phân rã vấn đề, nhận dạng pattern",
        "Kỹ năng": "Lập trình kéo thả, thiết kế game đơn giản, thuyết trình sản phẩm",
        "Kiến thức": "Biến, vòng lặp, sự kiện, điều kiện — nền tảng mọi ngôn ngữ",
        "Sản phẩm": "Đủ sức thi Scratch cấp trường/quận/TP",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 2", name: "Game Maker", color: "#059669", keywords: ["Game 2D", "Làm việc nhóm"], items: {
        "Tư duy": "Tư duy hệ thống (game design), quản lý dự án",
        "Kỹ năng": "Game 2D hoàn chỉnh, làm việc nhóm, thuyết trình & gọi vốn",
        "Kiến thức": "Game loop, sprite, physics",
        "Sản phẩm": "Game 2D upload được lên CH Play / App Store",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 3", name: "App Producer", color: "#D97706", keywords: ["Python", "Ứng dụng thực tế"], items: {
        "Tư duy": "Tư duy sản phẩm — từ ý tưởng → phát triển → phát hành",
        "Kỹ năng": "Python, xây dựng ứng dụng",
        "Kiến thức": "Python — ngôn ngữ phổ biến nhất thế giới, API, CSDL",
        "Sản phẩm": "App thực tế + kinh nghiệm khởi nghiệp sớm",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 4", name: "Web Creator", color: "#8B5CF6", keywords: ["JavaScript", "Website", "UI/UX"], items: {
        "Tư duy": "Tư duy thiết kế (UI/UX), giải quyết vấn đề phức tạp",
        "Kỹ năng": "Thành thạo JavaScript, xây website responsive đa mục đích",
        "Kiến thức": "HTML, CSS, JavaScript, DOM, API — bộ công cụ web developer",
        "Sản phẩm": "Website cá nhân, portfolio, khởi đầu freelance",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 5", name: "Computer Science", color: "#E31F26", keywords: ["Giải thuật", "AI Core", "Data Science"], items: {
        "Tư duy": "Phản biện, phân tích dữ liệu — ra quyết định dựa trên data",
        "Kỹ năng": "Thu thập & phân tích dữ liệu, quản lý dự án công nghệ",
        "Kiến thức": "Giải thuật, cấu trúc dữ liệu, AI core, khoa học máy tính",
        "Sản phẩm": "Sẵn sàng du học, thi SAT CS, ứng tuyển junior developer",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "18+", name: "Business Foundation", color: "#7D0005", isPost18: true, keywords: ["Marketing", "Sales", "Finance"], items: {
        "Tư duy": "Tư duy kinh doanh toàn diện — hiểu cách doanh nghiệp vận hành",
        "Kỹ năng": "Marketing, Sales, Finance — 3 trụ cột kinh doanh cốt lõi",
        "Kiến thức": "Lv1: MKT & Communication → Lv2: Sale & Operation → Lv3: Finance & Accounting",
        "Giá trị": "Dù con làm ngành gì, hiểu cách DN vận hành = thăng tiến nhanh hơn",
        "Thời lượng": "3 levels × 14 buổi"
      }},
      { year: "18+", name: "Chọn ngành phát triển chuyên sâu", color: "#4A1D96", isPost18: true, keywords: ["Tech", "MKT", "Finance", "Ops"], items: {
        "Tư duy": "Tư duy chuyên gia — đi sâu 1 lĩnh vực với AI tích hợp",
        "Kỹ năng": "Chuyên môn sâu trong 1 ngành + ứng dụng AI thực chiến",
        "Kiến thức": "4 hướng: Tech, Marketing, Finance, Business & Ops",
        "Giá trị": "Mô hình T-shaped: Rộng nhiều lĩnh vực + Sâu 1 ngành",
        "Thời lượng": "12 tháng chuyên sâu"
      }},
      { year: "18+", name: "Internship X", color: "#111827", isPost18: true, keywords: ["Thực tập", "Portfolio", "Job Guarantee"], items: {
        "Tư duy": "Tư duy nghề nghiệp — làm việc trong môi trường thực tế",
        "Kỹ năng": "Thực tập tại doanh nghiệp + Mentor hướng dẫn 1-1",
        "Kiến thức": "Quy trình làm việc thực tế, kỹ năng mềm, networking",
        "Giá trị": "Portfolio chuyên nghiệp + Cam kết giới thiệu việc làm",
        "Thời lượng": "30h thực tập tại doanh nghiệp đối tác"
      }}
    ],
    slide5: [
      { emoji: "🧠", name: "Tư duy", items: [
        "Năm 1–2: Tư duy logic cơ bản, phân tích mẫu, nhận dạng pattern",
        "Năm 3: Tư duy sản phẩm — biến ý tưởng thành sản phẩm hoàn chỉnh",
        "Năm 4: Tư duy thiết kế (UI/UX), giải quyết vấn đề phức tạp",
        "Năm 5: Tư duy phản biện, phân tích dữ liệu, ra quyết định",
        "BF & Domain: Tư duy chiến lược kinh doanh, quản trị"
      ]},
      { emoji: "⚡", name: "Kỹ năng", items: [
        "Năm 1–2: Lập trình kéo thả → Game 2D, thuyết trình sản phẩm",
        "Năm 3: Python + App thực tế",
        "Năm 4: JavaScript + Website + Portfolio cá nhân",
        "Năm 5: Data Analysis + AI + Quản lý dự án",
        "BF & Domain: Kỹ năng kinh doanh toàn diện + Chuyên sâu 1 ngành"
      ]},
      { emoji: "📚", name: "Kiến thức", items: [
        "Năm 1: Scratch — biến, vòng lặp, sự kiện, điều kiện",
        "Năm 2: GML, game loop, sprite, physics",
        "Năm 3: Python, API, CSDL cơ bản",
        "Năm 4: HTML, CSS, JavaScript, DOM",
        "Năm 5: Giải thuật, cấu trúc dữ liệu, AI core",
        "BF: MKT + Sale + Finance → Business Foundation toàn diện"
      ]}
    ],
    slide6: [
      { icon: "🏢", name: "Bảo trợ đa ngành", items: [
        "Business Foundation: 3 levels × 14 buổi — MKT, Sale, Finance",
        "Chuyên sâu 12 tháng: chọn 1 trong 4 domain (Tech, MKT, Finance, Business & Ops)",
        "Tất cả domain đều tích hợp AI — không chỉ học ngành mà còn học cách dùng AI",
        "Internship X: 30h thực tập tại doanh nghiệp + Cam kết việc làm",
        "Con được THỬ 3 mảng kinh doanh trước khi chọn — giảm rủi ro chọn sai ngành"
      ]},
      { icon: "✈️", name: "Bảo trợ du học", items: [
        "2 ngành: CNTT (X-Global Tech Seed) và Art (X-Global Art Seed)",
        "Xây dựng portfolio quốc tế với sản phẩm công nghệ thực tế",
        "Hồ sơ du học: CV, Motivation Letter, Portfolio/GitHub chuyên nghiệp",
        "Thực tập chuyên môn tại doanh nghiệp + Bảng điểm kỹ thuật",
        "Hỗ trợ phỏng vấn & chọn trường phù hợp năng lực"
      ]}
    ],
    slide9: [
      { icon: "💻", name: "Tech", color: "#2563EB", items: {
        "Hướng chuyên sâu": "Full Stack Web · Data Analyst · UI/UX Designer",
        "Công nghệ": "React, Node.js, Python, SQL, Power BI, Figma",
        "AI tích hợp": "AI4Tech — ứng dụng AI trong phát triển sản phẩm",
        "Tư duy": "Tư duy hệ thống, tư duy sản phẩm số",
        "Lộ trình nghề": "Junior Dev → Full Stack → Tech Lead\nData Analyst → Data Scientist → Head of Data"
      }},
      { icon: "📣", name: "Marketing", color: "#D97706", items: {
        "Hướng chuyên sâu": "MKT Fullstack — đa kênh từ content đến ads",
        "Công nghệ": "Facebook Ads, Google Ads, TikTok Ads, SEO",
        "AI tích hợp": "AI4MKT — AI trong marketing & sáng tạo nội dung",
        "Tư duy": "Tư duy chiến lược marketing, phân tích thị trường",
        "Lộ trình nghề": "Digital Marketing → Growth Marketer\nContent Creator → Content Strategist → Head of Content"
      }},
      { icon: "📊", name: "Finance", color: "#059669", items: {
        "Hướng chuyên sâu": "Data / ITBA chuyên ngành Tài chính",
        "Công nghệ": "Financial Modeling, Excel, Python, SQL, Power BI",
        "AI tích hợp": "AI4Finance — Machine Learning cho dự báo tài chính",
        "Tư duy": "Phân tích dữ liệu, ra quyết định dựa trên data",
        "Lộ trình nghề": "Financial Analyst → Senior Analyst → Finance Manager\nBusiness Analyst → Senior BA → Product Owner"
      }},
      { icon: "🏗️", name: "Business & Ops", color: "#8B5CF6", items: {
        "Hướng chuyên sâu": "IT Business Analyst / Operations Management",
        "Công nghệ": "BPMN, Use Case, Agile/Scrum, Lean, Kanban",
        "AI tích hợp": "AI4B&O — Tự động hóa quy trình vận hành",
        "Tư duy": "Tư duy quy trình, tối ưu vận hành & quản lý dự án",
        "Lộ trình nghề": "Business Analyst → Senior BA → Product Manager\nOps Manager → COO"
      }}
    ],
    // NEW: Special programs detail data
    slideSpecial: [
      { icon: "🤖", name: "AI4Learn", subtitle: "Sử dụng AI để học tập hiệu quả hơn", color: "#111827", duration: "1 level × 6 buổi (12h) — theo độ tuổi", timing: "Dưới lớp 7 → Level 1 | Trên lớp 7 → Level 2", items: [
        "Lộ trình AI dành riêng cho học sinh K12 — khóa học đệm chiến lược",
        "Giúp con học tập hiệu quả hơn trên trường phổ thông thông qua AI",
        "Học sinh học 1 level phù hợp độ tuổi (dưới lớp 7 → Lv1, trên lớp 7 → Lv2)",
        "Trong lộ trình Coding: Scratch/Game Maker → Level 1, App/Web → Level 2",
        "Hình thành năng lực sử dụng AI đúng cách và có trách nhiệm",
        "Xây dựng công cụ học tập cá nhân hóa bằng AI cho mỗi học sinh",
        "Không bán lẻ — luôn nằm trong gói lộ trình 24 tháng trở lên"
      ], levels: [
        { name: "Level 1", desc: "Sáng tạo nội dung với AI (6 buổi) — Dành cho HV dưới lớp 7. Tạo hình ảnh bằng Nano Banana, slide bằng Gamma, video bằng Flow. Học viết prompt hiệu quả. Sản phẩm: Bộ hình + Slide + Video.", icon: "🌟" },
        { name: "Level 2", desc: "Chatbot học tập (6 buổi) — Dành cho HV trên lớp 7. Xây chatbot ôn bài với Gemini & NotebookLM. Tạo Study Pack cá nhân: quiz, flashcard, chatbot Q&A. Sản phẩm: Bộ công cụ ôn tập.", icon: "🚀" }
      ]},
      { icon: "🚀", name: "NextGen", subtitle: "Khởi nghiệp & Gọi vốn giả lập", color: "#E31F26", duration: "14 buổi × 3 lần", timing: "Kết nối cuối Gamemaker, App Producer, Web Creator", items: [
        "Học sinh ghép nhóm, xây dựng sản phẩm thực tế và Go Live",
        "Phân tích thị trường qua mô hình 5 Forces & SWOT",
        "Xây dựng mô hình kinh doanh & dòng doanh thu",
        "Định giá sản phẩm/dự án — có căn cứ và logic",
        "Kế hoạch sử dụng vốn & phương án hoàn vốn",
        "Sản xuất bản thuyết trình gọi vốn chuyên nghiệp",
        "Thuyết trình gọi vốn trước hội đồng giả lập Shark Tank",
        "Sơ duyệt tại lớp có phụ huynh tham gia đánh giá"
      ], levels: [
        { name: "NextGen Game", desc: "Game làm theo nhóm, Go Live đa nền tảng (offline → online PC → online mobile). Gọi vốn cho MKT dự án Game — đi sâu 1 khía cạnh thay vì lan man.", icon: "🎮" },
        { name: "NextGen App", desc: "Sản phẩm cá nhân/nhóm 2 người, quản lý code với GitHub. Quy trình phát triển sản phẩm tiêu chuẩn. Gọi vốn cho DỰ ÁN — phải định giá được dự án.", icon: "📱" },
        { name: "NextGen Web", desc: "Go Live web đa mức độ: ẩn danh → authen tài khoản → authen + phân quyền. Sản phẩm phục vụ ý tưởng kinh doanh. Gọi vốn + định giá dự án.", icon: "🌐" }
      ]},
      { icon: "🏢", name: "Internship 1", subtitle: "Tech Project with AI Foundation", color: "#2563EB", duration: "60 giờ", timing: "Giai đoạn Web Creator", items: [
        "Thực tập tại các phòng ban thực tế của MindX (nhóm ≥3 thành viên)",
        "Modun 1 (20h): Học chuyên môn/nghiệp vụ bộ phận + kiểm tra lý thuyết + thực tập",
        "Modun 2 (20h): Chuyên môn nghiệp vụ nâng cao + AI hỗ trợ học tập & thực tập",
        "Modun 3 (20h): Xây dựng giải pháp nâng cao hiệu suất công việc cho bộ phận",
        "Kết hợp kiến thức Technical sẵn có + AI (GenAI nghiên cứu, nhận diện hình ảnh, training model)",
        "Xây dựng tài liệu đặc tả sản phẩm, mô tả vận hành sản phẩm",
        "VD: Xây dựng chatbot AI, trang web nội bộ, hệ thống báo cáo tự động"
      ]},
      { icon: "📋", name: "Internship 2", subtitle: "Project Management with AI Core", color: "#059669", duration: "60 giờ", timing: "Giai đoạn Web Creator → CS", items: [
        "Quản lý dự án công nghệ với phương pháp Agile/Scrum",
        "Ứng dụng AI Core vào quy trình quản lý và ra quyết định",
        "Lập kế hoạch, phân công, theo dõi tiến độ dự án thực tế",
        "Phối hợp đa phòng ban — kỹ năng Leadership & Teamwork",
        "Xây dựng báo cáo dự án, đánh giá hiệu quả bằng data",
        "Nâng cao từ Intern 1: Từ thực thi → Quản lý → Chiến lược"
      ]}
    ],
    slide11: [
      { name: "5 năm nền tảng", items: [
        "Scratch (10+) → Game Maker (11+) → App Producer (12+) → Web Creator (13+) → CS (14+)",
        "Mỗi năm 3 học phần × 14 buổi, tổng ~210 buổi",
        "Từ kéo thả đến code chuyên nghiệp",
        "Kèm chương trình đặc biệt: AI4Learn, NextGen, Internship"
      ]},
      { name: "Business Foundation", items: [
        "Lv1: MKT & Communication — 14 buổi",
        "Lv2: Sale & Operation — 14 buổi",
        "Lv3: Finance & Accounting — 14 buổi",
        "Dù con làm ngành gì, hiểu cách DN vận hành = thăng tiến nhanh hơn"
      ]},
      { name: "Chuyên sâu 12T", items: [
        "4 hướng: Tech, Marketing, Finance, Business & Ops",
        "12 tháng chuyên sâu với AI tích hợp",
        "Không cần chọn ngay — sau BF con sẽ hiểu mình phù hợp",
        "Mô hình T-shaped: Rộng nhiều lĩnh vực + Sâu 1 ngành"
      ]},
      { name: "Internship X", items: [
        "30h thực tập tại doanh nghiệp đối tác",
        "Mentor hướng dẫn 1-1 suốt quá trình",
        "Portfolio chuyên nghiệp — chứng minh năng lực thật",
        "Cam kết giới thiệu việc làm sau hoàn thành"
      ]}
    ]
  };

  function buildPresentation() {
    if (container) return;
    container = document.createElement("div");
    container.id = "xmPresentation";
    container.className = "xm-presentation";

    // Exit button
    var exitBtn = document.createElement("button");
    exitBtn.className = "xm-exit-btn";
    exitBtn.innerHTML = "✕ Thoát";
    exitBtn.addEventListener("click", deactivate);

    // Slides container
    var slidesWrap = document.createElement("div");
    slidesWrap.className = "xm-slides";
    slidesWrap.id = "xmSlides";

    // Build each slide
    var slides = [
      buildSlide1(),
      buildSlide2(),
      buildSlideMarket2(),
      buildSlideMarket3(),
      buildSlide3(),
      buildSlide4(),
      buildSlideSpecial(),
      buildSlide5(),
      buildSlide6(),
      buildSlide7(),
      buildSlide8(),
      buildSlide9(),
      buildSlide10(),
      buildSlideCareer(),
      buildSlideCaseStudy(),
      buildSlidePartners(),
      buildSlide11(),
      buildSlide12()
    ];
    slides.forEach(function (s, i) {
      s.setAttribute("data-slide", i);
      if (i === 0) s.classList.add("active");
      slidesWrap.appendChild(s);
    });

    // Nav bar
    var nav = document.createElement("div");
    nav.className = "xm-nav";
    nav.innerHTML =
      '<button class="xm-nav-btn xm-nav-prev" id="xmPrev" disabled>← Quay lại</button>' +
      '<div class="xm-nav-dots" id="xmDots"></div>' +
      '<button class="xm-nav-btn xm-nav-next" id="xmNext">Tiếp theo →</button>';

    // Detail overlay
    detailOverlay = document.createElement("div");
    detailOverlay.className = "xm-detail-overlay";
    detailOverlay.id = "xmDetailOverlay";
    detailOverlay.addEventListener("click", function(e) {
      if (e.target === detailOverlay) closeDetail();
    });

    container.appendChild(exitBtn);
    container.appendChild(slidesWrap);
    container.appendChild(nav);
    container.appendChild(detailOverlay);
    document.body.appendChild(container);

    // Build dots
    var dotsWrap = document.getElementById("xmDots");
    for (var i = 0; i < totalSlides; i++) {
      var dot = document.createElement("button");
      dot.className = "xm-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("data-index", i);
      dot.addEventListener("click", function () {
        goToSlide(parseInt(this.getAttribute("data-index")));
      });
      dotsWrap.appendChild(dot);
    }

    document.getElementById("xmPrev").addEventListener("click", prevSlide);
    document.getElementById("xmNext").addEventListener("click", nextSlide);

    // Keyboard
    document.addEventListener("keydown", handleKey);
  }

  function handleKey(e) {
    if (!isActive) return;
    // If detail overlay is open, Escape closes it
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
      '<div class="xm-detail-panel">' +
        '<button class="xm-detail-close" onclick="(function(e){e.closest(\'.xm-detail-overlay\').classList.remove(\'open\')})(this)">✕</button>' +
        '<div class="xm-detail-title">' + title + '</div>' +
        '<div class="xm-detail-body">' + contentHTML + '</div>' +
      '</div>';
    detailOverlay.querySelector(".xm-detail-close").addEventListener("click", closeDetail);
    detailOverlay.classList.add("open");
  }

  function closeDetail() {
    if (detailOverlay) detailOverlay.classList.remove("open");
  }

  function buildListHTML(items) {
    var html = '<ul class="xm-detail-list">';
    for (var i = 0; i < items.length; i++) {
      html += '<li>' + items[i] + '</li>';
    }
    html += '</ul>';
    return html;
  }

  function buildKVHTML(obj) {
    var html = '<div class="xm-detail-kv">';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      html += '<div class="xm-detail-kv-row">' +
        '<span class="xm-detail-kv-key">' + keys[i] + '</span>' +
        '<span class="xm-detail-kv-val">' + obj[keys[i]].replace(/\n/g, '<br>') + '</span>' +
      '</div>';
    }
    html += '</div>';
    return html;
  }

  // ===== MAKE CLICKABLE =====
  function makeClickable(el, onClick) {
    el.style.cursor = "pointer";
    el.classList.add("xm-clickable");
    el.addEventListener("click", function(e) {
      e.stopPropagation();
      onClick();
    });
    // Add hint
    var hint = document.createElement("div");
    hint.className = "xm-click-hint";
    hint.textContent = "Nhấn để xem chi tiết";
    el.appendChild(hint);
  }

  function goToSlide(index) {
    if (index < 0 || index >= totalSlides || index === currentSlide) return;
    closeDetail();
    var slides = document.querySelectorAll("#xmSlides .xm-slide");
    var dots = document.querySelectorAll("#xmDots .xm-dot");

    slides.forEach(function(sl) { sl.classList.remove("active", "exit-left"); });

    currentSlide = index;
    slides[currentSlide].classList.add("active");
    slides[currentSlide].scrollTop = 0;

    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === currentSlide);
    });

    document.getElementById("xmPrev").disabled = currentSlide === 0;
    var nextBtn = document.getElementById("xmNext");
    if (currentSlide === totalSlides - 1) {
      nextBtn.innerHTML = "✓ Hoàn thành";
    } else {
      nextBtn.innerHTML = "Tiếp theo →";
    }
  }

  function nextSlide() {
    if (currentSlide === totalSlides - 1) {
      deactivate();
      return;
    }
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function activate() {
    buildPresentation();
    isActive = true;
    currentSlide = 0;
    closeDetail();
    var slides = document.querySelectorAll("#xmSlides .xm-slide");
    slides.forEach(function (s, i) {
      s.classList.remove("active", "exit-left");
      if (i === 0) s.classList.add("active");
    });
    var dots = document.querySelectorAll("#xmDots .xm-dot");
    dots.forEach(function (d, i) { d.classList.toggle("active", i === 0); });
    document.getElementById("xmPrev").disabled = true;
    document.getElementById("xmNext").innerHTML = "Tiếp theo →";
    container.classList.add("active");
  }

  function deactivate() {
    isActive = false;
    closeDetail();
    if (container) {
      container.classList.remove("active");
      // Remove active from all slides to prevent pointer-events leak
      var slides = container.querySelectorAll(".xm-slide.active");
      slides.forEach(function(s) { s.classList.remove("active"); });
    }
  }

  // ===== SLIDE BUILDERS =====

  function buildSlide1() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<img src="./mindx-logo.png" alt="MindX" class="xm-logo-large">' +
      '<div class="xm-title-hero">Chào mừng đến với<br><span class="xm-accent">MindX Technology School</span></div>' +
      '<p class="xm-tagline">Kiến tạo thế hệ công dân số</p>';
    return s;
  }

  function buildSlide2() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">AI đang thay đổi <span class="xm-accent">mọi thứ</span></div>' +
      '<div class="xm-stats" id="xmSlide2Stats">' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">92 triệu</div>' +
          '<div class="xm-stat-label">việc làm bị thay thế<br>đến 2030</div>' +
          '<div class="xm-footnote">WEF 2025</div>' +
        '</div>' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">74.5%</div>' +
          '<div class="xm-stat-label">công việc lập trình<br>có thể bị AI làm</div>' +
          '<div class="xm-footnote">Anthropic 2026</div>' +
        '</div>' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">9.03%</div>' +
          '<div class="xm-stat-label">thất nghiệp thanh niên VN<br>cao nhất 14 năm</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm-quote">Bạn sẽ không mất việc vào tay AI, nhưng bạn sẽ mất việc vào tay người <span class="xm-accent">BIẾT SỬ DỤNG AI.</span></div>' +
      '<p class="xm-footnote">— Jensen Huang, CEO Nvidia (2025)</p>';

    setTimeout(function() {
      var statsEl = document.getElementById("xmSlide2Stats");
      if (!statsEl) return;
      makeClickable(statsEl, function() {
        var html = '<table style="width:100%;border-collapse:collapse;font-size:0.85rem">' +
          '<tr style="background:#FEE2E2"><td colspan="3" style="padding:8px;font-weight:700;color:#DC2626">⚠️ Nghề nguy cơ CAO bị AI thay thế</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Telemarketer</td><td style="padding:6px;font-weight:700;color:#DC2626">96%</td><td style="padding:6px;color:#888">Wharton 2025</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Customer Service</td><td style="padding:6px;font-weight:700;color:#DC2626">70%</td><td style="padding:6px;color:#888">Anthropic 2026</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Data Entry</td><td style="padding:6px;font-weight:700;color:#DC2626">67%</td><td style="padding:6px;color:#888">Anthropic 2026</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Kế toán back-office</td><td style="padding:6px;font-weight:700;color:#DC2626">~cao</td><td style="padding:6px;color:#888">Goldman Sachs 2025</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Thu ngân</td><td style="padding:6px;font-weight:700;color:#DC2626">-11%</td><td style="padding:6px;color:#888">BLS 2024</td></tr>' +
          '<tr style="background:#ECFDF5"><td colspan="3" style="padding:8px;font-weight:700;color:#059669">✅ Nghề AN TOÀN — được AI bổ trợ</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Kỹ sư AI / PM</td><td style="padding:6px;font-weight:700;color:#059669">+17.9%</td><td style="padding:6px;color:#888">BLS 2025</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Data Scientist</td><td style="padding:6px;font-weight:700;color:#059669">+33.5%</td><td style="padding:6px;color:#888">BLS 2025</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Creative Director</td><td style="padding:6px;font-weight:700;color:#059669">85/100</td><td style="padding:6px;color:#888">Chống AI</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Lãnh đạo & Quản lý</td><td style="padding:6px;font-weight:700;color:#059669">90/100</td><td style="padding:6px;color:#888">Chống AI</td></tr>' +
          '<tr><td style="padding:6px">UX Designer</td><td style="padding:6px;font-weight:700;color:#059669">Bổ trợ</td><td style="padding:6px;color:#888">AI hỗ trợ, không thay thế</td></tr>' +
          '</table>';
        showDetail("⚠️ Nghề nguy cơ vs Nghề an toàn trước AI", html);
      });
    }, 0);
    return s;
  }

  // ===== NEW: Market Education Slide 2 — PH đang hành động =====
  function buildSlideMarket2() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Phụ huynh khắp thế giới <span class="xm-accent">đang hành động</span></div>' +
      '<div class="xm-stats" id="xmMarket2Stats">' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">25+</div>' +
          '<div class="xm-stat-label">quốc gia đưa lập trình<br>vào bắt buộc từ tiểu học</div>' +
        '</div>' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">24%</div>' +
          '<div class="xm-stat-label">chi tiêu hộ gia đình VN<br>dành cho giáo dục</div>' +
        '</div>' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">$132 tỷ</div>' +
          '<div class="xm-stat-label">thị trường STEM K-12<br>toàn cầu 2030</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm-quote">Nhật Bản, Anh, Singapore đã dạy code từ lớp 1. Câu hỏi không phải con CÓ NÊN học — mà là <span class="xm-accent">BẮT ĐẦU TỪ BAO GIỜ.</span></div>';

    setTimeout(function() {
      var statsEl = document.getElementById("xmMarket2Stats");
      if (!statsEl) return;
      makeClickable(statsEl, function() {
        showDetail("🌏 Các quốc gia triển khai coding bắt buộc", buildListHTML([
          "🇰🇷 Hàn Quốc (2007) — Quốc gia đầu tiên: lập trình bắt buộc từ tiểu học & THCS",
          "🇬🇧 Anh Quốc (2014) — Tất cả học sinh 5-16 tuổi được dạy lập trình bắt buộc",
          "🇯🇵 Nhật Bản (2020) — Lập trình bắt buộc từ lớp 5 tiểu học đến hết THPT",
          "🇸🇬 Singapore — Đứng #1 ASEAN về kỹ năng kỹ thuật số (Coursera 2024)",
          "🇦🇪 UAE (2023) — Lập trình bắt buộc cho tất cả học sinh",
          "🇻🇳 Việt Nam — 24% chi tiêu hộ gia đình cho giáo dục, gần gấp đôi khu vực",
          "📈 Thị trường STEM K-12: $60 tỷ (2024) → $132 tỷ (2030), CAGR 13.7%",
          "🔥 Châu Á – Thái Bình Dương tăng trưởng nhanh nhất: CAGR 16.5%"
        ]));
      });
    }, 0);
    return s;
  }

  // ===== NEW: Market Education Slide 3 — Ngành CNTT =====
  function buildSlideMarket3() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Ngành CNTT — <span class="xm-accent">Cơ hội lớn nhất</span> thế kỷ 21</div>' +
      '<div class="xm-stats" id="xmMarket3Stats">' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">198 tỷ USD</div>' +
          '<div class="xm-stat-label">doanh thu ngành ICT<br>Việt Nam 2025</div>' +
          '<div class="xm-footnote">(+26% YoY)</div>' +
        '</div>' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">150K-200K</div>' +
          '<div class="xm-stat-label">lập trình viên<br>thiếu mỗi năm tại VN</div>' +
        '</div>' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">60%</div>' +
          '<div class="xm-stat-label">sinh viên tốt nghiệp<br>làm sai ngành</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm-quote">Không thiếu việc — chỉ thiếu người đủ giỏi. Và người đủ giỏi <span class="xm-accent">bắt đầu từ sớm.</span></div>';

    setTimeout(function() {
      var statsEl = document.getElementById("xmMarket3Stats");
      if (!statsEl) return;
      makeClickable(statsEl, function() {
        var html = '<table style="width:100%;border-collapse:collapse;font-size:0.85rem">' +
          '<tr style="background:#EFF6FF"><td colspan="3" style="padding:8px;font-weight:700;color:#2563EB">💰 Bảng lương IT Việt Nam (ITviec 2024-2025)</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">CTO / CIO / VPoE</td><td style="padding:6px;font-weight:700;color:#2563EB">96M/tháng</td><td style="padding:6px;color:#888">8 năm KN</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Tech Lead</td><td style="padding:6px;font-weight:700;color:#2563EB">58M/tháng</td><td style="padding:6px;color:#888">6 năm KN</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">AI / Blockchain Engineer</td><td style="padding:6px;font-weight:700;color:#2563EB">37.75M/tháng</td><td style="padding:6px;color:#888">4 năm KN</td></tr>' +
          '<tr style="border-bottom:1px solid #eee"><td style="padding:6px">Backend Developer</td><td style="padding:6px;font-weight:700;color:#2563EB">35.6M/tháng</td><td style="padding:6px;color:#888">6 năm KN</td></tr>' +
          '<tr><td style="padding:6px">Cloud Engineer</td><td style="padding:6px;font-weight:700;color:#2563EB">29.2M/tháng</td><td style="padding:6px;color:#888">3 năm KN</td></tr>' +
          '</table>' +
          '<div style="margin-top:12px;padding:8px;background:#FEF3C7;border-radius:8px;font-size:0.8rem;color:#92400E">' +
          '📈 Lương AI Developer VN tăng 10-20%/năm. Silicon Valley: $150K-400K/năm.</div>';
        showDetail("💰 Lương ngành IT Việt Nam", html);
      });
    }, 0);
    return s;
  }

  function buildSlide3() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Tại sao cần bắt đầu <span class="xm-accent">từ sớm?</span></div>' +
      '<p class="xm-subtitle">Nhật Bản, Úc, Phần Lan, Singapore đã đưa lập trình vào bắt buộc từ tiểu học</p>' +
      '<div class="xm-grid-4" id="xmSlide3Grid"></div>';

    // Defer interactive setup
    setTimeout(function() {
      var grid = document.getElementById("xmSlide3Grid");
      if (!grid) return;
      detailData.slide3.forEach(function(card) {
        var cardEl = document.createElement("div");
        cardEl.className = "xm-card";
        cardEl.innerHTML =
          '<span class="xm-card-icon">' + card.icon + '</span>' +
          '<div class="xm-card-title">' + card.name + '</div>' +
          '<div class="xm-card-desc">' + card.items[0] + '</div>';
        makeClickable(cardEl, function() {
          showDetail(card.icon + ' ' + card.name, buildListHTML(card.items));
        });
        grid.appendChild(cardEl);
      });
    }, 0);
    return s;
  }

  function buildSlide4() {
    var s = el("div", "xm-slide");
    var courses = detailData.slide4;
    // Riser heights — each step sits progressively higher (ascending staircase)
    var totalSteps = courses.length; // 8
    var stepIncrement = 36; // px per step

    var stairsHtml = '<div class="xm-staircase xm-staircase-full" id="xmSlide4Stairs">';
    var hasPost18 = false;
    var riserIdx = 0;
    courses.forEach(function (c, i) {
      // Add divider before 18+ section
      if (c.isPost18 && !hasPost18) {
        stairsHtml += '<div class="xm-stair-divider"><span>18+</span></div>';
        hasPost18 = true;
      }
      var extraClass = c.isPost18 ? ' xm-stair-post18' : '';
      var riserH = i * stepIncrement;
      stairsHtml +=
        '<div class="xm-stair' + extraClass + '" data-stair="' + i + '">' +
          '<div class="xm-stair-bar" style="background:' + c.color + '">' +
            '<span class="xm-stair-year">' + c.year + '</span>' +
            '<span class="xm-stair-name">' + c.name + '</span>' +
          '</div>' +
          '<div class="xm-stair-col" style="height:' + riserH + 'px">' +
            '<div class="xm-stair-riser" style="background:' + c.color + '"></div>' +
            (c.keywords && riserH > 30 ? '<div class="xm-stair-keywords">' + c.keywords.map(function(k) { return '<span>' + k + '</span>'; }).join('') + '</div>' : '') +
          '</div>' +
          '<div class="xm-stair-outcome">Nhấn để xem chi tiết</div>' +
        '</div>';
    });
    stairsHtml += '</div>';

    s.innerHTML =
      '<div class="xm-title-large">Lộ trình phát triển tại <span class="xm-accent">MindX</span></div>' +
      '<p class="xm-subtitle">Từ K12 đến 18+ — khép kín từ nền tảng đến nghề nghiệp</p>' +
      stairsHtml +
      '<div class="xm-quote">Mỗi năm con tiến 1 bậc. Phát triển đồng thời <span class="xm-accent">Tư duy, Kỹ năng, Kiến thức.</span></div>';

    setTimeout(function() {
      var stairs = document.querySelectorAll("#xmSlide4Stairs .xm-stair");
      stairs.forEach(function(stairEl, i) {
        var c = courses[i];
        stairEl.style.cursor = "pointer";
        stairEl.classList.add("xm-clickable");
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

  function buildSlideSpecial() {
    var s = el("div", "xm-slide");
    var programs = detailData.slideSpecial;
    s.innerHTML =
      '<div class="xm-title-large">4 chương trình nâng cao <span class="xm-accent">đặc biệt</span></div>' +
      '<p class="xm-subtitle">Xuyên suốt lộ trình — trước khi chọn chuyên ngành — con được rèn luyện thực chiến</p>' +
      '<div class="xm-special-programs" id="xmSpecialGrid"></div>' +
      '<div class="xm-quote">Không chỉ học lý thuyết — con được <span class="xm-accent">KHỞI NGHIỆP, THỰC TẬP, QUẢN LÝ DỰ ÁN</span> từ khi còn ngồi ghế nhà trường.</div>';

    setTimeout(function() {
      var grid = document.getElementById("xmSpecialGrid");
      if (!grid) return;
      programs.forEach(function(prog) {
        var card = document.createElement("div");
        card.className = "xm-special-card";
        card.innerHTML =
          '<div class="xm-special-header" style="border-left:4px solid ' + prog.color + '">' +
            '<div class="xm-special-icon">' + prog.icon + '</div>' +
            '<div class="xm-special-info">' +
              '<div class="xm-special-name">' + prog.name + '</div>' +
              '<div class="xm-special-sub">' + prog.subtitle + '</div>' +
            '</div>' +
            '<div class="xm-special-badge" style="background:' + prog.color + '">' + prog.duration + '</div>' +
          '</div>' +
          '<div class="xm-special-timing">' + prog.timing + '</div>';
        makeClickable(card, function() {
          var html = buildListHTML(prog.items);
          if (prog.levels) {
            html += '<div class="xm-detail-levels">';
            prog.levels.forEach(function(lv) {
              html += '<div class="xm-detail-level">' +
                '<div class="xm-detail-level-header">' + lv.icon + ' ' + lv.name + '</div>' +
                '<div class="xm-detail-level-desc">' + lv.desc + '</div>' +
              '</div>';
            });
            html += '</div>';
          }
          showDetail(prog.icon + ' ' + prog.name + ' — ' + prog.subtitle, html);
        });
        grid.appendChild(card);
      });
    }, 0);
    return s;
  }

  function buildSlide5() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">3 hệ giá trị <span class="xm-accent">xuyên suốt</span></div>' +
      '<p class="xm-subtitle">Mỗi khóa học đều phát triển đồng thời 3 hệ giá trị</p>' +
      '<div class="xm-grid-3" id="xmSlide5Grid"></div>';

    setTimeout(function() {
      var grid = document.getElementById("xmSlide5Grid");
      if (!grid) return;
      var labels = ["Hệ giá trị 1", "Hệ giá trị 2", "Hệ giá trị 3"];
      detailData.slide5.forEach(function(val, i) {
        var cardEl = document.createElement("div");
        cardEl.className = "xm-value-card";
        cardEl.innerHTML =
          '<div class="xm-value-label">' + labels[i] + '</div>' +
          '<div class="xm-value-title">' + val.emoji + ' ' + val.name + '</div>' +
          '<div class="xm-value-desc">' + val.items[0] + '<br><br>' + val.items[1] + '</div>';
        makeClickable(cardEl, function() {
          showDetail(val.emoji + ' Hệ giá trị: ' + val.name, buildListHTML(val.items));
        });
        grid.appendChild(cardEl);
      });
    }, 0);
    return s;
  }

  function buildSlide6() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Sau 5 năm: Con sẵn sàng cho <span class="xm-accent">điểm rẽ lớn</span></div>' +
      '<p class="xm-subtitle">Với nền tảng công nghệ vững chắc, con có 2 hướng phát triển tiếp theo</p>' +
      '<div class="xm-fork" id="xmSlide6Fork"></div>' +
      '<div class="xm-quote">Con không phải chọn ngành năm 18 tuổi rồi hối hận.<br>Con được <span class="xm-accent">THỬ</span> rồi mới <span class="xm-accent">CHỌN.</span></div>';

    setTimeout(function() {
      var fork = document.getElementById("xmSlide6Fork");
      if (!fork) return;
      detailData.slide6.forEach(function(branch, i) {
        var branchEl = document.createElement("div");
        branchEl.className = "xm-fork-branch " + (i === 0 ? "primary" : "secondary");
        branchEl.innerHTML =
          '<div class="xm-fork-icon">' + branch.icon + '</div>' +
          '<div class="xm-fork-name">' + branch.name + '</div>' +
          '<div class="xm-fork-desc">' + (i === 0
            ? 'Cho con muốn có <strong>nghề nghiệp</strong> ngay. Học Business Foundation + Chuyên sâu 1 ngành + Thực tập + Cam kết việc làm.'
            : 'Cho con có định hướng <strong>du học</strong>. Xây Portfolio quốc tế + Hồ sơ du học ngành CNTT hoặc Art.'
          ) + '</div>';
        makeClickable(branchEl, function() {
          showDetail(branch.icon + ' ' + branch.name, buildListHTML(branch.items));
        });
        fork.appendChild(branchEl);
      });
    }, 0);
    return s;
  }

  function buildSlide7() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Tại sao cần <span class="xm-accent">Bảo trợ đa ngành?</span></div>' +
      '<div class="xm-problem">' +
        '<div class="xm-problem-number">67%</div>' +
        '<div class="xm-problem-text">sinh viên Việt Nam làm trái ngành sau tốt nghiệp</div>' +
      '</div>' +
      '<div class="xm-reasons">' +
        '<div class="xm-reason">' +
          '<div class="xm-reason-num">1</div>' +
          '<div class="xm-reason-content">' +
            '<div class="xm-reason-title">Chọn ngành quá sớm</div>' +
            '<div class="xm-reason-desc">Năm 18 tuổi, hầu hết chưa biết mình thực sự muốn gì — chọn theo cảm tính hoặc theo bạn bè</div>' +
          '</div>' +
        '</div>' +
        '<div class="xm-reason">' +
          '<div class="xm-reason-num">2</div>' +
          '<div class="xm-reason-content">' +
            '<div class="xm-reason-title">Thiếu trải nghiệm thực tế</div>' +
            '<div class="xm-reason-desc">4 năm đại học chủ yếu lý thuyết — chưa từng chạm vào doanh nghiệp thực tế</div>' +
          '</div>' +
        '</div>' +
        '<div class="xm-reason">' +
          '<div class="xm-reason-num">3</div>' +
          '<div class="xm-reason-content">' +
            '<div class="xm-reason-title">Thế giới thay đổi quá nhanh</div>' +
            '<div class="xm-reason-desc">Ngành hot hôm nay có thể biến mất sau 5 năm — cần kỹ năng thích ứng đa ngành</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm-tshaped">' +
        '<div class="xm-tshaped-top">RỘNG — MKT · SALE · FINANCE · OPS</div>' +
        '<div class="xm-tshaped-stem">SÂU — 1 NGÀNH</div>' +
      '</div>' +
      '<p class="xm-footnote">Mô hình T-shaped: Sâu 1 ngành + Rộng nhiều lĩnh vực — chuẩn quốc tế cho nhân sự thế kỷ 21</p>';
    return s;
  }

  function buildSlide8() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Business Foundation<br><span class="xm-accent">Nền tảng kinh doanh toàn diện</span></div>' +
      '<p class="xm-subtitle">Dù con làm ngành gì — hiểu cách doanh nghiệp vận hành = thăng tiến nhanh hơn rất nhiều</p>' +
      '<div class="xm-bf-stack">' +
        '<div class="xm-bf-level">' +
          '<div class="xm-bf-badge" style="background:#2563EB">Lv1</div>' +
          '<div class="xm-bf-info">' +
            '<div class="xm-bf-name">MKT & Communication</div>' +
            '<div class="xm-bf-desc">Tiếp thị, truyền thông thương hiệu, viết content, chiến lược marketing</div>' +
          '</div>' +
          '<div class="xm-bf-duration">14 buổi</div>' +
        '</div>' +
        '<div class="xm-bf-level">' +
          '<div class="xm-bf-badge" style="background:#059669">Lv2</div>' +
          '<div class="xm-bf-info">' +
            '<div class="xm-bf-name">Sale & Operation</div>' +
            '<div class="xm-bf-desc">Kỹ năng bán hàng, quản lý vận hành, xây dựng quy trình</div>' +
          '</div>' +
          '<div class="xm-bf-duration">14 buổi</div>' +
        '</div>' +
        '<div class="xm-bf-level">' +
          '<div class="xm-bf-badge" style="background:#D97706">Lv3</div>' +
          '<div class="xm-bf-info">' +
            '<div class="xm-bf-name">Finance & Accounting</div>' +
            '<div class="xm-bf-desc">Tài chính doanh nghiệp, kế toán cơ bản, đọc báo cáo tài chính</div>' +
          '</div>' +
          '<div class="xm-bf-duration">14 buổi</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm-quote">Developer biết Finance sẽ xây sản phẩm tài chính tốt hơn.<br>Designer biết MKT sẽ sáng tạo truyền thông mạnh hơn.</div>';
    return s;
  }

  function buildSlide9() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Chọn 1 trong 4 <span class="xm-accent">hướng chuyên sâu</span></div>' +
      '<p class="xm-subtitle">Sau BF, con chọn 1 ngành con yêu thích — 12 tháng chuyên sâu — tất cả tích hợp AI</p>' +
      '<div class="xm-grid-4" id="xmSlide9Grid"></div>' +
      '<p class="xm-subtitle" style="margin-top:20px;margin-bottom:0">Không cần chọn ngay — sau BF con sẽ hiểu mình phù hợp hướng nào.</p>';

    setTimeout(function() {
      var grid = document.getElementById("xmSlide9Grid");
      if (!grid) return;
      var bgColors = ["#EFF6FF", "#FFF7ED", "#ECFDF5", "#F5F3FF"];
      detailData.slide9.forEach(function(domain, i) {
        var cardEl = document.createElement("div");
        cardEl.className = "xm-domain-card";
        cardEl.innerHTML =
          '<div class="xm-domain-icon" style="background:' + bgColors[i] + '">' + domain.icon + '</div>' +
          '<div class="xm-domain-name">' + domain.name + '</div>' +
          '<div class="xm-domain-sub">' + domain.items["Hướng chuyên sâu"].split("—")[0].trim() + '</div>';
        makeClickable(cardEl, function() {
          showDetail(
            domain.icon + ' Domain: ' + domain.name + ' <span style="color:' + domain.color + '">(' + domain.items["Hướng chuyên sâu"].split("—")[0].trim() + ')</span>',
            buildKVHTML(domain.items)
          );
        });
        grid.appendChild(cardEl);
      });
    }, 0);
    return s;
  }

  function buildSlide10() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Internship X<br><span class="xm-accent">Cam kết việc làm</span></div>' +
      '<div class="xm-stats" style="margin-bottom:24px">' +
        '<div class="xm-stat">' +
          '<div class="xm-stat-number">30h</div>' +
          '<div class="xm-stat-label">thực tập tại<br><strong>doanh nghiệp đối tác</strong></div>' +
        '</div>' +
      '</div>' +
      '<div class="xm-checks">' +
        '<div class="xm-check">' +
          '<div class="xm-check-icon">✓</div>' +
          '<div class="xm-check-text">Làm việc dự án thực tế tại doanh nghiệp</div>' +
        '</div>' +
        '<div class="xm-check">' +
          '<div class="xm-check-icon">✓</div>' +
          '<div class="xm-check-text">Mentor hướng dẫn 1-1 suốt quá trình</div>' +
        '</div>' +
        '<div class="xm-check">' +
          '<div class="xm-check-icon">✓</div>' +
          '<div class="xm-check-text">Portfolio chuyên nghiệp — chứng minh năng lực thật</div>' +
        '</div>' +
        '<div class="xm-check">' +
          '<div class="xm-check-icon">✓</div>' +
          '<div class="xm-check-text">Cam kết giới thiệu việc làm sau hoàn thành</div>' +
        '</div>' +
      '</div>' +
      '<div class="xm-quote">Con không chỉ có bằng cấp — con có <span class="xm-accent">SẢN PHẨM THẬT, KINH NGHIỆM THẬT,</span> và <span class="xm-accent">CƠ HỘI VIỆC LÀM THẬT.</span></div>';
    return s;
  }

  // ===== NEW: Career Path + Salary =====
  function buildSlideCareer() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Lộ trình thăng tiến & <span class="xm-accent">Thu nhập</span></div>' +
      '<p class="xm-subtitle">Con không chỉ dừng ở vị trí chuyên viên — mà có thể trở thành lãnh đạo công nghệ</p>' +
      '<div class="xm-career-ladder" id="xmCareerLadder"></div>' +
      '<div class="xm-quote">Nguồn: <span class="xm-accent">ITviec Báo cáo Lương IT 2025-2026</span> — dữ liệu thực tế từ 1,200+ doanh nghiệp IT tại Việt Nam</div>';

    setTimeout(function() {
      var ladder = document.getElementById("xmCareerLadder");
      if (!ladder) return;
      var levels = [
        { title: "Intern / Fresher", years: "0-1 năm", salary: "7 — 15 triệu/tháng", color: "#94A3B8", height: "32px" },
        { title: "Junior Developer", years: "1-3 năm", salary: "15 — 25 triệu/tháng", color: "#2563EB", height: "36px" },
        { title: "Senior Developer", years: "3-5 năm", salary: "30 — 50 triệu/tháng", color: "#059669", height: "40px" },
        { title: "Tech Lead", years: "5-7 năm", salary: "50 — 70 triệu/tháng", color: "#D97706", height: "44px" },
        { title: "Engineering Manager", years: "7-10 năm", salary: "60 — 80 triệu/tháng", color: "#9333EA", height: "48px" },
        { title: "CTO / VP Engineering", years: "8+ năm", salary: "80 — 120 triệu/tháng", color: "#E31F26", height: "52px" }
      ];
      levels.forEach(function(lv) {
        var row = document.createElement("div");
        row.className = "xm-career-row";
        row.innerHTML =
          '<div class="xm-career-bar" style="background:' + lv.color + ';height:' + lv.height + '">' +
            '<span class="xm-career-title">' + lv.title + '</span>' +
          '</div>' +
          '<div class="xm-career-info">' +
            '<span class="xm-career-years">' + lv.years + '</span>' +
            '<span class="xm-career-salary" style="color:' + lv.color + '">' + lv.salary + '</span>' +
          '</div>';
        ladder.appendChild(row);
      });
    }, 0);
    return s;
  }

  // ===== NEW: Case Studies =====
  function buildSlideCaseStudy() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Học viên MindX <span class="xm-accent">đã thành công</span></div>' +
      '<p class="xm-subtitle">Từ lớp học code đầu tiên đến Google, Microsoft, và hơn thế nữa</p>' +
      '<div class="xm-case-studies" id="xmCaseStudies"></div>' +
      '<div class="xm-stats" style="margin-top:20px">' +
        '<div class="xm-stat"><div class="xm-stat-number">80,000+</div><div class="xm-stat-label">học viên<br>tốt nghiệp</div></div>' +
        '<div class="xm-stat"><div class="xm-stat-number">16.5%</div><div class="xm-stat-label">làm việc tại<br>12 quốc gia</div></div>' +
        '<div class="xm-stat"><div class="xm-stat-number">7</div><div class="xm-stat-label">giải thưởng<br>quốc gia 2025</div></div>' +
      '</div>';

    setTimeout(function() {
      var grid = document.getElementById("xmCaseStudies");
      if (!grid) return;
      var cases = [
        { icon: "🏆", name: "Nhật Quang", highlight: "C4T → Rice #17 → Microsoft", desc: "Học bổng 6.5 tỷ Rice University → Intern Meta, Nvidia → Kỹ sư Microsoft", color: "#2563EB",
          detail: [
            "Cựu học viên Code For Teen (C4T) tại MindX",
            "Học bổng toàn phần 284,000 USD (~6.5 tỷ) tại Rice University #17 Mỹ",
            "GPA 3.86/4, 3 năm trợ giảng",
            "Thực tập tại Facebook/Meta — phát triển tính năng Reels",
            "Thực tập tại Nvidia — phần mềm xe tự lái",
            "Trúng tuyển Microsoft — bộ phận Cloud Data & AI (7/2024)",
            "Gửi 600 đơn, được PV tại 37 công ty — tinh thần bền bỉ",
            "Sáng lập Pathwise Mentorship — giúp 20+ du học sinh VN tìm việc tại Mỹ"
          ]},
        { icon: "💻", name: "Bùi Quang Huy", highlight: "C4T → Google Search, Silicon Valley", desc: "Học bổng toàn phần Miami University → 2x Google Intern → Google Search", color: "#059669",
          detail: [
            "Học viên Code For Teen (C4T) 2017, sau đó trở thành giảng viên MindX",
            "Học bổng toàn phần 4 năm tại Miami University, Mỹ",
            "3 lần đạt President's List (SV xuất sắc)",
            "2 lần thực tập tại Google (Cloud + Search)",
            "Gia nhập Google Search Experience tại San Francisco từ 2/2023",
            "Dạy lập trình tại MindX giúp củng cố nền tảng cho phỏng vấn kỹ thuật"
          ]},
        { icon: "🌟", name: "Anh Phong", highlight: "14 tuổi — Quán quân Coding", desc: "Lớp 8, vượt 300 SV đại học tại Web Coding Challenge", color: "#D97706",
          detail: [
            "Học sinh lớp 8 (14 tuổi) khi tham gia Web Coding Challenge",
            "Tự học Scratch từ lớp 5, Python/React từ lớp 7 trong dịch COVID",
            "Quán quân Web Coding Challenge — vượt gần 300 thí sinh (đa phần SV đại học)",
            "Sản phẩm: Covid-19 Global Dashboard — website cập nhật dịch bệnh",
            "\"Học sớm thì em có định hướng tốt hơn, thay vì chỉ vùi đầu vào học trên trường\""
          ]},
        { icon: "🌏", name: "Tuệ Nhi", highlight: "C4T → VinUni → Sheffield → Singapore", desc: "HCV quốc tế IYSA, PM quản lý platform 5 tỷ giao dịch", color: "#9333EA",
          detail: [
            "Bắt đầu từ Code For Teen tại MindX",
            "Học bổng 100% VinUniversity ngành CS",
            "Thạc sĩ tại University of Sheffield (Russell Group, Anh Quốc)",
            "HCV Quốc tế + Giải Dự án Xuất sắc nhất tại IYSA",
            "Quán quân KPMG Ideation Challenge",
            "Thực tập tại KPMG Big4 — Tư vấn Đổi mới Số",
            "Hiện là PM tại Startup Singapore — quản lý platform 5+ tỷ giao dịch"
          ]}
      ];
      cases.forEach(function(c) {
        var card = document.createElement("div");
        card.className = "xm-case-card";
        card.innerHTML =
          '<div class="xm-case-icon">' + c.icon + '</div>' +
          '<div class="xm-case-content">' +
            '<div class="xm-case-name">' + c.name + ' <span style="color:' + c.color + ';font-weight:600">· ' + c.highlight + '</span></div>' +
            '<div class="xm-case-desc">' + c.desc + '</div>' +
          '</div>';
        makeClickable(card, function() {
          showDetail(c.icon + ' ' + c.name + ' — ' + c.highlight, buildListHTML(c.detail));
        });
        grid.appendChild(card);
      });
    }, 0);
    return s;
  }

  // ===== NEW: Partner Companies =====
  function buildSlidePartners() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Mạng lưới <span class="xm-accent">200+ doanh nghiệp</span> đối tác</div>' +
      '<p class="xm-subtitle">MindX kết nối với các doanh nghiệp công nghệ hàng đầu — tạo cơ hội thực tập & việc làm cho học viên</p>' +
      '<div class="xm-partners" id="xmPartners"></div>' +
      '<div class="xm-quote">MindX là trường học công nghệ có <span class="xm-accent">quy mô lớn nhất Đông Nam Á</span> với 40+ cơ sở trên toàn quốc</div>';

    setTimeout(function() {
      var grid = document.getElementById("xmPartners");
      if (!grid) return;
      var groups = [
        { label: "🌐 Big Tech & Quốc tế", companies: ["Google", "Amazon", "Microsoft", "Shopee"], color: "#2563EB" },
        { label: "🇸🇬 Singapore", companies: ["Chope", "Mogul", "Medicia", "Medcheck"], color: "#059669" },
        { label: "🇻🇳 Việt Nam", companies: ["FPT Software", "VNG", "Viettel", "Tiki", "VNPay", "MoMo"], color: "#D97706" },
        { label: "🎓 Đại học & Nghiên cứu", companies: ["Rice University", "NUS", "Đối tác giáo dục quốc tế"], color: "#9333EA" }
      ];
      groups.forEach(function(g) {
        var section = document.createElement("div");
        section.className = "xm-partner-group";
        var labelHtml = '<div class="xm-partner-label" style="color:' + g.color + '">' + g.label + '</div>';
        var chipsHtml = '<div class="xm-partner-chips">';
        g.companies.forEach(function(c) {
          chipsHtml += '<span class="xm-partner-chip" style="border-color:' + g.color + ';color:' + g.color + '">' + c + '</span>';
        });
        chipsHtml += '</div>';
        section.innerHTML = labelHtml + chipsHtml;
        grid.appendChild(section);
      });
    }, 0);
    return s;
  }

  function buildSlide11() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Tóm lại, con nhận được gì?</div>' +
      '<div class="xm-timeline" id="xmSlide11TL"></div>' +
      '<div class="xm-result-grid" id="xmSlide11Grid"></div>';

    setTimeout(function() {
      var tl = document.getElementById("xmSlide11TL");
      var grid = document.getElementById("xmSlide11Grid");
      if (!tl) return;

      var tlLabels = ["5 năm nền tảng", "Business Foundation", "Chuyên sâu 12T", "Internship X"];
      var tlDescs = ["Scratch → CS<br>Công nghệ vững chắc", "MKT + Sale + Finance<br>Kinh doanh toàn diện", "1 ngành + AI<br>Sâu và ứng dụng", "Thực tập + Việc làm<br>Cam kết đầu ra"];

      detailData.slide11.forEach(function(item, i) {
        var tlItem = document.createElement("div");
        tlItem.className = "xm-tl-item xm-clickable";
        tlItem.style.cursor = "pointer";
        tlItem.innerHTML =
          '<div class="xm-tl-dot"></div>' +
          '<div class="xm-tl-label">' + tlLabels[i] + '</div>' +
          '<div class="xm-tl-desc">' + tlDescs[i] + '</div>' +
          '<div class="xm-click-hint">Nhấn để xem</div>';
        tlItem.addEventListener("click", function(e) {
          e.stopPropagation();
          showDetail(item.name, buildListHTML(item.items));
        });
        tl.appendChild(tlItem);
      });

      // Result grid (static)
      var results = [
        { emoji: "🏗️", label: "Nền tảng vững", desc: "Công nghệ + Kinh doanh" },
        { emoji: "🔬", label: "Được thử", desc: "3 mảng trước khi chọn" },
        { emoji: "💼", label: "Có nghề", desc: "Portfolio + Thực tập + Job" },
        { emoji: "🚀", label: "Sẵn sàng", desc: "Cho ĐH, nghề nghiệp, AI" }
      ];
      results.forEach(function(r) {
        var item = document.createElement("div");
        item.className = "xm-result-item";
        item.innerHTML =
          '<div class="xm-result-emoji">' + r.emoji + '</div>' +
          '<div class="xm-result-label">' + r.label + '</div>' +
          '<div class="xm-result-desc">' + r.desc + '</div>';
        grid.appendChild(item);
      });
    }, 0);
    return s;
  }

  function buildSlide12() {
    var s = el("div", "xm-slide");
    s.innerHTML =
      '<div class="xm-title-large">Hành trình bắt đầu từ hôm nay</div>' +
      '<div class="xm-cta-box xm-cta-enroll">' +
        '<div class="xm-cta-title">Mỗi ngày chờ đợi là một ngày<br>con đi sau các bạn cùng trang lứa</div>' +
        '<div class="xm-cta-checks">' +
          '<div class="xm-cta-check">✔ <strong>Tư duy</strong> — Giải quyết vấn đề &amp; tư duy logic từ sớm</div>' +
          '<div class="xm-cta-check">✔ <strong>Kỹ năng</strong> — Lập trình, xây dựng sản phẩm thực tế</div>' +
          '<div class="xm-cta-check">✔ <strong>Kiến thức</strong> — Nền tảng công nghệ vững chắc cho tương lai</div>' +
        '</div>' +
        '<div class="xm-cta-btn">ĐĂNG KÝ NGAY — Bắt đầu hành trình</div>' +
      '</div>' +
      '<p class="xm-subtitle" style="margin-top:24px;margin-bottom:0;font-size:0.95rem;color:#999">Anh/chị đã thấy cách MindX dạy — hãy để con bước vào lộ trình sớm nhất có thể.</p>';
    return s;
  }

  // Helper
  function el(tag, cls) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }

  // Expose
  window.xmemberActivate = activate;
  window.xmemberDeactivate = deactivate;
})();
