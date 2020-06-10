/*  Aula 11 - Funções */


/* 01 - Exercicio de soma com função */ 
console.log("Função basicas: ");

function soma_numeros() {
  var x = 5;
  var y = 2;
  var soma = x + y;
  console.log(soma);
}
soma_numeros();


console.log("---------------------------------");


/* 02 - Exercicio de soma com argumentos nas função */ 
console.log("Argumento na função: ");

function soma_args(num1, num2) {
  var soma = num1 + num2;
  // console.log(soma);
  return soma;
}
console.log("Resultado da soma: " + soma_args(5, 5));

var soma_f = soma_args(10,10);
console.log("Resultado soma_f: " + soma_f);


console.log("---------------------------------");


/* 03 - Exercicio de imc  */ 
console.log("IMC: ");

function valor_imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

var meu_imc = valor_imc(meu_peso, minha_altura);

document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

console.log(meu_imc);

