let myNumber = 403
let binary = "";

// Como podemos ver en este ejemplo, estamos trasnformando numeros base 10 a base 2, una cosa a tomar en cuenta es como se anaden elementos al incio
// se ponen como en el ejemplo, variable = valor + variable, si fuera al reves en este contextolos numeros no significarian nada realmente, solo se pegaria uno detgras del otro
// sin formar nada nuevo

while(myNumber > 0) {
    let resto = myNumber % 2;
    if(resto == 0){
        // prepend(anteponer)
        binary = "0" + binary; // Prepend otro
    }
    else if(resto == 1) {
        binary = "1" + binary; // Prepend'
    }

    myNumber = Math.floor(myNumber / 2);
}
console.log(binary)




