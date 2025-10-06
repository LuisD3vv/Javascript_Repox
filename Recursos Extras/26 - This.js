// This

// se refiere a cada instancia del objeto y sus propios atributos
const reservacion = {
    nombre: "Lissandro",
    apellido: "Aguilar",
    total: 5000,
    pagado: false,
    // con arrow function el resultado es undefined porque se refiere a la ventana global.
    informacion: () => {
        console.log(`El cliente ${this.nombre} reservo y su cantiad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: "Lissandro",
    apellido: "Aguilar",
    total: 5000,
    pagado: false,
    // con la declaracion normal de la funcion se refiere al propio objeto que se esta ejecutando
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservo y su cantiad a pagar es de ${this.total}`);
    }
}
reservacion.informacion()