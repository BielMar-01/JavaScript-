/*  Aula 20 - Loops while e do/while */
 

/* 01 - Loop while */ 
console.log("Funcionamento do loop while: ");

var count = 0;

while (count < 5) {
  console.log(count);
  count++;
}


// Mudando elementos
var elementos = document.getElementsByClassName("exemplo");

var c = 0;

while (c < elementos.length) {
  elementos[c].style.color = "orange";
  elementos[c].style['font-weight'] = "bold";
}


console.log("---------------------------------");


/* 02 - Loop do/while */ 
console.log("Funcionamento do loop do/while: ");

var count2 = 10;
    
do {
  console.log(count2);
  count2++;
} while (count2 < 5);




