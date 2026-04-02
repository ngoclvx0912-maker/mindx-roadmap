/* X-Art v1 — Full-screen Sales Flow for Art & Design Roadmap (Bảo trợ việc làm) */
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
      { icon: "🧠", name: "Tư duy sáng tạo", items: [
        "Trẻ 4–12 tuổi là giai đoạn vàng phát triển trí tưởng tượng & cảm nhận thẩm mỹ",
        "Visual Communication = truyền đạt ý tưởng bằng hình ảnh — nền tảng cho MỌI ngành sáng tạo",
        "Trẻ học thiết kế sớm phát triển tư duy hệ thống thị giác & biểu đạt cảm xúc",
        "Tư duy thiết kế = tư duy giải quyết vấn đề: Quan sát → Phân tích → Sáng tạo → Trình bày"
      ]},
      { icon: "🎨", name: "Cảm nhận thẩm mỹ", items: [
        "Biết phân biệt đẹp — chưa đẹp — phù hợp — chưa phù hợp từ sớm",
        "Cảm nhận màu sắc, bố cục, tỉ lệ — không phải ai sinh ra cũng có, cần rèn luyện",
        "Năng lực thẩm mỹ ảnh hưởng trực tiếp đến trình bày bài tập, CV, portfolio tương lai",
        "Trẻ có thẩm mỹ tốt sẽ tự tin hơn trong giao tiếp trực quan ở mọi lĩnh vực"
      ]},
      { icon: "💡", name: "Biểu đạt & Truyền thông", items: [
        "Kỹ năng Visual Communication: diễn đạt ý tưởng bằng hình ảnh thay vì chỉ lời nói",
        "Thời đại AI: người biết \"ra đề\" cho AI bằng ngôn ngữ trực quan sẽ dẫn đầu",
        "Từ vẽ tranh → thiết kế poster → motion graphic → UX/UI: một hành trình liền mạch",
        "Con không chỉ tiêu thụ hình ảnh — con TẠO RA hình ảnh có giá trị"
      ]},
      { icon: "🎯", name: "Kỷ luật & Portfolio", items: [
        "Mỗi đồ án hoàn thành = một tác phẩm cụ thể con có thể trưng bày",
        "Portfolio cá nhân được xây dựng từ năm đầu — lợi thế cực lớn khi xin việc/du học",
        "Kỷ luật sáng tạo: brief → research → sketch → refine → present — quy trình chuẩn ngành",
        "Con tự tin khi biết mình có phong cách riêng và sản phẩm thật"
      ]}
    ],
    slide4: [
      { year: "Năm 0", name: "Little Artist", color: "#E31F26", keywords: ["Vẽ tay", "Cảm xúc", "Tranh canvas"], items: {
        "Tư duy": "Khơi gợi cảm xúc nghệ thuật, phát triển trí tưởng tượng",
        "Kỹ năng": "Vẽ truyền thống, cắt dán, tạo hình — phát triển vận động tinh",
        "Kiến thức": "Màu cơ bản, hình khối, chất liệu mỹ thuật truyền thống",
        "Sản phẩm": "Tranh canvas, tranh sáp, sản phẩm thủ công 3D",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 1", name: "Digital Art Foundations", color: "#2563EB", keywords: ["Digital Art", "iPad", "Sticker"], items: {
        "Tư duy": "Tư duy thị giác số — chuyển từ giấy sang digital",
        "Kỹ năng": "Vẽ digital bằng iPad/bảng vẽ, tạo sticker & sketchnote",
        "Kiến thức": "Digital Art cơ bản, Sketchbook, phong cách vẽ quốc tế",
        "Sản phẩm": "Digital Sketchbook, Sticker Pack, Bộ tranh 'My World'",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 2", name: "Visual Thinking", color: "#059669", keywords: ["Bố cục", "Illustration", "Digital Art"], items: {
        "Tư duy": "Tư duy mỹ thuật số có hệ thống — vẽ có chủ đích",
        "Kỹ năng": "Bố cục, phong cách hóa, tạo series tranh, phản biện sản phẩm",
        "Kiến thức": "Medibang, Canva, foreground/background, stylization",
        "Sản phẩm": "Illustration Series + Bộ nhân vật truyện + Sticker",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 3", name: "Game Art", color: "#D97706", keywords: ["Nhân vật", "Bối cảnh", "Concept Art"], items: {
        "Tư duy": "Tư duy worldbuilding — kể chuyện bằng hệ thống hình ảnh",
        "Kỹ năng": "Thiết kế nhân vật, bối cảnh game, visual pitch chuyên nghiệp",
        "Kiến thức": "Concept Art, Character Design, Environment Art, Pipeline",
        "Sản phẩm": "Game Art Construction Mini (PDF 8–12 trang)",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 4", name: "Character & Mascot", color: "#8B5CF6", keywords: ["Illustrator", "Brand IP", "Mascot"], items: {
        "Tư duy": "Tư duy thương hiệu — xây dựng IP cá nhân",
        "Kỹ năng": "Thành thạo Vector với Adobe Illustrator, tạo mascot độc đáo",
        "Kiến thức": "Brand identity, typography, style guide cơ bản",
        "Sản phẩm": "Mascot Design + Mini Style Guide",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 5", name: "Visual Communication", color: "#059669", keywords: ["Photoshop", "Poster", "Portfolio"], items: {
        "Tư duy": "Tư duy truyền thông — thiết kế để giao tiếp và thuyết phục",
        "Kỹ năng": "Adobe Photoshop & Illustrator, dựng chiến dịch 360°",
        "Kiến thức": "Layout, Poster, Logo, Branding chuẩn nghề chuyên nghiệp",
        "Sản phẩm": "Chiến dịch truyền thông + Portfolio chuẩn ngành",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "Năm 6", name: "Motion & Video", color: "#E31F26", keywords: ["Motion", "After Effects", "Video"], items: {
        "Tư duy": "Tư duy storytelling — kể chuyện bằng chuyển động & thời gian",
        "Kỹ năng": "After Effects, Premiere Pro, Motion Graphics, Stop Motion",
        "Kiến thức": "Video editing, animation principles, sound design",
        "Sản phẩm": "Video Motion Graphic (15–30s)",
        "Thời lượng": "3 HP × 14 buổi"
      }},
      { year: "18+", name: "Interaction Design", color: "#4A1D96", isPost18: true, keywords: ["Figma", "UX/UI", "Product"], items: {
        "Tư duy": "Tư duy sản phẩm số — UX/UI Design & Product Thinking",
        "Kỹ năng": "Figma, UX Research, Wireframe, Prototype, Agile/Scrum",
        "Kiến thức": "4 học kì: UI Design → UX Research → Product Thinking → Career Kickstart",
        "Giá trị": "Sẵn sàng cho vị trí UI/UX Designer Intern — Fresher",
        "Thời lượng": "4 học kì chuyên sâu"
      }},
      { year: "18+", name: "Internship X", color: "#111827", isPost18: true, keywords: ["Thực tập", "Portfolio", "Việc làm"], items: {
        "Tư duy": "Tư duy nghề nghiệp — làm việc trong môi trường thực tế",
        "Kỹ năng": "Thực tập tại doanh nghiệp + Mentor hướng dẫn 1-1",
        "Kiến thức": "Quy trình làm việc thực tế, kỹ năng mềm, networking",
        "Giá trị": "Portfolio chuyên nghiệp + Cam kết giới thiệu việc làm",
        "Thời lượng": "30h thực tập tại doanh nghiệp đối tác"
      }}
    ],
    slide5: [
      { emoji: "🧠", name: "Tư duy", items: [
        "Năm 0–1: Tư duy thẩm mỹ, trí tưởng tượng, cảm nhận màu sắc",
        "Năm 2: Tư duy có chủ đích — vẽ có mục tiêu, hệ thống",
        "Năm 3: Tư duy worldbuilding — kể chuyện bằng hệ thống hình ảnh",
        "Năm 4: Tư duy thương hiệu — xây dựng IP cá nhân",
        "Năm 5–6: Tư duy truyền thông & storytelling",
        "Năm 7: Tư duy sản phẩm số — UX/UI Design"
      ]},
      { emoji: "⚡", name: "Kỹ năng", items: [
        "Năm 0–1: Vẽ tay + Digital Art Foundations (iPad, Sketchbook)",
        "Năm 2: Visual Thinking — Medibang + Bố cục + Stylization + Phản biện sản phẩm",
        "Năm 3: Concept Art + Character Design + Environment Art",
        "Năm 4: Adobe Illustrator + Vector + Mascot Design",
        "Năm 5: Visual Communication — Photoshop + Illustrator + Branding + Chiến dịch truyền thông",
        "Năm 6: Motion & Video — After Effects + Premiere + Motion Graphics",
        "Năm 7: Figma + UX Research + Product Design"
      ]},
      { emoji: "📚", name: "Kiến thức", items: [
        "Năm 0: Chất liệu mỹ thuật truyền thống, hình khối, màu sắc",
        "Năm 1: Digital Art Foundations — công cụ số, phong cách quốc tế",
        "Năm 2: Bố cục, phối cảnh, phong cách hóa, series tranh",
        "Năm 3: Game Art pipeline, worldbuilding, character sheet",
        "Năm 4: Brand identity, typography, style guide, vector",
        "Năm 5: Visual Communication — layout, poster, logo, branding chuẩn nghề",
        "Năm 6: Motion & Video — animation, video editing, motion graphic",
        "Năm 7: Figma, UX/UI, Agile/Scrum, Product Thinking"
      ]}
    ],
    slide6: [
      { icon: "🏢", name: "Bảo trợ việc làm", items: [
        "Năm 7: Interaction Design — UX/UI — Product Design",
        "4 học kì chuyên sâu: UI Design → UX Research → Product Thinking → Career Kickstart",
        "Tất cả đều sử dụng Figma — công cụ #1 ngành thiết kế sản phẩm",
        "Internship X: Thực tập tại doanh nghiệp + Cam kết việc làm",
        "Vị trí: Graphic Designer, Motion Designer, UI/UX Designer, Product Designer"
      ]},
      { icon: "✈️", name: "Bảo trợ du học", items: [
        "X-Global Art Seed — Xây dựng portfolio nghệ thuật quốc tế",
        "Hồ sơ du học: CV, Portfolio, Motivation Letter chuyên nghiệp",
        "Thực tập chuyên môn tại studio/doanh nghiệp thiết kế",
        "Hỗ trợ phỏng vấn & chọn trường phù hợp năng lực",
        "Các ngành đích: Visual Communication, Animation, Game Art, UI/UX tại các trường quốc tế"
      ]}
    ],
    slideSpecial: [
      { icon: "🤖", name: "AI4Learn", subtitle: "Sử dụng AI để học tập hiệu quả hơn", color: "#111827", duration: "1 level × 6 buổi (12h) — theo độ tuổi", timing: "Dưới lớp 7 → Level 1 | Trên lớp 7 → Level 2", items: [
        "Lộ trình AI dành riêng cho học sinh K12 — khóa học đệm chiến lược",
        "Giúp con học tập hiệu quả hơn trên trường phổ thông thông qua AI",
        "Học sinh học 1 level phù hợp độ tuổi (dưới lớp 7 → Lv1, trên lớp 7 → Lv2)",
        "Trong lộ trình Art: trước Character & Mascot Design (12+) → Level 1, sau → Level 2",
        "Hình thành năng lực sử dụng AI đúng cách và có trách nhiệm",
        "Xây dựng công cụ học tập cá nhân hóa bằng AI cho mỗi học sinh",
        "Không bán lẻ — luôn nằm trong gói lộ trình 24 tháng trở lên"
      ], levels: [
        { name: "Level 1", desc: "Sáng tạo nội dung với AI (6 buổi) — Dành cho HV dưới lớp 7 (Little Artist → Game Art). Tạo hình ảnh bằng Nano Banana, slide bằng Gamma, video bằng Flow. Học viết prompt hiệu quả. Sản phẩm: Bộ hình + Slide + Video.", icon: "🌟" },
        { name: "Level 2", desc: "Chatbot học tập (6 buổi) — Dành cho HV trên lớp 7 (Character & Mascot Design trở lên). Xây chatbot ôn bài với Gemini & NotebookLM. Tạo Study Pack cá nhân: quiz, flashcard, chatbot Q&A. Sản phẩm: Bộ công cụ ôn tập.", icon: "🚀" }
      ]},
      { icon: "🎨", name: "Cregen I", subtitle: "Họa sĩ minh họa & Creative Workshop", color: "#8B5CF6", duration: "14 buổi + 4 buổi", timing: "Kết nối cuối Visual Thinking, Game Art", items: [
        "Creative Thinking Workshop (4 buổi): Tư duy sáng tạo có cấu trúc",
        "Tạo ý tưởng không chờ cảm hứng — phát triển 1 ý tưởng thành nhiều hướng",
        "Khóa học Họa sĩ minh họa — đồ án lớn",
        "Lựa chọn đề tài tự do, GV định hướng nghề",
        "Hoàn thiện truyện tranh / truyện minh họa hoàn chỉnh",
        "Sản xuất ấn phẩm tuyên truyền (poster / booklet)",
        "Triển lãm sản phẩm và gọi vốn trước hội đồng",
        "Sơ duyệt tại lớp có phụ huynh tham gia đánh giá"
      ]},
      { icon: "🏆", name: "Cregen II", subtitle: "Nhân vật thương hiệu chuyên sâu", color: "#D97706", duration: "14 buổi", timing: "Kết nối cuối Character & Mascot Design", items: [
        "Chọn 1 trong 2 đề tài chuyên sâu:",
        "① Thiết kế Nhân vật Game — concept, biểu cảm, turnaround sheet",
        "② Thiết kế Mascot quảng cáo — brand identity ứng dụng thực tế",
        "GV định hướng nghề & phát triển phong cách cá nhân (signature style)",
        "Ôn tập kỹ thuật, hoàn thiện nhân vật theo quy trình làm nghề",
        "Chuẩn bị triển lãm và giới thiệu dự án",
        "Sản phẩm: Nhân vật + ấn phẩm tuyên truyền hoàn chỉnh",
        "Định hướng nghề: Game Art & Branding"
      ]},
      { icon: "🎬", name: "Intern 1", subtitle: "Creative Studio Intern — Thực tập sáng tạo", color: "#2563EB", duration: "Năm 5", timing: "Kết nối cuối Visual Communication", items: [
        "Giá trị nổi bật: Hiểu cách một đội sáng tạo cùng làm ra sản phẩm hoàn chỉnh",
        "Hiểu studio sáng tạo hoạt động thế nào — không chỉ vẽ",
        "Làm việc nhóm, phân vai, giao tiếp & phản biện",
        "4 vai trò thực tế: Project Coordinator · Visual Designer · Content Builder · Reviewer/QA",
        "Học viên luân phiên vai trò — hiểu toàn bộ pipeline sáng tạo",
        "Sản phẩm: Bộ poster cho sự kiện + Mini brand cho CLB giả định"
      ]},
      { icon: "📋", name: "Intern 2", subtitle: "Creative PM Intern — Quản lý dự án sáng tạo", color: "#E31F26", duration: "Năm 6", timing: "Kết nối cuối Motion & Video", items: [
        "Chương trình thực tập nâng cao — học cách dẫn dắt dự án",
        "Không phải ai cũng làm designer, nhưng ai cũng cần hiểu quản lý dự án",
        "Lập kế hoạch dự án, chia việc, theo dõi tiến độ, tổng hợp kết quả",
        "4 vai trò nâng cao: Creative PM · Visual Designer · Content Builder · Reviewer/QA",
        "Nâng cao: Từ thực thi → Quản lý → Dẫn dắt dự án",
        "Sản phẩm: Project Plan + Project Report + Reflection cá nhân"
      ]}
    ],
    slideNam7: {
      title: "Năm 7 — Interaction Design (UX/UI)",
      semesters: [
        { name: "HK1: UI Design Foundation", color: "#2563EB", items: [
          "Tổng quan UI Design & vai trò trong sản phẩm số",
          "Làm chủ Figma từ cơ bản đến nâng cao",
          "Layout & hierarchy, màu sắc, typography, icon",
          "Thiết kế UI từ wireframe cho website & mobile app",
          "Sản phẩm: 5–6 UI screen hoặc 1 landing page"
        ]},
        { name: "HK2: UX Research", color: "#059669", items: [
          "Tư duy lấy người dùng làm trung tâm",
          "Phỏng vấn, khảo sát, phân tích dữ liệu nghiên cứu",
          "Persona, Customer Journey Map",
          "Wireframe & prototype kiểm chứng giải pháp",
          "Sản phẩm: UX Research hoàn chỉnh theo nhóm"
        ]},
        { name: "HK3: Product Thinking", color: "#D97706", items: [
          "Tư duy sản phẩm: Người dùng + Kinh doanh + Công nghệ",
          "Information Architecture, User Flow, Card Sorting",
          "Low-fi → Hi-fi wireframe → UI theo iOS/Android guideline",
          "Ứng dụng AI hỗ trợ trong quy trình thiết kế",
          "Sản phẩm: Case Study sản phẩm mô phỏng (15–20 screens)"
        ]},
        { name: "HK4: Career Kickstart", color: "#E31F26", items: [
          "Làm việc như Product Designer thực thụ",
          "Agile/Scrum, Design Token, Handoff cho Dev",
          "Real brief từ doanh nghiệp thực tế",
          "Hoàn thiện CV & Portfolio chuyên nghiệp",
          "Sản phẩm: Dự án thực tế + Case Study + CV/Portfolio"
        ]}
      ]
    },
    slide11: [
      { name: "7 năm nền tảng", items: [
        "Little Artist (4+) → Digital Art Foundations (7+) → Visual Thinking (9+) → Game Art (11+)",
        "→ Character & Mascot (12+) → Visual Communication (13+) → Motion & Video (14+)",
        "Mỗi năm 3 học phần × 14 buổi, tổng ~294 buổi",
        "Từ vẽ tay đến thiết kế chuyên nghiệp",
        "Kèm chương trình đặc biệt: Cregen I, II + Intern 1, 2"
      ]},
      { name: "Năm 7: UX/UI", items: [
        "4 học kì chuyên sâu: UI → UX → Product → Career",
        "Công cụ: Figma, FigJam, Figma Slides",
        "Phương pháp: Agile/Scrum, Design Thinking",
        "Sẵn sàng cho vị trí UI/UX Designer Intern — Fresher"
      ]},
      { name: "Internship X", items: [
        "Thực tập tại doanh nghiệp đối tác MindX",
        "Mentor là designer chuyên nghiệp hướng dẫn trực tiếp",
        "Portfolio chuyên nghiệp — chứng minh năng lực thật",
        "Cam kết giới thiệu việc làm sau hoàn thành"
      ]},
      { name: "Vị trí nghề nghiệp", items: [
        "Graphic Designer — Thiết kế đồ họa đa nền tảng",
        "Motion Designer — Đồ họa chuyển động & video",
        "UI/UX Designer — Thiết kế trải nghiệm người dùng",
        "Product Designer — Thiết kế sản phẩm số tổng thể"
      ]}
    ]
  };

  function buildPresentation() {
    if (container) return;
    container = document.createElement("div");
    container.id = "xaPresentation";
    container.className = "xa-presentation";

    var exitBtn = document.createElement("button");
    exitBtn.className = "xa-exit-btn";
    exitBtn.innerHTML = "✕ Thoát";
    exitBtn.addEventListener("click", deactivate);

    var slidesWrap = document.createElement("div");
    slidesWrap.className = "xa-slides";
    slidesWrap.id = "xaSlides";

    var slides = [
      buildSlide1(),
      buildSlide2(),
      buildSlideMarketB(),
      buildSlideMarketC(),
      buildSlide3(),
      buildSlide4(),
      buildSlideSpecial(),
      buildSlide5(),
      buildSlide6(),
      buildSlide7(),
      buildSlideNam7(),
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

    var nav = document.createElement("div");
    nav.className = "xa-nav";
    nav.innerHTML =
      '<button class="xa-nav-btn xa-nav-prev" id="xaPrev" disabled>← Quay lại</button>' +
      '<div class="xa-nav-dots" id="xaDots"></div>' +
      '<button class="xa-nav-btn xa-nav-next" id="xaNext">Tiếp theo →</button>';

    detailOverlay = document.createElement("div");
    detailOverlay.className = "xa-detail-overlay";
    detailOverlay.id = "xaDetailOverlay";
    detailOverlay.addEventListener("click", function(e) {
      if (e.target === detailOverlay) closeDetail();
    });

    container.appendChild(exitBtn);
    container.appendChild(slidesWrap);
    container.appendChild(nav);
    container.appendChild(detailOverlay);
    document.body.appendChild(container);

    var dotsWrap = document.getElementById("xaDots");
    for (var i = 0; i < totalSlides; i++) {
      var dot = document.createElement("button");
      dot.className = "xa-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("data-index", i);
      dot.addEventListener("click", function () {
        goToSlide(parseInt(this.getAttribute("data-index")));
      });
      dotsWrap.appendChild(dot);
    }

    document.getElementById("xaPrev").addEventListener("click", prevSlide);
    document.getElementById("xaNext").addEventListener("click", nextSlide);
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
      '<div class="xa-detail-panel">' +
        '<button class="xa-detail-close">✕</button>' +
        '<div class="xa-detail-title">' + title + '</div>' +
        '<div class="xa-detail-body">' + contentHTML + '</div>' +
      '</div>';
    detailOverlay.querySelector(".xa-detail-close").addEventListener("click", closeDetail);
    detailOverlay.classList.add("open");
  }

  function closeDetail() {
    if (detailOverlay) detailOverlay.classList.remove("open");
  }

  function buildListHTML(items) {
    var html = '<ul class="xa-detail-list">';
    for (var i = 0; i < items.length; i++) {
      html += '<li>' + items[i] + '</li>';
    }
    html += '</ul>';
    return html;
  }

  function buildKVHTML(obj) {
    var html = '<div class="xa-detail-kv">';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      html += '<div class="xa-detail-kv-row">' +
        '<span class="xa-detail-kv-key">' + keys[i] + '</span>' +
        '<span class="xa-detail-kv-val">' + obj[keys[i]].replace(/\n/g, '<br>') + '</span>' +
      '</div>';
    }
    html += '</div>';
    return html;
  }

  function makeClickable(el, onClick) {
    el.style.cursor = "pointer";
    el.classList.add("xa-clickable");
    el.addEventListener("click", function(e) {
      e.stopPropagation();
      onClick();
    });
    var hint = document.createElement("div");
    hint.className = "xa-click-hint";
    hint.textContent = "Nhấn để xem chi tiết";
    el.appendChild(hint);
  }

  function goToSlide(index) {
    if (index < 0 || index >= totalSlides || index === currentSlide) return;
    closeDetail();
    var slides = document.querySelectorAll("#xaSlides .xa-slide");
    var dots = document.querySelectorAll("#xaDots .xa-dot");

    slides.forEach(function(sl) { sl.classList.remove("active", "exit-left"); });
    currentSlide = index;
    slides[currentSlide].classList.add("active");
    slides[currentSlide].scrollTop = 0;

    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === currentSlide);
    });

    document.getElementById("xaPrev").disabled = currentSlide === 0;
    var nextBtn = document.getElementById("xaNext");
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
    var slides = document.querySelectorAll("#xaSlides .xa-slide");
    slides.forEach(function (s, i) {
      s.classList.remove("active", "exit-left");
      if (i === 0) s.classList.add("active");
    });
    var dots = document.querySelectorAll("#xaDots .xa-dot");
    dots.forEach(function (d, i) { d.classList.toggle("active", i === 0); });
    document.getElementById("xaPrev").disabled = true;
    document.getElementById("xaNext").innerHTML = "Tiếp theo →";
    container.classList.add("active");
  }

  function deactivate() {
    isActive = false;
    closeDetail();
    if (container) {
      container.classList.remove("active");
      var slides = container.querySelectorAll(".xa-slide.active");
      slides.forEach(function(s) { s.classList.remove("active"); });
    }
  }

  // ===== SLIDE BUILDERS =====

  function buildSlide1() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<img src="./mindx-logo.png" alt="MindX" class="xa-logo-large">' +
      '<div class="xa-title-hero">Lộ trình <span class="xa-accent">Art & Design</span><br>Bảo trợ việc làm</div>' +
      '<p class="xa-tagline">Visual Communication — Kỹ năng con người trong kỷ nguyên AI</p>';
    return s;
  }

  function buildSlide2() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">AI đang thay đổi <span class="xa-accent">mọi thứ</span></div>' +
      '<div class="xa-stats" id="xaSlide2Stats" style="cursor:pointer">' +
        '<div class="xa-stat">' +
          '<div class="xa-stat-number">92 triệu</div>' +
          '<div class="xa-stat-label">việc làm bị thay thế<br>đến 2030</div>' +
          '<div style="font-size:0.55rem;color:var(--text-muted);margin-top:4px">WEF 2025</div>' +
        '</div>' +
        '<div class="xa-stat">' +
          '<div class="xa-stat-number">74.5%</div>' +
          '<div class="xa-stat-label">công việc lập trình<br>có thể bị AI làm</div>' +
          '<div style="font-size:0.55rem;color:var(--text-muted);margin-top:4px">Anthropic 2026</div>' +
        '</div>' +
        '<div class="xa-stat">' +
          '<div class="xa-stat-number">9.03%</div>' +
          '<div class="xa-stat-label">thất nghiệp thanh niên VN<br>cao nhất 14 năm</div>' +
        '</div>' +
      '</div>' +
      '<div class="xa-quote">"Bạn sẽ không mất việc vào tay AI, nhưng bạn sẽ mất việc vào tay người <span class="xa-accent">BIẾT SỬ DỤNG AI.</span>"</div>' +
      '<div class="xa-footnote">— Jensen Huang, CEO Nvidia (2025)</div>';

    setTimeout(function() {
      var statsEl = document.getElementById("xaSlide2Stats");
      if (!statsEl) return;
      makeClickable(statsEl, function() {
        showDetail("📊 Nghề nguy cơ cao vs Nghề an toàn", buildListHTML([
          "<strong>⚠️ Nguy cơ cao:</strong>",
          "Telemarketer — 96% bị thay thế (Wharton 2025)",
          "Customer Service — 70% (Anthropic 2026)",
          "Data Entry — 67% (Anthropic 2026)",
          "Kế toán & Kiểm toán — nguy cơ cao (Goldman Sachs)",
          "Thu ngân — giảm 11% việc làm đến 2033 (BLS)",
          "",
          "<strong>✅ An toàn trước AI:</strong>",
          "Kỹ sư AI / Phần mềm — tăng trưởng +17.9% (BLS)",
          "Data Scientist — tăng trưởng +33.5%",
          "Giám đốc Sáng tạo (Creative Director) — chỉ số chống AI 85/100",
          "Lãnh đạo & Quản lý — chỉ số chống AI 90/100",
          "UX Designer cấp cao — được AI bổ trợ, không thay thế"
        ]));
      });
    }, 0);
    return s;
  }

  // ===== Market B: Phụ huynh hành động =====
  function buildSlideMarketB() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Phụ huynh khắp thế giới <span class="xa-accent">đang hành động</span></div>' +
      '<div class="xa-stats" id="xaMarketBStats" style="cursor:pointer">' +
        '<div class="xa-stat">' +
          '<div class="xa-stat-number">25+</div>' +
          '<div class="xa-stat-label">quốc gia đưa lập trình<br>vào bắt buộc từ tiểu học</div>' +
        '</div>' +
        '<div class="xa-stat">' +
          '<div class="xa-stat-number">24%</div>' +
          '<div class="xa-stat-label">chi tiêu hộ gia đình VN<br>dành cho giáo dục</div>' +
        '</div>' +
        '<div class="xa-stat">' +
          '<div class="xa-stat-number">$132 tỷ</div>' +
          '<div class="xa-stat-label">thị trường STEM K-12<br>toàn cầu 2030</div>' +
        '</div>' +
      '</div>' +
      '<div class="xa-quote">"Nhật Bản, Anh, Singapore đã dạy code từ lớp 1. Câu hỏi không phải con CÓ NÊN học — mà là <span class="xa-accent">BẮT ĐẦU TỪ BAO GIỜ.</span>"</div>';

    setTimeout(function() {
      var statsEl = document.getElementById("xaMarketBStats");
      if (!statsEl) return;
      makeClickable(statsEl, function() {
        showDetail("🌍 Các quốc gia đã triển khai coding bắt buộc", buildListHTML([
          "🇰🇷 Hàn Quốc (2007) — Đầu tiên thế giới, bắt buộc từ tiểu học & THCS",
          "🇬🇧 Anh Quốc (2014) — Tất cả HS 5–16 tuổi học lập trình bắt buộc",
          "🇯🇵 Nhật Bản (2020) — Bắt buộc từ lớp 5 tiểu học đến hết THPT",
          "🇸🇬 Singapore — #1 ASEAN về kỹ năng kỹ thuật số (Coursera 2024)",
          "🇦🇪 UAE (2023) — Lập trình bắt buộc cho tất cả học sinh",
          "",
          "📊 Việt Nam: 24% chi tiêu hộ gia đình cho giáo dục — gần gấp đôi khu vực",
          "📈 Chi tiêu GD tăng 36.3% từ 2022→2024, đạt 9.5 triệu VNĐ/HS/năm",
          "🏫 75% trường học toàn cầu đã bắt buộc coding & digital literacy"
        ]));
      });
    }, 0);
    return s;
  }

  // ===== Market C: Ngành Sáng tạo (Art-specific) =====
  function buildSlideMarketC() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Ngành Sáng tạo — <span class="xa-accent">Không AI nào thay thế được</span></div>' +
      '<div class="xa-stats" id="xaMarketCStats" style="cursor:pointer">' +
        '<div class="xa-stat" style="flex:1.5">' +
          '<div class="xa-stat-number">$205B<br>→ $1,345B</div>' +
          '<div class="xa-stat-label">kinh tế sáng tạo toàn cầu<br>CAGR 23.3%</div>' +
        '</div>' +
        '<div class="xa-stat">' +
          '<div class="xa-stat-number">30,000</div>' +
          '<div class="xa-stat-label">nhà thiết kế<br>thiếu hụt tại Việt Nam</div>' +
        '</div>' +
        '<div class="xa-stat">' +
          '<div class="xa-stat-number">85/100</div>' +
          '<div class="xa-stat-label">chỉ số chống AI<br>của Giám đốc Sáng tạo</div>' +
        '</div>' +
      '</div>' +
      '<div class="xa-quote">"AI vẽ được, nhưng không NHÌN được. Người sáng tạo không bị thay thế — họ được <span class="xa-accent">TRAO THÊM SỨC MẠNH.</span>"</div>';

    setTimeout(function() {
      var statsEl = document.getElementById("xaMarketCStats");
      if (!statsEl) return;
      makeClickable(statsEl, function() {
        showDetail("🎨 Lương Design toàn cầu & Thị trường VN", buildListHTML([
          "<strong>💰 Mức lương Design (thị trường Mỹ, 2025):</strong>",
          "UX Designer: $70,000 – $150,000/năm",
          "Product Designer: $80,000 – $170,000/năm",
          "Design Manager: $100,000 – $220,000/năm",
          "AR UX Designer: $85,000 – $190,000/năm",
          "",
          "<strong>🇻🇳 Thị trường Việt Nam:</strong>",
          "Thị trường thiết kế đồ họa VN: 1.3 tỷ USD (Ken Research 2024)",
          "Thiếu hụt 30,000 nhà thiết kế chuyên nghiệp",
          "Tốc độ tăng trưởng DN sáng tạo: 7.2%/năm",
          "Tốc độ tăng trưởng lực lượng lao động sáng tạo: 7.4%/năm",
          "Web Developers & Digital Designers: tăng +7% (BLS 2025)"
        ]));
      });
    }, 0);
    return s;
  }

  function buildSlide3() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Tại sao cần học Art <span class="xa-accent">từ sớm?</span></div>' +
      '<p class="xa-subtitle">Visual Communication là nền tảng cho mọi ngành sáng tạo — và cả những ngành "không sáng tạo"</p>' +
      '<div class="xa-grid-4" id="xaSlide3Grid"></div>';

    setTimeout(function() {
      var grid = document.getElementById("xaSlide3Grid");
      if (!grid) return;
      detailData.slide3.forEach(function(card) {
        var cardEl = document.createElement("div");
        cardEl.className = "xa-card";
        cardEl.innerHTML =
          '<span class="xa-card-icon">' + card.icon + '</span>' +
          '<div class="xa-card-title">' + card.name + '</div>' +
          '<div class="xa-card-desc">' + card.items[0] + '</div>';
        makeClickable(cardEl, function() {
          showDetail(card.icon + ' ' + card.name, buildListHTML(card.items));
        });
        grid.appendChild(cardEl);
      });
    }, 0);
    return s;
  }

  function buildSlide4() {
    var s = el("div", "xa-slide");
    var courses = detailData.slide4;
    // Ascending staircase — each step sits progressively higher
    var stepIncrement = 28; // px per step (smaller since 9 stairs)

    var stairsHtml = '<div class="xa-staircase xa-staircase-full" id="xaSlide4Stairs">';
    var hasPost18 = false;
    courses.forEach(function (c, i) {
      if (c.isPost18 && !hasPost18) {
        stairsHtml += '<div class="xa-stair-divider"><span>18+</span></div>';
        hasPost18 = true;
      }
      var extraClass = c.isPost18 ? ' xa-stair-post18' : '';
      var riserH = i * stepIncrement;
      stairsHtml +=
        '<div class="xa-stair' + extraClass + '" data-stair="' + i + '">' +
          '<div class="xa-stair-bar" style="background:' + c.color + '">' +
            '<span class="xa-stair-year">' + c.year + '</span>' +
            '<span class="xa-stair-name">' + c.name + '</span>' +
          '</div>' +
          '<div class="xa-stair-col" style="height:' + riserH + 'px">' +
            '<div class="xa-stair-riser" style="background:' + c.color + '"></div>' +
            (c.keywords && riserH > 30 ? '<div class="xa-stair-keywords">' + c.keywords.map(function(k) { return '<span>' + k + '</span>'; }).join('') + '</div>' : '') +
          '</div>' +
          '<div class="xa-stair-outcome">Nhấn để xem chi tiết</div>' +
        '</div>';
    });
    stairsHtml += '</div>';

    s.innerHTML =
      '<div class="xa-title-large">Lộ trình phát triển <span class="xa-accent">Art & Design</span></div>' +
      '<p class="xa-subtitle">Từ K12 đến 18+ — khép kín từ nền tảng đến nghề nghiệp</p>' +
      stairsHtml +
      '<div class="xa-quote">Mỗi năm con tiến 1 bậc. Phát triển đồng thời <span class="xa-accent">Tư duy, Kỹ năng, Kiến thức.</span></div>';

    setTimeout(function() {
      var stairs = document.querySelectorAll("#xaSlide4Stairs .xa-stair");
      stairs.forEach(function(stairEl, i) {
        var c = courses[i];
        stairEl.style.cursor = "pointer";
        stairEl.classList.add("xa-clickable");
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
    var s = el("div", "xa-slide");
    var programs = detailData.slideSpecial;
    s.innerHTML =
      '<div class="xa-title-large">5 chương trình nâng cao <span class="xa-accent">đặc biệt</span></div>' +
      '<p class="xa-subtitle">Xuyên suốt lộ trình — con được rèn luyện sáng tạo thực chiến</p>' +
      '<div class="xa-special-programs" id="xaSpecialGrid"></div>' +
      '<div class="xa-quote">Không chỉ vẽ đẹp — con được <span class="xa-accent">TRIỂN LÃM, GỌI VỐN, THỰC TẬP, QUẢN LÝ DỰ ÁN</span> từ khi còn đi học.</div>';

    setTimeout(function() {
      var grid = document.getElementById("xaSpecialGrid");
      if (!grid) return;
      programs.forEach(function(prog) {
        var card = document.createElement("div");
        card.className = "xa-special-card";
        card.innerHTML =
          '<div class="xa-special-header" style="border-left:4px solid ' + prog.color + '">' +
            '<div class="xa-special-icon">' + prog.icon + '</div>' +
            '<div class="xa-special-info">' +
              '<div class="xa-special-name">' + prog.name + '</div>' +
              '<div class="xa-special-sub">' + prog.subtitle + '</div>' +
            '</div>' +
            '<div class="xa-special-badge" style="background:' + prog.color + '">' + prog.duration + '</div>' +
          '</div>' +
          '<div class="xa-special-timing">' + prog.timing + '</div>';
        makeClickable(card, function() {
          var html = buildListHTML(prog.items);
          if (prog.levels) {
            html += '<div class="xa-detail-levels">';
            prog.levels.forEach(function(lv) {
              html += '<div class="xa-detail-level">' +
                '<div class="xa-detail-level-header">' + lv.icon + ' ' + lv.name + '</div>' +
                '<div class="xa-detail-level-desc">' + lv.desc + '</div>' +
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
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">3 hệ giá trị <span class="xa-accent">xuyên suốt</span></div>' +
      '<p class="xa-subtitle">Mỗi khóa học đều phát triển đồng thời 3 hệ giá trị</p>' +
      '<div class="xa-grid-3" id="xaSlide5Grid"></div>';

    setTimeout(function() {
      var grid = document.getElementById("xaSlide5Grid");
      if (!grid) return;
      var labels = ["Hệ giá trị 1", "Hệ giá trị 2", "Hệ giá trị 3"];
      detailData.slide5.forEach(function(val, i) {
        var cardEl = document.createElement("div");
        cardEl.className = "xa-value-card";
        cardEl.innerHTML =
          '<div class="xa-value-label">' + labels[i] + '</div>' +
          '<div class="xa-value-title">' + val.emoji + ' ' + val.name + '</div>' +
          '<div class="xa-value-desc">' + val.items[0] + '<br><br>' + val.items[1] + '</div>';
        makeClickable(cardEl, function() {
          showDetail(val.emoji + ' Hệ giá trị: ' + val.name, buildListHTML(val.items));
        });
        grid.appendChild(cardEl);
      });
    }, 0);
    return s;
  }

  function buildSlide6() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Sau 7 năm: Con sẵn sàng cho <span class="xa-accent">điểm rẽ lớn</span></div>' +
      '<p class="xa-subtitle">Với nền tảng nghệ thuật & thiết kế vững chắc, con có 2 hướng phát triển</p>' +
      '<div class="xa-fork" id="xaSlide6Fork"></div>' +
      '<div class="xa-quote">Con đã có portfolio thật, kỹ năng thật — từ đây chọn hướng nào cũng vững.</div>';

    setTimeout(function() {
      var fork = document.getElementById("xaSlide6Fork");
      if (!fork) return;
      detailData.slide6.forEach(function(branch, i) {
        var branchEl = document.createElement("div");
        branchEl.className = "xa-fork-branch " + (i === 0 ? "primary" : "secondary");
        branchEl.innerHTML =
          '<div class="xa-fork-icon">' + branch.icon + '</div>' +
          '<div class="xa-fork-name">' + branch.name + '</div>' +
          '<div class="xa-fork-desc">' + (i === 0
            ? 'Cho con muốn có <strong>nghề nghiệp</strong> ngay. Năm 7 UX/UI + Thực tập + Cam kết việc làm.'
            : 'Cho con có định hướng <strong>du học</strong>. Xây portfolio quốc tế + Hồ sơ du học ngành Art.'
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
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Tại sao cần học <span class="xa-accent">bài bản & dài hạn?</span></div>' +
      '<div class="xa-problem">' +
        '<div class="xa-problem-number">72%</div>' +
        '<div class="xa-problem-text">người học thiết kế tự do thất bại vì thiếu nền tảng & quy trình</div>' +
      '</div>' +
      '<div class="xa-reasons">' +
        '<div class="xa-reason">' +
          '<div class="xa-reason-num">1</div>' +
          '<div class="xa-reason-content">' +
            '<div class="xa-reason-title">Chỉ học công cụ, thiếu tư duy</div>' +
            '<div class="xa-reason-desc">Biết dùng Photoshop ≠ Biết thiết kế. Tư duy thẩm mỹ & hệ thống mới tạo ra designer giỏi.</div>' +
          '</div>' +
        '</div>' +
        '<div class="xa-reason">' +
          '<div class="xa-reason-num">2</div>' +
          '<div class="xa-reason-content">' +
            '<div class="xa-reason-title">Thiếu portfolio chuyên nghiệp</div>' +
            '<div class="xa-reason-desc">Nhà tuyển dụng không cần bằng — cần sản phẩm thật. Portfolio xây dựng từ năm đầu = lợi thế lớn.</div>' +
          '</div>' +
        '</div>' +
        '<div class="xa-reason">' +
          '<div class="xa-reason-num">3</div>' +
          '<div class="xa-reason-content">' +
            '<div class="xa-reason-title">AI đang thay đổi ngành</div>' +
            '<div class="xa-reason-desc">AI tạo hình ảnh rất nhanh — nhưng cần người biết "ra đề" đúng. Nền tảng sáng tạo + AI = vũ khí tối thượng.</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="xa-tshaped">' +
        '<div class="xa-tshaped-top">NỀN TẢNG — Mỹ thuật · Thẩm mỹ · Digital Art · Truyền thông</div>' +
        '<div class="xa-tshaped-stem">CHUYÊN SÂU — UX/UI · Product Design</div>' +
      '</div>' +
      '<p class="xa-footnote">Lộ trình MindX Art: Nền tảng rộng + Chuyên sâu vững — chuẩn quốc tế cho ngành Sáng tạo</p>';
    return s;
  }

  function buildSlideNam7() {
    var s = el("div", "xa-slide");
    var data = detailData.slideNam7;
    var semHtml = '<div class="xa-semesters" id="xaSemGrid">';
    data.semesters.forEach(function(sem, i) {
      semHtml +=
        '<div class="xa-semester" data-sem="' + i + '">' +
          '<div class="xa-sem-badge" style="background:' + sem.color + '">HK' + (i+1) + '</div>' +
          '<div class="xa-sem-name">' + sem.name.split(": ")[1] + '</div>' +
          '<div class="xa-sem-hint">Nhấn để xem</div>' +
        '</div>';
    });
    semHtml += '</div>';

    s.innerHTML =
      '<div class="xa-title-large">Năm 7: <span class="xa-accent">Interaction Design — UX/UI</span></div>' +
      '<p class="xa-subtitle">4 học kì chuyên sâu — từ UI → UX → Product → Career Kickstart</p>' +
      semHtml +
      '<div class="xa-quote">Sẵn sàng cho vị trí <span class="xa-accent">UI/UX Designer Intern — Fresher</span> khi hoàn thành.</div>';

    setTimeout(function() {
      var sems = document.querySelectorAll("#xaSemGrid .xa-semester");
      sems.forEach(function(semEl, i) {
        var sem = data.semesters[i];
        semEl.style.cursor = "pointer";
        semEl.classList.add("xa-clickable");
        semEl.addEventListener("click", function(e) {
          e.stopPropagation();
          showDetail(
            '<span style="color:' + sem.color + '">' + sem.name + '</span>',
            buildListHTML(sem.items)
          );
        });
      });
    }, 0);
    return s;
  }

  function buildSlide9() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Ngành nghề <span class="xa-accent">đầu ra</span></div>' +
      '<p class="xa-subtitle">Hoàn thành lộ trình, con sẵn sàng cho các vị trí chuẩn ngành</p>' +
      '<div class="xa-grid-4" id="xaSlide9Grid"></div>';

    var careers = [
      { icon: "🖼️", name: "Graphic Designer", color: "#8B5CF6", bg: "#F5F3FF", desc: "Thiết kế đồ họa, branding, poster, ấn phẩm truyền thông" },
      { icon: "🎬", name: "Motion Designer", color: "#E31F26", bg: "#FEF2F2", desc: "Đồ họa chuyển động, video, quảng cáo, social content" },
      { icon: "📱", name: "UI/UX Designer", color: "#2563EB", bg: "#EFF6FF", desc: "Thiết kế giao diện & trải nghiệm người dùng cho app/web" },
      { icon: "🚀", name: "Product Designer", color: "#059669", bg: "#ECFDF5", desc: "Thiết kế sản phẩm số tổng thể — UX + UI + Business" }
    ];

    setTimeout(function() {
      var grid = document.getElementById("xaSlide9Grid");
      if (!grid) return;
      careers.forEach(function(c) {
        var cardEl = document.createElement("div");
        cardEl.className = "xa-career-card";
        cardEl.innerHTML =
          '<div class="xa-career-icon" style="background:' + c.bg + '">' + c.icon + '</div>' +
          '<div class="xa-career-name" style="color:' + c.color + '">' + c.name + '</div>' +
          '<div class="xa-career-desc">' + c.desc + '</div>';
        grid.appendChild(cardEl);
      });
    }, 0);
    return s;
  }

  function buildSlide10() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Internship X<br><span class="xa-accent">Cam kết việc làm</span></div>' +
      '<div class="xa-stats" style="margin-bottom:24px">' +
        '<div class="xa-stat">' +
          '<div class="xa-stat-number">30h</div>' +
          '<div class="xa-stat-label">thực tập tại<br><strong>doanh nghiệp đối tác</strong></div>' +
        '</div>' +
      '</div>' +
      '<div class="xa-checks">' +
        '<div class="xa-check">' +
          '<div class="xa-check-icon">✓</div>' +
          '<div class="xa-check-text">Thực hành thiết kế cho dự án doanh nghiệp thực tế</div>' +
        '</div>' +
        '<div class="xa-check">' +
          '<div class="xa-check-icon">✓</div>' +
          '<div class="xa-check-text">Mentor là designer chuyên nghiệp hướng dẫn trực tiếp</div>' +
        '</div>' +
        '<div class="xa-check">' +
          '<div class="xa-check-icon">✓</div>' +
          '<div class="xa-check-text">Portfolio chuyên nghiệp — chứng minh năng lực thật</div>' +
        '</div>' +
        '<div class="xa-check">' +
          '<div class="xa-check-icon">✓</div>' +
          '<div class="xa-check-text">Cam kết giới thiệu việc làm sau hoàn thành lộ trình Art</div>' +
        '</div>' +
      '</div>' +
      '<div class="xa-quote">Vị trí: <span class="xa-accent">Graphic Designer, Motion Designer, UI/UX Designer, Product Designer</span></div>';
    return s;
  }

  // ===== NEW: Career Path + Salary (Design) =====
  function buildSlideCareer() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Lộ trình thăng tiến & <span class="xa-accent">Thu nhập</span></div>' +
      '<p class="xa-subtitle">Con không chỉ dừng ở vị trí chuyên viên — mà có thể trở thành lãnh đạo sáng tạo</p>' +
      '<div class="xa-career-ladder" id="xaCareerLadder"></div>' +
      '<div class="xa-quote">Nguồn: <span class="xa-accent">TopDev & ITviec Báo cáo Lương 2025-2026</span> — Mức lương Design tại Việt Nam</div>';

    setTimeout(function() {
      var ladder = document.getElementById("xaCareerLadder");
      if (!ladder) return;
      var levels = [
        { title: "Intern / Fresher", years: "0-1 năm", salary: "5 — 10 triệu/tháng", color: "#94A3B8", height: "32px" },
        { title: "Junior Designer", years: "1-2 năm", salary: "10 — 15 triệu/tháng", color: "#8B5CF6", height: "36px" },
        { title: "Mid Designer", years: "2-4 năm", salary: "20 — 30 triệu/tháng", color: "#2563EB", height: "40px" },
        { title: "Senior Designer", years: "4-6 năm", salary: "30 — 45 triệu/tháng", color: "#059669", height: "44px" },
        { title: "Design Lead", years: "6-8 năm", salary: "45 — 60 triệu/tháng", color: "#D97706", height: "48px" },
        { title: "Head of Design / CD", years: "8+ năm", salary: "60 — 100 triệu/tháng", color: "#E31F26", height: "52px" }
      ];
      levels.forEach(function(lv) {
        var row = document.createElement("div");
        row.className = "xa-cl-row";
        row.innerHTML =
          '<div class="xa-cl-bar" style="background:' + lv.color + ';height:' + lv.height + '">' +
            '<span class="xa-cl-title">' + lv.title + '</span>' +
          '</div>' +
          '<div class="xa-cl-info">' +
            '<span class="xa-cl-years">' + lv.years + '</span>' +
            '<span class="xa-cl-salary" style="color:' + lv.color + '">' + lv.salary + '</span>' +
          '</div>';
        ladder.appendChild(row);
      });
    }, 0);
    return s;
  }

  // ===== NEW: Case Studies (Art-specific) =====
  function buildSlideCaseStudy() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Học viên MindX <span class="xa-accent">đã thành công</span></div>' +
      '<p class="xa-subtitle">Từ đam mê sáng tạo đến sự nghiệp thiết kế chuyên nghiệp</p>' +
      '<div class="xa-cs-grid" id="xaCaseStudies"></div>' +
      '<div class="xa-stats" style="margin-top:20px">' +
        '<div class="xa-stat"><div class="xa-stat-number">80,000+</div><div class="xa-stat-label">học viên</div></div>' +
        '<div class="xa-stat"><div class="xa-stat-number">50+</div><div class="xa-stat-label">cơ sở toàn quốc</div></div>' +
        '<div class="xa-stat"><div class="xa-stat-number">7</div><div class="xa-stat-label">giải thưởng<br>quốc gia 2025</div></div>' +
      '</div>';

    setTimeout(function() {
      var grid = document.getElementById("xaCaseStudies");
      if (!grid) return;
      var cases = [
        { icon: "🎨", name: "Hoàng Ngọc Diệp", highlight: "Sư phạm → UI/UX Designer", desc: "Chuyển ngành thành công ở tuổi 26, hiện là UI/UX Designer tại công ty app", color: "#8B5CF6",
          detail: [
            "Cử nhân ĐH Sư phạm Hà Nội — hoàn toàn không liên quan IT",
            "Học 3 khóa UI/UX liên tiếp tại MindX (UDX02)",
            "Chuyển ngành thành công ở tuổi 26",
            "Hiện là UI/UX Designer tại công ty công nghệ mobile app",
            "\"MindX có 3 khóa liên tiếp, vừa học kiến thức theo level, vừa được làm sản phẩm\""
          ]},
        { icon: "📊", name: "Thị trường VN", highlight: "Thiếu 30K designer", desc: "Thị trường thiết kế VN 1.3 tỷ USD, 7.4% tăng trưởng nhân lực sáng tạo/năm", color: "#059669",
          detail: [
            "Thị trường thiết kế đồ họa VN: 1.3 tỷ USD (Ken Research 2024)",
            "Thiếu hụt 30,000 nhà thiết kế chuyên nghiệp",
            "Tốc độ tăng trưởng DN văn hóa sáng tạo: 7.2%/năm",
            "Tốc độ tăng trưởng lực lượng lao động sáng tạo: 7.4%/năm",
            "23% doanh nghiệp VN đang sử dụng nội dung số (và tăng nhanh)"
          ]},
        { icon: "👦", name: "Đình Phát", highlight: "Robot đầu tiên của con", desc: "Sáng tạo robot tại Robotics Open 2025 — giấc mơ lớn từ tuổi nhỏ", color: "#E31F26",
          detail: [
            "Học viên MindX Minh Khai — nhỏ tuổi nhất cuộc thi",
            "Tự tay sáng tạo mô hình robot đầu tiên",
            "Tham gia Robotics Open 2025",
            "\"Con bảo học MindX xong, lớn lên sẽ xin làm ở MindX luôn nha mẹ\" — Phụ huynh Đình Phát"
          ]},
        { icon: "🌍", name: "Kinh tế sáng tạo", highlight: "Ngành hot nhất 2030", desc: "Creator economy: $205B → $1,345B — CAGR 23.3% — cơ hội chưa từng có", color: "#D97706",
          detail: [
            "Kinh tế sáng tạo toàn cầu: $205B (2024) → $1,345B (2033)",
            "CAGR 23.3% — nhanh nhất trong các ngành",
            "Xuất khẩu dịch vụ sáng tạo: $1.4 nghìn tỷ (+29%)",
            "Đóng góp 0.5–7.3% GDP các quốc gia",
            "Ngành sáng tạo VN đóng góp ~3.5% GDP/năm"
          ]}
      ];
      cases.forEach(function(c) {
        var card = document.createElement("div");
        card.className = "xa-cs-card";
        card.innerHTML =
          '<div class="xa-cs-icon">' + c.icon + '</div>' +
          '<div class="xa-cs-content">' +
            '<div class="xa-cs-name">' + c.name + ' <span style="color:' + c.color + ';font-weight:600">· ' + c.highlight + '</span></div>' +
            '<div class="xa-cs-desc">' + c.desc + '</div>' +
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
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Mạng lưới <span class="xa-accent">200+ doanh nghiệp</span> đối tác</div>' +
      '<p class="xa-subtitle">MindX kết nối với các doanh nghiệp hàng đầu — tạo cơ hội thực tập & việc làm cho học viên</p>' +
      '<div class="xa-pt-grid" id="xaPartners"></div>' +
      '<div class="xa-quote">MindX là trường học công nghệ có <span class="xa-accent">quy mô lớn nhất Đông Nam Á</span> với 40+ cơ sở trên toàn quốc</div>';

    setTimeout(function() {
      var grid = document.getElementById("xaPartners");
      if (!grid) return;
      var groups = [
        { label: "🌐 Big Tech & Quốc tế", companies: ["Google", "Amazon", "Microsoft", "Shopee"], color: "#2563EB" },
        { label: "🎨 Creative & Design", companies: ["Dentsu", "Ogilvy", "Leo Burnett", "TBWA"], color: "#8B5CF6" },
        { label: "🇻🇳 Công nghệ Việt Nam", companies: ["FPT Software", "VNG", "Viettel", "Tiki", "VNPay", "MoMo"], color: "#D97706" },
        { label: "🎓 Đại học & Nghiên cứu", companies: ["Rice University", "NUS", "Đối tác giáo dục quốc tế"], color: "#059669" }
      ];
      groups.forEach(function(g) {
        var section = document.createElement("div");
        section.className = "xa-pt-group";
        var labelHtml = '<div class="xa-pt-label" style="color:' + g.color + '">' + g.label + '</div>';
        var chipsHtml = '<div class="xa-pt-chips">';
        g.companies.forEach(function(c) {
          chipsHtml += '<span class="xa-pt-chip" style="border-color:' + g.color + ';color:' + g.color + '">' + c + '</span>';
        });
        chipsHtml += '</div>';
        section.innerHTML = labelHtml + chipsHtml;
        grid.appendChild(section);
      });
    }, 0);
    return s;
  }

  function buildSlide11() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Tóm lại, con nhận được gì?</div>' +
      '<div class="xa-timeline" id="xaSlide11TL"></div>' +
      '<div class="xa-result-grid" id="xaSlide11Grid"></div>';

    setTimeout(function() {
      var tl = document.getElementById("xaSlide11TL");
      var grid = document.getElementById("xaSlide11Grid");
      if (!tl) return;

      var tlLabels = ["7 năm nền tảng", "Năm 7: UX/UI", "Internship X", "Vị trí nghề"];
      var tlDescs = ["Little Artist → Motion & Video<br>Nghệ thuật vững chắc", "UI → UX → Product<br>Thiết kế sản phẩm", "Thực tập + Việc làm<br>Cam kết đầu ra", "Graphic · Motion<br>UI/UX · Product"];

      detailData.slide11.forEach(function(item, i) {
        var tlItem = document.createElement("div");
        tlItem.className = "xa-tl-item xa-clickable";
        tlItem.style.cursor = "pointer";
        tlItem.innerHTML =
          '<div class="xa-tl-dot"></div>' +
          '<div class="xa-tl-label">' + tlLabels[i] + '</div>' +
          '<div class="xa-tl-desc">' + tlDescs[i] + '</div>' +
          '<div class="xa-click-hint">Nhấn để xem</div>';
        tlItem.addEventListener("click", function(e) {
          e.stopPropagation();
          showDetail(item.name, buildListHTML(item.items));
        });
        tl.appendChild(tlItem);
      });

      var results = [
        { emoji: "🎨", label: "Nền tảng vững", desc: "Mỹ thuật + Digital Art" },
        { emoji: "🏆", label: "Được rèn", desc: "Cregen + Creative Intern" },
        { emoji: "💼", label: "Có nghề", desc: "Portfolio + Thực tập + Job" },
        { emoji: "🚀", label: "Sẵn sàng", desc: "Cho ĐH, nghề nghiệp, AI" }
      ];
      results.forEach(function(r) {
        var item = document.createElement("div");
        item.className = "xa-result-item";
        item.innerHTML =
          '<div class="xa-result-emoji">' + r.emoji + '</div>' +
          '<div class="xa-result-label">' + r.label + '</div>' +
          '<div class="xa-result-desc">' + r.desc + '</div>';
        grid.appendChild(item);
      });
    }, 0);
    return s;
  }

  function buildSlide12() {
    var s = el("div", "xa-slide");
    s.innerHTML =
      '<div class="xa-title-large">Hành trình bắt đầu từ hôm nay</div>' +
      '<div class="xa-cta-box xa-cta-enroll">' +
        '<div class="xa-cta-title">Mỗi ngày chờ đợi là một ngày<br>con đi sau các bạn cùng trang lứa</div>' +
        '<div class="xa-cta-checks">' +
          '<div class="xa-cta-check">✔ <strong>Tư duy</strong> — Tư duy sáng tạo &amp; thẩm mỹ từ sớm</div>' +
          '<div class="xa-cta-check">✔ <strong>Kỹ năng</strong> — Thiết kế đồ họa, UI/UX, sản phẩm thực tế</div>' +
          '<div class="xa-cta-check">✔ <strong>Kiến thức</strong> — Nền tảng nghệ thuật số vững chắc cho tương lai</div>' +
        '</div>' +
        '<div class="xa-cta-btn">ĐĂNG KÝ NGAY — Bắt đầu hành trình</div>' +
      '</div>' +
      '<p class="xa-subtitle" style="margin-top:24px;margin-bottom:0;font-size:0.95rem;color:#999">Anh/chị đã thấy cách MindX dạy — hãy để con bước vào lộ trình sớm nhất có thể.</p>';
    return s;
  }

  function el(tag, cls) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }

  window.xartActivate = activate;
  window.xartDeactivate = deactivate;
})();
