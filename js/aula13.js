/*  Aula 13 - Tipos de dados - Objetos */


/* 01 - Objetos basicos */ 
console.log("Funcionamento dos Objetos: ");

var funcionario = {
  'nome': 'Pedro Souza Gomes',
  'ano_nasc': 1972,
  'cpf': '111.111.111.11',
  'cargo': 'Analista de Sistemas'
};

console.log(funcionario.nome);
console.log(funcionario['cargo']);


console.log("---------------------------------");


/* 02 - Alterando elementos dos objetos */ 
console.log("Alterando elementos dos objetos: ");

var funcionario01 = {
  'nome': 'Luiz Carlos Silva',
  'ano_nasc': 1976,
  'cpf': '222.111.111.11',
  'cargo': 'Desenvovedor de Sistemas'
};

funcionario.cargo = 'Gerente de T.I.';  // alterar um valor associado a uma chave existente
funcionario.cnh = '1982736654';  // adicionar uma nova dupla de chave e valor

console.log(funcionario); 


console.log("---------------------------------");


/* 03 - Arrays e Objetos misturados */ 
console.log(" Arrays e Objetos misturados: ");

var cursos = [
  {
      'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
      'avaliacoes': 680,
      'alunos': 2300,
      'categorias': ['programacao', 'tecnologia']
  },

  {
      'titulo': 'Aprenda PHP e faça sites dinâmicos',
      'avaliacoes': 180,
      'alunos': 350,
      'categorias': ['desenvolvimento web', 'programacao']
  },

  {
      'titulo': 'Excel do Zero ao Avançado',
      'avaliacoes': 420,
      'alunos': 1800,
      'categorias': ['produtividade', 'gestão']
  } 
];

console.log(cursos[1].categorias[0]);


console.log("---------------------------------");


/* 04 - Alterando os elementos dos objetos dentro dos arrays */ 
console.log(" Alterando os elementos dos objetos dentro dos arrays: ");

cursos[2].categorias[1] = 'administração de empresas';
console.log(cursos[2].categorias);

