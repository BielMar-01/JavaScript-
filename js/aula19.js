/*  Aula 19 - Loops for e for/in */
 

/* 01 - Loop for */ 
console.log("Funcionamento do loop for: ");

for (var a = 0; a < 5; a++) {
  console.log(a);
}


console.log("---------------------------------");


/* 02 - Usando o loop for para percorrer elementos de um array */ 
console.log("Funcionamento do loop for nos arrays: ");

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

for (var b = 0; b < alunos.length; b++) {
  console.log(alunos[b]);
}


console.log("---------------------------------");


/* 03 - Loop For/In */ 
console.log("Funcionamento do loop for/in: ");

var carro = {
  'Ano': 2018,
  'Modelo': 'Fox',
  'Cilindradas': '1.8',
  'Combustível': 'Gasolina'
}

for (var prop in carro) {
  console.log(prop + ': ' + carro[prop]);
}


console.log("---------------------------------");


/* 04 - Loops e os métodos getElementBy */ 
console.log("Funcionamento do loop nos getElement: ");

// var elementos = document.getElementsByClassName("exemplo");
var elementos = document.getElementsByTagName("p");

for (var c = 0; c < elementos.length; c++) {
  elementos[c].style.color = "orange";
  elementos[c].style['font-weight'] = "bold";
}

console.log(elementos);