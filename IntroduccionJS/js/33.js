//HERENCIA

class Producto { 
    constructor (nombre, precio) { 
        this.nombre = nombre 
        this.precio = precio
    }

    formatearProducto() { 
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio} €`;
    }

    obtenerPrecio() {
        console.log(this.precio);
    }

}

const producto = new Producto('Macbook Pro', 1300); 

console.log(producto);
console.log(producto.formatearProducto() ); 
console.log(producto.obtenerPrecio() );


//Herencia utilizando super() y extends
class Libro extends Producto { //Paso 1
    constructor (nombre, precio, isbn) { //Paso 2
        super(nombre, precio);  //Paso 3
        this.isbn = isbn;
    }

    formatearProducto() { 
        return `${super.formatearProducto() } y el isbn es ${this.isbn}`; //Paso 4
    }

    obtenerPrecio() {   
        super.obtenerPrecio();
        console.log('si hay en existencias');
    }

}

const libro = new Libro ('Programar para tontos', 12, '98373829237329'); //Paso 5

console.log(libro.formatearProducto() ); 
console.log(libro);
console.log(libro.obtenerPrecio() ); //Paso 6

//Paso 1: declaramos la class y para que herede de la class padre despues del nombre de la clase le ponemos la palabra reservada extends y seguido el nombre de la class padre para que así pueda heredar elementos de esa class.
//Paso 2: dentro del constructorle pones todos los parametros que quieres obtener en esta class.
//Paso 3: con super(), le decimos que herede los this de la class padre, dentro del parentesís le indicamos los parametros que queremos heredar, en este caso nombre y precio, así al heredarlo de arriba nos ahorramos código y queda más reutilizable.
//Paso 4: se le copia la función del elemento padre, en este caso la formatearProducto() y obtenerPrecio(), para el return lo que ya está escrito le ponemos ${super.formatearProducto} dentro de las comillas invertidas y heredará todo el texto de la función de la clase padre y seguidamente le podemos ir añadiendo texto nosotros especificamente de esta función, en el caso de obtenerPrecio() la heredamos entera de la class padre y le podemos añadir un return o console.log depende de lo que quermos que nos retorne esta función.
//Paso 5: Creamos la variable.
//Paso 6: imprimimos la class en pantalla.