function consultarPrecio() {
  let elementoRespuesta = document.getElementById("textoPrecio");
  let elementoFruta = document.getElementById("numeroFruta");
  let Fruta = elementoFruta.value;

  switch (Fruta) {
    case "1":
      elementoRespuesta.textContent = "$8.45";
      break;
    case "2":
      elementoRespuesta.textContent = "$6.32";
      break;
    case "3":
      elementoRespuesta.textContent = "$2.45";
      break;
    case "4":
      elementoRespuesta.textContent = "$7.12";
      break;
      case "5":
        elementoRespuesta.textContent = "$1.15";
        break;
  }
}
