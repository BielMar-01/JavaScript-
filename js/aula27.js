/*  Aula 27 - Métodos tempo */
 

/* 01 - Métodos tempo */
console.log("Funcionamento do tempo: ");

console.log('Mesagem 1');

// window.setTimeout(function(){ // primeiro argumento e uma função e depois o tempo em milisegundos
//   console.log('Mensagem 2');
// }, 3000);


console.log("---------------------------------");


/* 02 - Métodos tempo */
console.log("Exemplo: ");

document.getElementById("mostrar-loader").onclick = function() {
  document.getElementById("spinner-loader").style.display = "initial";

  window.setTimeout(function(){
    document.getElementById("spinner-loader").style.display = "none";
  }, 5000);
};


console.log("---------------------------------");


/* 03 - Métodos tempo setInterval */
console.log("setInterval: ");

/*var count = 0;

window.setInterval(function(){
  console.log(count);
  count++;
}, 1000); */



var count = 0; // Para fazer o setInterval ser interrompido temos que criar ele como variavel

  var inter = window.setInterval(function(){
    console.log(count);
    count++;
  if (count > 10) {
    window.clearInterval(inter); // O metodo clearInterval serve para parar
  }
}, 1000); 
    


console.log("---------------------------------");


/* 03 - Desafio: Relógio */
console.log("Relógio: ");

window.setInterval(function() {

  var hora_atual = new Date();

  var horas = hora_atual.getHours();
  var minutos = hora_atual.getMinutes();
  var segundos = hora_atual.getSeconds();

  function format_time(time) {
    if (time >= 0 && time <= 9) {
      var formatted_time = time.toString();
      formatted_time = "0" + formatted_time;
    } else {
      var formatted_time = time.toString();
    }
    return formatted_time;
  }

  document.getElementById("relogio").innerHTML = format_time(horas) + ":" + format_time(minutos) + ":" + format_time(segundos);

}, 1000);


console.log("---------------------------------");


