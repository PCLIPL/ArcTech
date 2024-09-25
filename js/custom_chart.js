const ctx = document.getElementById('CellVoltageOverCycles').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Label1', 'Label2', 'Label3'], // Add your labels
        datasets: [{
            label: 'Cell Voltage',
            data: [12, 19, 3], // Add your data points
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});