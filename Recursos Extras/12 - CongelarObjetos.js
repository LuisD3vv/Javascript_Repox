// Uso estricto para segur buenas practicas
"use strict"; // nos resaltara errores de sintaixs y de declaracion

// Objeto
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}
// .freeze hace que el objeto sea inmodificable
Object.freeze(producto); // este no permite ni agregar,eliminar o modificar
// .seal si permite modificar los elementos existentes pero no eliminar ni agregar
Object.seal(producto);
// conocer si el objeto esta congelao
console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));

producto.imagen = 'Imagen.jpg';

console.log(producto)