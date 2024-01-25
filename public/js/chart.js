// Pegawai berdasarkan umum
const chart = Highcharts.chart("container", {
  chart: {
    type: "column",
  },

  title: {
    text: "Pegawai Berdasarkan Kelompok Umur",
  },

  subtitle: {
    text: "Resize the frame or click buttons to change appearance",
  },

  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
  },

  xAxis: {
    categories: ["<=25", "26-30", "31-35", "36-40", "41-45", "45-50"],
    labels: {
      x: -10,
    },
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: "Amount",
    },
  },

  series: [
    {
      name: "Kelompok Umur",
      data: [100, 500, 600, 350, 50, 100],
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
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5,
            },
            title: {
              text: null,
            },
          },
          subtitle: {
            text: null,
          },
          credits: {
            enabled: false,
          },
        },
      },
    ],
  },
});

//Berdasarkan jenis kelamin
Highcharts.chart("containerJk", {
  chart: {
    type: "pie",
  },
  title: {
    text: "Pegawai Berdasarkan Jenis kelamin",
  },
  tooltip: {
    valueSuffix: "Orang",
  },
  subtitle: {
    text: 'Source:<a href="https://bkpsdm.bandungkab.go.id/" target="_default">BKPSDM</a>',
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: [
        {
          enabled: true,
          distance: 20,
        },
        {
          enabled: true,
          distance: -40,
          format: "{point.percentage:.1f}%",
          style: {
            fontSize: "1.2em",
            textOutline: "none",
            opacity: 0.7,
          },
          filter: {
            operator: ">",
            property: "percentage",
            value: 10,
          },
        },
      ],
    },
  },
  series: [
    {
      name: "Percentage",
      colorByPoint: true,
      data: [
        {
          name: "Laki laki",
          y: 9000,
        },
        {
          name: "Perempuan",
          sliced: true,
          selected: true,
          y: 7000,
        },
      ],
    },
  ],
});
