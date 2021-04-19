// ARREGLOS O ARRAYS

const numeros = [10, 20, 30, 40, 50];
console.table(numeros); //con el .table aparecerá todo ordenado en una tabla en el Browser

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.table(meses); 

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