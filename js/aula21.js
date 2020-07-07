/*  Aula 21 - Condicionais (if, else if, else) */
 

/* 01 - Condicionais */ 
console.log("Funcionamento das condicionais: ");

var idade = 17;

if (idade < 18) {

  console.log('Menor de idade');

} else {

  console.log('Maior de idade');

}


console.log("---------------------------------");


/* 02 - Condicionais com else if */ 
console.log("Funcionamento do else if: ");

var idade = 18;

  if (idade < 18) {

    console.log('Menor de 18');

  } else if (idade == 18) {

    console.log('Tem 18 anos');

  } else {

    console.log('Maior de 18');

}


console.log("---------------------------------");



/* 03 - Múltiplas condições */ 
console.log("Funcionamento com múltiplas condições: ");

nota = 7;
faltas = 3;

  // Resolução com and: 

  if (nota >= 7 && faltas <= 4) {
    console.log( 'O aluno foi aprovado' );
  } else {
    console.log( 'O aluno foi reprovado' );
  }

  // Resolução com or: 

  if (nota < 7 || faltas > 4) {
    console.log( 'O aluno foi reprovado' );
  } else {
    console.log( 'O aluno foi aprovado' );
}


console.log("---------------------------------");


/* 04 - Avaliando valores como condições */ 
console.log("Avaliando valores como condições: ");

var nome = "Gabriel";

  if (nome) {
        
    console.log(nome);
    
  } else {

    console.log("Nome não informado");

}


console.log("---------------------------------");