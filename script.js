//1번 답
//ㅠ는 3.14로 계산, g는 9.8로 계산
function calculate(){
    let height = +document.querySelector("input#height").value;
    let period = +document.querySelector("input#period").value;
    let kh = 0.1;
    while (((2*3.14/period)**2*height)/(9.8*kh) >= Math.tanh(kh)){
        kh=kh+0.000001;
    }
    return kh;
}
document.querySelector('button#calculate').addEventListener('click',function(){
    let answerkh = calculate();
    let answerk = answerkh/+document.querySelector("input#height").value;
    let answerL = 2*3.14/answerk
    document.querySelector('span#answerkh').innerHTML = answerkh;
    document.querySelector('span#answerk').innerHTML = answerk;
    document.querySelector('span#answerL').innerHTML = answerL;
})

//그래프
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, -5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});