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
      value: "Con l\u1EA7n \u0111\u1EA7u ti\u00EAn CH\u1EA0M v\u00E0o c\u00F4ng ngh\u1EC7 \u2014 b\u1EB1ng tay, kh\u00F4ng ph\u1EA3i b\u1EB1ng m\u00E0n h\u00ECnh.\n\n\u1EDE \u0111\u1ED9 tu\u1ED5i 4\u20136, tr\u1EBB h\u1ECDc t\u1ED1t nh\u1EA5t khi \u0111\u01B0\u1EE3c c\u1EA7m n\u1EAFm v\u00E0 t\u1EF1 t\u1EA1o ra th\u1EE9 g\u00EC \u0111\u00F3 ho\u1EA1t \u0111\u1ED9ng. LEGO Spike Essential bi\u1EBFn m\u1ED7i bu\u1ED5i h\u1ECDc th\u00E0nh bu\u1ED5i kh\u00E1m ph\u00E1 \u2014 con l\u1EAFp r\u00E1p, nh\u1EA5n n\u00FAt, v\u00E0 th\u1EA5y robot C\u1EE6A M\u00CCNH chuy\u1EC3n \u0111\u1ED9ng.\n\n\u2726 Con bi\u1EBFt \"nguy\u00EAn nh\u00E2n\u2013k\u1EBFt qu\u1EA3\" b\u1EB1ng tay: nh\u1EA5n n\u00FAt \u2192 \u0111\u1ED9ng c\u01A1 quay \u2192 b\u00E1nh xe l\u0103n. N\u1EC1n t\u1EA3ng t\u01B0 duy logic m\u00E0 kh\u00F4ng b\u00E0i h\u1ECDc v\u1EE1 l\u00F2ng n\u00E0o d\u1EA1y \u0111\u01B0\u1EE3c.\n\u2726 Con t\u1EADp trung v\u00E0 ki\u00EAn nh\u1EABn h\u01A1n: l\u1EAFp sai \u2192 th\u00E1o ra \u2192 l\u1EAFp l\u1EA1i \u2192 th\u00E0nh c\u00F4ng. Con h\u1ECDc c\u00E1ch kh\u00F4ng b\u1ECF cu\u1ED9c m\u00E0 kh\u00F4ng b\u1ECB ai \u00E1p l\u1EF1c.\n\u2726 Con t\u1EF1 tin n\u00F3i \"Con l\u00E0m \u0111\u01B0\u1EE3c\" \u2014 v\u00EC con th\u1EF1c s\u1EF1 \u0111\u00E3 l\u00E0m ra th\u1EE9 g\u00EC \u0111\u00F3 ch\u1EA1y \u0111\u01B0\u1EE3c.\n\n\u1F916 S\u1EA3n ph\u1EA9m: Robot \u0111\u1ED9ng v\u1EADt (b\u1EA1ch tu\u1ED9c v\u1EABy ch\u00E2n, c\u00E1 s\u1EA5u h\u00E1 mi\u1EC7ng), tr\u1EF1c th\u0103ng c\u1EE9u h\u1ED9, xe v\u1EADn chuy\u1EC3n\n\nK\u1EBFt n\u1ED1i: N\u0103m 0 l\u00E0 n\u1EC1n t\u1EA3ng \u0111\u1EC3 con b\u01B0\u1EDBc v\u00E0o N\u0103m 1 (VEX GO) v\u1EDBi s\u1EF1 t\u1EF1 tin \"m\u00ECnh \u0111\u00E3 bi\u1EBFt robot l\u00E0 g\u00EC\".\nM\u1ED7i bu\u1ED5i h\u1ECDc l\u00E0 m\u1ED9t k\u1EF7 ni\u1EC7m \"con t\u1EF1 l\u00E0m \u0111\u01B0\u1EE3c\" \u2014 4 tu\u1ED5i l\u00E0 th\u1EDDi \u0111i\u1EC3m n\u00E3o b\u1ED9 ti\u1EBFp nh\u1EADn t\u1ED1t nh\u1EA5t.",
      outputs: ["M\u00F4 h\u00ECnh robot \u0111\u1ED9ng v\u1EADt", "Xe v\u1EADn chuy\u1EC3n", "Tr\u1EF1c th\u0103ng c\u1EE9u h\u1ED9"],
      content: "1. Kh\u00E1m ph\u00E1 robot c\u01A1 b\u1EA3n:\n - H\u1ECDc vi\u00EAn s\u1EBD \u0111\u01B0\u1EE3c l\u00E0m quen v\u1EDBi b\u1ED9 Kit LEGO Spike Essential.\n - H\u1ECDc c\u00E1ch l\u1EAFp r\u00E1p c\u00E1c m\u00F4 h\u00ECnh robot \u0111\u01A1n gi\u1EA3n.\n2. Kh\u00E1m ph\u00E1 th\u1EBF gi\u1EDBi \u0111\u1ED9ng v\u1EADt v\u00E0 m\u00F4i tr\u01B0\u1EDDng.\n3. S\u00E1ng t\u1EA1o Robot.\n4. Ph\u00E1t tri\u1EC3n t\u01B0 duy logic.\n5. L\u1EADp tr\u00ECnh m\u00F4 h\u00ECnh Robot.",
      objectives: "- L\u00E0m quen v\u1EDBi kh\u00E1i ni\u1EC7m Robot.\n- Nh\u1EADn bi\u1EBFt c\u00E1c b\u1ED9 ph\u1EADn c\u01A1 b\u1EA3n.\n- Ti\u1EBFp c\u1EADn t\u01B0 duy l\u1EADp tr\u00ECnh tr\u1EF1c quan.\n- Ph\u00E1t tri\u1EC3n k\u1EF9 n\u0103ng quan s\u00E1t.",
      basic: { name: "Ch\u1EA1m v\u00E0o th\u1EBF gi\u1EDBi Robot", desc: "L\u00E0m quen b\u1ED9 Kit LEGO Spike, l\u1EADp tr\u00ECnh Block Icon tr\u1EF1c quan." },
      advanced: { name: "Th\u1EBF gi\u1EDBi \u0111\u1ED9ng v\u1EADt", desc: "M\u00F4 ph\u1ECFng h\u00E0nh vi \u0111\u1ED9ng v\u1EADt, \u0111i\u1EC1u khi\u1EC3n 2 \u0111\u1ED9ng c\u01A1, c\u00E2u l\u1EC7nh l\u1EB7p." },
      intensive: { name: "Ki\u1EBFn t\u1EA1o Robot", desc: "D\u1EF1 \u00E1n ph\u1EE9c t\u1EA1p: \u0111\u00E0i ph\u00E1t thanh, tr\u1EF1c th\u0103ng c\u1EE9u h\u1ED9. Message Block." },
      pricing: [
        { route: "4 th\u00E1ng (1 HP)", goc: "4.5M", km: "", hp: "4.5M" },
        { route: "12 th\u00E1ng (3 HP)", goc: "13.5M", km: "10%", hp: "12.15M" }
      ] },
    { id: "robo_nam1", name: "Nh\u1EADp m\u00F4n Robotics", year: "N\u0103m 1", age: "6+", group: "Robot Explorers", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 0,
      value: "Con ch\u00EDnh th\u1EE9c gia nh\u1EADp c\u1ED9ng \u0111\u1ED3ng Robotics to\u00E0n c\u1EA7u \u2014 b\u1EB1ng kit chu\u1EA9n thi \u0111\u1EA5u qu\u1ED1c t\u1EBF.\n\nVEX GO l\u00E0 b\u1ED9 kit \u0111\u01B0\u1EE3c d\u00F9ng t\u1EA1i 80+ qu\u1ED1c gia cho h\u1ECDc sinh ti\u1EC3u h\u1ECDc. Khi con h\u1ECDc N\u0103m 1 t\u1EA1i MindX, con \u0111ang d\u00F9ng c\u00F9ng c\u00F4ng c\u1EE5 v\u1EDBi h\u1ECDc sinh c\u00E1c tr\u01B0\u1EDDng qu\u1ED1c t\u1EBF \u1EDF M\u1EF9, Singapore, Nh\u1EADt B\u1EA3n.\n\n\u2726 Con bi\u1EBFt thi\u1EBFt k\u1EBF tr\u01B0\u1EDBc khi l\u00E0m: v\u1EBD s\u01A1 \u0111\u1ED3 robot tr\u00EAn gi\u1EA5y \u2192 l\u1EAFp th\u1EED \u2192 \u0111i\u1EC1u ch\u1EC9nh \u2192 ho\u00E0n thi\u1EC7n. \u0110\u00E2y l\u00E0 quy tr\u00ECnh k\u1EF9 s\u01B0, kh\u00F4ng ph\u1EA3i quy tr\u00ECnh h\u1ECDc thu\u1ED9c.\n\u2726 Con l\u1EADp tr\u00ECnh c\u00F3 m\u1EE5c ti\u00EAu: kh\u00F4ng ph\u1EA3i \"code cho xong b\u00E0i\" m\u00E0 \"robot ph\u1EA3i ho\u00E0n th\u00E0nh nhi\u1EC7m v\u1EE5 c\u1EE5 th\u1EC3\". Con h\u1ECDc gi\u00E1 tr\u1ECB c\u1EE7a deadline v\u00E0 k\u1EBFt qu\u1EA3 th\u1EADt.\n\u2726 Con l\u00E0m vi\u1EC7c nh\u00F3m l\u1EA7n \u0111\u1EA7u c\u00F3 t\u1ED5 ch\u1EE9c: ph\u00E2n vai, th\u1EA3o lu\u1EADn b\u1EA5t \u0111\u1ED3ng, t\u00ECm gi\u1EA3i ph\u00E1p chung.\n\n\u1F916 S\u1EA3n ph\u1EA9m: Robot giao h\u00E0ng (v\u1EADn chuy\u1EC3n v\u1EADt qua \u0111\u01B0\u1EDDng ray, d\u1EEBng \u0111\u00FAng tr\u1EA1m), C\u00E1nh c\u1EEDa th\u00F4ng minh (t\u1EF1 m\u1EDF khi ph\u00E1t hi\u1EC7n ng\u01B0\u1EDDi, t\u1EF1 \u0111\u00F3ng sau 3 gi\u00E2y)\n\nK\u1EBFt n\u1ED1i: N\u0103m 1 x\u00E2y n\u1EC1n t\u1EA3ng cho N\u0103m 2 \u2014 con \u0111\u00E3 quen VEX GO, \u0111\u00E3 bi\u1EBFt l\u1EADp tr\u00ECnh \u0111i\u1EC1u ki\u1EC7n c\u01A1 b\u1EA3n.\nNh\u00ECn con v\u1EC1 nh\u00E0 k\u1EC3 \"h\u00F4m nay con l\u00E0m robot c\u00E1nh c\u1EEDa t\u1EF1 \u0111\u1ED9ng\" \u2014 \u0111\u00F3 l\u00E0 kho\u1EA3nh kh\u1EAFc Qu\u00FD Ph\u1EE5 huynh bi\u1EBFt con \u0111ang tr\u1EDF th\u00E0nh ng\u01B0\u1EDDi ki\u1EBFn t\u1EA1o.",
      outputs: ["Robot giao h\u00E0ng", "B\u0103ng chuy\u1EC1n", "Robot th\u1EC3 thao"],
      content: "1. L\u00E0m quen v\u1EDBi VEX GO Robotics Kit.\n2. L\u1EAFp r\u00E1p m\u00F4 h\u00ECnh robot \u0111\u01A1n gi\u1EA3n v\u1EDBi VEX GO.\n3. Kh\u00E1m ph\u00E1 \u1EE9ng d\u1EE5ng robot trong \u0111\u1EDDi s\u1ED1ng.\n4. L\u1EADp tr\u00ECnh Robot th\u1EF1c hi\u1EC7n nhi\u1EC7m v\u1EE5 v\u1EDBi VEXcode GO.",
      objectives: "- L\u00E0m quen b\u1ED9 Kit VEX GO Robotics.\n- Hi\u1EC3u nguy\u00EAn t\u1EAFc ho\u1EA1t \u0111\u1ED9ng robot.\n- L\u1EADp tr\u00ECnh k\u00E9o th\u1EA3 Block Icon v\u00E0 Word Block.\n- K\u1EF9 n\u0103ng l\u00E0m vi\u1EC7c nh\u00F3m.",
      basic: { name: "H\u00E0nh tr\u00ECnh Sao H\u1ECFa", desc: "VEX GO Kit, VEXcode GO, l\u1EADp tr\u00ECnh Block Icon tr\u1EF1c quan." },
      advanced: { name: "Khu V\u01B0\u1EDDn B\u00E1ch Th\u00FA", desc: "M\u00F4 ph\u1ECFng h\u00E0nh vi \u0111\u1ED9ng v\u1EADt, 2 \u0111\u1ED9ng c\u01A1, c\u1EA3m bi\u1EBFn." },
      intensive: { name: "Cu\u1ED9c Tr\u1EDF L\u1EA1i Sao H\u1ECFa", desc: "Robot t\u1EF1 \u0111\u1ED9ng, if-else, v\u00F2ng l\u1EB7p, c\u1EA3m bi\u1EBFn m\u1EAFt." } },
    { id: "robo_nam2", name: "Truy t\u00ECm b\u00ED \u1EA9n Robot", year: "N\u0103m 2", age: "8+", group: "Robot Innovators", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 1,
      value: "Con \u0111\u1EB7t c\u00E2u h\u1ECFi \"T\u1EA1i sao?\" v\u00E0 t\u1EF1 t\u00ECm ra c\u00E2u tr\u1EA3 l\u1EDDi \u2014 kh\u00F4ng c\u1EA7n gi\u00E1o vi\u00EAn \u0111\u01B0a \u0111\u00E1p \u00E1n.\n\nN\u0103m 2 l\u00E0 n\u0103m con tr\u1EDF th\u00E0nh ng\u01B0\u1EDDi gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1 th\u1EADt s\u1EF1: b\u00E0i to\u00E1n kh\u00F4ng c\u00F3 \u0111\u00E1p \u00E1n m\u1EABu, robot c\u00F3 th\u1EC3 h\u1ECFng nhi\u1EC1u l\u1EA7n tr\u01B0\u1EDBc khi ch\u1EA1y \u0111\u00FAng, v\u00E0 con ph\u1EA3i t\u1EF1 debug \u2014 t\u00ECm l\u1ED7i, ph\u00E2n t\u00EDch, s\u1EEDa, th\u1EED l\u1EA1i.\n\n\u2726 Con kh\u00F4ng c\u00F2n s\u1EE3 \"sai\": N\u0103m 2 c\u00F3 nhi\u1EC1u bu\u1ED5i robot h\u1ECFng h\u01A1n robot ch\u1EA1y. Con h\u1ECDc r\u1EB1ng h\u1ECFng kh\u00F4ng ph\u1EA3i th\u1EA5t b\u1EA1i \u2014 h\u1ECFng l\u00E0 th\u00F4ng tin \u0111\u1EC3 c\u1EA3i thi\u1EC7n.\n\u2726 Con t\u01B0 duy logic n\u00E2ng cao: \u0111i\u1EC1u ki\u1EC7n if/else, v\u00F2ng l\u1EB7p c\u00F3 \u0111i\u1EC1u ki\u1EC7n d\u1EEBng, c\u1EA3m bi\u1EBFn k\u1EBFt h\u1EE3p.\n\u2726 Con tr\u00ECnh b\u00E0y t\u1EF1 tin: cu\u1ED1i m\u1ED7i module, con thuy\u1EBFt tr\u00ECnh thi\u1EBFt k\u1EBF tr\u01B0\u1EDBc l\u1EDBp \u2014 m\u00F4 t\u1EA3 b\u00E0i to\u00E1n, gi\u1EA3i ph\u00E1p, k\u1EBFt qu\u1EA3. K\u1EF9 n\u0103ng m\u00E0 90% ng\u01B0\u1EDDi l\u1EDBn v\u1EABn s\u1EE3.\n\n\u1F916 S\u1EA3n ph\u1EA9m: Robot c\u1EE9u h\u1ED9 (t\u1EF1 n\u00E9 v\u1EADt c\u1EA3n b\u1EB1ng c\u1EA3m bi\u1EBFn kho\u1EA3ng c\u00E1ch), Xe gom r\u00E1c t\u1EF1 \u0111\u1ED9ng (ph\u00E1t hi\u1EC7n v\u1EADt b\u1EB1ng c\u1EA3m bi\u1EBFn m\u00E0u, ph\u00E2n lo\u1EA1i theo k\u00EDch th\u01B0\u1EDBc)\n\nK\u1EBFt n\u1ED1i: N\u0103m 2 l\u00E0 n\u0103m \"ch\u00EDn mu\u1ED3i\" tr\u01B0\u1EDBc khi b\u01B0\u1EDBc l\u00EAn VEX IQ \u1EDF N\u0103m 3.\n\u0110\u1EBFn N\u0103m 2, Qu\u00FD Ph\u1EE5 huynh s\u1EBD nh\u1EADn ra con kh\u00F4ng c\u00F2n nh\u1EDD gi\u00FAp b\u00E0i nh\u01B0 tr\u01B0\u1EDBc \u2014 con ng\u1ED3i t\u1EF1 ngh\u0129, t\u1EF1 th\u1EED, t\u1EF1 h\u1ECFi \"T\u1EA1i sao c\u00E1i n\u00E0y kh\u00F4ng ch\u1EA1y?\". \u0110\u00F3 l\u00E0 t\u01B0 duy m\u00E0 kh\u00F4ng tr\u01B0\u1EDDng h\u1ECDc n\u00E0o c\u00F3 th\u1EC3 d\u1EA1y theo c\u00E1ch n\u00E0y.",
      outputs: ["Robot c\u1EE9u h\u1ED9", "Xe gom r\u00E1c t\u1EF1 \u0111\u1ED9ng", "Robot tr\u1EE3 th\u1EE7"],
      content: "1. Kh\u00E1m ph\u00E1 s\u1EF1 k\u1EF3 di\u1EC7u c\u1EE7a Robot.\n2. L\u1EAFp r\u00E1p v\u00E0 s\u00E1ng t\u1EA1o m\u00F4 h\u00ECnh.\n3. L\u1EADp tr\u00ECnh Robot ho\u00E0n th\u00E0nh nhi\u1EC7m v\u1EE5.",
      objectives: "- Robot ph\u1EA3n \u1EE9ng v\u1EDBi m\u00F4i tr\u01B0\u1EDDng.\n- L\u1EAFp r\u00E1p theo h\u01B0\u1EDBng d\u1EABn v\u00E0 s\u00E1ng t\u1EA1o.\n- L\u1EADp tr\u00ECnh \u0111i\u1EC1u ki\u1EC7n, v\u00F2ng l\u1EB7p.",
      basic: { name: "H\u00E0nh tr\u00ECnh sao h\u1ECFa", desc: "VEX GO Kit, VEXcode GO, l\u1EADp tr\u00ECnh c\u01A1 b\u1EA3n." },
      advanced: { name: "Th\u00E0nh ph\u1ED1 hi\u1EC7n \u0111\u1EA1i", desc: "Robot b\u00E1n t\u1EF1 \u0111\u1ED9ng, 2 \u0111\u1ED9ng c\u01A1, if-else." },
      intensive: { name: "Th\u1EED th\u00E1ch Robot", desc: "Robot t\u1EF1 \u0111\u1ED9ng, to\u00E1n t\u1EED, repeat until." } },
    { id: "robo_nam3", name: "S\u00E1ng t\u1EA1o Robot", year: "N\u0103m 3", age: "10+", group: "Robot Innovators", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 1,
      value: "Con thi\u1EBFt k\u1EBF Robot thi \u0111\u1EA5u qu\u1ED1c t\u1EBF \u2014 v\u00E0 s\u1EB5n s\u00E0ng \u0111\u1EA1i di\u1EC7n cho Vi\u1EC7t Nam.\n\nVEX IQ l\u00E0 kit thi \u0111\u1EA5u ch\u00EDnh th\u1EE9c c\u1EE7a VEX IQ Challenge \u2014 gi\u1EA3i Robotics K12 uy t\u00EDn nh\u1EA5t th\u1EBF gi\u1EDBi, v\u1EDBi 30,000+ \u0111\u1ED9i t\u1EEB 80+ qu\u1ED1c gia. H\u1ECDc vi\u00EAn MindX N\u0103m 3 d\u00F9ng kit n\u00E0y kh\u00F4ng ph\u1EA3i \u0111\u1EC3 h\u1ECDc \u2014 m\u00E0 \u0111\u1EC3 thi \u0111\u1EA5u th\u1EADt.\n\n\u2726 Con l\u1EADp tr\u00ECnh text-based nh\u01B0 k\u1EF9 s\u01B0: kh\u00F4ng c\u00F2n k\u00E9o th\u1EA3, con vi\u1EBFt code Python/C++ \u0111\u1EC3 \u0111i\u1EC1u khi\u1EC3n robot v\u1EDBi \u0111\u1ED9 ch\u00EDnh x\u00E1c cao \u2014 b\u01B0\u1EDBc n\u1EC1n t\u1EA3ng \u0111\u1EC3 h\u1ECDc b\u1EA5t k\u1EF3 ng\u00F4n ng\u1EEF l\u1EADp tr\u00ECnh n\u00E0o.\n\u2726 Con hi\u1EC3u PID controller \u2014 nguy\u00EAn l\u00FD \u0111i\u1EC1u khi\u1EC3n c\u1ED1t l\u00F5i c\u1EE7a m\u1ECDi h\u1EC7 th\u1ED1ng t\u1EF1 \u0111\u1ED9ng, t\u1EEB xe t\u1EF1 l\u00E1i Tesla \u0111\u1EBFn c\u00E1nh tay robot nh\u00E0 m\u00E1y.\n\u2726 Con c\u00F3 t\u01B0 duy thi \u0111\u1EA5u: thi\u1EBFt k\u1EBF d\u01B0\u1EDBi \u00E1p l\u1EF1c th\u1EDDi gian, t\u1ED1i \u01B0u h\u00F3a t\u1EEBng gram tr\u1ECDng l\u01B0\u1EE3ng v\u00E0 t\u1EEBng d\u00F2ng code.\n\n\u1F916 S\u1EA3n ph\u1EA9m: Xe t\u1EF1 l\u00E1i PID (gi\u1EEF \u0111\u01B0\u1EDDng th\u1EB3ng, v\u00E0o cua ch\u00EDnh x\u00E1c), C\u00E1nh tay robot (g\u1EAFp, di chuy\u1EC3n, th\u1EA3 v\u1EADt \u0111\u00FAng t\u1ECDa \u0111\u1ED9 v\u1EDBi \u0111\u1ED9 sai s\u1ED1 < 5mm)\n\nK\u1EBFt n\u1ED1i: Sau N\u0103m 3, con c\u00F3 n\u1EC1n t\u1EA3ng logic + hands-on v\u1EEFng ch\u1EAFc \u0111\u1EC3 b\u01B0\u1EDBc v\u00E0o Coding (Scratch, Python) ho\u1EB7c AI/Data Science. Con c\u0169ng \u0111\u1EE7 n\u1EC1n t\u1EA3ng \u0111\u1EC3 thi \u0111\u1EA5u VEX IQ c\u1EA5p th\u00E0nh ph\u1ED1 v\u00E0 qu\u1ED1c gia.\nN\u0103m 3 l\u00E0 th\u1EDDi \u0111i\u1EC3m Qu\u00FD Ph\u1EE5 huynh nh\u00ECn con v\u00E0 ngh\u0129: \"Con m\u00ECnh \u0111ang l\u00E0m nh\u1EEFng th\u1EE9 m\u00E0 ba m\u1EB9 kh\u00F4ng hi\u1EC3u h\u1EBFt \u2014 v\u00E0 \u0111i\u1EC1u \u0111\u00F3 tuy\u1EC7t v\u1EDDi.\" \u0110\u00F3 l\u00E0 kho\u1EA3nh kh\u1EAFc con th\u1EF1c s\u1EF1 v\u01B0\u1EE3t qua v\u00E0 t\u1EF1 \u0111\u1EE9ng v\u1EEFng.",
      outputs: ["Robot t\u1EF1 \u0111i\u1EC1u h\u01B0\u1EDBng PID", "C\u00E1nh tay robot", "Xe t\u1EF1 l\u00E1i"],
      content: "1. T\u00ECm hi\u1EC3u t\u1EF1 \u0111\u1ED9ng h\u00F3a.\n2. N\u00E2ng cao l\u1EAFp r\u00E1p v\u00E0 l\u1EADp tr\u00ECnh.\n3. Thu\u1EADt to\u00E1n l\u1EADp tr\u00ECnh Robot.",
      objectives: "- Ki\u1EBFn th\u1EE9c t\u1EF1 \u0111\u1ED9ng h\u00F3a.\n- \u00C1p d\u1EE5ng thu\u1EADt to\u00E1n.\n- L\u1EADp tr\u00ECnh qua controller.\n- Gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1.",
      basic: { name: "T\u01B0\u01A1ng t\u00E1c h\u1EC7 th\u1ED1ng", desc: "\u1EE8ng d\u1EE5ng Robotics, VEX IQ Kit, VEXcode IQ." },
      advanced: { name: "\u0110i\u1EC1u khi\u1EC3n t\u1ED1i \u01B0u", desc: "VEX IQ Controller, di chuy\u1EC3n, n\u00E2ng-h\u1EA1." },
      intensive: { name: "Thu\u1EADt to\u00E1n trong Robotics", desc: "PID controller, b\u00E1m t\u01B0\u1EDDng, d\u00F2 line, My Blocks." } }
  ];

  var codingCourses = [
    { id: "code_scratch", name: "Scratch \u2014 App Creator", year: "N\u0103m 1", age: "8+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 0,
      value: "Con t\u1EA1o ra tr\u00F2 ch\u01A1i \u0111\u1EA7u ti\u00EAn c\u1EE7a m\u00ECnh \u2014 v\u00E0 c\u00F3 th\u1EC3 cho b\u1EA1n b\u00E8 ch\u01A1i ngay h\u00F4m \u0111\u00F3.\n\nScratch l\u00E0 ng\u00F4n ng\u1EEF l\u1EADp tr\u00ECnh k\u00E9o th\u1EA3 c\u1EE7a MIT, \u0111\u01B0\u1EE3c d\u00F9ng t\u1EA1i 150+ qu\u1ED1c gia \u0111\u1EC3 d\u1EA1y t\u01B0 duy l\u1EADp tr\u00ECnh cho tr\u1EBB 8\u201311 tu\u1ED5i. Kh\u00F4ng c\u00F3 syntax kh\u00F3, kh\u00F4ng c\u00F3 l\u1ED7i ch\u00EDnh t\u1EA3 \u2014 con t\u1EADp trung v\u00E0o \u00FD t\u01B0\u1EDFng v\u00E0 logic, kh\u00F4ng v\u00E0o c\u00FA ph\u00E1p.\n\n\u2726 Con hi\u1EC3u m\u00E1y t\u00EDnh \"ngh\u0129 g\u00EC\": v\u00F2ng l\u1EB7p, \u0111i\u1EC1u ki\u1EC7n, bi\u1EBFn s\u1ED1 \u2014 ba kh\u00E1i ni\u1EC7m n\u1EC1n t\u1EA3ng c\u1EE7a m\u1ECDi ph\u1EA7n m\u1EC1m tr\u00EAn th\u1EBF gi\u1EDBi. Con hi\u1EC3u b\u1EB1ng c\u00E1ch T\u1EA0O RA, kh\u00F4ng b\u1EB1ng c\u00E1ch \u0111\u1ECDc s\u00E1ch.\n\u2726 Con c\u00F3 s\u1EA3n ph\u1EA9m \u0111\u1EC3 khoe: game con l\u00E0m c\u00F3 th\u1EC3 g\u1EEDi link cho b\u1EA1n b\u00E8 v\u00E0 h\u1ECD ch\u01A1i \u0111\u01B0\u1EE3c ngay.\n\u2726 Con bi\u1EBFt \"chia nh\u1ECF v\u1EA5n \u0111\u1EC1 l\u1EDBn\": \u0111\u1EC3 l\u00E0m game, con ph\u1EA3i chia ra: nh\u00E2n v\u1EADt di chuy\u1EC3n + t\u00EDnh \u0111i\u1EC3m + game over + m\u00E0n h\u00ECnh ch\u00EDnh.\n\n\u1F3AE S\u1EA3n ph\u1EA9m: Game platformer ho\u00E0n ch\u1EC9nh (nh\u00E2n v\u1EADt di chuy\u1EC3n, thu \u0111\u1ED3 v\u1EADt, tr\u00E1nh k\u1EBB th\u00F9, \u0111\u1EBFm \u0111i\u1EC3m, c\u00F3 3 m\u00E0n), C\u00E2u chuy\u1EC7n t\u01B0\u01A1ng t\u00E1c (nh\u00E2n v\u1EADt tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi, k\u1EC3 chuy\u1EC7n c\u00F3 nh\u00E1nh)\n\nK\u1EBFt n\u1ED1i: Scratch l\u00E0 \"ng\u00F4i tr\u01B0\u1EDDng l\u1EADp tr\u00ECnh\" \u2014 con ra tr\u01B0\u1EDDng v\u1EDBi t\u01B0 duy thu\u1EADt to\u00E1n r\u00F5 r\u00E0ng, s\u1EB5n s\u00E0ng h\u1ECDc Python trong kh\u00F3a ti\u1EBFp theo m\u00E0 kh\u00F4ng b\u1ECB shock v\u1EC1 logic.\nKhi con ng\u1ED3i gi\u1EA3i th\u00EDch cho b\u1EA1n c\u00E1ch code game c\u1EE7a m\u00ECnh ho\u1EA1t \u0111\u1ED9ng, Qu\u00FD Ph\u1EE5 huynh \u0111ang nh\u00ECn th\u1EA5y m\u1ED9t k\u1EF9 n\u0103ng m\u00E0 th\u1EBF gi\u1EDBi s\u1EBD c\u1EA7n su\u1ED1t 30 n\u0103m t\u1EDBi.",
      outputs: ["\u1EE8ng d\u1EE5ng Scratch", "Tr\u00F2 ch\u01A1i \u0111\u01A1n gi\u1EA3n"],
      content: "X\u00E2y d\u1EF1ng n\u1EC1n t\u1EA3ng t\u01B0 duy l\u1EADp tr\u00ECnh qua Scratch.", objectives: "- T\u01B0 duy l\u1EADp tr\u00ECnh logic.\n- S\u00E1ng t\u1EA1o \u1EE9ng d\u1EE5ng.\n- Gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1.",
      basic: "Scratch Basic", advanced: "Scratch Advanced", intensive: "Scratch Intensive" },
    { id: "code_gamemaker", name: "Game Creator", year: "N\u0103m 2", age: "11+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i + AI4Learn", phase: 0,
      value: "Con kh\u00F4ng ch\u1EC9 ch\u01A1i game \u2014 con thi\u1EBFt k\u1EBF v\u00E0 x\u00E2y d\u1EF1ng game c\u1EE7a ch\u00EDnh m\u00ECnh.\n\nGame Creator l\u00E0 b\u01B0\u1EDBc chuy\u1EC3n t\u1EEB l\u1EADp tr\u00ECnh k\u00E9o th\u1EA3 sang l\u1EADp tr\u00ECnh th\u1EADt: con h\u1ECDc Python c\u01A1 b\u1EA3n, thi\u1EBFt k\u1EBF game 2D v\u1EDBi mechanics ph\u1EE9c t\u1EA1p, v\u00E0 hi\u1EC3u t\u1EA1i sao nh\u1EEFng game con y\u00EAu th\u00EDch l\u1EA1i ho\u1EA1t \u0111\u1ED9ng nh\u01B0 v\u1EADy.\n\n\u2726 Con vi\u1EBFt code Python \u0111\u1EA7u ti\u00EAn: h\u00E0m, v\u00F2ng l\u1EB7p, list, dictionary \u2014 vi\u1EBFt b\u1EB1ng tay, kh\u00F4ng k\u00E9o th\u1EA3. N\u1EC1n t\u1EA3ng \u0111\u1EC3 h\u1ECDc b\u1EA5t k\u1EF3 l\u0129nh v\u1EF1c l\u1EADp tr\u00ECnh n\u00E0o sau n\u00E0y.\n\u2726 Con t\u01B0 duy nh\u01B0 game designer: Game hay kh\u00F4ng ph\u1EA3i may m\u1EAFn \u2014 n\u00F3 \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF. Con h\u1ECDc level design, balance mechanics, user experience t\u1EEB g\u00F3c \u0111\u1ED9 ng\u01B0\u1EDDi t\u1EA1o ra.\n\u2726 Con c\u00F3 portfolio game th\u1EADt: game con l\u00E0m \u0111\u01B0\u1EE3c upload l\u00EAn itch.io v\u00E0 c\u00F3 ng\u01B0\u1EDDi ch\u01A1i th\u1EADt.\n\n\u1F3AE S\u1EA3n ph\u1EA9m: Game arcade 2D (v\u1EADt l\u00FD chuy\u1EC3n \u0111\u1ED9ng, va ch\u1EA1m, \u0111i\u1EC3m s\u1ED1, nhi\u1EC1u m\u00E0n, c\u00F3 \u00E2m thanh \u2014 x\u00E2y b\u1EB1ng Python + Pygame), Game puzzle (b\u00E0i to\u00E1n logic c\u00F3 nhi\u1EC1u c\u00E1ch gi\u1EA3i, giao di\u1EC7n thi\u1EBFt k\u1EBF ri\u00EAng)\n\nK\u1EBFt n\u1ED1i: Sau Game Creator, con \u0111\u00E3 vi\u1EBFt Python v\u00E0 hi\u1EC3u OOP c\u01A1 b\u1EA3n \u2014 \u0111\u1EE7 n\u1EC1n \u0111\u1EC3 chuy\u1EC3n sang App Producer ho\u1EB7c Web Developer theo s\u1EDF th\u00EDch.\nGame Developer l\u00E0 m\u1ED9t trong nh\u1EEFng ngh\u1EC1 thi\u1EBFu nh\u00E2n l\u1EF1c nh\u1EA5t t\u1EA1i Vi\u1EC7t Nam, l\u01B0\u01A1ng kh\u1EDFi \u0111i\u1EC3m 15\u201325 tri\u1EC7u. Con \u0111ang x\u00E2y n\u1EC1n t\u1EEB h\u00F4m nay.",
      outputs: ["Mini game AI", "Game nhi\u1EC1u c\u1EA5p \u0111\u1ED9", "Game xu\u1EA5t b\u1EA3n web"],
      content: "GameMaker Studio 2, GML, AI h\u1ED7 tr\u1EE3 game design.", objectives: "L\u1EADp tr\u00ECnh game chuy\u00EAn nghi\u1EC7p v\u1EDBi AI",
      basic: { name: "GameMaker C\u01A1 b\u1EA3n", desc: "L\u00E0m quen GameMaker, k\u00E9o th\u1EA3, AI t\u1EA1o nguy\u00EAn li\u1EC7u game." }, advanced: { name: "Game AI N\u00E2ng cao", desc: "Game nhi\u1EC1u m\u00E0n, NPC c\u00F3 AI, hi\u1EC7u \u1EE9ng n\u00E2ng cao." }, intensive: { name: "Game Xu\u1EA5t b\u1EA3n", desc: "Game ho\u00E0n thi\u1EC7n xu\u1EA5t b\u1EA3n web, AI chuy\u00EAn s\u00E2u, b\u1EA3ng x\u1EBFp h\u1EA1ng." } },
    { id: "code_appproducer", name: "App Producer", year: "N\u0103m 3", age: "11+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i + NextGen + Intern", phase: 1,
      value: "Con t\u1EA1o ra \u1EE9ng d\u1EE5ng mobile c\u00F3 th\u1EC3 c\u00E0i l\u00EAn \u0111i\u1EC7n tho\u1EA1i th\u1EADt \u2014 v\u00E0 cho ng\u01B0\u1EDDi nh\u00E0 d\u00F9ng.\n\nM\u1ED7i ng\u00E0y Qu\u00FD Ph\u1EE5 huynh d\u00F9ng h\u00E0ng ch\u1EE5c \u1EE9ng d\u1EE5ng \u2014 t\u1EEB \u0111\u1EB7t \u0111\u1ED3 \u0103n \u0111\u1EBFn nghe nh\u1EA1c. App Producer d\u1EA1y con c\u00E1ch T\u1EA0O RA nh\u1EEFng th\u1EE9 \u0111\u00F3: thi\u1EBFt k\u1EBF giao di\u1EC7n, l\u1EADp tr\u00ECnh logic, k\u1EBFt n\u1ED1i d\u1EEF li\u1EC7u \u2014 b\u1EB1ng ng\u00F4n ng\u1EEF l\u1EADp tr\u00ECnh th\u1EADt.\n\n\u2726 Con hi\u1EC3u app ho\u1EA1t \u0111\u1ED9ng th\u1EBF n\u00E0o t\u1EEB b\u00EAn trong: UI (giao di\u1EC7n ng\u01B0\u1EDDi d\u00F9ng) + logic x\u1EED l\u00FD + d\u1EEF li\u1EC7u \u2014 ba l\u1EDBp c\u1EE7a m\u1ECDi \u1EE9ng d\u1EE5ng hi\u1EC7n \u0111\u1EA1i. Con kh\u00F4ng c\u00F2n l\u00E0 \"ng\u01B0\u1EDDi d\u00F9ng th\u1EE5 \u0111\u1ED9ng\".\n\u2726 Con thi\u1EBFt k\u1EBF cho ng\u01B0\u1EDDi kh\u00E1c d\u00F9ng: con ph\u1EA3i ngh\u0129 \"ng\u01B0\u1EDDi d\u00F9ng c\u1EA7n g\u00EC?\", \"n\u00FAt n\u00E0y \u0111\u1EB7t \u1EDF \u0111\u00E2u l\u00E0 d\u1EC5 nh\u1EA5t?\". \u0110\u00E2y l\u00E0 t\u01B0 duy UX th\u1EADt s\u1EF1.\n\u2726 Con qu\u1EA3n l\u00FD d\u1EF1 \u00E1n c\u00E1 nh\u00E2n: t\u1EEB \u00FD t\u01B0\u1EDFng \u2192 wireframe \u2192 code \u2192 test \u2192 s\u1EEDa l\u1ED7i \u2192 ra m\u1EAFt.\n\n\u1F4F1 S\u1EA3n ph\u1EA9m: App qu\u1EA3n l\u00FD c\u00E1 nh\u00E2n (nh\u1EAFc nh\u1EDF, ghi ch\u00FA \u2014 giao di\u1EC7n con t\u1EF1 thi\u1EBFt k\u1EBF, c\u00E0i \u0111\u01B0\u1EE3c tr\u00EAn \u0111i\u1EC7n tho\u1EA1i Android), App mini-game c\u00F3 server (ng\u01B0\u1EDDi d\u00F9ng \u0111\u0103ng nh\u1EADp, l\u01B0u \u0111i\u1EC3m cao, xem b\u1EA3ng x\u1EBFp h\u1EA1ng)\n\nK\u1EBFt n\u1ED1i: App Producer cung c\u1EA5p n\u1EC1n t\u1EA3ng full-stack c\u01A1 b\u1EA3n, m\u1EDF \u0111\u01B0\u1EDDng sang Web Developer ho\u1EB7c Computer Scientist.\nKhi con c\u00E0i app c\u1EE7a m\u00ECnh l\u00EAn \u0111i\u1EC7n tho\u1EA1i v\u00E0 n\u00F3i \"Ba/m\u1EB9 th\u1EED d\u00F9ng \u0111i\" \u2014 \u0111\u00F3 l\u00E0 kho\u1EA3nh kh\u1EAFc con hi\u1EC3u r\u1EB1ng m\u00ECnh c\u00F3 th\u1EC3 t\u1EA1o ra th\u1EE9 g\u00EC \u0111\u00F3 ng\u01B0\u1EDDi kh\u00E1c th\u1EF1c s\u1EF1 c\u1EA7n.",
      outputs: ["App th\u1EF1c t\u1EBF", "NextGen 14b", "Internship 60h"],
      content: "L\u1EADp tr\u00ECnh \u1EE9ng d\u1EE5ng th\u1EF1c t\u1EBF, NextGen + Internship.", objectives: "- Ph\u00E1t tri\u1EC3n app.\n- D\u1EF1 \u00E1n c\u00F4ng ngh\u1EC7.\n- AI Foundation.",
      basic: "App Producer Basic", advanced: "App Producer Advanced", intensive: "App Producer Intensive" },
    { id: "code_webcreator", name: "Web Developer", year: "N\u0103m 4", age: "14+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i", phase: 1,
      value: "Con x\u00E2y website th\u1EADt \u2014 kh\u00F4ng ph\u1EA3i b\u00E0i t\u1EADp \u2014 m\u00E0 l\u00E0 s\u1EA3n ph\u1EA9m c\u00F3 th\u1EC3 kinh doanh \u0111\u01B0\u1EE3c.\n\nM\u1ECDi doanh nghi\u1EC7p, m\u1ECDi c\u00E1 nh\u00E2n, m\u1ECDi \u00FD t\u01B0\u1EDFng c\u1EA7n m\u1ED9t website. Web Developer d\u1EA1y con c\u00E1ch x\u00E2y website t\u1EEB A \u0111\u1EBFn Z: thi\u1EBFt k\u1EBF frontend \u0111\u1EB9p, vi\u1EBFt backend x\u1EED l\u00FD logic, k\u1EBFt n\u1ED1i database, deploy l\u00EAn internet th\u1EADt.\n\n\u2726 Con c\u00F3 k\u1EF9 n\u0103ng full-stack: HTML/CSS/JavaScript (frontend) + Python/Node.js (backend) + SQL (database). \u0110\u00E2y l\u00E0 b\u1ED9 k\u1EF9 n\u0103ng tuy\u1EC3n d\u1EE5ng s\u1ED1 1 c\u1EE7a ng\u00E0nh IT Vi\u1EC7t Nam hi\u1EC7n t\u1EA1i.\n\u2726 Con t\u01B0 duy s\u1EA3n ph\u1EA9m th\u1EADt: website c\u1EE7a con ph\u1EA3i load nhanh, responsive tr\u00EAn mobile, b\u1EA3o m\u1EADt th\u00F4ng tin ng\u01B0\u1EDDi d\u00F9ng.\n\u2726 Con c\u00F3 portfolio c\u00F4ng khai: website con l\u00E0m c\u00F3 th\u1EC3 \u0111\u1EC3 v\u00E0o CV, GitHub, ho\u1EB7c demo cho nh\u00E0 tuy\u1EC3n d\u1EE5ng sau n\u00E0y.\n\n\u1F4BB S\u1EA3n ph\u1EA9m: Website th\u01B0\u01A1ng m\u1EA1i \u0111i\u1EC7n t\u1EED mini (\u0111\u0103ng s\u1EA3n ph\u1EA9m, gi\u1ECF h\u00E0ng, thanh to\u00E1n demo, qu\u1EA3n tr\u1ECB admin), Blog/Portfolio c\u00E1 nh\u00E2n (SEO c\u01A1 b\u1EA3n, responsive design, t\u00EDch h\u1EE3p Google Analytics)\n\nK\u1EBFt n\u1ED1i: Sau Web Developer, con c\u00F3 \u0111\u1EE7 k\u1EF9 n\u0103ng \u0111\u1EC3 th\u1EF1c t\u1EADp t\u1EA1i c\u00E1c c\u00F4ng ty tech Vi\u1EC7t Nam \u2014 MindX c\u00F3 ch\u01B0\u01A1ng tr\u00ECnh k\u1EBFt n\u1ED1i th\u1EF1c t\u1EADp cho h\u1ECDc vi\u00EAn 16+.\nCon 14 tu\u1ED5i c\u00F3 website \u0111ang ch\u1EA1y tr\u00EAn internet l\u00E0 th\u1EE9 ghi \u0111i\u1EC3m m\u1EA1nh nh\u1EA5t trong h\u1ED3 s\u01A1 \u0111\u1EA1i h\u1ECDc v\u00E0 h\u1ECDc b\u1ED5ng qu\u1ED1c t\u1EBF.",
      outputs: ["Website portfolio", "Website th\u01B0\u01A1ng m\u1EA1i + AI", "Website qu\u1EA3n l\u00FD + chatbot"],
      content: "HTML, CSS, JavaScript, Bootstrap, API, GitHub, Firebase.", objectives: "L\u1EADp tr\u00ECnh website k\u1EBFt h\u1EE3p AI",
      basic: { name: "HTML & CSS", desc: "Website t\u0129nh, responsive, Bootstrap, form." }, advanced: { name: "JavaScript & API", desc: "Website \u0111\u1ED9ng, DOM, API, GitHub, AI nh\u1EADn di\u1EC7n." }, intensive: { name: "Fullstack Project", desc: "Deploy website, cloud data, chatbot AI, team work." } },
    { id: "code_cs", name: "Computer Scientist", year: "N\u0103m 5", age: "15+", levels: 3, duration: "3 HP \u00D7 14 bu\u1ED5i + Intern 60h", phase: 2,
      value: "Con t\u01B0 duy nh\u01B0 nh\u00E0 khoa h\u1ECDc m\u00E1y t\u00EDnh \u2014 ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF h\u1EC7 th\u1ED1ng, kh\u00F4ng ch\u1EC9 vi\u1EBFt code.\n\nComputer Scientist l\u00E0 \u0111\u1EC9nh c\u1EE7a h\u00E0nh tr\u00ECnh Coding t\u1EA1i MindX: con kh\u00F4ng h\u1ECDc \"th\u00EAm m\u1ED9t ng\u00F4n ng\u1EEF\" \u2014 con h\u1ECDc c\u00E1ch gi\u1EA3i quy\u1EBFt b\u00E0i to\u00E1n ph\u1EE9c t\u1EA1p, t\u1ED1i \u01B0u h\u00F3a thu\u1EADt to\u00E1n, v\u00E0 x\u00E2y d\u1EF1ng h\u1EC7 th\u1ED1ng m\u00E0 h\u00E0ng tri\u1EC7u ng\u01B0\u1EDDi c\u00F3 th\u1EC3 d\u00F9ng.\n\n\u2726 Con hi\u1EC3u thu\u1EADt to\u00E1n v\u00E0 \u0111\u1ED9 ph\u1EE9c t\u1EA1p: t\u1EA1i sao Google Search tr\u1EA3 v\u1EC1 k\u1EBFt qu\u1EA3 trong 0.1 gi\u00E2y? T\u1EA1i sao Grab x\u1EBFp l\u1ECBch t\u00E0i x\u1EBF hi\u1EC7u qu\u1EA3? Con h\u1ECDc c\u00E1ch ngh\u0129 ra gi\u1EA3i ph\u00E1p t\u1ED1i \u01B0u.\n\u2726 Con s\u1EB5n s\u00E0ng thi \u0111\u1EA5u qu\u1ED1c t\u1EBF: n\u1EC1n t\u1EA3ng \u0111\u1EC3 tham gia USACO, IOI, ICPC \u2014 c\u00E1c k\u1EF3 thi l\u1EADp tr\u00ECnh qu\u1ED1c t\u1EBF m\u1EDF c\u00E1nh c\u1EEDa h\u1ECDc b\u1ED5ng \u0111\u1EA1i h\u1ECDc top th\u1EBF gi\u1EDBi.\n\u2726 Con c\u00F3 t\u01B0 duy h\u1EC7 th\u1ED1ng: ki\u1EBFn tr\u00FAc ph\u1EA7n m\u1EC1m, scalability, data structure \u2014 nh\u1EEFng kh\u00E1i ni\u1EC7m m\u00E0 k\u1EF9 s\u01B0 Google, Amazon, Facebook d\u00F9ng h\u00E0ng ng\u00E0y.\n\n\u1F52C S\u1EA3n ph\u1EA9m: H\u1EC7 th\u1ED1ng recommendation mini (thu\u1EADt to\u00E1n g\u1EE3i \u00FD s\u1EA3n ph\u1EA9m \u2014 c\u00F9ng nguy\u00EAn l\u00FD v\u1EDBi Netflix, Shopee), AI project t\u00EDch h\u1EE3p (chatbot, image classifier, ho\u1EB7c data analysis tool \u2014 d\u00F9ng Python, scikit-learn, TensorFlow c\u01A1 b\u1EA3n)\n\nK\u1EBFt n\u1ED1i: Computer Scientist m\u1EDF ra 4 h\u01B0\u1EDBng chuy\u00EAn s\u00E2u 18+: AI/ML Engineering, Data Science, Software Architecture, v\u00E0 Cybersecurity. MindX cam k\u1EBFt b\u1EA3o tr\u1EE3 vi\u1EC7c l\u00E0m ho\u1EB7c h\u1ED7 tr\u1EE3 h\u1ED3 s\u01A1 du h\u1ECDc sau khi con ho\u00E0n th\u00E0nh l\u1ED9 tr\u00ECnh.\nKhi con gi\u1EA3i th\u00EDch thu\u1EADt to\u00E1n c\u1EE7a m\u00ECnh cho ng\u01B0\u1EDDi l\u1EDBn v\u00E0 ng\u01B0\u1EDDi l\u1EDBn kh\u00F4ng hi\u1EC3u h\u1EBFt \u2014 \u0111\u00F3 l\u00E0 d\u1EA5u hi\u1EC7u con \u0111\u00E3 b\u01B0\u1EDBc v\u00E0o ng\u01B0\u1EE1ng \"ng\u01B0\u1EDDi s\u00E1ng t\u1EA1o\".",
      outputs: ["App h\u1ECDc t\u1EADp/gi\u1EA3i tr\u00ED", "Dashboard ph\u00E2n t\u00EDch d\u1EEF li\u1EC7u", "AI project ho\u00E0n ch\u1EC9nh"],
      content: "Python, pandas, thu\u1EADt to\u00E1n, ML, AI, chatbot.", objectives: "L\u1EADp tr\u00ECnh Python & AI chuy\u00EAn s\u00E2u",
      basic: { name: "Python & Thu\u1EADt to\u00E1n", desc: "OOP, t\u00ECm ki\u1EBFm, s\u1EAFp x\u1EBFp, c\u1EA5u tr\u00FAc d\u1EEF li\u1EC7u." }, advanced: { name: "Data Analysis", desc: "pandas, CSV, bi\u1EC3u \u0111\u1ED3, m\u00F4 h\u00ECnh d\u1EF1 \u0111o\u00E1n, dashboard." }, intensive: { name: "AI Project", desc: "AI nh\u1EADn di\u1EC7n h\u00ECnh \u1EA3nh, chatbot NLP, prompt engineering." } }
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
      value: "Con kh\u00E1m ph\u00E1 ng\u00F4n ng\u1EEF h\u00ECnh \u1EA3nh \u0111\u1EA7u ti\u00EAn \u2014 b\u1EB1ng m\u00E0u s\u1EAFc, \u0111\u01B0\u1EDDng n\u00E9t v\u00E0 tr\u00ED t\u01B0\u1EDFng t\u01B0\u1EE3ng kh\u00F4ng gi\u1EDBi h\u1EA1n.\n\nTr\u01B0\u1EDBc khi h\u1ECDc ch\u1EEF, tr\u1EBB \u0111\u00E3 n\u00F3i chuy\u1EC7n b\u1EB1ng h\u00ECnh \u1EA3nh. Little Artist kh\u00F4ng \"d\u1EA1y v\u1EBD \u0111\u00FAng\" \u2014 Little Artist gi\u00FAp con hi\u1EC3u r\u1EB1ng con C\u00D3 TH\u1EC2 di\u1EC5n \u0111\u1EA1t, v\u00E0 c\u00E1ch con th\u1EC3 hi\u1EC7n th\u1EBF gi\u1EDBi l\u00E0 ho\u00E0n to\u00E0n h\u1EE3p l\u00FD.\n\n\u2726 Con t\u1EF1 tin th\u1EC3 hi\u1EC7n c\u1EA3m x\u00FAc b\u1EB1ng tranh: kh\u00F4ng c\u1EA7n gi\u1EA3i th\u00EDch b\u1EB1ng l\u1EDDi, con v\u1EBD \u0111\u01B0\u1EE3c \"h\u00F4m nay con vui\", \"con s\u1EE3 c\u00E1i g\u00EC\". \u0110\u00E2y l\u00E0 k\u1EF9 n\u0103ng t\u1EF1 nh\u1EADn th\u1EE9c c\u1EA3m x\u00FAc quan tr\u1ECDng nh\u1EA5t \u1EDF tu\u1ED5i nh\u1ECF.\n\u2726 Con ph\u00E1t tri\u1EC3n ph\u1ED1i h\u1EE3p tay-m\u1EAFt t\u1ED1t h\u01A1n: ki\u1EC3m so\u00E1t b\u00FAt, t\u00F4 m\u00E0u trong v\u00F9ng, v\u1EBD \u0111\u01B0\u1EDDng th\u1EB3ng/cong \u2014 n\u1EC1n t\u1EA3ng cho vi\u1EBFt ch\u1EEF \u0111\u1EB9p v\u00E0 k\u1EF9 n\u0103ng v\u1EADn \u0111\u1ED9ng tinh.\n\u2726 Con c\u00F3 \"con m\u1EAFt th\u1EA9m m\u1EF9\" t\u1EEB s\u1EDBm: bi\u1EBFt m\u00E0u n\u00E0o h\u1EE3p v\u1EDBi m\u00E0u n\u00E0o, b\u1ED1 c\u1EE5c tranh nh\u01B0 th\u1EBF n\u00E0o tr\u00F4ng c\u00E2n.\n\n\u1F3A8 S\u1EA3n ph\u1EA9m: Tranh k\u1EC3 chuy\u1EC7n c\u00E1 nh\u00E2n (lo\u1EA1t tranh 4-6 t\u1EDD k\u1EC3 c\u00E2u chuy\u1EC7n con t\u01B0\u1EDFng t\u01B0\u1EE3ng \u2014 c\u00F3 nh\u00E2n v\u1EADt, b\u1ED1i c\u1EA3nh, di\u1EC5n bi\u1EBFn), Digital art \u0111\u1EA7u ti\u00EAn (t\u00F4 m\u00E0u v\u00E0 v\u1EBD tr\u00EAn iPad)\n\nK\u1EBFt n\u1ED1i: Little Artist x\u00E2y n\u1EC1n t\u1EA3ng c\u1EA3m th\u1EE5 th\u1EA9m m\u1EF9 cho con tr\u01B0\u1EDBc khi b\u01B0\u1EDBc v\u00E0o Digital Art Foundations.\nTreo tranh con v\u1EBD l\u00EAn t\u01B0\u1EDDng nh\u00E0 \u2014 \u0111\u00F3 l\u00E0 portfolio \u0111\u1EA7u ti\u00EAn c\u1EE7a m\u1ED9t artist t\u01B0\u01A1ng lai. Qu\u00FD Ph\u1EE5 huynh \u0111ang \u0111\u1EA7u t\u01B0 v\u00E0o th\u1EE9 con s\u1EBD mang theo su\u1ED1t cu\u1ED9c \u0111\u1EDDi.",
      outputs: ["Tranh Canvas", "Tranh \u0111a ch\u1EA5t li\u1EC7u", "Th\u1EE7 c\u00F4ng 3D"],
      content: "H\u1ECDa c\u1EE5 truy\u1EC1n th\u1ED1ng, c\u1EA3m nh\u1EADn m\u00E0u s\u1EAFc qua \u0111\u1EA5t s\u00E9t, m\u00E0u n\u01B0\u1EDBc, collage.", objectives: "Kh\u01A1i g\u1EE3i c\u1EA3m x\u00FAc s\u00E1ng t\u1EA1o s\u1EDBm",
      basic: { name: "L\u00E0m quen H\u1ED9i h\u1ECDa", desc: "V\u1EBD tay, t\u00F4 m\u00E0u, nh\u1EADn bi\u1EBFt h\u00ECnh kh\u1ED1i & m\u00E0u s\u1EAFc c\u01A1 b\u1EA3n." },
      advanced: { name: "Kh\u00E1m ph\u00E1 Ch\u1EA5t li\u1EC7u", desc: "\u0110\u1EA5t s\u00E9t, m\u00E0u n\u01B0\u1EDBc, collage \u2014 k\u1EBFt h\u1EE3p \u0111a ch\u1EA5t li\u1EC7u." },
      intensive: { name: "S\u00E1ng t\u1EA1o T\u00E1c ph\u1EA9m", desc: "Quan s\u00E1t chi ti\u1EBFt, h\u00ECnh th\u00E0nh phong c\u00E1ch ri\u00EAng, tri\u1EC3n l\u00E3m cu\u1ED1i k\u1EF3." },
      pricing: [
        { route: "4 th\u00E1ng (1 HP)", goc: "4.5M", km: "", hp: "4.5M" },
        { route: "12 th\u00E1ng (3 HP)", goc: "13.5M", km: "10%", hp: "12.15M" }
      ] },
    { id: "art_nam1", name: "Digital Art Foundations", year: "N\u0103m 1", age: "7\u20139", phase: 0,
      value: "Con h\u1ECDc v\u1EBD s\u1ED1 tr\u00EAn iPad nh\u01B0 artist th\u1EADt s\u1EF1 \u2014 kh\u00F4ng ph\u1EA3i t\u00F4 m\u00E0u theo m\u1EABu.\n\nTh\u1EBF gi\u1EDBi s\u00E1ng t\u1EA1o \u0111\u00E3 chuy\u1EC3n sang digital. Digital Art Foundations trang b\u1ECB cho con iPad + Apple Pencil + Procreate \u2014 b\u1ED9 c\u00F4ng c\u1EE5 m\u00E0 80% illustrator chuy\u00EAn nghi\u1EC7p hi\u1EC7n \u0111ang d\u00F9ng.\n\n\u2726 Con t\u1EA1o ra t\u00E1c ph\u1EA9m ch\u1EA5t l\u01B0\u1EE3ng cao t\u1EEB c\u00F4ng c\u1EE5 chuy\u00EAn nghi\u1EC7p: kh\u00F4ng ph\u1EA3i \"v\u1EBD m\u00E1y t\u00EDnh\" ki\u1EC3u Paint \u2014 con d\u00F9ng layer, brush, blend, mask tr\u00EAn Procreate nh\u01B0 illustrator th\u1EADt.\n\u2726 Con hi\u1EC3u l\u00FD thuy\u1EBFt m\u00E0u s\u1EAFc th\u1EF1c d\u1EE5ng: m\u00E0u b\u1ED5 tr\u1EE3, m\u00E0u t\u01B0\u01A1ng ph\u1EA3n, nhi\u1EC7t \u0111\u1ED9 m\u00E0u \u2014 nh\u1EEFng ki\u1EBFn th\u1EE9c con s\u1EBD d\u00F9ng m\u00E3i d\u00F9 sau n\u00E0y thi\u1EBFt k\u1EBF \u0111\u1ED3 h\u1ECDa, v\u1EBD game, hay l\u00E0m UI.\n\u2726 Con x\u00E2y d\u1EF1ng th\u00F3i quen portfolio: m\u1ED7i th\u00E1ng c\u00F3 \u00EDt nh\u1EA5t 2 t\u00E1c ph\u1EA9m ho\u00E0n ch\u1EC9nh l\u01B0u v\u00E0o portfolio s\u1ED1.\n\n\u1F3A8 S\u1EA3n ph\u1EA9m: Character design (nh\u00E2n v\u1EADt c\u00F3 c\u00E1 t\u00EDnh ri\u00EAng, trang ph\u1EE5c, bi\u1EC3u c\u1EA3m), Illustrated scene (b\u1ED1i c\u1EA3nh phong c\u1EA3nh ho\u00E0n ch\u1EC9nh v\u1EDBi foreground, midground, background)\n\nK\u1EBFt n\u1ED1i: Sau Digital Art Foundations, con \u0111\u00E3 c\u00F3 workflow k\u1EF9 thu\u1EADt s\u1ED1 c\u01A1 b\u1EA3n \u2014 b\u01B0\u1EDBc ti\u1EBFp theo l\u00E0 Visual Thinking ho\u1EB7c Game Art theo s\u1EDF th\u00EDch.\nCon 7 tu\u1ED5i v\u1EDBi portfolio Procreate \u2014 th\u1EE9 nhi\u1EC1u ng\u01B0\u1EDDi l\u1EDBn v\u1EABn ch\u01B0a bi\u1EBFt d\u00F9ng. Qu\u00FD Ph\u1EE5 huynh \u0111ang cho con m\u1ED9t l\u1EE3i th\u1EBF m\u00E0 kh\u00F4ng tr\u01B0\u1EDDng ti\u1EC3u h\u1ECDc n\u00E0o d\u1EA1y \u0111\u01B0\u1EE3c.",
      outputs: ["Digital Sketchbook", "B\u1ED9 tranh My World", "Sketchnote"],
      content: "Ph\u1EA7n m\u1EC1m v\u1EBD digital, n\u00E9t v\u1EBD, layer, m\u00E0u s\u1EAFc, ghi ch\u00FA h\u00ECnh \u1EA3nh.", objectives: "N\u1EC1n t\u1EA3ng M\u1EF9 thu\u1EADt s\u1ED1",
      basic: { name: "L\u00E0m quen Digital Art", desc: "Ph\u1EA7n m\u1EC1m v\u1EBD, n\u00E9t v\u1EBD c\u01A1 b\u1EA3n, h\u00ECnh kh\u1ED1i, m\u00E0u s\u1EAFc." },
      advanced: { name: "T\u1EA1o h\u00ECnh M\u00F4i tr\u01B0\u1EDDng s\u1ED1", desc: "Layer, b\u1ED1 c\u1EE5c, t\u00F4 m\u00E0u ki\u1EC3m so\u00E1t, b\u1ED9 tranh \u201CMy World\u201D." },
      intensive: { name: "Sketchnote & V\u0103n h\u00F3a", desc: "Ghi ch\u00FA h\u00ECnh \u1EA3nh, bi\u1EC3u t\u01B0\u1EE3ng v\u0103n h\u00F3a Vi\u1EC7t Nam, tri\u1EC3n l\u00E3m." } },
    { id: "art_nam2", name: "Visual Thinking", year: "N\u0103m 2", age: "9\u201311", phase: 0,
      value: "Con h\u1ECDc c\u00E1ch \"N\u00D3I\" b\u1EB1ng h\u00ECnh \u1EA3nh \u2014 k\u1EF9 n\u0103ng giao ti\u1EBFp m\u1EA1nh nh\u1EA5t th\u1EBF k\u1EF7 21.\n\nVisual Thinking l\u00E0 kh\u1EA3 n\u0103ng d\u00F9ng h\u00ECnh \u1EA3nh \u0111\u1EC3 gi\u1EA3i th\u00EDch \u00FD t\u01B0\u1EDFng, thuy\u1EBFt ph\u1EE5c ng\u01B0\u1EDDi nghe, v\u00E0 k\u1EC3 c\u00E2u chuy\u1EC7n ph\u1EE9c t\u1EA1p m\u1ED9t c\u00E1ch \u0111\u01A1n gi\u1EA3n. \u0110\u00E2y l\u00E0 k\u1EF9 n\u0103ng m\u00E0 c\u00E1c nh\u00E0 l\u00E3nh \u0111\u1EA1o, designer, v\u00E0 ng\u01B0\u1EDDi tr\u00ECnh b\u00E0y gi\u1ECFi nh\u1EA5t th\u1EBF gi\u1EDBi \u0111\u1EC1u c\u00F3.\n\n\u2726 Con thuy\u1EBFt tr\u00ECnh b\u1EB1ng h\u00ECnh \u1EA3nh t\u1EF1 m\u00ECnh t\u1EA1o ra: kh\u00F4ng d\u00F9ng template PowerPoint s\u1EB5n \u2014 con storyboard, sketch, v\u00E0 x\u00E2y visual narrative ri\u00EAng.\n\u2726 Con hi\u1EC3u \"thi\u1EBFt k\u1EBF th\u00F4ng tin\": icon, infographic, diagram \u2014 c\u00E1ch bi\u1EBFn d\u1EEF li\u1EC7u kh\u00F4 khan th\u00E0nh h\u00ECnh \u1EA3nh ai c\u0169ng hi\u1EC3u ngay. K\u1EF9 n\u0103ng c\u1EF1c k\u1EF3 hi\u1EBFm, c\u1EF1c k\u1EF3 c\u00F3 gi\u00E1.\n\u2726 Con t\u01B0 duy concept tr\u01B0\u1EDBc khi th\u1EF1c hi\u1EC7n: con \u0111\u1EB7t c\u00E2u h\u1ECFi \"m\u00ECnh mu\u1ED1n ng\u01B0\u1EDDi xem C\u1EA2M G\u00CC?\", r\u1ED3i m\u1EDBi quy\u1EBFt \u0111\u1ECBnh h\u00ECnh \u1EA3nh, m\u00E0u s\u1EAFc, b\u1ED1 c\u1EE5c.\n\n\u1F3A8 S\u1EA3n ph\u1EA9m: Editorial illustration (minh h\u1ECDa cho b\u00E0i b\u00E1o ho\u1EB7c c\u00E2u chuy\u1EC7n \u2014 con th\u1EC3 hi\u1EC7n quan \u0111i\u1EC3m c\u00E1 nh\u00E2n b\u1EB1ng h\u00ECnh \u1EA3nh \u1EA9n d\u1EE5), Infographic ho\u00E0n ch\u1EC9nh (m\u1ED9t ch\u1EE7 \u0111\u1EC1 con t\u1EF1 ch\u1ECDn, c\u00F3 th\u1EC3 \u0111\u0103ng l\u00EAn m\u1EA1ng x\u00E3 h\u1ED9i)\n\nK\u1EBFt n\u1ED1i: Visual Thinking l\u00E0 n\u1EC1n t\u1EA3ng cho Game Art, Character & Mascot, v\u00E0 Visual Communication. T\u1EEB \u0111\u00E2y con c\u00F3 th\u1EC3 r\u1EBD v\u00E0o b\u1EA5t k\u1EF3 ng\u00E1ch Art n\u00E0o.\nM\u1ED9t ng\u00E0y n\u00E0o \u0111\u00F3 con s\u1EBD thuy\u1EBFt tr\u00ECnh tr\u01B0\u1EDBc c\u00F4ng ty, tr\u01B0\u1EDBc nh\u00E0 \u0111\u1EA7u t\u01B0 \u2014 v\u00E0 con s\u1EBD l\u00E0 ng\u01B0\u1EDDi duy nh\u1EA5t trong ph\u00F2ng bi\u1EBFt c\u00E1ch bi\u1EBFn \u00FD t\u01B0\u1EDFng th\u00E0nh h\u00ECnh \u1EA3nh. H\u00E0nh tr\u00ECnh \u0111\u00F3 b\u1EAFt \u0111\u1EA7u t\u1EEB h\u00F4m nay.",
      outputs: ["Series nh\u00E2n v\u1EADt", "Sticker digital", "Tranh minh h\u1ECDa"],
      content: "Sketchbook, Medibang, b\u00FAt c\u1EA3m \u1EE9ng.", objectives: "T\u01B0 duy h\u00ECnh \u1EA3nh h\u1EC7 th\u1ED1ng",
      basic: { name: "Nh\u00E2n v\u1EADt & Bi\u1EC3u c\u1EA3m", desc: "Thi\u1EBFt k\u1EBF 3 nh\u00E2n v\u1EADt c\u00F3 c\u00E1 t\u00EDnh, trang ph\u1EE5c, bi\u1EC3u c\u1EA3m ri\u00EAng." },
      advanced: { name: "B\u1ED1i c\u1EA3nh & Storyboard", desc: "Ph\u1ED1i c\u1EA3nh, \u00E1nh s\u00E1ng, poster, b\u00ECa truy\u1EC7n, mockup." },
      intensive: { name: "Series Tranh Truy\u1EC7n", desc: "Truy\u1EC7n tranh ng\u1EAFn 4\u20136 khung, xu\u1EA5t b\u1EA3n s\u1ED1, \u0111\u1EA5u gi\u00E1 t\u00E1c ph\u1EA9m." } },
    { id: "art_nam3", name: "Game Art", year: "N\u0103m 3", age: "11\u201314", phase: 1,
      value: "Con t\u1EA1o ra nh\u00E2n v\u1EADt, th\u1EBF gi\u1EDBi, v\u00E0 giao di\u1EC7n cho game \u2014 b\u1EB1ng c\u00F4ng c\u1EE5 m\u00E0 c\u00E1c studio game chuy\u00EAn nghi\u1EC7p \u0111ang d\u00F9ng.\n\nNg\u00E0nh game l\u00E0 ng\u00E0nh gi\u1EA3i tr\u00ED l\u1EDBn nh\u1EA5t th\u1EBF gi\u1EDBi ($184 t\u1EF7 USD/n\u0103m) \u2014 v\u00E0 m\u1ED7i game c\u1EA7n h\u00E0ng ch\u1EE5c game artist. Game Art d\u1EA1y con c\u00E1ch thi\u1EBFt k\u1EBF visual game: t\u1EEB character sprite \u0111\u1EBFn tile map, t\u1EEB UI icon \u0111\u1EBFn animation c\u01A1 b\u1EA3n.\n\n\u2726 Con hi\u1EC3u \"pixel art\" v\u00E0 \"vector art\" \u2014 hai phong c\u00E1ch art game ph\u1ED5 bi\u1EBFn nh\u1EA5t, d\u00F9ng trong h\u00E0ng ngh\u00ECn game \u0111\u1ED9c l\u1EADp v\u00E0 AAA.\n\u2726 Con thi\u1EBFt k\u1EBF c\u00F3 m\u1EE5c \u0111\u00EDch: art trong game kh\u00F4ng ch\u1EC9 \u0111\u1EC3 \u0111\u1EB9p \u2014 n\u00F3 ph\u1EA3i h\u01B0\u1EDBng d\u1EABn ng\u01B0\u1EDDi ch\u01A1i, truy\u1EC1n \u0111\u1EA1t th\u00F4ng tin, t\u1EA1o c\u1EA3m x\u00FAc. Con h\u1ECDc UX c\u1EE7a game t\u1EEB g\u00F3c \u0111\u1ED9 artist.\n\u2726 Con c\u00F3 portfolio game asset th\u1EADt: sprite sheet, UI kit, background scene \u2014 nh\u1EEFng th\u1EE9 c\u00F3 th\u1EC3 d\u00F9ng ngay trong game th\u1EADt ho\u1EB7c n\u1ED9p portfolio xin vi\u1EC7c game studio.\n\n\u1F3AE S\u1EA3n ph\u1EA9m: B\u1ED9 nh\u00E2n v\u1EADt game ho\u00E0n ch\u1EC9nh (character v\u1EDBi c\u00E1c tr\u1EA1ng th\u00E1i animation \u2014 export \u0111\u01B0\u1EE3c sang Unity/Godot), Game UI kit (menu, button, icon, health bar theo phong c\u00E1ch nh\u1EA5t qu\u00E1n)\n\nK\u1EBFt n\u1ED1i: Game Art k\u1EBFt h\u1EE3p ho\u00E0n h\u1EA3o v\u1EDBi Game Creator (track Coding) \u2014 h\u1ECDc vi\u00EAn h\u1ECDc c\u1EA3 hai c\u00F3 th\u1EC3 t\u1EF1 t\u1EA1o game ho\u00E0n ch\u1EC9nh t\u1EEB A \u0111\u1EBFn Z.\nGame Artist Vi\u1EC7t Nam \u0111ang \u0111\u01B0\u1EE3c c\u00E1c studio qu\u1ED1c t\u1EBF tuy\u1EC3n d\u1EE5ng v\u1EDBi m\u1EE9c l\u01B0\u01A1ng 15\u201330 tri\u1EC7u/th\u00E1ng. Con \u0111ang x\u00E2y k\u1EF9 n\u0103ng \u0111\u00F3 t\u1EEB 11 tu\u1ED5i.",
      outputs: ["World Concept PDF", "Character Sheet", "Asset Pack"],
      content: "MediBang/Sketchbook, worldbuilding, character & asset design.", objectives: "H\u1ECDa s\u0129 Game t\u1EADp s\u1EF1",
      basic: { name: "World Concept", desc: "Moodboard, b\u1ED1i c\u1EA3nh, m\u00E0u s\u1EAFc & kh\u00F4ng kh\u00ED th\u1EBF gi\u1EDBi game." },
      advanced: { name: "Character & Asset", desc: "Nh\u00E2n v\u1EADt \u0111a g\u00F3c nh\u00ECn, v\u1EADt ph\u1EA9m, icon gameplay." },
      intensive: { name: "Game Art Project", desc: "D\u1EF1 \u00E1n minh h\u1ECDa game mini ho\u00E0n ch\u1EC9nh, visual pitch." } },
    { id: "art_nam4", name: "Character & Mascot Design", year: "N\u0103m 4", age: "12\u201315", phase: 1,
      value: "Con thi\u1EBFt k\u1EBF nh\u00E2n v\u1EADt th\u01B0\u01A1ng hi\u1EC7u \u2014 th\u1EE9 m\u00E0 m\u1ECDi c\u00F4ng ty, m\u1ECDi s\u1EA3n ph\u1EA9m \u0111\u1EC1u c\u1EA7n.\n\nT\u1EEB Pikachu \u0111\u1EBFn ch\u00FA th\u1ECF Milo, t\u1EEB mascot tr\u01B0\u1EDDng h\u1ECDc \u0111\u1EBFn avatar c\u00F4ng ty \u2014 character design l\u00E0 ngh\u1EC1 k\u1EBFt h\u1EE3p s\u00E1ng t\u1EA1o v\u00E0 kinh doanh. Character & Mascot d\u1EA1y con x\u00E2y d\u1EF1ng nh\u00E2n v\u1EADt c\u00F3 c\u00E1 t\u00EDnh, c\u00E2u chuy\u1EC7n, v\u00E0 \u1EE9ng d\u1EE5ng th\u01B0\u01A1ng m\u1EA1i th\u1EADt.\n\n\u2726 Con hi\u1EC3u \"personality design\": m\u1ED7i \u0111\u01B0\u1EDDng n\u00E9t, m\u00E0u s\u1EAFc, t\u01B0 th\u1EBF \u0111\u1EC1u n\u00F3i l\u00EAn \u0111i\u1EC1u g\u00EC \u0111\u00F3 v\u1EC1 nh\u00E2n v\u1EADt. Con h\u1ECDc c\u00E1ch d\u00F9ng visual language \u0111\u1EC3 truy\u1EC1n \u0111\u1EA1t c\u00E1 t\u00EDnh m\u00E0 kh\u00F4ng c\u1EA7n l\u1EDDi.\n\u2726 Con thi\u1EBFt k\u1EBF c\u00F3 brief: nh\u1EADn y\u00EAu c\u1EA7u (th\u01B0\u01A1ng hi\u1EC7u c\u1EA7n g\u00EC?), brainstorm, concept, revise theo feedback \u2014 \u0111\u00E2y l\u00E0 quy tr\u00ECnh l\u00E0m vi\u1EC7c v\u1EDBi kh\u00E1ch h\u00E0ng th\u1EADt.\n\u2726 Con x\u00E2y brand identity: mascot kh\u00F4ng ch\u1EC9 l\u00E0 m\u1ED9t tranh \u2014 n\u00F3 c\u1EA7n brand guide: m\u00E0u s\u1EAFc, font ch\u1EEF, c\u00E1ch d\u00F9ng tr\u00EAn c\u00E1c v\u1EADt ph\u1EA9m kh\u00E1c nhau.\n\n\u1F3A8 S\u1EA3n ph\u1EA9m: Mascot th\u01B0\u01A1ng hi\u1EC7u ho\u00E0n ch\u1EC9nh (nh\u00E2n v\u1EADt c\u00F3 4\u20136 bi\u1EC3u c\u1EA3m, 3 t\u01B0 th\u1EBF, style guide, mockup tr\u00EAn v\u1EADt ph\u1EA9m th\u1EF1c t\u1EBF), Character sheet cho truy\u1EC7n tranh mini (nh\u00E2n v\u1EADt ch\u00EDnh + ph\u1EE5, xu\u1EA5t hi\u1EC7n trong 4\u20136 trang truy\u1EC7n ng\u1EAFn)\n\nK\u1EBFt n\u1ED1i: Character & Mascot m\u1EDF ra h\u01B0\u1EDBng Illustration chuy\u00EAn nghi\u1EC7p ho\u1EB7c Visual Communication (thi\u1EBFt k\u1EBF th\u01B0\u01A1ng hi\u1EC7u t\u1ED5ng th\u1EC3).\nC\u00F3 nh\u1EEFng b\u1EA1n tr\u1EBB Vi\u1EC7t Nam 16\u201318 tu\u1ED5i \u0111ang nh\u1EADn \u0111\u01A1n h\u00E0ng character design t\u1EEB kh\u00E1ch h\u00E0ng n\u01B0\u1EDBc ngo\u00E0i tr\u00EAn Fiverr, ki\u1EBFm $200\u2013$500/project. Con \u0111ang h\u1ECDc k\u1EF9 n\u0103ng \u0111\u00F3 t\u1EEB 12 tu\u1ED5i.",
      outputs: ["B\u1ED9 icon & sticker", "Mascot th\u01B0\u01A1ng hi\u1EC7u", "D\u1EF1 \u00E1n minh h\u1ECDa"],
      content: "Adobe Illustrator, vector, mascot, brand identity.", objectives: "Nh\u00E2n v\u1EADt th\u01B0\u01A1ng hi\u1EC7u chuy\u00EAn nghi\u1EC7p",
      basic: { name: "Vector & Icon", desc: "Illustrator c\u01A1 b\u1EA3n, Pen Tool, b\u1ED9 icon + sticker \u0111\u1ED3ng b\u1ED9." },
      advanced: { name: "Mascot Design", desc: "Thi\u1EBFt k\u1EBF linh v\u1EADt th\u01B0\u01A1ng hi\u1EC7u ho\u00E0n ch\u1EC9nh + \u1EA5n ph\u1EA9m." },
      intensive: { name: "D\u1EF1 \u00E1n Minh h\u1ECDa", desc: "D\u1EF1 \u00E1n minh h\u1ECDa c\u00E1 nh\u00E2n l\u1EA5y mascot l\u00E0m trung t\u00E2m." } },
    { id: "art_nam5", name: "Visual Communication", year: "N\u0103m 5", age: "13\u201316", phase: 2,
      value: "Con thi\u1EBFt k\u1EBF th\u01B0\u01A1ng hi\u1EC7u v\u00E0 truy\u1EC1n th\u00F4ng \u2014 ng\u00E0nh ngh\u1EC1 kh\u00F4ng th\u1EC3 thi\u1EBFu trong th\u1EBF gi\u1EDBi s\u1ED1.\n\nM\u1ECDi doanh nghi\u1EC7p, m\u1ECDi s\u1EF1 ki\u1EC7n, m\u1ECDi chi\u1EBFn d\u1ECBch \u0111\u1EC1u c\u1EA7n ng\u01B0\u1EDDi bi\u1EBFt thi\u1EBFt k\u1EBF v\u00E0 truy\u1EC1n \u0111\u1EA1t b\u1EB1ng h\u00ECnh \u1EA3nh. Visual Communication d\u1EA1y con t\u01B0 duy th\u01B0\u01A1ng hi\u1EC7u, thi\u1EBFt k\u1EBF \u1EA5n ph\u1EA9m chuy\u00EAn nghi\u1EC7p, v\u00E0 k\u1EC3 chuy\u1EC7n b\u1EB1ng h\u00ECnh \u1EA3nh \u2014 b\u1EB1ng b\u1ED9 c\u00F4ng c\u1EE5 Adobe (Illustrator, Photoshop, InDesign).\n\n\u2726 Con th\u00E0nh th\u1EA1o Adobe Creative Suite: Illustrator (vector, logo), Photoshop (ch\u1EC9nh \u1EA3nh, compositing), InDesign (layout \u1EA5n ph\u1EA9m) \u2014 b\u1ED9 c\u00F4ng c\u1EE5 ti\u00EAu chu\u1EA9n ng\u00E0nh, \u0111\u01B0\u1EE3c d\u00F9ng t\u1EA1i m\u1ECDi agency v\u00E0 in-house design team.\n\u2726 Con t\u01B0 duy \"brief \u2192 execution\": nh\u1EADn y\u00EAu c\u1EA7u m\u01A1 h\u1ED3 t\u1EEB kh\u00E1ch h\u00E0ng, khai th\u00E1c nhu c\u1EA7u th\u1EADt, \u0111\u1EC1 xu\u1EA5t concept, th\u1EF1c hi\u1EC7n v\u00E0 revise \u2014 quy tr\u00ECnh designer chuy\u00EAn nghi\u1EC7p.\n\u2726 Con hi\u1EC3u brand consistency: m\u1ECDi thi\u1EBFt k\u1EBF ph\u1EA3i nh\u1EA5t qu\u00E1n v\u1EDBi brand voice, brand color, v\u00E0 brand personality. Kh\u00F4ng ph\u1EA3i l\u00E0m \u0111\u1EB9p \u2014 ph\u1EA3i l\u00E0m \u0111\u00FAng.\n\n\u1F3A8 S\u1EA3n ph\u1EA9m: Brand identity ho\u00E0n ch\u1EC9nh (logo, m\u00E0u s\u1EAFc, font ch\u1EEF, pattern, \u1EE9ng d\u1EE5ng tr\u00EAn 5 v\u1EADt ph\u1EA9m th\u1EF1c t\u1EBF), Campaign visual (to\u00E0n b\u1ED9 visual cho m\u1ED9t chi\u1EBFn d\u1ECBch truy\u1EC1n th\u00F4ng \u2014 key visual, post series, banner digital, print material)\n\nK\u1EBFt n\u1ED1i: Visual Communication l\u00E0 b\u01B0\u1EDBc chu\u1EA9n b\u1ECB cho Motion & Video (animation, video marketing). \u0110\u00E2y c\u0169ng l\u00E0 n\u0103m con x\u00E2y portfolio \u0111\u1EE7 s\u1EE9c n\u1ED9p v\u00E0o c\u00E1c tr\u01B0\u1EDDng Design trong v\u00E0 ngo\u00E0i n\u01B0\u1EDBc.\nGraphic Designer v\u00E0 Brand Designer l\u00E0 hai trong nh\u1EEFng ngh\u1EC1 t\u1EF1 do ph\u1ED5 bi\u1EBFn nh\u1EA5t th\u1EBF gi\u1EDBi \u2014 con c\u00F3 th\u1EC3 l\u00E0m t\u1EEB b\u1EA5t k\u1EF3 \u0111\u00E2u, cho b\u1EA5t k\u1EF3 kh\u00E1ch h\u00E0ng n\u00E0o.",
      outputs: ["B\u1ED9 nh\u1EADn di\u1EC7n", "Key Visual", "Campaign"],
      content: "Illustrator, Photoshop, Lightroom, logo, poster, campaign.", objectives: "Thi\u1EBFt k\u1EBF \u0111\u1ED3 h\u1ECDa chuy\u00EAn nghi\u1EC7p",
      basic: { name: "Logo & Branding", desc: "Brand story, logo design, b\u1ED9 \u1EA5n ph\u1EA9m v\u0103n ph\u00F2ng, brochure." },
      advanced: { name: "Photoshop & KV", desc: "X\u1EED l\u00FD \u1EA3nh, Key Visual, typography, poster n\u00E2ng cao." },
      intensive: { name: "Campaign Design", desc: "Chi\u1EBFn d\u1ECBch truy\u1EC1n th\u00F4ng nh\u1ECF: poster + social + banner." } },
    { id: "art_nam6", name: "Motion & Video", year: "N\u0103m 6", age: "14\u201317", phase: 2,
      value: "Con t\u1EA1o ra video v\u00E0 animation \u2014 th\u1EE9 m\u00E0 th\u1EBF gi\u1EDBi ti\u00EAu th\u1EE5 nhi\u1EC1u h\u01A1n b\u1EA5t k\u1EF3 lo\u1EA1i n\u1ED9i dung n\u00E0o.\n\n82% l\u01B0u l\u01B0\u1EE3ng internet l\u00E0 video. M\u1ED7i th\u01B0\u01A1ng hi\u1EC7u, m\u1ED7i creator, m\u1ED7i doanh nghi\u1EC7p \u0111\u1EC1u c\u1EA7n ng\u01B0\u1EDDi bi\u1EBFt t\u1EA1o ra video v\u00E0 animation chuy\u00EAn nghi\u1EC7p. Motion & Video l\u00E0 n\u0103m con h\u1ECDc Adobe Premiere, After Effects, v\u00E0 nguy\u00EAn l\u00FD animation.\n\n\u2726 Con th\u00E0nh th\u1EA1o Adobe Premiere Pro v\u00E0 After Effects: edit video chuy\u00EAn nghi\u1EC7p, t\u1EA1o motion graphic, animation ch\u1EEF v\u00E0 h\u00ECnh \u2014 b\u1ED9 k\u1EF9 n\u0103ng c\u1EE7a m\u1ECDi video editor v\u00E0 motion designer.\n\u2726 Con hi\u1EC3u storytelling qua video: kh\u00F4ng ph\u1EA3i gh\u00E9p clip r\u1ED3i th\u00EAm nh\u1EA1c \u2014 con h\u1ECDc 3-act structure, pacing, visual rhythm, sound design. Video hay kh\u00F4ng ph\u1EA3i ng\u1EABu nhi\u00EAn \u2014 n\u00F3 \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF.\n\u2726 Con c\u00F3 showreel: portfolio d\u1EA1ng video \u2014 demo reel 2\u20133 ph\u00FAt th\u1EC3 hi\u1EC7n c\u00E1c k\u1EF9 n\u0103ng motion v\u00E0 edit.\n\n\u1F3AC S\u1EA3n ph\u1EA9m: Motion graphic explainer (video 60\u201390 gi\u00E2y gi\u1EA3i th\u00EDch m\u1ED9t concept b\u1EB1ng animation \u2014 ki\u1EC3u video m\u00E0 m\u1ECDi startup c\u1EA7n \u0111\u1EC3 pitch s\u1EA3n ph\u1EA9m), Short film/branded content (phim ng\u1EAFn 3\u20135 ph\u00FAt v\u1EDBi script, storyboard, quay, edit, color grade, sound mix)\n\nK\u1EBFt n\u1ED1i: Motion & Video l\u00E0 \u0111\u1EC9nh c\u1EE7a h\u00E0nh tr\u00ECnh Art 7 n\u0103m t\u1EA1i MindX. Sau kh\u00F3a n\u00E0y, con c\u00F3 portfolio \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n n\u1ED9p v\u00E0o c\u00E1c tr\u01B0\u1EDDng Art v\u00E0 Design, ho\u1EB7c tham gia ch\u01B0\u01A1ng tr\u00ECnh th\u1EF1c t\u1EADp Cregen c\u1EE7a MindX.\nMotion Designer v\u00E0 Video Editor l\u00E0 nh\u1EEFng ngh\u1EC1 m\u00E0 ng\u01B0\u1EDDi gi\u1ECFi kh\u00F4ng bao gi\u1EDD thi\u1EBFu vi\u1EC7c \u2014 v\u00E0 ng\u01B0\u1EDDi r\u1EA5t gi\u1ECFi kh\u00F4ng bao gi\u1EDD thi\u1EBFu d\u1EF1 \u00E1n th\u00FA v\u1ECB.",
      outputs: ["Video 10-15s", "Motion clip", "\u0110\u1ED3 h\u1ECDa chuy\u1EC3n \u0111\u1ED9ng 15-30s"],
      content: "Adobe Premiere, After Effects, Illustrator, motion graphics.", objectives: "\u0110\u1ED3 h\u1ECDa chuy\u1EC3n \u0111\u1ED9ng",
      basic: { name: "Video Production", desc: "K\u1ECBch b\u1EA3n, quay, d\u1EF1ng video truy\u1EC1n th\u00F4ng ng\u1EAFn b\u1EB1ng Premiere." },
      advanced: { name: "After Effects & Motion", desc: "Keyframe, text animation, stop motion, motion clip." },
      intensive: { name: "Motion Design Project", desc: "\u0110\u1ED3 h\u1ECDa chuy\u1EC3n \u0111\u1ED9ng ho\u00E0n ch\u1EC9nh 15-30s, showreel." } }
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

    // Pricing button (for Năm 0 courses with special pricing)
    if (course.pricing) {
      var pBtn = el("button", { className: "node-pricing-btn", onClick: function(e) { e.stopPropagation(); showPricingPopup(course); } });
      pBtn.innerHTML = '💰 H\u1ECDc ph\u00ED';
      node.appendChild(pBtn);
    }

    // Output tags (hide empty ones + filter out special program badges)
    if (course.outputs && course.outputs.length) {
      var outWrap = el("div", { className: "node-output" });
      course.outputs.forEach(function(o, oi) {
        var val = getEV("out_" + course.id + "_" + oi, o);
        if (val && val.trim() && !isSpecialBadge(val)) {
          outWrap.appendChild(el("span", { className: "node-output-item" }, [editableSpan("out_" + course.id + "_" + oi, o)]));
        }
      });
      if (outWrap.children.length) node.appendChild(outWrap);
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

  // ===== SPECIAL PROGRAMS DATA =====
  var specialPrograms = {
    coding: [
      { id: "sp_coding_ai4l", icon: "🤖", name: "AI4Learn", desc: "Khóa đệm chiến lược — học AI để học tốt hơn. 1 level × 6 buổi theo độ tuổi.", color: "#111827",
        detail: "Dưới lớp 7 → Level 1: Sáng tạo nội dung (Nano Banana, Gamma, Flow)\nTrên lớp 7 → Level 2: Chatbot học tập (Gemini, NotebookLM)\n\nKhông bán lẻ — luôn nằm trong gói 24 tháng trở lên" },
      { id: "sp_coding_nextgen", icon: "🚀", name: "NextGen", desc: "Khởi nghiệp & gọi vốn giả lập. 14 buổi × 3 lần.", color: "#E31F26",
        detail: "Chương trình 14 buổi kết nối cuối mỗi khóa Intensive\nGhép nhóm, xây dựng sản phẩm thực tế và Go Live\nPhân tích thị trường: 5 Forces & SWOT\nXây dựng mô hình kinh doanh & dòng doanh thu\nĐịnh giá sản phẩm/dự án — có căn cứ logic\nThuyết trình gọi vốn trước hội đồng giả lập Shark Tank" },
      { id: "sp_coding_intern1", icon: "💼", name: "Internship 1", desc: "Tech Project + AI Foundation. 60h.", color: "#2563EB",
        detail: "60h thực tập tại các phòng ban thực tế của MindX\nModun 1 (20h): Chuyên môn/nghiệp vụ bộ phận\nModun 2 (20h): Nghiệp vụ nâng cao + AI hỗ trợ\nModun 3 (20h): Xây dựng giải pháp nâng cao hiệu suất\nVD: Chatbot AI, trang web nội bộ, hệ thống báo cáo tự động" },
      { id: "sp_coding_intern2", icon: "📋", name: "Internship 2", desc: "Project Management + AI Core. 60h.", color: "#059669",
        detail: "60h — Quản lý dự án công nghệ với Agile/Scrum\nỨng dụng AI Core vào quy trình quản lý & ra quyết định\nLập kế hoạch, phân công, theo dõi tiến độ\nPhối hợp đa phòng ban — Leadership & Teamwork\nNâng cao: Thực thi → Quản lý → Chiến lược" },
      { id: "sp_coding_internx", icon: "🏆", name: "Internship X", desc: "Thực tập doanh nghiệp. 30h + Job Guarantee.", color: "#7C3AED",
        detail: "Thực tập chuyên môn tại doanh nghiệp đối tác MindX\n30h thực tập thực tế\nLàm việc theo nhóm, quản lý dự án thực tế\nMentor hướng dẫn 1-1 suốt quá trình\nCam kết giới thiệu việc làm sau hoàn thành (Job Guarantee)" }
    ],
    art: [
      { id: "sp_art_ai4l", icon: "🤖", name: "AI4Learn", desc: "Khóa đệm chiến lược — học AI để học tốt hơn. 1 level × 6 buổi theo độ tuổi.", color: "#111827",
        detail: "Trong lộ trình Art: trước Character & Mascot Design → Level 1, sau → Level 2\nLevel 1: Sáng tạo nội dung (Nano Banana, Gamma, Flow)\nLevel 2: Chatbot học tập (Gemini, NotebookLM)\n\nKhông bán lẻ — luôn nằm trong gói 24 tháng trở lên" },
      { id: "sp_art_cregen", icon: "🎨", name: "CreGen", desc: "Họa sĩ minh họa + Creative Workshop.", color: "#8B5CF6",
        detail: "Creative Thinking Workshop: 4 buổi tư duy sáng tạo có cấu trúc\nKhóa Họa sĩ minh họa — đồ án lớn 14 buổi\nLựa chọn đề tài, GV hướng dẫn định hướng nghề\nSản phẩm: Truyện tranh hoàn chỉnh + ấn phẩm tuyên truyền\nTriển lãm sản phẩm và gọi vốn trước hội đồng" },
      { id: "sp_art_intern1", icon: "💼", name: "Intern 1", desc: "Creative Studio Intern.", color: "#2563EB",
        detail: "Hiểu cách một đội sáng tạo cùng làm ra sản phẩm hoàn chỉnh\nLàm việc nhóm, phân vai, giao tiếp & phản biện\n4 vai trò: Project Coordinator, Visual Designer, Content Builder, Reviewer/QA\nHV luân phiên vai trò — hiểu toàn bộ pipeline sáng tạo\nSản phẩm: Bộ poster + Mini brand cho CLB giả định" },
      { id: "sp_art_intern2", icon: "📋", name: "Intern 2", desc: "Creative PM Intern.", color: "#E31F26",
        detail: "Quản lý dự án sáng tạo — từ thực thi đến dẫn dắt\nLập kế hoạch, chia việc, theo dõi tiến độ, tổng hợp kết quả\n4 vai trò nâng cao: Creative PM, Visual Designer, Content Builder, Reviewer/QA\nNâng cao: Thực thi → Quản lý → Dẫn dắt dự án" },
      { id: "sp_art_internx", icon: "🏆", name: "Internship X", desc: "Thực tập studio/agency. Cam kết việc làm.", color: "#7C3AED",
        detail: "Thực tập tại studio/agency đối tác MindX\nLàm việc thực tế trong môi trường chuyên nghiệp\nMentor hướng dẫn 1-1\nCam kết giới thiệu việc làm sau hoàn thành" }
    ]
  };

  // Badge names to filter out from roadmap card outputs
  var specialBadgeNames = ["NextGen", "Cregen", "CreGen", "Intern", "Internship", "AI4L", "AI4Learn"];
  function isSpecialBadge(text) {
    return specialBadgeNames.some(function(b) { return text.toLowerCase().indexOf(b.toLowerCase()) !== -1; });
  }

  function renderSpecialPanel(type) {
    var programs = specialPrograms[type];
    if (!programs) return null;
    var panel = el("div", { className: "special-panel" });
    var title = el("div", { className: "special-panel-title" });
    title.innerHTML = '✨ Các chương trình đặc biệt';
    panel.appendChild(title);

    programs.forEach(function(prog) {
      var card = el("div", { className: "special-card", onClick: function() { showSpecialDetail(prog); } });
      card.style.borderLeftColor = prog.color;
      card.style.cursor = "pointer";
      var header = el("div", { className: "special-card-header" });
      header.innerHTML = '<span class="special-card-icon">' + prog.icon + '</span>';
      header.appendChild(el("span", { className: "special-card-name" }, [editableSpan("sp_name_" + prog.id, prog.name)]));
      card.appendChild(header);
      var desc = el("div", { className: "special-card-desc" });
      desc.appendChild(editableSpan("sp_desc_" + prog.id, prog.desc));
      card.appendChild(desc);
      panel.appendChild(card);
    });
    return panel;
  }

  // ===== RENDER ASCENDING STAIRCASE (with phase labels aligned to nodes) =====
  function renderSnake(courses, themeName) {
    var theme = themes[themeName];
    var container = el("div", { className: "snake-timeline" });

    var compact = courses.length > 6;
    var stairStep = compact ? 12 : 18;

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

    // Roadmap + Special panel side by side (panel spans full height)
    var row = el("div", { className: "roadmap-with-special" });
    var mainCol = el("div", { className: "roadmap-main-col" });
    mainCol.appendChild(renderSnake(codingCourses, "coding"));

    // Tree branch (inside main col)
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
    mainCol.appendChild(treeRoot);

    // Close layout: mainCol + special panel
    row.appendChild(mainCol);
    row.appendChild(renderSpecialPanel("coding"));
    c.appendChild(row);
  }

  // ===== RENDER: ART (branch after Năm 6) =====
  function renderArtRoadmap() {
    var c = $("#roadmapCanvas");
    c.innerHTML = "";
    var theme = themes.art;

    // Roadmap + Special panel side by side (panel spans full height)
    var row = el("div", { className: "roadmap-with-special" });
    var mainCol = el("div", { className: "roadmap-main-col" });
    mainCol.appendChild(renderSnake(artCourses, "art"));

    // Tree branch after Năm 6 (inside main col)
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
    mainCol.appendChild(treeRoot);

    // Close layout: mainCol + special panel
    row.appendChild(mainCol);
    row.appendChild(renderSpecialPanel("art"));
    c.appendChild(row);
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
      headers.forEach(function(h, hi) {
        var th = el("th", { textContent: h });
        // Add "L\u01B0u \u00fd" button next to "Ph\u00ed B\u1ea3n quy\u1ec1n" header
        if (hasLicense && hi === headers.length - 1 && si === 0) {
          var noteBtn = el("button", { className: "license-note-btn", onClick: function(e) { e.stopPropagation(); showLicenseNote(prefix); } });
          noteBtn.innerHTML = '\u26A0 L\u01B0u \u00fd';
          th.appendChild(noteBtn);
        }
        tr.appendChild(th);
      });
      thead.appendChild(tr);
      table.appendChild(thead);

      var tbody = el("tbody");
      sec.rows.forEach(function(row, ri) {
        var k = prefix + "_" + si + "_" + ri;
        // Skip row if route was deleted (empty in server data)
        var routeVal = getEV(k + "_route", row.route);
        if (!routeVal || !routeVal.trim()) return;

        var goc, km, hp;
        if (pricingRegion === "hn") { goc = row.gocHN; km = row.kmHN; hp = row.hpHN; }
        else if (pricingRegion === "tinh") { goc = row.gocT; km = row.kmT; hp = row.hpT; }
        else { goc = row.gocONL || ""; km = row.kmONL || ""; hp = row.hpONL || ""; }

        var r = el("tr", { className: row.featured ? "featured" : "" });
        var routeTd = el("td", {}, [editableSpan(k + "_route", row.route)]);
        // Art 24T note button
        if (prefix === "ar" && si === 0 && ri === 1) {
          var art24Btn = el("button", { className: "license-note-btn", onClick: function(e) { e.stopPropagation(); showArt24TNote(); } });
          art24Btn.innerHTML = '\u26A0 L\u01B0u \u00fd';
          routeTd.appendChild(art24Btn);
        }
        // BT note button (Cam kết bảo trợ / Bảo trợ du học rows)
        if (row.featured && sec.title && (sec.title.indexOf('Cam kết') >= 0 || sec.title.indexOf('Bảo trợ') >= 0)) {
          (function(noteKey) {
            var btBtn = el("button", { className: "license-note-btn", onClick: function(e) { e.stopPropagation(); showBTNote(noteKey); } });
            btBtn.innerHTML = '\u26A0 L\u01B0u \u00fd';
            routeTd.appendChild(btBtn);
          })(prefix + '_bt_' + si + '_' + ri);
        }
        r.appendChild(routeTd);
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

  // ===== SPECIAL PROGRAM DETAIL POPUP =====
  function showSpecialDetail(prog) {
    var old = document.getElementById('specialDetailPopup');
    if (old) old.remove();

    var overlay = el('div', { id: 'specialDetailPopup', className: 'pricing-popup-overlay' });
    var popup = el('div', { className: 'pricing-popup', style: 'max-width:550px' });

    var header = el('div', { className: 'pricing-popup-header' });
    header.style.borderBottomColor = prog.color;
    header.innerHTML = '<h3>' + prog.icon + ' ' + getEV('sp_name_' + prog.id, prog.name) + '</h3>';
    var closeBtn = el('button', { className: 'pricing-popup-close', onClick: function() { overlay.remove(); } });
    closeBtn.innerHTML = '\u2715';
    header.appendChild(closeBtn);
    popup.appendChild(header);

    var detailKey = 'sp_detail_' + prog.id;
    var content = getEV(detailKey, prog.detail || prog.desc);
    var body = el('div', { className: 'special-detail-body' });
    body.style.whiteSpace = 'pre-line';
    body.appendChild(editableSpan(detailKey, content));
    popup.appendChild(body);

    overlay.appendChild(popup);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  }

  // ===== LICENSE NOTE POPUP =====
  function showLicenseNote(prefix) {
    var old = document.getElementById('licenseNotePopup');
    if (old) old.remove();

    var overlay = el('div', { id: 'licenseNotePopup', className: 'pricing-popup-overlay' });
    var popup = el('div', { className: 'pricing-popup' });

    var header = el('div', { className: 'pricing-popup-header' });
    header.innerHTML = '<h3>L\u01B0u \u00fd v\u1ec1 Ph\u00ed B\u1ea3n quy\u1ec1n</h3>';
    var closeBtn = el('button', { className: 'pricing-popup-close', onClick: function() { overlay.remove(); } });
    closeBtn.innerHTML = '\u2715';
    header.appendChild(closeBtn);
    popup.appendChild(header);

    var noteKey = 'license_note_' + prefix;
    var defaultNote = 'Ph\u00ed b\u1ea3n quy\u1ec1n ch\u1ec9 \u00e1p d\u1ee5ng cho c\u00e1c kh\u00f3a s\u1eed d\u1ee5ng ph\u1ea7n m\u1ec1m Adobe (t\u1eeb Character & Mascot Design tr\u1edf l\u00ean). C\u00e1c kh\u00f3a Little Artist, Digital Art Foundations, Visual Thinking, Game Art kh\u00f4ng c\u1ea7n ph\u00ed b\u1ea3n quy\u1ec1n.';
    var currentNote = getEV(noteKey, defaultNote);

    var textarea = el('textarea', { className: 'license-note-textarea', rows: 6 });
    textarea.value = currentNote;
    textarea.addEventListener('input', function() {
      state.editedData[noteKey] = textarea.value;
    });
    if (!state.isAdmin) textarea.readOnly = true;
    popup.appendChild(textarea);

    overlay.appendChild(popup);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  }

  // ===== ART 24T NOTE POPUP =====
  function showArt24TNote() {
    var old = document.getElementById('art24tNotePopup');
    if (old) old.remove();

    var overlay = el('div', { id: 'art24tNotePopup', className: 'pricing-popup-overlay' });
    var popup = el('div', { className: 'pricing-popup' });

    var header = el('div', { className: 'pricing-popup-header' });
    header.innerHTML = '<h3>L\u01B0u \u00fd \u2014 L\u1ED9 tr\u00ECnh 24 th\u00E1ng Art</h3>';
    var closeBtn = el('button', { className: 'pricing-popup-close', onClick: function() { overlay.remove(); } });
    closeBtn.innerHTML = '\u2715';
    header.appendChild(closeBtn);
    popup.appendChild(header);

    var table = el('table', { className: 'pricing-popup-table' });
    var thead = el('thead');
    var htr = el('tr');
    ['L\u1ED9 tr\u00ECnh', 'HP G\u1ED1c', 'CTKM', 'H\u1ECDc ph\u00ED', 'CTKM T\u1EC9nh/ONL', 'HP T\u1EC9nh/ONL'].forEach(function(h) {
      htr.appendChild(el('th', { textContent: h }));
    });
    thead.appendChild(htr);
    table.appendChild(thead);

    var tbody = el('tbody');
    for (var i = 0; i < 2; i++) {
      var row = el('tr');
      for (var j = 0; j < 6; j++) {
        var cellKey = 'art24t_' + i + '_' + j;
        var td = el('td');
        td.appendChild(editableSpan(cellKey, getEV(cellKey, '')));
        row.appendChild(td);
      }
      tbody.appendChild(row);
    }
    table.appendChild(tbody);
    popup.appendChild(table);

    overlay.appendChild(popup);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  }

  // ===== BT NOTE POPUP =====
  function showBTNote(noteKey) {
    var old = document.getElementById('btNotePopup');
    if (old) old.remove();

    var overlay = el('div', { id: 'btNotePopup', className: 'pricing-popup-overlay' });
    var popup = el('div', { className: 'pricing-popup' });

    var header = el('div', { className: 'pricing-popup-header' });
    header.innerHTML = '<h3>C\u00E1c ch\u01B0\u01A1ng tr\u00ECnh \u0111\u1EB7c bi\u1EC7t</h3>';
    var closeBtn = el('button', { className: 'pricing-popup-close', onClick: function() { overlay.remove(); } });
    closeBtn.innerHTML = '\u2715';
    header.appendChild(closeBtn);
    popup.appendChild(header);

    var contentKey = noteKey + '_note';
    var saved = getEV(contentKey, '');
    var ta = document.createElement('textarea');
    ta.className = 'bt-note-textarea';
    ta.placeholder = 'Nh\u1EADp l\u01B0u \u00fd cho Sale...';
    ta.value = saved;
    ta.style.cssText = 'width:100%;min-height:120px;border:1px solid #ddd;border-radius:8px;padding:12px;font-size:0.85rem;font-family:inherit;resize:vertical;';
    ta.addEventListener('input', function() {
      state.editedData[contentKey] = ta.value;
    });
    if (!state.isAdmin) ta.readOnly = true;
    popup.appendChild(ta);

    overlay.appendChild(popup);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  }

  // ===== PRICING POPUP (Năm 0 special) =====
  function showPricingPopup(course) {
    // Remove existing popup
    var old = document.getElementById('pricingPopup');
    if (old) old.remove();

    var overlay = el('div', { id: 'pricingPopup', className: 'pricing-popup-overlay' });
    var popup = el('div', { className: 'pricing-popup' });

    // Header
    var header = el('div', { className: 'pricing-popup-header' });
    header.innerHTML = '<h3>' + getEV('name_' + course.id, course.name) + ' \u2014 H\u1ECDc ph\u00ED</h3>';
    var closeBtn = el('button', { className: 'pricing-popup-close', onClick: function() { overlay.remove(); } });
    closeBtn.innerHTML = '\u2715';
    header.appendChild(closeBtn);
    popup.appendChild(header);

    // Table
    var table = el('table', { className: 'pricing-popup-table' });
    var thead = '<tr><th>L\u1ED9 tr\u00ECnh</th><th>HP G\u1ED1c</th><th>CTKM</th><th>H\u1ECDc ph\u00ED</th></tr>';
    table.innerHTML = thead;

    course.pricing.forEach(function(row, ri) {
      var tr = el('tr');
      var fields = ['route', 'goc', 'km', 'hp'];
      fields.forEach(function(f) {
        var td = el('td');
        td.appendChild(editableSpan('price_' + course.id + '_' + ri + '_' + f, row[f]));
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    popup.appendChild(table);

    overlay.appendChild(popup);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
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
    // Load edits from server — don't render until data arrives
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
    state.currentRoadmap = hm[window.location.hash] || "robotics";
    // Don't render yet — wait for server data to load first
    loadServerData();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
