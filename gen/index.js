//this file should be concatenated at the top of the legacy js files

import Chart from "chart.js";
import chartTrendline from "chartjs-plugin-trendline";
import chartAnnotation from "chartjs-plugin-annotation";

Chart.plugins.register(chartTrendline);
Chart.plugins.register(chartAnnotation);

import * as Misc from "./misc";
import Config from "./config";
import * as SimplePopups from "./simple-popups";
import { toggleGlarses } from "./test-logic";
import "./caps-warning";
import "./support-popup";
import "./version-popup";
import "./custom-theme-popup";
import "./import-settings-popup";
import "./input-controller";
import "./ready";
import "./about-page";
import * as TestStats from "./test-stats";

//this file should be concatenated with the legacy js files

//try to keep this list short because we need to eliminate it eventually
global.simplePopups = SimplePopups.simplePopups;

//these exports are just for debugging in the browser
global.config = Config;
// global.addnotif = Notifications.add;
global.glarsesMode = toggleGlarses;

global.stats = TestStats.getStats;
