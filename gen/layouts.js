const layouts = {
  default: {},
  qwerty: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "eE",
      "rR",
      "tT",
      "yY",
      "uU",
      "iI",
      "oO",
      "pP",
      "[{",
      "]}",
      "\\|",
      "aA",
      "sS",
      "dD",
      "fF",
      "gG",
      "hH",
      "jJ",
      "kK",
      "lL",
      ";:",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "vV",
      "bB",
      "nN",
      "mM",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  dvorak: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "[{",
      "]}",
      "'\"",
      ",<",
      ".>",
      "pP",
      "yY",
      "fF",
      "gG",
      "cC",
      "rR",
      "lL",
      "/?",
      "=+",
      "\\|",
      "aA",
      "oO",
      "eE",
      "uU",
      "iI",
      "dD",
      "hH",
      "tT",
      "nN",
      "sS",
      "-_",
      "\\|",
      ";:",
      "qQ",
      "jJ",
      "kK",
      "xX",
      "bB",
      "mM",
      "wW",
      "vV",
      "zZ",
      " ",
    ],
  },
  colemak: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "fF",
      "pP",
      "gG",
      "jJ",
      "lL",
      "uU",
      "yY",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "rR",
      "sS",
      "tT",
      "dD",
      "hH",
      "nN",
      "eE",
      "iI",
      "oO",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "vV",
      "bB",
      "kK",
      "mM",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  colemak_dh: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "fF",
      "pP",
      "bB",
      "jJ",
      "lL",
      "uU",
      "yY",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "rR",
      "sS",
      "tT",
      "gG",
      "mM",
      "nN",
      "eE",
      "iI",
      "oO",
      "'\"",
      "\\|",
      "xX",
      "cC",
      "dD",
      "vV",
      "zZ",
      "kK",
      "hH",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  colemak_dhk: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "fF",
      "pP",
      "bB",
      "jJ",
      "lL",
      "uU",
      "yY",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "rR",
      "sS",
      "tT",
      "gG",
      "kK",
      "nN",
      "eE",
      "iI",
      "oO",
      "'\"",
      "\\|",
      "xX",
      "cC",
      "dD",
      "vV",
      "zZ",
      "mM",
      "hH",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  colemak_dh_matrix: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "fF",
      "pP",
      "bB",
      "jJ",
      "lL",
      "uU",
      "yY",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "rR",
      "sS",
      "tT",
      "gG",
      "mM",
      "nN",
      "eE",
      "iI",
      "oO",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "dD",
      "vV",
      "kK",
      "hH",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  colemak_dh_iso: {
    keymapShowTopRow: false,
    iso: true,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "fF",
      "pP",
      "bB",
      "jJ",
      "lL",
      "uU",
      "yY",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "rR",
      "sS",
      "tT",
      "gG",
      "mM",
      "nN",
      "eE",
      "iI",
      "oO",
      "'\"",
      "zZ",
      "xX",
      "cC",
      "dD",
      "vV",
      "\\|",
      "kK",
      "hH",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  colemak_dhk_iso: {
    keymapShowTopRow: false,
    iso: true,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "fF",
      "pP",
      "bB",
      "jJ",
      "lL",
      "uU",
      "yY",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "rR",
      "sS",
      "tT",
      "gG",
      "kK",
      "nN",
      "eE",
      "iI",
      "oO",
      "'\"",
      "zZ",
      "xX",
      "cC",
      "dD",
      "vV",
      "\\|",
      "mM",
      "hH",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  qwertz: {
    keymapShowTopRow: false,
    iso: true,
    keys: [
      "^°",
      "1!",
      '2"',
      "3§",
      "4$",
      "5%",
      "6&",
      "7/",
      "8(",
      "9)",
      "0=",
      "ß?",
      "´`",
      "qQ",
      "wW",
      "eE",
      "rR",
      "tT",
      "zZ",
      "uU",
      "iI",
      "oO",
      "pP",
      "üÜ",
      "+*",
      "#'",
      "aA",
      "sS",
      "dD",
      "fF",
      "gG",
      "hH",
      "jJ",
      "kK",
      "lL",
      "öÖ",
      "äÄ",
      "<>",
      "yY",
      "xX",
      "cC",
      "vV",
      "bB",
      "nN",
      "mM",
      ",;",
      ".:",
      "-_",
      " ",
    ],
  },
  workman: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "dD",
      "rR",
      "wW",
      "bB",
      "jJ",
      "fF",
      "uU",
      "pP",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "sS",
      "hH",
      "tT",
      "gG",
      "yY",
      "nN",
      "eE",
      "oO",
      "iI",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "mM",
      "cC",
      "vV",
      "kK",
      "lL",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  turkish_f: {
    keymapShowTopRow: false,
    keys: [
      "*+",
      "1!",
      '2"',
      "3^",
      "4$",
      "5%",
      "6&",
      "7'",
      "8(",
      "9)",
      "0=",
      "/?",
      "-_",
      "fF",
      "gG",
      "ğĞ",
      "ıI",
      "oO",
      "dD",
      "rR",
      "nN",
      "hH",
      "pP",
      "qQ",
      "wW",
      "xX",
      "uU",
      "iİ",
      "eE",
      "aA",
      "üÜ",
      "tT",
      "kK",
      "mM",
      "lL",
      "yY",
      "şŞ",
      "\\|",
      "jJ",
      "öÖ",
      "vV",
      "cC",
      "çÇ",
      "zZ",
      "sS",
      "bB",
      ".:",
      ",;",
      " ",
    ],
  },
  MTGAP_ASRT: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "lL",
      "dD",
      "bB",
      "jJ",
      "fF",
      "uU",
      "kK",
      "pP",
      "[{",
      "]}",
      "\\|",
      "aA",
      "sS",
      "rR",
      "tT",
      "gG",
      "hH",
      "nN",
      "eE",
      "oO",
      "iI",
      "/?",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "vV",
      ";:",
      "yY",
      "mM",
      ",<",
      ".>",
      "'\"",
      " ",
    ],
  },
  norman: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "dD",
      "fF",
      "kK",
      "jJ",
      "uU",
      "rR",
      "lL",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "sS",
      "eE",
      "tT",
      "gG",
      "yY",
      "nN",
      "iI",
      "oO",
      "hH",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "vV",
      "bB",
      "pP",
      "mM",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  halmak: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "wW",
      "lL",
      "rR",
      "bB",
      "zZ",
      ";:",
      "qQ",
      "uU",
      "dD",
      "jJ",
      "[{",
      "]}",
      "\\|",
      "sS",
      "hH",
      "nN",
      "tT",
      ",<",
      ".>",
      "aA",
      "eE",
      "oO",
      "iI",
      "'\"",
      "\\|",
      "fF",
      "mM",
      "vV",
      "cC",
      "/?",
      "gG",
      "pP",
      "xX",
      "kK",
      "yY",
      " ",
    ],
  },
  QGMLWB: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "gG",
      "mM",
      "lL",
      "wW",
      "bB",
      "yY",
      "uU",
      "vV",
      ";:",
      "[{",
      "]}",
      "\\|",
      "dD",
      "sS",
      "tT",
      "nN",
      "rR",
      "iI",
      "aA",
      "eE",
      "oO",
      "hH",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "fF",
      "jJ",
      "kK",
      "pP",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  QGMLWY: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "gG",
      "mM",
      "lL",
      "wW",
      "yY",
      "fF",
      "uU",
      "bB",
      ";:",
      "[{",
      "]}",
      "\\|",
      "dD",
      "sS",
      "tT",
      "nN",
      "rR",
      "iI",
      "aA",
      "eE",
      "oO",
      "hH",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "vV",
      "jJ",
      "kK",
      "pP",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  qwpr: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "pP",
      "rR",
      "fF",
      "yY",
      "uU",
      "kK",
      "lL",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "sS",
      "dD",
      "tT",
      "gG",
      "hH",
      "nN",
      "iI",
      "oO",
      "eE",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "vV",
      "bB",
      "jJ",
      "mM",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  prog_dvorak: {
    keymapShowTopRow: true,
    keys: [
      "$~",
      "&%",
      "[7",
      "{5",
      "}3",
      "(1",
      "=9",
      "*0",
      ")2",
      "+4",
      "]6",
      "!8",
      "#`",
      ";:",
      ",<",
      ".>",
      "pP",
      "yY",
      "fF",
      "gG",
      "cC",
      "rR",
      "lL",
      "/?",
      "@^",
      "\\|",
      "aA",
      "oO",
      "eE",
      "uU",
      "iI",
      "dD",
      "hH",
      "tT",
      "nN",
      "sS",
      "-_",
      "\\|",
      "'\"",
      "qQ",
      "jJ",
      "kK",
      "xX",
      "bB",
      "mM",
      "wW",
      "vV",
      "zZ",
      " ",
    ],
  },
  german_dvorak: {
    keymapShowTopRow: true,
    keys: [
      "^°",
      "1!",
      "2",
      "3§",
      "4$",
      "5%",
      "6&",
      "7/",
      "8(",
      "9)",
      "0=",
      "+*",
      "<>",
      "üÜ",
      ",;",
      ".:",
      "pP",
      "yY",
      "fF",
      "gG",
      "cC",
      "tT",
      "pP",
      "zZ",
      "ß?",
      "´`",
      "aA",
      "oO",
      "eE",
      "iI",
      "uU",
      "hH",
      "dD",
      "rR",
      "nN",
      "sS",
      "lL",
      "-_",
      "äÄ",
      "öÖ",
      "qQ",
      "jJ",
      "kK",
      "xX",
      "bB",
      "mM",
      "wW",
      "vV",
      "#'",
      " ",
    ],
  },
  dvorak_L: {
    keymapShowTopRow: true,
    keys: [
      "`~",
      "[{",
      "]}",
      "/?",
      "pP",
      "fF",
      "mM",
      "lL",
      "jJ",
      "4$",
      "3#",
      "2@",
      "1!",
      ";:",
      "qQ",
      "bB",
      "yY",
      "uU",
      "rR",
      "sS",
      "oO",
      ".>",
      "6^",
      "5%",
      "=+",
      "\\|",
      "-_",
      "kK",
      "cC",
      "dD",
      "tT",
      "hH",
      "eE",
      "aA",
      "zZ",
      "8*",
      "7&",
      "\\|",
      "'\"",
      "xX",
      "gG",
      "vV",
      "wW",
      "nN",
      "iI",
      ",<",
      "0)",
      "9(",
      " ",
    ],
  },
  dvorak_R: {
    keymapShowTopRow: true,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "jJ",
      "lL",
      "mM",
      "fF",
      "pP",
      "/?",
      "[{",
      "]}",
      "5%",
      "6^",
      "qQ",
      ".>",
      "oO",
      "rR",
      "sS",
      "uU",
      "yY",
      "bB",
      ";:",
      "=+",
      "\\|",
      "7&",
      "8*",
      "zZ",
      "aA",
      "eE",
      "hH",
      "tT",
      "dD",
      "cC",
      "kK",
      "-_",
      "\\|",
      "9(",
      "0)",
      "xX",
      ",<",
      "iI",
      "nN",
      "wW",
      "vV",
      "gG",
      "'\"",
      " ",
    ],
  },
  azerty: {
    keymapShowTopRow: false,
    iso: true,
    keys: [
      "`~",
      "&1",
      "é2",
      '"3',
      "'4",
      "(5",
      "-6",
      "è7",
      "_8",
      "ç9",
      "à0",
      ")°",
      "=+",
      "aA",
      "zZ",
      "eE",
      "rR",
      "tT",
      "yY",
      "uU",
      "iI",
      "oO",
      "pP",
      "^¨",
      "$£",
      "*µ",
      "qQ",
      "sS",
      "dD",
      "fF",
      "gG",
      "hH",
      "jJ",
      "kK",
      "lL",
      "mM",
      "ù%",
      "<>",
      "wW",
      "xX",
      "cC",
      "vV",
      "bB",
      "nN",
      ",?",
      ";.",
      ":/",
      "!§",
      " ",
    ],
  },
  bepo: {
    keymapShowTopRow: false,
    iso: true,
    keys: [
      "$#",
      '"1',
      "«2",
      "»3",
      "(4",
      ")5",
      "@6",
      "+7",
      "-8",
      "/9",
      "*0",
      "=°",
      "%`",
      "bB",
      "éÉ",
      "pP",
      "oO",
      "èÈ",
      "^!",
      "vV",
      "dD",
      "lL",
      "jJ",
      "zZ",
      "wW",
      "mM",
      "aA",
      "uU",
      "iI",
      "eE",
      ",;",
      "cC",
      "tT",
      "sS",
      "rR",
      "nN",
      "mM",
      "êÊ",
      "àÀ",
      "yY",
      "xX",
      ".:",
      "kK",
      "’?",
      "qQ",
      "gG",
      "hH",
      "fF",
      "  ",
    ],
  },
  alpha: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "aA",
      "bB",
      "cC",
      "dD",
      "eE",
      "fF",
      "gG",
      "hH",
      "iI",
      "jJ",
      "[{",
      "]}",
      "\\|",
      "kK",
      "lL",
      "mM",
      "nN",
      "oO",
      "pP",
      "qQ",
      "rR",
      "sS",
      ";:",
      "'\"",
      "\\|",
      "tT",
      "uU",
      "vV",
      "wW",
      "xX",
      "yY",
      "zZ",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  handsdown: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "cC",
      "hH",
      "pP",
      "vV",
      "kK",
      "yY",
      "oO",
      "jJ",
      "/?",
      "[{",
      "]}",
      "\\|",
      "rR",
      "sS",
      "nN",
      "tT",
      "gG",
      "wW",
      "uU",
      "eE",
      "iI",
      "aA",
      ";:",
      "\\|",
      "xX",
      "mM",
      "lL",
      "dD",
      "bB",
      "zZ",
      "fF",
      "'\"",
      ",<",
      ".>",
      " ",
    ],
  },
  handsdown_alt: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "wW",
      "gG",
      "hH",
      "mM",
      "kK",
      "qQ",
      "cC",
      "uU",
      "jJ",
      "'\"",
      "[{",
      "]}",
      "\\|",
      "rR",
      "sS",
      "nN",
      "tT",
      "fF",
      "yY",
      "aA",
      "eE",
      "oO",
      "iI",
      ";:",
      "\\|",
      "xX",
      "bB",
      "lL",
      "dD",
      "vV",
      "zZ",
      "pP",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  typehack: {
    keymapShowTopRow: false,
    keys: [
      "^~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6&",
      "7`",
      "8(",
      "9)",
      "0=",
      "*+",
      "\\|",
      "jJ",
      "gG",
      "hH",
      "pP",
      "fF",
      "qQ",
      "vV",
      "oO",
      "uU",
      ";:",
      "/?",
      "[{",
      "]}",
      "rR",
      "sS",
      "nN",
      "tT",
      "kK",
      "yY",
      "iI",
      "aA",
      "eE",
      "lL",
      "-_",
      "\\|",
      "zZ",
      "wW",
      "mM",
      "dD",
      "bB",
      "cC",
      ",<",
      "'\"",
      ".>",
      "xX",
      " ",
    ],
  },
  MTGAP: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "yY",
      "pP",
      "oO",
      "uU",
      "jJ",
      "kK",
      "dD",
      "lL",
      "cC",
      "wW",
      "[{",
      "]}",
      "\\|",
      "iI",
      "nN",
      "eE",
      "aA",
      ",;",
      "mM",
      "hH",
      "tT",
      "sS",
      "rR",
      "'\"",
      "\\|",
      "qQ",
      "zZ",
      "/<",
      ".>",
      ":?",
      "bB",
      "fF",
      "gG",
      "vV",
      "xX",
      " ",
    ],
  },
  ina: {
    keymapShowTopRow: true,
    keys: [
      "`~",
      "1[",
      "2]",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9{",
      "0}",
      "qQ",
      "xX",
      "!+",
      "pP",
      "uU",
      "oO",
      "-_",
      "cC",
      "hH",
      "lL",
      "dD",
      "jJ",
      "zZ",
      "vV",
      "\\|",
      "iI",
      "nN",
      "eE",
      "aA",
      ",;",
      "mM",
      "tT",
      "kK",
      "rR",
      "sS",
      "'\"",
      "\\|",
      "=(",
      "@)",
      ":<",
      ".>",
      "?/",
      "gG",
      "bB",
      "yY",
      "wW",
      "fF",
      " ",
    ],
  },
  soul: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "lL",
      "dD",
      "pP",
      "kK",
      "mM",
      "uU",
      "yY",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "sS",
      "rR",
      "tT",
      "gG",
      "fF",
      "nN",
      "eE",
      "iI",
      "oO",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "vV",
      "jJ",
      "bB",
      "hH",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  niro: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "wW",
      "uU",
      "dD",
      "pP",
      "jJ",
      "fF",
      "yY",
      "lL",
      ";:",
      "[{",
      "]}",
      "\\|",
      "aA",
      "sS",
      "eE",
      "tT",
      "gG",
      "hH",
      "nN",
      "iI",
      "rR",
      "oO",
      "'\"",
      "\\|",
      "zZ",
      "xX",
      "cC",
      "vV",
      "bB",
      "kK",
      "mM",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  JCUKEN: {
    keymapShowTopRow: true,
    keys: [
      "ёЁ",
      "1!",
      '2"',
      "3№",
      "4;",
      "5%",
      "6:",
      "7?",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "йЙ",
      "цЦ",
      "уУ",
      "кК",
      "еЕ",
      "нН",
      "гГ",
      "шШ",
      "щЩ",
      "зЗ",
      "хХ",
      "ъЪ",
      "\\/",
      "фФ",
      "ыЫ",
      "вВ",
      "аА",
      "пП",
      "рР",
      "оО",
      "лЛ",
      "дД",
      "жЖ",
      "эЭ",
      "\\|",
      "яЯ",
      "чЧ",
      "сС",
      "мМ",
      "иИ",
      "тТ",
      "ьЬ",
      "бБ",
      "юЮ",
      ".,",
      " ",
    ],
  },
  ISRT: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "yY",
      "cC",
      "lL",
      "mM",
      "kK",
      "zZ",
      "fF",
      "uU",
      ",<",
      "'\"",
      "[{",
      "]}",
      "\\|",
      "iI",
      "sS",
      "rR",
      "tT",
      "gG",
      "pP",
      "nN",
      "eE",
      "aA",
      "oO",
      ";:",
      "\\|",
      "qQ",
      "vV",
      "wW",
      "dD",
      "jJ",
      "bB",
      "hH",
      "/?",
      ".>",
      "xX",
      " ",
    ],
  },
  ISRT_Angle: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "yY",
      "cC",
      "lL",
      "mM",
      "kK",
      "zZ",
      "fF",
      "uU",
      ",<",
      "'\"",
      "[{",
      "]}",
      "\\|",
      "iI",
      "sS",
      "rR",
      "tT",
      "gG",
      "pP",
      "nN",
      "eE",
      "aA",
      "oO",
      ";:",
      "\\|",
      "vV",
      "wW",
      "dD",
      "jJ",
      "qQ",
      "bB",
      "hH",
      "/?",
      ".>",
      "xX",
      " ",
    ],
  },
  colemak_Qix: {
    keymapShowTopRow: true,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "=+",
      "[{",
      ";:",
      "lL",
      "cC",
      "mM",
      "kK",
      "jJ",
      "fF",
      "uU",
      "yY",
      "qQ",
      "-_",
      "]}",
      "\\|",
      "aA",
      "rR",
      "sS",
      "tT",
      "gG",
      "pP",
      "nN",
      "eE",
      "iI",
      "oO",
      "'\"",
      "\\|",
      "xX",
      "wW",
      "dD",
      "vV",
      "zZ",
      "bB",
      "hH",
      "/?",
      ".>",
      ",<",
      " ",
    ],
  },
  colemaQ: {
    keymapShowTopRow: true,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "=+",
      "[{",
      ";:",
      "wW",
      "fF",
      "pP",
      "bB",
      "jJ",
      "lL",
      "uU",
      "yY",
      "qQ",
      "-_",
      "]}",
      "\\|",
      "aA",
      "rR",
      "sS",
      "tT",
      "gG",
      "mM",
      "nN",
      "eE",
      "iI",
      "oO",
      "'\"",
      "\\|",
      "xX",
      "cC",
      "dD",
      "kK",
      "zZ",
      "vV",
      "hH",
      "/?",
      ".>",
      ",<",
      " ",
    ],
  },
  engram: {
    keymapShowTopRow: true,
    keys: [
      "[{",
      "1|",
      "2=",
      "3~",
      "4+",
      "5<",
      "6>",
      "7^",
      "8&",
      "9%",
      "0*",
      "]}",
      "/\\",
      "bB",
      "yY",
      "oO",
      "uU",
      "'(",
      '")',
      "lL",
      "dD",
      "wW",
      "vV",
      "zZ",
      "#$",
      "@`",
      "cC",
      "iI",
      "eE",
      "aA",
      ",;",
      ".:",
      "hH",
      "tT",
      "sS",
      "nN",
      "qQ",
      "\\|",
      "gG",
      "xX",
      "jJ",
      "kK",
      "-_",
      "?!",
      "rR",
      "mM",
      "fF",
      "pP",
      " ",
    ],
  },
  semimak: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "fF",
      "lL",
      "hH",
      "vV",
      "zZ",
      "qQ",
      "wW",
      "uU",
      "oO",
      "yY",
      "[{",
      "]}",
      "\\|",
      "sS",
      "rR",
      "nN",
      "tT",
      "kK",
      "cC",
      "dD",
      "eE",
      "aA",
      "iI",
      ";:",
      "\\|",
      "xX",
      "'\"",
      "bB",
      "mM",
      "jJ",
      "pP",
      "gG",
      ",<",
      ".>",
      "/?",
      " ",
    ],
  },
  boo: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "[{",
      "]}",
      ",<",
      ".>",
      "uU",
      "cC",
      "vV",
      "qQ",
      "fF",
      "dD",
      "lL",
      "yY",
      "?/",
      "=+",
      "\\|",
      "aA",
      "oO",
      "eE",
      "sS",
      "gG",
      "bB",
      "nN",
      "tT",
      "rR",
      "iI",
      "-_",
      "\\|",
      ";:",
      "xX",
      "'\"",
      "wW",
      "zZ",
      "pP",
      "hH",
      "mM",
      "kK",
      "jJ",
      " ",
    ],
  },
  APT: {
    keymapShowTopRow: false,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "qQ",
      "cC",
      "dD",
      "lL",
      "xX",
      "zZ",
      "yY",
      "oO",
      "uU",
      ";:",
      "[{",
      "]}",
      "\\|",
      "rR",
      "sS",
      "tT",
      "hH",
      "kK",
      "pP",
      "nN",
      "eE",
      "iI",
      "aA",
      "/?",
      "\\|",
      "wW",
      "gG",
      "bB",
      "mM",
      "vV",
      "jJ",
      "fF",
      "'\"",
      ",<",
      ".>",
      " ",
    ],
  },
  thai_kedmanee: {
    keymapShowTopRow: true,
    keys: [
      "-%",
      "ๅ+",
      "/๑",
      "_๒",
      "ภ๓",
      "ถ๔",
      "ุู",
      "ึ฿",
      "ค๕",
      "ต๖",
      "จ๗",
      "ข๘",
      "ช๙",
      "ๆ๐",
      'ไ"',
      "ำฎ",
      "พฑ",
      "ะธ",
      "ัํ",
      "ี๊",
      "รณ",
      "นฯ",
      "ยญ",
      "บฐ",
      "ล,",
      "ฃฅ",
      "ฟฤ",
      "หฆ",
      "กฏ",
      "ดโ",
      "เฌ",
      "้็",
      "่๋",
      "าษ",
      "สศ",
      "วซ",
      "ง.",
      "ฃฅ",
      "ผ(",
      "ป)",
      "แฉ",
      "อฮ",
      "ิฺ",
      "ื์",
      "ท?",
      "มฒ",
      "ใฬ",
      "ฝฦ",
      " ",
    ],
  },
  thai_pattachote: {
    keymapShowTopRow: true,
    keys: [
      "฿~",
      "ๅ+",
      '๒"',
      "๓/",
      "๔,",
      "๕?",
      "ูุ",
      "๗_",
      "๘.",
      "๙(",
      "๐)",
      "๑-",
      "๖%",
      "็๊",
      "ตฤ",
      "ยๆ",
      "อญ",
      "รษ",
      "่ึ",
      "ดฝ",
      "มซ",
      "วถ",
      "แฒ",
      "ใฯ",
      "ฌฦ",
      "ฃฅ",
      "้๋",
      "ทธ",
      "งำ",
      "กณ",
      "ั์",
      "ีื",
      "าผ",
      "นช",
      "เโ",
      "ไฆ",
      "ขฑ",
      "ฃฅ",
      "บฎ",
      "ปฏ",
      "ลฐ",
      "หภ",
      "ิั",
      "คศ",
      "สฮ",
      "ะฟ",
      "จฉ",
      "พฬ",
      " ",
    ],
  },
  thai_manoonchai: {
    keymapShowTopRow: true,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "ใฒ",
      "ตฏ",
      "หซ",
      "ลญ",
      "สฟ",
      "ปฉ",
      "ัึ",
      "กธ",
      "ิฐ",
      "บฎ",
      "็ฆ",
      "ฬฑ",
      "ฯฌ",
      "งษ",
      "เถ",
      "รแ",
      "นช",
      "มพ",
      "อผ",
      "าำ",
      "่ข",
      "้โ",
      "วภ",
      'ื"',
      "ฯฌ",
      "ุฤ",
      "ไฝ",
      "ทๆ",
      "ยณ",
      "จ๊",
      "ค๋",
      "ี์",
      "ดศ",
      "ะฮ",
      "ู?",
      " ",
    ],
  },
  persian_standard: {
    keymapShowTopRow: true,
    keys: [
      "`~",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "ض",
      "ص",
      "ث",
      "ق",
      "ف",
      "غ",
      "ع",
      "ه",
      "خ",
      "ح",
      "ج",
      "چ",
      '"',
      "ش",
      "س",
      "ی",
      "ب",
      "ل",
      "اآ",
      "ت",
      "ن",
      "م",
      "ک",
      "گ",
      "\\|",
      "ظ",
      "ط",
      "زژ",
      "ر",
      "ذ",
      "د",
      "پ",
      "و",
      ".",
      "/?",
      " ",
    ],
  },
  arabic: {
    keymapShowTopRow: true,
    keys: [
      "ذّ",
      "ذّ",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "ضَ",
      "صً",
      "ثُ",
      "قٌ",
      "فﻹ",
      "غإ",
      "ع`",
      "ه÷",
      "خ×",
      "ح؛",
      "ج<",
      "د>",
      "\\…",
      "شِ",
      "سٍ",
      "ي]",
      "ب[",
      "لﻷ",
      "اأ",
      "تـ",
      "ن،",
      "م/",
      "ك:",
      'ط"',
      "\\|",
      "ئ~",
      "ءْ",
      "ؤ}",
      "ر{",
      "ﻻﻵ",
      "ىآ",
      "ة'",
      "و,",
      "ز.",
      "ظ?",
      " ",
    ],
  },
  arabic_mac: {
    keymapShowTopRow: false,
    keys: [
      "§±",
      "1!",
      "2@",
      "3#",
      "4$",
      "5%",
      "6^",
      "7&",
      "8*",
      "9(",
      "0)",
      "-_",
      "=+",
      "ضَ",
      "صً",
      "ثِ",
      "قٍ",
      "فُ",
      "غٌ",
      "عْ",
      "هّ",
      "خ]",
      "ح[",
      "ج}",
      "ة{",
      "\\|",
      "ش«",
      "س»",
      "يى",
      "ب",
      "ل",
      "اآ",
      "ت",
      "ن٫",
      "م٬",
      "ك:",
      '؛"',
      "ـ",
      "ظ'",
      "ط",
      "ذئ",
      "دء",
      "زأ",
      "رإ",
      "وؤ",
      "،>",
      ".<",
      "/؟",
      " ",
    ],
  },
};
export default layouts;
