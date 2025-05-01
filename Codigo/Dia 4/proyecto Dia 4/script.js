//creando las variables de las operaciones
// Todo en javascript es un objeto

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
        (Math.max(numero1, numero2) - Math.min(numero1, numero2) + 1)
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

  document.getElementById("resultado").innerHTML = "= " + resultado;
  document.getElementById("resultado").style.color = "Black";
}

// let botonRound = document.getElementById("botonRo");
// botonRandom.addEventListener("click", redondear() )

// let FuncionPiso = document.getElementById("botonPiso");
// botonRandom.addEventListener("click", piso())

// let Funciontecho = document.getElementById("botontecho");s
// botonRandom.addEventListener("click", techo());

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



/*Finales*/

/**addEventListener es una funcion que se usa para asociar un evento con una accion, como una funcion que se ejecute cuando el evento ocurra
  element.addEventListener("evento", función);

  el evento es el tipo de accion que queremos escuchar, un clik, un cambio de texto, etc, en este caso estamos usando click, (presionar el elemento)

  tambien existen otras comunes como lo son son keypress y submit ( que se ejecuta cuando una tecla sea presionada, y la otra cuando un formulario sea enviado)
 */

//El producto propios era con numeros del 0 al 9

/*
  Tambien se pueden cambiar los atributos de una etiqueta por otros,
  es decir un src, de una imagen al hacer click en ella

  let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/firefox-icon.png") {
    miImage.setAttribute("src", "images/firefox2.png");
  } else {
    miImage.setAttribute("src", "images/firefox-icon.png");
  }
};

  */
