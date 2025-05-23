function cambiar(opcion) {
  let elementoEdad = document.getElementById("edad");
      document.getElementById("REcom").textContent = "recomendaciones";

  if (!elementoEdad.value) {
    alert(" Porfavor, Ingresa tu edad.");
    
    return;
  }

  
  switch (
    opcion //Cada [i] es el indice del elemento que comparte la misma clase, junto con el modificador de eventos del propio javascript
  ) {
    case "crimen":

      let campo = document.getElementsByClassName("categoria_campo");
      let imagenes1 = [
        "url('img/vertical.jpg')",
        "url('img/p01gylnm.jpg')",
        "url('img/la-propuesta-secuela.jpg')",
        "url('img/backgroundAccion.jpg')"
      ];
      for (let i = 0; i < campo.length; i++) {
        campo[i].style.backgroundImage = imagenes1[i]; // por cada campo, modificamos su background iterando sobre el mismo
      }      
      break;
    case "comedia":
      let campo2 = document.getElementsByClassName("categoria_campo");
      let imagenes2 = [
        "url('img/vertical.jpg')",
        "url('img/p01gylnm.jpg')",
        "url('img/la-propuesta-secuela.jpg')",
        "url('img/backgroundAccion.jpg')"
      ];
      for (let i = 0; i < campo2.length; i++) {
        campo2[i].style.backgroundImage = imagenes2[i];
      }

      break;
    case "romance":
      let campo3 = document.getElementsByClassName("categoria_campo");
      let imagenes3 = [
        "url('img/vertical.jpg')",
        "url('img/p01gylnm.jpg')",
        "url('img/la-propuesta-secuela.jpg')",
        "url('img/backgroundAccion.jpg')"
      ];
      for (let i = 0; i < campo3.length; i++) {
        campo3[i].style.backgroundImage = imagenes3[i];
      }

      break;

    case "accion":
      let campo4 = document.getElementsByClassName("categoria_campo");
      let imagenes4 = [
        "url('accion/acccion2.jpg')",
        "url('accion/accion1.webp')",
        "url('accion/backgroundAccion.jpg')",
        "url('accion/spider-man-2-15-an-os-1562828142.jpg')"
      ];
      for (let i = 0; i < campo4.length; i++) {
        campo4[i].style.backgroundImage = imagenes4[i];
      }
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
