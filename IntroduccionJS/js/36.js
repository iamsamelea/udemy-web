const boton = document.querySelector('#boton'); //Paso 1

boton.addEventListener('click', () => { //Paso 2
    Notification.requestPermission()    //Paso 3
        .then(resultado => console.log(`El resultado es ${resultado}`) ) //Paso 4 
})


if (Notification.permission == 'granted') { //Paso 5
    new Notification('Esta es una notificación', { //Paso 6
        icon: 'img/naruto.png',
        body: 'Samuel, estoy aprendiendo'
    })
}

//Paso 1: document selecciona todo el documento y querySelector es la forma en la que se selecciona el contenido html, despues dentro del parentesis y entre comillas simples o dobles le damos el selector de id igual que en CSS del elemento html que queramos seleccionar.

//Paso 2: la sintaxis de punto como el .addEventListener le dice que al boton reaccione cuando haya un evento y entre parentesis le decimos el evento que queremos que reaccione, en este caso es 'click' y ejecutará una función.

//Paso 3: le decimos que cuando de 'click' salte el pop up de mostrar notificaciones para aceptarlas, pero se le tiene que pedir permiso primero.

//Paso 4: se le pide permiso con .then y una función, entonces se podrá ver cual es el resultado de si ha aceptado o no las notificaciones.

//Paso 5: se añade un if else, donde a if le decimos que si Notification.permission es igual a 'granted', entonces le creamos una nueva notificación.

//Paso 6: en primer lugar creamos con la palabra reservada new la nueva Notificacion y entre parentesis le damos unos valores, primero viene el titulo de la notificación y el segundo valor toma algunos objetos con algunas opciones, por ejemplo icon: (se escribe así porque esta registrado en el API de Notification) y entre comillas se le pone la ubicación de la imagen y otro valor es el body que es donde van a ir el texto de la notificacion.