/*  Aula 18 - Outros get element */
 

/* 01 - get element className */ 
console.log("Funcionamento o getelementByClassName: ");

var elementos = document.getElementsByClassName("exemplo");

console.log(elementos);

elementos[0].innerHTML = "Texto do elemento 1";

console.log(elementos);


console.log("---------------------------------");


/* 02 - get element TagName */ 
console.log("Funcionamento o getelementByTagName: ");

var paragrafos = document.getElementsByTagName("p");

console.log(paragrafos);

paragrafos[4].innerHTML = "Paragrafo do elemento 1";

console.log(paragrafos);

