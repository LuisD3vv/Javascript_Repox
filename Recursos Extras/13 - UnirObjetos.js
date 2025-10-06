const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}
const medidas = {
    peso: '1kg',
    medida: '1m'
}

// Unir objetos sin modificar originales, los tres puntos indican que se va a copear

const nuevoProducto = {...producto,...medidas}