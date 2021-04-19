// OBJETOS
const producto = {  
    nombreProducto: "Monitor HD 20\"",
    precio: 250,
    disponible: true
}


/*
// Forma antigua o anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto);
*/


// DESTRUCTURING
/*const {disponible} = producto;
const {precio} = producto;*/

const {disponible, precio} = producto; // Esta forma es exactamente igual a la de arriba pero comprimido en una sola línea

console.log(disponible);
console.log(precio);



