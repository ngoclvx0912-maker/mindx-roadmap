/* x18plus.js — MindX 18+ Module: Roadmap + Overview + Sales Flows */
(function () {
  "use strict";

  // ===== COURSE DATA =====
  var courses = {
    coding: {
      id: "coding",
      name: "XCareer Coding",
      icon: "💻",
      color: "#2563EB",
      colorLight: "#EFF6FF",
      duration: "8 tháng",
      sessions: "64 buổi",
      tagline: "Lập trình Web từ A-Z, apply Junior Dev sau 8 tháng",
      target: "Sinh viên IT, người chuyển ngành, người muốn upskill",
      levels: [
        {
          code: "B", label: "Basic", name: "Coding cơ bản",
          desc: "HTML/CSS/JS — Xây dựng trang web tương tác",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["HTML", "CSS", "JavaScript", "Git"],
          topics: [
            "Cấu trúc web, HTML semantic, CSS responsive",
            "JavaScript cơ bản: biến, hàm, DOM manipulation",
            "Tạo trang web cá nhân hoàn chỉnh",
            "Git cơ bản, quản lý source code"
          ],
          output: "Website cá nhân responsive, portfolio GitHub"
        },
        {
          code: "A", label: "Advanced", name: "Code Intensive (ReactJS)",
          desc: "Front-end nâng cao với ReactJS — Components, API, Redux",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["ReactJS", "Redux", "REST API", "CSS Framework"],
          topics: [
            "React Components, Props, State, Hooks",
            "Gọi API, xử lý dữ liệu từ server",
            "State management với Redux / Context",
            "CSS Design nâng cao, responsive"
          ],
          output: "Ứng dụng React hoàn chỉnh kết nối API"
        },
        {
          code: "I", label: "Intensive", name: "Fullstack Web (MERN Stack)",
          desc: "Back-end NodeJS, Express, MongoDB — Fullstack project",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["NodeJS", "Express", "MongoDB", "REST API"],
          topics: [
            "Back-end với NodeJS & Express",
            "Database: MongoDB, CRUD operations",
            "REST API design & authentication",
            "Fullstack project: Front-end + Back-end"
          ],
          output: "Fullstack web app MERN hoàn chỉnh"
        },
        {
          code: "S", label: "Career Kickstart", name: "Career Kickstart",
          desc: "Agile/Scrum, dự án thực tế, CV & Portfolio chuyên nghiệp",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Agile/Scrum", "Jira", "GitHub", "Portfolio"],
          topics: [
            "Agile/Scrum methodology, Sprint planning",
            "Dự án nhóm mô phỏng doanh nghiệp",
            "Hoàn thiện CV, GitHub Portfolio",
            "Mock interview, kết nối doanh nghiệp đối tác"
          ],
          output: "Portfolio chuyên nghiệp + CV + Giới thiệu việc làm"
        }
      ]
    },
    data: {
      id: "data",
      name: "AI-Data Analyst",
      icon: "📊",
      color: "#059669",
      colorLight: "#ECFDF5",
      duration: "8 tháng",
      sessions: "64 buổi",
      tagline: "Phân tích dữ liệu từ Excel đến Python, đi làm DA sau 8 tháng",
      target: "Người muốn chuyển sang Data, upskill phân tích",
      levels: [
        {
          code: "B", label: "Basic", name: "Phân tích dữ liệu cơ bản",
          desc: "Excel nâng cao, tư duy phân tích, thống kê mô tả",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Excel", "Google Sheets", "Thống kê"],
          topics: [
            "Excel nâng cao: Pivot Table, VLOOKUP, hàm thống kê",
            "Tư duy phân tích dữ liệu có hệ thống",
            "Thống kê mô tả: mean, median, phân phối",
            "Làm sạch và chuẩn hóa dữ liệu"
          ],
          output: "Báo cáo phân tích dữ liệu bằng Excel"
        },
        {
          code: "A", label: "Advanced", name: "Phân tích dữ liệu trong kinh doanh",
          desc: "SQL, Power BI — Truy vấn & trực quan hóa dữ liệu",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["SQL", "Power BI", "PostgreSQL"],
          topics: [
            "SQL: SELECT, JOIN, GROUP BY, Subquery",
            "Power BI: Dashboard, visualization, DAX cơ bản",
            "Phân tích dữ liệu kinh doanh: KPI, metrics",
            "Storytelling with data — trình bày insight"
          ],
          output: "Dashboard Power BI + Báo cáo phân tích kinh doanh"
        },
        {
          code: "I", label: "Intensive", name: "Phân tích dữ liệu nâng cao",
          desc: "Python cho Data, Machine Learning cơ bản, EDA",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
          topics: [
            "Python cho Data: Pandas, NumPy",
            "EDA (Exploratory Data Analysis) chuyên sâu",
            "Visualization: Matplotlib, Seaborn",
            "Machine Learning cơ bản: Regression, Classification"
          ],
          output: "Dự án phân tích dữ liệu Python + ML model"
        },
        {
          code: "S", label: "Career Kickstart", name: "DA Career Kickstart",
          desc: "Dự án thực tế, portfolio DA, mock interview",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Portfolio", "GitHub", "AI Tools"],
          topics: [
            "Dự án phân tích dữ liệu thực tế từ doanh nghiệp",
            "Xây dựng portfolio Data Analyst chuyên nghiệp",
            "CV & LinkedIn optimization",
            "Mock interview, kết nối 200+ đối tác tuyển dụng"
          ],
          output: "Portfolio DA + CV + Giới thiệu việc làm"
        }
      ]
    },
    itba: {
      id: "itba",
      name: "IT Business Analyst",
      icon: "📋",
      color: "#D97706",
      colorLight: "#FFFBEB",
      duration: "6 tháng",
      sessions: "48 buổi",
      tagline: "Vào ngành IT không cần code — BA là cầu nối doanh nghiệp & dev",
      target: "Người trái ngành, muốn vào IT mà không cần lập trình",
      levels: [
        {
          code: "B", label: "Basic", name: "BA for Everyone",
          desc: "Tư duy BA, quy trình SDLC, viết BRD, wireframe",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["draw.io", "Figma", "bpmn.io"],
          topics: [
            "Tổng quan SDLC, vai trò BA trong dự án",
            "Kỹ thuật thu thập yêu cầu: phỏng vấn, workshop",
            "Viết BRD, User Story, ưu tiên MoSCoW",
            "Wireframe cơ bản, mô hình hóa BPMN"
          ],
          output: "Tài liệu BRD + BPMN + Wireframe"
        },
        {
          code: "A", label: "Advanced", name: "BA Intensive",
          desc: "SRS, Mockup, Use Case, Activity Diagram, Agile",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Figma", "balsamiq", "PlantUML", "Jira"],
          topics: [
            "BPMN nâng cao, Use Case Diagram",
            "Viết SRS (Software Requirements Specification)",
            "Mockup & Prototype với Figma",
            "Agile/Scrum, Kanban, Sprint planning"
          ],
          output: "Tài liệu SRS + Use Case + Prototype"
        },
        {
          code: "S", label: "Career Kickstart", name: "BA Career Kickstart",
          desc: "ERD, SQL, API Testing, Portfolio & Mock Interview",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["PlantUML", "PostMan", "MySQL", "Looker Studio"],
          topics: [
            "ERD & Database Design, SQL cho BA",
            "API Testing với Postman",
            "Dự án thực tế theo đề bài doanh nghiệp",
            "Hoàn thiện CV, mock interview BA Fresher"
          ],
          output: "Portfolio BA + Dự án thực tế + CV"
        }
      ]
    },
    uiux: {
      id: "uiux",
      name: "UI/UX Designer",
      icon: "🎨",
      color: "#8B5CF6",
      colorLight: "#F5F3FF",
      duration: "8 tháng",
      sessions: "64 buổi",
      tagline: "Thiết kế trải nghiệm người dùng, từ zero đến có portfolio",
      target: "Người muốn chuyển ngành sang UI/UX, Product Design",
      levels: [
        {
          code: "B", label: "Basic", name: "Nhập môn UIUX Design",
          desc: "Nền tảng Design Thinking, nguyên tắc UX, wireframing",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Figma", "FigJam"],
          topics: [
            "Design Thinking & tư duy lấy người dùng làm trung tâm",
            "Nguyên tắc UX: accessibility, usability",
            "Wireframing: low-fi, thông tin architecture",
            "Figma cơ bản: frames, components, auto layout"
          ],
          output: "Wireframe set cho 1 ứng dụng"
        },
        {
          code: "A", label: "Advanced", name: "UIUX Design cơ bản",
          desc: "Figma chuyên sâu, Design System, Typography, Color",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Figma", "Design System", "Typography"],
          topics: [
            "UI Design: Typography, Color theory, Layout",
            "Figma nâng cao: Components, Variables, Styles",
            "Design System cơ bản: Tokens, Atoms, Molecules",
            "Thiết kế UI hoàn chỉnh cho web/mobile"
          ],
          output: "5–6 UI screens hoàn chỉnh trên Figma"
        },
        {
          code: "I", label: "Intensive", name: "UIUX Design chuyên sâu",
          desc: "Prototype, UX Research, Persona, Journey Map",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Figma Prototype", "UX Research", "Miro"],
          topics: [
            "UX Research: phỏng vấn, khảo sát, phân tích",
            "Persona, Customer Journey Map",
            "Interactive Prototype trên Figma",
            "Usability Testing & Iteration"
          ],
          output: "Case Study UX Research + Prototype hoàn chỉnh"
        },
        {
          code: "S", label: "Career Kickstart", name: "UIUX Career Kickstart",
          desc: "Product Thinking, Agile/Scrum, Portfolio & Job",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Figma", "Agile/Scrum", "Portfolio"],
          topics: [
            "Product Thinking: User + Business + Tech",
            "Agile/Scrum, Design Token, Handoff cho Dev",
            "Real brief từ doanh nghiệp thực tế",
            "Hoàn thiện Portfolio + CV chuyên nghiệp"
          ],
          output: "Portfolio UX/UI + Case Study + CV + Việc làm"
        }
      ]
    },
    marketing: {
      id: "marketing",
      name: "Fullstack Marketing",
      icon: "📢",
      color: "#E31F26",
      colorLight: "#FFF5F5",
      duration: "8 tháng",
      sessions: "52 buổi",
      tagline: "Content → Ads → SEO → Marketing Strategy — dùng AI mạnh mẽ",
      target: "Marketer muốn nâng cấp toàn diện, người chuyển ngành",
      levels: [
        {
          code: "A1", label: "Module 1", name: "Content for Conversion",
          desc: "Viết content chuyển đổi, storytelling, AI content tools",
          duration: "2 tháng", sessions: "12 buổi",
          tools: ["AI Content Tools", "Canva", "Social Media"],
          topics: [
            "Content Strategy & Content Pillars",
            "Copywriting chuyển đổi: headline, CTA, hook",
            "AI Content: ChatGPT, Jasper, tạo nội dung nhanh",
            "Social Media Content: Facebook, TikTok, Instagram"
          ],
          output: "Bộ content plan + 10 bài mẫu chuyển đổi"
        },
        {
          code: "A2", label: "Module 2", name: "Digital for Growth",
          desc: "Quảng cáo Facebook/Google, Funnel, Landing Page",
          duration: "2 tháng", sessions: "12 buổi",
          tools: ["Meta Ads", "Google Ads", "Analytics"],
          topics: [
            "Facebook Ads: targeting, A/B testing, budget",
            "Google Ads: Search, Display, tối ưu",
            "Landing Page & Funnel tối ưu chuyển đổi",
            "Analytics: đo lường, ROI, attribution"
          ],
          output: "Campaign plan + Landing page + Báo cáo ads"
        },
        {
          code: "A3", label: "Module 3", name: "SEO for Scale",
          desc: "SEO On-page/Off-page, Technical SEO, AI SEO tools",
          duration: "2 tháng", sessions: "12 buổi",
          tools: ["Google Search Console", "Ahrefs", "AI SEO"],
          topics: [
            "SEO On-page: keyword research, content SEO",
            "Technical SEO: site speed, schema, crawling",
            "Off-page SEO: link building, authority",
            "AI SEO Tools: tự động hóa nghiên cứu từ khóa"
          ],
          output: "SEO Audit Report + Content SEO plan"
        },
        {
          code: "S", label: "Integration", name: "Marketing & Sales Integration",
          desc: "Lập kế hoạch marketing tổng thể, tích hợp sales",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["CRM", "AI Marketing", "Project Management"],
          topics: [
            "Marketing Strategy & Planning",
            "Sales & Marketing alignment, CRM",
            "Dự án thực tế: chiến dịch marketing 360°",
            "Portfolio marketing + Mock presentation"
          ],
          output: "Marketing Plan 360° + Portfolio + CV"
        }
      ]
    },
    design: {
      id: "design",
      name: "Graphic Designer",
      icon: "🖌️",
      color: "#EC4899",
      colorLight: "#FDF2F8",
      duration: "6 tháng",
      sessions: "48 buổi",
      tagline: "Không cần biết vẽ — học tư duy thiết kế & phần mềm chuyên nghiệp",
      target: "Người muốn làm designer, freelancer thiết kế",
      levels: [
        {
          code: "B", label: "Basic", name: "Nền tảng Graphic Design",
          desc: "Tư duy thiết kế, bố cục, màu sắc, typography, Photoshop",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Adobe Photoshop", "Canva"],
          topics: [
            "Tư duy thiết kế đồ họa cơ bản",
            "Bố cục, lưới, hệ thống tỉ lệ",
            "Màu sắc, typography, hierarchy",
            "Adobe Photoshop: retouching, compositing"
          ],
          output: "Bộ poster + Banner + Bài tập typography"
        },
        {
          code: "A", label: "Advanced", name: "Thiết kế nhận diện thương hiệu",
          desc: "Logo, brand guideline, bộ nhận diện, Illustrator",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Adobe Illustrator", "Photoshop"],
          topics: [
            "Thiết kế logo: concept, sketch, vectorize",
            "Brand Identity: màu sắc, font, visual language",
            "Brand Guideline hoàn chỉnh",
            "Ứng dụng nhận diện: namecard, letterhead, mockup"
          ],
          output: "Logo + Brand Guideline + Bộ nhận diện"
        },
        {
          code: "S", label: "Career Kickstart", name: "Illustrator & Career Kickstart",
          desc: "Illustration, portfolio Behance, mock interview",
          duration: "2 tháng", sessions: "16 buổi",
          tools: ["Adobe Illustrator", "Behance", "Portfolio"],
          topics: [
            "Illustration chuyên sâu: vector, character",
            "Portfolio Behance chuẩn ngành",
            "Dự án chiến dịch truyền thông hoàn chỉnh",
            "CV designer + Mock interview + Freelance"
          ],
          output: "Behance Portfolio + CV + Giới thiệu việc làm"
        }
      ]
    },
    ai: {
      id: "ai",
      name: "AI",
      icon: "🤖",
      color: "#111827",
      colorLight: "#F3F4F6",
      duration: "19 buổi",
      sessions: "19 buổi",
      tagline: "Ứng dụng AI để tăng tốc công việc — không cần kỹ thuật",
      target: "Bất kỳ ai muốn dùng AI hiệu quả trong công việc",
      levels: [
        {
          code: "B", label: "Basic", name: "AI for Work",
          desc: "Ứng dụng AI cho email, báo cáo, slide, kế hoạch",
          duration: "7 buổi", sessions: "7 buổi",
          tools: ["ChatGPT", "Notion AI", "SlidesAI", "Canva AI"],
          topics: [
            "Hiểu AI và cách sử dụng prompt hiệu quả",
            "Tạo báo cáo, email, đề xuất bằng AI",
            "Tạo slide thuyết trình tự động",
            "System prompt & workflow tự động hóa"
          ],
          output: "Report + Slide + Email mẫu + Workflow AI"
        },
        {
          code: "A", label: "Advanced", name: "AI for Spreadsheet",
          desc: "AI hỗ trợ phân tích dữ liệu, tự động hóa bảng tính",
          duration: "12 buổi", sessions: "12 buổi",
          tools: ["Google Sheets AI", "Excel AI", "ChatGPT"],
          topics: [
            "AI tự động hóa công thức & macro",
            "Phân tích dữ liệu bằng AI assistant",
            "Tạo dashboard & báo cáo tự động",
            "Tích hợp AI vào quy trình làm việc"
          ],
          output: "Dashboard tự động + Bộ template AI"
        }
      ]
    }
  };

  var courseOrder = ["coding", "data", "itba", "uiux", "marketing", "design", "ai"];

  // ===== SALES FLOW DATA =====
  var salesData = {
    coding: {
      slides: [
        { type: "hero", title: "Lập trình Web —\nNghề <span>hot nhất</span> thời đại số", sub: "Từ zero đến Junior Developer trong 8 tháng, cam kết việc làm tại 200+ doanh nghiệp đối tác." },
        { type: "stats", title: "Thị trường <span>cần bạn</span>", stats: [
          { num: "700.000", label: "lao động IT Việt Nam\ncần bổ sung đến 2025", src: "B-Company" },
          { num: "43.2 triệu", label: "lương trung bình IT/tháng\ntại Việt Nam", src: "ITviec 2025" },
          { num: "45%", label: "JD tuyển dụng\nlà lập trình viên web", src: "TopDev" }
        ]},
        { type: "audience", title: "Ai nên học <span>XCareer Coding?</span>", cards: [
          { icon: "🎓", title: "Sinh viên IT", desc: "Thiếu kỹ năng thực tế, cần project & portfolio để apply việc ngay khi ra trường" },
          { icon: "🔄", title: "Người chuyển ngành", desc: "Từ Kinh tế, Điện tử, bất kỳ ngành nào — muốn vào IT với lộ trình bài bản" },
          { icon: "📈", title: "Người đi làm upskill", desc: "Đã có việc, muốn nâng lương hoặc chuyển sang vị trí Developer" },
          { icon: "💼", title: "Freelancer", desc: "Muốn nhận dự án web freelance, xây dựng nguồn thu nhập thêm" }
        ]},
        { type: "levels", title: "Lộ trình 4 cấp độ <span>B → A → I → S</span>" },
        { type: "output", title: "Sản phẩm <span>đầu ra</span>", items: [
          { icon: "🌐", title: "Website hoàn chỉnh", desc: "Fullstack web app MERN với front-end React + back-end Node.js" },
          { icon: "📁", title: "GitHub Portfolio", desc: "5+ projects trên GitHub, code chuẩn, có README chuyên nghiệp" },
          { icon: "👥", title: "Dự án nhóm Agile", desc: "Làm việc nhóm với Scrum, mô phỏng môi trường doanh nghiệp thật" },
          { icon: "📄", title: "CV & Portfolio Pro", desc: "CV chuẩn IT, portfolio trực tuyến, sẵn sàng apply Junior Dev" }
        ]},
        { type: "method", title: "Phương pháp <span>On Job Training</span>", items: [
          { icon: "⚡", title: "50%+ thực hành", desc: "Mỗi buổi: 50% lý thuyết, 50% code thực tế — không chỉ nghe giảng" },
          { icon: "👨‍🏫", title: "Mentor kèm", desc: "Lớp 10-15 học viên, mentor review code trực tiếp" },
          { icon: "🔄", title: "Dự án thật", desc: "Project cuối mỗi kỳ, demo trước hội đồng, feedback chi tiết" },
          { icon: "🤖", title: "Tích hợp AI", desc: "Sử dụng AI hỗ trợ viết code, debug, tối ưu quy trình" }
        ]},
        { type: "commitment", title: "Cam kết <span>hỗ trợ việc làm</span>", items: [
          { icon: "🤝", title: "200+ đối tác tuyển dụng", desc: "FPT, Viettel, VNG, và nhiều công ty quốc tế" },
          { icon: "📋", title: "Hỗ trợ trọn đời", desc: "Đạt chuẩn đầu ra → được hỗ trợ việc làm không giới hạn thời gian" },
          { icon: "💼", title: "Mock Interview", desc: "Giả lập phỏng vấn kỹ thuật, feedback chi tiết từ chuyên gia" },
          { icon: "🌏", title: "Cơ hội quốc tế", desc: "Alumni đã làm việc tại Singapore, Google, các công ty đa quốc gia" }
        ]},
        { type: "brand" },
        { type: "cta", title: "Bắt đầu hành trình\ntrở thành Developer", sub: "Đăng ký tư vấn miễn phí — tìm hiểu lộ trình phù hợp với bạn.", btn: "Đăng ký tư vấn ngay" }
      ]
    },
    data: {
      slides: [
        { type: "hero", title: "Data Analyst —\nNghề <span>dẫn dắt</span> mọi quyết định", sub: "Phân tích dữ liệu từ Excel đến Python, trở thành DA trong 8 tháng." },
        { type: "stats", title: "Data đang <span>thay đổi</span> mọi ngành", stats: [
          { num: "31.3 triệu", label: "lương trung bình DA/tháng\n(5.5 năm kinh nghiệm)", src: "ITviec 2025" },
          { num: "44.1 triệu", label: "lương Data Engineer/tháng\n(6 năm kinh nghiệm)", src: "ITviec 2025" },
          { num: "+33.5%", label: "tăng trưởng việc làm\nData Scientist toàn cầu", src: "BLS" }
        ]},
        { type: "audience", title: "Ai nên học <span>Data Analyst?</span>", cards: [
          { icon: "🎓", title: "Sinh viên", desc: "Muốn có skill phân tích dữ liệu — lợi thế cạnh tranh ở mọi ngành" },
          { icon: "🔄", title: "Người chuyển ngành", desc: "Từ kế toán, marketing, kinh doanh — data là cầu nối tuyệt vời" },
          { icon: "📈", title: "Người đi làm", desc: "Muốn ra quyết định bằng dữ liệu, tăng giá trị bản thân" },
          { icon: "🤖", title: "Yêu thích AI", desc: "Data là nền tảng của AI — muốn hiểu sâu Machine Learning" }
        ]},
        { type: "levels", title: "Lộ trình 4 cấp độ <span>B → A → I → S</span>" },
        { type: "output", title: "Sản phẩm <span>đầu ra</span>", items: [
          { icon: "📊", title: "Dashboard Power BI", desc: "Dashboard trực quan hóa dữ liệu kinh doanh chuyên nghiệp" },
          { icon: "🐍", title: "Dự án Python", desc: "EDA + ML model phân tích dữ liệu thực tế" },
          { icon: "📋", title: "Báo cáo phân tích", desc: "Insight report chuyên nghiệp từ dữ liệu doanh nghiệp" },
          { icon: "📁", title: "Portfolio DA", desc: "Portfolio Data Analyst hoàn chỉnh trên GitHub" }
        ]},
        { type: "method", title: "Phương pháp <span>On Job Training</span>", items: [
          { icon: "⚡", title: "50%+ thực hành", desc: "Mỗi buổi: 50% lý thuyết, 50% thực hành với dữ liệu thật" },
          { icon: "👨‍🏫", title: "Mentor kèm", desc: "Lớp 10-15 HV, mentor review trực tiếp" },
          { icon: "🔄", title: "Dữ liệu thật", desc: "Làm việc với dataset thực tế từ doanh nghiệp" },
          { icon: "🤖", title: "AI Analytics", desc: "SQL Assistant, AI phân tích — công cụ mới nhất" }
        ]},
        { type: "commitment", title: "Cam kết <span>hỗ trợ việc làm</span>", items: [
          { icon: "🤝", title: "200+ đối tác", desc: "Fintech, Banking, E-commerce — nơi cần DA nhất" },
          { icon: "📋", title: "Hỗ trợ trọn đời", desc: "Đạt chuẩn đầu ra → hỗ trợ việc làm vĩnh viễn" },
          { icon: "💼", title: "Demo Day", desc: "Trình bày dự án trước doanh nghiệp — cơ hội nhận offer" },
          { icon: "📈", title: "Lương khởi điểm", desc: "12.5-23.5 triệu/tháng cho Junior DA" }
        ]},
        { type: "brand" },
        { type: "cta", title: "Bắt đầu hành trình\ntrở thành Data Analyst", sub: "Đăng ký tư vấn miễn phí — khám phá tiềm năng dữ liệu.", btn: "Đăng ký tư vấn ngay" }
      ]
    },
    uiux: {
      slides: [
        { type: "hero", title: "UI/UX Designer —\nNghề <span>sáng tạo</span> thời đại số", sub: "Thiết kế trải nghiệm người dùng, từ zero đến portfolio chuyên nghiệp trong 8 tháng." },
        { type: "stats", title: "Design đang <span>bùng nổ</span>", stats: [
          { num: "34.6 triệu", label: "lương trung bình Designer/tháng\n(6.5 năm KN)", src: "ITviec 2025" },
          { num: "+15%/năm", label: "tăng trưởng nhu cầu\nUX Designer 2025", src: "TopDev" },
          { num: "60 triệu", label: "lương Lead/Principal\nDesigner top", src: "Telos Academy" }
        ]},
        { type: "audience", title: "Ai nên học <span>UI/UX Design?</span>", cards: [
          { icon: "🎓", title: "Sinh viên", desc: "Không chuyên thiết kế, muốn vào ngành Product/UX" },
          { icon: "🔄", title: "Người chuyển ngành", desc: "Từ marketing, kinh doanh, kỹ thuật — UX chào đón mọi background" },
          { icon: "🖌️", title: "Graphic Designer", desc: "Đã biết thiết kế, muốn chuyển sang UX/UI — lương cao hơn" },
          { icon: "💡", title: "Product people", desc: "PM, BA muốn hiểu Design Thinking & Product Design" }
        ]},
        { type: "levels", title: "Lộ trình 4 cấp độ <span>B → A → I → S</span>" },
        { type: "output", title: "Sản phẩm <span>đầu ra</span>", items: [
          { icon: "📱", title: "UI Screens", desc: "15-20 screens hoàn chỉnh trên Figma (web + mobile)" },
          { icon: "🔬", title: "UX Research", desc: "Case Study UX Research có Persona, Journey Map" },
          { icon: "🎯", title: "Prototype", desc: "Interactive Prototype có thể click-through thực tế" },
          { icon: "📁", title: "Portfolio", desc: "Portfolio UX/UI chuyên nghiệp, sẵn sàng apply" }
        ]},
        { type: "method", title: "Phương pháp <span>học qua dự án</span>", items: [
          { icon: "⚡", title: "Learning by Doing", desc: "Mỗi kỳ kết thúc bằng 1 project thực tế có thể showcase" },
          { icon: "👨‍🏫", title: "Mentor designer", desc: "Mentor là designer đang làm việc tại doanh nghiệp" },
          { icon: "🛠️", title: "Figma 100%", desc: "Công cụ #1 ngành — thành thạo Figma từ đầu" },
          { icon: "🎯", title: "Real brief", desc: "Đề bài từ doanh nghiệp thật ở kỳ Career Kickstart" }
        ]},
        { type: "commitment", title: "Cam kết <span>hỗ trợ việc làm</span>", items: [
          { icon: "🤝", title: "Đối tác tuyển dụng", desc: "Fintech, E-commerce, Startup — nơi cần UX nhất" },
          { icon: "📋", title: "Hỗ trợ trọn đời", desc: "Career Team hỗ trợ việc làm không giới hạn" },
          { icon: "💼", title: "Portfolio Review", desc: "Senior Designer review portfolio trước khi apply" },
          { icon: "🌏", title: "Cộng đồng", desc: "35.000+ thành viên cộng đồng MindX networking" }
        ]},
        { type: "brand" },
        { type: "cta", title: "Bắt đầu hành trình\ntrở thành UX/UI Designer", sub: "Đăng ký tư vấn miễn phí — khám phá tiềm năng sáng tạo.", btn: "Đăng ký tư vấn ngay" }
      ]
    }
  };

  // ===== HELPERS =====
  function el(tag, cls) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }

  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  // ===== RENDER OVERVIEW =====
  function renderOverview() {
    var canvas = document.getElementById("roadmapCanvas");
    if (!canvas) return;
    canvas.innerHTML = "";
    var wrap = el("div", "x18-overview");

    // Hero
    wrap.innerHTML =
      '<div class="x18-hero">' +
        '<img src="./mindx-logo.png" alt="MindX" class="x18-hero-logo">' +
        '<div class="x18-hero-title">MindX Technology School<br>Cho <span>Sinh viên & Người đi làm</span></div>' +
        '<div class="x18-hero-sub">Chuyển ngành · Upskill · Tăng lương · Freelance — Lộ trình bài bản, cam kết việc làm</div>' +
      '</div>' +

      '<div class="x18-stats-row">' +
        '<div class="x18-stat-card"><div class="x18-stat-number">80.000+</div><div class="x18-stat-label">Học viên tích lũy</div></div>' +
        '<div class="x18-stat-card"><div class="x18-stat-number">200+</div><div class="x18-stat-label">Đối tác doanh nghiệp</div></div>' +
        '<div class="x18-stat-card"><div class="x18-stat-number">40+</div><div class="x18-stat-label">Cơ sở toàn quốc</div></div>' +
        '<div class="x18-stat-card"><div class="x18-stat-number">11 năm</div><div class="x18-stat-label">Kinh nghiệm đào tạo</div></div>' +
      '</div>' +

      '<div class="x18-section-title">7 Bộ môn đào tạo</div>';

    // Course grid
    var grid = el("div", "x18-courses-grid");
    courseOrder.forEach(function (key) {
      var c = courses[key];
      var card = el("div", "x18-course-card");
      card.style.cssText = "border-color:" + c.color + "20";
      card.innerHTML =
        '<div style="position:absolute;top:0;left:0;right:0;height:4px;background:' + c.color + '"></div>' +
        '<div class="x18-course-card-icon">' + c.icon + '</div>' +
        '<div class="x18-course-card-name">' + esc(c.name) + '</div>' +
        '<div class="x18-course-card-desc">' + esc(c.tagline) + '</div>' +
        '<div class="x18-course-card-meta">' +
          '<span class="x18-course-card-tag">' + c.levels.length + ' cấp độ</span>' +
          '<span class="x18-course-card-tag">' + esc(c.duration) + '</span>' +
        '</div>';
      card.addEventListener("click", function () { activateCourse(key); });
      grid.appendChild(card);
    });
    wrap.appendChild(grid);

    // USPs
    var uspTitle = el("div", "x18-section-title");
    uspTitle.textContent = "Tại sao chọn MindX?";
    wrap.appendChild(uspTitle);
    var uspRow = el("div", "x18-usp-row");
    var usps = [
      { icon: "💼", title: "Cam kết việc làm", desc: "Hỗ trợ việc làm trọn đời sau khi đạt chuẩn đầu ra, 200+ đối tác tuyển dụng" },
      { icon: "⚡", title: "On Job Training", desc: "50%+ thời gian thực hành, dự án thực tế từ doanh nghiệp" },
      { icon: "👨‍🏫", title: "Mentor kèm sát", desc: "Lớp 10-15 học viên, mentor review trực tiếp, feedback chi tiết" },
      { icon: "🤖", title: "AI tích hợp", desc: "Sử dụng AI tools mới nhất trong quy trình học tập" }
    ];
    usps.forEach(function (u) {
      var card = el("div", "x18-usp-card");
      card.innerHTML =
        '<div class="x18-usp-icon">' + u.icon + '</div>' +
        '<div class="x18-usp-title">' + esc(u.title) + '</div>' +
        '<div class="x18-usp-desc">' + esc(u.desc) + '</div>';
      uspRow.appendChild(card);
    });
    wrap.appendChild(uspRow);

    canvas.appendChild(wrap);

    // Hide pricing
    var ps = document.getElementById("pricingSection");
    if (ps) ps.style.display = "none";
  }

  // ===== RENDER ROADMAP for a course =====
  function renderRoadmap(key) {
    var c = courses[key];
    if (!c) return;
    var canvas = document.getElementById("roadmapCanvas");
    if (!canvas) return;
    canvas.innerHTML = "";

    var wrap = el("div", "x18-roadmap");

    // Header
    var header = el("div", "x18-roadmap-header");
    header.style.background = "linear-gradient(135deg, " + c.color + " 0%, " + c.color + "CC 100%)";
    header.innerHTML =
      '<div class="x18-roadmap-header-title">' + c.icon + ' ' + esc(c.name) + '</div>' +
      '<div class="x18-roadmap-header-sub">' + esc(c.tagline) + '</div>' +
      '<div class="x18-roadmap-header-meta">' +
        '<span>⏱ ' + esc(c.duration) + '</span>' +
        '<span>📚 ' + esc(c.sessions) + '</span>' +
        '<span>👤 ' + esc(c.target) + '</span>' +
      '</div>';
    wrap.appendChild(header);

    // Staircase
    var staircase = el("div", "x18-staircase");
    c.levels.forEach(function (lv, i) {
      // Step height: each level is taller
      var unit = el("div", "x18-stair-unit");
      unit.style.marginBottom = (i * 30) + "px";

      // Label
      var label = el("div", "x18-stair-label");
      label.style.background = c.color + "15";
      label.style.color = c.color;
      label.textContent = lv.label;
      unit.appendChild(label);

      // Node
      var node = el("div", "x18-stair-node");
      node.style.borderColor = c.color + "40";
      node.innerHTML =
        '<div class="x18-stair-node-level" style="background:' + c.color + '15;color:' + c.color + '">' + esc(lv.code) + '</div>' +
        '<div class="x18-stair-node-name">' + esc(lv.name) + '</div>' +
        '<div class="x18-stair-node-desc">' + esc(lv.desc) + '</div>' +
        '<div class="x18-stair-node-meta">' +
          '<span class="x18-stair-node-tag">' + esc(lv.duration) + '</span>' +
          '<span class="x18-stair-node-tag">' + esc(lv.sessions) + '</span>' +
        '</div>';
      node.addEventListener("click", function () { showLevelPopup(c, lv); });
      unit.appendChild(node);
      staircase.appendChild(unit);

      // Connector
      if (i < c.levels.length - 1) {
        var conn = el("div", "x18-stair-connector");
        conn.innerHTML = '<div class="x18-stair-connector-line" style="background:' + c.color + '"></div>';
        staircase.appendChild(conn);
      }
    });
    wrap.appendChild(staircase);

    // Info cards
    var info = el("div", "x18-roadmap-info");

    // Target audience
    var targetCard = el("div", "x18-info-card");
    targetCard.innerHTML =
      '<h4>🎯 Đối tượng phù hợp</h4>' +
      '<p>' + esc(c.target) + '</p>';
    info.appendChild(targetCard);

    // Output summary
    var outputCard = el("div", "x18-info-card");
    var outputHtml = '<h4>📦 Sản phẩm đầu ra sau toàn bộ lộ trình</h4><ul>';
    c.levels.forEach(function (lv) {
      outputHtml += '<li><strong>' + esc(lv.code) + ':</strong> ' + esc(lv.output) + '</li>';
    });
    outputHtml += '</ul>';
    outputCard.innerHTML = outputHtml;
    info.appendChild(outputCard);

    wrap.appendChild(info);

    // Sales flow trigger (only for 3 main courses)
    if (salesData[key]) {
      var trigger = el("button", "x18-sales-trigger");
      trigger.innerHTML = "🎯 Xem Sales Flow chi tiết — " + esc(c.name);
      trigger.addEventListener("click", function () { openSalesFlow(key); });
      wrap.appendChild(trigger);
    }

    canvas.appendChild(wrap);

    // Hide pricing
    var ps = document.getElementById("pricingSection");
    if (ps) ps.style.display = "none";
  }

  // ===== LEVEL POPUP =====
  function showLevelPopup(course, level) {
    // Remove existing
    var existing = document.querySelector(".x18-popup-overlay");
    if (existing) existing.remove();

    var overlay = el("div", "x18-popup-overlay");
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) overlay.remove();
    });

    var popup = el("div", "x18-popup");

    // Header
    var headerDiv = el("div", "x18-popup-header");
    headerDiv.style.background = "linear-gradient(135deg, " + course.color + " 0%, " + course.color + "CC 100%)";
    headerDiv.innerHTML =
      '<div>' +
        '<h3>' + esc(level.name) + '</h3>' +
        '<div class="x18-popup-level">' + esc(level.code) + ' — ' + esc(level.label) + ' · ' + esc(level.duration) + ' · ' + esc(level.sessions) + '</div>' +
      '</div>' +
      '<button class="x18-popup-close">✕</button>';

    var body = el("div", "x18-popup-body");

    // Description
    body.innerHTML =
      '<div class="x18-popup-section">' +
        '<h4>📝 Mô tả</h4>' +
        '<p>' + esc(level.desc) + '</p>' +
      '</div>';

    // Topics
    var topicsHtml = '<div class="x18-popup-section"><h4>📚 Nội dung chính</h4><ul>';
    level.topics.forEach(function (t) { topicsHtml += '<li>' + esc(t) + '</li>'; });
    topicsHtml += '</ul></div>';
    body.innerHTML += topicsHtml;

    // Tools
    var toolsHtml = '<div class="x18-popup-section"><h4>🛠️ Công cụ sử dụng</h4><div class="x18-popup-tools">';
    level.tools.forEach(function (t) {
      toolsHtml += '<span class="x18-popup-tool-tag">' + esc(t) + '</span>';
    });
    toolsHtml += '</div></div>';
    body.innerHTML += toolsHtml;

    // Output
    body.innerHTML +=
      '<div class="x18-popup-section">' +
        '<h4>🎯 Sản phẩm đầu ra</h4>' +
        '<div class="x18-popup-output-box"><p>' + esc(level.output) + '</p></div>' +
      '</div>';

    popup.appendChild(headerDiv);
    popup.appendChild(body);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    popup.querySelector(".x18-popup-close").addEventListener("click", function () {
      overlay.remove();
    });
  }

  // ===== SALES FLOW =====
  var salesContainer = null;
  var salesCurrentSlide = 0;
  var salesTotalSlides = 0;
  var salesActiveKey = null;

  function openSalesFlow(key) {
    var sd = salesData[key];
    if (!sd) return;
    salesActiveKey = key;
    salesCurrentSlide = 0;
    salesTotalSlides = sd.slides.length;

    if (salesContainer) salesContainer.remove();
    salesContainer = el("div", "x18-sales");
    salesContainer.id = "x18SalesFlow";

    // Exit button
    var exitBtn = el("button", "x18-sales-exit");
    exitBtn.textContent = "✕ Thoát";
    exitBtn.addEventListener("click", closeSalesFlow);

    // Slides
    var slidesWrap = el("div", "x18-sales-slides");
    sd.slides.forEach(function (s, i) {
      var slide = buildSalesSlide(s, key);
      slide.setAttribute("data-slide", i);
      if (i === 0) slide.classList.add("active");
      slidesWrap.appendChild(slide);
    });

    // Nav
    var nav = el("div", "x18-sales-nav");
    var prevBtn = el("button", "x18-sales-nav-btn");
    prevBtn.id = "x18SalesPrev";
    prevBtn.textContent = "← Quay lại";
    prevBtn.disabled = true;
    prevBtn.addEventListener("click", function () { salesGoTo(salesCurrentSlide - 1); });

    var dots = el("div", "x18-sales-dots");
    dots.id = "x18SalesDots";
    for (var i = 0; i < salesTotalSlides; i++) {
      var dot = el("button", "x18-sales-dot" + (i === 0 ? " active" : ""));
      dot.setAttribute("data-i", i);
      dot.addEventListener("click", function () {
        salesGoTo(parseInt(this.getAttribute("data-i")));
      });
      dots.appendChild(dot);
    }

    var nextBtn = el("button", "x18-sales-nav-btn primary");
    nextBtn.id = "x18SalesNext";
    nextBtn.textContent = "Tiếp theo →";
    nextBtn.addEventListener("click", function () {
      if (salesCurrentSlide === salesTotalSlides - 1) closeSalesFlow();
      else salesGoTo(salesCurrentSlide + 1);
    });

    nav.appendChild(prevBtn);
    nav.appendChild(dots);
    nav.appendChild(nextBtn);

    salesContainer.appendChild(exitBtn);
    salesContainer.appendChild(slidesWrap);
    salesContainer.appendChild(nav);
    document.body.appendChild(salesContainer);

    // Activate
    requestAnimationFrame(function () {
      salesContainer.classList.add("active");
    });

    // Keyboard
    document.addEventListener("keydown", salesKeyHandler);
  }

  function closeSalesFlow() {
    if (salesContainer) {
      salesContainer.classList.remove("active");
      setTimeout(function () {
        if (salesContainer) { salesContainer.remove(); salesContainer = null; }
      }, 300);
    }
    document.removeEventListener("keydown", salesKeyHandler);
  }

  function salesKeyHandler(e) {
    if (!salesContainer) return;
    if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); salesGoTo(salesCurrentSlide + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); salesGoTo(salesCurrentSlide - 1); }
    if (e.key === "Escape") closeSalesFlow();
  }

  function salesGoTo(index) {
    if (index < 0 || index >= salesTotalSlides || index === salesCurrentSlide) return;
    var slides = salesContainer.querySelectorAll(".x18-sales-slide");
    var dots = salesContainer.querySelectorAll(".x18-sales-dot");

    slides.forEach(function (s) { s.classList.remove("active"); });
    salesCurrentSlide = index;
    slides[salesCurrentSlide].classList.add("active");

    dots.forEach(function (d, i) { d.classList.toggle("active", i === salesCurrentSlide); });

    var prev = document.getElementById("x18SalesPrev");
    var next = document.getElementById("x18SalesNext");
    if (prev) prev.disabled = salesCurrentSlide === 0;
    if (next) next.textContent = salesCurrentSlide === salesTotalSlides - 1 ? "✓ Hoàn thành" : "Tiếp theo →";
  }

  function buildSalesSlide(data, key) {
    var s = el("div", "x18-sales-slide");
    var c = courses[key];

    switch (data.type) {
      case "hero":
        s.innerHTML =
          '<div class="x18-s-hero">' +
            '<img src="./mindx-logo.png" alt="MindX" style="height:30px;margin-bottom:16px">' +
            '<h1>' + data.title.replace(/\n/g, '<br>') + '</h1>' +
            '<p>' + esc(data.sub) + '</p>' +
          '</div>';
        break;

      case "stats":
        var statsHtml = '<div class="x18-s-title">' + data.title + '</div><div class="x18-s-stats">';
        data.stats.forEach(function (st) {
          statsHtml += '<div class="x18-s-stat">' +
            '<div class="x18-s-stat-num">' + esc(st.num) + '</div>' +
            '<div class="x18-s-stat-label">' + st.label.replace(/\n/g, '<br>') + '</div>' +
            (st.src ? '<div class="x18-s-stat-src">' + esc(st.src) + '</div>' : '') +
          '</div>';
        });
        statsHtml += '</div>';
        s.innerHTML = statsHtml;
        break;

      case "audience":
        var aHtml = '<div class="x18-s-title">' + data.title + '</div><div class="x18-s-cards">';
        data.cards.forEach(function (card) {
          aHtml += '<div class="x18-s-card">' +
            '<div class="x18-s-card-icon">' + card.icon + '</div>' +
            '<h4>' + esc(card.title) + '</h4>' +
            '<p>' + esc(card.desc) + '</p>' +
          '</div>';
        });
        aHtml += '</div>';
        s.innerHTML = aHtml;
        break;

      case "levels":
        var lHtml = '<div class="x18-s-title">' + data.title + '</div><div class="x18-s-levels">';
        c.levels.forEach(function (lv, i) {
          var opacity = 0.6 + (i * 0.13);
          lHtml += '<div class="x18-s-level" style="background:' + c.color + ';opacity:' + opacity + ';min-height:' + (100 + i * 20) + 'px">' +
            '<div class="x18-s-level-badge">' + esc(lv.code) + ' — ' + esc(lv.label) + '</div>' +
            '<div class="x18-s-level-name">' + esc(lv.name) + '</div>' +
            '<div class="x18-s-level-meta">' + esc(lv.duration) + ' · ' + esc(lv.sessions) + '</div>' +
          '</div>';
        });
        lHtml += '</div>';
        s.innerHTML = lHtml;
        break;

      case "output":
        var oHtml = '<div class="x18-s-title">' + data.title + '</div><div class="x18-s-list-grid">';
        data.items.forEach(function (item) {
          oHtml += '<div class="x18-s-list-item">' +
            '<div class="x18-s-list-item-icon">' + item.icon + '</div>' +
            '<div><h5>' + esc(item.title) + '</h5><p>' + esc(item.desc) + '</p></div>' +
          '</div>';
        });
        oHtml += '</div>';
        s.innerHTML = oHtml;
        break;

      case "method":
        var mHtml = '<div class="x18-s-title">' + data.title + '</div><div class="x18-s-list-grid">';
        data.items.forEach(function (item) {
          mHtml += '<div class="x18-s-list-item">' +
            '<div class="x18-s-list-item-icon">' + item.icon + '</div>' +
            '<div><h5>' + esc(item.title) + '</h5><p>' + esc(item.desc) + '</p></div>' +
          '</div>';
        });
        mHtml += '</div>';
        s.innerHTML = mHtml;
        break;

      case "commitment":
        var cHtml = '<div class="x18-s-title">' + data.title + '</div><div class="x18-s-list-grid">';
        data.items.forEach(function (item) {
          cHtml += '<div class="x18-s-list-item">' +
            '<div class="x18-s-list-item-icon">' + item.icon + '</div>' +
            '<div><h5>' + esc(item.title) + '</h5><p>' + esc(item.desc) + '</p></div>' +
          '</div>';
        });
        cHtml += '</div>';
        s.innerHTML = cHtml;
        break;

      case "brand":
        s.innerHTML =
          '<div class="x18-s-title">Tại sao chọn <span>MindX?</span></div>' +
          '<div class="x18-s-brand-stats">' +
            '<div class="x18-s-brand-stat"><div class="x18-s-brand-stat-num">11 năm</div><div class="x18-s-brand-stat-label">Kinh nghiệm đào tạo</div></div>' +
            '<div class="x18-s-brand-stat"><div class="x18-s-brand-stat-num">80.000+</div><div class="x18-s-brand-stat-label">Học viên tích lũy</div></div>' +
            '<div class="x18-s-brand-stat"><div class="x18-s-brand-stat-num">200+</div><div class="x18-s-brand-stat-label">Đối tác doanh nghiệp</div></div>' +
            '<div class="x18-s-brand-stat"><div class="x18-s-brand-stat-num">35.000+</div><div class="x18-s-brand-stat-label">Cộng đồng thành viên</div></div>' +
          '</div>' +
          '<div class="x18-s-quote">"Nếu không có MindX, chắc mình sẽ chẳng có cơ hội nghĩ đến việc tìm được việc làm bên Sing"<br><span>— Gia Khánh, từ Điện tử → Fullstack Dev tại Singapore</span></div>';
        break;

      case "cta":
        s.innerHTML =
          '<div class="x18-s-cta">' +
            '<h2>' + data.title.replace(/\n/g, '<br>') + '</h2>' +
            '<p>' + esc(data.sub) + '</p>' +
            '<button class="x18-s-cta-btn" onclick="window.open(\'https://mindx.edu.vn\',\'_blank\')">' + esc(data.btn) + ' →</button>' +
          '</div>';
        break;
    }
    return s;
  }

  // ===== SIDEBAR INTEGRATION =====
  var x18MenuItems = [
    { key: "x18-overview", label: "Tổng quan", icon: "📋" },
    { key: "x18-coding", label: "Coding", icon: "💻" },
    { key: "x18-data", label: "Data", icon: "📊" },
    { key: "x18-itba", label: "ITBA", icon: "📋" },
    { key: "x18-uiux", label: "UI/UX", icon: "🎨" },
    { key: "x18-marketing", label: "Marketing", icon: "📢" },
    { key: "x18-design", label: "Design", icon: "🖌️" },
    { key: "x18-ai", label: "AI", icon: "🤖" }
  ];

  var titleMap = {
    "x18-overview": "18+ — Tổng quan",
    "x18-coding": "18+ — XCareer Coding",
    "x18-data": "18+ — AI-Data Analyst",
    "x18-itba": "18+ — IT Business Analyst",
    "x18-uiux": "18+ — UI/UX Designer",
    "x18-marketing": "18+ — Fullstack Marketing",
    "x18-design": "18+ — Graphic Designer",
    "x18-ai": "18+ — AI"
  };

  function activateCourse(courseKey) {
    var menuKey = "x18-" + courseKey;
    activateX18(menuKey);
    // Update sidebar active state
    document.querySelectorAll(".nav-x18-item").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-x18") === menuKey);
    });
    // Deactivate K12 + old 18+
    document.querySelectorAll(".nav-item").forEach(function (btn) { btn.classList.remove("active"); });
    document.querySelectorAll(".nav-xmember, .nav-xart, .nav-xmember2").forEach(function (btn) { btn.classList.remove("active"); });
  }

  function activateX18(key) {
    // Update title
    var pageTitle = document.getElementById("pageTitle");
    if (pageTitle) pageTitle.textContent = titleMap[key] || "18+";

    // Render content
    if (key === "x18-overview") {
      renderOverview();
    } else {
      var courseKey = key.replace("x18-", "");
      renderRoadmap(courseKey);
    }

    // Update sidebar
    document.querySelectorAll(".nav-x18-item").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-x18") === key);
    });
    // Deactivate K12 nav items
    document.querySelectorAll(".nav-item").forEach(function (btn) { btn.classList.remove("active"); });
    // Deactivate old X buttons
    document.querySelectorAll(".nav-xmember, .nav-xart, .nav-xmember2").forEach(function (btn) { btn.classList.remove("active"); });
  }

  // Build sidebar section
  function buildSidebar() {
    var nav = document.querySelector(".sidebar-nav");
    if (!nav) return;

    // Find insertion point: after Du học button
    var duhocBtn = document.getElementById("xmember2Btn");
    var insertBefore = null;
    if (duhocBtn) {
      insertBefore = duhocBtn.nextSibling;
    }

    // Divider
    var divider = el("div", "nav-x18-divider");
    nav.insertBefore(divider, insertBefore);

    // Section label
    var label = el("div", "nav-section-label nav-section-18plus-new");
    label.innerHTML = '18+ <span class="nav-18plus-badge">NEW</span>';
    nav.insertBefore(label, insertBefore);

    // Menu items
    x18MenuItems.forEach(function (item) {
      var btn = el("button", "nav-x18-item");
      btn.setAttribute("data-x18", item.key);
      btn.innerHTML =
        '<span class="x18-nav-icon">' + item.icon + '</span>' +
        '<span>' + esc(item.label) + '</span>';
      btn.addEventListener("click", function () {
        activateX18(item.key);
      });
      nav.insertBefore(btn, insertBefore);
    });
  }

  // ===== INIT =====
  function init() {
    buildSidebar();

    // Listen for K12 nav clicks to deactivate 18+ items
    document.querySelectorAll(".nav-item[data-roadmap]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        // Deactivate all 18+ nav items
        document.querySelectorAll(".nav-x18-item").forEach(function (b) {
          b.classList.remove("active");
        });
        // Show pricing section again
        var ps = document.getElementById("pricingSection");
        if (ps) ps.style.display = "";
      });
    });

    // Also listen for X-Coding, X-Art, Du học clicks
    ["xmemberBtn", "xartBtn", "xmember2Btn"].forEach(function (id) {
      var btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener("click", function () {
          document.querySelectorAll(".nav-x18-item").forEach(function (b) {
            b.classList.remove("active");
          });
        });
      }
    });
  }

  // Wait for DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for external use
  window.x18plusActivate = activateX18;

})();
