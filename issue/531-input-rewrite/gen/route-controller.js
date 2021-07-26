import * as Funbox from "./funbox";
import * as UI from "./ui";
import Config from "./config";

let mappedRoutes = {
  "": "pageTest",
  "#settings": "pageSettings",
  "#about": "pageAbout",
  "#verify": "pageTest",
};

export function handleInitialPageClasses(hash) {
  if (hash.match(/^#group_/)) hash = "#settings";
  if (!mappedRoutes[hash]) {
    hash = "";
  }
  let el = $(".page." + mappedRoutes[hash]);
  $(el).removeClass("hidden");
  $(el).addClass("active");
}

(function (history) {
  var pushState = history.pushState;
  history.pushState = function (state) {
    if (Config.funbox === "memory" && state !== "/") {
      Funbox.resetMemoryTimer();
    }
    return pushState.apply(history, arguments);
  };
})(window.history);

$(window).on("popstate", (e) => {
  let state = e.originalEvent.state;
  if (state == "" || state == "/") {
    // show test
    UI.changePage("test");
  } else if (state == "about") {
    // show about
    UI.changePage("about");
  }
});
