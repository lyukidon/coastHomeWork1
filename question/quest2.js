let xaxes2 = [];
let yaxes2 = [];
let click2 = 0;
function makeArr(){
    let period = +document.querySelector("input#period").value;
    if(xaxes2.length != 0){
        xaxes2 = [];
        yaxes2 = [];
    }
    for(let i=0; i <= 5000; i=i+100){
        xaxes2.push(i);
        let L = 2*3.14/(calculatekh(i,period)/+document.querySelector("input#height").value)
        yaxes2.push(L);
    }
    draw2();
    click2++
}
//graph
var ctx2 = document.querySelector('canvas#graph2').getContext('2d');
var lineGraph2;
function draw2(){
    if(!click2){
        lineGraph2 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: xaxes2,
                datasets: [{
                    label: '파장',
                    data: yaxes2,
                    borderColor: "blue",
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
                            labelString: '파장 L'
                        }
                    }]
                }
            }
        });
    }else{
        console.log(lineGraph2)
        lineGraph2.data.labels = xaxes2;
        lineGraph2.data.datasets[0].data = yaxes2;
        lineGraph2.update();
    }
}

document.querySelector('button#makeGraph').addEventListener('click', makeArr);