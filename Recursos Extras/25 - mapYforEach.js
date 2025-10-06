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

// forEach se ejecuta por cada elemento del arreglo
// util para mostrar en pantalla
carrito.forEach(producto => console.log(`${producto}`));


// Map crea un nuevo arreglo con los resultados a la llamada a la funcion indicada aplicados a cada uno de sus elementos
// en el ejemplo de abajo crea un nuevo array a partir de los nombres de l array productos
carrito.map(producto => producto.nombre);