let notas = [9.5, 4.5, 7, 8.7, 6];
let nombre = prompt("Cual es tu nombre?", "Nombre");
document.getElementById("user").innerHTML = nombre;

function mostrarNotas() {
  let elementoLista = document.getElementById("Lista");
  for (elemento of notas) {
    
    let itemI = document.createElement("li");
    if(elemento >= 5) {
        itemI.style.color= " #32ff00 "
    }
    else {
                itemI.style.color= "red"

    }
    itemI.innerText = elemento;
    elementoLista.appendChild(itemI);
  }
}
function Promedio() {
  let elementoLista = document.getElementById("promediar");
  document.getElementById("promediar").style.color = "black";
  document.getElementById("promediar").style.fontSize = "25px";
  if (elementoLista == null) {
    console.log("Dato vacio");
    return;
  }
  let suma = 0;
  for (numero of notas) {
    // el error estaba en tratar de iterar sobre strings
    suma += numero;
  }
  console.log(suma);
  let total = suma / notas.length;
  console.log(total);
  elementoLista.innerText = "Promedio " + total.toFixed(2); //redondear
}
function notaMayor() {
    document.getElementById("promediar").style.color = "black";
  document.getElementById("promediar").style.fontSize = "24px";
  let mayor = notas[0];
  for (numero of notas) {
    if (numero > mayor) {
      mayor = numero;
    }
  }
    document.getElementById("promediar").innerText = "Mejor nota " + mayor;

}
function Reprobados() {
  let menor = notas[0];
  for (numero of notas) {
    if (numero < menor) {
      menor = numero;
    }
  }
  console.log("menor");
  document.getElementById("promediar").innerText = "Peor nota " + menor;
  document.getElementById("promediar").style.fontSize = "25px";

  if (menor < 6) {
    document.getElementById("promediar").style.color = "red";
  } else {
    document.getElementById("promediar").style.color = "green";
  }
}

// window.addEventListener("DOMContentLoaded", () => {
//     Promedio();
// });
