import { Options } from "highcharts";
import { ChartData } from "../types/index";

const LINE_CHART_DATA: Options = {
  chart: {
    type: "line",
  },
  title: {
    text: "U.S Solar Employment Growth",
    align: "left",
  },

  subtitle: {
    text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    align: "left",
  },

  yAxis: {
    title: {
      text: "Number of Employees",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2020",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },

  series: [
    {
      name: "Installation & Developers",
      data: [
        43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
        161454, 154610,
      ],
    },
    {
      name: "Manufacturing",
      data: [
        24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243,
        31050,
      ],
    },
    {
      name: "Sales & Distribution",
      data: [
        11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213,
        25663,
      ],
    },
    {
      name: "Operations & Maintenance",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        11164,
        11218,
        10077,
      ],
    },
    {
      name: "Other",
      data: [
        21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906,
        10073,
      ],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};

const AREA_CHART_DATA: Options = {
  chart: {
    type: "areaspline",
  },
  title: {
    text: "Moose and deer hunting in Norway, 2000 - 2021",
    align: "left",
  },
  subtitle: {
    text: 'Source: <a href="https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt" target="_blank">SSB</a>',
    align: "left",
  },
  legend: {
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 120,
    y: 70,
    floating: true,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
  },
  xAxis: {
    plotBands: [
      {
        // Highlight the two last years
        from: 2019,
        to: 2020,
        color: "rgba(68, 170, 213, .2)",
      },
    ],
  },
  yAxis: {
    title: {
      text: "Quantity",
    },
  },
  tooltip: {
    shared: true,
    headerFormat: "<b>Hunting season starting autumn {point.x}</b><br>",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointStart: 2000,
    },
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      name: "Moose",
      data: [
        38000, 37300, 37892, 38564, 36770, 36026, 34978, 35657, 35620, 35971,
        36409, 36435, 34643, 34956, 33199, 31136, 30835, 31611, 30666, 30319,
        31766,
      ],
    },
    {
      name: "Deer",
      data: [
        22534, 23599, 24533, 25195, 25896, 27635, 29173, 32646, 35686, 37709,
        39143, 36829, 35031, 36202, 35140, 33718, 37773, 42556, 43820, 46445,
        50048,
      ],
    },
  ],
};

const BAR_CHART_DATA = {
  chart: {
    type: "bar",
  },
  title: {
    text: "Historic World Population by Region",
    align: "left",
  },
  subtitle: {
    text:
      "Source: <a " +
      'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
      'target="_blank">Wikipedia.org</a>',
    align: "left",
  },
  xAxis: {
    categories: ["Africa", "America", "Asia", "Europe"],
    title: {
      text: null,
    },
    gridLineWidth: 1,
    lineWidth: 0,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Population (millions)",
      align: "high",
    },
    labels: {
      overflow: "justify",
    },
    gridLineWidth: 0,
  },
  tooltip: {
    valueSuffix: " millions",
  },
  plotOptions: {
    bar: {
      borderRadius: "50%",
      dataLabels: {
        enabled: true,
      },
      groupPadding: 0.1,
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    shadow: true,
  },
  credits: {
    enabled: false,
  },

  series: [
    {
      name: "Year 2018",
      data: [631, 727, 3202, 721],
    },
    {
      name: "Year 2019",
      data: [814, 841, 3714, 726],
    },
    {
      name: "Year 2020",
      data: [1276, 1007, 4561, 746],
    },
  ],
};

const AREA_GREENHOUSE_CHARTS_DATA: Options = {
  chart: {
    type: "area",
  },
  title: {
    text: "Greenhouse gases from Norwegian economic activity",
    align: "left",
  },
  subtitle: {
    text:
      "Source: " +
      '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
      'target="_blank">SSB</a>',
    align: "left",
  },
  yAxis: {
    title: {
      useHTML: true,
      text: "Million tonnes CO<sub>2</sub>-equivalents",
    },
  },
  tooltip: {
    shared: true,
    headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>',
  },
  plotOptions: {
    series: {
      pointStart: 2012,
    },
    area: {
      stacking: "normal",
      lineColor: "#666666",
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: "#666666",
      },
    },
  },
  series: [
    {
      name: "Ocean transport",
      data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214],
    },
    {
      name: "Households",
      data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039],
    },
    {
      name: "Agriculture and hunting",
      data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913],
    },
    {
      name: "Air transport",
      data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550],
    },
    {
      name: "Construction",
      data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186],
    },
  ],
};

