import * as TestLogic from "./test-logic";
import * as TestUI from "./test-ui";
import * as TestStats from "./test-stats";
import * as Monkey from "./monkey";
import Config, * as UpdateConfig from "./config";
import * as Keymap from "./keymap";
import * as Misc from "./misc";
import * as LiveAcc from "./live-acc";
import * as Funbox from "./funbox";
import * as Sound from "./sound";
import * as Caret from "./caret";
import * as ManualRestart from "./manual-restart-tracker";
import * as Notifications from "./notifications";
import * as CustomText from "./custom-text";
import * as UI from "./ui";
import * as Settings from "./settings";
import * as LayoutEmulator from "./layout-emulator";
import * as PaceCaret from "./pace-caret";
import * as TimerProgress from "./timer-progress";
import * as TestTimer from "./test-timer";
import * as Focus from "./focus";
import * as ShiftTracker from "./shift-tracker";
import * as Replay from "./replay.js";

let dontInsertSpace = false;
let inputWordBeforeChange = "";

function handleTab(event) {
  if (TestUI.resultCalculating) {
    event.preventDefault();
  }
  if ($("#customTextPopup .textarea").is(":focus")) {
    event.preventDefault();

    let area = $("#customTextPopup .textarea")[0];

    var start = area.selectionStart;
    var end = area.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    area.value =
      area.value.substring(0, start) + "\t" + area.value.substring(end);

    // put caret at right position again
    area.selectionStart = area.selectionEnd = start + 1;

    return;
  } else if (
    !TestUI.resultCalculating &&
    $("#commandLineWrapper").hasClass("hidden") &&
    $("#simplePopupWrapper").hasClass("hidden") &&
    !$(".page.pageLogin").hasClass("active")
  ) {
    if ($(".pageTest").hasClass("active")) {
      if (Config.quickTab) {
        if (
          TestUI.resultVisible ||
          !(
            (Config.mode == "zen" && !event.shiftKey) ||
            (TestLogic.hasTab && !event.shiftKey)
          )
        ) {
          if (event.shiftKey) ManualRestart.set();
          event.preventDefault();
          if (
            TestLogic.active &&
            Config.repeatQuotes === "typing" &&
            Config.mode === "quote"
          ) {
            TestLogic.restart(true, false, event);
          } else {
            TestLogic.restart(false, false, event);
          }
        } else {
          event.preventDefault();
          triggerInputWith("\t");
        }
      } else if (!TestUI.resultVisible) {
        if (
          (TestLogic.hasTab && event.shiftKey) ||
          (!TestLogic.hasTab && Config.mode !== "zen") ||
          (Config.mode === "zen" && event.shiftKey)
        ) {
          event.preventDefault();
          $("#restartTestButton").focus();
        } else {
          event.preventDefault();
          triggerInputWith("\t");
        }
      }
    } else if (Config.quickTab) {
      UI.changePage("test");
    }
  }
}

function setupBackspace(event) {
  if (!TestLogic.active) return;

  Sound.playClick(Config.playSoundOnClick);

  if (
    TestLogic.input.currentWord.length > 0 ||
    TestLogic.input.history.length == 0 ||
    TestUI.currentWordElementIndex == 0
  )
    return;

  if (
    (TestLogic.input.history[TestLogic.words.currentIndex - 1] ==
      TestLogic.words.get(TestLogic.words.currentIndex - 1) &&
      !Config.freedomMode) ||
    $($(".word")[TestLogic.words.currentIndex - 1]).hasClass("hidden")
  ) {
    event.preventDefault();
    return;
  }

  if (Config.confidenceMode === "on" || Config.confidenceMode === "max") {
    event.preventDefault();
    return;
  }

  TestLogic.input.currentWord = TestLogic.input.popHistory();
  TestLogic.corrected.popHistory();

  if (Funbox.active !== "nospace") {
    TestLogic.input.currentWord += " ";
  }

  TestLogic.words.decreaseCurrentIndex();
  TestUI.setCurrentWordElementIndex(TestUI.currentWordElementIndex - 1);
  TestUI.updateActiveElement(true);
  Funbox.toggleScript(TestLogic.words.getCurrent());

  if (Config.keymapMode === "react") {
    Keymap.flashKey(event.code, true);
  } else if (Config.keymapMode === "next" && Config.mode !== "zen") {
    Keymap.highlightKey(
      TestLogic.words
        .getCurrent()
        .substring(
          TestLogic.input.currentWord.length,
          TestLogic.input.currentWord.length + 1
        )
        .toString()
        .toUpperCase()
    );
  }
}

