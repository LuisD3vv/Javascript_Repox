// Async / await
function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes');

        setTimeout(() => {
            resolve('Descargando clientes');
        },5000); // funcion que genera una cuenta regresiva (el parametero es en milisegundos)

    });
}
function descargarUtimosPedido() {
    return new Promise(resolve => {
        console.log('Descargando pedidos');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        },3000);

    });
}
// basicamente es esperar a que se cumpla una promesa y de esa manera generar una salida

async function app() {
    try {
        // el codigo aqui adentro de ejecuta solo cuando este completado
        //const clientes = await descargarNuevosClientes();
        //const pedidos = await descargarUtimosPedido();
        //console.log(clientes);
        // asi se ejecutan al mismo tiempo y se pueden hacer multiples llamados al mismo tiempo, con Promise.all(una y otra al mismo tiempo)
        const resultado = await Promise.all([descargarNuevosClientes(),descargarUtimosPedido()]);
        // sintaxi await Promise.all([promesas aqui, con parentesis])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}


app();

