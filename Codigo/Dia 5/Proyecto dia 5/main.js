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
        let imagenes1 = [
          "url('crimen/vertical.jpg')",
          "url('crimen/Crimen-perfecto-Amazon.jpg')",
          "url('crimen/navajas-secretos.jpg')",
          "url('crimen/sicario-781388443-large.jpg')"
        ];
        for (let i = 0; i < campo.length; i++) {
          campo[i].style.backgroundImage = imagenes1[i];
        }
        break;
      case "comedia":
        let campo2 = document.getElementsByClassName("categoria_campo");
        let imagenes2 = [
          "url('comedia/Volver_al_Futuro_Poster.webp')",
          "url('comedia/35817ff4763244f876ae72502a01d93c7dba0f5f9b7356fe7eb464074a8ca4f4.jpg')",
          "url('comedia/MV5BZGRmMGRhOWMtOTk3Ni00OTRjLTkyYTAtYzA1M2IzMGE3NGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg')",
          "url('comedia/El_lobo_de_Wall_Street-597158261-large.jpg')"
        ];
        for (let i = 0; i < campo2.length; i++) {
          campo2[i].style.backgroundImage = imagenes2[i];
        }
        break;
      case "romance":
        let campo3 = document.getElementsByClassName("categoria_campo");
        let imagenes3 = [
          "url('romance/81sImSY6vvL._AC_UF894,1000_QL80_.jpg')",
          "url('romance/a_traves_de_mi_ventana-369671861-large.jpg')",
          "url('romance/the-notebook-565006977-large-1673864383.avif')",
          "url('romance/her.jpg')",
          "url('romance/lalaland.jpg')",
          "url('romance/mujerbonita.jpg')"
        ];
        for (let i = 0; i < campo3.length; i++) {
          campo3[i].style.backgroundImage = imagenes3[i];
        }
        break;
      case "accion":
        let campo4 = document.getElementsByClassName("categoria_campo");
        let imagenes4 = [
          "url('accion/accion1.webp')",
          "url('accion/10-películas-de-acción-protagonizadas-por-mujeres-Tomb_Raider-894080826-large.jpg')",
          "url('accion/backgroundAccion.jpg')",
          "url('accion/thunderbolts-67640c8b27991.jpg')"
        ];
        for (let i = 0; i < campo4.length; i++) {
          campo4[i].style.backgroundImage = imagenes4[i];
        }
        break;
    }
  } else if (elementoEdad.value >= 16 && elementoEdad.value <= 17) {
    switch (opcion) {
      case "crimen":
        let campo = document.getElementsByClassName("categoria_campo");
        let imagenes1 = [
          "url('crimen/vertical.jpg')",
          "url('crimen/Crimen-perfecto-Amazon.jpg')",
          "url('crimen/navajas-secretos.jpg')",
          "url('crimen/sicario-781388443-large.jpg')"
        ];
        for (let i = 0; i < campo.length; i++) {
          campo[i].style.backgroundImage = imagenes1[i];
        }
        break;
      case "comedia":
        let campo2 = document.getElementsByClassName("categoria_campo");
        let imagenes2 = [
          "url('comedia/Volver_al_Futuro_Poster.webp')",
          "url('comedia/35817ff4763244f876ae72502a01d93c7dba0f5f9b7356fe7eb464074a8ca4f4.jpg')",
          "url('comedia/MV5BZGRmMGRhOWMtOTk3Ni00OTRjLTkyYTAtYzA1M2IzMGE3NGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg')",
          "url('comedia/El_lobo_de_Wall_Street-597158261-large.jpg')"
        ];
        for (let i = 0; i < campo2.length; i++) {
          campo2[i].style.backgroundImage = imagenes2[i];
        }
        break;
      case "romance":
        let campo3 = document.getElementsByClassName("categoria_campo");
        let imagenes3 = [
          "url('romance/81sImSY6vvL._AC_UF894,1000_QL80_.jpg')",
          "url('romance/a_traves_de_mi_ventana-369671861-large.jpg')",
          "url('romance/the-notebook-565006977-large-1673864383.avif')",
          "url('romance/her.jpg')",
          "url('romance/lalaland.jpg)",
          "url('romance/MV5BYzZiZjAxODItYzJhNi00ZjgyLThlMWEtMWI4NjM3YjNlN2M4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg')"
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
          "url('accion/Poster-de-la-pelicula-rescate-imposible-2024-Mexico-693x1024.webp')",
          "url('accion/10-películas-de-acción-protagonizadas-por-mujeres-Tomb_Raider-894080826-large.jpg')",
          "url('accion/backgroundAccion.jpg')",
          "url('accion/thunderbolts-67640c8b27991.jpg')"
        ];
        for (let i = 0; i < campo4.length; i++) {
          campo4[i].style.backgroundImage = imagenes4[i];
        }
        break;
    }
  } else if (elementoEdad.value >= 18) {
    switch (opcion) {
      case "crimen":
        let campo = document.getElementsByClassName("categoria_campo");
        let imagenes1 = [
          "url('crimen/vertical.jpg')",
          "url('crimen/81YFtA4a8ZL._AC_UF894,1000_QL80_DpWeblab_.jpg')",
          "url('crimen/Crimen-perfecto-Amazon.jpg')",
          "url('crimen/el-silencio-de-los-inocentes.jpg')",
          "url('crimen/navajas-secretos.jpg')",
          "url('crimen/sicario-781388443-large.jpg')"
        ];
        for (let i = 0; i < campo.length; i++) {
          campo[i].style.backgroundImage = imagenes1[i];
        }
        break;
      case "comedia":
        let campo2 = document.getElementsByClassName("categoria_campo");
        let imagenes2 = [
          "url('comedia/Volver_al_Futuro_Poster.webp')",
          "url('comedia/5ab249405ae0feae38fed77be63e6dffd1432cbdaeac58b8f45a15efb6a005a3.jpg')",
          "url('comedia/35817ff4763244f876ae72502a01d93c7dba0f5f9b7356fe7eb464074a8ca4f4.jpg')",
          "url('comedia/MV5BZGRmMGRhOWMtOTk3Ni00OTRjLTkyYTAtYzA1M2IzMGE3NGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg')",
          "url('comedia/the_hangover-726045836-large.jpg')",
          "url('comedia/El_lobo_de_Wall_Street-597158261-large.jpg')"
        ];
        for (let i = 0; i < campo2.length; i++) {
          campo2[i].style.backgroundImage = imagenes2[i];
        }
        break;
      case "romance":
        let campo3 = document.getElementsByClassName("categoria_campo");
        let imagenes3 = [
          "url('romance/81sImSY6vvL._AC_UF894,1000_QL80_.jpg')",
          "url('romance/a_traves_de_mi_ventana-369671861-large.jpg')",
          "url('romance/the-notebook-565006977-large-1673864383.avif')",
          "url('romance/her.jpg')",
          "url('romance/lalaland.jpg)",
          "url('romance/MV5BYzZiZjAxODItYzJhNi00ZjgyLThlMWEtMWI4NjM3YjNlN2M4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg')"
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
          "url('accion/Poster-de-la-pelicula-rescate-imposible-2024-Mexico-693x1024.webp')",
          "url('accion/10-películas-de-acción-protagonizadas-por-mujeres-Tomb_Raider-894080826-large.jpg')",
          "url('accion/backgroundAccion.jpg')",
          "url('accion/thunderbolts-67640c8b27991.jpg')"
        ];
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