const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];
const captinsArray = [
    "Cuando abres el refri por quinta vez esperando que haya comida nueva.",
    "Ese momento incomodo cuando dices 'adios' y los dos caminan hacia la misma direccion.",
    "Cuando pones la alarma a las 7:00... 7:05... 7:10... y sigues sin levantarte.",
    "Yo: solo vere un capítulo. Tambien yo: temporada completa en 12 horas.",
];

let randomImage = document.getElementById("random-meme");
let heading = document.getElementById("random-caption");

let boton = document.getElementById("generator-button");

boton.addEventListener("click", function() {
    let random1 = Math.floor(Math.random() * memeArray.length);
    let random2 = Math.floor(Math.random() * captinsArray.length);
    randomImage.src = memeArray[random1];
    heading.innerText = captinsArray[random2];
})