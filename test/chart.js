const NUMBEROFAXIS = 7;
var colorToUse;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    colorToUse = '#FFF';
} else {
    colorToUse = '#222';
}
const ctx = document.getElementById('resultsChart');
const myChart = new Chart(ctx,{
    type: 'radar',
    data: {
        labels: ['Physical', 'Mental', 'Social', 'Lifestyle', 'Maturity', 'Moral', 'Luck'],
        datasets: [{
            label: 'Results',
            data: [2, 2, 2, 2, 2, 2, 2],
            backgroundColor: 'rgba(214, 48, 49,0.5)',
            borderColor: 'rgba(214, 48, 49,0.7)',
            pointBackgroundColor: 'rgba(214, 48, 49,1.0)',
            pointBorderColor: 'rgba(214, 48, 49,1.0)',
        }]
    },
    options: {
        scales: {
            r: {
                min: 0,
                max: 15,
                grid: {
                    color: colorToUse,
                },
                angleLines: {
                    color: colorToUse,
                },
                pointLabels: {
                    color: colorToUse,
                    font: {
                        size: 20,
                        weight: 700
                    }
                },
                ticks: {
                    display: false,
                    color: colorToUse,
                    lineHeight: 2,
                    font: {
                        size: 16
                    },
                    stepSize: 5,
                    showLabelBackdrop: false
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: false
            },
            legend: {
                display: false
            }
        }
    }
});
function createResults() {
    var physical_value = Number(document.getElementById('your-total-physical').innerHTML);
    var mental_value = Number(document.getElementById('your-total-mental').innerHTML);
    var social_value = Number(document.getElementById('your-total-social').innerHTML);
    var lifestyle_value = Number(document.getElementById('your-total-lifestyle').innerHTML);
    var maturity_value = Number(document.getElementById('your-total-maturity').innerHTML);
    var moral_value = Number(document.getElementById('your-total-moral').innerHTML);
    var luck_value = Number(document.getElementById('your-total-luck').innerHTML);
    removeData(myChart);
    addData(myChart, [physical_value, mental_value, social_value, lifestyle_value, maturity_value, moral_value, luck_value]);
}
function removeData(chart) {
    for (var i = 0; i < NUMBEROFAXIS; i++) {
        chart.data.datasets[0].data.pop();
    }
}
function addData(chart, data) {
    for (var i = 0; i < NUMBEROFAXIS; i++) {
        chart.data.datasets[0].data.push(data[i]);
        console.log(i);
        console.log(data[i]);
    }
    chart.update();
}
