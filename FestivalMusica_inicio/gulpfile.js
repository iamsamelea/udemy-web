                                                    // const { series, parallel } = require('gulp'); //Paso 1

                                                    // function css( done ) { //Paso 2
                                                    //     console.log('Compilando SASS') 

                                                    //     done(); 
                                                    // }

                                                    // function javascript( done ) {
                                                    //     console.log('Compilando Javascript')

                                                    //     done();
                                                    // }

                                                    // function minificarHTML( done ) {
                                                    //     console.log('Minificando...')

                                                    //     done();
                                                    // }

                                                    // exports.css = css; //Paso 3
                                                    // exports.javascript = javascript;
                                                    // exports.minificarHTML = minificarHTML;
                                                    // exports.default = series( css, javascript, minificarHTML); //Paso 4

                                                    // // Paso 1: se crea una variable y entre las llaves se pone la funcion {series} para seleccionar todas las funciones e ir compilandolas en orden, {parallel} hace lo mismo pero las ejecuta todas a la vez dependiendo lo rapido que se ejecute el código en cada función, se le da igual a require que lo que hace es traer la dependencia de node que queramos, en este caso gulp desde la carpeta node_modules para así poder trabajar con ella.

                                                    // //Paso 2: se crea una funcion en este caso llamada css y en los parametros le pones done, abrimos las llaves y dentro escribimos un console.log con el mensaje que queramos transmitir en la consola, para finalizar ponemos un done(); para dar la función por finalizada.

                                                    // //Paso 3: utilizamos la función exports para imprimir el mensaje en la terminal y seguida de un punto (.) le damos el nombre con el que quremos llamar a la función en la terminal, despues se pone un igual (=) y ponemos exactamente el mismo nombre que tiene la función.

                                                    // //Paso 4: este exports.default es con la función series que lo que permite és imprimir todas las funciones a la vez sin tener que poner gulp y el nombre de cada una, con solo utilizar gulp ya se van imprimiento de una en una siempre que despues del igual escribamos la función que utilizemos, tanto {series} como {parallel} y en los parametros ponemos las demás funciones que queramos ejecutar. 

const { series, src, dest, watch, parallel } = require('gulp'); //src deja comunicar archivos y dest te deja almacenar un scss compilado
const sass = require('gulp-sass'); //no va entre llaves porque solo existe esta función dentro de gulp-sass
const imagemin = require ('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');


//FUNCION QUE COMPILA SASS

const paths = { //se crea un objeto para alojar esta url y poder trabajar mas rapidamenre en las funciones de abajo paths.imagenes en vez de poner la ruta entera
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss', // * = La carpeta actual - ** = Todos los archivos con esa extensión      
}

function css() {
    return src(paths.scss) //return devuelve la ubicación, src es la funcion de de arriba de gulp y el Array es la ubicación donde está el archivo a compilar
        .pipe( sass( {
            outputStyle: 'expanded'
        }) ) //.pipe hace que se lean las funciones de arriba hacia abajo
        .pipe( dest('./build/css') ) // el ./ significa que es la carpeta actual, carpeta build y el archivo creado es un css
}

function minificarcss() {
    return src(paths.scss)
    .pipe( sass( {
        outputStyle: 'compressed'
    }) )
    .pipe( dest('./build/css') )
}

function imagenes() {
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest( './build/img'))
        .pipe( notify({ message: 'Imagen Minificada'}) );
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe( dest('./build/img') )
        .pipe( notify( {message: 'Versión webP lista'}) );
}

function watchArchivos() { //esta función compila automaticamente los cambios que le hagamos al archivo app.scss y lo cambia en el archivo app.css
    watch( paths.scss, css ); //con la funcion watch automatizamos el proceso, en el parentesis ponemos la ruta y seguido y separado por una coma (,) le ponemos la función que quremos ejecutar automaticamente cada vez que guardemos, el asterisco le indica que seleccione todos los archivos con la extensión .scss
}




exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos; //Esta función hay que ejecutarla cada vez al empezar a trabajar y al acabar tan solo con darle a la basura de la terminal ya se pararia

exports.default = series( css, imagenes, versionWebp, watchArchivos ) //Esta función se encarga de ejecutar todas las funciones de series
