function showCode(button,codeBox){
    if(codeBox.style.display === 'none'){
        codeBox.style.display = 'block'
        button.innerHTML = '▼ 코드 지우기'
    }else if(codeBox.style.display === 'block'){
        codeBox.style.display = 'none'
        button.innerHTML = '▲ 코드 보이기'
    }else{
        codeBox.style.display = 'block'
        button.innerHTML = '▼ 코드 지우기'
    }
}

document.querySelector('button#quest1code').addEventListener('click', ()=>showCode(document.querySelector('button#quest1code'), document.querySelector('div#quest1sol')))

document.querySelector('button#quest234code').addEventListener('click', ()=>showCode(document.querySelector('button#quest234code'), document.querySelector('section#quest234sol')))