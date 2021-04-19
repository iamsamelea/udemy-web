// OBJETOS

const nombreProducto = "Monitor HD 20\"";
const precio = 250;
const disponible = true;

console.log(nombreProducto);
console.log(precio);
console.log(disponible);




const producto = {  // Esto es un Objeto y es lo mismo que las variables de arriba pero comprimidas en una
    nombreProducto: "Monitor HD 20\"",
    precio: 250,
    disponible: true
}

console.log(producto);

   /* //sintaxis de punto para mostrar en pantalla las variables de dentro del Objeto
    console.log(producto.nombreProducto);
    console.log(producto.precio);
    console.log(precio.disponible);


    // Sintaxis menos utilizada pero importante conocer
    console.log(producto["nombreProducto"]);
    console.log(producto["precio"]);
    console.log(producto["disponible"]);*/


// MODIFICAR OBJETOS

    // Agregar variables
    producto.imagen = "imagen.jpg"; // Ahora esta variable estará en la consola del Buscador dentro del objeto producto

    // Eliminar Variables
    delete producto.disponible; // Con la palabra reservada delete seguido del nombre del objeto.variable que queramos eliminar podremos eliminar la variable que queramos