let xaxes2 = [];
let arrL = [];
let arrC = [];
let shallowC = [];
let click2 = 0;
function clearArr(){
    xaxes2 = [];
    arrL = [];
    arrC = [];
    shallowC = [];
}
function makeArr(){
    let period = +document.querySelector("input#period").value;
    if(xaxes2.length != 0){
        clearArr();
    }
    for(let i=0; i <= 5000; i=i+100){
        xaxes2.push(i);
        let L = 2*3.14/(calculatekh(i,period)/+document.querySelector("input#height").value);
        let C = L/+document.querySelector("input#height").value;
        let shallowCelerity = Math.sqrt(C*9.8);
        arrL.push(L);
        arrC.push(C);
        shallowC.push(shallowCelerity);
    }
    console.log(shallowC)
    draw2();
    draw3();
    click2++
}
//graph
let ctx2 = document.querySelector('canvas#graph2').getContext('2d');
let lineGraph2;
function draw2(){
    if(!click2){
        lineGraph2 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: xaxes2,
                datasets: [{
                    label: '파장',
                    data: arrL,
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
        lineGraph2.data.labels = xaxes2;
        lineGraph2.data.datasets[0].data = arrL;
        lineGraph2.update();
    }
}

document.querySelector('button#makeGraph2').addEventListener('click', makeArr);