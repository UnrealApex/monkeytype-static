import SettingsGroup from "./settings-group";
import Config, * as UpdateConfig from "./config";
import * as Sound from "./sound";
import * as Misc from "./misc";
import layouts from "./layouts";
import * as LanguagePicker from "./language-picker";
import * as Notifications from "./notifications";
import * as Loader from "./loader";
import * as Funbox from "./funbox";
import * as SimplePopups from "./simple-popups";
import * as ThemePicker from "./theme-picker";

export let groups = {};
async function initGroups() {
  await UpdateConfig.loadPromise;
  groups.smoothCaret = new SettingsGroup(
    "smoothCaret",
    UpdateConfig.setSmoothCaret
  );
  groups.difficulty = new SettingsGroup(
    "difficulty",
    UpdateConfig.setDifficulty
  );
  groups.quickTab = new SettingsGroup("quickTab", UpdateConfig.setQuickTabMode);
  groups.showLiveWpm = new SettingsGroup(
    "showLiveWpm",
    UpdateConfig.setShowLiveWpm,
    () => {
      groups.keymapMode.updateButton();
    }
  );
  groups.showLiveAcc = new SettingsGroup(
    "showLiveAcc",
    UpdateConfig.setShowLiveAcc
  );
  groups.showTimerProgress = new SettingsGroup(
    "showTimerProgress",
    UpdateConfig.setShowTimerProgress
  );
  groups.keymapMode = new SettingsGroup(
    "keymapMode",
    UpdateConfig.setKeymapMode,
    () => {
      groups.showLiveWpm.updateButton();
    },
    () => {
      if (Config.keymapMode === "off") {
        $(".pageSettings .section.keymapStyle").addClass("hidden");
        $(".pageSettings .section.keymapLayout").addClass("hidden");
      } else {
        $(".pageSettings .section.keymapStyle").removeClass("hidden");
        $(".pageSettings .section.keymapLayout").removeClass("hidden");
      }
    }
  );
  groups.keymapMatrix = new SettingsGroup(
    "keymapStyle",
    UpdateConfig.setKeymapStyle
  );
  groups.keymapLayout = new SettingsGroup(
    "keymapLayout",
    UpdateConfig.setKeymapLayout
  );
  groups.showKeyTips = new SettingsGroup(
    "showKeyTips",
    UpdateConfig.setKeyTips,
    null,
    () => {
      if (Config.showKeyTips) {
        $(".pageSettings .tip").removeClass("hidden");
      } else {
        $(".pageSettings .tip").addClass("hidden");
      }
    }
  );
  groups.freedomMode = new SettingsGroup(
    "freedomMode",
    UpdateConfig.setFreedomMode,
    () => {
      groups.confidenceMode.updateButton();
    }
  );
  groups.strictSpace = new SettingsGroup(
    "strictSpace",
    UpdateConfig.setStrictSpace
  );
  groups.oppositeShiftMode = new SettingsGroup(
    "oppositeShiftMode",
    UpdateConfig.setOppositeShiftMode
  );
  groups.confidenceMode = new SettingsGroup(
    "confidenceMode",
    UpdateConfig.setConfidenceMode,
    () => {
      groups.freedomMode.updateButton();
      groups.stopOnError.updateButton();
    }
  );
  groups.indicateTypos = new SettingsGroup(
    "indicateTypos",
    UpdateConfig.setIndicateTypos
  );
  groups.hideExtraLetters = new SettingsGroup(
    "hideExtraLetters",
    UpdateConfig.setHideExtraLetters
  );
  groups.blindMode = new SettingsGroup("blindMode", UpdateConfig.setBlindMode);
  groups.quickEnd = new SettingsGroup("quickEnd", UpdateConfig.setQuickEnd);
  groups.repeatQuotes = new SettingsGroup(
    "repeatQuotes",
    UpdateConfig.setRepeatQuotes
  );
  groups.alwaysShowWordsHistory = new SettingsGroup(
    "alwaysShowWordsHistory",
    UpdateConfig.setAlwaysShowWordsHistory
  );
  groups.singleListCommandLine = new SettingsGroup(
    "singleListCommandLine",
    UpdateConfig.setSingleListCommandLine
  );
  groups.flipTestColors = new SettingsGroup(
    "flipTestColors",
    UpdateConfig.setFlipTestColors
  );
  groups.swapEscAndTab = new SettingsGroup(
    "swapEscAndTab",
    UpdateConfig.setSwapEscAndTab
  );
  groups.showOutOfFocusWarning = new SettingsGroup(
    "showOutOfFocusWarning",
    UpdateConfig.setShowOutOfFocusWarning
  );
  groups.colorfulMode = new SettingsGroup(
    "colorfulMode",
    UpdateConfig.setColorfulMode
  );
  groups.startGraphsAtZero = new SettingsGroup(
    "startGraphsAtZero",
    UpdateConfig.setStartGraphsAtZero
  );
  groups.randomTheme = new SettingsGroup(
    "randomTheme",
    UpdateConfig.setRandomTheme
  );
  groups.stopOnError = new SettingsGroup(
    "stopOnError",
    UpdateConfig.setStopOnError,
    () => {
      groups.confidenceMode.updateButton();
    }
  );
  groups.playSoundOnError = new SettingsGroup(
    "playSoundOnError",
    UpdateConfig.setPlaySoundOnError
  );
  groups.playSoundOnClick = new SettingsGroup(
    "playSoundOnClick",
    UpdateConfig.setPlaySoundOnClick,
    () => {
      if (Config.playSoundOnClick !== "off")
        Sound.playClick(Config.playSoundOnClick);
    }
  );
  groups.showAllLines = new SettingsGroup(
    "showAllLines",
    UpdateConfig.setShowAllLines
  );
  groups.paceCaret = new SettingsGroup(
    "paceCaret",
    UpdateConfig.setPaceCaret,
    () => {
      if (Config.paceCaret === "custom") {
        $(
          ".pageSettings .section.paceCaret input.customPaceCaretSpeed"
        ).removeClass("hidden");
      } else {
        $(
          ".pageSettings .section.paceCaret input.customPaceCaretSpeed"
        ).addClass("hidden");
      }
    }
  );
  groups.minWpm = new SettingsGroup("minWpm", UpdateConfig.setMinWpm, () => {
    if (Config.minWpm === "custom") {
      $(".pageSettings .section.minWpm input.customMinWpmSpeed").removeClass(
        "hidden"
      );
    } else {
      $(".pageSettings .section.minWpm input.customMinWpmSpeed").addClass(
        "hidden"
      );
    }
  });
  groups.minAcc = new SettingsGroup("minAcc", UpdateConfig.setMinAcc, () => {
    if (Config.minAcc === "custom") {
      $(".pageSettings .section.minAcc input.customMinAcc").removeClass(
        "hidden"
      );
    } else {
      $(".pageSettings .section.minAcc input.customMinAcc").addClass("hidden");
    }
  });
  groups.smoothLineScroll = new SettingsGroup(
    "smoothLineScroll",
    UpdateConfig.setSmoothLineScroll
  );
  groups.capsLockBackspace = new SettingsGroup(
    "capsLockBackspace",
    UpdateConfig.setCapsLockBackspace
  );
  groups.layout = new SettingsGroup("layout", UpdateConfig.setSavedLayout);
  groups.language = new SettingsGroup("language", UpdateConfig.setLanguage);
  groups.fontSize = new SettingsGroup("fontSize", UpdateConfig.setFontSize);
  groups.pageWidth = new SettingsGroup("pageWidth", UpdateConfig.setPageWidth);
  groups.caretStyle = new SettingsGroup(
    "caretStyle",
    UpdateConfig.setCaretStyle
  );
  groups.paceCaretStyle = new SettingsGroup(
    "paceCaretStyle",
    UpdateConfig.setPaceCaretStyle
  );
  groups.timerStyle = new SettingsGroup(
    "timerStyle",
    UpdateConfig.setTimerStyle
  );
  groups.highlighteMode = new SettingsGroup(
    "highlightMode",
    UpdateConfig.setHighlightMode
  );
  groups.timerOpacity = new SettingsGroup(
    "timerOpacity",
    UpdateConfig.setTimerOpacity
  );
  groups.timerColor = new SettingsGroup(
    "timerColor",
    UpdateConfig.setTimerColor
  );
  groups.fontFamily = new SettingsGroup(
    "fontFamily",
    UpdateConfig.setFontFamily,
    null,
    () => {
      let customButton = $(
        ".pageSettings .section.fontFamily .buttons .custom"
      );
      if (
        $(".pageSettings .section.fontFamily .buttons .active").length === 0
      ) {
        customButton.addClass("active");
        customButton.text(`Custom (${Config.fontFamily.replace(/_/g, " ")})`);
      } else {
        customButton.text("Custom");
      }
    }
  );
  groups.alwaysShowDecimalPlaces = new SettingsGroup(
    "alwaysShowDecimalPlaces",
    UpdateConfig.setAlwaysShowDecimalPlaces
  );
  groups.alwaysShowCPM = new SettingsGroup(
    "alwaysShowCPM",
    UpdateConfig.setAlwaysShowCPM
  );
  groups.customBackgroundSize = new SettingsGroup(
    "customBackgroundSize",
    UpdateConfig.setCustomBackgroundSize
  );
}

