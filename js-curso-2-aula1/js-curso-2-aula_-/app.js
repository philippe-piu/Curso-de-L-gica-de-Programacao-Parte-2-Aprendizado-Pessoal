//Variáveis
let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroScreto = gerarNumeroAleatorio();
let tentativas = 1;

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
  //Aproveitando o importe do responsiveVoice para falar o que está escrito na tela 
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//Função de exibição da mensagem inicial do jogo
function exibirMensagemInicial(){
  //Armazenando na função as suas tags com suas mensagens
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//Chamada da função para exibir mensagem inial
exibirMensagemInicial();


//Criando uma função com a ação do onclick="verificarChute()" definido no html
function verificarChute(){
  //capturo o número informado pelo o usuario na tag input pegando seu valor ex: let chuteUsuario = document.querySelector('input').value;
  let chuteUsuario = document.querySelector('input').value;
  if(chuteUsuario == numeroScreto){
    exibirTextoNaTela('h1', 'Acertou!!!!!!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas =`Você descobriu o número secreto em ${tentativas} ${palavraTentativas}!`;
    exibirTextoNaTela('p', mensagemTentativas);

    //Abilitar botão de reinicio do jogo 
    /*Quando o usuario acerta o número secreto ele abilita  o botão de novo jogo
    para isso eu pego o document como eu quero que seja algo expecifico do botão pego o id  então coloco getElementByID passo o nome nessa identificação e coloco para remover o atributo que que está dentro do botão no html removeAttribute('disabled') ex:document.getElementById('reiniciar').removeAttribute('disabled');
    */
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if(chuteUsuario > numeroScreto){
      exibirTextoNaTela('p', 'O número secreto é menor');
    }else{
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    liparCampo();
  }
  
}

//Função de reinicar o jogo com o botão novo jogo
function reinicarJogo(){
  numeroScreto = gerarNumeroAleatorio();
  liparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  // Desabilita o botão de novo jogo quando começa um novo jogo na página, atribuindo o atributo 'disabled' com o valor 'true'.
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

//Limpar a tela
function liparCampo(){
  chuteUsuario = document.querySelector('input');
  chuteUsuario.value = '';
}

// Função para gerar um número aleatório e garantir que não seja repetido
function gerarNumeroAleatorio(){
  
  // Gera um número aleatório entre 1 e numeroLimite (incluindo 1 e excluindo numeroLimite)
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

  // Obtém a quantidade atual de elementos na lista de números sorteados
  let quantidadeDeElementosDeUmaLista = listaDeNumeroSorteados.length;

  // Se a lista estiver cheia, esvazia a lista para começar de novo
  if(quantidadeDeElementosDeUmaLista == numeroLimite){
    listaDeNumeroSorteados = [];
  }

  // Se o número gerado já estiver na lista, chama a função recursivamente para gerar outro número
  if(listaDeNumeroSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    // Se o número não estiver na lista, adiciona à lista, exibe a lista no console e retorna o número
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
  }
}
