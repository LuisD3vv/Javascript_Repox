async function obtenerEmpleados() {
    const archivo = 'empleados.json';
    // fetch(archivo) // url o archivo
    //     .then( resultado => resultado.json())
    //         // 200 exitoso
    //         // 404 no lo encotro
    //     .then(datos => {
    //         //console.log(datos);
    //
    //         const { empleados } = datos;
    //         console.log(datos);
    //     })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados()

/*
*
*
console.table(empleados);
empleados.forEach(empleado => {
console.log(empleado.id);
console.log(empleado.nombre);
console.log(empleado.puesto);})
* */