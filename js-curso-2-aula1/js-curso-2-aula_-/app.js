//Variáveis
let numeroScreto = gerarNumeroAleatorio();

 /*Criação de uma variável para armazenar a referência a um elemento HTML usando o método querySelectortg h1
 A propiedade innerHTML permite modificar o conteudo do html selecionado com document.querySelector('h1')
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';*/

/*Função de exibição de texto na tela essa é uma fução com parâmetros no exemplo acima eu teria que fazer um de cada vez mas no exemplo abaixo eu crio uma função 
onde eu passo os parâmetros e depois eu chamo ela mostrando o qual a tag e otexto que euquero por assim não repetindo muito o código*/
//Função de exibição de texto
function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

//Armazenando na função as suas tags com suas mensagens
exibirTextoNaTela('h1', 'Jogo do número secreto'
);
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

//Criando uma função com a ação do onclick="verificarChute()" definido no html
function verificarChute(){
  let chuteUsuario = document.querySelector('input').value;
  console.log(chuteUsuario == numeroScreto);
}

//Função de Geração de número Secreto
function gerarNumeroAleatorio(){
  /*Função com retorno sem parâmetro */
  return parseInt(Math.random() * 100 + 1);
}

