//TRY CATCH
const numero1 = 20;
const numero3 = 30;

/*console.log(numero1);
console.log(numero2);
console.log(numero3);*/

//En Javascript cuando hay un error todo el código deja de funcionar, entonces de la forma anterior el codigo en la consola del navegador dará error ya que dará el resultado del console.log(numero1); que será 20 pero despues en el segundo console.log(numero2); dará error y en adelante ya no mostrará nada más ya que la variable numero2 no está definida, pero para esto dse utiliza un Try Catch.





//Try catch
console.log(numero1);
try { 
    console.log(numero2);
} catch (error) {
    console.log(error);
}
console.log(numero3); 

//Al utilizar el try catch le hemos dicho que pruebe de imprimir en pantalla la console.log(numero2); pero al no estar definida la variable del mismo el catch le dirá que existe un error pero la demas parte del codigo podrá seguir ejecutandose sin problema, dentro de las llaves de error le hemos puesto un console.log(error); para que nos devuelva en pantalla el mensaje de error. Los demas console.log() van por fuera del try catch porque tiene su variable asignada y no darán error.

//Este metodo se utiliza solo en momentos extricamente necesarios, por ejemplo una autentificación de un usuario a la web que se equivoca y necesitas que el codigo siga funcionando y no se pare el sistema, etc...

