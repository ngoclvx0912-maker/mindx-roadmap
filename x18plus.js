/* x18plus.js — MindX 18+ Module: Roadmap + Overview + Sales Flows */
/* Rewritten: 6 fixes — Data Engineer, Career Outcomes, Sales Flows x7, Pricing, CTA, Career styling */
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
      ],
      pricing: {
        levels: [
          { code: "B", price: "5.000.000" },
          { code: "A", price: "7.000.000" },
          { code: "I", price: "9.000.000" },
          { code: "S", price: "11.000.000" }
        ],
        combo: { name: "Combo X (8 tháng)", original: "32.000.000", discount: "27.200.000", save: "15%" }
      },
      career: {
        positions: [
          { title: "Junior Front-end Developer", hot: true },
          { title: "Junior Full-stack Developer", hot: true },
          { title: "Back-end Developer (NodeJS)", hot: false },
          { title: "Freelance Web Developer", hot: false }
        ],
        salary: [
          { level: "Fresher", range: "7–12 triệu", min: 7, max: 12 },
          { level: "Junior", range: "15–25 triệu", min: 15, max: 25 },
          { level: "Mid-level", range: "25–40 triệu", min: 25, max: 40 },
          { level: "Senior", range: "40–70 triệu", min: 40, max: 70 }
        ],
        growth: "15–20%/năm",
        employers: ["FPT Software", "VNG", "MoMo", "Techcombank", "Shopee Vietnam"],
        source: "ITviec, JDI Group 2025"
      }
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
      ],
      pricing: {
        levels: [
          { code: "B", price: "5.000.000" },
          { code: "A", price: "7.000.000" },
          { code: "I", price: "9.000.000" },
          { code: "S", price: "11.000.000" }
        ],
        combo: { name: "Combo X (8 tháng)", original: "32.000.000", discount: "27.200.000", save: "15%" }
      },
      career: {
        positions: [
          { title: "Data Analyst / BI Analyst", hot: true },
          { title: "Business Intelligence Specialist", hot: true },
          { title: "Data Scientist (Junior)", hot: false },
          { title: "Marketing Analyst", hot: false }
        ],
        salary: [
          { level: "Fresher", range: "8–12 triệu", min: 8, max: 12 },
          { level: "Junior", range: "11–18 triệu", min: 11, max: 18 },
          { level: "Mid-level", range: "20–30 triệu", min: 20, max: 30 },
          { level: "Senior", range: "28–45 triệu", min: 28, max: 45 }
        ],
        growth: "15–25%/năm",
        employers: ["FPT", "Techcombank", "Shopee", "Tiki", "VPBank"],
        source: "ITviec, NodeFlair 2025"
      }
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
      ],
      pricing: {
        levels: [
          { code: "B", price: "5.000.000" },
          { code: "A", price: "7.000.000" },
          { code: "S", price: "11.000.000" }
        ],
        combo: { name: "Combo 3 (6 tháng)", original: "23.000.000", discount: "20.700.000", save: "10%" }
      },
      career: {
        positions: [
          { title: "IT Business Analyst", hot: true },
          { title: "Product Owner / Scrum Master", hot: true },
          { title: "System Analyst", hot: false },
          { title: "Project Manager (IT)", hot: false }
        ],
        salary: [
          { level: "Fresher", range: "8–15 triệu", min: 8, max: 15 },
          { level: "Junior", range: "15–25 triệu", min: 15, max: 25 },
          { level: "Senior BA", range: "30–55 triệu", min: 30, max: 55 },
          { level: "PO/PM", range: "50–75 triệu", min: 50, max: 75 }
        ],
        growth: "20–30%/năm",
        employers: ["Techcombank", "VPBank", "FPT IS", "KMS Technology", "MoMo"],
        source: "ITviec, SmartOSC 2025"
      }
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
      ],
      pricing: {
        levels: [
          { code: "B", price: "5.000.000" },
          { code: "A", price: "7.000.000" },
          { code: "I", price: "9.000.000" },
          { code: "S", price: "11.000.000" }
        ],
        combo: { name: "Combo X (8 tháng)", original: "32.000.000", discount: "27.200.000", save: "15%" }
      },
      career: {
        positions: [
          { title: "UI/UX Designer", hot: true },
          { title: "Product Designer", hot: true },
          { title: "UX Researcher", hot: false },
          { title: "Freelance UI Designer", hot: false }
        ],
        salary: [
          { level: "Fresher", range: "5–10 triệu", min: 5, max: 10 },
          { level: "Junior", range: "10–20 triệu", min: 10, max: 20 },
          { level: "Mid-level", range: "20–30 triệu", min: 20, max: 30 },
          { level: "Senior", range: "30–50 triệu", min: 30, max: 50 }
        ],
        growth: "15–20%/năm",
        employers: ["VNPAY", "MoMo", "Shopee", "Tiki", "VNG"],
        source: "ITviec, Telos Academy 2025"
      }
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
      ],
      pricing: {
        levels: [
          { code: "A1", price: "7.000.000" },
          { code: "A2", price: "7.000.000" },
          { code: "A3", price: "7.000.000" },
          { code: "S", price: "9.000.000" }
        ],
        combo: { name: "Combo X (8 tháng)", original: "30.000.000", discount: "25.500.000", save: "15%" }
      },
      career: {
        positions: [
          { title: "Performance Marketing Specialist", hot: true },
          { title: "Content Marketing / AI Content", hot: true },
          { title: "SEO Specialist", hot: false },
          { title: "Growth Marketer / Marketing Manager", hot: true }
        ],
        salary: [
          { level: "Fresher", range: "8–12 triệu", min: 8, max: 12 },
          { level: "Junior", range: "12–18 triệu", min: 12, max: 18 },
          { level: "Mid-level", range: "18–30 triệu", min: 18, max: 30 },
          { level: "Senior", range: "25–50 triệu", min: 25, max: 50 }
        ],
        growth: "25–40%/năm (có AI)",
        employers: ["Shopee", "TikTok Shop", "Lazada", "Agency lớn", "Startup"],
        source: "TopCV, Robert Walters 2025"
      }
    },
    dataeng: {
      id: "dataeng",
      name: "Data Engineer",
      icon: "🛢️",
      color: "#0EA5E9",
      colorLight: "#F0F9FF",
      duration: "6 tháng",
      sessions: "48 buổi",
      tagline: "Xây dựng hạ tầng dữ liệu — lương cao nhất ngành Data",
      target: "Người có nền tảng kỹ thuật, muốn chuyên sâu Data Engineering",
      levels: [
        {
          code: "B", label: "Basic", name: "Python for Data Engineer",
          desc: "Nền tảng lập trình Python, Flask, xử lý dữ liệu cơ bản",
          duration: "2 tháng", sessions: "16 buổi × 3h",
          tools: ["Python", "Flask", "Pandas", "GenAI"],
          topics: [
            "Python cơ bản: biến, hàm, cấu trúc dữ liệu",
            "Xử lý dữ liệu với Pandas, NumPy",
            "Web Server với Flask, API design",
            "GenAI hỗ trợ viết code và giao diện web"
          ],
          output: "Web App phân tích dữ liệu với Flask + AI"
        },
        {
          code: "A", label: "Advanced", name: "Data Processing & Automation",
          desc: "ETL Pipeline, SQL nâng cao, Airflow, dbt, PySpark",
          duration: "2 tháng", sessions: "16 buổi × 3h",
          tools: ["PostgreSQL", "Apache Airflow", "dbt", "PySpark"],
          topics: [
            "SQL nâng cao: JOIN, CTE, Window Functions",
            "Thiết kế Data Warehouse, Star Schema",
            "Apache Airflow: DAG, scheduling pipeline",
            "PySpark xử lý dữ liệu lớn, Kafka streaming"
          ],
          output: "Smart ETL Pipeline tự động hóa hoàn chỉnh"
        },
        {
          code: "S", label: "Career Kickstart", name: "Cloud-Based DE & Deployment",
          desc: "AWS Cloud, Docker, CI/CD, Data Lake, portfolio",
          duration: "2 tháng", sessions: "16 buổi × 3h",
          tools: ["AWS S3", "Docker", "GitHub Actions", "MongoDB"],
          topics: [
            "Data Lake trên AWS S3, Glue, Redshift",
            "Docker đóng gói pipeline, CI/CD automation",
            "MongoDB & NoSQL Data Modeling",
            "Portfolio DE + CV + Mock interview"
          ],
          output: "Cloud DataOps System + Portfolio DE + CV"
        }
      ],
      pricing: {
        levels: [
          { code: "B", price: "5.000.000" },
          { code: "A", price: "7.000.000" },
          { code: "S", price: "11.000.000" }
        ],
        combo: { name: "Combo 3 (6 tháng)", original: "23.000.000", discount: "20.700.000", save: "10%" }
      },
      career: {
        positions: [
          { title: "Junior Data Engineer", hot: true },
          { title: "ETL Developer / Data Pipeline Engineer", hot: true },
          { title: "Cloud Data Engineer (AWS)", hot: true },
          { title: "Data Architect (Senior path)", hot: false }
        ],
        salary: [
          { level: "Fresher", range: "15–18 triệu", min: 15, max: 18 },
          { level: "Junior", range: "17–22 triệu", min: 17, max: 22 },
          { level: "Mid-level", range: "28–40 triệu", min: 28, max: 40 },
          { level: "Senior", range: "50–70 triệu", min: 50, max: 70 }
        ],
        growth: "20–30%/năm",
        employers: ["Zalo", "FPT Software", "VNG", "Techcombank", "Bosch Vietnam"],
        source: "ITviec, NodeFlair 2025"
      }
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
      ],
      pricing: {
        levels: [
          { code: "B", price: "3.500.000", note: "7 buổi" },
          { code: "A", price: "5.000.000", note: "12 buổi" }
        ],
        combo: { name: "Combo AI", original: "8.500.000", discount: "8.500.000", save: "" }
      },
      career: {
        positions: [
          { title: "AI-Powered Professional (mọi ngành)", hot: true },
          { title: "Prompt Engineer", hot: true },
          { title: "AI Workflow Automation Specialist", hot: false },
          { title: "AI Content / AI Marketing Specialist", hot: false }
        ],
        salary: [
          { level: "Không AI", range: "10–25 triệu", min: 10, max: 25 },
          { level: "Có AI cơ bản", range: "13–33 triệu", min: 13, max: 33 },
          { level: "AI + Automation", range: "20–40 triệu", min: 20, max: 40 },
          { level: "Growth + AI", range: "25–50 triệu", min: 25, max: 50 }
        ],
        growth: "+25–50% thu nhập khi có AI skills",
        employers: ["Mọi ngành nghề", "Tech companies", "Agency", "Remote/Freelance"],
        source: "Swiss Coding, VietSourcing 2025"
      }
    }
  };

  var courseOrder = ["coding", "data", "itba", "uiux", "marketing", "dataeng", "ai"];

  // ===== SALES FLOW DATA (7 bộ môn, 12-14 slides mỗi môn) =====
  var salesData = {
    coding: {
      slides: [
        { type: "hook", title: "Bạn đang <span>mắc kẹt</span> với công việc hiện tại?", sub: "Lương không tăng, công việc lặp lại, không có hướng phát triển rõ ràng?\nĐã đến lúc thay đổi — chỉ cần 8 tháng để bắt đầu sự nghiệp mới.", icon: "😰" },
        { type: "stats", title: "Thị trường IT <span>đang thiếu bạn</span>", stats: [
          { num: "150.000+", label: "lao động IT Việt Nam\ncần bổ sung mỗi năm", src: "InApps 2025" },
          { num: "36.35 triệu", label: "lương trung vị Developer\n(6 năm KN)", src: "ITviec 2025" },
          { num: "58%", label: "doanh nghiệp\ntuyển Full-stack Dev", src: "TopDev 2025" }
        ]},
        { type: "stories", title: "Họ đã <span>thay đổi cuộc đời</span>", stories: [
          { before: "Kế toán", salaryBefore: "10–12tr", after: "Junior Full-stack Dev", salaryAfter: "18–22tr", time: "8 tháng", increase: "+80%" },
          { before: "Kỹ sư cơ khí", salaryBefore: "15–18tr", after: "Mid-level Developer", salaryAfter: "28–35tr", time: "12 tháng", increase: "+70%" },
          { before: "Sales B2B", salaryBefore: "12–15tr", after: "Junior React Dev", salaryAfter: "20–25tr", time: "8 tháng", increase: "+60%" }
        ]},
        { type: "audience", title: "Bạn phù hợp nếu...", cards: [
          { icon: "🎓", title: "Sinh viên IT", desc: "Thiếu kỹ năng thực tế, cần project & portfolio để apply việc ngay khi ra trường" },
          { icon: "🔄", title: "Người chuyển ngành", desc: "Từ Kinh tế, Điện tử, bất kỳ ngành nào — muốn vào IT với lộ trình bài bản" },
          { icon: "📈", title: "Người đi làm upskill", desc: "Đã có việc, muốn nâng lương hoặc chuyển sang vị trí Developer" },
          { icon: "💼", title: "Freelancer", desc: "Muốn nhận dự án web freelance, xây dựng nguồn thu nhập thêm" }
        ]},
        { type: "levels", title: "Lộ trình 4 cấp độ <span>B → A → I → S</span>" },
        { type: "leveldetail", title: "Chi tiết <span>từng level</span>" },
        { type: "career", title: "Cơ hội nghề nghiệp <span>sau tốt nghiệp</span>" },
        { type: "method", title: "Phương pháp <span>On Job Training</span>", items: [
          { icon: "⚡", title: "50%+ thực hành", desc: "Mỗi buổi: 50% lý thuyết, 50% code thực tế — không chỉ nghe giảng" },
          { icon: "👨‍🏫", title: "Mentor kèm 1-1", desc: "Lớp 10-15 học viên, mentor review code trực tiếp từng người" },
          { icon: "🔄", title: "Dự án thật", desc: "Project cuối mỗi kỳ, demo trước hội đồng, feedback chi tiết" },
          { icon: "🤖", title: "Tích hợp AI", desc: "Sử dụng AI hỗ trợ viết code, debug, tối ưu quy trình" }
        ]},
        { type: "brand" },
        { type: "pricing", title: "Học phí <span>đầu tư cho tương lai</span>" },
        { type: "guarantee", title: "Cam kết <span>hỗ trợ việc làm trọn đời</span>", items: [
          { icon: "🤝", title: "200+ đối tác tuyển dụng", desc: "FPT, Viettel, VNG, Techcombank, và nhiều công ty quốc tế" },
          { icon: "📋", title: "Hỗ trợ trọn đời", desc: "Đạt chuẩn đầu ra → được hỗ trợ việc làm không giới hạn thời gian" },
          { icon: "💼", title: "Mock Interview", desc: "Giả lập phỏng vấn kỹ thuật, feedback chi tiết từ chuyên gia" },
          { icon: "🌏", title: "Cơ hội quốc tế", desc: "Alumni đã làm việc tại Singapore, Google, các công ty đa quốc gia" }
        ]},
        { type: "cta" }
      ]
    },
    data: {
      slides: [
        { type: "hook", title: "Ra quyết định bằng <span>cảm tính</span>?\nĐã đến lúc dùng <span>dữ liệu</span>.", sub: "Data Analyst là ngành HOT nhất cho người chuyển ngành vào IT — không cần code nặng, kiến thức domain ngành cũ là lợi thế.", icon: "📊" },
        { type: "stats", title: "Data đang <span>thay đổi</span> mọi ngành", stats: [
          { num: "31.3 triệu", label: "lương trung vị DA/tháng\n(5.5 năm kinh nghiệm)", src: "ITviec 2025" },
          { num: "40.65 triệu", label: "DA 3-4 năm KN\n(ITviec update 2026)", src: "ITviec 2026" },
          { num: "60%", label: "doanh nghiệp mở rộng\nnhân sự Data/AI 2025", src: "ITviec Report" }
        ]},
        { type: "stories", title: "Từ trái ngành → <span>Data Analyst</span>", stories: [
          { before: "Kế toán viên", salaryBefore: "10–15tr", after: "DA Fresher", salaryAfter: "15–20tr", time: "6 tháng", increase: "+40%" },
          { before: "Business Dev", salaryBefore: "15–20tr", after: "DA Junior", salaryAfter: "20–25tr", time: "8 tháng", increase: "+30%" },
          { before: "Kỹ sư khác ngành", salaryBefore: "15–20tr", after: "DA Junior/Mid", salaryAfter: "25–30tr", time: "10 tháng", increase: "+50%" }
        ]},
        { type: "audience", title: "Bạn phù hợp nếu...", cards: [
          { icon: "🎓", title: "Sinh viên", desc: "Muốn có skill phân tích dữ liệu — lợi thế cạnh tranh ở mọi ngành" },
          { icon: "🔄", title: "Người chuyển ngành", desc: "Từ kế toán, marketing, kinh doanh — data là cầu nối tuyệt vời" },
          { icon: "📈", title: "Người đi làm", desc: "Muốn ra quyết định bằng dữ liệu, tăng giá trị bản thân" },
          { icon: "🤖", title: "Yêu thích AI", desc: "Data là nền tảng của AI — muốn hiểu sâu Machine Learning" }
        ]},
        { type: "levels", title: "Lộ trình 4 cấp độ <span>B → A → I → S</span>" },
        { type: "leveldetail", title: "Chi tiết <span>từng level</span>" },
        { type: "career", title: "Cơ hội nghề nghiệp <span>sau tốt nghiệp</span>" },
        { type: "method", title: "Phương pháp <span>On Job Training</span>", items: [
          { icon: "⚡", title: "50%+ thực hành", desc: "Mỗi buổi: 50% lý thuyết, 50% thực hành với dữ liệu thật" },
          { icon: "👨‍🏫", title: "Mentor kèm 1-1", desc: "Lớp 10-15 HV, mentor review trực tiếp từng người" },
          { icon: "🔄", title: "Dữ liệu thật", desc: "Làm việc với dataset thực tế từ doanh nghiệp" },
          { icon: "🤖", title: "AI Analytics", desc: "SQL Assistant, AI phân tích — công cụ mới nhất" }
        ]},
        { type: "brand" },
        { type: "pricing", title: "Học phí <span>đầu tư cho tương lai</span>" },
        { type: "guarantee", title: "Cam kết <span>hỗ trợ việc làm trọn đời</span>", items: [
          { icon: "🤝", title: "200+ đối tác", desc: "Fintech, Banking, E-commerce — nơi cần DA nhất" },
          { icon: "📋", title: "Hỗ trợ trọn đời", desc: "Đạt chuẩn đầu ra → hỗ trợ việc làm vĩnh viễn" },
          { icon: "💼", title: "Demo Day", desc: "Trình bày dự án trước doanh nghiệp — cơ hội nhận offer" },
          { icon: "📈", title: "Lương khởi điểm", desc: "8–15 triệu/tháng cho DA Fresher" }
        ]},
        { type: "cta" }
      ]
    },
    itba: {
      slides: [
        { type: "hook", title: "Muốn vào <span>ngành IT</span>\nnhưng <span>không biết code?</span>", sub: "IT Business Analyst — vị trí cầu nối giữa business và IT. Không cần lập trình, kiến thức ngành cũ là lợi thế cạnh tranh lớn nhất.", icon: "📋" },
        { type: "stats", title: "BA — nghề <span>không biết thừa</span>", stats: [
          { num: "32.4 triệu", label: "lương trung vị BA/tháng\n(6 năm kinh nghiệm)", src: "ITviec 2025" },
          { num: "75+", label: "vị trí BA đang tuyển\ntrên ITviec", src: "ITviec 3/2026" },
          { num: "50.95 triệu", label: "lương Product Owner\n(6 năm KN)", src: "ITviec 2025" }
        ]},
        { type: "stories", title: "Họ đã <span>chuyển ngành thành công</span>", stories: [
          { before: "Nhân viên ngân hàng", salaryBefore: "12–15tr", after: "IT BA (Banking)", salaryAfter: "20–28tr", time: "6 tháng", increase: "+70%" },
          { before: "HR Executive", salaryBefore: "10–14tr", after: "BA Fresher", salaryAfter: "15–20tr", time: "6 tháng", increase: "+50%" },
          { before: "Logistics Coordinator", salaryBefore: "12–18tr", after: "BA (Supply Chain)", salaryAfter: "22–30tr", time: "8 tháng", increase: "+60%" }
        ]},
        { type: "audience", title: "Bạn phù hợp nếu...", cards: [
          { icon: "🏦", title: "Người từ Banking/Finance", desc: "Hiểu nghiệp vụ core banking, payment → rất hot trong IT" },
          { icon: "🔄", title: "Người trái ngành 3-7 năm KN", desc: "Domain knowledge cũ + BA skills = giá trị cực cao" },
          { icon: "📊", title: "Người thích phân tích", desc: "Tư duy logic, thích vẽ sơ đồ, tổ chức quy trình" },
          { icon: "💼", title: "PM/Team Lead", desc: "Muốn chuyển sang Product Owner với lương 50-75tr+" }
        ]},
        { type: "levels", title: "Lộ trình 3 cấp độ <span>B → A → S</span>" },
        { type: "leveldetail", title: "Chi tiết <span>từng level</span>" },
        { type: "career", title: "Cơ hội nghề nghiệp <span>sau tốt nghiệp</span>" },
        { type: "method", title: "Phương pháp <span>On Job Training</span>", items: [
          { icon: "⚡", title: "Dự án thực tế", desc: "Viết BRD, SRS, wireframe cho đề bài từ doanh nghiệp thật" },
          { icon: "👨‍🏫", title: "Mentor BA kèm 1-1", desc: "Mentor là BA đang làm việc tại doanh nghiệp lớn" },
          { icon: "🔄", title: "Không cần code", desc: "Tập trung vào tư duy phân tích, tài liệu, giao tiếp" },
          { icon: "🤖", title: "AI hỗ trợ", desc: "Dùng AI viết user stories, tạo wireframe, phân tích yêu cầu" }
        ]},
        { type: "brand" },
        { type: "pricing", title: "Học phí <span>đầu tư cho tương lai</span>" },
        { type: "guarantee", title: "Cam kết <span>hỗ trợ việc làm trọn đời</span>", items: [
          { icon: "🤝", title: "Đối tác Banking/Fintech", desc: "Techcombank, VPBank, MoMo, VNPAY — nơi cần BA nhất" },
          { icon: "📋", title: "Hỗ trợ trọn đời", desc: "Career Team hỗ trợ việc làm không giới hạn thời gian" },
          { icon: "💼", title: "Portfolio chuẩn", desc: "BRD + SRS + Use Case + Prototype sẵn sàng apply" },
          { icon: "🌏", title: "Career path rõ", desc: "BA → Senior BA → PO → PM: lương lên đến 75tr+" }
        ]},
        { type: "cta" }
      ]
    },
    uiux: {
      slides: [
        { type: "hook", title: "Muốn làm <span>sáng tạo</span>\nnhưng chưa biết bắt đầu?", sub: "UI/UX Design — ngành thiết kế hot nhất thời đại số. Không cần biết vẽ, chỉ cần tư duy thiết kế và Figma.", icon: "🎨" },
        { type: "stats", title: "Design đang <span>bùng nổ</span>", stats: [
          { num: "34.6 triệu", label: "lương trung vị Designer\n(6.5 năm KN)", src: "ITviec 2025" },
          { num: "+15%/năm", label: "tăng trưởng nhu cầu\nUX Designer", src: "Telos Academy" },
          { num: "60–100 triệu", label: "lương Senior Designer\ntại HCM", src: "Telos Academy 2025" }
        ]},
        { type: "stories", title: "Từ zero → <span>UI/UX Designer</span>", stories: [
          { before: "Graphic Designer", salaryBefore: "9–15tr", after: "UI/UX Junior/Mid", salaryAfter: "18–25tr", time: "8 tháng", increase: "+65%" },
          { before: "Content Creator", salaryBefore: "10–15tr", after: "UI/UX Junior", salaryAfter: "15–22tr", time: "8 tháng", increase: "+50%" },
          { before: "Không có IT background", salaryBefore: "8–12tr", after: "Junior UX", salaryAfter: "12–18tr", time: "10 tháng", increase: "+50%" }
        ]},
        { type: "audience", title: "Bạn phù hợp nếu...", cards: [
          { icon: "🎓", title: "Sinh viên", desc: "Không chuyên thiết kế, muốn vào ngành Product/UX" },
          { icon: "🔄", title: "Người chuyển ngành", desc: "Từ marketing, kinh doanh, kỹ thuật — UX chào đón mọi background" },
          { icon: "🖌️", title: "Graphic Designer", desc: "Đã biết thiết kế, muốn chuyển sang UX/UI — lương cao hơn" },
          { icon: "💡", title: "Product people", desc: "PM, BA muốn hiểu Design Thinking & Product Design" }
        ]},
        { type: "levels", title: "Lộ trình 4 cấp độ <span>B → A → I → S</span>" },
        { type: "leveldetail", title: "Chi tiết <span>từng level</span>" },
        { type: "career", title: "Cơ hội nghề nghiệp <span>sau tốt nghiệp</span>" },
        { type: "method", title: "Phương pháp <span>học qua dự án</span>", items: [
          { icon: "⚡", title: "Learning by Doing", desc: "Mỗi kỳ kết thúc bằng 1 project thực tế có thể showcase" },
          { icon: "👨‍🏫", title: "Mentor designer 1-1", desc: "Mentor là designer đang làm việc tại doanh nghiệp" },
          { icon: "🛠️", title: "Figma 100%", desc: "Công cụ #1 ngành — thành thạo Figma từ đầu" },
          { icon: "🎯", title: "Real brief", desc: "Đề bài từ doanh nghiệp thật ở kỳ Career Kickstart" }
        ]},
        { type: "brand" },
        { type: "pricing", title: "Học phí <span>đầu tư cho tương lai</span>" },
        { type: "guarantee", title: "Cam kết <span>hỗ trợ việc làm trọn đời</span>", items: [
          { icon: "🤝", title: "Đối tác tuyển dụng", desc: "Fintech, E-commerce, Startup — nơi cần UX nhất" },
          { icon: "📋", title: "Hỗ trợ trọn đời", desc: "Career Team hỗ trợ việc làm không giới hạn" },
          { icon: "💼", title: "Portfolio Review", desc: "Senior Designer review portfolio trước khi apply" },
          { icon: "🌏", title: "Freelance cơ hội", desc: "UX freelance: $1.900–$2.800/tháng (quốc tế)" }
        ]},
        { type: "cta" }
      ]
    },
    marketing: {
      slides: [
        { type: "hook", title: "Marketing truyền thống\n<span>đã hết thời</span>?", sub: "Marketer biết AI tiết kiệm 7 giờ/tháng cho content, tăng lương 25-40%. Nếu bạn không upskill AI, bạn đang tự đào thải mình.", icon: "📢" },
        { type: "stats", title: "Marketing + AI = <span>công thức vàng</span>", stats: [
          { num: "88%", label: "nhân viên VN đã dùng\nGenerative AI", src: "Swiss Coding 2025" },
          { num: "+25–40%", label: "tăng lương khi có\nAI marketing skills", src: "VietSourcing 2025" },
          { num: "76%", label: "lãnh đạo VN không\ntuyển thiếu AI skills", src: "Swiss Coding 2025" }
        ]},
        { type: "stories", title: "Từ marketer thường → <span>AI Marketer</span>", stories: [
          { before: "Content Writer cơ bản", salaryBefore: "8–12tr", after: "AI Content Specialist", salaryAfter: "15–22tr", time: "6 tháng", increase: "+70%" },
          { before: "Social Media Exec", salaryBefore: "10–15tr", after: "Performance Marketer", salaryAfter: "20–28tr", time: "8 tháng", increase: "+80%" },
          { before: "Marketing Executive", salaryBefore: "12–18tr", after: "Digital + AI Specialist", salaryAfter: "25–35tr", time: "8 tháng", increase: "+80%" }
        ]},
        { type: "audience", title: "Bạn phù hợp nếu...", cards: [
          { icon: "📝", title: "Content Writer", desc: "Muốn viết nhanh hơn 3-5x với AI, nâng cấp content chuyển đổi" },
          { icon: "📱", title: "Social Media Manager", desc: "Muốn master Facebook Ads, Google Ads, tối ưu ROI" },
          { icon: "🔄", title: "Người chuyển ngành", desc: "Từ sales, business — marketing + AI là kỹ năng gần nhất" },
          { icon: "💼", title: "Freelancer/Agency", desc: "Muốn chạy agency riêng, nhận client với AI tools" }
        ]},
        { type: "levels", title: "Lộ trình 4 module <span>A1 → A2 → A3 → S</span>" },
        { type: "leveldetail", title: "Chi tiết <span>từng module</span>" },
        { type: "career", title: "Cơ hội nghề nghiệp <span>sau tốt nghiệp</span>" },
        { type: "method", title: "Phương pháp <span>On Job Training</span>", items: [
          { icon: "⚡", title: "Campaign thật", desc: "Chạy chiến dịch marketing thật với budget thật" },
          { icon: "👨‍🏫", title: "Mentor marketer 1-1", desc: "Mentor là marketer đang chạy chiến dịch triệu đô" },
          { icon: "🤖", title: "AI Tools mới nhất", desc: "ChatGPT, Meta Advantage+, Google Performance Max" },
          { icon: "🎯", title: "Portfolio marketing", desc: "Campaign plan + content + ads report sẵn sàng" }
        ]},
        { type: "brand" },
        { type: "pricing", title: "Học phí <span>đầu tư cho tương lai</span>" },
        { type: "guarantee", title: "Cam kết <span>hỗ trợ việc làm trọn đời</span>", items: [
          { icon: "🤝", title: "Đối tác tuyển dụng", desc: "E-commerce, Agency, Startup — nơi cần marketer nhất" },
          { icon: "📋", title: "Hỗ trợ trọn đời", desc: "Career Team hỗ trợ việc làm không giới hạn" },
          { icon: "💼", title: "Freelance ready", desc: "Portfolio đủ để nhận client ngay sau khi tốt nghiệp" },
          { icon: "🌏", title: "Remote opportunity", desc: "Remote marketing: $2.000–$6.000/tháng" }
        ]},
        { type: "cta" }
      ]
    },
    dataeng: {
      slides: [
        { type: "hook", title: "Muốn lương <span>cao nhất ngành Data</span>?", sub: "Data Engineer — lương trung vị 44.1 triệu/tháng, cao hơn DA và Developer. Ngành khan hiếm nhân lực, doanh nghiệp săn đón.", icon: "🛢️" },
        { type: "stats", title: "Data Engineer <span>khan hiếm & giá trị cao</span>", stats: [
          { num: "44.1 triệu", label: "lương trung vị DE/tháng\n(6 năm kinh nghiệm)", src: "ITviec 2025" },
          { num: "56.9 triệu", label: "DE 3-4 năm KN\n(ITviec update 2026)", src: "ITviec 2026" },
          { num: "46+", label: "vị trí DE đang tuyển\ntrên ITviec", src: "ITviec 3/2026" }
        ]},
        { type: "stories", title: "Con đường trở thành <span>Data Engineer</span>", stories: [
          { before: "Data Analyst", salaryBefore: "15–20tr", after: "Junior DE", salaryAfter: "22–30tr", time: "6 tháng", increase: "+50%" },
          { before: "Backend Developer", salaryBefore: "20–25tr", after: "Mid DE", salaryAfter: "30–40tr", time: "6 tháng", increase: "+50%" },
          { before: "Database Admin", salaryBefore: "15–22tr", after: "DE (Cloud)", salaryAfter: "28–35tr", time: "6 tháng", increase: "+55%" }
        ]},
        { type: "audience", title: "Bạn phù hợp nếu...", cards: [
          { icon: "📊", title: "Data Analyst muốn lên level", desc: "Đã biết SQL/Python, muốn chuyển sang DE — lương cao hơn 50%" },
          { icon: "💻", title: "Backend Developer", desc: "Đã biết code, muốn chuyên sâu data pipeline & cloud" },
          { icon: "🔧", title: "DevOps / DBA", desc: "Có nền tảng hạ tầng, học thêm Big Data tooling" },
          { icon: "🎓", title: "Sinh viên IT", desc: "Muốn vào ngành hot nhất, lương cao nhất ngành Data" }
        ]},
        { type: "levels", title: "Lộ trình 3 cấp độ <span>B → A → S</span>" },
        { type: "leveldetail", title: "Chi tiết <span>từng level</span>" },
        { type: "career", title: "Cơ hội nghề nghiệp <span>sau tốt nghiệp</span>" },
        { type: "method", title: "Phương pháp <span>On Job Training</span>", items: [
          { icon: "⚡", title: "Hands-on pipeline", desc: "Xây ETL pipeline thật với Airflow, Spark, AWS" },
          { icon: "👨‍🏫", title: "Mentor DE kèm 1-1", desc: "Mentor là Data Engineer đang làm tại doanh nghiệp lớn" },
          { icon: "☁️", title: "Cloud thật", desc: "Thực hành trực tiếp trên AWS S3, Glue, Redshift" },
          { icon: "🤖", title: "GenAI tích hợp", desc: "AI hỗ trợ sinh DAG, viết pipeline, tự động hóa" }
        ]},
        { type: "brand" },
        { type: "pricing", title: "Học phí <span>đầu tư cho tương lai</span>" },
        { type: "guarantee", title: "Cam kết <span>hỗ trợ việc làm trọn đời</span>", items: [
          { icon: "🤝", title: "Đối tác tuyển dụng", desc: "Zalo, VNG, FPT, Bosch — nơi cần DE nhất" },
          { icon: "📋", title: "Hỗ trợ trọn đời", desc: "Career Team hỗ trợ việc làm không giới hạn" },
          { icon: "💼", title: "Lương top ngành", desc: "Fresher DE: 15-18tr, Senior: 50-70tr+" },
          { icon: "🌏", title: "Career path rộng", desc: "DE → Data Architect / ML Engineer / Cloud Engineer" }
        ]},
        { type: "cta" }
      ]
    },
    ai: {
      slides: [
        { type: "hook", title: "Đồng nghiệp dùng AI\n<span>xong việc trước bạn 3 giờ?</span>", sub: "76% lãnh đạo Việt Nam nói sẽ không tuyển ứng viên thiếu AI skills. AI không thay thế bạn — nhưng người biết AI sẽ thay thế bạn.", icon: "🤖" },
        { type: "stats", title: "AI đang <span>thay đổi mọi thứ</span>", stats: [
          { num: "88%", label: "nhân viên VN đã dùng\nGenerative AI", src: "Swiss Coding 2025" },
          { num: "+30–50%", label: "tăng thu nhập khi\ncó AI skills", src: "VietSourcing 2025" },
          { num: "41%", label: "tăng trưởng AI jobs\nQ1/2025 vs Q1/2024", src: "ITviec 2025" }
        ]},
        { type: "stories", title: "AI thay đổi <span>năng suất làm việc</span>", stories: [
          { before: "Marketer HCM", salaryBefore: "8h/tháng content", after: "AI Marketer", salaryAfter: "1h/tháng content", time: "Tiết kiệm 7h", increase: "7x nhanh hơn" },
          { before: "Financial Analyst", salaryBefore: "Manual risk", after: "AI-assisted", salaryAfter: "Giảm 15% chi phí", time: "3 tháng học", increase: "+35% thu nhập" },
          { before: "Project Manager", salaryBefore: "Manual reporting", after: "AI automation", salaryAfter: "Auto reports", time: "2 tháng học", increase: "+40% thu nhập" }
        ]},
        { type: "audience", title: "Bạn phù hợp nếu...", cards: [
          { icon: "💼", title: "Nhân viên văn phòng", desc: "Email, báo cáo, slide — AI giúp tiết kiệm 40-60 phút/ngày" },
          { icon: "📊", title: "Người làm dữ liệu", desc: "Excel, bảng tính — AI tự động hóa công thức, dashboard" },
          { icon: "📢", title: "Marketer / Content", desc: "Viết content, lên ý tưởng — nhanh hơn 3-5x với AI" },
          { icon: "🔄", title: "Bất kỳ ai", desc: "Không cần kỹ thuật — chỉ cần muốn tiết kiệm thời gian" }
        ]},
        { type: "levels", title: "Lộ trình 2 cấp độ <span>B → A</span>" },
        { type: "leveldetail", title: "Chi tiết <span>từng level</span>" },
        { type: "career", title: "AI <span>tăng giá trị bạn</span> ở mọi ngành" },
        { type: "method", title: "Phương pháp <span>học theo tình huống</span>", items: [
          { icon: "⚡", title: "Ứng dụng ngay", desc: "Mỗi buổi tập trung 1 ứng dụng thực tế: slide, báo cáo, email" },
          { icon: "👨‍🏫", title: "Mentor hướng dẫn", desc: "Học theo tình huống doanh nghiệp thật, không lý thuyết suông" },
          { icon: "🤖", title: "Đa dạng công cụ", desc: "ChatGPT, Notion AI, SlidesAI, Canva AI, Google Sheets AI" },
          { icon: "📝", title: "Template sẵn", desc: "Bộ template AI cho email, report, slide có thể dùng ngay" }
        ]},
        { type: "brand" },
        { type: "pricing", title: "Học phí <span>đầu tư nhỏ — hiệu quả lớn</span>" },
        { type: "guarantee", title: "Cam kết <span>hiệu quả ngay</span>", items: [
          { icon: "⚡", title: "ROI nhanh nhất", desc: "Break-even: 1-2 tháng sau khi áp dụng AI" },
          { icon: "📈", title: "+25-50% thu nhập", desc: "AI skills giúp tăng lương 25-50% — thêm 5-15tr/tháng" },
          { icon: "🏢", title: "Mọi ngành nghề", desc: "Từ marketing, finance, HR, PM — AI áp dụng cho tất cả" },
          { icon: "🌏", title: "Xu hướng bắt buộc", desc: "AI Literacy là #1 kỹ năng cần thiết 2026 (LinkedIn)" }
        ]},
        { type: "cta" }
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

  function formatPrice(p) {
    return p.replace(/\./g, ".") + "đ";
  }

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

  // ===== RENDER CAREER OUTCOMES CARD =====
  function renderCareerOutcomes(c) {
    var career = c.career;
    if (!career) return "";

    var maxSalary = 0;
    career.salary.forEach(function (s) { if (s.max > maxSalary) maxSalary = s.max; });

    var html = '<div class="x18-career-card">';
    html += '<div class="x18-career-header" style="border-left-color:' + c.color + '">';
    html += '<h4>🚀 Career Outcomes sau tốt nghiệp</h4>';
    html += '<span class="x18-career-source">Nguồn: ' + esc(career.source) + '</span>';
    html += '</div>';

    // Positions
    html += '<div class="x18-career-section">';
    html += '<div class="x18-career-label">🎯 Vị trí có thể ứng tuyển</div>';
    html += '<div class="x18-career-positions">';
    career.positions.forEach(function (p) {
      html += '<span class="x18-career-pos' + (p.hot ? ' hot' : '') + '">' +
        esc(p.title) + (p.hot ? ' <span class="x18-hot-badge">HOT</span>' : '') +
        '</span>';
    });
    html += '</div></div>';

    // Salary range bars
    html += '<div class="x18-career-section">';
    html += '<div class="x18-career-label">💰 Mức lương kỳ vọng (triệu VND/tháng)</div>';
    html += '<div class="x18-career-salary-bars">';
    career.salary.forEach(function (s) {
      var leftPct = (s.min / maxSalary * 100);
      var widthPct = ((s.max - s.min) / maxSalary * 100);
      html += '<div class="x18-salary-row">' +
        '<div class="x18-salary-level">' + esc(s.level) + '</div>' +
        '<div class="x18-salary-bar-wrap">' +
          '<div class="x18-salary-bar" style="left:' + leftPct + '%;width:' + widthPct + '%;background:' + c.color + '">' +
            '<span class="x18-salary-val">' + esc(s.range) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>';
    });
    html += '</div></div>';

    // Growth
    html += '<div class="x18-career-section">';
    html += '<div class="x18-career-label">📈 Tỷ lệ tăng lương trung bình</div>';
    html += '<div class="x18-career-growth" style="color:' + c.color + '">' + esc(career.growth) + '</div>';
    html += '</div>';

    // Employers
    html += '<div class="x18-career-section">';
    html += '<div class="x18-career-label">🏢 Top employers đang tuyển</div>';
    html += '<div class="x18-career-employers">';
    career.employers.forEach(function (e) {
      html += '<span class="x18-career-employer">' + esc(e) + '</span>';
    });
    html += '</div></div>';

    html += '</div>';
    return html;
  }

  // ===== RENDER PRICING TABLE =====
  function renderPricingTable(c) {
    var p = c.pricing;
    if (!p) return "";

    var html = '<div class="x18-pricing-card">';
    html += '<h4 style="border-left-color:' + c.color + '">💰 Bảng học phí — ' + esc(c.name) + '</h4>';

    // Level prices
    html += '<div class="x18-pricing-levels">';
    p.levels.forEach(function (lv) {
      html += '<div class="x18-pricing-level">' +
        '<span class="x18-pricing-code" style="background:' + c.color + '15;color:' + c.color + '">' + esc(lv.code) + '</span>' +
        '<span class="x18-pricing-price">' + formatPrice(lv.price) + '</span>' +
        (lv.note ? '<span class="x18-pricing-note">' + esc(lv.note) + '</span>' : '') +
      '</div>';
    });
    html += '</div>';

    // Combo
    if (p.combo) {
      html += '<div class="x18-pricing-combo" style="border-color:' + c.color + '40">';
      html += '<div class="x18-pricing-combo-name" style="color:' + c.color + '">⭐ ' + esc(p.combo.name) + '</div>';
      if (p.combo.save) {
        html += '<div class="x18-pricing-combo-original"><s>' + formatPrice(p.combo.original) + '</s> <span class="x18-pricing-save">Giảm ' + esc(p.combo.save) + '</span></div>';
      }
      html += '<div class="x18-pricing-combo-price">' + formatPrice(p.combo.discount) + '</div>';
      html += '</div>';
    }

    html += '</div>';
    return html;
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
      var unit = el("div", "x18-stair-unit");
      unit.style.marginBottom = (i * 30) + "px";

      var label = el("div", "x18-stair-label");
      label.style.background = c.color + "15";
      label.style.color = c.color;
      label.textContent = lv.label;
      unit.appendChild(label);

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

      if (i < c.levels.length - 1) {
        var conn = el("div", "x18-stair-connector");
        conn.innerHTML = '<div class="x18-stair-connector-line" style="background:' + c.color + '"></div>';
        staircase.appendChild(conn);
      }
    });
    wrap.appendChild(staircase);

    // Career outcomes (below staircase, above output)
    if (c.career) {
      var careerDiv = el("div");
      careerDiv.innerHTML = renderCareerOutcomes(c);
      wrap.appendChild(careerDiv.firstChild);
    }

    // Pricing table (below career outcomes)
    if (c.pricing) {
      var pricingDiv = el("div");
      pricingDiv.innerHTML = renderPricingTable(c);
      wrap.appendChild(pricingDiv.firstChild);
    }

    // Info cards
    var info = el("div", "x18-roadmap-info");

    var outputCard = el("div", "x18-info-card");
    var outputHtml = '<h4>📦 Sản phẩm đầu ra sau toàn bộ lộ trình</h4><ul>';
    c.levels.forEach(function (lv) {
      outputHtml += '<li><strong>' + esc(lv.code) + ':</strong> ' + esc(lv.output) + '</li>';
    });
    outputHtml += '</ul>';
    outputCard.innerHTML = outputHtml;
    info.appendChild(outputCard);

    var targetCard = el("div", "x18-info-card");
    targetCard.innerHTML =
      '<h4>🎯 Đối tượng phù hợp</h4>' +
      '<p>' + esc(c.target) + '</p>';
    info.appendChild(targetCard);

    wrap.appendChild(info);

    // Sales flow trigger
    if (salesData[key]) {
      var trigger = el("button", "x18-sales-trigger");
      trigger.innerHTML = "🎯 Xem Sales Flow chi tiết — " + esc(c.name);
      trigger.addEventListener("click", function () { openSalesFlow(key); });
      wrap.appendChild(trigger);
    }

    canvas.appendChild(wrap);

    var ps = document.getElementById("pricingSection");
    if (ps) ps.style.display = "none";
  }

  // ===== LEVEL POPUP =====
  function showLevelPopup(course, level) {
    var existing = document.querySelector(".x18-popup-overlay");
    if (existing) existing.remove();

    var overlay = el("div", "x18-popup-overlay");
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) overlay.remove();
    });

    var popup = el("div", "x18-popup");

    var headerDiv = el("div", "x18-popup-header");
    headerDiv.style.background = "linear-gradient(135deg, " + course.color + " 0%, " + course.color + "CC 100%)";
    headerDiv.innerHTML =
      '<div>' +
        '<h3>' + esc(level.name) + '</h3>' +
        '<div class="x18-popup-level">' + esc(level.code) + ' — ' + esc(level.label) + ' · ' + esc(level.duration) + ' · ' + esc(level.sessions) + '</div>' +
      '</div>' +
      '<button class="x18-popup-close">✕</button>';

    var body = el("div", "x18-popup-body");

    body.innerHTML =
      '<div class="x18-popup-section">' +
        '<h4>📝 Mô tả</h4>' +
        '<p>' + esc(level.desc) + '</p>' +
      '</div>';

    var topicsHtml = '<div class="x18-popup-section"><h4>📚 Nội dung chính</h4><ul>';
    level.topics.forEach(function (t) { topicsHtml += '<li>' + esc(t) + '</li>'; });
    topicsHtml += '</ul></div>';
    body.innerHTML += topicsHtml;

    var toolsHtml = '<div class="x18-popup-section"><h4>🛠️ Công cụ sử dụng</h4><div class="x18-popup-tools">';
    level.tools.forEach(function (t) {
      toolsHtml += '<span class="x18-popup-tool-tag">' + esc(t) + '</span>';
    });
    toolsHtml += '</div></div>';
    body.innerHTML += toolsHtml;

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

    var exitBtn = el("button", "x18-sales-exit");
    exitBtn.textContent = "✕ Thoát";
    exitBtn.addEventListener("click", closeSalesFlow);

    var slidesWrap = el("div", "x18-sales-slides");
    sd.slides.forEach(function (s, i) {
      var slide = buildSalesSlide(s, key);
      slide.setAttribute("data-slide", i);
      if (i === 0) slide.classList.add("active");
      slidesWrap.appendChild(slide);
    });

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

    requestAnimationFrame(function () {
      salesContainer.classList.add("active");
    });

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
      case "hook":
        s.innerHTML =
          '<div class="x18-s-hero">' +
            '<div style="font-size:3rem;margin-bottom:16px">' + (data.icon || "😰") + '</div>' +
            '<h1>' + data.title.replace(/\n/g, '<br>') + '</h1>' +
            '<p>' + data.sub.replace(/\n/g, '<br>') + '</p>' +
          '</div>';
        break;

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

      case "stories":
        var stHtml = '<div class="x18-s-title">' + data.title + '</div><div class="x18-s-stories">';
        data.stories.forEach(function (st) {
          stHtml += '<div class="x18-s-story">' +
            '<div class="x18-s-story-before">' +
              '<div class="x18-s-story-role">' + esc(st.before) + '</div>' +
              '<div class="x18-s-story-salary">' + esc(st.salaryBefore) + '</div>' +
            '</div>' +
            '<div class="x18-s-story-arrow">→</div>' +
            '<div class="x18-s-story-after">' +
              '<div class="x18-s-story-role">' + esc(st.after) + '</div>' +
              '<div class="x18-s-story-salary">' + esc(st.salaryAfter) + '</div>' +
            '</div>' +
            '<div class="x18-s-story-badge">' + esc(st.increase) + '</div>' +
          '</div>';
        });
        stHtml += '</div>';
        s.innerHTML = stHtml;
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

      case "leveldetail":
        var ldHtml = '<div class="x18-s-title">' + data.title + '</div><div class="x18-s-leveldetails">';
        c.levels.forEach(function (lv) {
          ldHtml += '<div class="x18-s-ld-card" style="border-left-color:' + c.color + '">' +
            '<div class="x18-s-ld-header">' +
              '<span class="x18-s-ld-code" style="background:' + c.color + ';color:#fff">' + esc(lv.code) + '</span>' +
              '<strong>' + esc(lv.name) + '</strong>' +
              '<span class="x18-s-ld-meta">' + esc(lv.duration) + '</span>' +
            '</div>' +
            '<p>' + esc(lv.desc) + '</p>' +
            '<div class="x18-s-ld-tools">' + lv.tools.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
            '<div class="x18-s-ld-output">📦 ' + esc(lv.output) + '</div>' +
          '</div>';
        });
        ldHtml += '</div>';
        s.innerHTML = ldHtml;
        break;

      case "career":
        var cr = c.career;
        if (!cr) break;
        var maxSal = 0;
        cr.salary.forEach(function (sv) { if (sv.max > maxSal) maxSal = sv.max; });

        var crHtml = '<div class="x18-s-title">' + data.title + '</div>';
        crHtml += '<div class="x18-s-career-wrap">';

        // Positions
        crHtml += '<div class="x18-s-career-positions">';
        cr.positions.forEach(function (p) {
          crHtml += '<span class="x18-s-career-pos' + (p.hot ? ' hot' : '') + '">' +
            esc(p.title) + (p.hot ? ' <span class="x18-hot-badge">HOT</span>' : '') + '</span>';
        });
        crHtml += '</div>';

        // Salary bars
        crHtml += '<div class="x18-s-career-bars">';
        cr.salary.forEach(function (sv) {
          var leftPct = (sv.min / maxSal * 100);
          var widthPct = ((sv.max - sv.min) / maxSal * 100);
          crHtml += '<div class="x18-salary-row">' +
            '<div class="x18-salary-level">' + esc(sv.level) + '</div>' +
            '<div class="x18-salary-bar-wrap">' +
              '<div class="x18-salary-bar" style="left:' + leftPct + '%;width:' + widthPct + '%;background:' + c.color + '">' +
                '<span class="x18-salary-val">' + esc(sv.range) + '</span>' +
              '</div>' +
            '</div>' +
          '</div>';
        });
        crHtml += '</div>';

        crHtml += '<div class="x18-s-career-meta">' +
          '<div>📈 Tăng lương: <strong style="color:' + c.color + '">' + esc(cr.growth) + '</strong></div>' +
          '<div>🏢 Top employers: ' + cr.employers.join(', ') + '</div>' +
          '<div class="x18-s-career-src">Nguồn: ' + esc(cr.source) + '</div>' +
        '</div>';
        crHtml += '</div>';
        s.innerHTML = crHtml;
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

      case "guarantee":
        var gHtml = '<div class="x18-s-title">' + data.title + '</div><div class="x18-s-list-grid">';
        data.items.forEach(function (item) {
          gHtml += '<div class="x18-s-list-item">' +
            '<div class="x18-s-list-item-icon">' + item.icon + '</div>' +
            '<div><h5>' + esc(item.title) + '</h5><p>' + esc(item.desc) + '</p></div>' +
          '</div>';
        });
        gHtml += '</div>';
        s.innerHTML = gHtml;
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

      case "pricing":
        var pr = c.pricing;
        if (!pr) break;
        var prHtml = '<div class="x18-s-title">' + data.title + '</div>';
        prHtml += '<div class="x18-s-pricing-table">';

        // Level prices
        prHtml += '<div class="x18-s-pricing-levels">';
        pr.levels.forEach(function (lv) {
          prHtml += '<div class="x18-s-pricing-lv">' +
            '<div class="x18-s-pricing-lv-code" style="background:' + c.color + '">' + esc(lv.code) + '</div>' +
            '<div class="x18-s-pricing-lv-price">' + formatPrice(lv.price) + '</div>' +
            (lv.note ? '<div class="x18-s-pricing-lv-note">' + esc(lv.note) + '</div>' : '') +
          '</div>';
        });
        prHtml += '</div>';

        // Combo highlight
        if (pr.combo) {
          prHtml += '<div class="x18-s-pricing-combo" style="border-color:' + c.color + '">';
          prHtml += '<div class="x18-s-pricing-combo-star">⭐</div>';
          prHtml += '<div class="x18-s-pricing-combo-name">' + esc(pr.combo.name) + '</div>';
          if (pr.combo.save) {
            prHtml += '<div class="x18-s-pricing-combo-original"><s>' + formatPrice(pr.combo.original) + '</s></div>';
            prHtml += '<div class="x18-s-pricing-combo-save">Tiết kiệm ' + esc(pr.combo.save) + '</div>';
          }
          prHtml += '<div class="x18-s-pricing-combo-final">' + formatPrice(pr.combo.discount) + '</div>';
          prHtml += '</div>';
        }

        prHtml += '</div>';
        s.innerHTML = prHtml;
        break;

      case "cta":
        var career = c.career;
        var quickStats = '';
        if (career) {
          var topSalary = career.salary[career.salary.length - 1];
          quickStats =
            '<div class="x18-s-cta-stats">' +
              '<div class="x18-s-cta-stat"><div class="x18-s-cta-stat-num">' + esc(topSalary.range) + '</div><div class="x18-s-cta-stat-label">Lương kỳ vọng</div></div>' +
              '<div class="x18-s-cta-stat"><div class="x18-s-cta-stat-num">' + esc(c.duration) + '</div><div class="x18-s-cta-stat-label">Thời gian đào tạo</div></div>' +
              '<div class="x18-s-cta-stat"><div class="x18-s-cta-stat-num">80.000+</div><div class="x18-s-cta-stat-label">Học viên đã thành công</div></div>' +
            '</div>';
        }
        s.innerHTML =
          '<div class="x18-s-cta">' +
            '<h2>Cuộc đời bạn chỉ thay đổi<br>khi bạn <span style="color:#E31F26">bắt đầu hành động</span></h2>' +
            '<p>' + esc(c.duration) + ' để thay đổi 40 năm sự nghiệp phía trước</p>' +
            quickStats +
            '<button class="x18-s-cta-btn" onclick="window.open(\'https://mindx.edu.vn\',\'_blank\')">🚀 Đăng ký học ngay →</button>' +
            '<div class="x18-s-cta-sub">Không phải đăng ký tư vấn — đăng ký học để thay đổi cuộc đời.</div>' +
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
    { key: "x18-dataeng", label: "Data Engineer", icon: "🛢️" },
    { key: "x18-ai", label: "AI", icon: "🤖" }
  ];

  var titleMap = {
    "x18-overview": "18+ — Tổng quan",
    "x18-coding": "18+ — XCareer Coding",
    "x18-data": "18+ — AI-Data Analyst",
    "x18-itba": "18+ — IT Business Analyst",
    "x18-uiux": "18+ — UI/UX Designer",
    "x18-marketing": "18+ — Fullstack Marketing",
    "x18-dataeng": "18+ — Data Engineer",
    "x18-ai": "18+ — AI"
  };

  function activateCourse(courseKey) {
    var menuKey = "x18-" + courseKey;
    activateX18(menuKey);
    document.querySelectorAll(".nav-x18-item").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-x18") === menuKey);
    });
    document.querySelectorAll(".nav-item").forEach(function (btn) { btn.classList.remove("active"); });
    document.querySelectorAll(".nav-xmember, .nav-xart, .nav-xmember2").forEach(function (btn) { btn.classList.remove("active"); });
  }

  function activateX18(key) {
    // Centralized view switch: hide K12 pricing, show roadmap area for 18+
    if (window.switchView) window.switchView("x18");

    var pageTitle = document.getElementById("pageTitle");
    if (pageTitle) pageTitle.textContent = titleMap[key] || "18+";

    if (key === "x18-overview") {
      renderOverview();
    } else {
      var courseKey = key.replace("x18-", "");
      renderRoadmap(courseKey);
    }

    document.querySelectorAll(".nav-x18-item").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-x18") === key);
    });
  }

  function buildSidebar() {
    var nav = document.querySelector(".sidebar-nav");
    if (!nav) return;

    /* Create 18+ nav group */
    var group = el("div", "nav-group");
    group.id = "navGroup18Plus";

    var header = el("button", "nav-group-header");
    header.setAttribute("data-group", "18plus");
    header.innerHTML = '<span class="nav-group-icon">🚀</span>' +
      '<span class="nav-group-label">18+</span>' +
      '<span class="nav-group-arrow">\u25B6</span>';
    header.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      var ch = document.querySelector('#navGroup18Plus .nav-group-children');
      var ar = document.querySelector('#navGroup18Plus .nav-group-arrow');
      if (ch) {
        var isOpen = ch.classList.contains('open');
        if (isOpen) { ch.classList.remove('open'); } else { ch.classList.add('open'); }
        if (ar) ar.textContent = isOpen ? '\u25B6' : '\u25BC';
      }
    };
    group.appendChild(header);

    var children = el("div", "nav-group-children");
    x18MenuItems.forEach(function (item) {
      var btn = el("button", "nav-x18-item");
      btn.setAttribute("data-x18", item.key);
      btn.innerHTML =
        '<span class="x18-nav-icon">' + item.icon + '</span>' +
        '<span>' + esc(item.label) + '</span>';
      btn.addEventListener("click", function () {
        activateX18(item.key);
        /* Mark 18+ group as active */
        document.querySelectorAll(".nav-group-header").forEach(function(h){ h.classList.remove("active"); });
        header.classList.add("active");
      });
      children.appendChild(btn);
    });
    group.appendChild(children);

    /* Insert before Training group */
    var trainingGroup = document.getElementById("navGroupTraining");
    if (trainingGroup) {
      nav.insertBefore(group, trainingGroup);
    } else {
      nav.appendChild(group);
    }
  }

  // ===== INIT =====
  function init() {
    buildSidebar();

    document.querySelectorAll(".nav-item[data-roadmap]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".nav-x18-item").forEach(function (b) {
          b.classList.remove("active");
        });
        var ps = document.getElementById("pricingSection");
        if (ps) ps.style.display = "";
      });
    });

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.x18plusActivate = activateX18;

})();
