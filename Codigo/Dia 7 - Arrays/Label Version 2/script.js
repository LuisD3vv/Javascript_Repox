function extraerNumeroDesdeElemento(elemento) {
  let miElemento = document.getElementById(elemento);
  let mitexto = miElemento.value;
  let miNumero = Number(mitexto);
  return miNumero;
}
function calcular() {
  let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
  // Crear array de elementos, obtenidos de la llamada a la funcion que extrae el numero
  let Ventas = [] // Metemos los elementos por fuera
    Ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    Ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    Ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    Ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    Ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
    Ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");


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
