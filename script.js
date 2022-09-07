Highcharts.chart("container", {
  chart: {
    type: "spline",
  },
  title: {
    text: "Monthly Average Temperature",
  },

  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    accessibility: {
      description: "Months of the year",
    },
  },
  yAxis: {
    title: {
      text: "Temperature",
    },
    labels: {
      formatter: function () {
        return this.value + "°";
      },
    },
  },
  tooltip: {
    crosshairs: true,
    shared: true,
  },
  plotOptions: {
    series: {
      cursor: "pointer",
    },
    spline: {
      marker: {
        radius: 4,
        lineColor: "#666666",
        lineWidth: 1,
      },
    },
  },
  series: [
    {
      name: "Tokyo",
      marker: {
        symbol: "square",
      },
      data: [
        5.2,
        5.7,
        8.7,
        13.9,
        18.2,
        21.4,
        25.0,
        {
          y: 26.4,
          marker: {
            symbol: "url(https://www.highcharts.com/samples/graphics/sun.png)",
          },
          accessibility: {
            description:
              "Sunny symbol, this is the warmest point in the chart.",
          },
          credits: { style: { cursor: "pointer" } },
          events: {
            click: function ({ point }) {
              alert(
                "Mês: " +
                  point.category +
                  "\n" +
                  "Temperatura: " +
                  point.y +
                  "\n"
              );
            },
          },
        },
        22.8,
        17.5,
        12.1,
        7.6,
      ],
    },
  ],
});
