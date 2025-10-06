// Funciones

//Declaracion de la funcion

function sumar(){
    console.log(10 + 10);
}

// Llamar a la funcion
sumar()

// expresion de la funcion
const sumar2 = function () {
    console.log(3+3);
}
sumar2()

// IIFE, se autollaman y protege que se puedan utilizar en otros archivos
(function () {
    console.log("Esto es una funcion");
})();

// Javascript le dos veces el archivo, en el primer lee las variables y las declara
// y en la segunda llama a estas mismas, es por esto que solo funciona
// con funciones declaradas de la forma tradicional y no como variable.
// se le conoce como [=>hoisting<=]