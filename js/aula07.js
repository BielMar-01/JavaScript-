/*  Aula 07 - Tipos de dados primitivos - Null e Undefined */


/*---------- Valores Undefined ----------*/
console.log("Valores Undefined: ");

var undf;
console.log("O valor " + undf + " é um tipo de dado que não foi atribuido a um valor");

var nome = "Pedro";
console.log("Valor da letra " + nome[0] + " do nome Pedro");
console.log("Valor da letra " + nome[1] + " do nome Pedro");
console.log("Valor da letra " + nome[6] + " do nome Pedro");


/*---------- Valores Null ----------*/
console.log("Valores Null: ");

var temperatura = 35;
console.log("O valor da temperatura é: " + temperatura);

temperatura = null;
console.log("O valor da temperatura é: " + temperatura);
