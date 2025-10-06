// switch, nos permite evaluar casos segun la condicion dentro de los parentesis

const metodoPago = 'bitcoin';

switch (metodoPago) {
    case "Tarjeta":
        console.log("Pagaste con tarjeta");
        break;
    case 'cheque':
        console.log("el usuario va a pagar con cheque, se revisaran los fondos primero");
        break;
    case 'efectivo':
        console.log("pagaste con efectivo");
        break;
    default:
        console.log("A la verga no has pagado");
        break;

}