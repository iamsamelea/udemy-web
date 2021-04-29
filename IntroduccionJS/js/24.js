// ESTRUCTURAS DE CONTROL: IF, ELSE, IF ELSE

const puntaje = 1000;

if(puntaje === 1000) {
    console.log('El resultado es 1000');
}   else {
    console.log('El resultado es incorrecto');
}

// (===) significa igual a X                  (!==) significa diferente a X




const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito) {
    console.log('Dispone de efectivo suficiente, puede proceder a la compra');
} else {
    console.log('No dispone de efectivo suficiente, no puede proceder a la compra');
}

// (>) significa mayor que X                   (<) significa menor que X





const rol = 'Administrador';

if(rol === 'Administrador') {
    console.log('Es usted Administrador, puede acceder al sistema. *CHIUN, SONIDO DE PUERTA EPICA ABRIENDOSE*');
} else if (rol === 'Editor') {
    console.log('Usted es Editor, tiene acceso al sistema pero no por completo. *TIRÍ TIRÍ TIRÍ*');
} else {
    console.log('No es Administrador, no tiene acceso al sistema. *PI PI PI, SONIDO DE NO ABRIRSE*');
}

// (else if) sirve para dar mas de una opción