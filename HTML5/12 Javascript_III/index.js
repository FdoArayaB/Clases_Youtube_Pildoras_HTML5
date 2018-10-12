

function ejecuta(){
  //metodos para seleccionar elementos del html con comandos CSS
  //querySelector y querySelectorAll


  //querySelector solo selecciona el primer elemento que cumple con la llamada de css
  // document.querySelector('.calseejemplo').onclick = saludo;
  // document.querySelector('#principal p:last-child').onclick = saludo;

  //querySelectorAll hace referencia a todos los elemento que cumplan la condición css, y es un array
  var elemento = document.querySelectorAll("#principal p");

  for (var i = 0; i < elemento.length; i++) {
    elemento[i].onclick = saludo
  }


  //selector de grupo
  var elemento = document.querySelectorAll("#principal p, span");

  for (var i = 0; i < elemento.length; i++) {
    elemento[i].onclick = saludo
  }
}


function saludo(){
  alert("Que, hay de nuevo");
}

window.onload=ejecuta;
