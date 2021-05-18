//PROMISES
const usuarioAutenticado = new Promise( (resolve, reject) => { //Paso 1
    const auth = true; //Paso 2

    if(auth) { //Paso 3
        resolve('Usuario Autenticado'); //El Promise se cumple
    } else{
        reject('No se pudo iniciar sesión'); //El Promise no se cumple
    }
});

usuarioAutenticado //Paso 4
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

    // En los Promises existen 3 valores
    // Pending: No se ha cumplido pero tampoco se ha rechazado
    // Fulfilled: Ya se cumplio
    // Rejected: Se ha rechazado o no se pudo cumplir




    //Paso 1: se crea una variable que tiene una función llamada Promise a la que se le pasan dos valores por defecto.
    //Paso 2: se crea dentro de la función Promise la variable auth que significa autentificación.
    //Paso 3: se crea un if else para validar si es correcta o no la función y dentro de las llaves del if o del else se ponen los parametros resolve y reject que le hemos pasado a la funcion con los mensajes que quremos imprimir en pantalla.
    //Paso 4: Para mostrar  solo el mensaje a la variable usuarioAuntenticado se le pasan .then y .catch y entre los parentesis se les indica una función en la que solo se mostrará el mensaje de error o de resultado depende de si se cumple o no el promise.