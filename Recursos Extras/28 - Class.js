// Clases

// nueva forma de definir una clase y sus propiedades, como podemos ver
// se esta usando this, que hace referencia a cada objeto que tenga los mismo atributos
class Producto {
    constructor(nombre, precio,descripcion) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    }

    // metodos de la clase
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`
    }
    ConocerPrecio(){
        return `El precio de ${this.nombre} es de ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo 49"',800,'Monitor curvo Haisense');
const producto3 = new Producto('Laptop',600,'Laptop msi');

// Para practicar la Herencia, se utiliza el metodo (extends), para tener todos los atributos de el padre
class Libro extends Producto {
    constructor(nombre, precio,isbn) { // aqui podemos los atributos
        super(nombre,precio); // con super(), evitamos repetir el constructor y solamente traemos el nombre del atributo de la clase padre.
        this.isbn = isbn;
    }
    // Metodo
    formatearProducto(){
        return `${super.formatearProducto()} su isbn ${this.isbn}`
    }
}


const libro = new Libro("JavaScript",120,990-9911990);
console.log(producto2);