function handleSpace() {
  if (!TestLogic.active) return;

  const inputWord = TestLogic.input.currentWord.slice(0, -1);

  // handleLastChar() will decide if it gets inserted as character on start of word or not
  if (inputWord === "") return;

  if (Config.mode == "zen") {
    $("#words .word.active").removeClass("active");
    $("#words").append("<div class='word active'></div>");
  }

  let currentWord = TestLogic.words.getCurrent();
  if (Funbox.active === "layoutfluid" && Config.mode !== "time") {
    // here I need to check if Config.customLayoutFluid exists because of my scuffed solution of returning whenever value is undefined in the setCustomLayoutfluid function
    const layouts = Config.customLayoutfluid
      ? Config.customLayoutfluid.split("#")
      : ["qwerty", "dvorak", "colemak"];
    let index = 0;
    let outof = TestLogic.words.length;
    index = Math.floor(
      (TestLogic.input.history.length + 1) / (outof / layouts.length)
    );
    if (Config.layout !== layouts[index] && layouts[index] !== undefined) {
      Notifications.add(`--- !!! ${layouts[index]} !!! ---`, 0);
    }
    UpdateConfig.setLayout(layouts[index]);
    UpdateConfig.setKeymapLayout(layouts[index]);
    Keymap.highlightKey(
      TestLogic.words
        .getCurrent()
        .substring(inputWord.length, inputWord.length + 1)
        .toString()
        .toUpperCase()
    );
    Settings.groups.layout.updateButton();
  }
  dontInsertSpace = true;

  //correct word or in zen mode
  const isWordCorrect = currentWord == inputWord || Config.mode == "zen";
  PaceCaret.handleSpace(isWordCorrect, currentWord);
  TestStats.incrementAccuracy(isWordCorrect);
  if (isWordCorrect) {
    Replay.addReplayEvent("submitCorrectWord");
    TestLogic.words.increaseCurrentIndex();
    TestUI.setCurrentWordElementIndex(TestUI.currentWordElementIndex + 1);
    TestUI.updateActiveElement();
    Funbox.toggleScript(TestLogic.words.getCurrent());
    Caret.updatePosition();
    TestStats.incrementKeypressCount();
    TestStats.pushKeypressWord(TestLogic.words.currentIndex);
    if (Funbox.active !== "nospace") {
      Sound.playClick(Config.playSoundOnClick);
    }
  } else {
    Replay.addReplayEvent("submitErrorWord");
    if (Funbox.active !== "nospace") {
      if (!Config.playSoundOnError || Config.blindMode) {
        Sound.playClick(Config.playSoundOnClick);
      } else {
        Sound.playError(Config.playSoundOnError);
      }
    }
    TestStats.incrementKeypressErrors();
    let cil = inputWord.length;
    if (cil <= TestLogic.words.getCurrent().length) {
      if (cil >= TestLogic.corrected.currentWord.length) {
        TestLogic.corrected.currentWord += "_";
      } else {
        TestLogic.corrected.currentWord =
          TestLogic.corrected.currentWord.substring(0, cil) +
          "_" +
          TestLogic.corrected.currentWord.substring(cil + 1);
      }
    }
    if (Config.stopOnError != "off") {
      if (Config.difficulty == "expert" || Config.difficulty == "master") {
        //failed due to diff when pressing space
        TestLogic.fail();
        return;
      }
      if (Config.stopOnError == "word") {
        TestLogic.input.currentWord += " ";
        TestUI.updateWordElement(true);
        Caret.updatePosition();
      }
      return;
    }
    if (Config.blindMode) $("#words .word.active letter").addClass("correct");
    TestUI.highlightBadWord(TestUI.currentWordElementIndex, !Config.blindMode);
    TestLogic.words.increaseCurrentIndex();
    TestUI.setCurrentWordElementIndex(TestUI.currentWordElementIndex + 1);
    TestUI.updateActiveElement();
    Funbox.toggleScript(TestLogic.words.getCurrent());
    Caret.updatePosition();
    TestStats.incrementKeypressCount();
    TestStats.pushKeypressWord(TestLogic.words.currentIndex);
    TestStats.updateLastKeypress();
    if (Config.difficulty == "expert" || Config.difficulty == "master") {
      TestLogic.fail();
      return;
    } else if (TestLogic.words.currentIndex == TestLogic.words.length) {
      //submitted last word that is incorrect
      TestLogic.finish();
      return;
    }
  }

  TestLogic.input.currentWord = inputWord;
  TestLogic.input.pushHistory();
  TestLogic.corrected.pushHistory();

  if (
    !Config.showAllLines ||
    Config.mode == "time" ||
    (CustomText.isWordRandom && CustomText.word == 0) ||
    CustomText.isTimeRandom
  ) {
    let currentTop = Math.floor(
      document.querySelectorAll("#words .word")[
        TestUI.currentWordElementIndex - 1
      ].offsetTop
    );
    let nextTop;
    try {
      nextTop = Math.floor(
        document.querySelectorAll("#words .word")[
          TestUI.currentWordElementIndex
        ].offsetTop
      );
    } catch (e) {
      nextTop = 0;
    }

    if (nextTop > currentTop && !TestUI.lineTransition) {
      TestUI.lineJump(currentTop);
    }
  } //end of line wrap

  Caret.updatePosition();

  if (Config.keymapMode === "react") {
    Keymap.flashKey("Space", true);
  } else if (Config.keymapMode === "next" && Config.mode !== "zen") {
    Keymap.highlightKey(
      TestLogic.words
        .getCurrent()
        .substring(inputWord.length, inputWord.length + 1)
        .toString()
        .toUpperCase()
    );
  }
  if (
    Config.mode === "words" ||
    Config.mode === "custom" ||
    Config.mode === "quote" ||
    Config.mode === "zen"
  ) {
    TimerProgress.update(TestTimer.time);
  }
  if (
    Config.mode == "time" ||
    Config.mode == "words" ||
    Config.mode == "custom"
  ) {
    TestLogic.addWord();
  }
}

