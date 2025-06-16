let tiempo = 31;
const regresiva = setInterval(() => {
  let elementoAlarma = document.getElementById("audioAlarma");
  let elementotempo = document.getElementById("tempo");
  tiempo--;
  elementotempo.textContent = tiempo;

  if (tiempo <= 0) {
    clearInterval(regresiva); // parar el intervalo
    elementotempo.textContent = "Se acabo!";
    elementotempo.style.color = "red";
    elementoAlarma.play();
    alert("Game over");
  }
}, 1000);

//Mostrar en pantalla las repuestas y la fecha de hoy

function fincuest() {
  let repuesta1 = document.getElementById("pre1").value;
  let repuesta2 = document.getElementById("pre2").value;
  let repuesta3 = document.getElementById("pre3").value;
  let repuesta4 = document.getElementById("pre4").value;
  let repuesta5 = document.getElementById("pre5").value;

  const fecha = new Date(); // Crear el objeto date de donde extraeremos la fecha y hora

  /*
  let horas = fecha.getHours(); // Transformar en  y colocarle la propiedad string.padstart(2, "0")
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  */

  let dia_hoy = fecha.toLocaleDateString("es-mx"); // Fecha local

  //Si las respuestas estan vacias.
  if (!repuesta1 || !repuesta2 || !repuesta3 || !repuesta4 || !repuesta5) {
    alert("Por lo menos intentalo");
    return;
  } else {
    alert(
      " Respuesta 1 " +
        repuesta1 +
        "\n" +
        " Respuesta 2 " +
        repuesta2 +
        "\n" +
        " Respuesta 3 " +
        repuesta3 +
        "\n" +
        " Respuesta 4 " +
        repuesta4 +
        "\n" +
        " Respuesta 5 " +
        repuesta5 +
        "\n" +
        " Fecha de hoy " +
        dia_hoy
    );
  }

  //Pausar el tiempo si el boton es presionado (si las repuestas fueron introducidas)
  if (repuesta1 && repuesta2 && repuesta3 && repuesta4 && repuesta5 != null) {
    alert("Cuenta regresiva pausada");
    clearInterval(regresiva); // detener conteo cuando se contesten todas
    return;
  }
}
("\n");
//reiniciar el navegador cuando se precione el boton intentar de nuevo
function reiniciar() {
  alert("Juego Reiniciado");
  location.reload(); // se logra con esto
}
// reiniciar funcion

//Usar INNER?

//`${edad_dias} <span>Días</span>`

/*
let fecha = new Date();
Por afuera se investigo el toLocateDateString(es-mx);
*/
