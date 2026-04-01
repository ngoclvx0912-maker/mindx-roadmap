/* MindX Roadmap v5.3 — Enriched values, domain details, Art levels */
(function () {
  "use strict";

  var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySnPbdLFoA2GSQ1g7u0JbGCdFP2Dt0pz31FQ5LbeRf3XVbVbQUoPkTZIaNuDPH_RuR/exec';
  var ADMIN_PASSWORD = "mindx2026";

  var state = {
    currentRoadmap: "robotics",
    isAdmin: false,
    editedData: {},
    serverData: {}
  };

  // ===== THEME per track =====
  var themes = {
    robotics: {
      accent: "#E31F26",
      accentDark: "#7D0005",
      accentBg: "#FFF5F5",
      accentLight: "#FFBCBF",
      icon: "\u{1F916}",
      phases: [
        { label: "Giai \u0111o\u1EA1n 1: Kh\u00E1m ph\u00E1", color: "#2563EB", bg: "#EFF6FF" },
        { label: "Giai \u0111o\u1EA1n 2: S\u00E1ng t\u1EA1o", color: "#059669", bg: "#ECFDF5" }
      ]
    },
    coding: {
      accent: "#2563EB",
      accentDark: "#1E40AF",
      accentBg: "#EFF6FF",
      accentLight: "#BFDBFE",
      icon: "\u{1F4BB}",
      phases: [
        { label: "Giai \u0111o\u1EA1n 1: N\u1EC1n t\u1EA3ng", color: "#2563EB", bg: "#EFF6FF" },
        { label: "Giai \u0111o\u1EA1n 2: Ph\u00E1t tri\u1EC3n & AI", color: "#059669", bg: "#ECFDF5" },
        { label: "Giai \u0111o\u1EA1n 3: Chuy\u00EAn s\u00E2u", color: "#D97706", bg: "#FFFBEB" }
      ]
    },
    art: {
      accent: "#8B5CF6",
      accentDark: "#6D28D9",
      accentBg: "#F5F3FF",
      accentLight: "#DDD6FE",
      icon: "\u{1F3A8}",
      phases: [
        { label: "Giai \u0111o\u1EA1n 1: X\u00E2y d\u1EF1ng N\u1EC1n t\u1EA3ng (N\u0103m 0\u20132)", color: "#2563EB", bg: "#EFF6FF" },
        { label: "Giai \u0111o\u1EA1n 2: \u0110\u1ECBnh h\u01B0\u1EDBng & Chuy\u00EAn s\u00E2u (N\u0103m 3\u20134)", color: "#059669", bg: "#ECFDF5" },
        { label: "Giai \u0111o\u1EA1n 3: Ho\u00E0n thi\u1EC7n Ngh\u1EC1 nghi\u1EC7p (N\u0103m 5\u20136)", color: "#D97706", bg: "#FFFBEB" }
      ]
    }
  };

  // ===== COURSE DATA =====
  // VALUE format: Tư Duy | Kỹ Năng | Kiến Thức → phát triển HS / nghề nghiệp

  var roboticsCourses = [
    { id: "robo_nam0", name: "K\u1EF9 s\u01B0 Robot nh\u00ED", year: "N\u0103m 0", age: "4+", group: "Robot Explorers", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 0,
      value: "\u2022 T\u01B0 duy: Quan s\u00E1t, ph\u00E2n t\u00EDch m\u1EABu \u2014 h\u00ECnh th\u00E0nh t\u01B0 duy logic t\u1EEB s\u1EDBm\n\u2022 K\u1EF9 n\u0103ng: L\u1EAFp r\u00E1p m\u00F4 h\u00ECnh, l\u1EADp tr\u00ECnh k\u00E9o th\u1EA3 (Block Icon) qua LEGO Spike Essential\n\u2022 Ki\u1EBFn th\u1EE9c: Nguy\u00EAn l\u00FD c\u01A1 h\u1ECDc \u0111\u01A1n gi\u1EA3n, c\u1EA3m bi\u1EBFn c\u01A1 b\u1EA3n\n\u21D2 Gi\u00FAp b\u00E9 ph\u00E1t tri\u1EC3n kh\u1EA3 n\u0103ng gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1, t\u0103ng s\u1EF1 t\u1EF1 tin v\u00E0 tr\u00ED t\u01B0\u1EDFng t\u01B0\u1EE3ng s\u00E1ng t\u1EA1o t\u1EEB 4 tu\u1ED5i",
      outputs: ["L\u1EAFp r\u00E1p robot c\u01A1 b\u1EA3n", "L\u1EADp tr\u00ECnh k\u00E9o th\u1EA3"],
      content: "1. Kh\u00E1m ph\u00E1 robot c\u01A1 b\u1EA3n:\n - H\u1ECDc vi\u00EAn s\u1EBD \u0111\u01B0\u1EE3c l\u00E0m quen v\u1EDBi b\u1ED9 Kit LEGO Spike Essential.\n - H\u1ECDc c\u00E1ch l\u1EAFp r\u00E1p c\u00E1c m\u00F4 h\u00ECnh robot \u0111\u01A1n gi\u1EA3n.\n2. Kh\u00E1m ph\u00E1 th\u1EBF gi\u1EDBi \u0111\u1ED9ng v\u1EADt v\u00E0 m\u00F4i tr\u01B0\u1EDDng.\n3. S\u00E1ng t\u1EA1o Robot.\n4. Ph\u00E1t tri\u1EC3n t\u01B0 duy logic.\n5. L\u1EADp tr\u00ECnh m\u00F4 h\u00ECnh Robot.",
      objectives: "- L\u00E0m quen v\u1EDBi kh\u00E1i ni\u1EC7m Robot.\n- Nh\u1EADn bi\u1EBFt c\u00E1c b\u1ED9 ph\u1EADn c\u01A1 b\u1EA3n.\n- Ti\u1EBFp c\u1EADn t\u01B0 duy l\u1EADp tr\u00ECnh tr\u1EF1c quan.\n- Ph\u00E1t tri\u1EC3n k\u1EF9 n\u0103ng quan s\u00E1t.",
      basic: { name: "Ch\u1EA1m v\u00E0o th\u1EBF gi\u1EDBi Robot", desc: "L\u00E0m quen b\u1ED9 Kit LEGO Spike, l\u1EADp tr\u00ECnh Block Icon tr\u1EF1c quan." },
      advanced: { name: "Th\u1EBF gi\u1EDBi \u0111\u1ED9ng v\u1EADt", desc: "M\u00F4 ph\u1ECFng h\u00E0nh vi \u0111\u1ED9ng v\u1EADt, \u0111i\u1EC1u khi\u1EC3n 2 \u0111\u1ED9ng c\u01A1, c\u00E2u l\u1EC7nh l\u1EB7p." },
      intensive: { name: "Ki\u1EBFn t\u1EA1o Robot", desc: "D\u1EF1 \u00E1n ph\u1EE9c t\u1EA1p: \u0111\u00E0i ph\u00E1t thanh, tr\u1EF1c th\u0103ng c\u1EE9u h\u1ED9. Message Block." } },
    { id: "robo_nam1", name: "Nh\u1EADp m\u00F4n Robotics", year: "N\u0103m 1", age: "6+", group: "Robot Explorers", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 0,
      value: "\u2022 T\u01B0 duy: Logic tu\u1EA7n t\u1EF1, nh\u1EADn di\u1EC7n nguy\u00EAn nh\u00E2n-k\u1EBFt qu\u1EA3 qua l\u1EADp tr\u00ECnh robot\n\u2022 K\u1EF9 n\u0103ng: L\u1EAFp r\u00E1p c\u01A1 kh\u00ED v\u1EDBi VEX GO Kit, l\u1EADp tr\u00ECnh Block Icon & Word Block\n\u2022 Ki\u1EBFn th\u1EE9c: C\u01A1 c\u1EA5u truy\u1EC1n \u0111\u1ED9ng, c\u1EA3m bi\u1EBFn m\u00F4i tr\u01B0\u1EDDng, VEXcode GO\n\u21D2 MindX l\u00E0 \u0111\u01A1n v\u1ECB \u0111\u1EA7u ti\u00EAn t\u1EA1i Vi\u1EC7t Nam \u0111\u01B0a VEX GO v\u00E0o gi\u1EA3ng d\u1EA1y. X\u00E2y d\u1EF1ng n\u1EC1n t\u1EA3ng STEM v\u1EEFng ch\u1EAFc",
      outputs: ["VEX GO Kit", "Block Icon & Word Block"],
      content: "1. L\u00E0m quen v\u1EDBi VEX GO Robotics Kit.\n2. L\u1EAFp r\u00E1p m\u00F4 h\u00ECnh robot \u0111\u01A1n gi\u1EA3n v\u1EDBi VEX GO.\n3. Kh\u00E1m ph\u00E1 \u1EE9ng d\u1EE5ng robot trong \u0111\u1EDDi s\u1ED1ng.\n4. L\u1EADp tr\u00ECnh Robot th\u1EF1c hi\u1EC7n nhi\u1EC7m v\u1EE5 v\u1EDBi VEXcode GO.",
      objectives: "- L\u00E0m quen b\u1ED9 Kit VEX GO Robotics.\n- Hi\u1EC3u nguy\u00EAn t\u1EAFc ho\u1EA1t \u0111\u1ED9ng robot.\n- L\u1EADp tr\u00ECnh k\u00E9o th\u1EA3 Block Icon v\u00E0 Word Block.\n- K\u1EF9 n\u0103ng l\u00E0m vi\u1EC7c nh\u00F3m.",
      basic: { name: "H\u00E0nh tr\u00ECnh Sao H\u1ECFa", desc: "VEX GO Kit, VEXcode GO, l\u1EADp tr\u00ECnh Block Icon tr\u1EF1c quan." },
      advanced: { name: "Khu V\u01B0\u1EDDn B\u00E1ch Th\u00FA", desc: "M\u00F4 ph\u1ECFng h\u00E0nh vi \u0111\u1ED9ng v\u1EADt, 2 \u0111\u1ED9ng c\u01A1, c\u1EA3m bi\u1EBFn." },
      intensive: { name: "Cu\u1ED9c Tr\u1EDF L\u1EA1i Sao H\u1ECFa", desc: "Robot t\u1EF1 \u0111\u1ED9ng, if-else, v\u00F2ng l\u1EB7p, c\u1EA3m bi\u1EBFn m\u1EAFt." } },
    { id: "robo_nam2", name: "Truy t\u00ECm b\u00ED \u1EA9n Robot", year: "N\u0103m 2", age: "8+", group: "Robot Innovators", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 1,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy \u0111i\u1EC1u ki\u1EC7n (if-else), l\u1EB7p (loop) \u2014 n\u1EC1n t\u1EA3ng t\u01B0 duy thu\u1EADt to\u00E1n\n\u2022 K\u1EF9 n\u0103ng: L\u1EAFp r\u00E1p s\u00E1ng t\u1EA1o v\u1EDBi VEX GO \u2014 thi\u1EBFt b\u1ECB robot gi\u00E1o d\u1EE5c h\u00E0ng \u0111\u1EA7u t\u1EEB M\u1EF9\n\u2022 Ki\u1EBFn th\u1EE9c: C\u01A1 c\u1EA5u truy\u1EC1n \u0111\u1ED9ng, c\u1EA3m bi\u1EBFn m\u00F4i tr\u01B0\u1EDDng, VEXcode GO\n\u21D2 MindX l\u00E0 \u0111\u01A1n v\u1ECB \u0111\u1EA7u ti\u00EAn t\u1EA1i Vi\u1EC7t Nam \u0111\u01B0a VEX GO v\u00E0o gi\u1EA3ng d\u1EA1y. Con b\u01B0\u1EDBc v\u00E0o chu\u1EA9n thi \u0111\u1EA5u qu\u1ED1c t\u1EBF VEX Robotics",
      outputs: ["VEX GO Kit", "If-else, v\u00F2ng l\u1EB7p"],
      content: "1. Kh\u00E1m ph\u00E1 s\u1EF1 k\u1EF3 di\u1EC7u c\u1EE7a Robot.\n2. L\u1EAFp r\u00E1p v\u00E0 s\u00E1ng t\u1EA1o m\u00F4 h\u00ECnh.\n3. L\u1EADp tr\u00ECnh Robot ho\u00E0n th\u00E0nh nhi\u1EC7m v\u1EE5.",
      objectives: "- Robot ph\u1EA3n \u1EE9ng v\u1EDBi m\u00F4i tr\u01B0\u1EDDng.\n- L\u1EAFp r\u00E1p theo h\u01B0\u1EDBng d\u1EABn v\u00E0 s\u00E1ng t\u1EA1o.\n- L\u1EADp tr\u00ECnh \u0111i\u1EC1u ki\u1EC7n, v\u00F2ng l\u1EB7p.",
      basic: { name: "H\u00E0nh tr\u00ECnh sao h\u1ECFa", desc: "VEX GO Kit, VEXcode GO, l\u1EADp tr\u00ECnh c\u01A1 b\u1EA3n." },
      advanced: { name: "Th\u00E0nh ph\u1ED1 hi\u1EC7n \u0111\u1EA1i", desc: "Robot b\u00E1n t\u1EF1 \u0111\u1ED9ng, 2 \u0111\u1ED9ng c\u01A1, if-else." },
      intensive: { name: "Th\u1EED th\u00E1ch Robot", desc: "Robot t\u1EF1 \u0111\u1ED9ng, to\u00E1n t\u1EED, repeat until." } },
    { id: "robo_nam3", name: "S\u00E1ng t\u1EA1o Robot", year: "N\u0103m 3", age: "10+", group: "Robot Innovators", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 1, pivot: true,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy h\u1EC7 th\u1ED1ng, t\u1ED1i \u01B0u h\u00F3a \u2014 gi\u1EA3i quy\u1EBFt b\u00E0i to\u00E1n ph\u1EE9c t\u1EA1p\n\u2022 K\u1EF9 n\u0103ng: Thi\u1EBFt k\u1EBF robot t\u1EF1 \u0111\u1ED9ng, \u0111i\u1EC1u khi\u1EC3n PID controller, My Blocks\n\u2022 Ki\u1EBFn th\u1EE9c: Thu\u1EADt to\u00E1n d\u00F2 line, b\u00E1m t\u01B0\u1EDDng, VEX IQ \u2014 chu\u1EA9n thi \u0111\u1EA5u VEX World Championship (60+ qu\u1ED1c gia)\n\u21D2 R\u00E8n t\u01B0 duy gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1 c\u1EA5p cao, chu\u1EA9n b\u1ECB n\u1EC1n t\u1EA3ng cho c\u00E1c cu\u1ED9c thi STEM qu\u1ED1c t\u1EBF v\u00E0 \u0111\u1ECBnh h\u01B0\u1EDBng ngh\u1EC1 nghi\u1EC7p k\u1EF9 thu\u1EADt",
      outputs: ["VEX IQ Kit", "PID controller", "Thu\u1EADt to\u00E1n"],
      content: "1. T\u00ECm hi\u1EC3u t\u1EF1 \u0111\u1ED9ng h\u00F3a.\n2. N\u00E2ng cao l\u1EAFp r\u00E1p v\u00E0 l\u1EADp tr\u00ECnh.\n3. Thu\u1EADt to\u00E1n l\u1EADp tr\u00ECnh Robot.",
      objectives: "- Ki\u1EBFn th\u1EE9c t\u1EF1 \u0111\u1ED9ng h\u00F3a.\n- \u00C1p d\u1EE5ng thu\u1EADt to\u00E1n.\n- L\u1EADp tr\u00ECnh qua controller.\n- Gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1.",
      basic: { name: "T\u01B0\u01A1ng t\u00E1c h\u1EC7 th\u1ED1ng", desc: "\u1EE8ng d\u1EE5ng Robotics, VEX IQ Kit, VEXcode IQ." },
      advanced: { name: "\u0110i\u1EC1u khi\u1EC3n t\u1ED1i \u01B0u", desc: "VEX IQ Controller, di chuy\u1EC3n, n\u00E2ng-h\u1EA1." },
      intensive: { name: "Thu\u1EADt to\u00E1n trong Robotics", desc: "PID controller, b\u00E1m t\u01B0\u1EDDng, d\u00F2 line, My Blocks." } }
  ];

  var codingCourses = [
    { id: "code_scratch", name: "Scratch \u2014 App Creator", year: "N\u0103m 1", age: "8+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 0,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy thu\u1EADt to\u00E1n tr\u1EF1c quan \u2014 ph\u00E2n r\u00E3 v\u1EA5n \u0111\u1EC1, nh\u1EADn d\u1EA1ng pattern\n\u2022 K\u1EF9 n\u0103ng: L\u1EADp tr\u00ECnh k\u00E9o th\u1EA3 Scratch, thi\u1EBFt k\u1EBF game \u0111\u01A1n gi\u1EA3n, thuy\u1EBFt tr\u00ECnh s\u1EA3n ph\u1EA9m\n\u2022 Ki\u1EBFn th\u1EE9c: Bi\u1EBFn, v\u00F2ng l\u1EB7p, s\u1EF1 ki\u1EC7n, \u0111i\u1EC1u ki\u1EC7n \u2014 n\u1EC1n t\u1EA3ng m\u1ECDi ng\u00F4n ng\u1EEF l\u1EADp tr\u00ECnh\n\u21D2 S\u1EA3n ph\u1EA9m \u0111\u1EE7 s\u1EE9c thi Scratch c\u1EA5p tr\u01B0\u1EDDng/qu\u1EADn/TP. Gi\u00FAp con h\u1ECDc t\u1ED1t To\u00E1n, Tin h\u1ECDc v\u00E0 r\u00E8n kh\u1EA3 n\u0103ng t\u1EF1 h\u1ECDc",
      outputs: ["\u1EE8ng d\u1EE5ng Scratch", "Tr\u00F2 ch\u01A1i \u0111\u01A1n gi\u1EA3n"],
      content: "X\u00E2y d\u1EF1ng n\u1EC1n t\u1EA3ng t\u01B0 duy l\u1EADp tr\u00ECnh qua Scratch.", objectives: "- T\u01B0 duy l\u1EADp tr\u00ECnh logic.\n- S\u00E1ng t\u1EA1o \u1EE9ng d\u1EE5ng.\n- Gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1.",
      basic: "Scratch Basic", advanced: "Scratch Advanced", intensive: "Scratch Intensive" },
    { id: "code_gamemaker", name: "Game Maker", year: "N\u0103m 2", age: "9+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i + AI4Learn", phase: 0,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy h\u1EC7 th\u1ED1ng (game design), l\u00EAn k\u1EBF ho\u1EA1ch v\u00E0 qu\u1EA3n l\u00FD d\u1EF1 \u00E1n\n\u2022 K\u1EF9 n\u0103ng: Thi\u1EBFt k\u1EBF game 2D ho\u00E0n ch\u1EC9nh, l\u00E0m vi\u1EC7c nh\u00F3m, thuy\u1EBFt tr\u00ECnh & g\u1ECDi v\u1ED1n\n\u2022 Ki\u1EBFn th\u1EE9c: Game loop, sprite, physics, AI4Learn\n\u21D2 Con h\u1ECDc c\u00E1ch bi\u1EBFn \u00FD t\u01B0\u1EDFng th\u00E0nh s\u1EA3n ph\u1EA9m ho\u00E0n ch\u1EC9nh \u2014 k\u1EF9 n\u0103ng quan tr\u1ECDng cho b\u1EA5t k\u1EF3 ng\u00E0nh ngh\u1EC1 n\u00E0o trong t\u01B0\u01A1ng lai",
      outputs: ["Game 2D", "AI4Learn"],
      content: "Ph\u00E1t tri\u1EC3n game, k\u1EBFt h\u1EE3p AI4Learn.", objectives: "- Game 2D ho\u00E0n ch\u1EC9nh.\n- Game design c\u01A1 b\u1EA3n.\n- Ti\u1EBFp c\u1EADn AI4Learn.",
      basic: "Gamemaker Basic", advanced: "Gamemaker Advanced", intensive: "Gamemaker Intensive" },
    { id: "code_appproducer", name: "App Producer", year: "N\u0103m 3", age: "11+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i + NextGen + Intern", phase: 1,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy s\u1EA3n ph\u1EA9m \u2014 t\u1EEB \u00FD t\u01B0\u1EDFng \u2192 ph\u00E1t tri\u1EC3n \u2192 ph\u00E1t h\u00E0nh th\u1EF1c t\u1EBF\n\u2022 K\u1EF9 n\u0103ng: L\u1EADp tr\u00ECnh Python, x\u00E2y d\u1EF1ng \u1EE9ng d\u1EE5ng, tham gia NextGen & Internship 60h\n\u2022 Ki\u1EBFn th\u1EE9c: Python \u2014 ng\u00F4n ng\u1EEF ph\u1ED5 bi\u1EBFn nh\u1EA5t th\u1EBF gi\u1EDBi, API, CSDL c\u01A1 b\u1EA3n\n\u21D2 Con c\u00F3 s\u1EA3n ph\u1EA9m th\u1EF1c t\u1EBF, kinh nghi\u1EC7m kh\u1EDFi nghi\u1EC7p s\u1EDBm v\u00E0 \u0111\u1ECBnh h\u01B0\u1EDBng ngh\u1EC1 nghi\u1EC7p r\u00F5 r\u00E0ng",
      outputs: ["App th\u1EF1c t\u1EBF", "NextGen 14b", "Internship 60h"],
      content: "L\u1EADp tr\u00ECnh \u1EE9ng d\u1EE5ng th\u1EF1c t\u1EBF, NextGen + Internship.", objectives: "- Ph\u00E1t tri\u1EC3n app.\n- D\u1EF1 \u00E1n c\u00F4ng ngh\u1EC7.\n- AI Foundation.",
      basic: "App Producer Basic", advanced: "App Producer Advanced", intensive: "App Producer Intensive" },
    { id: "code_webcreator", name: "Web Creator", year: "N\u0103m 4", age: "12+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 1,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy thi\u1EBFt k\u1EBF (UI/UX awareness), gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1 ph\u1EE9c t\u1EA1p\n\u2022 K\u1EF9 n\u0103ng: Th\u00E0nh th\u1EA1o JavaScript, x\u00E2y d\u1EF1ng website responsive \u0111a m\u1EE5c \u0111\u00EDch\n\u2022 Ki\u1EBFn th\u1EE9c: HTML, CSS, JavaScript, DOM, API \u2014 b\u1ED9 c\u00F4ng c\u1EE5 web developer\n\u21D2 Con c\u00F3 th\u1EC3 t\u1EF1 t\u1EA1o website c\u00E1 nh\u00E2n, portfolio, kh\u1EDFi \u0111\u1EA7u s\u1EF1 nghi\u1EC7p freelance ho\u1EB7c chu\u1EA9n b\u1ECB h\u1ED3 s\u01A1 du h\u1ECDc",
      outputs: ["Website responsive", "JavaScript"],
      content: "Website t\u1EEB HTML/CSS \u0111\u1EBFn JavaScript.", objectives: "- HTML, CSS, JS.\n- Website responsive.\n- Web application.",
      basic: "Web Creator Basic", advanced: "Web Creator Advanced", intensive: "Web Creator Intensive" },
    { id: "code_cs", name: "Computer Science", year: "N\u0103m 5", age: "14+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i + Intern 60h", phase: 2,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy ph\u1EA3n bi\u1EC7n v\u00E0 ph\u00E2n t\u00EDch d\u1EEF li\u1EC7u \u2014 ra quy\u1EBFt \u0111\u1ECBnh d\u1EF1a tr\u00EAn data\n\u2022 K\u1EF9 n\u0103ng: Thu th\u1EADp & ph\u00E2n t\u00EDch d\u1EEF li\u1EC7u, qu\u1EA3n l\u00FD d\u1EF1 \u00E1n c\u00F4ng ngh\u1EC7\n\u2022 Ki\u1EBFn th\u1EE9c: Gi\u1EA3i thu\u1EADt, c\u1EA5u tr\u00FAc d\u1EEF li\u1EC7u, AI core, khoa h\u1ECDc m\u00E1y t\u00EDnh\n\u21D2 N\u1EC1n t\u1EA3ng v\u1EEFng ch\u1EAFc cho du h\u1ECDc, thi IELTS/SAT CS, ho\u1EB7c tr\u1EF1c ti\u1EBFp \u1EE9ng tuy\u1EC3n v\u1ECB tr\u00ED junior developer",
      outputs: ["CS fundamentals", "AI core", "PM d\u1EF1 \u00E1n"],
      content: "CS chuy\u00EAn s\u00E2u: gi\u1EA3i thu\u1EADt, c\u1EA5u tr\u00FAc d\u1EEF li\u1EC7u, AI core.", objectives: "- CS fundamentals.\n- AI core.\n- Qu\u1EA3n l\u00FD d\u1EF1 \u00E1n.",
      basic: "CS Basic", advanced: "CS Advanced", intensive: "CS Intensive" }
  ];

  var codingDomains = {
    tech: {
      name: "Tech",
      desc: "Web / Data / UIUX + AI4Tech",
      detail: "Chuy\u00EAn s\u00E2u 1 trong 3 h\u01B0\u1EDBng:\n\u2022 Full Stack Web Developer\n\u2022 Data Analyst\n\u2022 UI/UX Designer\n\nT\u00EDch h\u1EE3p AI4Tech \u2014 \u1EE9ng d\u1EE5ng AI trong ph\u00E1t tri\u1EC3n s\u1EA3n ph\u1EA9m c\u00F4ng ngh\u1EC7",
      courses: "\u2022 Full Stack Web: React, Node.js, Database, DevOps\n\u2022 Data Analyst: Python, SQL, Power BI, Pandas\n\u2022 UI/UX: Figma, User Research, Design System",
      value: "\u2022 T\u01B0 duy: T\u01B0 duy h\u1EC7 th\u1ED1ng, t\u01B0 duy s\u1EA3n ph\u1EA9m s\u1ED1\n\u2022 K\u1EF9 n\u0103ng: X\u00E2y d\u1EF1ng s\u1EA3n ph\u1EA9m c\u00F4ng ngh\u1EC7 ho\u00E0n ch\u1EC9nh t\u1EEB \u00FD t\u01B0\u1EDFng \u0111\u1EBFn tri\u1EC3n khai\n\u2022 Ki\u1EBFn th\u1EE9c: Ki\u1EBFn tr\u00FAc ph\u1EA7n m\u1EC1m, API, cloud, AI \u1EE9ng d\u1EE5ng\n\u21D2 S\u1EB5n s\u00E0ng \u1EE9ng tuy\u1EC3n v\u1ECB tr\u00ED Junior Developer / Data Analyst / UI Designer",
      careers: "Junior Web Developer \u2192 Full Stack Developer \u2192 Tech Lead\nJunior Data Analyst \u2192 Senior Analyst \u2192 Data Scientist\nUI/UX Designer \u2192 Product Designer \u2192 Design Lead"
    },
    marketing: {
      name: "Marketing",
      desc: "MKT Fullstack + AI4MKT",
      detail: "Full-Stack Digital Marketing theo m\u00F4 h\u00ECnh T-Shaped Marketer\n\nT\u00EDch h\u1EE3p AI4MKT \u2014 \u1EE9ng d\u1EE5ng AI trong marketing & s\u00E1ng t\u1EA1o n\u1ED9i dung",
      courses: "\u2022 Marketing Foundation & Brand Strategy\n\u2022 Facebook Ads, Google Ads, TikTok Ads\n\u2022 SEO, Content Marketing, Social Media\n\u2022 Landing Page, Email Marketing, Analytics\n\u2022 AI Content Creation & Automation",
      value: "\u2022 T\u01B0 duy: T\u01B0 duy chi\u1EBFn l\u01B0\u1EE3c marketing, ph\u00E2n t\u00EDch th\u1ECB tr\u01B0\u1EDDng & kh\u00E1ch h\u00E0ng\n\u2022 K\u1EF9 n\u0103ng: Tri\u1EC3n khai chi\u1EBFn d\u1ECBch \u0111a k\u00EAnh, \u0111o l\u01B0\u1EDDng ROI, s\u00E1ng t\u1EA1o n\u1ED9i dung\n\u2022 Ki\u1EBFn th\u1EE9c: Paid ads, SEO, social media, analytics, marketing mix\n\u21D2 T\u1EF1 tin \u1EE9ng tuy\u1EC3n Digital Marketer ho\u1EB7c tri\u1EC3n khai chi\u1EBFn d\u1ECBch cho doanh nghi\u1EC7p ri\u00EAng",
      careers: "Digital Marketing Specialist \u2192 Performance Marketer \u2192 Growth Marketer\nContent Creator \u2192 Content Strategist \u2192 Head of Content\nSocial Media Manager \u2192 Marketing Manager \u2192 CMO"
    },
    finance: {
      name: "Finance",
      desc: "Data/ITBA + AI4Finance",
      detail: "Ph\u00E2n t\u00EDch d\u1EEF li\u1EC7u t\u00E0i ch\u00EDnh ho\u1EB7c IT Business Analyst\n\nT\u00EDch h\u1EE3p AI4Finance \u2014 AI trong ph\u00E2n t\u00EDch & d\u1EF1 b\u00E1o t\u00E0i ch\u00EDnh",
      courses: "\u2022 Financial Modeling & Excel n\u00E2ng cao\n\u2022 Data Analysis: Python, SQL, Power BI\n\u2022 IT Business Analyst: Quy tr\u00ECnh nghi\u1EC7p v\u1EE5, BPMN\n\u2022 AI4Finance: Machine Learning cho d\u1EF1 b\u00E1o",
      value: "\u2022 T\u01B0 duy: T\u01B0 duy ph\u00E2n t\u00EDch d\u1EEF li\u1EC7u, ra quy\u1EBFt \u0111\u1ECBnh d\u1EF1a tr\u00EAn data\n\u2022 K\u1EF9 n\u0103ng: Ph\u00E2n t\u00EDch b\u00E1o c\u00E1o t\u00E0i ch\u00EDnh, x\u00E2y d\u1EF1ng dashboard, \u0111\u1ECBnh gi\u00E1 & d\u1EF1 b\u00E1o\n\u2022 Ki\u1EBFn th\u1EE9c: Financial modeling, SQL, Python, Power BI, AI/ML c\u01A1 b\u1EA3n\n\u21D2 \u0110\u1EE7 n\u0103ng l\u1EF1c cho v\u1ECB tr\u00ED Financial Analyst / Business Analyst t\u1EA1i c\u00E1c t\u1EADp \u0111o\u00E0n",
      careers: "Financial Analyst \u2192 Senior Analyst \u2192 Finance Manager\nBusiness Analyst \u2192 Senior BA \u2192 Product Owner\nData Analyst \u2192 Data Scientist \u2192 Head of Data"
    },
    business: {
      name: "Business & Ops",
      desc: "ITBA/Data + AI4B&O",
      detail: "IT Business Analyst ho\u1EB7c Data cho v\u1EADn h\u00E0nh doanh nghi\u1EC7p\n\nT\u00EDch h\u1EE3p AI4B&O \u2014 AI trong qu\u1EA3n tr\u1ECB & v\u1EADn h\u00E0nh",
      courses: "\u2022 IT Business Analyst: BPMN, Use Case, Agile/Scrum\n\u2022 Data Analysis: SQL, Dashboard, Reporting\n\u2022 Project Management: Lean, Kanban\n\u2022 AI4B&O: T\u1EF1 \u0111\u1ED9ng h\u00F3a quy tr\u00ECnh v\u1EADn h\u00E0nh",
      value: "\u2022 T\u01B0 duy: T\u01B0 duy quy tr\u00ECnh, t\u1ED1i \u01B0u v\u1EADn h\u00E0nh & qu\u1EA3n l\u00FD d\u1EF1 \u00E1n\n\u2022 K\u1EF9 n\u0103ng: Ph\u00E2n t\u00EDch y\u00EAu c\u1EA7u, thi\u1EBFt k\u1EBF quy tr\u00ECnh, Agile/Scrum\n\u2022 Ki\u1EBFn th\u1EE9c: BPMN, SQL, dashboard, Lean, Kanban, AI automation\n\u21D2 S\u1EB5n s\u00E0ng cho v\u1ECB tr\u00ED Business Analyst / Operations Manager t\u1EA1i c\u00E1c startup & t\u1EADp \u0111o\u00E0n",
      careers: "Business Analyst \u2192 Senior BA \u2192 Product Manager\nOperations Analyst \u2192 Ops Manager \u2192 COO\nProject Manager \u2192 Program Manager \u2192 Director of PMO"
    }
  };

  // Art: main staircase is Năm 0–6, then branch after Năm 6
  var artCourses = [
    { id: "art_nam0", name: "Little Artist", year: "N\u0103m 0", age: "4\u20136", phase: 0,
      value: "\u2022 T\u01B0 duy: C\u1EA3m nh\u1EADn th\u1EA9m m\u1EF9, quan s\u00E1t m\u00E0u s\u1EAFc v\u00E0 h\u00ECnh kh\u1ED1i\n\u2022 K\u1EF9 n\u0103ng: V\u1EBD tay, n\u1EB7n \u0111\u1EA5t s\u00E9t, t\u00F4 m\u00E0u n\u01B0\u1EDBc \u2014 kh\u01A1i g\u1EE3i c\u1EA3m x\u00FAc s\u00E1ng t\u1EA1o s\u1EDBm\n\u2022 Ki\u1EBFn th\u1EE9c: M\u1EF9 thu\u1EADt truy\u1EC1n th\u1ED1ng, ngh\u1EC7 thu\u1EADt qua c\u1ED5 t\u00EDch v\u00E0 v\u0103n h\u00F3a\n\u21D2 Gi\u00FAp b\u00E9 ph\u00E1t tri\u1EC3n tr\u00ED t\u01B0\u1EDFng t\u01B0\u1EE3ng, kh\u1EA3 n\u0103ng bi\u1EC3u \u0111\u1EA1t c\u1EA3m x\u00FAc v\u00E0 s\u1EF1 t\u1EF1 tin qua ngh\u1EC7 thu\u1EADt",
      outputs: ["Tranh Canvas", "T\u01B0\u1EE3ng \u0111\u1EA5t s\u00E9t"],
      content: "M\u1EF9 thu\u1EADt truy\u1EC1n th\u1ED1ng, c\u1EA3m nh\u1EADn m\u00E0u s\u1EAFc qua \u0111\u1EA5t s\u00E9t, m\u00E0u n\u01B0\u1EDBc.", objectives: "Kh\u01A1i g\u1EE3i c\u1EA3m x\u00FAc s\u00E1ng t\u1EA1o",
      basic: { name: "L\u00E0m quen M\u1EF9 thu\u1EADt", desc: "V\u1EBD tay, t\u00F4 m\u00E0u, nh\u1EADn bi\u1EBFt h\u00ECnh kh\u1ED1i c\u01A1 b\u1EA3n." },
      advanced: { name: "Kh\u00E1m ph\u00E1 Ch\u1EA5t li\u1EC7u", desc: "\u0110\u1EA5t s\u00E9t, m\u00E0u n\u01B0\u1EDBc, collage \u2014 ph\u1ED1i h\u1EE3p ch\u1EA5t li\u1EC7u \u0111a d\u1EA1ng." },
      intensive: { name: "S\u00E1ng t\u1EA1o T\u00E1c ph\u1EA9m", desc: "D\u1EF1 \u00E1n tranh Canvas c\u00E1 nh\u00E2n, tri\u1EC3n l\u00E3m mini cu\u1ED1i k\u1EF3." } },
    { id: "art_nam1", name: "KidsArt", year: "N\u0103m 1", age: "6\u20139", phase: 0,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy th\u1ECB gi\u00E1c s\u1ED1 \u2014 chuy\u1EC3n t\u1EEB gi\u1EA5y sang digital\n\u2022 K\u1EF9 n\u0103ng: V\u1EBD digital b\u1EB1ng iPad/b\u1EA3ng v\u1EBD chuy\u00EAn d\u1EE5ng, t\u1EA1o sticker & sketchnote\n\u2022 Ki\u1EBFn th\u1EE9c: Digital Art c\u01A1 b\u1EA3n, phong c\u00E1ch v\u1EBD qu\u1ED1c t\u1EBF, b\u1ED1 c\u1EE5c c\u01A1 b\u1EA3n\n\u21D2 Con l\u00E0m quen c\u00F4ng c\u1EE5 s\u1ED1, x\u00E2y n\u1EC1n t\u1EA3ng cho c\u00E1c n\u0103m h\u1ECDc n\u00E2ng cao ti\u1EBFp theo",
      outputs: ["Sticker Pack", "Sketchnote"],
      content: "V\u1EBD digital, iPad/b\u1EA3ng v\u1EBD, th\u1EA9m m\u1EF9 hi\u1EC7n \u0111\u1EA1i.", objectives: "N\u1EC1n t\u1EA3ng Digital Art c\u01A1 b\u1EA3n",
      basic: { name: "L\u00E0m quen Digital Art", desc: "S\u1EED d\u1EE5ng iPad/b\u1EA3ng v\u1EBD, c\u00E1c n\u00E9t c\u01A1 b\u1EA3n, t\u00F4 m\u00E0u s\u1ED1." },
      advanced: { name: "Ph\u00E1t tri\u1EC3n Phong c\u00E1ch", desc: "V\u1EBD sticker, minh h\u1ECDa nh\u00E2n v\u1EADt, b\u1ED1 c\u1EE5c c\u01A1 b\u1EA3n." },
      intensive: { name: "D\u1EF1 \u00E1n Sticker Pack", desc: "Thi\u1EBFt k\u1EBF b\u1ED9 sticker ho\u00E0n ch\u1EC9nh, sketchnote c\u00E1 nh\u00E2n." } },
    { id: "art_nam2", name: "Visual Art", year: "N\u0103m 2", age: "8\u201311", phase: 0,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy c\u00F3 ch\u1EE7 \u0111\u00EDch \u2014 t\u1EEB \u201Cv\u1EBD \u0111\u1EB9p\u201D sang \u201Cv\u1EBD c\u00F3 \u00FD ngh\u0129a\u201D\n\u2022 K\u1EF9 n\u0103ng: Minh h\u1ECDa series, b\u1ED1 c\u1EE5c n\u00E2ng cao, digital painting chuy\u00EAn s\u00E2u\n\u2022 Ki\u1EBFn th\u1EE9c: Ph\u1ED1i c\u1EA3nh, \u00E1nh s\u00E1ng, l\u00FD thuy\u1EBFt m\u00E0u, h\u1EC7 th\u1ED1ng th\u1ECB gi\u00E1c\n\u21D2 Con t\u1EF1 x\u00E2y Portfolio ngh\u1EC7 thu\u1EADt ri\u00EAng, ph\u00E1t tri\u1EC3n \u00F3c th\u1EA9m m\u1EF9 v\u00E0 kh\u1EA3 n\u0103ng ph\u1EA3n bi\u1EC7n",
      outputs: ["Illustration Series", "Digital Painting"],
      content: "Series tranh c\u00F3 b\u1ED1 c\u1EE5c, ph\u1ED1i c\u1EA3nh.", objectives: "T\u01B0 duy th\u1ECB gi\u00E1c h\u1EC7 th\u1ED1ng",
      basic: { name: "N\u1EC1n t\u1EA3ng Th\u1ECB gi\u00E1c", desc: "L\u00FD thuy\u1EBFt m\u00E0u, \u00E1nh s\u00E1ng, b\u1ED1 c\u1EE5c c\u01A1 b\u1EA3n." },
      advanced: { name: "Minh h\u1ECDa N\u00E2ng cao", desc: "Digital painting, ph\u1ED1i c\u1EA3nh, d\u1EF1ng series tranh." },
      intensive: { name: "D\u1EF1 \u00E1n Portfolio", desc: "X\u00E2y d\u1EF1ng portfolio c\u00E1 nh\u00E2n v\u1EDBi series t\u00E1c ph\u1EA9m ho\u00E0n ch\u1EC9nh." } },
    { id: "art_nam3", name: "Game Art", year: "N\u0103m 3", age: "11\u201314", phase: 1, pivot: true,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy x\u00E2y d\u1EF1ng th\u1EBF gi\u1EDBi (worldbuilding) \u2014 t\u01B0 duy k\u1EC3 chuy\u1EC7n b\u1EB1ng h\u00ECnh \u1EA3nh\n\u2022 K\u1EF9 n\u0103ng: Thi\u1EBFt k\u1EBF nh\u00E2n v\u1EADt, b\u1ED1i c\u1EA3nh game theo quy tr\u00ECnh chuy\u00EAn nghi\u1EC7p\n\u2022 Ki\u1EBFn th\u1EE9c: Game Art pipeline, character design, environment art\n\u21D2 K\u1EBFt h\u1EE3p AI4Learn. B\u01B0\u1EDBc \u0111\u1EA7u \u0111\u1ECBnh h\u01B0\u1EDBng ngh\u1EC1 nghi\u1EC7p: Game Artist hay Graphic Designer?",
      outputs: ["World Moodboard", "Character Sheet", "AI4Learn"],
      content: "X\u00E2y d\u1EF1ng th\u1EBF gi\u1EDBi game, nh\u00E2n v\u1EADt, b\u1ED1i c\u1EA3nh.", objectives: "K\u1EF9 n\u0103ng Game Artist chuy\u00EAn nghi\u1EC7p",
      basic: { name: "Game Art C\u01A1 b\u1EA3n", desc: "Concept art, sketch nh\u00E2n v\u1EADt, mood board." },
      advanced: { name: "Character & Environment", desc: "Thi\u1EBFt k\u1EBF nh\u00E2n v\u1EADt chi ti\u1EBFt, b\u1ED1i c\u1EA3nh game 2D." },
      intensive: { name: "D\u1EF1 \u00E1n Game Art", desc: "Worldbuilding ho\u00E0n ch\u1EC9nh, character sheet + AI4Learn." } },
    { id: "art_nam4", name: "Character & Mascot Design", year: "N\u0103m 4", age: "12\u201315", phase: 1,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy th\u01B0\u01A1ng hi\u1EC7u \u2014 x\u00E2y d\u1EF1ng IP (t\u00E0i s\u1EA3n tr\u00ED tu\u1EC7) c\u00E1 nh\u00E2n\n\u2022 K\u1EF9 n\u0103ng: Th\u00E0nh th\u1EA1o Vector v\u1EDBi Adobe Illustrator, t\u1EA1o mascot \u0111\u1ED9c \u0111\u00E1o\n\u2022 Ki\u1EBFn th\u1EE9c: Brand identity, typography, style guide c\u01A1 b\u1EA3n\n\u21D2 Con c\u00F3 phong c\u00E1ch ri\u00EAng, portfolio Vector chuy\u00EAn nghi\u1EC7p \u2014 n\u1EC1n t\u1EA3ng \u0111\u1EC3 \u0111i s\u00E2u v\u00E0o Graphic Design",
      outputs: ["Mascot Design", "Mini Style Guide"],
      content: "Nh\u00E2n v\u1EADt & mascot th\u01B0\u01A1ng hi\u1EC7u.", objectives: "Chuy\u00EAn gia minh h\u1ECDa Vector",
      basic: { name: "Vector C\u01A1 b\u1EA3n", desc: "L\u00E0m quen Adobe Illustrator, v\u1EBD vector \u0111\u01A1n gi\u1EA3n." },
      advanced: { name: "Thi\u1EBFt k\u1EBF Mascot", desc: "X\u00E2y d\u1EF1ng nh\u00E2n v\u1EADt, IP c\u00E1 nh\u00E2n, typography." },
      intensive: { name: "Brand Identity Project", desc: "D\u1EF1 \u00E1n mascot + mini style guide ho\u00E0n ch\u1EC9nh." } },
    { id: "art_nam5", name: "Graphic Design", year: "N\u0103m 5", age: "13\u201316", phase: 2,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy truy\u1EC1n th\u00F4ng \u2014 thi\u1EBFt k\u1EBF \u0111\u1EC3 giao ti\u1EBFp v\u00E0 thuy\u1EBFt ph\u1EE5c\n\u2022 K\u1EF9 n\u0103ng: Adobe Photoshop & Illustrator, d\u1EF1ng chi\u1EBFn d\u1ECBch truy\u1EC1n th\u00F4ng 360\u00B0\n\u2022 Ki\u1EBFn th\u1EE9c: Layout, Poster, Logo, Branding \u2014 chu\u1EA9n ngh\u1EC1 thi\u1EBFt k\u1EBF chuy\u00EAn nghi\u1EC7p\n\u21D2 K\u1EBFt h\u1EE3p NextGen. S\u1EA3n ph\u1EA9m \u0111\u1EA1t chu\u1EA9n portfolio xin vi\u1EC7c ho\u1EB7c \u1EE9ng tuy\u1EC3n \u0111\u1EA1i h\u1ECDc thi\u1EBFt k\u1EBF",
      outputs: ["Mini Campaign 360", "Portfolio", "NextGen"],
      content: "Illustrator & Photoshop, Poster, Logo.", objectives: "Nh\u00E0 thi\u1EBFt k\u1EBF \u0111\u1ED3 h\u1ECDa th\u1EF1c th\u1EE5",
      basic: { name: "Photoshop C\u01A1 b\u1EA3n", desc: "X\u1EED l\u00FD \u1EA3nh, retouch, composition c\u01A1 b\u1EA3n." },
      advanced: { name: "Branding & Layout", desc: "Thi\u1EBFt k\u1EBF logo, poster, layout truy\u1EC1n th\u00F4ng." },
      intensive: { name: "Campaign 360\u00B0", desc: "D\u1EF1 \u00E1n chi\u1EBFn d\u1ECBch truy\u1EC1n th\u00F4ng \u0111a k\u00EAnh + NextGen." } },
    { id: "art_nam6", name: "Multimedia Design", year: "N\u0103m 6", age: "14\u201317", phase: 2,
      value: "\u2022 T\u01B0 duy: T\u01B0 duy \u0111a ph\u01B0\u01A1ng ti\u1EC7n \u2014 k\u1EBFt h\u1EE3p h\u00ECnh \u1EA3nh, \u00E2m thanh, chuy\u1EC3n \u0111\u1ED9ng\n\u2022 K\u1EF9 n\u0103ng: After Effects, Premiere, Stop Motion \u2014 t\u1EA1o n\u1ED9i dung viral\n\u2022 Ki\u1EBFn th\u1EE9c: Motion graphics, video ng\u1EAFn, storytelling qua h\u00ECnh \u1EA3nh \u0111\u1ED9ng\n\u21D2 B\u1EAFt k\u1ECBp xu h\u01B0\u1EDBng Content Creator / Motion Designer. Sau N\u0103m 6 con ch\u1ECDn h\u01B0\u1EDBng: B\u1EA3o tr\u1EE3 Vi\u1EC7c L\u00E0m ho\u1EB7c B\u1EA3o tr\u1EE3 Du H\u1ECDc",
      outputs: ["Video Motion Graphic (15-30s)"],
      content: "After Effects, Premiere, Motion Graphics, Stop Motion.", objectives: "Content Creator / Motion Designer",
      basic: { name: "Video Editing C\u01A1 b\u1EA3n", desc: "Premiere c\u01A1 b\u1EA3n, c\u1EAFt gh\u00E9p video, \u00E2m thanh." },
      advanced: { name: "Motion Graphics", desc: "After Effects, animation, Stop Motion." },
      intensive: { name: "D\u1EF1 \u00E1n Video Viral", desc: "S\u1EA3n xu\u1EA5t video motion graphic 15-30s ho\u00E0n ch\u1EC9nh." } }
  ];

  // Art Năm 7 (only in BT Việc Làm branch)
  var artNam7 = { id: "art_nam7", name: "Interaction Design \u2014 UX/UI", year: "N\u0103m 7", age: "15\u201318",
    value: "\u2022 T\u01B0 duy: T\u01B0 duy l\u1EA5y ng\u01B0\u1EDDi d\u00F9ng l\u00E0m trung t\u00E2m (Human-Centered Design)\n\u2022 K\u1EF9 n\u0103ng: Th\u00E0nh th\u1EA1o Figma, t\u1EA1o Prototype app/website ho\u00E0n ch\u1EC9nh\n\u2022 Ki\u1EBFn th\u1EE9c: UX Research, Wireframe, UI Design System, Usability Testing\n\u21D2 Chu\u1EA9n b\u1ECB portfolio UI/UX cho \u1EE9ng tuy\u1EC3n \u0111\u1EA1i h\u1ECDc ho\u1EB7c v\u1ECB tr\u00ED Junior UI/UX Designer",
    outputs: ["Mobile App Prototype", "Case Study"],
    content: "Figma, Prototype \u1EE9ng d\u1EE5ng/website.", objectives: "UI/UX Designer chuy\u00EAn nghi\u1EC7p",
    basic: { name: "UX Research C\u01A1 b\u1EA3n", desc: "User persona, wireframe, user flow." },
    advanced: { name: "UI Design System", desc: "Figma n\u00E2ng cao, component library, prototype." },
    intensive: { name: "D\u1EF1 \u00E1n App Prototype", desc: "Case study ho\u00E0n ch\u1EC9nh, usability testing, portfolio UI/UX." } };

  // Pricing - Multi-region (HN/HCM, Tỉnh, Online)
  // RBT: giữ nguyên 2025 (chỉ HN/HCM + Tỉnh, không Online)
  var roboticsPricingRegions = {
    sections: [
      { title: "Lộ trình thông thường", rows: [
        { route: "4 tháng (1 HP)", gocHN: "6M", kmHN: "", hpHN: "6M", gocT: "6M", kmT: "", hpT: "6M" },
        { route: "12 tháng (3 HP)", gocHN: "18M", kmHN: "10%", hpHN: "16.2M", gocT: "18M", kmT: "15%", hpT: "15.3M" },
        { route: "24 tháng (6 HP)", gocHN: "36M", kmHN: "30%", hpHN: "25.2M", gocT: "36M", kmT: "35%", hpT: "23.4M" },
        { route: "Toàn bộ lộ trình", gocHN: "Liên hệ tư vấn", kmHN: "", hpHN: "Ưu đãi", gocT: "Liên hệ tư vấn", kmT: "", hpT: "Ưu đãi", featured: true }
      ]},
      { title: "1-1", rows: [
        { route: "4 tháng (14 buổi)", gocHN: "14M", kmHN: "5%", hpHN: "13.3M", gocT: "14M", kmT: "5%", hpT: "13.3M" },
        { route: "12 tháng (42 buổi)", gocHN: "42M", kmHN: "10%", hpHN: "37.8M", gocT: "42M", kmT: "10%", hpT: "37.8M" },
        { route: "24 tháng (84 buổi)", gocHN: "84M", kmHN: "15%", hpHN: "71.4M", gocT: "84M", kmT: "15%", hpT: "71.4M" }
      ]},
      { title: "1-1 English Version", rows: [
        { route: "4 tháng (14 buổi)", gocHN: "21M", kmHN: "5%", hpHN: "20M", gocT: "21M", kmT: "5%", hpT: "20M" },
        { route: "12 tháng (42 buổi)", gocHN: "63M", kmHN: "10%", hpHN: "56.7M", gocT: "63M", kmT: "10%", hpT: "56.7M" },
        { route: "24 tháng (84 buổi)", gocHN: "126M", kmHN: "15%", hpHN: "107.1M", gocT: "126M", kmT: "15%", hpT: "107.1M" }
      ]}
    ]
  };

  // Coding 2026: dựa trên Roadmap-BT-2026 + concept 2025
  var codingPricingRegions = {
    sections: [
      { title: "Lộ trình thông thường", rows: [
        { route: "4 tháng", gocHN: "6M", kmHN: "", hpHN: "6M", gocT: "6M", kmT: "", hpT: "6M", gocONL: "5.5M", kmONL: "", hpONL: "5.5M" },
        { route: "12 tháng", gocHN: "18M", kmHN: "10%", hpHN: "16.2M", gocT: "18M", kmT: "15%", hpT: "15.3M", gocONL: "16.5M", kmONL: "20%", hpONL: "13.2M", note: "Thêm 1 AI4Learn" },
        { route: "24 tháng", gocHN: "51.5M", kmHN: "35%", hpHN: "33.5M", gocT: "51.5M", kmT: "40%", hpT: "30.9M", gocONL: "48.5M", kmONL: "45%", hpONL: "26.7M", note: "Thêm 1 AI4Learn" }
      ]},
      { title: "Cam kết bảo trợ đa ngành", rows: [
        { route: "BT đa ngành HS THPT", gocHN: "100M", kmHN: "15%", hpHN: "85M", gocT: "100M", kmT: "15%", hpT: "85M", gocONL: "85M", kmONL: "15%", hpONL: "72.3M", featured: true, note: "+AI4Learn, BF, BT đa ngành" },
        { route: "BT đa ngành HS THCS", gocHN: "155M", kmHN: "~19%", hpHN: "125M", gocT: "155M", kmT: "~19%", hpT: "125M", gocONL: "135M", kmONL: "~19%", hpONL: "110M", featured: true, note: "+AI4Learn, BF, BT đa ngành" },
        { route: "BT đa ngành HS TH", gocHN: "180M", kmHN: "~19%", hpHN: "145M", gocT: "180M", kmT: "~19%", hpT: "145M", gocONL: "160M", kmONL: "~19%", hpONL: "130M", featured: true, note: "+AI4Learn, BF, BT đa ngành" }
      ]},
      { title: "Bảo trợ du học", rows: [
        { route: "BT du học HS THPT", gocHN: "80M", kmHN: "~13%", hpHN: "70M", gocT: "80M", kmT: "~13%", hpT: "70M", gocONL: "", kmONL: "", hpONL: "", featured: true, note: "X-Global Tech Seed" },
        { route: "BT du học HS THCS", gocHN: "135M", kmHN: "~19%", hpHN: "110M", gocT: "135M", kmT: "~19%", hpT: "110M", gocONL: "", kmONL: "", hpONL: "", featured: true, note: "X-Global Tech Seed" },
        { route: "BT du học HS TH", gocHN: "160M", kmHN: "~19%", hpHN: "130M", gocT: "160M", kmT: "~19%", hpT: "130M", gocONL: "", kmONL: "", hpONL: "", featured: true, note: "X-Global Tech Seed" }
      ]},
      { title: "1-1", rows: [
        { route: "4 tháng (14 buổi)", gocHN: "14M", kmHN: "5%", hpHN: "13.3M", gocT: "14M", kmT: "5%", hpT: "13.3M", gocONL: "14M", kmONL: "5%", hpONL: "13.3M" },
        { route: "12 tháng (42 buổi)", gocHN: "42M", kmHN: "10%", hpHN: "37.8M", gocT: "42M", kmT: "10%", hpT: "37.8M", gocONL: "42M", kmONL: "10%", hpONL: "37.8M" },
        { route: "24 tháng (98 buổi)", gocHN: "96.5M", kmHN: "15%", hpHN: "82M", gocT: "96.5M", kmT: "15%", hpT: "82M", gocONL: "96.5M", kmONL: "15%", hpONL: "82M" }
      ]},
      { title: "1-1 English Version", rows: [
        { route: "4 tháng (14 buổi)", gocHN: "21M", kmHN: "5%", hpHN: "20M", gocT: "21M", kmT: "5%", hpT: "20M", gocONL: "21M", kmONL: "5%", hpONL: "20M" },
        { route: "12 tháng (42 buổi)", gocHN: "63M", kmHN: "10%", hpHN: "56.7M", gocT: "63M", kmT: "10%", hpT: "56.7M", gocONL: "63M", kmONL: "10%", hpONL: "56.7M" },
        { route: "24 tháng (98 buổi)", gocHN: "144.8M", kmHN: "15%", hpHN: "123M", gocT: "144.8M", kmT: "15%", hpT: "123M", gocONL: "144.8M", kmONL: "15%", hpONL: "123M" }
      ]}
    ]
  };
  var bfPricing = [
    { route: "HS THPT", price: "36M" },
    { route: "HS THPT + gói 12T", price: "33M" },
    { route: "HS THPT + gói 24T", price: "30M" }
  ];

  // Art 2026: dựa trên Full Roadmap Art + concept 2025
  var artPricingRegions = {
    sections: [
      { title: "Lộ trình thông thường", rows: [
        { route: "4 tháng", gocHN: "6M", kmHN: "", hpHN: "6M", gocT: "6M", kmT: "", hpT: "6M", gocONL: "5.5M", kmONL: "", hpONL: "5.5M", license: "500K" },
        { route: "12 tháng", gocHN: "18M", kmHN: "10%", hpHN: "16.2M", gocT: "18M", kmT: "15%", hpT: "15.3M", gocONL: "16.5M", kmONL: "20%", hpONL: "13.2M", license: "1M" },
        { route: "24 tháng", gocHN: "51.5M", kmHN: "35%", hpHN: "33.5M", gocT: "51.5M", kmT: "40%", hpT: "30.9M", gocONL: "48.5M", kmONL: "45%", hpONL: "26.7M", license: "2M" }
      ]},
      { title: "Cam kết bảo trợ", rows: [
        { route: "BT cho HS THPT", gocHN: "100M", kmHN: "15%", hpHN: "85M", gocT: "100M", kmT: "15%", hpT: "85M", gocONL: "", kmONL: "", hpONL: "", featured: true, license: "Free" },
        { route: "BT cho HS THCS", gocHN: "155M", kmHN: "~19%", hpHN: "125M", gocT: "155M", kmT: "~19%", hpT: "125M", gocONL: "135M", kmONL: "~19%", hpONL: "110M", featured: true, license: "Free" },
        { route: "BT cho HS TH", gocHN: "180M", kmHN: "~19%", hpHN: "145M", gocT: "180M", kmT: "~19%", hpT: "145M", gocONL: "160M", kmONL: "~19%", hpONL: "130M", featured: true, license: "Free" }
      ]},
      { title: "1-1", rows: [
        { route: "4 tháng (14 buổi)", gocHN: "14M", kmHN: "5%", hpHN: "13.3M", gocT: "14M", kmT: "5%", hpT: "13.3M", gocONL: "14M", kmONL: "5%", hpONL: "13.3M" },
        { route: "12 tháng (42 buổi)", gocHN: "42M", kmHN: "10%", hpHN: "37.8M", gocT: "42M", kmT: "10%", hpT: "37.8M", gocONL: "42M", kmONL: "10%", hpONL: "37.8M" },
        { route: "24 tháng (98 buổi)", gocHN: "96.5M", kmHN: "15%", hpHN: "82M", gocT: "96.5M", kmT: "15%", hpT: "82M", gocONL: "96.5M", kmONL: "15%", hpONL: "82M" }
      ]},
      { title: "1-1 English Version", rows: [
        { route: "4 tháng (14 buổi)", gocHN: "21M", kmHN: "5%", hpHN: "20M", gocT: "21M", kmT: "5%", hpT: "20M", gocONL: "21M", kmONL: "5%", hpONL: "20M" },
        { route: "12 tháng (42 buổi)", gocHN: "63M", kmHN: "10%", hpHN: "56.7M", gocT: "63M", kmT: "10%", hpT: "56.7M", gocONL: "63M", kmONL: "10%", hpONL: "56.7M" },
        { route: "24 tháng (98 buổi)", gocHN: "144.8M", kmHN: "15%", hpHN: "123M", gocT: "144.8M", kmT: "15%", hpT: "123M", gocONL: "144.8M", kmONL: "15%", hpONL: "123M" }
      ]}
    ]
  };

  // ===== DOM HELPERS =====
  function $(s) { return document.querySelector(s); }
  function $$(s) { return document.querySelectorAll(s); }
  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function(k) {
      if (k === "className") e.className = attrs[k];
      else if (k === "innerHTML") e.innerHTML = attrs[k];
      else if (k === "textContent") e.textContent = attrs[k];
      else if (k.startsWith("on")) e.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    });
    if (children) children.forEach(function(c) {
      if (typeof c === "string") e.appendChild(document.createTextNode(c));
      else if (c) e.appendChild(c);
    });
    return e;
  }

  function editableSpan(key, text) {
    var data = getEV(key, text);
    var span = el("span", { className: "editable-field", "data-key": key });
    span.style.whiteSpace = "pre-line";
    span.textContent = data;
    if (state.isAdmin) {
      span.setAttribute("contenteditable", "true");
      span.addEventListener("input", function() { state.editedData[key] = span.innerText; });
    }
    return span;
  }
  function getEV(key, fb) {
    if (state.editedData[key] !== undefined) return state.editedData[key];
    if (state.serverData[key] !== undefined) return state.serverData[key];
    return fb;
  }

  // ===== IMAGE MAPPING =====
  var courseImages = {
    robo_nam0: "./img/robo_nam0.jpg",
    robo_nam1: "./img/robo_nam1.jpg",
    robo_nam2: "./img/robo_nam2.jpg",
    robo_nam3: "./img/robo_nam3.jpg",
    code_scratch: "./img/code_scratch.jpg",
    code_gamemaker: "./img/code_gamemaker.jpg",
    code_appproducer: "./img/code_appproducer.jpg",
    code_webcreator: "./img/code_webcreator.jpg",
    code_cs: "./img/code_cs.jpg",
    code_bf: "./img/code_bf.jpg",
    code_domain_tech: "./img/code_domain_tech.jpg",
    code_domain_marketing: "./img/code_domain_marketing.jpg",
    code_domain_finance: "./img/code_domain_finance.jpg",
    code_domain_business: "./img/code_domain_business.jpg",
    code_internship: "./img/code_internship.jpg",
    code_duhoc: "./img/code_duhoc.jpg",
    art_nam0: "./img/art_nam0.jpg",
    art_nam1: "./img/art_nam1.jpg",
    art_nam2: "./img/art_nam2.jpg",
    art_nam3: "./img/art_nam3.jpg",
    art_nam4: "./img/art_nam4.jpg",
    art_nam5: "./img/art_nam5.jpg",
    art_nam6: "./img/art_nam6.jpg",
    art_nam7: "./img/art_nam7.jpg",
    art_bt_vieclam: "./img/art_bt_vieclam.jpg",
    art_bt_duhoc: "./img/art_bt_duhoc.jpg"
  };

  // ===== COURSE NODE =====
  function createNode(course, theme, isFirst, compact) {
    var cls = "course-node";
    if (compact) cls += " compact";
    if (isFirst) cls += " branded";
    if (course.pivot) cls += " pivot";
    if (course.endpoint) cls += " branded";

    var node = el("div", { className: cls, onClick: function() { showCourseDrawer(course); } });

    if (isFirst || course.endpoint) {
      node.style.background = "linear-gradient(135deg, " + theme.accent + " 0%, " + theme.accentDark + " 100%)";
      node.style.borderColor = theme.accent;
    }

    // Year badge
    var badge = el("div", { className: "node-year-badge" }, [editableSpan("year_" + course.id, course.year)]);
    if (!isFirst && !course.endpoint) {
      badge.style.background = theme.accentBg;
      badge.style.color = theme.accent;
    }
    node.appendChild(badge);

    // Name
    node.appendChild(el("div", { className: "node-name" }, [editableSpan("name_" + course.id, course.name)]));

    // Age
    if (course.age) {
      var ageDiv = el("div", { className: "node-age", style: (isFirst || course.endpoint) ? "color:rgba(255,255,255,0.85)" : "color:" + theme.accent });
      ageDiv.appendChild(editableSpan("age_" + course.id, course.age + " tu\u1ED5i"));
      node.appendChild(ageDiv);
    }

    // Value — show multiline on card
    if (course.value) {
      var uspDiv = el("div", { className: "node-usp" });
      uspDiv.innerHTML = "";
      var uspSpan = editableSpan("value_" + course.id, course.value);
      uspSpan.style.whiteSpace = "pre-line";
      uspDiv.appendChild(uspSpan);
      node.appendChild(uspDiv);
    }

    // Output tags
    if (course.outputs && course.outputs.length) {
      var outWrap = el("div", { className: "node-output" });
      course.outputs.forEach(function(o, oi) {
        outWrap.appendChild(el("span", { className: "node-output-item" }, [editableSpan("out_" + course.id + "_" + oi, o)]));
      });
      node.appendChild(outWrap);
    }

    return node;
  }

  // Connector between stair units
  function stairConnector(color) {
    var c = el("div", { className: "stair-connector" });
    var line = el("div", { className: "stair-connector-line", style: "background:" + color });
    var dot = el("div", { className: "stair-connector-dot", style: "background:" + color });
    c.appendChild(line);
    c.appendChild(dot);
    return c;
  }

  // ===== RENDER ASCENDING STAIRCASE (with phase labels aligned to nodes) =====
  function renderSnake(courses, themeName) {
    var theme = themes[themeName];
    var container = el("div", { className: "snake-timeline" });

    var compact = courses.length > 6;
    var stairStep = compact ? 18 : 28;

    // Detect phase boundaries
    var currentPhase = -1;
    var phaseStartIndices = [];
    courses.forEach(function(course, idx) {
      if (course.phase !== currentPhase) {
        currentPhase = course.phase;
        phaseStartIndices.push({ phase: currentPhase, idx: idx });
      }
    });

    // Build ascending staircase row
    var stairRow = el("div", { className: "snake-row" });
    var totalCourses = courses.length;

    // Track which phase indices we need to render inline
    var phaseMap = {};
    phaseStartIndices.forEach(function(pi) { phaseMap[pi.idx] = pi.phase; });

    courses.forEach(function(course, idx) {
      if (idx > 0) {
        var conn = stairConnector(theme.accent);
        var prevMB = (idx - 1) * stairStep;
        var currMB = idx * stairStep;
        conn.style.marginBottom = ((prevMB + currMB) / 2) + "px";
        conn.style.alignSelf = "flex-end";
        stairRow.appendChild(conn);
      }

      // Create stair unit wrapper (phase label + illustration + node)
      var unitWrapper = el("div", { className: "stair-unit-wrapper" });

      // Phase label aligned above this node if it starts a new phase
      if (phaseMap[idx] !== undefined) {
        var phaseInfo = theme.phases[phaseMap[idx]];
        if (phaseInfo) {
          var pLabel = el("div", { className: "phase-label phase-label-inline" });
          pLabel.style.background = phaseInfo.bg;
          pLabel.style.color = phaseInfo.color;
          pLabel.appendChild(editableSpan("phase_" + themeName + "_" + phaseMap[idx], phaseInfo.label));
          unitWrapper.appendChild(pLabel);
        }
      }

      var unit = el("div", { className: "stair-unit" + (compact ? " compact" : "") });
      unit.style.marginBottom = (idx * stairStep) + "px";

      // Illustration circle
      if (courseImages[course.id]) {
        var illus = el("div", { className: "stair-illustration" });
        var img = el("img", { src: courseImages[course.id], alt: course.name, loading: "lazy" });
        illus.appendChild(img);
        unit.appendChild(illus);
      }

      unit.appendChild(createNode(course, theme, idx === 0, compact));
      unitWrapper.appendChild(unit);
      stairRow.appendChild(unitWrapper);
    });

    container.appendChild(stairRow);
    return container;
  }

  // ===== RENDER: ROBOTICS =====
  function renderRoboticsRoadmap() {
    var c = $("#roadmapCanvas");
    c.innerHTML = "";

    c.appendChild(renderSnake(roboticsCourses, "robotics"));

    // Continue to Coding link
    var connWrap = el("div", { style: "display:flex;align-items:center;gap:8px;margin:16px 0 4px 0;" });
    connWrap.appendChild(el("div", { style: "width:4px;height:20px;background:#E31F26;border-radius:2px;opacity:0.3;" }));
    c.appendChild(connWrap);
    c.appendChild(el("button", { className: "continue-link", onClick: function() { switchRoadmap("coding"); } }, [editableSpan("continue_robo", "\u2192 Ti\u1EBFp t\u1EE5c l\u1ED9 tr\u00ECnh Coding")]));
  }

  // ===== RENDER: CODING =====
  function renderCodingRoadmap() {
    var c = $("#roadmapCanvas");
    c.innerHTML = "";
    var theme = themes.coding;

    c.appendChild(renderSnake(codingCourses, "coding"));

    // Tree branch
    var treeRoot = el("div", { className: "tree-root" });
    treeRoot.appendChild(el("div", { className: "tree-trunk", style: "background:" + theme.accent }));
    treeRoot.appendChild(el("div", { className: "tree-fork-label", style: "background:" + theme.accent }, [editableSpan("fork_label_coding", "Ch\u1ECDn h\u01B0\u1EDBng ph\u00E1t tri\u1EC3n")]));

    var treeFork = el("div", { className: "tree-fork" });
    treeFork.appendChild(el("div", { className: "tree-fork-bar", style: "background:" + theme.accent }));

    var branches = el("div", { className: "tree-branches" });

    // Left: BT Đa Ngành
    var bLeft = el("div", { className: "tree-branch" });
    bLeft.appendChild(el("div", { className: "tree-branch-stem", style: "background:#7C3AED;" }));
    bLeft.appendChild(el("div", { className: "tree-branch-label", style: "background:#F3E5F5;color:#6A1B9A;" }, [editableSpan("branch_label_code_left", "B\u1EA3o tr\u1EE3 \u0111a ng\u00E0nh")]));
    var leftC = el("div", { className: "tree-branch-content" });

    // BF card
    var bfCard = el("div", { className: "tree-card", onClick: function() {
      showGenericDrawer("Business Foundation", "Ch\u01B0\u01A1ng tr\u00ECnh v\u01B0\u1EDDn \u01B0\u01A1m kh\u1EDFi nghi\u1EC7p\n\nLv1: MKT & Communication (14 bu\u1ED5i)\n\u2022 Ti\u1EBFp th\u1ECB c\u01A1 b\u1EA3n, truy\u1EC1n th\u00F4ng th\u01B0\u01A1ng hi\u1EC7u, vi\u1EBFt content\n\nLv2: Sale & Operation (14 bu\u1ED5i)\n\u2022 K\u1EF9 n\u0103ng b\u00E1n h\u00E0ng, qu\u1EA3n l\u00FD v\u1EADn h\u00E0nh, ch\u0103m s\u00F3c kh\u00E1ch h\u00E0ng\n\nLv3: Finance & Accounting (14 bu\u1ED5i)\n\u2022 T\u00E0i ch\u00EDnh doanh nghi\u1EC7p, k\u1EBF to\u00E1n c\u01A1 b\u1EA3n, \u0111\u1ECDc hi\u1EC3u b\u00E1o c\u00E1o t\u00E0i ch\u00EDnh\n\nT\u1ED5ng: 3 \u00D7 14 bu\u1ED5i (2h/bu\u1ED5i)",
        "\u2022 T\u01B0 duy: T\u01B0 duy kinh doanh to\u00E0n di\u1EC7n \u2014 hi\u1EC3u v\u1EADn h\u00E0nh doanh nghi\u1EC7p t\u1EEB MKT \u0111\u1EBFn Finance\n\u2022 K\u1EF9 n\u0103ng: Giao ti\u1EBFp, thuy\u1EBFt ph\u1EE5c, l\u00EAn k\u1EBF ho\u1EA1ch, qu\u1EA3n l\u00FD ng\u00E2n s\u00E1ch\n\u2022 Ki\u1EBFn th\u1EE9c: Marketing, Sales, Operations, Finance & Accounting\n\u21D2 N\u1EC1n t\u1EA3ng \u0111\u1EC3 kh\u1EDFi nghi\u1EC7p ho\u1EB7c l\u00E0m vi\u1EC7c t\u1EA1i c\u00E1c doanh nghi\u1EC7p \u2014 hi\u1EC3u \u201Cto\u00E0n c\u1EA3nh\u201D tr\u01B0\u1EDBc khi chuy\u00EAn s\u00E2u", "code_bf");
    }});
    if (courseImages.code_bf) {
      var bfIllus = el("div", { className: "tree-card-illus" });
      bfIllus.appendChild(el("img", { src: courseImages.code_bf, alt: "Business Foundation", loading: "lazy" }));
      bfCard.appendChild(bfIllus);
    }
    bfCard.appendChild(el("div", { className: "tree-card-name" }, [editableSpan("card_name_bf", "Business Foundation")]));
    bfCard.appendChild(el("div", { className: "tree-card-meta" }, [editableSpan("card_meta_bf", "3 \u00D7 14 bu\u1ED5i")]));
    leftC.appendChild(bfCard);
    leftC.appendChild(el("div", { className: "tree-v-line", style: "background:#7C3AED;" }));
    leftC.appendChild(el("div", { className: "tree-sub-label" }, [editableSpan("sub_label_domain", "1 trong 4 Domain (12T):")]));

    var domGrid = el("div", { className: "tree-domain-grid" });
    var domainImgs = { tech: "code_domain_tech", marketing: "code_domain_marketing", finance: "code_domain_finance", business: "code_domain_business" };
    Object.keys(codingDomains).forEach(function(key) {
      var d = codingDomains[key];
      var card = el("div", { className: "tree-domain-card", onClick: function() { showDomainDrawer(key, d); } });
      if (courseImages[domainImgs[key]]) {
        var dIllus = el("div", { className: "domain-illus" });
        dIllus.appendChild(el("img", { src: courseImages[domainImgs[key]], alt: d.name, loading: "lazy" }));
        card.appendChild(dIllus);
      }
      card.appendChild(el("div", { className: "tree-domain-title" }, [editableSpan("dom_" + key, d.name)]));
      card.appendChild(el("div", { className: "tree-domain-desc" }, [editableSpan("dom_desc_" + key, d.desc)]));
      // Small course list
      if (d.courses) {
        var courseMini = el("div", { className: "tree-domain-courses", style: "font-size:0.44rem;color:var(--text-muted);margin-top:3px;line-height:1.3;white-space:pre-line;text-align:left;" });
        var lines = d.courses.split("\n").slice(0, 3);
        courseMini.appendChild(editableSpan("dom_mini_" + key, lines.join("\n")));
        card.appendChild(courseMini);
      }
      domGrid.appendChild(card);
    });
    leftC.appendChild(domGrid);
    leftC.appendChild(el("div", { className: "tree-v-line", style: "background:#7C3AED;" }));

    // Internship card
    var intCard = el("div", { className: "tree-card", onClick: function() {
      showGenericDrawer("Internship X \u2014 Career Kickstart", "Th\u1EF1c t\u1EADp chuy\u00EAn m\u00F4n t\u1EA1i doanh nghi\u1EC7p \u0111\u1ED1i t\u00E1c MindX\n\n\u2022 Th\u1EDDi l\u01B0\u1EE3ng: 30h th\u1EF1c t\u1EADp th\u1EF1c t\u1EBF\n\u2022 L\u00E0m vi\u1EC7c theo nh\u00F3m, qu\u1EA3n l\u00FD d\u1EF1 \u00E1n th\u1EF1c t\u1EBF\n\u2022 Mentor h\u01B0\u1EDBng d\u1EABn 1-1 su\u1ED1t qu\u00E1 tr\u00ECnh\n\u2022 Cam k\u1EBFt gi\u1EDBi thi\u1EC7u vi\u1EC7c l\u00E0m sau ho\u00E0n th\u00E0nh (Job Guarantee)\n\nS\u1EA3n ph\u1EA9m \u0111\u1EA7u ra: D\u1EF1 \u00E1n c\u00F4ng ngh\u1EC7 th\u1EF1c t\u1EBF \u0111\u01B0\u1EE3c doanh nghi\u1EC7p \u0111\u00E1nh gi\u00E1",
        "\u2022 T\u01B0 duy: T\u01B0 duy l\u00E0m vi\u1EC7c chuy\u00EAn nghi\u1EC7p, qu\u1EA3n l\u00FD th\u1EDDi gian & d\u1EF1 \u00E1n\n\u2022 K\u1EF9 n\u0103ng: Teamwork, communication, problem-solving trong m\u00F4i tr\u01B0\u1EDDng th\u1EF1c t\u1EBF\n\u2022 Ki\u1EBFn th\u1EE9c: \u00C1p d\u1EE5ng to\u00E0n b\u1ED9 ki\u1EBFn th\u1EE9c \u0111\u00E3 h\u1ECDc v\u00E0o d\u1EF1 \u00E1n doanh nghi\u1EC7p\n\u21D2 Kinh nghi\u1EC7m th\u1EF1c t\u1EBF \u0111\u1EA7u ti\u00EAn \u2014 b\u01B0\u1EDBc \u0111\u1EC7m v\u00E0o th\u1ECB tr\u01B0\u1EDDng lao \u0111\u1ED9ng c\u00F4ng ngh\u1EC7", "code_internship");
    }});
    if (courseImages.code_internship) {
      var intIllus = el("div", { className: "tree-card-illus" });
      intIllus.appendChild(el("img", { src: courseImages.code_internship, alt: "Internship", loading: "lazy" }));
      intCard.appendChild(intIllus);
    }
    intCard.appendChild(el("div", { className: "tree-card-name" }, [editableSpan("card_name_code_int", "Internship X")]));
    intCard.appendChild(el("div", { className: "tree-card-meta" }, [editableSpan("card_meta_code_int", "30h \u2014 Job guarantee")]));
    leftC.appendChild(intCard);
    bLeft.appendChild(leftC);
    branches.appendChild(bLeft);

    // Right: BT Du Học
    var bRight = el("div", { className: "tree-branch" });
    bRight.appendChild(el("div", { className: "tree-branch-stem", style: "background:#DB2777;" }));
    bRight.appendChild(el("div", { className: "tree-branch-label", style: "background:#FCE4EC;color:#AD1457;" }, [editableSpan("branch_label_code_right", "B\u1EA3o tr\u1EE3 du h\u1ECDc")]));
    var rightC = el("div", { className: "tree-branch-content" });
    var dhCard = el("div", { className: "tree-card pink", onClick: function() {
      showGenericDrawer("X-Global Tech Seed", "Ch\u01B0\u01A1ng tr\u00ECnh \u01B0\u01A1m t\u1EA1o danh m\u1EE5c \u0111\u1EA7u t\u01B0 (Portfolio) & h\u1ED3 s\u01A1 n\u0103ng l\u1EF1c c\u00F4ng ngh\u1EC7 \u0111\u1ED9c quy\u1EC1n t\u1EA1i VN\n\n\u2022 Chuy\u1EC3n h\u00F3a d\u1EF1 \u00E1n c\u00E1 nh\u00E2n th\u00E0nh s\u1EA3n ph\u1EA9m th\u1EF1c t\u1EBF c\u00F3 s\u1EE9c \u1EA3nh h\u01B0\u1EDFng\n\u2022 \u1EE8ng d\u1EE5ng AI Agent l\u00E0m \u0111\u00F2n b\u1EA9y hi\u1EC7u su\u1EA5t\n\u2022 3 ng\u00E1ch: L\u1EADp tr\u00ECnh (Web), D\u1EEF li\u1EC7u (DA), Thi\u1EBFt k\u1EBF (UI/UX)\n\u2022 4 Phase: Product Foundation \u2192 Core Dev \u2192 Global Portfolio \u2192 Demo Day\n\u2022 Th\u1EF1c t\u1EADp chuy\u00EAn m\u00F4n 15 bu\u1ED5i t\u1EA1i ph\u00F2ng ban MindX\n\u2022 Letter of Recommendation + B\u1EA3ng \u0111i\u1EC3m k\u1EF9 thu\u1EADt + Gi\u1EA5y ch\u1EE9ng nh\u1EADn s\u1EF1 ki\u1EC7n\n\n\u0110\u1ED1i t\u01B0\u1EE3ng: HS THPT (l\u1EDBp 11-12) \u0111\u00E3 ho\u00E0n th\u00E0nh n\u1EC1n t\u1EA3ng, ho\u1EB7c Sinh vi\u00EAn",
        "\u2022 T\u01B0 duy: T\u01B0 duy to\u00E0n c\u1EA7u, \u1EE9ng d\u1EE5ng AI v\u00E0o s\u1EA3n ph\u1EA9m th\u1EF1c t\u1EBF\n\u2022 K\u1EF9 n\u0103ng: X\u00E2y d\u1EF1ng portfolio chu\u1EA9n qu\u1ED1c t\u1EBF, deploy s\u1EA3n ph\u1EA9m, leadership\n\u2022 Ki\u1EBFn th\u1EE9c: N\u1EC1n t\u1EA3ng c\u00F4ng ngh\u1EC7 & AI Agent \u2014 l\u1EE3i th\u1EBF c\u1EA1nh tranh tuy\u1EC7t \u0111\u1ED1i\n\u21D2 H\u1ED3 s\u01A1 n\u1ED5i b\u1EADt v\u1EDBi s\u1EA3n ph\u1EA9m th\u1EF1c t\u1EBF, LOR, Internship & Tech Transcript", "code_duhoc");
    }});
    if (courseImages.code_duhoc) {
      var dhIllus = el("div", { className: "tree-card-illus" });
      dhIllus.appendChild(el("img", { src: courseImages.code_duhoc, alt: "Du h\u1ECDc", loading: "lazy" }));
      dhCard.appendChild(dhIllus);
    }
    dhCard.appendChild(el("div", { className: "tree-card-name" }, [editableSpan("card_name_code_dh", "X-Global Tech Seed")]));
    dhCard.appendChild(el("div", { className: "tree-card-meta" }, [editableSpan("card_meta_code_dh", "Portfolio & h\u1ED3 s\u01A1 du h\u1ECDc")]));
    rightC.appendChild(dhCard);
    bRight.appendChild(rightC);
    branches.appendChild(bRight);

    treeFork.appendChild(branches);
    treeRoot.appendChild(treeFork);
    c.appendChild(treeRoot);
  }

  // ===== RENDER: ART (branch after Năm 6) =====
  function renderArtRoadmap() {
    var c = $("#roadmapCanvas");
    c.innerHTML = "";
    var theme = themes.art;

    // Main staircase: Năm 0–6
    c.appendChild(renderSnake(artCourses, "art"));

    // Tree branch after Năm 6
    var treeRoot = el("div", { className: "tree-root" });
    treeRoot.appendChild(el("div", { className: "tree-trunk", style: "background:" + theme.accent }));
    treeRoot.appendChild(el("div", { className: "tree-fork-label", style: "background:" + theme.accent }, [editableSpan("fork_label_art", "Ch\u1ECDn h\u01B0\u1EDBng ph\u00E1t tri\u1EC3n")]));

    var treeFork = el("div", { className: "tree-fork" });
    treeFork.appendChild(el("div", { className: "tree-fork-bar", style: "background:" + theme.accent }));

    var branches = el("div", { className: "tree-branches" });

    // Left: BT Việc Làm — Năm 7 → Internship X
    var bLeft = el("div", { className: "tree-branch" });
    bLeft.appendChild(el("div", { className: "tree-branch-stem", style: "background:#7C3AED;" }));
    bLeft.appendChild(el("div", { className: "tree-branch-label", style: "background:#F3E5F5;color:#6A1B9A;" }, [editableSpan("branch_label_art_left", "B\u1EA3o tr\u1EE3 vi\u1EC7c l\u00E0m")]));
    var leftC = el("div", { className: "tree-branch-content" });

    // Năm 7 card
    var nam7Card = el("div", { className: "tree-card", onClick: function() { showCourseDrawer(artNam7); } });
    if (courseImages.art_nam7) {
      var n7Illus = el("div", { className: "tree-card-illus" });
      n7Illus.appendChild(el("img", { src: courseImages.art_nam7, alt: artNam7.name, loading: "lazy" }));
      nam7Card.appendChild(n7Illus);
    }
    nam7Card.appendChild(el("div", { className: "tree-card-name" }, [editableSpan("card_name_art_nam7", artNam7.name)]));
    nam7Card.appendChild(el("div", { className: "tree-card-meta" }, [editableSpan("card_meta_art_nam7", artNam7.age + " tu\u1ED5i \u2022 " + artNam7.year)]));
    leftC.appendChild(nam7Card);
    leftC.appendChild(el("div", { className: "tree-v-line", style: "background:#7C3AED;" }));

    // Internship X card (Art)
    var artIntCard = el("div", { className: "tree-card", onClick: function() {
      showGenericDrawer("Internship X \u2014 Art & Design", "Th\u1EF1c t\u1EADp chuy\u00EAn m\u00F4n t\u1EA1i doanh nghi\u1EC7p \u0111\u1ED1i t\u00E1c MindX\n\n\u2022 Th\u1EF1c h\u00E0nh thi\u1EBFt k\u1EBF cho d\u1EF1 \u00E1n doanh nghi\u1EC7p th\u1EF1c t\u1EBF\n\u2022 Mentor l\u00E0 designer chuy\u00EAn nghi\u1EC7p h\u01B0\u1EDBng d\u1EABn tr\u1EF1c ti\u1EBFp\n\u2022 Cam k\u1EBFt gi\u1EDBi thi\u1EC7u vi\u1EC7c l\u00E0m sau ho\u00E0n th\u00E0nh l\u1ED9 tr\u00ECnh Art\n\nV\u1ECB tr\u00ED: Graphic Designer, UI/UX Designer, Motion Designer",
        "\u2022 T\u01B0 duy: T\u01B0 duy l\u00E0m vi\u1EC7c chuy\u00EAn nghi\u1EC7p trong ng\u00E0nh s\u00E1ng t\u1EA1o\n\u2022 K\u1EF9 n\u0103ng: L\u00E0m vi\u1EC7c v\u1EDBi brief, deadline, feedback t\u1EEB kh\u00E1ch h\u00E0ng th\u1EF1c t\u1EBF\n\u2022 Ki\u1EBFn th\u1EE9c: Quy tr\u00ECnh thi\u1EBFt k\u1EBF chuy\u00EAn nghi\u1EC7p t\u1EEB concept \u0111\u1EBFn delivery\n\u21D2 Portfolio th\u1EF1c chi\u1EBFn + kinh nghi\u1EC7m l\u00E0m vi\u1EC7c th\u1EF1c t\u1EBF \u2014 s\u1EB5n s\u00E0ng \u1EE9ng tuy\u1EC3n", "art_internship");
    }});
    if (courseImages.art_bt_vieclam) {
      var aiIllus = el("div", { className: "tree-card-illus" });
      aiIllus.appendChild(el("img", { src: courseImages.art_bt_vieclam, alt: "Internship Art", loading: "lazy" }));
      artIntCard.appendChild(aiIllus);
    }
    artIntCard.appendChild(el("div", { className: "tree-card-name" }, [editableSpan("card_name_art_int", "Internship X")]));
    artIntCard.appendChild(el("div", { className: "tree-card-meta" }, [editableSpan("card_meta_art_int", "Cam k\u1EBFt vi\u1EC7c l\u00E0m")]));
    leftC.appendChild(artIntCard);
    bLeft.appendChild(leftC);
    branches.appendChild(bLeft);

    // Right: BT Du Học — nội dung riêng, không cần Năm 7
    var bRight = el("div", { className: "tree-branch" });
    bRight.appendChild(el("div", { className: "tree-branch-stem", style: "background:#DB2777;" }));
    bRight.appendChild(el("div", { className: "tree-branch-label", style: "background:#FCE4EC;color:#AD1457;" }, [editableSpan("branch_label_art_right", "B\u1EA3o tr\u1EE3 du h\u1ECDc")]));
    var rightC = el("div", { className: "tree-branch-content" });
    var dhCard = el("div", { className: "tree-card pink", onClick: function() {
      showGenericDrawer("X-Global Art Seed", "Ch\u01B0\u01A1ng tr\u00ECnh \u01B0\u01A1m t\u1EA1o danh m\u1EE5c \u0111\u1EA7u t\u01B0 (Portfolio) & h\u1ED3 s\u01A1 n\u0103ng l\u1EF1c ngh\u1EC7 thu\u1EADt \u0111\u1ED9c quy\u1EC1n t\u1EA1i VN\n\n\u2022 Chuy\u1EC3n h\u00F3a d\u1EF1 \u00E1n c\u00E1 nh\u00E2n th\u00E0nh portfolio ngh\u1EC7 thu\u1EADt chu\u1EA9n qu\u1ED1c t\u1EBF\n\u2022 \u1EE8ng d\u1EE5ng AI (Midjourney/DALL-E) l\u00E0m \u0111\u00F2n b\u1EA9y s\u00E1ng t\u1EA1o\n\u2022 \u0110a ph\u01B0\u01A1ng ti\u1EC7n: Digital Art + Motion + UI/UX + AI-generated content\n\u2022 4 Phase: Product Foundation \u2192 Core Dev \u2192 Global Portfolio \u2192 Demo Day\n\u2022 Th\u1EF1c t\u1EADp chuy\u00EAn m\u00F4n 15 bu\u1ED5i t\u1EA1i ph\u00F2ng ban MindX\n\u2022 Letter of Recommendation + Artist Statement + Gi\u1EA5y ch\u1EE9ng nh\u1EADn s\u1EF1 ki\u1EC7n\n\n\u0110\u1ED1i t\u01B0\u1EE3ng: HS THPT (l\u1EDBp 11-12) \u0111\u00E3 ho\u00E0n th\u00E0nh n\u1EC1n t\u1EA3ng, ho\u1EB7c Sinh vi\u00EAn",
        "\u2022 T\u01B0 duy: T\u01B0 duy ngh\u1EC7 thu\u1EADt to\u00E0n c\u1EA7u, \u1EE9ng d\u1EE5ng AI v\u00E0o s\u00E1ng t\u1EA1o\n\u2022 K\u1EF9 n\u0103ng: X\u00E2y d\u1EF1ng portfolio \u0111a ph\u01B0\u01A1ng ti\u1EC7n, Case Study tr\u00EAn Behance, leadership\n\u2022 Ki\u1EBFn th\u1EE9c: Chu\u1EA9n portfolio qu\u1ED1c t\u1EBF, Art foundation, design thinking\n\u21D2 H\u1ED3 s\u01A1 n\u1ED5i b\u1EADt v\u1EDBi portfolio th\u1EF1c t\u1EBF, LOR, Internship & Artist Statement", "art_duhoc");
    }});
    if (courseImages.art_bt_duhoc) {
      var dhIllus = el("div", { className: "tree-card-illus" });
      dhIllus.appendChild(el("img", { src: courseImages.art_bt_duhoc, alt: "Du h\u1ECDc Art", loading: "lazy" }));
      dhCard.appendChild(dhIllus);
    }
    dhCard.appendChild(el("div", { className: "tree-card-name" }, [editableSpan("card_name_art_dh", "X-Global Art Seed")]));
    dhCard.appendChild(el("div", { className: "tree-card-meta" }, [editableSpan("card_meta_art_dh", "Portfolio & h\u1ED3 s\u01A1 du h\u1ECDc")]));
    rightC.appendChild(dhCard);
    bRight.appendChild(rightC);
    branches.appendChild(bRight);

    treeFork.appendChild(branches);
    treeRoot.appendChild(treeFork);
    c.appendChild(treeRoot);
  }

  // ===== DRAWERS =====
  var _drawerTitleKey = "";
  function openDrawer(title, titleKey) {
    var drawer = $("#courseDrawer"), overlay = $("#drawerOverlay");
    _drawerTitleKey = titleKey || "";
    var dtEl = $("#drawerTitle");
    dtEl.innerHTML = "";
    if (titleKey) { dtEl.appendChild(editableSpan(titleKey, title)); } else { dtEl.textContent = title; }
    overlay.classList.remove("hidden");
    drawer.classList.remove("hidden");
    requestAnimationFrame(function() { requestAnimationFrame(function() {
      overlay.classList.add("visible");
      drawer.classList.add("open");
    }); });
  }
  function closeDrawer() {
    var drawer = $("#courseDrawer"), overlay = $("#drawerOverlay");
    drawer.classList.remove("open"); overlay.classList.remove("visible");
    setTimeout(function() { drawer.classList.add("hidden"); overlay.classList.add("hidden"); }, 300);
  }

  function showCourseDrawer(course) {
    var body = $("#drawerBody");
    body.innerHTML = "";
    if (course.age) {
      var ageBadge = el("div", { className: "drawer-age-badge" });
      ageBadge.appendChild(editableSpan("age_" + course.id, course.age + " tu\u1ED5i"));
      body.appendChild(ageBadge);
    }
    if (course.duration) {
      var s = el("div", { className: "drawer-section" });
      s.appendChild(el("h3", null, [editableSpan("h_dur_" + course.id, "Th\u1EDDi l\u01B0\u1EE3ng")]));
      s.appendChild(el("div", { className: "drawer-section-content" }, [editableSpan("dur_" + course.id, course.duration)]));
      body.appendChild(s);
    }
    // Course value section
    if (course.value) {
      var sv = el("div", { className: "drawer-section" });
      sv.appendChild(el("h3", null, [editableSpan("h_val_" + course.id, "Gi\u00E1 tr\u1ECB kh\u00F3a h\u1ECDc")]));
      var vBox = el("div", { className: "usp-box" });
      vBox.appendChild(el("p", null, [editableSpan("value_full_" + course.id, course.value)]));
      sv.appendChild(vBox);
      body.appendChild(sv);
    }
    if (course.content) {
      var s2 = el("div", { className: "drawer-section" });
      s2.appendChild(el("h3", null, [editableSpan("h_ct_" + course.id, "N\u1ED9i dung")]));
      s2.appendChild(el("div", { className: "drawer-section-content" }, [editableSpan("content_" + course.id, course.content)]));
      body.appendChild(s2);
    }
    if (course.objectives) {
      var s3 = el("div", { className: "drawer-section" });
      s3.appendChild(el("h3", null, [editableSpan("h_obj_" + course.id, "M\u1EE5c ti\u00EAu")]));
      s3.appendChild(el("div", { className: "drawer-section-content" }, [editableSpan("obj_" + course.id, course.objectives)]));
      body.appendChild(s3);
    }
    if (course.basic || course.advanced || course.intensive) {
      var s4 = el("div", { className: "drawer-section" });
      s4.appendChild(el("h3", null, [editableSpan("h_lv_" + course.id, "Chi ti\u1EBFt c\u1EA5p \u0111\u1ED9")]));
      var cards = el("div", { className: "level-cards" });
      [["basic","Basic"],["advanced","Advanced"],["intensive","Intensive"]].forEach(function(p) {
        var lvl = course[p[0]];
        if (!lvl) return;
        var lName = typeof lvl === "object" ? lvl.name : lvl;
        var lDesc = typeof lvl === "object" ? lvl.desc : "";
        var card = el("div", { className: "level-card" });
        card.appendChild(el("div", { className: "level-card-title" }, [editableSpan("lv_prefix_" + p[0] + "_" + course.id, p[1] + " \u2014 "), editableSpan("lv_" + p[0] + "_" + course.id, lName)]));
        if (lDesc) card.appendChild(el("div", { className: "level-card-desc" }, [editableSpan("lv_" + p[0] + "_d_" + course.id, lDesc)]));
        cards.appendChild(card);
      });
      s4.appendChild(cards);
      body.appendChild(s4);
    }
    openDrawer(getEV("name_" + course.id, course.name), "name_" + course.id);
  }

  function showDomainDrawer(key, domain) {
    var body = $("#drawerBody");
    body.innerHTML = "";
    // Value section
    if (domain.value) {
      var sv = el("div", { className: "drawer-section" });
      sv.appendChild(el("h3", null, [editableSpan("h_dom_val_" + key, "Gi\u00E1 tr\u1ECB kh\u00F3a h\u1ECDc")]));
      var vBox = el("div", { className: "usp-box" });
      vBox.appendChild(el("p", null, [editableSpan("dom_val_" + key, domain.value)]));
      sv.appendChild(vBox);
      body.appendChild(sv);
    }
    var s1 = el("div", { className: "drawer-section" });
    s1.appendChild(el("h3", null, [editableSpan("h_dom_ct_" + key, "N\u1ED9i dung")]));
    s1.appendChild(el("div", { className: "drawer-section-content" }, [editableSpan("dom_detail_" + key, domain.detail)]));
    body.appendChild(s1);
    if (domain.courses) {
      var sc = el("div", { className: "drawer-section" });
      sc.appendChild(el("h3", null, [editableSpan("h_dom_course_" + key, "M\u00F4n h\u1ECDc")]));
      sc.appendChild(el("div", { className: "drawer-section-content" }, [editableSpan("dom_courses_" + key, domain.courses)]));
      body.appendChild(sc);
    }
    var s2 = el("div", { className: "drawer-section" });
    s2.appendChild(el("h3", null, [editableSpan("h_dom_car_" + key, "C\u01A1 h\u1ED9i ngh\u1EC1 nghi\u1EC7p")]));
    s2.appendChild(el("div", { className: "drawer-section-content" }, [editableSpan("dom_car_" + key, domain.careers)]));
    body.appendChild(s2);
    openDrawer(getEV("dom_" + key, domain.name), "dom_" + key);
  }

  function showGenericDrawer(title, content, valueText, drawerKey) {
    var body = $("#drawerBody");
    body.innerHTML = "";
    var k = drawerKey || title.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
    if (valueText) {
      var sv = el("div", { className: "drawer-section" });
      sv.appendChild(el("h3", null, [editableSpan("h_gen_val_" + k, "Gi\u00E1 tr\u1ECB kh\u00F3a h\u1ECDc")]));
      var vBox = el("div", { className: "usp-box" });
      var vSpan = editableSpan("gen_val_" + k, valueText);
      vSpan.style.whiteSpace = "pre-line";
      vBox.appendChild(el("p", null, [vSpan]));
      sv.appendChild(vBox);
      body.appendChild(sv);
    }
    var s = el("div", { className: "drawer-section" });
    s.appendChild(el("h3", null, [editableSpan("h_gen_ct_" + k, "N\u1ED9i dung")]));
    var cSpan = editableSpan("gen_ct_" + k, content);
    cSpan.style.whiteSpace = "pre-line";
    s.appendChild(el("div", { className: "drawer-section-content" }, [cSpan]));
    body.appendChild(s);
    openDrawer(getEV("gen_title_" + k, title), "gen_title_" + k);
  }

  // ===== PRICING =====
  var pricingRegion = "hn"; // "hn", "tinh", "onl"

  function renderPricing() {
    var tables = $("#pricingTables");
    tables.innerHTML = "";
    if (state.currentRoadmap === "coding") {
      tables.appendChild(buildRegionTabs(true));
      tables.appendChild(buildRegionPricing("Coding", codingPricingRegions, "cd", true));
    } else if (state.currentRoadmap === "art") {
      tables.appendChild(buildRegionTabs(true));
      tables.appendChild(buildRegionPricing("Art", artPricingRegions, "ar", true));
    } else if (state.currentRoadmap === "robotics") {
      tables.appendChild(buildRegionTabs(false));
      tables.appendChild(buildRegionPricing("Robotics", roboticsPricingRegions, "rb", false));
    }
  }

  function buildRegionTabs(hasOnline) {
    var wrap = el("div", { className: "pricing-region-tabs" });
    var tabs = [
      { key: "hn", label: "HN/HCM" },
      { key: "tinh", label: "T\u1ec9nh" }
    ];
    if (hasOnline) tabs.push({ key: "onl", label: "Online" });
    tabs.forEach(function(t) {
      var btn = el("button", {
        className: "pricing-region-tab" + (pricingRegion === t.key ? " active" : ""),
        textContent: t.label,
        onClick: function() {
          pricingRegion = t.key;
          renderPricing();
        }
      });
      wrap.appendChild(btn);
    });
    return wrap;
  }

  function buildRegionPricing(subject, data, prefix, hasOnline) {
    var container = el("div");
    // Check if ANY section has license → force all tables to 5 cols for alignment
    var dataHasLicense = data.sections.some(function(s) { return s.rows.some(function(r) { return r.license !== undefined; }); });
    data.sections.forEach(function(sec, si) {
      var block = el("div", { className: "pricing-block" });
      var hdr = el("div", { className: "pricing-block-header" });
      hdr.appendChild(editableSpan("pt_" + prefix + "_" + si, sec.title));
      block.appendChild(hdr);

      var hasLicense = dataHasLicense;
      var headers = ["L\u1ed9 tr\u00ecnh", "HP G\u1ed1c", "CTKM", "H\u1ecdc ph\u00ed"];
      if (hasLicense) headers.push("Ph\u00ed B\u1ea3n quy\u1ec1n");

      var tableClass = "pricing-table" + (hasLicense ? " cols-5" : "");
      var table = el("table", { className: tableClass });
      var thead = el("thead");
      var tr = el("tr");
      headers.forEach(function(h) { tr.appendChild(el("th", { textContent: h })); });
      thead.appendChild(tr);
      table.appendChild(thead);

      var tbody = el("tbody");
      sec.rows.forEach(function(row, ri) {
        var k = prefix + "_" + si + "_" + ri;
        var goc, km, hp;
        if (pricingRegion === "hn") { goc = row.gocHN; km = row.kmHN; hp = row.hpHN; }
        else if (pricingRegion === "tinh") { goc = row.gocT; km = row.kmT; hp = row.hpT; }
        else { goc = row.gocONL || ""; km = row.kmONL || ""; hp = row.hpONL || ""; }

        var r = el("tr", { className: row.featured ? "featured" : "" });
        r.appendChild(el("td", {}, [editableSpan(k + "_route", row.route)]));
        r.appendChild(el("td", {}, [editableSpan(k + "_goc_" + pricingRegion, goc)]));
        r.appendChild(el("td", { className: "pricing-note" }, [editableSpan(k + "_km_" + pricingRegion, km)]));
        r.appendChild(el("td", { className: "pricing-value" }, [editableSpan(k + "_hp_" + pricingRegion, hp)]));
        if (hasLicense) r.appendChild(el("td", { className: "pricing-note" }, [editableSpan(k + "_lic", row.license || "")]));
        tbody.appendChild(r);
      });
      table.appendChild(tbody);
      block.appendChild(table);
      container.appendChild(block);
    });
    return container;
  }

  function buildSimplePricingBlock(title, headers, blockKey, rows) {
    var block = el("div", { className: "pricing-block" });
    var hdr = el("div", { className: "pricing-block-header" });
    hdr.appendChild(editableSpan("pt_" + blockKey, title));
    block.appendChild(hdr);
    var table = el("table", { className: "pricing-table" });
    var thead = el("thead");
    var tr = el("tr");
    headers.forEach(function(h, hi) { var th = el("th"); th.appendChild(editableSpan("ph_" + blockKey + "_" + hi, h)); tr.appendChild(th); });
    thead.appendChild(tr);
    table.appendChild(thead);
    var tbody = el("tbody");
    rows.forEach(function(row) {
      var r = el("tr", { className: row.featured ? "featured" : "" });
      row.cells.forEach(function(cell, ci) {
        var cls = ci === row.priceIdx ? "pricing-value" : (ci === row.cells.length - 1 && ci > 1 ? "pricing-note" : "");
        r.appendChild(el("td", { className: cls }, [cell]));
      });
      tbody.appendChild(r);
    });
    table.appendChild(tbody);
    block.appendChild(table);
    return block;
  }

  // ===== SWITCHING =====
  function switchRoadmap(name) {
    state.currentRoadmap = name;
    $$(".nav-item").forEach(function(btn) { btn.classList.toggle("active", btn.getAttribute("data-roadmap") === name); });
    var titles = { robotics: "L\u1ED9 tr\u00ECnh Robotics", coding: "L\u1ED9 tr\u00ECnh Coding", art: "L\u1ED9 tr\u00ECnh Art" };
    $("#pageTitle").innerHTML = "";
    $("#pageTitle").appendChild(editableSpan("pageTitle_" + name, titles[name] || "MindX Roadmap"));
    if (name === "robotics") {
      if (pricingRegion === "onl") pricingRegion = "hn";
      renderRoboticsRoadmap();
    }
    else if (name === "coding") renderCodingRoadmap();
    else if (name === "art") renderArtRoadmap();
    renderPricing();
    closeSidebar();
  }

  // ===== SIDEBAR =====
  function openSidebar() { $("#sidebar").classList.add("open"); $("#sidebarOverlay").classList.add("open"); }
  function closeSidebar() { $("#sidebar").classList.remove("open"); $("#sidebarOverlay").classList.remove("open"); }

  // ===== ADMIN =====
  function toggleAdmin() {
    if (state.isAdmin) {
      state.isAdmin = false;
      document.body.classList.remove("admin-mode");
      $("#adminBadge").classList.add("hidden");
      $("#saveBtn").classList.add("hidden");
      $("#adminToggle").classList.remove("active");
      switchRoadmap(state.currentRoadmap);
      return;
    }
    $("#adminModal").classList.remove("hidden");
    $("#adminPassword").value = "";
    $("#adminError").classList.add("hidden");
    setTimeout(function() { $("#adminPassword").focus(); }, 100);
  }
  function submitAdmin() {
    if ($("#adminPassword").value === ADMIN_PASSWORD) {
      state.isAdmin = true;
      document.body.classList.add("admin-mode");
      $("#adminBadge").classList.remove("hidden");
      $("#saveBtn").classList.remove("hidden");
      $("#adminToggle").classList.add("active");
      $("#adminModal").classList.add("hidden");
      switchRoadmap(state.currentRoadmap);
    } else { $("#adminError").classList.remove("hidden"); }
  }
  function saveData() {
    var btn = $("#saveBtn"); btn.disabled = true; btn.textContent = "\u0110ang l\u01B0u...";
    var allKeys = Object.keys(state.editedData);
    if (allKeys.length === 0) { btn.disabled = false; btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2h9l3 3v9H2V2z" stroke="currentColor" stroke-width="1.2"/><path d="M5 2v4h5V2M5 14v-4h6v4" stroke="currentColor" stroke-width="1.2"/></svg> L\u01B0u'; showToast("Kh\u00F4ng c\u00F3 thay \u0111\u1ED5i"); return; }

    // Split into batches of 10 keys to keep URL short
    var batches = [];
    for (var i = 0; i < allKeys.length; i += 10) {
      var batch = {};
      allKeys.slice(i, i + 10).forEach(function(k) { batch[k] = state.editedData[k]; });
      batches.push(batch);
    }

    var totalSaved = 0;
    var batchPromises = batches.map(function(batch) {
      var url = APPS_SCRIPT_URL + '?action=save_edits&data=' + encodeURIComponent(JSON.stringify(batch));
      return fetch(url).then(function(r) { return r.json(); }).then(function(d) {
        if (d.error) throw new Error(d.error);
        totalSaved += (d.saved || 0);
      });
    });

    Promise.all(batchPromises)
      .then(function() {
        showToast("\u0110\u00E3 l\u01B0u " + totalSaved + " thay \u0111\u1ED5i!");
        allKeys.forEach(function(k) { state.serverData[k] = state.editedData[k]; });
        state.editedData = {};
        // Re-render roadmap to reflect changes on cards
        switchRoadmap(state.currentRoadmap);
      })
      .catch(function(err) { showToast("L\u1ED7i l\u01B0u! " + err.message, true); })
      .finally(function() { btn.disabled = false; btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2h9l3 3v9H2V2z" stroke="currentColor" stroke-width="1.2"/><path d="M5 2v4h5V2M5 14v-4h6v4" stroke="currentColor" stroke-width="1.2"/></svg> L\u01B0u'; });
  }
  function loadServerData() {
    fetch(APPS_SCRIPT_URL + '?action=load_edits')
      .then(function(r) { return r.json(); })
      .then(function(d) {
        if (!d.error) state.serverData = d;
        switchRoadmap(state.currentRoadmap);
      })
      .catch(function() { switchRoadmap(state.currentRoadmap); });
  }
  function showToast(msg, isErr) {
    var t = el("div", { className: "toast" + (isErr ? " error" : ""), textContent: msg });
    document.body.appendChild(t);
    setTimeout(function() { t.remove(); }, 3000);
  }

  // ===== INIT =====
  function init() {
    $$(".nav-item").forEach(function(btn) { btn.addEventListener("click", function() { switchRoadmap(btn.getAttribute("data-roadmap")); }); });
    $("#hamburgerBtn").addEventListener("click", openSidebar);
    $("#sidebarClose").addEventListener("click", closeSidebar);
    $("#sidebarOverlay").addEventListener("click", closeSidebar);
    $("#adminToggle").addEventListener("click", toggleAdmin);
    $("#adminSubmit").addEventListener("click", submitAdmin);
    $("#adminCancel").addEventListener("click", function() { $("#adminModal").classList.add("hidden"); });
    $("#adminPassword").addEventListener("keydown", function(e) { if (e.key === "Enter") submitAdmin(); });
    $("#saveBtn").addEventListener("click", saveData);
    $("#drawerClose").addEventListener("click", closeDrawer);
    $("#drawerOverlay").addEventListener("click", closeDrawer);
    var hm = { "#coding": "coding", "#art": "art", "#robotics": "robotics" };
    switchRoadmap(hm[window.location.hash] || "robotics");
    loadServerData();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
