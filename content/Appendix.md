-------------------
Appendix
===================

HTML
-----------

        <html lang="en">

        <head>

        <meta charset="UTF-8">

        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="./style.css">

        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

        <script src="lib/showdown.min.js"></script>

        <title>Homework</title>

        </head>

        <body>

        <section>

        <section>

        <h3 class="quest">

        1. Dispersion relationship을 사용하여 주어진 수심(d)와 주기(T)에 대해 파장(L)을 계산하는 code를 작성하시오

        </h3>

        <article>

        <!-- 중간 수심파 σ^2*h/gkh = tanh*kh 를 이용해 kh를 구하기 (중력가속도:9.8m/s, 원주율:3.141592로 계산) -->

        </article>

        <article>

        수심(m)<input id='height' type="text" name="height" value="100" >

        주기(sec)<input id="period"type="text" name="period" value="100" >

        </article>

        <button id="calculate">파장 구하기</button>

        <article>

        <div>

        <span>kh =</span>

        <span id='answerkh'></span>

        </div>

        <div>

        <span>k =</span>

        <span id='answerk'></span>

        </div>

        <div>

        <span>L =</span>

        <span id="answerL"></span>

        </div>

        </article>

        <article id="waveLength"></article>

        </section>


        <h3>

        원하는 주기를 1번의 박스에 적은 후 버튼 눌러주세요.

        </h3>

        <button id='makeGraph2'>그래프 그리기</button>

        <div>

        <h3 class="quest">

        2. 일정한 주기에서 수심을 변화시켜 파장의 변화를 그래프로 표현하시오

        </h3>

        <div id="graphBox2" class="graphBox">

        <canvas id="graph2" width="20px" height="20px"></canvas>

        </div>

        </div>

        <div>

        <h3 class="quest">

        3. 일정한 주기와 dispersion relationship을 통해 계산된 파장을 사용하여 shallow water 부터 deep water 까지
        
        수심을 변화시켜 파랑의 속도(celerity=L/T)를 계산하고, shallow water celerity (=√gh)값과 비교하는 그래프를 그리시오

        </h3>

        <div id="graphBox3" class="graphBox">

        <canvas id="graph3" width="20px" height="20px"></canvas>

        </div>

        </div>

        <div>

        <h3 class="quest">

        4. 정해진 주기에서 수심의 변화에 따른 위상속도와 군속도를 계산하고 비교하는 그래프를 그리시오.

        </h3>

        <div id="graphBox4" class="graphBox">

        <canvas id="graph4" width="20px" height="20px"></canvas>

        </div>

        </div>

        <div>

        <div id="wrapper"></div>

        </div>

        </section>


        <script type="text/javascript" src="./question/quest1.js"></script>

        <script type="text/javascript" src="./question/quest2.js"></script>

        <script type="text/javascript" src="./question/quest3.js"></script>

        <script type="text/javascript" src="./question/quest4.js"></script>

        <script type="text/javascript" src="./contentJS/Appendix.js"></script>

        </body>

        </html>

----------
JavaScript
----------

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

-----------
CSS
------------

        canvas{

            width: 100px;

            height: 100px;

        }
        .block{

            display: block;

        }

        .inlineBlock{

            display: inline-block;

        }

        .quest{

            margin: 10px;
            
        }

-----------
JavaScript Library - Graph
-----------

- Chart.js

----------------
MarkDown Viewer
----------------

- jhleed, https://github.com/jhleed/markdown_viewer