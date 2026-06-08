// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Laptop", "PC build up", "Komponen"],
    datasets: [{
      data: [15, 8, 208],
      backgroundColor: ['#1a44b6', '#10d88f', '#b8168f'],
      hoverBackgroundColor: ['#1a44b6', '#10d88f', '#b8168f'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#0a0a0a",
      borderColor: 'rgb(230, 11, 11)',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
      position: 'bottom'
    },
    cutoutPercentage: 80,
  },
});
