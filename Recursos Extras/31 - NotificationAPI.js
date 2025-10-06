const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
});

if (Notification.permission === 'granted') {
    // crear nuestra notificacion si el acceso correcto, se le enviara este prompt personalizado
    new Notification('Esta es una notificacion',{
        icon: 'img/ccj.png',
        body: 'codigo con lissandro',
    })
}