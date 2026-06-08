// Area Chart Hardware House

var ctx = document.getElementById("myAreaChart");

var myLineChart = new Chart(ctx, {
  type: 'line',

  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],

    datasets: [{
      label: "Penjualan Produk",

      lineTension: 0.3,

      backgroundColor: "rgba(0, 191, 255, 0.08)",

      borderColor: "#00bfff",

      pointRadius: 4,

      pointBackgroundColor: "#00bfff",

      pointBorderColor: "#00bfff",

      pointHoverRadius: 5,

      pointHoverBackgroundColor: "#ffffff",

      pointHoverBorderColor: "#00bfff",

      pointHitRadius: 10,

      pointBorderWidth: 2,

      data: [5, 8, 12, 10, 15, 16, 15, 37, 25, 28, 35, 15],
    }],
  },

  options: {
    maintainAspectRatio: false,

    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },

    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },

        ticks: {
          maxTicksLimit: 12
        }
      }],

      yAxes: [{
        ticks: {
          maxTicksLimit: 5,

          padding: 10,

          callback: function(value) {
            return value + ' Produk';
          }
        },

        gridLines: {
          color: "rgb(234, 236, 244)",

          zeroLineColor: "rgb(234, 236, 244)",

          drawBorder: false,

          borderDash: [2],

          zeroLineBorderDash: [2]
        }
      }],
    },

    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: "#ffffff",

      bodyFontColor: "#858796",

      titleMarginBottom: 10,

      titleFontColor: '#6e707e',

      titleFontSize: 14,

      borderColor: '#dddfeb',

      borderWidth: 1,

      xPadding: 15,

      yPadding: 15,

      displayColors: false,

      intersect: false,

      mode: 'index',

      caretPadding: 10,

      callbacks: {
        label: function(tooltipItem, chart) {

          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';

          return datasetLabel + ': ' + tooltipItem.yLabel + ' Produk';
        }
      }
    }
  }
});