/* Coding Roadmap — Special Program Badges (NextGen, Internship 1, 2)
   Injects animated badges onto course cards WITHOUT modifying app.js */
(function () {
  "use strict";

  // Badge config: map course name keywords to badges
  var badgeConfig = {
    "Game Maker": [
      { label: "NextGen", icon: "🚀", color: "#E31F26" }
    ],
    "App Producer": [
      { label: "NextGen", icon: "🚀", color: "#E31F26" },
      { label: "Intern 1", icon: "🏢", color: "#2563EB" }
    ],
    "Web Creator": [
      { label: "NextGen", icon: "🚀", color: "#E31F26" },
      { label: "Intern 1", icon: "🏢", color: "#2563EB" },
      { label: "Intern 2", icon: "📋", color: "#059669" }
    ],
    "Computer Science": [
      { label: "Intern 2", icon: "📋", color: "#059669" }
    ]
  };

  // Detail content for popups
  var badgeDetails = {
    "NextGen": {
      title: "🚀 NextGen — Khởi nghiệp & Gọi vốn giả lập",
      content: [
        "Chương trình 14 buổi kết nối cuối mỗi khóa Intensive",
        "Ghép nhóm, xây dựng sản phẩm thực tế và Go Live",
        "Phân tích thị trường: 5 Forces & SWOT",
        "Xây dựng mô hình kinh doanh & dòng doanh thu",
        "Định giá sản phẩm/dự án — có căn cứ logic",
        "Kế hoạch sử dụng vốn & phương án hoàn vốn",
        "Thuyết trình gọi vốn trước hội đồng giả lập Shark Tank",
        "Sơ duyệt tại lớp có phụ huynh tham gia đánh giá"
      ]
    },
    "Intern 1": {
      title: "🏢 Internship 1 — Tech Project with AI Foundation",
      content: [
        "60 giờ thực tập tại các phòng ban thực tế của MindX",
        "Modun 1 (20h): Chuyên môn/nghiệp vụ bộ phận + kiểm tra + thực tập",
        "Modun 2 (20h): Nghiệp vụ nâng cao + AI hỗ trợ học tập & thực tập",
        "Modun 3 (20h): Xây dựng giải pháp nâng cao hiệu suất cho bộ phận",
        "Kết hợp kiến thức Technical + AI (GenAI, nhận diện hình ảnh, training model)",
        "VD: Chatbot AI, trang web nội bộ, hệ thống báo cáo tự động"
      ]
    },
    "Intern 2": {
      title: "📋 Internship 2 — Project Management with AI Core",
      content: [
        "60 giờ — Quản lý dự án công nghệ với Agile/Scrum",
        "Ứng dụng AI Core vào quy trình quản lý & ra quyết định",
        "Lập kế hoạch, phân công, theo dõi tiến độ dự án thực tế",
        "Phối hợp đa phòng ban — Leadership & Teamwork",
        "Xây dựng báo cáo dự án, đánh giá hiệu quả bằng data",
        "Nâng cao từ Intern 1: Thực thi → Quản lý → Chiến lược"
      ]
    }
  };

  function createBadgeElement(badge) {
    var el = document.createElement("div");
    el.className = "cb-badge";
    el.style.setProperty("--cb-color", badge.color);
    el.innerHTML = '<span class="cb-badge-icon">' + badge.icon + '</span>' +
                   '<span class="cb-badge-label">' + badge.label + '</span>';

    // Click handler — show detail popup
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      var detail = badgeDetails[badge.label];
      if (detail) showBadgePopup(detail);
    });
    return el;
  }

  // Popup overlay
  var popupOverlay = null;

  function showBadgePopup(detail) {
    if (!popupOverlay) {
      popupOverlay = document.createElement("div");
      popupOverlay.className = "cb-popup-overlay";
      popupOverlay.addEventListener("click", function (e) {
        if (e.target === popupOverlay) closeBadgePopup();
      });
      document.body.appendChild(popupOverlay);
    }

    var html = '<div class="cb-popup">' +
      '<button class="cb-popup-close" aria-label="Đóng">✕</button>' +
      '<div class="cb-popup-title">' + detail.title + '</div>' +
      '<ul class="cb-popup-list">';
    detail.content.forEach(function (item) {
      html += '<li>' + item + '</li>';
    });
    html += '</ul></div>';

    popupOverlay.innerHTML = html;
    popupOverlay.classList.add("open");
    popupOverlay.querySelector(".cb-popup-close").addEventListener("click", closeBadgePopup);
  }

  function closeBadgePopup() {
    if (popupOverlay) popupOverlay.classList.remove("open");
  }

  // Inject badges into course cards
  function injectBadges() {
    var canvas = document.getElementById("roadmapCanvas");
    if (!canvas) return;

    // Find all course-node elements
    var nodes = canvas.querySelectorAll(".course-node");
    nodes.forEach(function (node) {
      // Skip if already has badges
      if (node.querySelector(".cb-badge-row")) return;

      // Find course name
      var nameEl = node.querySelector(".node-name");
      if (!nameEl) return;
      var name = nameEl.textContent.trim();

      // Check if this course should have badges
      var badges = null;
      Object.keys(badgeConfig).forEach(function (key) {
        if (name.indexOf(key) !== -1) badges = badgeConfig[key];
      });

      if (!badges) return;

      // Create badge row
      var row = document.createElement("div");
      row.className = "cb-badge-row";
      badges.forEach(function (b) {
        row.appendChild(createBadgeElement(b));
      });

      // Insert at bottom of node
      node.appendChild(row);
    });
  }

  // Watch for roadmap re-renders
  var isInjecting = false;

  function observe() {
    var canvas = document.getElementById("roadmapCanvas");
    if (!canvas) {
      // Retry until canvas exists
      setTimeout(observe, 500);
      return;
    }

    // Initial inject with delay (wait for app.js to render)
    setTimeout(injectBadges, 300);

    // Observe for re-renders (e.g., switching roadmaps)
    var observer = new MutationObserver(function () {
      if (isInjecting) return;
      // Small delay to let app.js finish rendering
      setTimeout(function() {
        isInjecting = true;
        injectBadges();
        isInjecting = false;
      }, 200);
    });
    observer.observe(canvas, { childList: true, subtree: false });
  }

  // Keyboard: Escape closes popup
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeBadgePopup();
  });

  // Start
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", observe);
  } else {
    observe();
  }
})();
