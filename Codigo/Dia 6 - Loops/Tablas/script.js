function multiplicar () {
    //*  Obtener el numero
    let elementoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTabla.value;
    let numero = Number(textoNumeroTabla); // convertir string a numero

    //* Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //* Producir y mostrar resultados
    for(x=1; x<= 10; x++) {
        // Calcularm el resultado
        let numeroResultado = numero * x;

        //* Armar string con resultado
        let textoResultado = numero + " por " + x + " es igual a " + numeroResultado;

        //* Crear un elemento de la lista
        let itemsLista = document.createElement("li"); // crear un elemento
        itemsLista.innerText = textoResultado; // texto interno
        elementoTablaMultiplicar.appendChild(itemsLista) //Agregarle un hijo, agregandolos en orden
    }
}