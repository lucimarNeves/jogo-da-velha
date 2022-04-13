var jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');


var msg = document.getElementById('msg')


//mapear todos os quadrados
var quadrados = document.getElementsByClassName('.quadrado')


mudarJogador('X'); //inicia c/ X

function escolherQuadrado(id){

   
    //validação se tiver novo vencedor para não executar
    if(vencedor !== null){
         return;
    }

    //console.log(id)
    //não deixa repetir x ou quadrado caso seja clicado
     var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== ' - '){

        return;
    }
    

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){

        jogador = 'O';
     

    }else{

        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
   
    

    console.log(jogador)

   
}

function mudarJogador(valor){

    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
  
}

function checaVencedor(id){



    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1); //sempre o primeiro da fila é setado
        return;

    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);//sempre o primeiro da fila é setado
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7); //sempre o primeiro da fila é setado
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);  //coluna 1 4 7
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
    
}

function mudarVencedor(quadrado){

    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;

    if(vencedor === null){
        vencedor = msg.innerText = '';
    }else{
        vencedor = msg.innerText = "Parabéns!!! 😃 "
    }
}



function mudaCorQuadrado(quadrado1, quadrado2,quadrado3){

    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';

    quadrado1.style.color = '#fff';
    quadrado2.style.color = '#fff';
    quadrado3.style.color = '#fff';

}

function checaSequencia(quadrado1, quadrado2, quadrado3) {

    var eigual = false;

    if (quadrado1.innerHTML !== ' - ' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar(){
    
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    //percorrendo todos os quadrados
    for(var i= 1; i <= 9; i++ ){

        var quadrado = document.getElementById(i) //todos os id's
        quadrado.style.background = '#eee';
        quadrado.style.color = "#eee"
        quadrado.innerHTML = ' - '
        msg.innerText = ''
     
        console.log(i)

        
    }

    //volta para o jogador X
    mudarJogador('X');

}

