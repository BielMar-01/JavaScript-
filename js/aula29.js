/*  Aula 29 - Break e Continue */
 

/* 01 - Break */
console.log("Funcionamento do Break: ");

var x = 0;

while (x < 10) {
  console.log(x);
  x++;

  if (x==5) {
    break;
  }
}


var lista = [1, 5, 9, 33, 56,59,89,100,124, 147, 6547,89,290];

for(a = 0; a< lista.length; a++) {
  if ( lista[a] == 33) {
    console.log(`Valor encontrado`);
    break;
  }
  console.log(`Tentativa: ` + a) ;
}


console.log("---------------------------------");


/* 02 - Continue */
console.log("Funcionamento do Continue: ");

var num = 0;

while (num < 20) {

  if(num == 3) {
    num++;
    continue;
  }

  console.log(num);
  num++;
}


var valor = 0;

while (valor < 20) {
  valor++;

  if(valor % 2 == 0) {
    continue;
  }

  console.log(valor);
}


console.log("---------------------------------");