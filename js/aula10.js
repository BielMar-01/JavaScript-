/*  Aula 10 - Trabalhando com o DOM */

/* Usando o getElementById */

/* Caixa Azul */
//console.log("Caixa Azul:");

/* Mostrando o valor da caixa azul no console */
var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

//console.log(conteudo_caixa);


/* Caixa Amarela */
//console.log("Caixa Amarela:");

/* Alterando o conteudo caixa amarela para caixa azul */
//document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;


/* Contuedo criando */
//console.log("Contuedo criando:");

/* Construindo nosso proprio conteudo */
document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa Amarela' + '</h1>';


document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo_caixa + '</h1>';