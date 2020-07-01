/*  Aula 16 - Eventos*/
 

/* 01 - Eventos basicos */ 
console.log("Funcionamento dos Eventos: ");


document.getElementById("click-me").onclick = function() {
  alert("Você clicou no botão");
};

document.getElementById("hover-me").onmouseover = function() {
  alert("O mouse está em cima de mim");
};

document.getElementById("leave-me").onmouseout = function() {
  alert("O mouse está saiu de cima de mim");
};


console.log("---------------------------------");


/* 02 - Eventos onkeydown */ 
console.log("Eventos onkeydown: ");


/*document.onkeydown = function() {
  alert('Você apertou alguma tecla');
}; */

document.onkeydown = function() {
  alert('Você apertou a tecla: ' + event.keyCode);
};


console.log("---------------------------------");


/* 03 - Manipulação de evento via atributo html */ 
console.log("Manipulação de evento via atributo html: ");


