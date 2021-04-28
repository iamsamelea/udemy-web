//FUNCIONES QUE RETORNAN VALORES RETURN


// Esto es una función que retorna un resultado pero es muy simple
function sumar(n1, n2) {
    return n1 + n2;
}

const resultado = sumar(2, 4);
console.log(resultado);



// Funcion return simulando un carrito de compra online
let total = 0; //PASO 1: declaras la variable

function agregarCarrito(precio) { //PASO 2: agregas la función
    return total += precio; //PASO 3: en el return le dices que vaya sumando el resultado del precio y se sume al total
}

function calcularImpuesto(total) { //PASO 5: declaras una función para calcular el IVA o impuesto
    return 1.21 * total;
}

total = agregarCarrito(200); //PASO 4: aqui se van poniendo los precios de los productos del carrito
total = agregarCarrito(500);
total = agregarCarrito(700);


console.log(total);

const totalAPagar = calcularImpuesto(total); // PASO 6: declaras una variable que diga que el total a pagar es igual al impuesto + el total

console.log(`El total a pagar con impuestos es de: ${totalAPagar}`); // PASO 7: muestras en pantalla la cantidad que es el precio mas el impuesto junto, y se le pone entre strings para darle un toque más profesional

