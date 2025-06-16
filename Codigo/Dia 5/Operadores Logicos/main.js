//Tener cuidado, las funciones que se llaman con botones deben de estar declaras ya antes de llamarse.

// function calcular() {
//   let edad = document.getElementById("textoEdad").value;
//   edad = parseInt(edad);

//   let respuesta_1 = document.getElementById("respuesta1");
//   let respuesta_2 = document.getElementById("respuesta2");
//   let respuesta_3 = document.getElementById("respuesta3");

//   if (edad >= 18) {
//     respuesta_1.textContent = "si";
//   }
//   else{
//     respuesta_1.textContent = "eres menor de edad"
//   }
//   if (edad >= 18 && edad <= 30) {
//     respuesta_2.textContent = "si puede";
//   }
//   else{
//     respuesta_2.textContent = "debes de estar dentro del rango"
//   }
//   if (edad == 20 || edad == 25) {
//     respuesta_3.textContent = "Puedes entrar gratis";
//   }
//   else {
//     respuesta_3.textContent = "No es tu dia"
//   }
// }
function calcular() {
    let edad = document.getElementById("textoEdad").value;
    edad = parseInt(edad);
  
    let respuesta_1 = document.getElementById("respuesta1");
    let respuesta_2 = document.getElementById("respuesta2");
    let respuesta_3 = document.getElementById("respuesta3");
  
   let puedebeber = edad >= 18;
   respuesta_1.textContent = puedebeber;

   let puedeIngresar = edad >= 18 && edad <= 30;
   respuesta_2.textContent = puedeIngresar;
   
   let Entradagratis = edad == 20 || edad ==  25 ;
   respuesta_3.textContent = Entradagratis;
  }
  