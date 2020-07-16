/*  Aula 24 - BOM(Browser Object Model) */
 

/* 01 - BOM */ 
console.log("Funcionamento do BOM: ");

// document.getElementById("titulo-bom").innerHTML = "Novo titulo"; Muda o titulo
// window.document.getElementById("titulo-bom").innerHTML = "Novo titulo"; // Faz a mesma coisa que o de cima

// window.innerWidth; // Checa a largura da pagina
// innerWidth; // Faz a mesma coisa que o de cima

window.onmousemove = function(e) {

  // console.log('eixo y: ' + e.pageY );
  // console.log('eixo x: ' + e.pageX );

  if(e.pageY < 5) {
    alert('Não perca os descontos disponievl na secão de colocaoes')
  }

}

console.log("---------------------------------");