//querySelector

const heading = document.querySelector(".header__texto h2"); //Paso 1
heading.textContent = 'Nuevo Heading'; //Paso 2

console.log(heading);

//Paso 1: creamos una constante y le ponemos que sea igual a document(la palabra document selecciona todo lo que hay en el documento html) entonces le ponemos un punto porque document es un objeto y queremos seleccionar algo de document. Ponemos querySelector para seleccionar 0 elementos o 1 máximo, entonces entre los parentesis abrimos comillas y ponemos igual que en la sintaxis de CSS la etiqueta que queremos cambiar, ya sea con la clase o con Id, en este caso ha sido con la clase y la etiqueta html del elemento.

//Paso 2: seleccionamos la constante(variable) que queremos modificar y le ponemos un punto para seleccionar que queremos modificar, en este caso es textContent y le pones que sea igual a el texto que quermos poner nuevo como Array. Así se modifica un texto o lo que queramos de un solo elemento mediante JS.






//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); //Paso 1
enlaces[0].textContent = 'Nuevos Enlaces para modificar con querySelectorAll'; //Paso 2
enlaces[0].classList.add('nueva-clasedesdeJS'); //Paso 3
enlaces[0].classList.remove('navegacion__enlace'); //Paso 4

console.log(enlaces[0]); 


//Paso 1: creamos una constante y le ponemos que sea igual a document(la palabra document selecciona todo lo que hay en el documento html) entonces le ponemos un punto porque document es un objeto y queremos seleccionar algo de document. Ponemos querySelectorAll para seleccionar 0 elementos o todos los que le indiquemos con la clase o la etiqueta en la que queramos trabajar, entonces entre los parentesis abrimos comillas y ponemos igual que en la sintaxis de CSS la etiqueta que queremos cambiar, ya sea con la clase o con Id, en este caso ha sido con la clase y la etiqueta html del elemento.

//Paso 2: seleccionamos la constante(variable) que queremos modificar y al poder seleccionar muchas variables entre corchetes empezando desde la posición 0 le pones el número o números de las que queremos modificar entonces despues le ponemos un punto para seleccionar que queremos modificar, en este caso es textContent y le pones que sea igual a el texto que quermos poner nuevo como Array. Así se modifica un texto o lo que queramos de un solo elemento mediante JS.

//Paso 3: con classList.add('') le agregamos una nueva clase desde JS, para agregar la clase no hace falta poner punto como en el paso 1, ya que JS ya entiende que se está agregando una clase nueva.

//Paso 4: con classList.remove('') le eliminamos una nueva clase desde JS, para eliminar la clase no hace falta poner punto como en el paso 1, ya que JS ya entiende que se está eliminando la clase indicada.







//getElementById //Este metodo ya no se utiliza
const heading2 = document.getElementById('heading'); //Paso 1
heading2.textContent = 'heading modificado por getElementById';
console.log(heading2);


//Paso 1: en el parentesis solo hay que poner el nombre del id sin el simbolo # delante porque ya se sabe que solo selecciona id, lo demas es todo lo mismo que los querySelectors.







//CREAR HTML DESDE JAVASCRIPT
const nuevoEnlace = document.createElement('A'); //Paso 1

    //Agregar href
nuevoEnlace.href = 'nuevo-enlace.html'; //Paso 2


    //Agregar el texto
nuevoEnlace.textContent = 'Un nuevo Enlace'; //Paso 3


    //Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace'); //Paso 4

    //Agregarlo al documento HTML
const navegacion = document.querySelector('.navegacion'); //Paso 5
navegacion.appendChild(nuevoEnlace); //Paso 6




console.log(nuevoEnlace); //Paso 7


//Paso 1: creamos la variable y en el documento despues del punto utilizamos la función createElement y entre parentesis ponemos en mayúsculas(no es obligado pero si recomendado hacerlo) la etiqueta que nos gustaría crear.

//Paso 2: agregamos el elemento href a la etiqueta anterior.

//Paso 3: agregamos el texto a la etiqueta anterior.

//Paso 4: agregamos la clase al elemento anterior.

//Paso 5: creamos una nueva variable con un querySelector para seleccionar la clase o id que nos interese del documento html en el que estamos trabajando.

//Paso 6: utilizando la sintaxis de punto a la variable navegacion le agregamos la funcion appendChild(nuevoEnlace) y entre parentesis el nombre de la variable del elemento que queremos agregar.

//Paso 7: utilizamos un console.log para ver la información en pantalla.





//EVENTOS
console.log(1);

window.addEventListener('load', function() { //load espera a que JS y los archivos que dependan del HTML estén listos, addEventListener sirve para agregar eventos, el primer array dentro del parentesis es el evento que hará la función, window abarca más que document a la hora de seleccionar.
    console.log(2);
});

window.onload = function() { //poner directamente onload genera lo mismo que el evento 'load' en la función de addEventListener.
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded solo espera por el HTML, pero no espera CSS ni imágenes
    console.log(4);
});

console.log(5);

window.onscroll = function() { //la función on scroll cuenta cada vez que haces scroll
    console.log('Scrolling...')
};






//SELECCIONAR ELEMENTOS Y ASOCIARLES UN EVENTO
const btnEnviar = document.querySelector('.boton--primario'); //se crea la variable y se selecciona el elemento que se quiera agregar el evento, como solo es un elemento utilizamos querySelector
btnEnviar.addEventListener('click', function(evento) { //se le agrega el evento con addEventListener y la función click, dentro de los parametros de la función se le pone evento para que se pueda ver lo que pasa y no se envie directamente el formulario(ya que es su evento natural por defecto del navegador)
    console.log(evento); //se le agrega un console log para imprimir evento.
    evento.preventDefault(); //a evento se le agrega la función preventDefault() para que no se envie el formulario y se pueda consultar y validar antes de enviar.

    //Validar un formulario
    console.log('enviando formulario...');
});