async function fillSettingsPage() {
  await initGroups();
  await UpdateConfig.loadPromise;
  ThemePicker.refreshButtons();

  let langGroupsEl = $(
    ".pageSettings .section.languageGroups .buttons"
  ).empty();
  let currentLanguageGroup = await Misc.findCurrentGroup(Config.language);
  Misc.getLanguageGroups().then((groups) => {
    groups.forEach((group) => {
      langGroupsEl.append(
        `<div class="languageGroup button${
          currentLanguageGroup === group.name ? " active" : ""
        }" group='${group.name}'>${group.name}</div>`
      );
    });
  });

  let layoutEl = $(".pageSettings .section.layout .buttons").empty();
  Object.keys(layouts).forEach((layout) => {
    layoutEl.append(
      `<div class="layout button" layout='${layout}'>${layout.replace(
        /_/g,
        " "
      )}</div>`
    );
  });

  let keymapEl = $(".pageSettings .section.keymapLayout .buttons").empty();
  keymapEl.append(
    `<div class="layout button" keymapLayout='overrideSync'>override sync</div>`
  );
  Object.keys(layouts).forEach((layout) => {
    if (layout.toString() != "default") {
      keymapEl.append(
        `<div class="layout button" keymapLayout='${layout}'>${layout.replace(
          /_/g,
          " "
        )}</div>`
      );
    }
  });

  let funboxEl = $(".pageSettings .section.funbox .buttons").empty();
  funboxEl.append(`<div class="funbox button" funbox='none'>none</div>`);
  Misc.getFunboxList().then((funboxModes) => {
    funboxModes.forEach((funbox) => {
      if (funbox.name === "mirror") {
        funboxEl.append(
          `<div class="funbox button" funbox='${funbox.name}' aria-label="${
            funbox.info
          }" data-balloon-pos="up" data-balloon-length="fit" type="${
            funbox.type
          }" style="transform:scaleX(-1);">${funbox.name.replace(
            /_/g,
            " "
          )}</div>`
        );
      } else {
        funboxEl.append(
          `<div class="funbox button" funbox='${funbox.name}' aria-label="${
            funbox.info
          }" data-balloon-pos="up" data-balloon-length="fit" type="${
            funbox.type
          }">${funbox.name.replace(/_/g, " ")}</div>`
        );
      }
    });
  });

  let isCustomFont = true;
  let fontsEl = $(".pageSettings .section.fontFamily .buttons").empty();
  Misc.getFontsList().then((fonts) => {
    fonts.forEach((font) => {
      if (Config.fontFamily === font.name) isCustomFont = false;
      fontsEl.append(
        `<div class="button${
          Config.fontFamily === font.name ? " active" : ""
        }" style="font-family:${
          font.display !== undefined ? font.display : font.name
        }" fontFamily="${font.name.replace(/ /g, "_")}" tabindex="0"
        onclick="this.blur();">${
          font.display !== undefined ? font.display : font.name
        }</div>`
      );
    });
    $(
      isCustomFont
        ? `<div class="language button no-auto-handle custom active" onclick="this.blur();">Custom (${Config.fontFamily.replace(
            /_/g,
            " "
          )})</div>`
        : '<div class="language button no-auto-handle custom" onclick="this.blur();">Custom</div>'
    )
      .on("click", () => {
        SimplePopups.list.applyCustomFont.show([]);
      })
      .appendTo(fontsEl);
  });

  $(".pageSettings .section.customBackgroundSize input").val(
    Config.customBackground
  );
}

