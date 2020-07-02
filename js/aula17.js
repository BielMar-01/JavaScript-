/*  Aula 17 - Manipulando o CSS */
 

/* 01 - Manipulação do CSS basica */ 
console.log("Funcionamento da Manipulção do CSS: ");

// Usando o document varias vezes
document.getElementById("botao_cor01").onclick = function() {
  document.getElementById("botao_cor01").style['background-color'] = "red";
  document.getElementById("botao_cor01").style.transform = "translateX(100px)";
} 


// Usando o this no document
document.getElementById("botao_cor02").onclick = function() {
  this.style['background-color'] = "purple";
  this.style.transform = "translateX(100px)";
};

// USando variavel e o nome dela "botao"
var botao01 = document.getElementById("botao_cor03");

botao01.onclick = function() {
  botao01.style['background-color'] = "blue";
  botao01.style.transform = "translateX(100px)";
};


// Usando variavel com this
var botao02 = document.getElementById("botao_cor04");

botao02.onclick = function() {
  this.style['background-color'] = "black";
  this.style.transform = "translateX(100px)";
};

console.log("---------------------------------");