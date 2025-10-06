// Iteradores (Loops)

// FOR

// variable, condicion, incremento o decremento
for(let i=1; i < 100; i++) {
    if (i %2===0) {
        console.log(`El numero ${i} es par`);
    }
    else {
        console.log(`El numero ${i} es impar ${i}`);
    }
}
// WHILE mientras esto seea verdad o mentira
let i = 0;

while (i < 10) {
    console.log(`Despegue en ${i}`);
    i++;
}
console.log('despeguen');

// Do while / has esto mientras esto sea verdad o mentira, este
// itera almenos una ves, aunque la condicion no sea verdad.
let k = 10;

do {
    console.log(`Despegue en ${k}`);
    k--;
} while(k > 0);
console.log('despeguen!!');

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
// iteramos sobre el largo del arreglo
for(let i=0; i<carrito.length; i++) {
    console.log(carrito[i].nombre);
}
// tambien funciona con decremento

for (let i = carrito.length; i > 0; i-- ) {
    console.log(carrito[i].nombre);
}