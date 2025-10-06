//  podemos declarar parametros por default
function sumar(numero1 = 0, numero2 = 0){ // parametros, dentro de la funcion
    // los convertimos en variables internas
    console.log(numero1 + numero2);
}

sumar(6,8) // Argumentos o valores reales

const sumar2 = function (n1,n2) {
    console.log(n1+n2);
}
sumar2(5, 10);
