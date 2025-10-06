// las promesas vienen con dos parametros por defecto, resolve y reject
const usuarioAutenticado = new Promise((resolve,reject) => {
    const auth = true;
    if (auth) { // si es verdad
        resolve("usuario autenticado"); // el promise se cumple(se ejecuta lo que sigue)
    }
    else {
        reject("No se pudo inciar sesion");//no se cumple
    }
})

// si el usuario esta autenticado, (depeniendo del promise, dara el resultado, o dara el error abajo)
usuarioAutenticado
    .then(resultado => console.log(resultado)) // resolve
    .catch(error => console.log(error)); // reject

// En los promises existen 3 valores
// Pending: No se ha cumplido, esta en espera.
// fullfilled : Ya se cumplio.
// Rejected: Se ha rechazado o no se puede cumplir.