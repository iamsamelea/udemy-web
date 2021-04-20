//FUNCIONES EN JAVASCRIPT

//Declaración de una Función
function sumar() {
    console.log(10 + 10);
}

sumar(); //se pone esto al final para llamar a la función y que aparezca en pantalla


//Expresión de la función
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();


//IFEE
(function() {
    console.log("Esto es una función"); //Este tipo de función se llama a si misma con el parentesis final, ademas esta funcion no la puedes llamar desde otros docuemntos, tan solo desde el propio docuemnto
})();