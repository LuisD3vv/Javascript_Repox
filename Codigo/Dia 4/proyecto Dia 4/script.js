//creando las variables de las operaciones
// Todo en javascript es un objeto
let ultimoResultado = null; // guardar el resultado de manera global para que ambas funcines puedan utilizarla
//Funciones principales
function sumar(numero1, numero2) {
  let resultado_sum = +numero1 + +numero2;
  return resultado_sum;
}
function resta(numero1, numero2) {
  let resultado_res = +numero1 - +numero2;
  return resultado_res;
}
function multiplicacion(numero1, numero2) {
  let resultado_mul = +numero1 * +numero2;
  return resultado_mul;
}
function division(numero1, numero2) {
  let resultado_divi = +numero1 / +numero2;
  return resultado_divi;
}
function potencia(numero1, numero2) {
  let resultado_pote = Math.pow(+numero1, +numero2);
  return resultado_pote;
}
function raiz(numero2) {
  let resultado_pote = Math.sqrt(numero2);
  return resultado_pote;
}
function absoluto(numero2) {
  let resultado_abso = Math.abs(+numero2);
  return resultado_abso;
}
function randomice(numero1, numero2) {
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  let numeroAletorio =
    Math.floor(
      Math.random() *
        (Math.max(numero1, numero2) - Math.min(numero1, numero2) + 1) // utilizando min y max podemos hacer mas grande el rango de numeros
    ) + Math.min(numero1, numero2);
  return numeroAletorio;
}
// Creando la funcion cerebro
function regresar(operacion) {
  // la operacion es el parametro que recibe al presionarse un boton con el evento de abajo
  let valor1 = document.getElementById("ingreso1");
  let valor2 = document.getElementById("ingreso2");

  let resultado;

  if (operacion === "sumar") {
    resultado = sumar(valor1.value, valor2.value);
  } else if (operacion === "restar") {
    resultado = resta(valor1.value, valor2.value);
  } else if (operacion === "multiplicar") {
    resultado = multiplicacion(valor1.value, valor2.value);
  } else if (operacion === "dividir") {
    resultado = division(valor1.value, valor2.value);
  } else if (operacion === "potencia") {
    resultado = potencia(valor1.value, valor2.value);
  } else if (operacion === "raiz") {
    resultado = Math.round(raiz(valor2.value));
  } else if (operacion === "absoluto") {
    resultado = absoluto(valor2.value);
  } else if (operacion === "randomice") {
    resultado = randomice(valor1.value, valor2.value);
  }

  ultimoResultado = resultado; // en cada operacion, el resultado se sobreescibre, siendo este valor al que las otras funciones acceden para aplicarles el redondeo

  document.getElementById("resultado").innerHTML = "Ans = " + resultado;
  document.getElementById("resultado").style.color = "white";
}
// Funciones de redondeo del resultado (Tomando la variable global ultimoResultado )
function redondo(resultado) {
  let redondito = Math.round(resultado);
  // return Math.round(resultado);
  return redondito;
}
function piso(resultado) {
  let pisito = Math.floor(resultado);
  // return  Math.floor(resultado)
  return pisito;
}
function techo(resultado) {
  let techito = Math.ceil(resultado);
  // return  Math.ceil(resultado)
  return techito;
}
function opresult(opresult) {
  if (ultimoResultado === null) return; // Si no se ha hecho ninguna operacion(que no se haya gurdado ningun dato)

  let resultado;

  if (opresult == "redondo") {
    resultado = redondo(ultimoResultado); //le envia el valor actual de la variable a la funcion y la regresa con su respectivo cambio
  } else if (opresult == "piso") {
    resultado = piso(ultimoResultado);
  } else if (opresult == "techo") {
    resultado = techo(ultimoResultado);
  }
  document.getElementById("resultado").innerHTML = opresult + " " + "= " +  resultado;
  document.getElementById("resultado").style.color = "white";
}
// Opereaciones para el resultado
let botonRound = document.getElementById("botonRo");
botonRound.addEventListener("click", function () {
  opresult("redondo");
});
let FuncionPiso = document.getElementById("botonPiso");
FuncionPiso.addEventListener("click", function () {
  opresult("piso");
});
let Funciontecho = document.getElementById("botontecho");
Funciontecho.addEventListener("click", function () {
  opresult("techo");
});
// estas funciones, al presionarlas, se les envia a la funcion regresar, segund la elegida, se ejecuta el bloque de codigo y opertaciones correspondintes
let botonSuma = document.getElementById("botonSuma");
botonSuma.addEventListener("click", function () {
  // utilizando addEventListener para cargar la funcion suma cuando sea presionado su simbolo
  regresar("sumar");
});
let botonResta = document.getElementById("botonResta");
botonResta.addEventListener("click", function () {
  regresar("restar");
});
let botonMultiplicar = document.getElementById("botonMulti");
botonMultiplicar.addEventListener("click", function () {
  regresar("multiplicar");
});
let botonDividir = document.getElementById("botonDivi");
botonDividir.addEventListener("click", function () {
  regresar("dividir");
});
/*OPERACIONES EXTRAS*/
let botonPotencia = document.getElementById("botonPot");
botonPotencia.addEventListener("click", function () {
  regresar("potencia");
});
let botonRaiz = document.getElementById("botonRaz");
botonRaiz.addEventListener("click", function () {
  regresar("raiz");
});
let botonAbsoluto = document.getElementById("botonAbs");
botonAbsoluto.addEventListener("click", function () {
  regresar("absoluto");
});
let botonRandom = document.getElementById("botonRand");
botonRandom.addEventListener("click", function () {
  regresar("randomice");
});
/**addEventListener es una funcion que se usa para asociar un evento con una accion, como una funcion que se ejecute cuando el evento ocurra
  element.addEventListener("evento", función);

  el evento es el tipo de accion que queremos escuchar, un clik, un cambio de texto, etc, en este caso estamos usando click, (presionar el elemento)

  tambien existen otras comunes como lo son son keypress y submit ( que se ejecuta cuando una tecla sea presionada, y la otra cuando un formulario sea enviado)
 */

//El producto propios era con numeros del 0 al 9