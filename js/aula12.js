/*  Aula 12 - Tipos de dados - Arrays */



/* 01 - Arrays basicos */ 
console.log("Funcionamento dos Arrays: ");


var alunos = [ "João" , "Maria", "José" ];
var num_primos = [ 2, 3, 5, 7, 11, 13 ];

console.log("O tamanho(length) é de: " + alunos.length);
console.log("O numero 5 está no indice: " + num_primos[2]);
console.log(num_primos[10]);


console.log("---------------------------------");


/* 02 - Arrays multi dimensionais */ 
console.log("Funcionamento dos Arrays multi dimensionais: ");

var grupos = [ 
  [ "João" , "Maria" ],
  [ "Pedro" , "Joana", "André", "Júlio" ],
  [ "Carolina" , "Helena", "Marcelo" ]
];

console.log(grupos.length);
console.log(grupos[1]);
console.log(grupos[1][1]); //Para pegar um elemento especifico do array


console.log("---------------------------------");


/* 03 - Operações com Arrays */ 
console.log("Operações com Arrays: ");

var cursos = [ "HTML", "Python", "PHP" ];

// Push - Adiciona elementos ao final de um array
cursos.push("Javascript");
console.log(cursos);// O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]


// Unshift - Adiciona elementos ao início de um array
cursos.unshift("Bootstrap");
console.log(cursos);// O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]


// Pop - Remove o último elemento de um array
cursos.pop();
console.log(cursos);// O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]


// Shift - Remove o primeiro elemento de um array
cursos.shift();
console.log(cursos);// O console mostrará [ "HTML", "Python", "PHP" ]


console.log("---------------------------------");


/* 04 - Operações com Arrays - Subistituindo um indice */ 
console.log("Operações com Arrays - Subistituindo um indice: ");

var ingredientes = [ "pão branco", "queijo", "presunto" ];

console.log(ingredientes);// O console mostrará [ "pão branco", "queijo", "presunto" ]


ingredientes[0] = "pão integral";
console.log(ingredientes);// O console mostrará [ "pão integral", "queijo", "presunto" ]


ingredientes[3] = "maionese";
console.log(ingredientes);// O console mostrará [ "pão integral", "queijo", "presunto", "maionese" ]


console.log("---------------------------------");


/* 05 - Operações com Arrays - Slice - Extrair parte de um array */ 
console.log("Operações com Arrays - Extrair parte de um array: ");

var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];

console.log(alunos);

console.log( alunos.slice(0,3) );// O console mostrará [ "João" , "Maria", "José" ]

console.log( alunos.slice(0,-2) );

console.log( alunos.slice(-2) );