//CLASSES

class Producto { //Paso 1
    constructor (nombre, precio) { //Paso 2
        this.nombre = nombre //Paso 3
        this.precio = precio
    }

    formatearProducto() { //Paso 4
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio} €`;
    }

    precioProducto() {
        return `Precio: ${this.precio} €`;
    }

}

const Producto2 = new Producto('Macbook Pro', 1300); //Paso 5
const Producto3 = new Producto('Ratón Gaming', 110);

console.log(Producto2);
console.log(Producto2.formatearProducto() ); //Paso 6
console.log(Producto2.precioProducto() );
console.log(Producto3.formatearProducto() );
console.log(Producto3.precioProducto() );




//Paso 1: se crea la clase y el nombre siempre tiene que empezar en mayúsculas.
//Paso 2: se crea un constructor donde se definiran los PARAMETROS dentro del parentesis.
//Paso 3: se almacenará dentro del objeto utilizando el this. y seguido de la PROPIEDAD que se le quiera asignar a cada uno y asi para poder trabajar con el, hasta que no se asignen en el PASO 2 no se resaltarán en naranja.
//Paso 4: el METODO que se utiliza es este, no el de la lección anterior, esta forma de utilizarlo és más nueva, con la palabra reservada return le indicamos el mensaje que queremos imprimir en la pantalla.
//Paso 5: creas la variable utilizando la palabra reservada new y le asignas el valor de nombre y precio entre el paréntesis.
//paso 6: se utiliza console.log para imprimir en pantalla el objeto con los valore y si utilizams la sintaxis de punto seguido del prototype nos imprimirá en pantalla el mensaje del return.