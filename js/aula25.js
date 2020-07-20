/*  Aula 25 - Local Storage */
 

/* 01 - Local Storage 
console.log("Funcionamento do Local Storage: ");

// window.localStorage.setItem("nome", "Gabriel"); // Isso guarda informações no browser

console.log(localStorage.nome); // localStorage['nome']

window.localStorage.removeItem("nome"); 

console.log(localStorage.nome); // Isso remove do localStorage

console.log("---------------------------------"); */



/* 02 - Exemplo pratico */ 
console.log("Exemplo pratico do Local Storage: ");

// Função onclick do enviar
document.getElementById("enviar-nome").onclick = function() {
  
  // Guarda o nome digitado no localStorege
  var nome = document.getElementById("nome-usuario").value;
  localStorage.setItem("nome", nome);

  // Esconder o formulário
  document.getElementById("name-field").style.display = 'none';

  // Atualizar e mostrar mensagem de boas vindas
  document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + " , tudo bom?";
  document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + " ?";  
  document.getElementById("welcome-area").style.display = 'initial';
};


// Testar para ver se ja existe um nome no localStorage
if (localStorage.nome) {

  // Esconder o formulário
  document.getElementById("name-field").style.display = 'none';

  // Atualizar e mostrar mensagem de boas vindas
  document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + " , tudo bem?";
  document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + " ?";  
  document.getElementById("welcome-area").style.display = 'initial';
}


// Função onclick do não é o usuario
document.getElementById("not-me").onclick = function() {

  // Remover a chave nome do localStorage 
  localStorage.removeItem("nome"); 


  // Esconder a mensagem de boas vindas
  document.getElementById("welcome-area").style.display = 'none';


  // Mostrar o formulario
  document.getElementById("name-field").style.display = 'initial';
}

console.log("---------------------------------");