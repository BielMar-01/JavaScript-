/* // Aula 04 - Tipos de dados primitivos - Strings */
var nome = "João";  // podem ser usadas aspas duplas
var sobrenome = 'Gomes';  // ou aspas simples
var cpf = '111.111.111-11'; // Para numeros que não são feitos calculos e melhor usar string
var telefone = "998887655";
var ddd = '21';
var email = 'joao@gmail.com';
var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

console.log('Nome completo: ' + nome + ' ' + sobrenome);

console.log('(' + ddd + ')' + telefone);

console.log('Primeira letra do nome:' + nome[0]);
console.log('Primeira letra do nome:' + nome[3]);

console.log('Número de caracteres do telefone: ' + telefone.length);

// String é considerado uma sequencia de caracteres [0, 1, 2, 3] = "João"
