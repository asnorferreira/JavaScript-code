let paragrafo = document.querySelector('#para1'); 
paragrafo.addEventListener('mouseover',mudaVerde);
paragrafo.addEventListener('mouseover',mudaVermelho);

function mudaVerde(){
    paragrafo.style.background="green";
}
function mudaVermelho(){
    paragrafo.style.background="red";
}

/*let listadesejos = ['carro','apartamento','lancha'];
let pessoa = {nome: 'mario', idade: 30, lista: listadesejos};
pessoa.nome = 'Asnor';
console.log(listadesejos[2]);*/
/*console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa['nome']);
console.log(pessoa['idade']);*/
/*lista de objetos*/
/*let lista = ['carro','apartamento','lancha',pessoa,552]
lista
console.log(lista[0]) */
/*
let idade;
let idade_1;
let nome = "Asnor";

idade =10
idade = idade + 1
idade_1 = 18 - idade


console.log(`Olá  ${nome} sua idade é ${idade}`);

if(idade >= 18){
    console.log(`Seja bem-vindo ${nome}!`)
}
else{
    console.log(`Acesso negado, você não possui a idade necessária! Daqui a ${idade_1} anos retorne.`)
}

let str = 'Lucas'
let int = 55
let float = 25.5
let bool = true
console.log(typeof str);
console.log(typeof int);
console.log(typeof float);
console.log(typeof bool);

let idade = 17;
let maioridade = idade >=18;
let idade_1;
idade_1 = 18 - idade

if(maioridade){
    console.log(`Seja bem-vindo!`)
}
else{
    console.log(`Acesso negado, você não possui a idade necessária! Daqui a ${idade_1} anos retorne.`)
}
*/