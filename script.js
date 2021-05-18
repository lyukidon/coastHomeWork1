let quest1codeClick = 0
document.querySelector('button#quest1code').addEventListener('click', function(){
    let q1sol = document.querySelector('div#quest1sol');
    if(quest1codeClick%2 === 0){
        q1sol.style.display = 'block'
        document.querySelector('button#quest1code').innerHTML = '▼ 코드 지우기'
    }else{
        q1sol.style.display = 'none'
        document.querySelector('button#quest1code').innerHTML = '▲ 코드 보이기'
    }
    quest1codeClick++;
})