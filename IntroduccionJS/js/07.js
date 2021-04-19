// ORDEN DE LAS OPERACIONES

let resultado;


resultado = 20 + 30 * 2; // Esta operación funciona de forma lógica primero multiplica el 2 + 30 y despue suma a ese resultado el 20

resultado = (20 + 30) * 2; // En esta operación primero se calcula lo del interior del parentesis y despues el resultado se multiplica por 2

resultado = (600 + 600) * .2; // Con esta operación se calcula el 20% de 1200, que el resultado es 120


//console.log(resultado);



// INCREMENTOS//estas funciones se suelen utilizar para subir puntajes en los videojuegos

let puntaje = 10;

puntaje++; // Esta funcion le suma 1 al resultado, en este caso dará 11 (siempre suma de 1 en 1)
++puntaje; // Esta funcion suma 1 al resultado y despues lo muestra (siempre suma de 1 en 1)


puntaje += 20; // Esta función suma el número que le pongas despues del +=

//DECREMENTOS//estas funciones se suelen utilizar para restar puntajes en los videojuegos

puntaje--; // Esta funcion le resta 1 al resultado (siempre resta de 1 en 1)
--puntaje; // Esta funcion reta 1 al resultado y despues lo muestra (siempre resta de 1 en 1)

console.log(puntaje);