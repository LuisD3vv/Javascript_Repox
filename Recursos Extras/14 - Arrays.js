// Arreglos / arrays

// sintaxis arreglo
const numeros = [10.20,30,40,50,]; // se declara con corchetes, los elementos estan indentados desde el 0
console.log(numeros[1]); // 30

// util para arreglos, muestra el contenido de el array en forma de tabla
console.table(numeros)

// con constructor
const meses = new Array( ['Enero','Febrero','Marzo','Abril','Mayo']);
console.table(meses)
// declaracion manual, como vemos puede contener elementos de diferente tipo de dato, incluso otros arrays
const arreglo = ["Hola",10,true,"si",null,"hola",{Nombre:"luis",Apellido:"Aguilar"},[1,2,3]];
console.table(arreglo)

// Conocer el largo de un arreglo(cantidad de elementos)
console.table(numeros.length)

// metodo propio para recorrer un array y aplicar una funcion a cada elemento dentro de el
numeros.forEach( function (numeros){
    console.log(numeros);
})

// agregar al final del arreglo
numeros.push(60,70,80,90);
// agregar al inicio del arreglo
numeros.unshift(-10,-20,-30);


meses.pop(); //  elimina el ultimo elemento
meses.shift();// elimina el primer elemento
meses.splice(2,1); // eliminar a partir de cierto punto, apartir de aqui, elimina tantos

// rest Operator o spread operator sin modificar el arreglo original, como dijimos le agrega un elemento nuevo
// al array al inicio al final pero sin modificar el original, [...arrayoriginal,'nuevoElemento']

const nuevoArrreglo = [...meses,'Junio'];
const nuevoArrreglo2 = ['Junio',...meses];

