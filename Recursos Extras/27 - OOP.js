// POO

/* Object literal lo creamos nosotros */

const producto = {
    nombre: "telefono",
    precio: 500
}
// Object Constructor mas moderno, una funcion cronstructora

function Producto(nombre,precio,descripcion) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
}

// Crear funciones que solo se utilizan en un objeto en especifico
// basicamente metodos rusticos
Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
}

function Cliente(nombre,apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
// Crear funciones que solo se utilizan en un objeto en especifico
Cliente.prototype.formatearCliente = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.apellido}`
}

// creacion del objeto con el constructor, aqui si debemos de usar new, porque estamos creando instancias de objetos
const producto2 = new Producto('Monitor Curvo 49"',800,'Monitor curvo Haisense');
const producto3 = new Producto('Laptop',600,'Laptop msi');

const cliente = new Cliente("Lissandro","Aguilar");

console.log(producto2.formatearProducto());
console.log(producto3);



// basicamente son funciones que solo se ejecutan para un objeto especifico