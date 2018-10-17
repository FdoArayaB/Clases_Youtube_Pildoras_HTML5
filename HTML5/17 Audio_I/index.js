var miaudio, reproducir, barra, progreso, maximo;

maximo = 600 //eso es el ancho de la barra (se realizo en css)

function comenzar(){
    miaudio = document.getElementById('miaudio');
    reproducir = document.getElementById('reproducir');
    barra = document.getElementById('barra');
    progreso = document.getElementById('progreso')

    reproducir.addEventListener('click',clicando,false);
    barra.addEventListener('click',adelantando,false);
}


// propiedades video:
// duration = duracion del video en segundos
// currentTime = tiempo actual del video
// paused = valr true o false, e indica si el video esta pausado o no
// ended =  valr true o false, e indica si el video esta terminado o no

// metodos video:
// play(): metodo para inicial el video
// pause() metodo para pausar el video


function clicando(){
  if ((miaudio.paused==false) && (miaudio.ended==false)){
    miaudio.pause();
    reproducir.innerHTML = "Play";
  }
  else{
    miaudio.play();
    reproducir.innerHTML = "Paused";
    bucle=setInterval(estado,30); //hace un llamado contante a la función cada cierto tiempo (se mide en mi lesegundos)
  }
}

function estado(){
  if (miaudio.ended==false) {
    var total = parseInt(miaudio.currentTime*maximo/miaudio.duration)
    progreso.style.width = total + "px"
    }
}

function adelantando(posicion){
  if (miaudio.paused==false && miaudio.ended==false) {
    var ratonx = posicion.pageX - barra.offsetLeft;
    var nuevoTiempo = (ratonx*miaudio.duration)/maximo;
    miaudio.currentTime = nuevoTiempo;
    progreso.style.width = ratonx + "px";


  }
}

window.addEventListener("load",comenzar,false);
