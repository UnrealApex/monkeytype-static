import Chart from "chart.js";
import * as TestStats from "./test-stats";
import * as ThemeColors from "./theme-colors";
import * as Misc from "./misc";

export let result = new Chart($("#wpmChart"), {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "wpm",
        data: [],
        borderColor: "rgba(125, 125, 125, 1)",
        borderWidth: 2,
        yAxisID: "wpm",
        order: 2,
        radius: 2,
      },
      {
        label: "raw",
        data: [],
        borderColor: "rgba(125, 125, 125, 1)",
        borderWidth: 2,
        yAxisID: "raw",
        order: 3,
        radius: 2,
      },
      {
        label: "errors",
        data: [],
        borderColor: "rgba(255, 125, 125, 1)",
        pointBackgroundColor: "rgba(255, 125, 125, 1)",
        borderWidth: 2,
        order: 1,
        yAxisID: "error",
        maxBarThickness: 10,
        type: "scatter",
        pointStyle: "crossRot",
        radius: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return value <= 0 ? 0 : 3;
        },
        pointHoverRadius: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return value <= 0 ? 0 : 5;
        },
      },
    ],
  },
  options: {
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        afterLabel: function (ti) {
          try {
            $(".wordInputAfter").remove();

            let wordsToHighlight =
              TestStats.keypressPerSecond[parseInt(ti.xLabel) - 1].words;

            let unique = [...new Set(wordsToHighlight)];
            unique.forEach((wordIndex) => {
              let wordEl = $($("#resultWordsHistory .words .word")[wordIndex]);
              let input = wordEl.attr("input");
              if (input != undefined)
                wordEl.append(
                  `<div class="wordInputAfter">${input
                    .replace(/\t/g, "_")
                    .replace(/\n/g, "_")
                    .replace(/</g, "&lt")
                    .replace(/>/g, "&gt")}</div>`
                );
            });
          } catch {}
        },
      },
    },
    legend: {
      display: false,
      labels: {},
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            autoSkip: true,
            autoSkipPadding: 40,
          },
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Seconds",
          },
        },
      ],
      yAxes: [
        {
          id: "wpm",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Words per Minute",
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            autoSkip: true,
            autoSkipPadding: 40,
          },
          gridLines: {
            display: true,
          },
        },
        {
          id: "raw",
          display: false,
          scaleLabel: {
            display: true,
            labelString: "Raw Words per Minute",
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            autoSkip: true,
            autoSkipPadding: 40,
          },
          gridLines: {
            display: false,
          },
        },
        {
          id: "error",
          display: true,
          position: "right",
          scaleLabel: {
            display: true,
            labelString: "Errors",
          },
          ticks: {
            precision: 0,
            beginAtZero: true,
            autoSkip: true,
            autoSkipPadding: 40,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    annotation: {
      annotations: [],
    },
  },
});

export async function updateColors(chart) {
  let bgcolor = await ThemeColors.get("bg");
  let subcolor = await ThemeColors.get("sub");
  let maincolor = await ThemeColors.get("main");

  chart.data.datasets[0].borderColor = maincolor;
  chart.data.datasets[1].borderColor = subcolor;

  if (chart.data.datasets[0].type === undefined) {
    if (chart.config.type === "line") {
      chart.data.datasets[0].pointBackgroundColor = maincolor;
    } else if (chart.config.type === "bar") {
      chart.data.datasets[0].backgroundColor = maincolor;
    }
  } else if (chart.data.datasets[0].type === "bar") {
    chart.data.datasets[0].backgroundColor = maincolor;
  } else if (chart.data.datasets[0].type === "line") {
    chart.data.datasets[0].pointBackgroundColor = maincolor;
  }

  if (chart.data.datasets[1].type === undefined) {
    if (chart.config.type === "line") {
      chart.data.datasets[1].pointBackgroundColor = subcolor;
    } else if (chart.config.type === "bar") {
      chart.data.datasets[1].backgroundColor = subcolor;
    }
  } else if (chart.data.datasets[1].type === "bar") {
    chart.data.datasets[1].backgroundColor = subcolor;
  } else if (chart.data.datasets[1].type === "line") {
    chart.data.datasets[1].pointBackgroundColor = subcolor;
  }

  try {
    chart.options.scales.xAxes[0].ticks.minor.fontColor = subcolor;
    chart.options.scales.xAxes[0].scaleLabel.fontColor = subcolor;
  } catch {}

  try {
    chart.options.scales.yAxes[0].ticks.minor.fontColor = subcolor;
    chart.options.scales.yAxes[0].scaleLabel.fontColor = subcolor;
  } catch {}

  try {
    chart.options.scales.yAxes[1].ticks.minor.fontColor = subcolor;
    chart.options.scales.yAxes[1].scaleLabel.fontColor = subcolor;
  } catch {}

  try {
    chart.options.scales.yAxes[2].ticks.minor.fontColor = subcolor;
    chart.options.scales.yAxes[2].scaleLabel.fontColor = subcolor;
  } catch {}

  try {
    chart.data.datasets[0].trendlineLinear.style = subcolor;
    chart.data.datasets[1].trendlineLinear.style = subcolor;
  } catch {}

  try {
    chart.options.annotation.annotations.forEach((annotation) => {
      annotation.borderColor = subcolor;
      annotation.label.backgroundColor = subcolor;
      annotation.label.fontColor = bgcolor;
    });
  } catch {}

  // ChartController.result.options.annotation.annotations.push({
  //   enabled: false,
  //   type: "line",
  //   mode: "horizontal",
  //   scaleID: "wpm",
  //   value: lpb,
  //   borderColor: themecolors['sub'],
  //   borderWidth: 1,
  //   borderDash: [2, 2],
  //   label: {
  //     backgroundColor: themecolors['sub'],
  //     fontFamily: Config.fontFamily.replace(/_/g, " "),
  //     fontSize: 11,
  //     fontStyle: "normal",
  //     fontColor: themecolors['bg'],
  //     xPadding: 6,
  //     yPadding: 6,
  //     cornerRadius: 3,
  //     position: "center",
  //     enabled: true,
  //     content: `PB: ${lpb}`,
  //   },
  // });

  chart.update({ duration: 250 });
}

Chart.prototype.updateColors = function () {
  updateColors(this);
};

export function setDefaultFontFamily(font) {
  Chart.defaults.global.defaultFontFamily = font.replace(/_/g, " ");
}

export function updateAllChartColors() {
  ThemeColors.update();
  result.updateColors();
}
