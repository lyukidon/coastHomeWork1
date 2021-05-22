//ㅠ는 3.14로 계산, g는 9.8로 계산

let pi = Math.PI
function calculatekh(height, period){
    let kh = 0;
    while ( ( ( (2*pi/period)**2) *height) /(9.8*kh) >= Math.tanh(kh) ){
        kh=kh+0.01;
    }
    kh=Math.round(kh*100)/100;
    return kh
}
function pushHT(){
    let height = +document.querySelector("input#height").value;
    let period = +document.querySelector("input#period").value;
    return calculatekh(height, period);
}
document.querySelector('button#calculate').addEventListener('click',function(){
    let answerkh = pushHT();
    let answerk = +answerkh/+document.querySelector("input#height").value;
    let answerL = 2*pi/answerk;
    document.querySelector('span#answerkh').innerHTML = answerkh;
    document.querySelector('span#answerk').innerHTML = answerk;
    document.querySelector('span#answerL').innerHTML = answerL + " (m)";
});