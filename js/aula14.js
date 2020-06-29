/*  Aula 14 - Métodos de Objetos */
 

/* 01 - Metodos basicos */ 
console.log("Funcionamento dos Metodos: ");

var aluno = {
  'nome': 'Maria',
  'sobrenome': 'Pereira',
  'ano_nasc': 1992,
  'nome_completo': function () {
    var n_completo = this.nome + " " + this.sobrenome;
    return n_completo;
  },
  'ver_idade': function() {
    var idade = 2020 - this.ano_nasc;
    return idade; 
  }
};

console.log( aluno.nome_completo() );

console.log('A idade é: ' + aluno.ver_idade() );

console.log("---------------------------------");
   