// TODO : cdn 파일에서 불러올 방법
// 현재 index.html 에서 불러오고있음
// require("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.3/Chart.js");
export function renderChart($el, labels, starts, lengths) {
    var barOptions_stacked = {
        hover: {
            animationDuration: 10,
        },
        scales: {
            xAxes: [
                {
                    label: "Duration",
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "'Open Sans Bold', sans-serif",
                        fontSize: 11,
                    },
                    scaleLabel: {
                        display: false,
                    },
                    gridLines: {},
                    stacked: true,
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                        color: "#fff",
                        zeroLineColor: "#fff",
                        zeroLineWidth: 0,
                    },
                    ticks: {
                        fontFamily: "'Open Sans Bold', sans-serif",
                        fontSize: 11,
                    },
                    stacked: true,
                },
            ],
        },
        legend: {
            display: false,
        },
    };

    // var ctx = document.getElementById("myChart");
    var myChart = new Chart($el, {
        type: "horizontalBar",
        data: {
            // labels: ["1", "2", "3", "4"],
            labels,

            datasets: [
                {
                    // data: [50, 150, 300, 400, 500],
                    data: starts,
                    backgroundColor: "rgba(63,103,126,0)",
                    hoverBackgroundColor: "rgba(50,90,100,0)",
                },
                {
                    // data: [100, 100, 200, 200, 100],
                    data: lengths,
                    backgroundColor: [
                        "#00bfb3",
                        "#00488f",
                        "#f4ee7e",
                        "#b592aa",
                    ],
                },
            ],
        },
        options: barOptions_stacked,
    });

    // this part to make the tooltip only active on your real dataset
    var originalGetElementAtEvent = myChart.getElementAtEvent;
    myChart.getElementAtEvent = function(e) {
        return originalGetElementAtEvent
            .apply(this, arguments)
            .filter(function(e) {
                return e._datasetIndex === 1;
            });
    };
}
