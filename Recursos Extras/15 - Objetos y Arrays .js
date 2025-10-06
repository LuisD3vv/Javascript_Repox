const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

// un vector de objetos
const carrito = [
    {nombre: 'Monitor 20 Pulgadas',Precio:500},
    {nombre: 'Television 50 Pulgadas',Precio:700},
    {nombre: 'Tablet',Precio:300},
    {nombre: 'Audifonos',Precio:200},
    {nombre: 'Teclado',Precio:50},
    {nombre: 'Celular',Precio:500},
    {nombre: 'Bocinas',Precio:300},
    {nombre: 'Laptop',Precio:800},
]
// forEach
meses.forEach(function (mes){
    if (mes === 'Marzo')
    console.log('Marzo si existe');
});
// .includes, booleano
let resultado = meses.includes("Marzo");

// some ideal para arreglo de objetos, comprueba si al menos un elemento del array cumple con la condicion dentro
resultado = carrito.some(function (producto){
    return producto.nombre === "Celular";
});

// .reduce (simplificar)
resultado = carrito.reduce(function (total,producto){
    return total + producto.precio;
},0);
console.log(resultado);

// .filter (filtrar resultado segun una condicion)
resultado = carrito.filter(function (producto){
    return producto.nombre !== 'Celular';
})


