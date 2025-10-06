function sumar(n1,n2) {
    return n1+ n2;
}

// el resultado se puede guardar en una variablea
const resultado = sumar(9,3);
console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

// Template strings
console.log(`Total con impuestos es $${totalAPagar}`);