export let settingsFillPromise = fillSettingsPage();

export function hideAccountSection() {
  $(`.sectionGroupTitle[group='account']`).addClass("hidden");
  $(`.settingsGroup.account`).addClass("hidden");
}

function setActiveFunboxButton() {
  $(`.pageSettings .section.funbox .button`).removeClass("active");
  $(
    `.pageSettings .section.funbox .button[funbox='${Funbox.active}']`
  ).addClass("active");
}

export function update() {
  Object.keys(groups).forEach((group) => {
    groups[group].updateButton();
  });

  LanguagePicker.setActiveGroup();
  setActiveFunboxButton();
  ThemePicker.updateActiveTab();
  ThemePicker.setCustomInputs();
  ThemePicker.refreshButtons();

  if (Config.paceCaret === "custom") {
    $(
      ".pageSettings .section.paceCaret input.customPaceCaretSpeed"
    ).removeClass("hidden");
    $(".pageSettings .section.paceCaret input.customPaceCaretSpeed").val(
      Config.paceCaretCustomSpeed
    );
  } else {
    $(".pageSettings .section.paceCaret input.customPaceCaretSpeed").addClass(
      "hidden"
    );
  }

  if (Config.minWpm === "custom") {
    $(".pageSettings .section.minWpm input.customMinWpmSpeed").removeClass(
      "hidden"
    );
    $(".pageSettings .section.minWpm input.customMinWpmSpeed").val(
      Config.minWpmCustomSpeed
    );
  } else {
    $(".pageSettings .section.minWpm input.customMinWpmSpeed").addClass(
      "hidden"
    );
  }

  if (Config.minAcc === "custom") {
    $(".pageSettings .section.minAcc input.customMinAcc").removeClass("hidden");
    $(".pageSettings .section.minAcc input.customMinAcc").val(
      Config.minAccCustom
    );
  } else {
    $(".pageSettings .section.minAcc input.customMinAcc").addClass("hidden");
  }
}

