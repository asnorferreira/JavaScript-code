let botao = document.querySelector('#botao');
botao.style.background = 'blue';
let itbroke = false;
let count = 0;
botao.addEventListener('mouseover',e =>{
    if(!itbroke){
    botao.style.background = 'green';
    botao.style.color = 'white';
    }
});
botao.addEventListener('mouseout',e =>{
    if(!itbroke){
    botao.style.background = 'blue';
    botao.style.color = 'black';
    }
});
botao.addEventListener('click',e =>{
    count++;//count = count + 1
    if(count >= 10){
        botao.style.background = 'red';
        botao.innerHTML = 'Broked'
        itbroke = true;
    }
});

