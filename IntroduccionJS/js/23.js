//ARROW FUNCTIONS *nota al pie de la página

// const sumar2 = function(n1, n2) {
//     console.log(n1 + n2);
// }

// sumar2(5, 10);

const sumar2 = (n1, n2) => console.log(n1 + n2); //Esto és una arrow function que hace lo mismo que lo de arriba, pero más simplido, se cambia la function y se sustitye por => y se situa después del parentesis
sumar2(5, 10);





const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: "Monitor HD 20 \"", precio: 500},
    {nombre: "Televisión 50 Pulgadas", precio: 700},
    {nombre: "Portatil Gaming", precio: 1000},
    {nombre: "Ratón RGB", precio: 80},
    {nombre: "Silla Gaming", precio: 250},
    {nombre: "Teclado Mecánico", precio: 150},
    {nombre: "Micrófono Omnidireccional", precio: 200},
    {nombre: "Disco Duro Externo 2TB", precio: 180},
];





//forEach
meses.forEach((mes) => { 
    if (mes == "Marzo") {  
        console.log("Marzo si existe") 
    }
});





// Some Ideal para el arreglo de Objetos
// resultado = carrito.some(function(producto) { //Antes
//     return producto.nombre === "Celular"   
// });

resultado = carrito.some( producto => producto.nombre === "Celular"); //Después


console.log(resultado);






//Reduce
// resultado = carrito.reduce(function(total, producto) { // Antes
//     return total + producto.precio
// }, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //Despues

console.log(resultado);









//Filter


// resultado = carrito.filter(function(producto) { //Antes
//     return producto.precio > 400 
// });

resultado = carrito.filter(producto => producto.precio > 400);

console.log(resultado);

// resultado = carrito.filter(function(producto) {
//     return producto.nombre !== "Celular"  
// });

resultado = carrito.filter(producto => producto.nombre !== "Celular");

console.log(resultado);



// En las Arrow Functions se reduce el código, es más utilizado.

//Se elimina el function para poner despues del parentesis esto => dentro del parentesis si solo hay un parametro no necesita estar entre los parentesis, si hay más de uno si que se tiene que quedar entre los parentesis, la función return queda anulada en las arrow functions, y todo se pone en una sola línea y el codigo queda más límpio.
