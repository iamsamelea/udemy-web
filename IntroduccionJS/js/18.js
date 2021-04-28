//DIFERENCIAS ENTRE TIPOS DE FUNCIONES EN JAVASCRIPT

//Declaración de una Función
sumar(); 

function sumar() {
    console.log(10 + 10);
}




//Expresión de la función
sumar2();

const sumar2 = function() {
    console.log(3 + 3);
}


// En el primer caso al poner primero la llamada a la funcion antes que la función en la pantalla si que mostrará porque es una función como tal y emplea el valor de función, pero en el segundo caso es más una variable que una función entonces primero hay que declararla y despues llamarla, JS primero lee las funciones y las crea y despues las muestra