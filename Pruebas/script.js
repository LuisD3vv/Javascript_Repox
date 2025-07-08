// Funcion para desplegar contenido
function toggleCard(cardElement) {
  cardElement.classList.toggle("expanded");
}
// Practicar como verga se usaba el temporizador
function crear_tarea() {
  let padre = document.getElementById("tareas");
  let contenedor = document.createElement("section");
  contenedor.className = "task_option";
  padre.appendChild(contenedor);
}
// Utilizando una funcion flecha para poder realizar la cuenta regresiva
let contador = document.getElementById("tempo_object").value;
function restar_tiempo() {
  let tiempito = setInterval(() => {
    let tiempo = document.getElementById("time");
    contador--;
    tiempo.textContent = String(contador).padStart(2,'0');
    if (contador <= 0) {
      clearInterval(tiempito);
      alert("Se acabo a la puta verga");
    }
  }, 1000);
}