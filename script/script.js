/*

1- ao clicar no botão com name = "número"
2- chama a função
    3- digita no resultado o innerHTML do número

1- ao clicar no botão igual name = "igual"
2- chama a função calcularResultado()
    3- calcula
    


*/
let saida = document.getElementById('resultado');
let numero;
let operador;

// Limpar resultado

function limparResultado(){
    saida.innerHTML = '';
}

// Digitar Operadores

function digitarDivisao(){
    operador = '/';

    saida.innerHTML += operador;
}

function digitarMultiplicacao(){
    operador = '*';

    saida.innerHTML += operador;
}

function digitarSubtracao(){
    operador = '-';

    saida.innerHTML += operador;
}

function digitarAdicao(){
    operador = '+';
    
    saida.innerHTML += operador;
}

// Resultado e ponto de milhar

function digitarPontoDeMilhar(){
    operador = '.'

    saida.innerHTML += operador
}

function digitarResultado(){

    saida.innerHTML = eval(saida.innerHTML)
    
}


// Digitar Números

function digitarNumero0(){
    numero = document.getElementById('numero-0').innerHTML;

    saida.innerHTML += numero;
}

function digitarNumero1(){
    numero = document.getElementById('numero-1').innerHTML;

    saida.innerHTML += numero;
}

function digitarNumero2(){
    numero = document.getElementById('numero-2').innerHTML;

    saida.innerHTML += numero;
}

function digitarNumero3(){
    numero = document.getElementById('numero-3').innerHTML;

    saida.innerHTML += numero;
}

function digitarNumero4(){
    numero = document.getElementById('numero-4').innerHTML;

    saida.innerHTML += numero;
}

function digitarNumero5(){
    numero = document.getElementById('numero-5').innerHTML;

    saida.innerHTML += numero;
}

function digitarNumero6(){
    numero = document.getElementById('numero-6').innerHTML;

    saida.innerHTML += numero;
}

function digitarNumero7() {
    numero = document.getElementById('numero-7').innerHTML;

    saida.innerHTML += numero;
}

function digitarNumero8(){
    numero = document.getElementById('numero-8').innerHTML;

    saida.innerHTML += numero;
}

function digitarNumero9(){
    numero = document.getElementById('numero-9').innerHTML;

    saida.innerHTML += numero;
}

