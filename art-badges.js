/* Art Roadmap — Special Program Badges (Cregen I, Cregen II, Expertise Intern, Studio Intern, PM Intern)
   Injects animated badges onto Art course cards WITHOUT modifying app.js */
(function () {
  "use strict";

  // Badge config: map course name keywords to badges
  var badgeConfig = {
    "Visual Art": [
      { label: "Cregen I", icon: "🎨", color: "#8B5CF6" }
    ],
    "Game Art": [
      { label: "Cregen I", icon: "🎨", color: "#8B5CF6" }
    ],
    "Character & Mascot": [
      { label: "Cregen II", icon: "🏆", color: "#D97706" }
    ],
    "Graphic Design": [
      { label: "Intern 1", icon: "🎬", color: "#2563EB" }
    ],
    "Multimedia Design": [
      { label: "Intern 1", icon: "🎬", color: "#2563EB" },
      { label: "Intern 2", icon: "📋", color: "#E31F26" }
    ]
  };

  // Detail content for popups
  var badgeDetails = {
    "Cregen I": {
      title: "🎨 Cregen I — Chương trình sáng tạo nâng cao",
      content: [
        "Creative Thinking Workshop: 4 buổi tư duy sáng tạo có cấu trúc",
        "Học viên biết tạo ý tưởng, không chờ cảm hứng — phát triển 1 ý tưởng thành nhiều hướng",
        "Khóa học ''Họa sĩ minh họa'' — đồ án lớn",
        "Lựa chọn đề tài, GV hướng dẫn định hướng nghề",
        "Ôn tập & hoàn thiện tác phẩm: truyện tranh / ấn phẩm tuyên truyền",
        "Chương trình triển lãm sản phẩm và gọi vốn",
        "Sản phẩm: 01 truyện tranh hoàn chỉnh + 01 ấn phẩm tuyên truyền",
        "Đẩy mạnh hướng nghiệp — hiểu cơ hội nghề nghiệp trong ngành Công nghiệp Sáng tạo"
      ]
    },
    "Cregen II": {
      title: "🏆 Cregen II — Nhân vật thương hiệu",
      content: [
        "Học viên chọn 1 trong 2 đề tài chuyên sâu:",
        "① Thiết kế Nhân vật Game — concept, turnaround sheet, biểu cảm",
        "② Thiết kế Mascot quảng cáo — brand identity, ứng dụng thương hiệu",
        "GV định hướng nghề & phong cách cá nhân (signature style)",
        "Ôn tập kỹ thuật, hoàn thiện nhân vật theo quy trình làm nghề",
        "Chuẩn bị triển lãm và giới thiệu dự án trước hội đồng",
        "Sản phẩm: Nhân vật Game + ấn phẩm HOẶC Mascot thương hiệu + ấn phẩm",
        "Định hướng nghề: Game Art & Branding"
      ]
    },
    "Intern 1": {
      title: "🎬 Creative Studio Intern — Thực tập sáng tạo",
      content: [
        "Giá trị nổi bật: Hiểu cách một đội sáng tạo cùng làm ra sản phẩm hoàn chỉnh",
        "Hiểu studio sáng tạo hoạt động thế nào — không chỉ vẽ",
        "Làm việc nhóm, phân vai, giao tiếp & phản biện",
        "4 vai trò thực tế:",
        "• Project Coordinator — Điều phối công việc, quản lý tiến độ",
        "• Visual Designer — Thiết kế hình ảnh, poster, nhận diện",
        "• Content / Story Builder — Xây dựng nội dung, ý tưởng, câu chuyện",
        "• Reviewer / QA — Đánh giá, góp ý, đảm bảo chất lượng sản phẩm",
        "Sản phẩm: Bộ poster cho sự kiện + Mini brand cho CLB giả định"
      ]
    },
    "Intern 2": {
      title: "📋 Creative Project Manager Intern — Quản lý dự án sáng tạo",
      content: [
        "Chương trình thực tập nâng cao — học cách dẫn dắt dự án",
        "Không phải ai cũng làm designer, nhưng ai cũng cần hiểu quản lý dự án",
        "Lập kế hoạch dự án, chia việc, theo dõi tiến độ, tổng hợp kết quả",
        "4 vai trò nâng cao:",
        "• Creative PM / Coordinator — Lập kế hoạch, điều phối, báo cáo",
        "• Visual Designer — Thực hiện thiết kế theo brief",
        "• Content / Story Builder — Xây dựng nội dung & ý tưởng",
        "• Reviewer / QA — Phản biện, kiểm tra chất lượng & tiến độ",
        "Sản phẩm: Project Plan + Project Report + Reflection cá nhân"
      ]
    }
  };

  function createBadgeElement(badge) {
    var el = document.createElement("div");
    el.className = "ab-badge";
    el.style.setProperty("--ab-color", badge.color);
    el.innerHTML = '<span class="ab-badge-icon">' + badge.icon + '</span>' +
                   '<span class="ab-badge-label">' + badge.label + '</span>';

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
      popupOverlay.className = "ab-popup-overlay";
      popupOverlay.addEventListener("click", function (e) {
        if (e.target === popupOverlay) closeBadgePopup();
      });
      document.body.appendChild(popupOverlay);
    }

    var html = '<div class="ab-popup">' +
      '<button class="ab-popup-close" aria-label="Đóng">✕</button>' +
      '<div class="ab-popup-title">' + detail.title + '</div>' +
      '<ul class="ab-popup-list">';
    detail.content.forEach(function (item) {
      html += '<li>' + item + '</li>';
    });
    html += '</ul></div>';

    popupOverlay.innerHTML = html;
    popupOverlay.classList.add("open");
    popupOverlay.querySelector(".ab-popup-close").addEventListener("click", closeBadgePopup);
  }

  function closeBadgePopup() {
    if (popupOverlay) popupOverlay.classList.remove("open");
  }

  // Inject badges into course cards
  function injectBadges() {
    var canvas = document.getElementById("roadmapCanvas");
    if (!canvas) return;

    var nodes = canvas.querySelectorAll(".course-node");
    nodes.forEach(function (node) {
      if (node.querySelector(".ab-badge-row")) return;

      var nameEl = node.querySelector(".node-name");
      if (!nameEl) return;
      var name = nameEl.textContent.trim();

      var badges = null;
      Object.keys(badgeConfig).forEach(function (key) {
        if (name.indexOf(key) !== -1) badges = badgeConfig[key];
      });

      if (!badges) return;

      var row = document.createElement("div");
      row.className = "ab-badge-row";
      badges.forEach(function (b) {
        row.appendChild(createBadgeElement(b));
      });

      // Insert at bottom of node
      node.appendChild(row);
    });

    // Also check tree-card elements (Năm 7 / Interaction Design is in tree-card)
    var treeCards = canvas.querySelectorAll(".tree-card");
    treeCards.forEach(function (card) {
      if (card.querySelector(".ab-badge-row")) return;

      var nameEl = card.querySelector(".tree-card-name span, .tree-card-name");
      if (!nameEl) return;
      var name = nameEl.textContent.trim();

      var badges = null;
      Object.keys(badgeConfig).forEach(function (key) {
        if (name.indexOf(key) !== -1) badges = badgeConfig[key];
      });

      if (!badges) return;

      var row = document.createElement("div");
      row.className = "ab-badge-row";
      badges.forEach(function (b) {
        row.appendChild(createBadgeElement(b));
      });

      card.appendChild(row);
    });
  }

  // Watch for roadmap re-renders
  var isInjecting = false;

  function observe() {
    var canvas = document.getElementById("roadmapCanvas");
    if (!canvas) {
      setTimeout(observe, 500);
      return;
    }

    setTimeout(injectBadges, 300);

    var observer = new MutationObserver(function () {
      if (isInjecting) return;
      setTimeout(function() {
        isInjecting = true;
        injectBadges();
        isInjecting = false;
      }, 200);
    });
    observer.observe(canvas, { childList: true, subtree: false });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeBadgePopup();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", observe);
  } else {
    observe();
  }
})();
