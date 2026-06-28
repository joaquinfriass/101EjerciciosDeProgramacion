
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


function fizzBuzz(){
    // Iteramos del 1 al 100
    for (let i = 1; i <= 100; i++) {
        // Comprobamos si el número es múltiplo de 3 y de 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        // Comprobamos si el número es múltiplo de 3
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        // Comprobamos si el número es múltiplo de 5
        else if (i % 5 === 0) {
            console.log("buzz");
        }
        // Si no es múltiplo de 3 ni de 5, imprimimos el número
        else {
            console.log(i);
        }
    }
}

fizzBuzz();