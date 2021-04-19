// METODOS PARA LOS ARRAYS

const numeros = [10, 20, 30, 40, 50];


/*
//Acceder a los valores del arreglo
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]); // en este caso entre los corxetes ponemos la posición en la que se encuentra el número dentro del Array, no el número en concreto(siempre empieza desde el 0)
console.log(numeros[200]); // esta posición no existe y aparece como undefined

//Conocer la extensión de un Array
console.log(meses.lenght);


//Sacar todos los valores del Array en solo 2 líneas(equivale a los mismo de arriba)
numeros.forEach(function(numero){
    console.log(numero);
}) // Esta función saca de forma ordenada todos los valores que hay dentro de un Array, el forEach se va a ejecutar 1 vez por cada elemento que haya en ese arreglo, los carritos de compra funcionan así enseñando todo lo que hay en el carrito de compra con el forEach
*/







//Ya no se utiliza
//numeros[5] = [60]; // Este metodo sirve para modificar los Arrays (agregar o modificar valores) pero ya no se utiliza mucho



// Metodo que se utiliza poco
/*
numeros.push(60); // Este metodo es el que se utiliza actualmente para modificar arrays
numeros.push(70);
*/





numeros.push(60,70,80); // Agrega elementos al final del Array
numeros.unshift(-10,-20-30); // Agrega elementos al principio del Array


console.table(numeros); //con el .table aparecerá todo ordenado en una tabla en el Browser




// Eliminar elementos del Array
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
/*
meses.pop(); //Elimina el ultimo elemento del Array
meses.shift(); //Elimina el primer elemento del Array

meses.splice(2, 1); // Elimina el elemento en la posición número 2 y el siguiente número elijes que apartir de esa posición cuantos eliminar, en este caso 1(tan solo ese elemento)
*/


console.table(meses); 


// Rest Operato o Spread Operator
const nuevoArrreglo = ["Diciembre", ...meses, "Junio"]; //Depende donde se situe el valor se pondrá delante o detras en el Array
console.log(nuevoArrreglo);