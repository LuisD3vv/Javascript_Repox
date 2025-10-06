// funciones flecha, utilizan la declaracion como expresion de la funcion

// Arrow functions
const sumar2 = (n1,n2) => {console.log(n1+n2);}
sumar2(5,10);

// cuando son de una linea no necesitan parentesis
const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
}
// al igual si es un solo parametro tampoco necesitan
const aprendiendo2 = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript')

// sintaxis

let flecha = (parametros) => {
    //cuerpo de la funcion
};

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

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
meses.forEach(mes => {if (mes === 'Marzo')  console.log('Marzo si existe')});

// some ideal para arreglo de objetos
resultado = carrito.some(producto => producto.nombre === "Celular");

// .reduce (simplificar)
resultado = carrito.reduce((total,producto) => total + producto.precio,0);

// Filter (filtrar resultado segun una condicion)
resultado = carrito.filter(producto =>  producto.nombre !== 'Celular');

console.log(resultado);
