// Switch

const metodoPago = 'tarjeta'; //paso 1: se declara la variable

switch(metodoPago) { //paso 2: se utiliza la palabra reservada switch y entre el parentesis ponemos el nombre de la variable
    case 'tarjeta': //paso 3: utilizamos la palabra reservada case seguido del metodo de pago que queramos tener disponible y finalizamos con dos puntos
        console.log('El usuario ha pagado con tarjeta'); //paso 4: ponemos un console.log() con el mensaje que queremos transmitir en el caso de utilizar el metodo de pago anterior
        break; //paso 5: acabamos utilizando la palabra reservada break, que lo que hace es detener el ciclo si hemos utilizado ese metodo de pago, seguidamente podemos poner mas metodos de pago o terminar, cabamos con ;
    case 'bitcoin':
        console.log('El usuario va a pagar con Bitcoin');
        break;
    case 'efectivo':
        console.log('El usuario va pagar con efectivo, deposite el dinero en la bandeja');
        break;
    default: //paso 6: utilizamos la palabra reservada default para mostrar el mensaje si en algun caso la forma de pago no coincide o si no hay fondos, etc... es obligatorio poner el default siempre y ponerlo al final
        console.log('Aún no ha pagado');
        break;
}


// Este metodo se utiliza como si fuera if, else o else if pero basicamente este metodo se prefiere cuando hay muchas opciones, en cambio cuando hay una o dos opciones se prefiere el if o else if