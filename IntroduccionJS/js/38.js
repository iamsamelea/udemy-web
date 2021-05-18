//OPTIMIZAR LLAMADO ASYNC Y AWAIT

function descargarNuevosClientes() { 
    return new Promise( resolve => { 
        console.log('Descargando clientes...espere...'); 

        setTimeout( () => { 
            resolve('Los clientes fueron Descargados'); 
        }, 5000); 
    });
}

function descargarUltimosPedidos() { 
    return new Promise( resolve => { 
        console.log('Descargando pedidos...espere...'); 

        setTimeout( () => { 
            resolve('Los pedidos fueron Descargados'); 
        }, 3000); 
    });
}



/*AWAIT ASYNC NO OPTIMIZADO*/ 
// async function app() { 
//     try { 
//         const clientes = await descargarNuevosClientes();
//         const pedidos = await descargarUltimosPedidos(); 
//         console.log(clientes);
//         console.log(pedidos);
//     } catch (error) {
//         console.log(error);
//     }
// }




/*AWAIT ASYNC OPTIMIZADO*/ 
 async function app() { //Paso 1
     try { 
         const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]); //Paso 2
        //  console.log(resultado);
         console.log(resultado[0]); //Paso 3
         console.log(resultado[1]);
     } catch (error) {
         console.log(error);
     }
}

app();

//Paso 1: Despues de crear las funciones anteriores creamos una nueva funcion con la palabra reservada async llada app().
//Paso 2: creamos una constante y le ponemos un Promise.all para que sleccione todo, entonces dentro del parentesis ponemos dos corchetes porque es un arreglo y dentro del arreglo ponemos las funciones anteriores.
//paso 3: ponemos el console.log(resultado); pero le ponemos la posición de cada uno de los elementos del arreglo porque si no solo apareceria 1, el tiempo que tarda en aparecer el resultado en pantalla es igual a los milisegundos de la función que más dure. Si solo ponemos resultado nos saldría en pantalla la función y no el resultado.
