//그래프
let ctx3 = document.querySelector('canvas#graph3').getContext('2d');
let lineGraph3;
function draw3(){
    if(!click2){
        lineGraph3 = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: xaxes2,
                datasets: [{
                    label: '속도 C',
                    data: arrC,
                    borderColor: "blue",
                    fill:false,
                    borderWidth: 1
                },{
                    label: 'Shallow Water Celerity',
                    data: shallowC,
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
                            labelString: '깊이'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '속도 C'
                        }
                    }]
                }
            }
        });
    }else{
        console.log(lineGraph3)
        lineGraph3.data.datasets[0].data = arrC;
        lineGraph3.update();
    }
}
