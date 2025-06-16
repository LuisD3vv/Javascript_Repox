function crearTiendas(contenedorID, min,cantidadTiendas) {
    // Encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    // loop para crear tiendas
    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
      // Crear el texto de label para poder llamar a la funcion
      let textoEtiqueta = "Tienda " + conteoTiendas;

      // LLamar a la funcion crear parrafoTienda
      let parrafoTienda = CrearParrafoTienda(textoEtiqueta,min);

      // Agregar los parrafos al contenedor

      elementoContenedor.appendChild(parrafoTienda);
    }
}
function CrearParrafoTienda(textoLabel, ValorMin){
  // Crear las etiquetas de <p>

  let elementoParrafo = document.createElement("p");

  // Crear etiqueta Label
  let elementoEtiqueta = document.createElement("label");
  elementoEtiqueta.innerText = textoLabel + ": ";

  // Conecttar con el input
  elementoEtiqueta.setAttribute("for", textoLabel); //darle un atributo
  // crear input
  let elementoInput = document.createElement("input");
  // establecer atributos de input
  elementoInput.setAttribute("type", "number");
  elementoInput.setAttribute("id", textoLabel);
  elementoInput.setAttribute("min", ValorMin);
  elementoInput.setAttribute("value",0);

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
  let Ventas = [] // Metemos los elementos por fuera
  let posicionVentas = 0;

  let elementoventas = document.getElementById("itemsTiendas");

  for(let item of elementoventas.children) {
      let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
      Ventas[posicionVentas] = valorVenta;
      posicionVentas = posicionVentas + 1;
  }

    let TotalVentas = sumarTotal(Ventas);
    let ventaMayor = Calcularmayor(Ventas);
    let ventamenor = Calcularmenor(Ventas);

    
    document.getElementById("parrafoSalida").textContent = "Total Ventas: " + TotalVentas + 
                                                      " /  Venta Mayor: " + ventaMayor +
                                                      " /  venta Menor: " + ventamenor ;
}
function sumarTotal(array) {
  let TotalVentas = 0;
  for (elemento of array) {
    TotalVentas += elemento;
  }
  return TotalVentas;
}
function Calcularmayor(array) {
  let mayor = array[0];
  for (numero of array) {
    if (numero > mayor) {
      mayor = numero;
    }
  }
  return mayor;
}
function Calcularmenor(array) {
  let menor = array[0];
  for (numero of array) {
    if (numero < menor) {
      menor = numero;
    }
  }
  return menor;
}
function generarContenido() {
    let elementoDiv = document.getElementById("contenido");
    let elementoParraro = document.createElement("p");
    let elementoInput = document.createElement("input");

    elementoInput.setAttribute("type", text);
    elementoInput.setAttribute("id", txtInput)
    elementoParraro.innerText = "Parrafo 1";
    elementoDiv.appendChild(elementoParraro);
    elementoDiv.appendChild(elementoInput);
}