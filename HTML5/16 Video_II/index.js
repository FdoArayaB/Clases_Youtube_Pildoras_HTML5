var mivideo, reproducir, barra, progreso, maximo;

maximo = 600 //eso es el ancho de la barra (se realizo en css)

function comenzar(){
    mivideo = document.getElementById('mivideo');
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
  if ((mivideo.paused==false) && (mivideo.ended==false)){
    mivideo.pause();
    reproducir.innerHTML = "Play";
  }
  else{
    mivideo.play();
    reproducir.innerHTML = "Paused";
    bucle=setInterval(estado,30); //hace un llamado contante a la función cada cierto tiempo (se mide en mi lesegundos)
  }
}

function estado(){
  if (mivideo.ended==false) {
    var total = parseInt(mivideo.currentTime*maximo/mivideo.duration)
    progreso.style.width = total + "px"
    }
}

function adelantando(posicion){
  if (mivideo.paused==false && mivideo.ended==false) {
    var ratonx = posicion.pageX - barra.offsetLeft;
    var nuevoTiempo = (ratonx*mivideo.duration)/maximo;
    mivideo.currentTime = nuevoTiempo;
    progreso.style.width = ratonx + "px";


  }
}

window.addEventListener("load",comenzar,false);
