// Metodos de propiedad, es decir funciones que funcionan dentro de un objeto y tienen logica dentro de el mismo
// basicamente metodos

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el ID ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function (nombre){
        console.log(`Creando Playlist: ${nombre}`);
    },
    ReproducirPlaylist: function (nombre){
        console.log(`Reproduciendo Playlist: ${nombre}`);
    }
}
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la  cancion con el ID ${id}`);
}

reproductor.reproducir(2334)
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Rock pop");
reproductor.crearPlaylist("Rock pop");