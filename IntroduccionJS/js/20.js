//FUNCIONES CON PARAMETROS Y ARGUMENTOS

function sumar(numero1, numero2) { // numero1 y numero2 son parametros
    console.log(numero1 + numero2); // van a sumar los paramtros y mostrarlos en pantalla
}

sumar(10, 10);// los numeros dentro del paréntesis se les llaman argumentos o valores reales, són los números que se van a mostrar en pantalla, de esta forma el código es muy reutilizable
sumar(1, 1); 
sumar(3, 4); 
sumar(1, 15); 
sumar(1); // En este caso al no haver otro valor en el navegador dará NaN (Not a Number), por lo tanto en los parametros se les pone un = a 0 para que no dé error como en el ejemplo siguiente




function sumar(numero1 = 0, numero2 = 0) { // en este caso con los parametro igual a 0 ya no dará ningún error, se les conoce como parametros por default
    console.log(numero1 + numero2);
}

sumar(1);
sumar(); //en este caso al tener asignado un 0 de valor base a los parametro numero1 y numero2 pues dará 0 pero no error
sumar(23);






const sumar2 = function(n1, n2) { //se pueden utilizar las palabras que queramos mientras sean correctas
    console.log(n1 + n2);
}

sumar2(10, 20);
sumar2(5, 2);

