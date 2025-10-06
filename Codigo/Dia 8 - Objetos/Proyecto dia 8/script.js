let empleados = [];

// utilizando funcion anterior para crear objetos, antes de class
// llamada funcion constructora
function Empleado(legajo,nombre,apellido,nacimiento,cargo) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}
function limpiar () {
    document.querySelector("#legajo").value = " ";
    document.querySelector("#nombre").value = " ";
    document.querySelector("#apellido").value = " ";
    document.querySelector("#nacimiento").value = " ";
    document.querySelector("#puesto").value = " ";
}
function AgregarElemento () {
    let Legajo = document.querySelector("#legajo").value;
    let Nombre = document.querySelector("#nombre").value;
    let Apellido = document.querySelector("#apellido").value;
    let Fecha = document.querySelector("#nacimiento").value;
    let Puesto = document.querySelector("#puesto").value;

    if (!Legajo || !Nombre || !Apellido || !Fecha || !Puesto) {
        alert("Debes de llenar todos los campos solicitados.");
    }
    // solamente se deben de insertar si no estan vacios
    let empleado = new Empleado(Legajo,Nombre,Apellido,Fecha,Puesto);
    empleados.push(empleado);
    alert("El empleado se ha agreagado.")
    limpiar();
}
document.querySelector("#agregar").addEventListener('click', function(e){
    // prevenir que se reinicie el estado de la pagina y se recargue
    e.preventDefault();

});
document.querySelector("#listar").addEventListener('click', function(e){
    // prevenir que se reinicie el estado de la pagina y se recargue
    e.preventDefault();
});
function ListarElementos () {
    if (empleados.length <= 1){
        alert("No hay sufientes empleados para mostrar.");
        return 1;
    }

    let listado = '';
    for (let empleado of empleados) {
        for (let prop in empleado) {
            // listado =  a lo que ya haya mas la propiedad + el nombre y la propiedad
            listado = listado + prop.toUpperCase()  + ": " + empleado[prop] + " | ";
        }
        listado = listado + "\n";
    }
    alert(listado)
}
