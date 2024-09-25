document.addEventListener('DOMContentLoaded', function () {
    // Battery Charging Chart
    const batteryChargingCtx = document.getElementById('batteryChargingChart').getContext('2d');
    const batteryChargingData = {
        labels: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        datasets: [{
            label: 'Series 1',
            data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
            borderColor: '#0dcaf0',
            fill: false,
            tension: 0.1
        }]
    };
    new Chart(batteryChargingCtx, {
        type: 'line',
        data: batteryChargingData,
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
    const batteryChargingCtx2 = document.getElementById('batteryChargingChart2').getContext('2d');
    const batteryChargingData2= {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
            { label: 'Charger Temp.', data: [20, 10, 40, 20, 60, 30, 80, 40, 100, 10, 50, 40, 30, 20, 10], borderColor: 'skyblue', fill: false },
            { label: 'Charging Current', data: [10, 20, 30, 30, 50, 40, 70, 50, 90, 60, 40, 70, 60, 70, 80], borderColor: 'gray', fill: false },
            { label: 'Ambient Temp.', data: [5, 15, 25, 35, 45, 55, 65, 75, 85, 25, 35, 45, 55, 65, 75], borderColor: 'black', fill: false },
            { label: 'Charging Volt.', data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 55, 65, 75, 85, 95, 45], borderColor: 'pink', fill: false },
            { label: 'Ambient Humidity', data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 30, 40, 50, 60, 70, 80], borderColor: 'yellow', fill: false },
            { label: 'Charging Humidity', data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 25, 35, 45, 55, 65, 75], borderColor: 'brown', fill: false }
        ]
    };
    new Chart(batteryChargingCtx2, {
        type: 'line',
        data: batteryChargingData2,
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
    const batteryChargingCtx3 = document.getElementById('batteryChargingChart3').getContext('2d');
    const batteryChargingData3 = {
        labels: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        datasets: [{
            label: 'Series 1',
            data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
            borderColor: '#0dcaf0',
            fill: false,
            tension: 0.1
        }]
    };
    new Chart(batteryChargingCtx3, {
        type: 'line',
        data: batteryChargingData3  ,
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

    const batteryChargingCtx4 = document.getElementById('batteryChargingChart4').getContext('2d');
    const batteryChargingData4= {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
            { label: 'Charger Temp.', data: [20, 10, 40, 20, 60, 30, 80, 40, 100, 10, 50, 40, 30, 20, 10], borderColor: '#0dcaf0', fill: false },
            { label: 'Charging Current', data: [10, 20, 30, 30, 50, 40, 70, 50, 90, 60, 40, 70, 60, 70, 80], borderColor: 'gray', fill: false }  
        ]
    };
    new Chart(batteryChargingCtx4, {
        type: 'line',
        data: batteryChargingData4,
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
    });
    
    
    