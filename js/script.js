document.addEventListener('DOMContentLoaded', function () {
    // Charger Analytics Chart
    const chargerAnalyticsCtx = document.getElementById('chargerAnalyticsChart').getContext('2d');
    const chargerAnalyticsData = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
            { label: 'Charger Temp.', data: [20, 10, 40, 20, 60, 30, 80, 40, 100, 10, 50, 40, 30, 20, 10], borderColor: 'red', fill: false },
            { label: 'Charging Current', data: [10, 20, 30, 30, 50, 40, 70, 50, 90, 60, 40, 70, 60, 70, 80], borderColor: 'gray', fill: false },
            { label: 'Ambient Temp.', data: [5, 15, 25, 35, 45, 55, 65, 75, 85, 25, 35, 45, 55, 65, 75], borderColor: 'black', fill: false },
            { label: 'Charging Volt.', data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 55, 65, 75, 85, 95, 45], borderColor: 'pink', fill: false },
            { label: 'Ambient Humidity', data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 30, 40, 50, 60, 70, 80], borderColor: 'yellow', fill: false },
            { label: 'Charging Humidity', data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 25, 35, 45, 55, 65, 75], borderColor: 'brown', fill: false }
        ]
    };
    new Chart(chargerAnalyticsCtx, {
        type: 'line',
        data: chargerAnalyticsData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    },
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Current Charging Chart
    const currentChargingCtx = document.getElementById('currentChargingChart').getContext('2d');
    const currentChargingData = {
        labels: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        datasets: [{
            label: 'Series 1',
            data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
            borderColor: 'blue',
            fill: false,
            tension: 0.1
        }]
    };
    new Chart(currentChargingCtx, {
        type: 'line',
        data: currentChargingData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                },
                title: {
                    display: false,
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Charge (%)'
                    },
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});