$(document).on(
  "focusout",
  ".pageSettings .section.paceCaret input.customPaceCaretSpeed",
  (e) => {
    UpdateConfig.setPaceCaretCustomSpeed(
      parseInt(
        $(".pageSettings .section.paceCaret input.customPaceCaretSpeed").val()
      )
    );
  }
);

$(document).on(
  "focusout",
  ".pageSettings .section.minWpm input.customMinWpmSpeed",
  (e) => {
    UpdateConfig.setMinWpmCustomSpeed(
      parseInt($(".pageSettings .section.minWpm input.customMinWpmSpeed").val())
    );
  }
);

$(document).on(
  "focusout",
  ".pageSettings .section.minAcc input.customMinAcc",
  (e) => {
    UpdateConfig.setMinAccCustom(
      parseInt($(".pageSettings .section.minAcc input.customMinAcc").val())
    );
  }
);

$(document).on(
  "click",
  ".pageSettings .section.languageGroups .button",
  (e) => {
    let group = $(e.currentTarget).attr("group");
    LanguagePicker.setActiveGroup(group, true);
  }
);

//funbox
$(document).on("click", ".pageSettings .section.funbox .button", (e) => {
  let funbox = $(e.currentTarget).attr("funbox");
  let type = $(e.currentTarget).attr("type");
  Funbox.activate(funbox, type);
  setActiveFunboxButton();
});

$("#resetSettingsButton").click((e) => {
  if (confirm("Press OK to confirm.")) {
    UpdateConfig.reset();
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
});

$("#exportSettingsButton").click((e) => {
  let configJSON = JSON.stringify(Config);
  navigator.clipboard.writeText(configJSON).then(
    function () {
      Notifications.add("JSON Copied to clipboard", 0);
    },
    function (err) {
      Notifications.add(
        "Something went wrong when copying the settings JSON: " + err,
        -1
      );
    }
  );
});

$(".pageSettings .sectionGroupTitle").click((e) => {
  let group = $(e.currentTarget).attr("group");
  $(`.pageSettings .settingsGroup.${group}`)
    .stop(true, true)
    .slideToggle(250)
    .toggleClass("slideup");
  if ($(`.pageSettings .settingsGroup.${group}`).hasClass("slideup")) {
    $(`.pageSettings .sectionGroupTitle[group=${group}] .fas`)
      .stop(true, true)
      .animate(
        {
          deg: -90,
        },
        {
          duration: 250,
          step: function (now) {
            $(this).css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );
  } else {
    $(`.pageSettings .sectionGroupTitle[group=${group}] .fas`)
      .stop(true, true)
      .animate(
        {
          deg: 0,
        },
        {
          duration: 250,
          step: function (now) {
            $(this).css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );
  }
});

$(".pageSettings #resetPersonalBestsButton").on("click", (e) => {
  SimplePopups.list.resetPersonalBests.show();
});

$(".pageSettings #updateAccountEmail").on("click", (e) => {
  SimplePopups.list.updateEmail.show();
});

$(".pageSettings .section.customBackgroundSize .inputAndButton .save").on(
  "click",
  (e) => {
    UpdateConfig.setCustomBackground(
      $(
        ".pageSettings .section.customBackgroundSize .inputAndButton input"
      ).val()
    );
  }
);

$(".pageSettings .section.customBackgroundSize .inputAndButton .cover").on(
  "click",
  (e) => {
    UpdateConfig.setCustomBackgroundSize("cover");
  }
);

$(".pageSettings .section.customBackgroundSize .inputAndButton .contain").on(
  "click",
  (e) => {
    UpdateConfig.setCustomBackgroundSize("contain");
  }
);

$(".pageSettings .section.customBackgroundSize .inputAndButton input").keypress(
  (e) => {
    if (e.keyCode == 13) {
      UpdateConfig.setCustomBackground(
        $(
          ".pageSettings .section.customBackgroundSize .inputAndButton input"
        ).val()
      );
    }
  }
);
