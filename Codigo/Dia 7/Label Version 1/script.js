function extraerNumeroDesdeElemento(elemento) {
  let miElemento = document.getElementById(elemento);
  let mitexto = miElemento.value;
  let miNumero = Number(mitexto);
  return miNumero;
}
function calcular() {
  let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
  // Crear array de elementos, obtenidos de la llamada a la funcion que extrae el numero
  let arrayVentas = [
    (ventas1 = extraerNumeroDesdeElemento("ventasTienda1")),
    (ventas2 = extraerNumeroDesdeElemento("ventasTienda2")),
    (ventas3 = extraerNumeroDesdeElemento("ventasTienda3")),
    (ventas4 = extraerNumeroDesdeElemento("ventasTienda4")),
    (ventas5 = extraerNumeroDesdeElemento("ventasTienda5")),
    (ventas6 = extraerNumeroDesdeElemento("ventasTienda6"))
  ];
  let TotalVentas = 0;
  for (i = 0; i < arrayVentas.length; i++) {
    if (arrayVentas[i]== 0) {
      alert("Ingresar datos completamente");
      return;
    }
    TotalVentas += arrayVentas[i];
  }
  document.getElementById("parrafoSalida").innerHTML =
    "Total Ventas: " + TotalVentas;
}


