import * as Funbox from "./funbox";
import * as UI from "./ui";

let mappedRoutes = {
  "": "pageTest",
  settings: "pageSettings",
  about: "pageAbout",
  verify: "pageTest",
};

export function handleInitialPageClasses(hash) {
  if (hash.match(/^group_/)) hash = "settings";
  let el = $(".page." + mappedRoutes[hash]);
  $(el).removeClass("hidden");
  $(el).addClass("active");
}