function isCharCorrect(char) {
  if (
    Config.oppositeShiftMode === "on" &&
    ShiftTracker.isUsingOppositeShift(char) === false
  ) {
    return false;
  }

  if (Config.mode == "zen") {
    return true;
  }

  const originalChar = TestLogic.words
    .getCurrent()
    .charAt(TestLogic.input.currentWord.length - 1);

  if (originalChar == char) {
    return true;
  }

  if (Config.language.split("_")[0] == "russian") {
    if ((char === "е" || char === "e") && originalChar == "ё") {
      return true;
    }
    if (char === "ё" && (originalChar == "е" || originalChar === "e")) {
      return true;
    }
  }

  if (char === "’" && originalChar == "'") {
    return true;
  }

  if (char === "'" && originalChar == "’") {
    return true;
  }

  if (char === "”" && originalChar == '"') {
    return true;
  }

  if (char === '"' && originalChar == "”") {
    return true;
  }

  if ((char === "–" || char === "—") && originalChar == "-") {
    return true;
  }

  return false;
}

function handleLastChar() {
  if (TestUI.resultCalculating || TestUI.resultVisible) {
    TestLogic.input.dropLastChar();
    return;
  }

  let char =
    TestLogic.input.currentWord[TestLogic.input.currentWord.length - 1];

  if (char === "\n" && Funbox.active === "58008") {
    char = " ";
  }

  if (char === " ") {
    handleSpace();

    //insert space for expert and master or strict space,
    //otherwise dont do anything
    if (Config.difficulty !== "normal" || Config.strictSpace) {
      if (dontInsertSpace) {
        dontInsertSpace = false;
        TestLogic.input.dropLastChar();
        return;
      }
    } else {
      TestLogic.input.dropLastChar();
      return;
    }
  }

  //start the test
  if (!TestLogic.active && !TestLogic.startTest()) {
    TestLogic.input.dropLastChar();
    return;
  }

  Focus.set(true);
  Caret.stopAnimation();

  let thisCharCorrect = isCharCorrect(char);

  if (!thisCharCorrect && Misc.testDiacritic(char)) return;

  TestStats.incrementAccuracy(thisCharCorrect);

  if (!thisCharCorrect) {
    Replay.addReplayEvent("incorrectLetter", char);
    TestStats.incrementKeypressErrors();
    TestStats.pushMissedWord(TestLogic.words.getCurrent());
  } else {
    Replay.addReplayEvent("correctLetter", char);
  }

  if (thisCharCorrect) {
    Sound.playClick(Config.playSoundOnClick);
  } else {
    if (!Config.playSoundOnError || Config.blindMode) {
      Sound.playClick(Config.playSoundOnClick);
    } else {
      Sound.playError(Config.playSoundOnError);
    }
  }

  if (
    Config.oppositeShiftMode === "on" &&
    ShiftTracker.isUsingOppositeShift(char) === false
  ) {
    TestLogic.input.dropLastChar();
    return;
  }

  //update current corrected version. if its empty then add the current char. if its not then replace the last character with the currently pressed one / add it
  if (TestLogic.corrected.currentWord === "") {
    TestLogic.corrected.currentWord = TestLogic.input.currentWord;
  } else {
    let cil = TestLogic.input.currentWord.length;
    if (cil >= TestLogic.corrected.currentWord.length) {
      TestLogic.corrected.currentWord += char;
    } else if (!thisCharCorrect) {
      TestLogic.corrected.currentWord =
        TestLogic.corrected.currentWord.substring(0, cil) +
        char +
        TestLogic.corrected.currentWord.substring(cil + 1);
    }
  }

  TestStats.incrementKeypressCount();
  TestStats.updateLastKeypress();
  TestStats.pushKeypressWord(TestLogic.words.currentIndex);

  if (Config.stopOnError == "letter" && !thisCharCorrect) {
    TestLogic.input.dropLastChar();
    return;
  }

  //update the active word top, but only once
  if (
    TestLogic.input.currentWord.length === 2 &&
    TestLogic.words.currentIndex === 0
  ) {
    TestUI.setActiveWordTop(document.querySelector("#words .active").offsetTop);
  }

  //max length of the input is 20 unless in zen mode then its 30
  if (Config.mode == "zen") {
    TestLogic.input.currentWord = TestLogic.input.currentWord.substring(0, 30);
  } else {
    TestLogic.input.currentWord = TestLogic.input.currentWord.substring(
      0,
      TestLogic.words.getCurrent().length + 20
    );
  }

  if (!thisCharCorrect && Config.difficulty == "master") {
    TestLogic.fail();
    return;
  }

  //keymap
  if (Config.keymapMode === "react") {
    Keymap.flashKey(char, thisCharCorrect);
  } else if (Config.keymapMode === "next" && Config.mode !== "zen") {
    Keymap.highlightKey(
      TestLogic.words
        .getCurrent()
        .substring(
          TestLogic.input.currentWord.length,
          TestLogic.input.currentWord.length + 1
        )
        .toString()
        .toUpperCase()
    );
  }

  if (Config.mode != "zen") {
    //not applicable to zen mode
    //auto stop the test if the last word is correct
    let currentWord = TestLogic.words.getCurrent();
    let lastindex = TestLogic.words.currentIndex;
    if (
      (currentWord == TestLogic.input.currentWord ||
        (Config.quickEnd &&
          currentWord.length == TestLogic.input.currentWord.length &&
          Config.stopOnError == "off")) &&
      lastindex == TestLogic.words.length - 1
    ) {
      TestLogic.input.pushHistory();
      TestLogic.corrected.pushHistory();
      TestLogic.finish();
    }
  }

  let activeWordTopBeforeJump = TestUI.activeWordTop;
  let newActiveTop = document.querySelector("#words .word.active").offsetTop;
  //stop the word jump by slicing off the last character, update word again
  if (
    activeWordTopBeforeJump < newActiveTop &&
    !TestUI.lineTransition &&
    TestLogic.input.currentWord.length > 1
  ) {
    if (Config.mode == "zen") {
      let currentTop = Math.floor(
        document.querySelectorAll("#words .word")[
          TestUI.currentWordElementIndex - 1
        ].offsetTop
      );
      if (!Config.showAllLines) TestUI.lineJump(currentTop);
    } else {
      TestLogic.input.dropLastChar();
    }
  }

  //simulate space press in nospace funbox
  if (
    (Funbox.active === "nospace" &&
      TestLogic.input.currentWord.length ===
        TestLogic.words.getCurrent().length) ||
    (char === "\n" && thisCharCorrect)
  ) {
    TestLogic.input.currentWord += " ";
    setTimeout(handleSpace, 0);
  }
}

