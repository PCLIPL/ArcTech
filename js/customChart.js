$(function() {
//BatteryVoltageOverCycles;  // 
var ctx = document.getElementById("BatteryVoltageOverCycles").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        label: "Series 1", 
        data: [100, 80, 70, 50, 40, 30, 20, 10, 0], 
        fill: false,
        borderColor: "#2196f3", 
        backgroundColor: "#2196f3", 
        borderWidth: 1, 
      },
    ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
  },
});

});
$(function() {
//CellVoltageOverCycles;  // 
var ctx = document.getElementById("CellVoltageOverCycles").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        label: "Cell 1", 
        data: [100, 80, 70, 50, 40, 30, 20, 10, 0], 
        fill: false,
        borderColor: "#2196f3", 
        backgroundColor: "#2196f3", 
        borderWidth: 1, 
      },
      {
        label: "Cell 2", 
        data: [32, 23, 23, 11, 60, 41, 1, 45, 6], 
        fill: false,
        borderColor: "#4CAF50", 
        backgroundColor: "#4CAF50", 
        borderWidth: 1, 
      },
      {
        label: "Cell 3", 
        data: [65, 7, 47, 15, 41, 47, 10, 0, 80], 
        fill: false,
        borderColor: "red", 
        backgroundColor: "red", 
        borderWidth: 1, 
      },
      {
        label: "Cell 4", 
        data: [25, 13, 63, 13, 20, 11, 41, 23, 31], 
        fill: false,
        borderColor: "gray", 
        backgroundColor: "gray", 
        borderWidth: 1, 
      },
      {
        label: "Cell 5", 
        data: [03,25,29,39,21,54,25,29,39], 
        fill: false,
        borderColor: "black", 
        backgroundColor: "black", 
        borderWidth: 1, 
      },
      {
        label: "Cell 6", 
        data: [84,41,99,55,98,44,19,95,59], 
        fill: false,
        borderColor: "pink", 
        backgroundColor: "pink", 
        borderWidth: 1, 
      },
      {
        label: "Cell 7", 
        data: [71,64,95,89,27,16,49,58,92], 
        fill: false,
        borderColor: "yellow", 
        backgroundColor: "yellow", 
        borderWidth: 1, 
      },
      {
        label: "Cell 8", 
        data: [91,54,60,22,89,15,46,82,28], 
        fill: false,
        borderColor: "brown", 
        backgroundColor: "brown", 
        borderWidth: 1, 
      },
    ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
  },
});


});
$(function() {
//ChargeOverCycles;  // 
var ctx = document.getElementById("ChargeOverCycles").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        label: "Series 1", 
        data: [100, 80, 70, 50, 40, 30, 20, 10, 0], 
        fill: false,
        borderColor: "#2196f3", 
        backgroundColor: "#2196f3", 
        borderWidth: 1, 
      },
    ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
  },
});


});
$(function() {
//LastChargeData;  // 
var ctx = document.getElementById("LastChargeData").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        label: "Last Charge Data", 
        data: [100, 80, 70, 50, 40, 30, 20, 10, 0], 
        fill: false,
        borderColor: "#2196f3", 
        backgroundColor: "#2196f3", 
        borderWidth: 1, 
      },
      {
        label: "Last Discharge Data", 
        data: [32, 23, 23, 11, 60, 41, 1, 45, 6], 
        fill: false,
        borderColor: "#4CAF50", 
        backgroundColor: "#4CAF50", 
        borderWidth: 1, 
      },
    ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
  },
});


});
$(function() {
//LastDischargeData;  // 
var ctx = document.getElementById("LastDischargeData").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        label: "Series 1", 
        data: [100, 80, 70, 50, 40, 30, 20, 10, 0], 
        fill: false,
        borderColor: "#2196f3", 
        backgroundColor: "#2196f3", 
        borderWidth: 1, 
      },
    ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
  },
});


});
$(function() {
// CurrentCharging //
var ctx = document.getElementById("CurrentCharging").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        label: "Series 1", 
        data: [100, 80, 70, 50, 40, 30, 20, 10, 0], 
        fill: false,
        borderColor: "#2196f3", 
        backgroundColor: "#2196f3", 
        borderWidth: 1, 
      },
    ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
  },
});


});
$(function() {
// ChargerAnalytics //
var ctx = document.getElementById("ChargerAnalytics").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        label: "Charger Temp.", 
        data: [65, 7, 47, 15, 41, 47, 10, 0, 80], 
        fill: false,
        borderColor: "red", 
        backgroundColor: "red", 
        borderWidth: 1, 
      },
      {
        label: "Charging Current", 
        data: [25, 13, 63, 13, 20, 11, 41, 23, 31], 
        fill: false,
        borderColor: "gray", 
        backgroundColor: "gray", 
        borderWidth: 1, 
      },
      {
        label: "Ambient Temp.", 
        data: [03,25,29,39,21,54,25,29,39], 
        fill: false,
        borderColor: "black", 
        backgroundColor: "black", 
        borderWidth: 1, 
      },
      {
        label: "Charging Volt.", 
        data: [84,41,99,55,98,44,19,95,59], 
        fill: false,
        borderColor: "pink", 
        backgroundColor: "pink", 
        borderWidth: 1, 
      },
      {
        label: "Ambient Humidity ", 
        data: [71,64,95,89,27,16,49,58,92], 
        fill: false,
        borderColor: "yellow", 
        backgroundColor: "yellow", 
        borderWidth: 1, 
      },
      {
        label: "Charging Humidity", 
        data: [91,54,60,22,89,15,46,82,28], 
        fill: false,
        borderColor: "brown", 
        backgroundColor: "brown", 
        borderWidth: 1, 
      },
    ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
  },
});


});
$(function() {
// <block:setup:1>
var ctx = document.getElementById("CurrentCharging").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
      {
        label: "Series 1", 
        data: [100, 80, 70, 50, 40, 30, 20, 10, 0], 
        fill: false,
        borderColor: "#2196f3", 
        backgroundColor: "#2196f3", 
        borderWidth: 1, 
      },
    ],
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
  },
});


});
$(function() {
// Fleet Metrics //
const Paictx = document.getElementById('FleetMetrics');
new Chart(Paictx, {
  type: 'doughnut',
  data: {
    labels: ['Red'],
    datasets: [{
      label: '# of Votes',
      data: [100],
      borderWidth: 1
    }]
  },
});


});