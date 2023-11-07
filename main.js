function tocaSom(idElementoaudio) {
  document.querySelector(idElementoaudio).play();
}

const listaDeTeclas = document.querySelectorALL(".tecla");

let contador = 0;

while (contador < listaDeTeclas.length) {
  listadebotoes[contador].onclick = tocaSom;

  contador = contador + 1;
}
