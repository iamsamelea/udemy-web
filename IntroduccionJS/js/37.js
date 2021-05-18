//ASYNC Y AWAIT

function descargarNuevosClientes() { //Paso 1
    return new Promise( resolve => { //Paso 2
        console.log('Descargando clientes...espere...'); //Paso 3

        setTimeout( () => { //Paso 4
            resolve('Los clientes fueron Descargados'); //Paso 5
        }, 5000); //Paso 6
    });
}

async function app() { //Paso 7
    try { //Paso 8
        const resultado = await descargarNuevosClientes(); //Paso 9
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app(); //Paso 10
console.log('Este código no se bloquea y sigue ejecutandose');


//Paso 1: se crea una nueva función
//Paso 2: se crea un Promise con un return new y dentro del parentesis le damos el parametro resolve para que nos devuelva lo que hay dentro de las llaves.
//Paso 3: se crea un console log con un mensaje que se mostrará mientras se espera.
//Paso 4: se agrega dentro del Promise un setTimeout que es una función que trabaja con el tiempo.
//Paso 5: se le añade el mensaje que queremos que transmita el parametro resolve cuando esté resuelto.
//Paso 6: antes de cerrar el parentesis se pone en milisegundos el tiempo de espera hasta que salga el mensaje de resolve.
//Paso 7: se crea una nueva función pero empieza con la palabra reservada async, para hacerla asincrona.
//Paso 8: se crea un try catch.
//Paso 9: dentro del try se crea una variable resultado que sea igual al descargarNuevosClientes pero con la palabra reservada await antes que la función para así hacer el tiempo de espera y despues le ponemos un console.log(resultado); para que muestre el resultado y en catch uno con error para que muestre un mensaje de error en caso de no ser valida.
//Paso 10: se crea un mensaje para que se pueda ver que mientras ese código espera el programa sigue ejecuntadose ya que la espera solo afecta a los que está dentro de la función de descargarNuevosClientes.