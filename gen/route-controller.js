import * as Funbox from "./funbox";
import * as UI from "./ui";

let mappedRoutes = {
  "/": "pageTest",
  "/settings": "pageSettings",
  "/about": "pageAbout",
  "/verify": "pageTest",
};

export function handleInitialPageClasses(pathname) {
  let el = $(".page." + mappedRoutes[pathname]);
  $(el).removeClass("hidden");
  $(el).addClass("active");
}

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
