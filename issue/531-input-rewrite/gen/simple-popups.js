import * as Loader from "./loader";
import * as Notifications from "./notifications";
import * as Settings from "./settings";
import * as UpdateConfig from "./config";

export let list = {};
class SimplePopup {
  constructor(
    id,
    type,
    title,
    inputs = [],
    text = "",
    buttonText = "Confirm",
    execFn,
    beforeShowFn
  ) {
    this.parameters = [];
    this.id = id;
    this.type = type;
    this.execFn = execFn;
    this.title = title;
    this.inputs = inputs;
    this.text = text;
    this.wrapper = $("#simplePopupWrapper");
    this.element = $("#simplePopup");
    this.buttonText = buttonText;
    this.beforeShowFn = beforeShowFn;
  }
  reset() {
    this.element.html(`
    <div class="title"></div>
    <div class="inputs"></div>
    <div class="text"></div>
    <div class="button"></div>`);
  }

  init() {
    let el = this.element;
    el.find("input").val("");
    // if (el.attr("popupId") !== this.id) {
    this.reset();
    el.attr("popupId", this.id);
    el.find(".title").text(this.title);
    el.find(".text").text(this.text);

    this.initInputs();

    el.find(".button").text(this.buttonText);
    // }
  }

  initInputs() {
    let el = this.element;
    if (this.inputs.length > 0) {
      if (this.type === "number") {
        this.inputs.forEach((input) => {
          el.find(".inputs").append(`
        <input type="number" min="1" val="${input.initVal}" placeholder="${input.placeholder}" required autocomplete="off">
        `);
        });
      } else if (this.type === "text") {
        this.inputs.forEach((input) => {
          if (input.type) {
            el.find(".inputs").append(`
            <input type="${input.type}" val="${input.initVal}" placeholder="${input.placeholder}" required autocomplete="off">
            `);
          } else {
            el.find(".inputs").append(`
            <input type="text" val="${input.initVal}" placeholder="${input.placeholder}" required autocomplete="off">
            `);
          }
        });
      }
      el.find(".inputs").removeClass("hidden");
    } else {
      el.find(".inputs").addClass("hidden");
    }
  }

  exec() {
    let vals = [];
    $.each($("#simplePopup input"), (index, el) => {
      vals.push($(el).val());
    });
    this.execFn(...vals);
    this.hide();
  }

  show(parameters) {
    this.parameters = parameters;
    this.beforeShowFn();
    this.init();
    this.wrapper
      .stop(true, true)
      .css("opacity", 0)
      .removeClass("hidden")
      .animate({ opacity: 1 }, 125, () => {
        $($("#simplePopup").find("input")[0]).focus();
      });
  }

  hide() {
    this.wrapper
      .stop(true, true)
      .css("opacity", 1)
      .removeClass("hidden")
      .animate({ opacity: 0 }, 125, () => {
        this.wrapper.addClass("hidden");
      });
  }
}

$("#simplePopupWrapper").mousedown((e) => {
  if ($(e.target).attr("id") === "simplePopupWrapper") {
    $("#simplePopupWrapper")
      .stop(true, true)
      .css("opacity", 1)
      .removeClass("hidden")
      .animate({ opacity: 0 }, 125, () => {
        $("#simplePopupWrapper").addClass("hidden");
      });
  }
});

$(document).on("click", "#simplePopupWrapper .button", (e) => {
  let id = $("#simplePopup").attr("popupId");
  list[id].exec();
});

$(document).on("keyup", "#simplePopupWrapper input", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let id = $("#simplePopup").attr("popupId");
    list[id].exec();
  }
});

list.applyCustomFont = new SimplePopup(
  "applyCustomFont",
  "text",
  "Custom font",
  [{ placeholder: "Font name", initVal: "" }],
  "Make sure you have the font installed on your computer before applying.",
  "Apply",
  (fontName) => {
    if (fontName === "") return;
    Settings.groups.fontFamily.setValue(fontName.replace(/\s/g, "_"));
  },
  () => {}
);
