/*
* Los arrays son variables que pueden almacenar mmultiples valores
* */

array = ["Leonardo","Michaelangelo","Donatello","Raphael"];

// Pueden contener diferentes tipos de datos

// se pueden definir con const y let

let lotteryNumbers = [13, 36, 45, 57, 67, 14];
// como en este ejemplo
const lettersAndNumbers = ["a", "b", "c", 1, 2, 3];


// Para acceder a los elementos dentro de ella, se utilizan los indices

console.log(lettersAndNumbers[0]) // 12
console.log(lotteryNumbers[1]) // 36
console.log(lotteryNumbers[2]) // 45

// Los indices comienzan por el cero

lettersAndNumbers[0] = 12;

// asi los podemos editar

let nombres = ['luis','eduardo','william'];

nombres[2] = "Eduardo";


// tambien funciona para crear indices que no existen

nombres[3] = "Kirby";


// Y que hacemos cuando queremos saber cuantos elementos hay?


const testScores = [78, 96, 100, 88, 85, 81, 79];
const numberOfScores = testScores.length;

console.log(numberOfScores); // Output: 7

// esto nos sirve para iterar sobre el y tener como linmite su propio tamanio sin pasarnos

const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

for (let i = 0; i < musicNotes.length; i++) {
    //cuando se usa arrays con loops, es posible que siceda un error llamado
    // of-by-one, el cual pasa cuando estamos tratando de acceder a un index
    console.log(musicNotes[i]);
}


// loop de multiplicacion

let multiple = 5;
let number = [0,1,2,3,4,5,6,7,8,9];
let i = 0;

for(i;i< number.length;i++) {
    // utilizando template backtics
    console.log(`${multiple} por ${number[i]} =  ${multiple * number[i]}`);
}

// anadir elementos
let myArray = [1,2,3,4,5];

// eliminar elemento en tal indice
myArray.shift(0);
// elimina el ultimo, y su valor puede ser almacenado en un variable
myArray.pop(6);
// al inicio
myArray.unshift(4);
// al final, puede recibir multiples valores
myArray.push(0);
myArray.push(6,7);
myArray.reverse();
myArray.slice(1,2);
myArray.toLocaleString();

console.log(myArray);


// indexof e includes, son dos metodos de los arrays


const stories = [
    "Sorcerer's Stone",
    "Chamber of Secrets",
    "Prisoner of Azkaban",
    "Goblet of Fire",
    "Order of the Phoenix",
    "Half-Blood Prince",
    "Deathly Hallows"
];

// conocert el indice de un elemento, cabe recalcar que si hay muchos elementos con el msimo nombre regresa la primera coincidencia
console.log(stories.indexOf("Half-Blood Prince")); // Output: 5

// y si queremos saber si contiene algun elemento?

let myArray = [1, 2, 3];

// con includes podemos saber, este regreesa un valor booleano
console.log(myArray.includes(3));
console.log(myArray.includes(42));


// true
// false

// Ejemplo bien bellaco

const characters = [
    "The Wally Watchers",
    "Wilma",
    "Fritz",
    "Wizard Whitebeard",
    "Odlaw",
    "Waldo",
    "Woof"
];

let waldoIndex;
if (characters.includes("Waldo")) {
    waldoIndex = characters.indexOf("Waldo");
    console.log(`Found Waldo at index ${waldoIndex}!`);
}
else{
    console.log("Not found");
}

function media(viewsArray) {
    // sort modifica el array original, es un algoritmo de ordenamiento.
    let sortedStats = viewsArray.sort((a,b) => a-b);
    // este no, este solo es a la impresion
    //let sortedStats = [...viewsArray].sort((a,b) => a-b);
    let middleIndex = Math.floor(sortedStats.length / 2);
    if (sortedStats.length % 2 !== 0) {
        // impar → devolver el del medio
        return sortedStats[middleIndex];
    } else {
        // par → promedio de los dos del medio
        return (sortedStats[middleIndex - 1] + sortedStats[middleIndex]) / 2;
    }
}

//
/*
* eso es necesario porque por defecto sort convierte los elemento en string
* es una comparacion comparadora que sort usa internamente..
*
* Si el resultado de a - b es:

* osea 3-5 = -2, entonces 3 se queda ahi. si fuera 5-3 seria 2, entonces se queda 3,5
🔹 Negativo → a va antes que b

🔹 Cero → no se cambian

🔹 Positivo → b va antes que a
*
*
* (a,b) => a - b es ascendente
* (a,b) => b- a es descendente
* */
/*

| Comparación | Resultado   | Orden final          |
| ----------- | ----------- | -------------------- |
| `a - b`     | Ascendente  | \[pequeño ➡️ grande] |
| `b - a`     | Descendente | \[grande ➡️ pequeño] |

*/


// Definir si una palabra es un palindromo

function isPalindrome(word){
    // normalizar la palabra en minusculas
    let palabra = word.toLowerCase();
    // Convirtiendo la palabra original en un array e invirtiendola, como vemos, la separamos por las comillas, las volteamos y las volvemos a unir con join("")
    let volteada = palabra.split("").reverse().join("");
    // separamos la palabra en un array y depues unimos con join
    let original = palabra.split("").join("");

    for(let i=0;i< palabra.length; i++) {
        // Comparacion
        if(original == volteada) {
            return true;
        }
        else {
            return false;
        }
    }

}

console.log(isPalindrome("oso"));