const THREE_D_CHARTS_DATA: Options = {
  chart: {
    type: "column",
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 15,
      viewDistance: 25,
      depth: 40,
    },
  },

  title: {
    text: " Electricity production in countries, grouped by continent",
    align: "left",
  },

  xAxis: {
    labels: {
      skew3d: true,
      style: {
        fontSize: "16px",
      },
    },
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "TWh",
      skew3d: true,
      style: {
        fontSize: "16px",
      },
    },
  },

  tooltip: {
    headerFormat: "<b>{point.key}</b><br>",
    pointFormat:
      '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}',
  },

  plotOptions: {
    series: {
      pointStart: 2016,
    },
    column: {
      stacking: "normal",
      depth: 40,
    },
  },

  series: [
    {
      name: "South Korea",
      data: [563, 567, 590, 582, 571],
      stack: "Asia",
    },
    {
      name: "Germany",
      data: [650, 654, 643, 612, 572],
      stack: "Europe",
    },
    {
      name: "Saudi Arabia",
      data: [368, 378, 378, 367, 363],
      stack: "Asia",
    },
    {
      name: "France",
      data: [564, 562, 582, 571, 533],
      stack: "Europe",
    },
  ],
};

const chartDataArray: ChartData[] = [
  { name: "CHART_ONE", data: LINE_CHART_DATA, show: true },
  { name: "CHART_TWO", data: AREA_CHART_DATA, show: true },
  { name: "CHART_THREE", data: BAR_CHART_DATA, show: true },
  { name: "CHART_FOUR", data: AREA_GREENHOUSE_CHARTS_DATA, show: true },
  { name: "CHART_FIVE", data: THREE_D_CHARTS_DATA, show: true },
];

export const storeAllChartsToLocalStorage = async () => {
  await Promise.all(
    chartDataArray.map(async (chartData) => {
      const { name, data, show } = chartData;
      const fetchedData = await getChartData(name);
      if (!fetchedData) {
        const chartDataWithShow = {
          ...data,
          show: fetchedData ? fetchedData.show : show,
        };
        localStorage.setItem(name, JSON.stringify(chartDataWithShow));
      }
    })
  );
};

export const updateChartToShow = async (chartName: string) => {
  const chartData = await getChartData(chartName);
  if (chartData) {
    chartData.show = !chartData.show;
    localStorage.setItem(chartName, JSON.stringify(chartData));
  }
};

export const getChartData = async (chartName: string) => {
  const chartData = localStorage.getItem(chartName);
  return chartData ? JSON.parse(chartData) : null;
};

export const getFilteredChartDataByVisibility = (show: boolean = true) => {
  const shownChartData = [];
  for (const chartData of chartDataArray) {
    const { name } = chartData;
    const storedChartData = localStorage.getItem(name);
    if (storedChartData) {
      const { show: chartShow } = JSON.parse(storedChartData);
      if (chartShow === show) {
        shownChartData.push({ key: name, data: JSON.parse(storedChartData) });
      }
    }
  }
  return shownChartData;
};

export const updateChartData = async (
  chartKey: string,
  chartType?: string,
  titleText?: string
) => {
  const chartData: Options = await getChartData(chartKey);

  if (chartType) {
    chartData.chart.type = chartType;
  }

  if (titleText) {
    chartData.title.text = titleText;
  }

  localStorage.setItem(chartKey, JSON.stringify(chartData));
};
