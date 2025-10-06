// Condicionales

const puntaje = 1000;

if (puntaje === 1000) {
    console.log('el puntaje es mil');
} else {
    console.log('el puntaje no es mil');
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insufucientes');
}
const rol = "ADMIN";

if (rol === "ADMIN") {
    console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
    console.log("Tienes acceso parcial");
} else {
    console.log("No tienes acceso");
}