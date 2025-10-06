// Objetos
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}
// se definen por la sintaxis de que van dentro de unas llaves y tinen sus propias variables

// Sintaxis de punto (Dot notation)
console.log(producto.nombreProducto) // "Monitor de 20 pulgadas"
console.log(producto.precio) // 300
console.log(producto.disponible) // true

// sintaxis de corchetes
console.log(producto['disponible'])

// Agregar nuevas propiedades (si estas no existen)
producto.imagen = 'Imagen.jpg';

// Eliminar propiedades
delete producto.disponible;
console.log(producto)