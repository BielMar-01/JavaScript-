/*  Aula 06 - Tipos de dados primitivos - Booleanos */

console.log("Tipos de comparações com os Booleanos:");

var teste1 = 65 < 60; // Teste para ver se 60 é maior que 65
console.log("Teste para ver se 65 < 60: " + teste1);

var teste2 = 65 <= 60; // Teste para ver se 60 é maior ou igual a 65
console.log("Teste para ver se 65 <= 60: " + teste2)

var teste3 = 65 >= 60; // Teste para ver se 60 é menor ou igual a 65
console.log("Teste para ver se 65 >= 60: " + teste3);

var teste4 = 65 > 60; // teste para ver se 60 é menor que 65
console.log("Teste para ver se 65 > 60: " + teste4);

var teste5 = 65 == 60; // Teste para ver se 60 é igual a 65
console.log("Teste para ver se 65 == 60: " + teste5);

var teste6 = 65 === 60; // Teste para ver se 60 é iugual no tipo e valor que 65
console.log("Teste para ver se 65 === 60: " + teste6);

var teste7 = 65 != 60; // Teste para ver se 60 não é igual a 65
console.log("Teste para ver se 65 != 60: " + teste7);

var teste8 = 65 !== 60; // Teste para ver se 60 não é igual no tipo o no valor que 65
console.log("Teste para ver se 65 !== 60: " + teste8);


console.log("Consultando os tipos das variaveis: ");

var vtype1 = true;
console.log("O tipo da variavel que é true é: " + typeof vtype1);

var vtype2 = 100;
console.log("O tipo da variavel que é true é: " + typeof vtype2);

var vtype3 = "Teste";
console.log("O tipo da variavel que é true é: " + typeof vtype3);


console.log("Comparando os tipos da variaveis: ");

var vtype2 = 100;
console.log("O tipo da variavel que é true é: " + typeof vtype2 == "number");