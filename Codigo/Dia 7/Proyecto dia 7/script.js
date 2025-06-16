function crearTiendas(contenedorID, min, cantidadTiendas) {
  // Encontrar contenedor por su id
  let elementoContenedor = document.getElementById(contenedorID);

  // loop para crear tiendas
  for (
    let conteoTiendas = 1;
    conteoTiendas <= cantidadTiendas;
    conteoTiendas++
  ) {
    // Crear el texto de label para poder llamar a la funcion
    let textoEtiqueta = "Tienda " + conteoTiendas;

    // LLamar a la funcion crear parrafoTienda
    let parrafoTienda = CrearParrafoTienda(textoEtiqueta, min);

    // Agregar los parrafos al contenedor

    elementoContenedor.appendChild(parrafoTienda);
  }
}
function CrearParrafoTienda(textoLabel, ValorMin) {
  // Crear las etiquetas de <p>

  let elementoParrafo = document.createElement("p");

  // Crear etiqueta Label
  let elementoEtiqueta = document.createElement("label");
  elementoEtiqueta.innerText = textoLabel + ":  ";

  // Conecttar con el input
  elementoEtiqueta.setAttribute("for", textoLabel); //darle un atributo
  // crear input
  let elementoInput = document.createElement("input");
  // establecer atributos de input
  elementoInput.setAttribute("type", "number");
  elementoInput.setAttribute("id", textoLabel);
  elementoInput.setAttribute("min", ValorMin);
  elementoInput.setAttribute("value", 0);

  //agregar elemento label e input al parrafo
  elementoParrafo.appendChild(elementoEtiqueta);
  elementoParrafo.appendChild(elementoInput);
  // devolver el parrafo completo
  return elementoParrafo;
}
function extraerNumeroDesdeElemento(elemento) {
  let mitexto = elemento.value;
  let miNumero = Number(mitexto);
  return miNumero;
}
function calcular() {
  // Crear array de elementos, obtenidos de la llamada a la funcion que extrae el numero
  let Ventas = []; // Metemos los elementos por fuera
  let posicionVentas = 0;

  let elementoventas = document.getElementById("itemsTiendas");

  for (let item of elementoventas.children) {
    let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
    Ventas[posicionVentas] = valorVenta;
    posicionVentas += 1;
  }
  let TotalVentas = sumarTotal(Ventas);
  let VentaMayor = Calcularmayor(Ventas);
  let ventaMenor = Calcularmenor(Ventas);

  document.getElementById("parrafoSalida").textContent =
    "Total Ventas: " + TotalVentas;

  let elementoColores = document.getElementById("itemsTiendas");

  for (elemento of elementoColores.children) {
    let input = elemento.children[1];
    input.setAttribute("id", "cualquiera");
    if (input.value == VentaMayor) {
      input.setAttribute("id", "mayor");
    } else if (input.value == ventaMenor) {
      input.setAttribute("id", "menor");
    }
  }
}
// recorrer todos los elementos y agregarlos a la suma
function sumarTotal(array) {
  let TotalVentas = 0;
  for (elemento of array) {
    TotalVentas += elemento;
  }
  return TotalVentas;
}
// calcular valor mayor mediante un loop

function Calcularmayor(array) {
  let mayor = array[0];
  for (numero of array) {
    if (numero > mayor) {
      mayor = numero;
    }
  }
  return mayor;
}
// calcular valor menor mediante un loop
function Calcularmenor(array) {
  let menor = array[0];
  for (numero of array) {
    if (numero < menor) {
      menor = numero;
    }
  }
  return menor;
}
// Creacion de elementos, parrafos, inputs y label
function generarContenido() {
  let elementoDiv = document.getElementById("contenido");
  let elementoParraro = document.createElement("p");
  let elementoInput = document.createElement("input");
  // le establecemos un atributo y su valor, recibe strings
  elementoInput.setAttribute("type", text);
  elementoInput.setAttribute("id", txtInput);
  elementoParraro.innerText = "Parrafo 1";
  // append child agrega un elemento dentro de otro(un hijo)
  elementoDiv.appendChild(elementoParraro);
  elementoDiv.appendChild(elementoInput);
}