function evaluarCompra() {
  let elementoRespuesta = document.getElementById("desicion");

  let elementoPrecio = document.getElementById("textoPrecio");

  let precio = elementoPrecio.value;

  if (precio < 5) {
    elementoRespuesta.textContent = "Comprar dos cartones de leche";
  } else if (precio > 8) {
    elementoRespuesta.textContent = "comprar un carton";
  } else{
    elementoRespuesta.textContent = "No comprar leche";
  }
}
