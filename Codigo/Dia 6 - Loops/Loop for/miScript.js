function calcular() {
    // Obtener el numero
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla  = elementoTextoTabla.value;
    let numeroTabla  = Number(textoNumeroTabla);

    //Obtener tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //Producir y mostrar resultados
    for(x = 1; x <=10; x++) {
        // Calcular el resultado
        let numeroResultado = numeroTabla * x;
    
        // Armar string con resultado
        let textoResultado = numeroResultado + " por " + x + " es igual a " + numeroResultado

        //Crear un elemento  de la lista
        //iterar sobre cada uno de los list li
    }
}