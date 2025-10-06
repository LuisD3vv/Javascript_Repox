// Esta es la sintaxis basica de un objeto

let automovil = {
    marca: "Ford",
    modelo: "Fiesta",
    anio: 2015,
    arrancar() {
        console.log('En marcha');
    }
}

//Podemos llamarlo por cualquiera de sus atributos
//mediante un punto
console.log(automovil.anio);
console.log(automovil.modelo);
console.log(automovil.marca);
console.log(automovil.arrancar);

// o tambien

console.log(automovil['anio']);
console.log(automovil['modelo']);
console.log(automovil['marca']);
console.log(automovil['arrancar']);

// Otro ejemplo

let polo = {
    marca:"Lacoste",
    color: "Azul",
    talle: "L",
    fabricar() {
        console.log("Polo fabricado");
    }
};

// ejemplo con un for in

for (let propiedad in polo) {
    console.log(`${propiedad}= ${polo[propiedad]}`);
}