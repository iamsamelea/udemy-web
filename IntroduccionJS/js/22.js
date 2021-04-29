// METODOS DE PROPIEDAD
//Haciendo un reproductor de música
const reproductor = {                   //Aqui creas una variable
    reproducir : function(id) {         //Aqui creas las funciones del reproductor
        console.log(`Reproduciendo canción con el número de id: ${id}`)
    },
    pausar : function() {
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre) {
        console.log(`Reproduciendo la Playlist de: ${nombre}`)
    }
}

reproductor.borrarCanción = function(id) {              //Estos es una función del reproductor pero se situa fuera de la variable y crea una función directamente
    console.log(`Borrando la canción: ${id}`)
}


reproductor.reproducir(2351);
reproductor.pausar();
reproductor.crearPlaylist("BreakBeat");
reproductor.borrarCanción(20);