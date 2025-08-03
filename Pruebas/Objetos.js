// Los objetos son utilizados par almenar multiples variables
// usualemente sepoarados por key:value

object = {
    key1: value1,
    key2: value2,
    key3: value3
}


// Un ejemplo de uso sin clases y con multiples variables

// Pizza 1

const pizzaTopping = "Cheese 🧀";
const pizzaType = "Pan";
const pizzaSlices = 8;
const pizzaPrice = 12.99;

// Pizza 2

const pizza = {
    topping: "Pepperoni 🍕",
    type: "Hand-tossed",
    slices: 12,
    price: 14.99
}

console.log(pizza);

// como podemos ver, pizza contiene 4 propiedades. y podemos
// utilizar la notacion punto

console.log(pizza.price);
console.log(pizza.type);


const car = {
    model: "Camaro",
    year: 2025,
    color: "black",
    used: false
};

if(car.used == false){
    console.log(`I'm looking for a ${car.year} ${car.model} that is new.`);
}
else {
    console.log(`I'm looking for a ${car.year} ${car.model} that is used.`);
}

// Modificar la propiedad existente

const user = {
    username: "@emmachamberlain",
    location: "Los Angeles, CA",
    followers: 15725078,
    following: 3,
    verified: false
};

// cambiando las propieades
user.verified = true;
user.location = "🌐";

console.log(user);


pokemon = {
    name: "Pikachu",
    type: "Electric ⚡️",
    level: 55,
}

pokemon["name"] = "Ivysur";
pokemon["type"] = "Grass";
pokemon["isCaught"] = true;
pokemon.level = 90;
// con dotacion de punto

pokemon["evolution"] = false;
console.log(pokemon)

// Los objetos tambien pueden contener funciones, llamadas metodos


const phone = {
    model: "iPhone 11 Pro Max",
    brand: "Apple",
    version: 11.6,
    owner: "John Appleseed",
    // aqui esta el metodo rignote
    ringtone () {
        console.log("Ring, ring! Ring, ring! 📲")
    },
    encender: function () {
        console.log("Telefono prendido")
    }
}

phone.ringtone();
// Output: Ring, ring! Ring, ring! 📲


// Write code below 💖

const pig = {
    name:"willy",
    type: "pig",
    age: 2,
    makeSound(){
        console.log(`${pig.name} is a ${pig.age} old ${pig.type} that goes oing oing`);
    }
}

const sheep = {
    name:"shoun",
    type: "sheep",
    age: 5,
    makeSound(){
        console.log(`${sheep.name} is a ${sheep.age} old ${sheep.type} that goes beeep!`);
    }
}

const dog = {
    name:"rocko",
    type: "dog",
    age: 6,
    makeSound(){
        console.log(`${dog.name} is a ${dog.age} old ${dog.type} that goes woof!`);
    }
}

pig.makeSound();
dog.makeSound();
sheep.makeSound();