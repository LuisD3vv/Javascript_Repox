function CalcularLitros() {
    var elementostk = document.getElementById("textoKm");
    var textoKm = elementostk.value;
    var cantTk = parseInt(textoKm)

    let canLitros = cantTk / 8.8;

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + Math.ceil(canLitros) + " Litros de Gasofa";
}// con ceil redondearemos hacia arriba.