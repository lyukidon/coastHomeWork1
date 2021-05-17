let graphObj = {
    xaxes2: [],
    arrL: [],
    arrC: [],
    shallowC: [],
    arrCg: [],
}

let click2 = 0;

function clearArr(){
    graphObj.xaxes2 = [];
    graphObj.arrL = [];
    graphObj.arrC = [];
    graphObj.shallowC = [];
    graphObj.arrCg = [];
}
function makeArr(){
    let period = +document.querySelector("input#period").value;
    if(graphObj.xaxes2.length != 0){
        clearArr();
    }
    for(let i=0; i <= 2000; i=i+50){
        graphObj.xaxes2.push(i);
        let L = 2*3.141592/(calculatekh(i,period)/i);
        let C = L/i;
        let shallowCelerity = Math.sqrt(i*9.8);
        let Cg = ((1+2*calculatekh(i,period)/Math.sinh(2*calculatekh(i,period)))/2)*C;
        graphObj.arrL.push(L);
        graphObj.arrC.push(C);
        graphObj.shallowC.push(shallowCelerity);
        graphObj.arrCg.push(Cg);
    }
    draw2();
    draw3();
    draw4();
    click2++;
}
//graph
let ctx2 = document.querySelector('canvas#graph2').getContext('2d');
let lineGraph2;
function draw2(){
    if(!click2){
        lineGraph2 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: graphObj.xaxes2,
                datasets: [{
                    label: '파장',
                    data: graphObj.arrL,
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
                            labelString: '파장 (m)'
                        }
                    }]
                }
            }
        });
    }else{
        lineGraph2.data.labels = graphObj.xaxes2;
        lineGraph2.data.datasets[0].data = graphObj.arrL;
        lineGraph2.update();
    }
}

document.querySelector('button#makeGraph2').addEventListener('click', makeArr);