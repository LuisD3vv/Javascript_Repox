function anillo(){
    let piedra  = document.getElementById("stone");

    //  generar un numero aleatorio
    let random  = Math.floor(Math.random() * 9 ) + 1;

    if(random == 1) {
        piedra.style.backgroundColor = "red";
    }
    else if(random ==2 ) {
        piedra.style.backgroundColor = "orange";
    }
    else if(random ==3) {
        piedra.style.backgroundColor = "yellow";
    }
    else if(random ==4) {
        piedra.style.backgroundColor = "green";
    }
    else if(random == 5) {
        piedra.style.backgroundColor = "blue";
    }
    else if(random ==6) {
        piedra.style.backgroundColor = "#4169e1";
    }
    else if(random == 7) {
        piedra.style.backgroundColor = "#00008b";
    }
    else if(random == 8) {
        piedra.style.backgroundColor = "purple";
    }
    else if(random == 9) {
        piedra.style.backgroundColor = "black";
    }
    else {
        console.log(piedra);
    }
}

