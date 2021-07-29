import * as ManualRestart from "./manual-restart-tracker";
import Config, * as UpdateConfig from "./config";
import * as Misc from "./misc";
import * as Settings from "./settings";
import * as RouteController from "./route-controller";
import * as UI from "./ui";
import * as MonkeyPower from "./monkey-power";

ManualRestart.set();
Misc.migrateFromCookies();
UpdateConfig.loadFromLocalStorage();
Misc.getReleasesFromGitHub();

RouteController.handleInitialPageClasses(window.location.hash);
$(document).ready(() => {
  if (window.location.hash === "") {
    $("#top .config").removeClass("hidden");
  }
  $("body").css("transition", "all .25s, transform .05s");
  if (Config.quickTab) {
    $("#restartTestButton").addClass("hidden");
  }
  if (!window.localStorage.getItem("merchbannerclosed")) {
    $(".merchBanner").removeClass("hidden");
  } else {
    $(".merchBanner").remove();
  }
  $("#centerContent")
    .css("opacity", "0")
    .removeClass("hidden")
    .stop(true, true)
    .animate({ opacity: 1 }, 250, () => {
      if (/#challenge_.+/g.test(window.location.hash)) {
        //do nothing
        // }
      } else if (window.location.hash !== "") {
        UI.changePage(window.location.hash);
      }
    });
  Settings.settingsFillPromise.then(Settings.update);
  MonkeyPower.init();
});
