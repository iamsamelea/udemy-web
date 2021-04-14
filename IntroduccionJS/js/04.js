// STRING O CADENAS DE TEXTO (son lo mismo)

const producto = "Monitor de 20\""; // Con la barra invertida conseguimos que las comillas dobles no tengan conflicto y aparezcan en la consola del buscador, pero tambien para evitar el conflicto se puede meter el valor de la variable entre comillas simples('valor')
const producto02 = String ("Monitor de 30 pulgadas"); // Esta es otra forma de decirle al navegador que es un String lo que hay entre las comillas, pero es una forma que no se utiliza practicamente
const producto03 = new String("Monitor de 50 pulgadas"); // La ultima forma de declarar un string, siempre que se utiliza new la variable termina siendo un objecto y para verlo como objeto se utiliza el typeof en la consola


console.log(producto);
console.log(producto02);
console.log(producto03);
console.log(typeof producto03); // Aqui se muestra que es un objeto por el valor new escrito en la línea 5


// EJERCICIO Y EJEMPLO METODOS PARA STRING 
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto2 = 'Monitor HD';


    //lenght para la extensión
    console.log(tweet.length); // el .lenght muestra el resultado de cuantos carácteres ocupa esa variable (estilo un tweet por eso el nombre de la variable la hemos declarado como tweet) Y no tiene un parentesis propio para funcionar
    console.log(producto2);


    //IndexOf (retorna la posición)
    console.log(tweet.indexOf('JavaScript')); // En este caso dice que JavaScript empieza en la letra número 12 empezando a contar desde 0 que es la A de la variable tweet(tambien se puede buscar letras)
    console.log(producto2.indexOf('JavaScript')); // En este caso da un valor negativo, lo que significa que no se encuentra esta palabra(el valor negativo siempre es que no existe la palabra o letra, el 0 significa que es la primera de la variable)

    // Includes (retorna true o false)
    console.log(tweet.includes('JavaScript')); // Retorna true porque la palabra JavaScript si se encuentra en la variable
    console.log(producto2.includes('JavaScript')); // Retorna false porque la palabra JavaScript no se encuentra en la variable