// FOR EACH Y MAP

const carrito = [
    {nombre: "Monitor HD 20\"", precio: 500},
    {nombre: "Televisión 50 Pulgadas", precio: 700},
    {nombre: "Portatil Gaming", precio: 1000},
    {nombre: "Ratón RGB", precio: 80},
    {nombre: "Silla Gaming", precio: 250},
    {nombre: "Teclado Mecánico", precio: 150},
    {nombre: "Micrófono Omnidireccional", precio: 200},
    {nombre: "Disco Duro Externo 2TB", precio: 180},
];


//forEach

carrito.forEach( producto => console.log(producto.nombre));

//For Each solo puede actuar sobre arreglos tipo el de arriba, en la consola mostrará el número de productos que hay dentro del arreglo, forEach se utiliza solo para mostrar en el navegador la lista de productos de una arreglo ya existente



//Map

const arreglo2 = carrito.map ( producto => producto.nombre);
console.log(arreglo2);

//Map tiene la misma sintaxis que forEach y funciona igual, pero map sirve más para crear una variable dentro de la línea de codigo