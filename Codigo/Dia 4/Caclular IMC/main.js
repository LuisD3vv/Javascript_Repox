// Estoy listo para recibir los putos datos

function calcular() {
  let resultado;
  // Variables del usuario.
  let peso = document.getElementById("peso");
  let altura = document.getElementById("altura");
  //Transformar los datos a numero
  altura = parseFloat(altura.value);
  peso = parseFloat(peso.value);

  resultado = peso / Math.pow(altura, 2);

  if (!resultado) {
    let Elementoresultado = (document.getElementById("result").innerHTML =
      "Ingresa un valor valido");
    return 1;
  }

  let Elementoresultado=resultado.toFixed(2); // Redondondear a dos digitos.
  document.getElementById("result").innerHTML = "Tu IMC es " + Elementoresultado;

  let imagenCurseada = document.querySelector("img");
  let miSrc = imagenCurseada.getAttribute("src");
  if (resultado > 30) {
    imagenCurseada.setAttribute("src", "img/NosuboGordas.jpg");
  } else if (resultado > 25 && resultado < 29.99) {
    imagenCurseada.setAttribute("src", "img/ñoñobig.png");
  } else if (resultado > 18.5 && resultado < 24.9) {
    imagenCurseada.setAttribute("src", "img/elchavito.jpg");
  } else if (resultado < 18.5) {
    imagenCurseada.setAttribute("src", "img/donRamonconanemia.jpg");
  } else {
    imagenCurseada.setAttribute("src", "img/chingaleChabito.jpg");
  }
}