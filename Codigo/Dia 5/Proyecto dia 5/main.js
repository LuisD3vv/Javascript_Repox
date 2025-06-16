function cambiar(opcion) {
  let elementoEdad = document.getElementById("edad");

  document.getElementById("REcom").textContent = "recomendaciones";

  if (!elementoEdad.value) {
    alert(" Porfavor, Ingresa tu edad.");
    return;
  }

  if (elementoEdad.value < 13 && elementoEdad.value < 16) {
    switch (opcion) {
      case "crimen":
        let campo = document.getElementsByClassName("categoria_campo");
        let imagenes1 = [];
        for (let i = 0; i < campo.length; i++) {
          campo[i].style.backgroundImage = imagenes1[i];
        }
        break;
      case "comedia":
        let campo2 = document.getElementsByClassName("categoria_campo");
        let imagenes2 = [];
        for (let i = 0; i < campo2.length; i++) {
          campo2[i].style.backgroundImage = imagenes2[i];
        }
        break;
      case "romance":
        let campo3 = document.getElementsByClassName("categoria_campo");
        let imagenes3 = [];
        for (let i = 0; i < campo3.length; i++) {
          campo3[i].style.backgroundImage = imagenes3[i];
        }
        break;
      case "accion":
        let campo4 = document.getElementsByClassName("categoria_campo");
        let imagenes4 = [];
        for (let i = 0; i < campo4.length; i++) {
          campo4[i].style.backgroundImage = imagenes4[i];
        }
        break;
    }
  } else if (elementoEdad.value >= 16 && elementoEdad.value <= 17) {
    switch (opcion) {
      case "crimen":
        let campo = document.getElementsByClassName("categoria_campo");
        let imagenes1 = [];
        for (let i = 0; i < campo.length; i++) {
          campo[i].style.backgroundImage = imagenes1[i];
        }
        break;
      case "comedia":
        let campo2 = document.getElementsByClassName("categoria_campo");
        let imagenes2 = [];
        for (let i = 0; i < campo2.length; i++) {
          campo2[i].style.backgroundImage = imagenes2[i];
        }
        break;
      case "romance":
        let campo3 = document.getElementsByClassName("categoria_campo");
        let imagenes3 = [];
        for (let i = 0; i < campo3.length; i++) {
          campo3[i].style.backgroundImage = imagenes3[i];
        }
        break;
      case "accion":
        let campo4 = document.getElementsByClassName("categoria_campo");
        let imagenes4 = [];
        for (let i = 0; i < campo4.length; i++) {
          campo4[i].style.backgroundImage = imagenes4[i];
        }
        break;
    }
  } else if (elementoEdad.value >= 18) {
    switch (opcion) {
      case "crimen":
        let campo = document.getElementsByClassName("categoria_campo");
        let imagenes1 = [];
        for (let i = 0; i < campo.length; i++) {
          campo[i].style.backgroundImage = imagenes1[i];
        }
        break;
      case "comedia":
        let campo2 = document.getElementsByClassName("categoria_campo");
        let imagenes2 = [];
        for (let i = 0; i < campo2.length; i++) {
          campo2[i].style.backgroundImage = imagenes2[i];
        }
        break;
      case "romance":
        let campo3 = document.getElementsByClassName("categoria_campo");
        let imagenes3 = [];
        for (let i = 0; i < campo3.length; i++) {
          campo3[i].style.backgroundImage = imagenes3[i];
        }
        break;
      case "accion":
        let campo4 = document.getElementsByClassName("categoria_campo");
        let imagenes4 = [];
        for (let i = 0; i < campo4.length; i++) {
          campo4[i].style.backgroundImage = imagenes4[i];
        }
        break;
    }
  }
}
// Asignación de eventos
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
let edad = document.getElementById("edad");
edad.addEventListener("click", function () {});

let ren = document.getElementById("reinciar");
ren.addEventListener("click", function () {
  location.reload();
});

//Descargar imagenes solamente, es lo unico que falta.
