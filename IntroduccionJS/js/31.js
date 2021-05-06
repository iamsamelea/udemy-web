//PROTOTYPES
//Object Constructor
function Producto(nombre, precio) { //Objeto Producto
    this.nombre = nombre;   
    this.precio = precio;
}
//Prototype
//Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: ${this.precio} €`; //con la palabra reservada return indicamos el mensaje que queremos imprimir en la pantalla
}
Producto.prototype.obtenerPrecio = function() {
    return `El precio del producto és: ${this.precio}`;
}

function Cliente(nombre, apellido) { //Objeto Cliente
    this.nombre = nombre;
    this.apellido = apellido;
}
//Prototype
Cliente.prototype.formatearCliente = function() {
    return `Nombre del cliente: ${this.nombre}, Apellido del cliente: ${this.apellido}`;
}


const Producto2 = new Producto('Monitor curvo de 49\"', 800, true); 
const Producto3 = new Producto('Laptop', 300, true);
const Cliente2 = new Cliente('Leumas', 'Aral');

console.log(Producto2);
console.log(Producto2.formatearProducto() );
console.log(Producto2.obtenerPrecio() ); 
console.log(Producto3.formatearProducto() );
console.log(Cliente2);
console.log(Cliente2.formatearCliente() );

