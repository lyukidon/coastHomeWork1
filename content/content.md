Appendix
===================

Code

function calculatekh(height, period){


    let kh = 0;


    while ( ( ( (2*3.141592/period)**2) *height) /(9.8*kh) >= Math.tanh(kh) ){
        kh=kh+0.001;
    }


    return kh;


}


function pushHT(){


    let height = +document.querySelector("input#height").value;


    let period = +document.querySelector("input#period").value;


    return calculatekh(height, period);


}


document.querySelector('button#calculate').addEventListener('click',function(){


    let answerkh = pushHT();


    let answerk = +answerkh/+document.querySelector("input#height").value;


    let answerL = 2*3.14/answerk;


    document.querySelector('span#answerkh').innerHTML = answerkh;


    document.querySelector('span#answerk').innerHTML = answerk;


    document.querySelector('span#answerL').innerHTML = answerL + " (m)";


});


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



let ctx3 = document.querySelector('canvas#graph3').getContext('2d');


let lineGraph3;


function draw3(){


    if(!click2){


        lineGraph3 = new Chart(ctx3, {


            type: 'line',


            data: {


                labels: graphObj.xaxes2,


                datasets: [{


                    label: '속도',


                    data: graphObj.arrC,


                    borderColor: "blue",


                    fill:false,


                    borderWidth: 1


                },{


                    label: 'Shallow Water Celerity',
                    
                    data: graphObj.shallowC,
                    
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
        
        console.log(lineGraph3)
        
        lineGraph3.data.datasets[0].data = graphObj.arrC;
        
        lineGraph3.update();
        
    }
    
}


let ctx4 = document.querySelector('canvas#graph4').getContext('2d');

let lineGraph4;

function draw4(){
    
    if(!click2){
        
        lineGraph3 = new Chart(ctx4, {
            
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
