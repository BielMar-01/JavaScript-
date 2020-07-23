/*  Aula 28 - Comando Switch */
 

/* 01 - Switch */
console.log("Funcionamento do Switch: ");

 function valor_pedagio (categoria) {

  switch(categoria) {

    case '1':
      return 11.22;
      break;

    case '2':
      return 22.45;
      break;

    case '3':
      return 16.88;
      break;

    case '4':
      return 33.65;
      break;

    default:
      return 'Categoria não encontrada';
    
  }
  
}

var categoria_veiculo = "3";

console.log(valor_pedagio (categoria_veiculo));


console.log("---------------------------------");
