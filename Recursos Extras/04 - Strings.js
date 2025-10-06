// String


// formas de declarar strings casteo y crear un nuevo objeto
const producto = String('Monitor de 30 Pulgadas');
// asi creamos un string con el constructor
//const producto3 = new String('Monitor de 50 Pulgadas');
console.log(producto);
// con los constructores siempre es un objeto lo que creamos
console.log(typeof producto);

// Algunos Metodos de strings
const tweet = "Aprendiendo Javascript con el curso desarrolo web completo";
const producto2 = "Monitor de HD";

// length largo de la cadena
console.log(tweet.length);
console.log(producto2);

// IndexOf menos 0 si no encontro la coincidencia y mayor a 0 si lo encontro.
console.log(tweet.indexOf("javascript")); // el indice donde se encunetra este elemento
console.log(producto2.indexOf("Tablet"));

// Includes (retorna true o false) esta palabra, se encuentra?
console.log(tweet.includes("javascript"));