/*  Aula 26 - Data e Hora */
 

/* 01 - Data e Hora */
console.log("Funcionamento da Data e Hora: ");

// Date é uma classe de js,os argumentos vao dentro dos ()

// var data = new Date(); // Modelo sem passar nenhum argumento
// var data = new Date(2020, 6, 21); // Modelo numerico
// var data = new Date("2020-7-21");  // Passado como string o ISO date: "2020-03-18" (ano-mês-dia)
// var data = new Date("07/21/2020"); // Passados como string o Short Date: "03/18/2020" (mês/dia/ano)
var data = new Date("21 Jul 2020");  // Long Date: "Mar 18 2020" ou "18 Mar 2020"

console.log(data);


console.log("---------------------------------");


/* 02 - Métodos do objeto date */
console.log("Métodos do objeto date: ");

/* var data_hoje = new Date();

console.log(data_hoje.getDate() );
*/



// Como calcular a idade de forma simples
var data_nascimento = "2001-06-27";

var ano_nascimento = new Date("2001-06-27").getFullYear();
var ano_atual = new Date().getFullYear();
var idade = ano_atual - ano_nascimento;
console.log(idade);



console.log("---------------------------------");



/* 03 - Unix Epoch */
console.log("Unix Epoch: ");

// var data_epoch = new Date();

// console.log(data_epoch.getTime());


var data_epoch = new Date();

data_epoch = data_epoch.getTime();

var anos = data_epoch / 31536000000;

console.log(Math.floor(anos));


console.log("---------------------------------");


/* 04 -  Cálculo de intervalo de datas */
console.log("Desafio: ");

var envio = new Date("2020-03-20");
envio = envio.getTime();

var entrega = new Date("2020-04-06");
entrega = entrega.getTime();

var dias = (entrega - envio) / 86400000;

document.getElementById("dias_entrega").innerHTML = dias;

console.log("---------------------------------");


