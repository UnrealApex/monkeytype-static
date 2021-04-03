import * as ManualRestart from "./manual-restart-tracker";
import Config, * as UpdateConfig from "./config";
import * as Misc from "./misc";
import * as Settings from "./settings";
import * as RouteController from "./route-controller";
import * as UI from "./ui";

ManualRestart.set();
UpdateConfig.loadFromCookie();
Misc.getReleasesFromGitHub();

$(document).ready(() => {
  if (Misc.getCookie("pathname") === "") Misc.setCookie("pathname", "/", 365);
  RouteController.handleInitialPageClasses(Misc.getCookie("pathname"));
  if (Misc.getCookie("pathname") === "/") {
    $("#top .config").removeClass("hidden");
  }
  $("body").css("transition", ".25s");
  if (Config.quickTab) {
    $("#restartTestButton").addClass("hidden");
  }
  if (!Misc.getCookie("merchbannerclosed")) {
    $(".merchBanner").removeClass("hidden");
  } else {
    $(".merchBanner").remove();
  }
  $("#centerContent")
    .css("opacity", "0")
    .removeClass("hidden")
    .stop(true, true)
    .animate({ opacity: 1 }, 250, () => {
      if (/challenge_.+/g.test(Misc.getCookie("pathname"))) {
        //do nothing
        // }
      } else if (Misc.getCookie("pathname") !== "/") {
        let page = Misc.getCookie("pathname").replace("/", "");
        UI.changePage(page);
      }
    });
  Settings.settingsFillPromise.then(Settings.update);
});
