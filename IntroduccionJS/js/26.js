// FOR LOOP

// for( let i = 0; i < 10; i++ ) { 
//     console.log(i);
// }

//Paso 1: utilizamos la palabra reservada for para declarar un for loop
//Paso 2: dentro del parentesis declaramos una variable con let
//Paso 3: ponemos i(iniciar) = 0, porque queremos que inicie desde 0(que es la primera posición de los elementos) y acabamos con (;), seguidamente pones que i sea mas pequeña que 10, y para acabar le decimos que cada vez vaya sumando un número hasta que i ya no sea más pequeña que 10
//paso 4: ponemos un console.log para mostrarlo en pantalla, en este caso ponemos la i entre los parentesis






// for ( let i = 1; i <= 100; i++ ) {
//     if ( i % 2 === 0 ) { //el porcentaje saca el residuo de 0, entonces cuando el residuo es 0 sifinifica que es par
//         console.log(`El Número ${i} es PAR`);
//     } else {
//         console.log(`El Número ${i} es IMPAR`);
//     }
// }

//Paso 1: utilizamos la palabra reservada for para declarar un for loop
//Paso 2: dentro del parentesis declaramos una variable con let
//Paso 3: ponemos i(iniciar) = 1, porque queremos que inicie desde 1(porque el 0 no nos interesa como número par), después le decimos que nos muestre los numeros que sean menos o igual a 100, y que vaya sumando de uno cada vez
//Paso 4: dentro de las llaves les pones if y dentro del parentesis le decimos que nos muestre los números que sean porcentaje de 2 y que el residuo sea 0, así mostrará los resultados impares, seguidamente denttro de las llaves del if le ponemos un console log diciendo que el número será par y solo motrará los pares.
//Paso 5: hacemos lo mismo que el anterior con el else y nos mostrará los numero impares ya que el else recoje los que sobra y en este caso son los impares por eso en el console log le ponemos los impares





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

for( i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);
}

//Paso 1: declaras la variable carrito con todos los elementos en su interior
//Paso 2: fuera de la variable haces un for y dentro del parentesis le dices que i = 0, que inicie en 0 y así recoja desde el primer elemento del carrito. Despues le dices que recoja los resultados que sean mas pequeños que carrito.lenght que significa lo largo que sea el carrito, y para terminar le dices que vaya sumando 1 al resultado
//Paso 4: dentro de las llaves escribes un console.log y le dices que dentro de los parentesis muestre carrito[i] y le pones un .nombre para que solo te muestre el nombre