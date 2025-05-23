let edad = document.getElementById("edad");

function cambiar(opcion) {
  switch (opcion) { //Cada [i] es el indice del elemento que comparte la misma clase, junto con el modificador de eventos del propio javascript
    case "crimen":
      document.getElementsByClassName(
        "categoria_campo"
      )[0].style.backgroundImage = "url('img/vertical.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[1].style.backgroundImage = "url('img/vertical.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[2].style.backgroundImage = "url('img/vertical.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[3].style.backgroundImage = "url('img/vertical.jpg')";
      break;
    case "comedia":
      document.getElementsByClassName(
        "categoria_campo"
      )[0].style.backgroundImage = "url('img/p01gylnm.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[1].style.backgroundImage = "url('img/p01gylnm.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[2].style.backgroundImage = "url('img/p01gylnm.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[3].style.backgroundImage = "url('img/p01gylnm.jpg')";
      break;

    case "romance":
      document.getElementsByClassName("categoria_campo"
      )[0].style.backgroundImage = "url('img/la-propuesta-secuela.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[1].style.backgroundImage = "url('img/la-propuesta-secuela.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[2].style.backgroundImage = "url('img/la-propuesta-secuela.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[3].style.backgroundImage = "url('img/la-propuesta-secuela.jpg')";
      break;

    case "accion":
      document.getElementsByClassName(
        "categoria_campo"
      )[0].style.backgroundImage = "url('img/backgroundAccion.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[1].style.backgroundImage = "url('img/backgroundAccion.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[2].style.backgroundImage = "url('img/backgroundAccion.jpg')";
      document.getElementsByClassName(
        "categoria_campo"
      )[3].style.backgroundImage = "url('img/backgroundAccion.jpg')";
      break;
  }
}

// Se debe de utilizar el funcion y depues la funcion, junto con el argumento
let crimen = document.getElementById("C_crimen");
crimen.addEventListener("click", function () {
  cambiar("crimen");
});
let comedia = document.getElementById("C_comedia");
comedia.addEventListener("click", function () {
  cambiar("comedia");
});
let romance = document.getElementById("C_romance");
romance.addEventListener("click", function () {
  cambiar("romance");
});
let accion = document.getElementById("C_accion");
accion.addEventListener("click", function () {
  cambiar("accion");
});
