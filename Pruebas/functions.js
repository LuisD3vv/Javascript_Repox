// Las funciones osn bloques de codigo reutiizables
// que hacen una tarea en especifico.

function helloWorld() {
    console.log("Hello, World!");
}

helloWorld();

// comunmente se escriben en camelCase


// return regresa el valor interno de la funcion pudeindolo
// utilizar en otra funcion
function helloWorld() {
    return "Hello, World! 🌎";
}

// pero, necesitamos imprimir la funcion
console.log(helloWorld());




function countdown(){
    let i = 0;

    while (i <10) {
        console.log(i);
        i++;
    }
    console.log("Blast off!!")
}

countdown()


// Parametros, van entre los parentesios y pueden ser cualquier tipo de dato

function greetings(name) {
    console.log("Hi! My name is " + name + ".");
}

// este se llama argumento, si no pasamos nada, se convierte en undefined
greetings("Marshall");

//Parameters are used when defining a function.
//Arguments are used when calling a function.


// Las funciones tienen algo llamado alcance(scoope)
// son variabnles que si se definen dentro de ella, solo viven en
// el momento de ejecucion de la variable

// global scoope
function add(x, y) {
    // local scoope
    let answer = x + y;
    return answer;
}

console.log(answer);