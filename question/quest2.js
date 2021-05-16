let xaxes = [];
let yaxes = [];
function makeArr(){
    let period = +document.querySelector("input#period").value;
    if(xaxes.length != 0){
        xaxes = [];
        yaxes = [];
    }
    for(let i=0; i <= 1000; i=i+100){
        xaxes.push(i);
        yaxes.push(calculate(i,period));
    }
    draw1();
}
//graph
function draw1(){
    var ctx = document.querySelector('canvas#graph1').getContext('2d');
    var graph1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xaxes,
            datasets: [{
                label: '파장',
                data: yaxes,
                borderColor: "blue",
                fill:false,
                borderWidth: 1
            }]
        },
        options: {
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
                        labelString: '파장 L'
                    }
                }]
            }
        }
    });
}
document.querySelector('button#makeGraph').addEventListener('click', makeArr);