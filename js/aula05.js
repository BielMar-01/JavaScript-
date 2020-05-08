/* // Aula 05 - Tipos de dados primitivos - Numbers */


/*---------- Operações basicas ----------*/

console.log("Operações matematicas basicas: ");

var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multipicacao = num1 * num2;

var media = (num1 + num2) / 2;

console.log("A média é: " + media);


/*---------- Metodos nativos de JS para operaçoes mais complexas ----------*/

console.log("Metodos nativos para operações matematicas de JS: ");

// Math é um objeto nativo de JS
var potencia = Math.pow(2, 4);
console.log("Metodo de potencia: " + potencia);

var arredonda = Math.round(2.7);
console.log("Metodo de arredondamento: " + arredonda);

var arredonda_cima = Math.ceil(4.3);
console.log("Metodo de arredondamento para cima: " + arredonda_cima);

var arredonda_baixo = Math.floor(4.6);
console.log("Metodo de arredondamento para baixo: " + arredonda_baixo);

var raiz = Math.sqrt(16);
console.log("Metodo de raiz: " + raiz);


/*---------- Metodos nativos de JS para operadores incrementais ----------*/

// Esta estrutura var = var + valor, pode ser simplificada com
// o operador incremental +=
console.log("Metodos nativos para operações incrementais de JS: ");

var increment = 20;
increment = increment + 5;// Isso redefine o valor de increment mais 5
console.log(increment);// Será mostrado 25

increment = 1;
increment += 5;
console.log(increment);// Isso mostrará 6

increment = 10;
increment++;// Mais facil ainda isso add semprer 1 unidade
console.log(increment);

// Podemos tb, usar *=, /= e -= para fazer outras operações


/*----------Metodos de conversão das variaveis ----------*/

console.log("Conversão do tipo de uma variavel: ");

var idade = '17';
var idade_num = parseInt(idade);
idade_num++;

console.log(idade_num);// O console mostrará 18

var ddd = 21;
var telefone = 987654321;

var ddd_string = ddd.toString();
var tel_string = telefone.toString();

console.log(ddd_string+tel_string);