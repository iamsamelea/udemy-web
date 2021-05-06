// OBJECT LITERAL Y OBJECT CONSTRUCTOR

//Object Literal
const producto = { //Paso 1
    nombre: 'tablet', //Paso 2
    precio: 500,
}

console.log(producto.nombre); //Paso 3

// Paso 1: creas un objeto con la variable.
// Paso 2: le insertas los valores.
// Paso 3: lo imprimes en pantalla.







//Object Constructor
function Producto(nombre, precio, disponible) { //Paso 1
    this.nombre = nombre;   //Paso 2
    this.precio = precio;
    this.disponible = disponible;
}

const Producto2 = new Producto('Monitor curvo de 49\"', 800, true); //Paso 3
const Producto3 = new Producto('Laptop', 300, true);
const Producto4 = new Producto('Auriculares', 120, false);
const Producto5 = new Producto('Teclado', 80, true);

console.log(Producto2); //Paso 4
console.log(Producto3);
console.log(Producto4);
console.log(Producto5);

//Paso 1: declaras la función y dentro de los parentesis le pones el orden de los valores.
//Paso 2: utilizas el this para que lo saque de la misma función.
//Paso 3: declaras la variable y creas el objeto con la palabra reservada new, y en este caso les das al Producto dentro de los parentesis los valores que quieras.
//Paso 4: utilizas un console.log para imprimirlo en pantalla.


//En Object Literal declaras los objetos de uno en uno, y en Object Constructor los objetos se van creando y declaran más rapidamente y se reutiliza el código de la función de arriba siempre y cuando tengan los mismos.