###이에 관한 코드는 다음과 같다.


function calculatekh(height, period){

    let kh = 0;

    while ( ( ( (2*3.141592/period)**2) *height) /(9.8*kh) >= Math.tanh(kh) ){

        kh=kh+0.001;

    }

    return kh;

}

function pushHT(){

    let height = +document.querySelector("input#height").value; << 수심 박스에서 가져온 값

    let period = +document.querySelector("input#period").value; << 주기 박스에서 가져온 값

    return calculatekh(height, period);

}

document.querySelector('button#calculate').addEventListener('click',function(){

    let answerkh = pushHT();

    let answerk = +answerkh/+document.querySelector("input#height").value;

    let answerL = 2*3.14/answerk;

});