//THIS

const reservacion = { //Paso 1
    nombre: 'Samuel',
    apellido: 'Lara',
    total: 5000,
    pagado: false,
    informacion: function() { //Paso 2
        console.log(`El cliente ${reservacion.nombre} ha reservado una habitación de hotel por el valor total de ${reservacion.total}`); //Paso 3
    }
}

reservacion.informacion(); //Paso 4

//Paso 1: Se declara una variable.
//Paso 2: se declara una función dentro de la propia variable.
//paso 3: en el console.log se utiliza reservacion.nombre porque si pones solo nombre no funciona ya que lo busca fuera de la variable, en este caso lo buscará dentro porque le das con la sintaxis de punto donde tiene que buscar.
//Paso 4: Imprimes en pantalla



//This
const reservacion2 = { //Paso 1
    nombre: 'Leumas',
    apellido: 'Aral',
    total: 3000,
    pagado: false,
    informacion: function() { //Paso 2
        console.log(`El cliente ${this.nombre} ha reservado una habitación de hotel por el valor total de ${this.total}`); //Paso 3
    }
}

reservacion2.informacion();

//Paso 1: Se declara una variable.
//Paso 2: se declara una función dentro de la propia variable.
//paso 3: en el console.log se utiliza this.nombre porque this busca siempre dentro de la propia variable y no busca fuera no hay que poner el nombre de la variable siempre.
//Paso 4: Imprimes en pantalla




//No se pueden utilizar Arrow functions porque el arrow function en este caso para informacion siempre busca fuera de la variable y no dentro