// Objetos
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Forma anterior
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

// Destructuring crea la variable y toma el valor, el nombre debe ser el mismo nombre dentro del objeto
// es decir se crea una nueva variable con el mismo nombre y datos que estan dentro del objeto

const {precio,nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);
console.log(producto);