$(document).keydown(function (event) {
  //autofocus
  const pageTestActive = !$(".pageTest").hasClass("hidden");
  const commandLineVisible = !$("#commandLineWrapper").hasClass("hidden");
  const wordsFocused = $("#wordsInput").is(":focus");
  const modePopupVisible =
    !$("#customTextPopupWrapper").hasClass("hidden") ||
    !$("#customWordAmountPopupWrapper").hasClass("hidden") ||
    !$("#customTestDurationPopupWrapper").hasClass("hidden") ||
    !$("#quoteSearchPopupWrapper").hasClass("hidden") ||
    !$("#wordFilterPopupWrapper").hasClass("hidden");
  if (
    pageTestActive &&
    !commandLineVisible &&
    !modePopupVisible &&
    !TestUI.resultVisible &&
    !wordsFocused &&
    event.key !== "Enter"
  ) {
    TestUI.focusWords();
    if (Config.showOutOfFocusWarning) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  //tab
  if (
    (event.key == "Tab" && !Config.swapEscAndTab) ||
    (event.key == "Escape" && Config.swapEscAndTab)
  ) {
    handleTab(event);
  }

  //blocking firefox from going back in history with backspace
  if (event.key === "Backspace" && wordsFocused) {
    if (event.target.disabled || event.target.readOnly) {
      event.preventDefault();
    }
  }
});

$("#wordsInput").keydown(function (event) {
  if (!event.originalEvent.isTrusted) {
    event.preventDefault();
    return;
  }

  if (TestUI.testRestarting) {
    return;
  }

  Monkey.type();

  TestStats.recordKeypressSpacing();
  TestStats.setKeypressDuration(performance.now());

  if (event.key === "Backspace") {
    setupBackspace(event);
  }

  if (event.key === "Enter") {
    if (event.shiftKey && Config.mode == "zen") {
      TestLogic.finish();
    }
    if (
      event.shiftKey &&
      ((Config.mode == "time" && Config.time === 0) ||
        (Config.mode == "words" && Config.words === 0))
    ) {
      TestLogic.setBailout(true);
      TestLogic.finish();
    }
  }

  //show dead keys
  if (event.key === "Dead") {
    Sound.playClick(Config.playSoundOnClick);
    $(
      document.querySelector("#words .word.active").querySelectorAll("letter")[
        TestLogic.input.currentWord.length
      ]
    ).toggleClass("dead");
    return;
  }

  if (
    [
      "ContextMenu",
      "Escape",
      "Shift",
      "Control",
      "Meta",
      "Alt",
      "AltGraph",
      "CapsLock",
      "Backspace",
      "PageUp",
      "PageDown",
      "Home",
      "ArrowUp",
      "ArrowLeft",
      "ArrowRight",
      "ArrowDown",
      "OS",
      "Insert",
      "Home",
      "Undefined",
      "Control",
      "Fn",
      "FnLock",
      "Hyper",
      "NumLock",
      "ScrollLock",
      "Symbol",
      "SymbolLock",
      "Super",
      "Unidentified",
      "Process",
      "Delete",
      "KanjiMode",
      "Pause",
      "PrintScreen",
      "Clear",
      "End",
      undefined,
    ].includes(event.key)
  ) {
    TestStats.incrementKeypressMod();
  }

  if (Config.layout !== "default") {
    const char = LayoutEmulator.getCharFromEvent(event);
    if (char !== null) {
      event.preventDefault();
      triggerInputWith(char);
    }
  }
});

$("#wordsInput").keyup((event) => {
  if (!event.originalEvent.isTrusted) {
    event.preventDefault();
    return;
  }

  if (TestUI.resultVisible) return;
  let now = performance.now();
  let diff = Math.abs(TestStats.keypressTimings.duration.current - now);
  if (TestStats.keypressTimings.duration.current !== -1) {
    TestStats.pushKeypressDuration(diff);
  }
  TestStats.setKeypressDuration(now);
  Monkey.stop();
});

function triggerInputWith(string) {
  $("#wordsInput").trigger("beforeinput");
  TestLogic.input.currentWord += string;
  $("#wordsInput").trigger("input");
}

$("#wordsInput").on("keyup keydown", function (event) {
  if (
    this.selectionStart !== event.target.value.length ||
    this.selectionEnd !== event.target.value.length
  ) {
    this.selectionStart = this.selectionEnd = event.target.value.length;
  }
});

$("#wordsInput").on("beforeinput", function (event) {
  inputWordBeforeChange = event.target.value.normalize();
});

$("#wordsInput").on("input", function (event) {
  if (TestUI.testRestarting) return;

  if (TestLogic.input.currentWord.length >= inputWordBeforeChange.length) {
    handleLastChar();
  } else if (inputWordBeforeChange.length > 0) {
    for (
      let i = 0;
      i < inputWordBeforeChange.length - TestLogic.input.currentWord.length;
      i++
    ) {
      Replay.addReplayEvent("deleteLetter");
    }
  }

  TestUI.updateWordElement();
  Caret.updatePosition();

  let acc = Misc.roundTo2(TestStats.calculateAccuracy());
  LiveAcc.update(acc);

  inputWordBeforeChange = "";
});