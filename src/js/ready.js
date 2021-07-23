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

console.log("hi hello this is");
  console.log('some code i added');
   console.
 .log('through the github UI');
          console.log(         "and the formatting"          );
console.log('is very' + " " + 'bad because');
                                                          console
                          .log('prettier didnt run :(');

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
