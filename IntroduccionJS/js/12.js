//"use strict"; // Esta propiedad hace correr JS en modo estricto

// OBJETOS
const producto = {  
    nombreProducto: "Monitor HD 20\"",
    precio: 250,
    disponible: true
}





// FREEZE
Object.freeze(producto); // Esta propiedad hace que no se pueda ni agregar variables, ni modificar, ni eliminar

producto.imagen = "imagen.jpg" // La propiedad imagen no se le agregará al objeto producto porque está congelado

console.log(producto);


//console.log(Object.isFrozen(producto)); // Esta línea de código indica en pantalla si el prodcuto está congelado o no




// SEALED
const producto2 = {  
    nombreProducto: "Ratón gaming",
    precio: 80,
    disponible: false
}


Object.seal(producto2); // Esta propiedad hace que no se pueda ni agregar variables, ni eliminar, pero si modificar las ya existentes

producto2.precio = 95; // La propiedad precio se ha modificado en el objeto producto 2 porque al ser sealed se pueden modificar propiedades ya existentes
delete producto.precio; // La propiedad delete no eliminará la variable de precio del producto porque está sealed y no se pueden agregar productos ni eliminar, tan solo modificar los existentes

console.log(producto2);



//console.log(Object.isSealed(producto2)); // Esta línea de código indica en pantalla si el prodcuto está sealed o no




