// ARRAY METHODS
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
meses.forEach(function(mes) { // Esta línea crea una función de mes
    if (mes == "Marzo") {  // En esta línea if (signica, si no...) le pregunta si dentro de la funcion mes está la palabra "Marzo"
        console.log("Marzo si existe") // En esta línea tiene que monstar el texto "Marzo si existe", si la palabra "Marzo está dentro de la función"
    }
});

// Includes
let resultado = meses.includes("Diciembre"); // Esta función con el .includes le pregunta si el Array de meses incluye el String "Diciembre", como en este caso no lo incluye nos retorna un false, pero si lo incluyera nos retornaria un true


// Some Ideal para el arreglo de Objetos
resultado = carrito.some(function(producto) { //este metodo muestra en pantalla todos los productos que tengan la palabr celular en su nombre
    return producto.nombre === "Celular"   
});


//Reduce
resultado = carrito.reduce(function(total, producto) { // Este metodo devuelve en pantalla el resultado del total del carrito
    return total + producto.precio
}, 0);


//Filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400 //con el simbolo > o < se muestra en pantalla los productos con precio mayor o menor que algog
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== "Celular" //con el simbolo === o !== se muestra en pantalla 
});


console.log(resultado)