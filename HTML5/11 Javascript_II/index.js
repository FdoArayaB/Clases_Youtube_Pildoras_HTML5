

function ejecuta(){
  //solo seleccion un elemento P
  // document.getElementsByTagName('p')[0].onclick = saludo;

  //selecciona el p que contenga un id denomina importante
  // document.getElementById('importante').onclick = saludo;

  //seleccionar todos los P seleccionados (seleccionando elementos)
  // for (var i = 0; i < 3; i++) {
  //   document.getElementsByTagName('p')[i].onclick = saludo
  // }

  //les crea el evento a un elemento que contenca la clase: "claseejemplo"
  for (var i = 0; i < 2; i++) {
    document.getElementsByClassName('claseejemplo')[i].onclick = saludo
  }
}

function saludo(){
  alert("Que,hay de nuevo")
}

window.onload=ejecuta;
