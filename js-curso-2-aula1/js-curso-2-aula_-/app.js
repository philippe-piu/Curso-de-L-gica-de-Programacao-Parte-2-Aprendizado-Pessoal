//Variáveis
// Criação de uma variável para armazenar a referência a um elemento HTML usando o método querySelectortg h1
let titulo = document.querySelector('h1');
//A propiedade innerHTML permite modificar o conteudo do html selecionado com document.querySelector('h1')
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

//Criando uma função com a ação do onclick="verificarChute()" definido no html
function verificarChute(){
  console.log("funcionou");
}

