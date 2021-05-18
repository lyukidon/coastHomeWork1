//그래프
let ctx4 = document.querySelector('canvas#graph4').getContext('2d');
let lineGraph4;
function draw4(){
    if(!click2){
        lineGraph4 = new Chart(ctx4, {
            type: 'line',
            data: {
                labels: graphObj.xaxes2,
                datasets: [{
                    label: '위상 속도',
                    data: graphObj.arrC,
                    borderColor: "blue",
                    fill:false,
                    borderWidth: 1
                },{
                    label: '군 속도',
                    data: graphObj.arrCg,
                    borderColor: "red",
                    fill:false,
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: '깊이 (m)'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '속도 (m/s)'
                        }
                    }]
                }
            }
        });
    }else{
        lineGraph4.data.datasets[0].data = graphObj.arrC;
        lineGraph4.data.datasets[1].data = graphObj.arrCg;
        lineGraph4.update();
    }
}