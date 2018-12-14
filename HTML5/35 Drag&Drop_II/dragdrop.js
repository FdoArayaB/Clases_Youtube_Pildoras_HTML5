
var elem_origen;
var elem_destino;

function comenzar(){
  elem_origen = document.getElementById('imgFlores');
  elem_origen.addEventListener("dragstart", comenzamos_arrastrar,false);

  elem_destino = document.getElementById('zona_destino');
  elem_destino.addEventListener('dragenter', function(e){
    e.preventDefault(); //Metodo para resetear las configuracions por defectos de los navegadoras preventDefault();
  },false);
  elem_destino.addEventListener('dragover', function(e){
    e.preventDefault(); //Metodo para resetear las configuracions por defectos de los navegadoras preventDefault();
  },false);
  elem_destino.addEventListener('drop',soltado,false);
}

function comenzamos_arrastrar(e){
  var codigo = "<img src='" + elem_origen.getAttribute("src") + "'>"; //getAttribute lo que hace es poder obtener algun parametro del objeto determinado
  e.dataTransfer.setData("Text",codigo);
}

function soltado(e){
  e.preventDefault(); //Metodo para resetear las configuracions por defectos de los navegadoras preventDefault();
  elem_destino.innerHTML=e.dataTransfer.getData("Text");
  //document.getElementById('cajaimagen').innerHTML="";

}

window.addEventListener("load",comenzar,false);
