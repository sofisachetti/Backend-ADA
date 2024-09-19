/*Crear una función que muestre todos los números de la
secuencia de Fibonacci hasta el valor ingresado por parámetro.
Investigar sobre “la secuencia de Fibonacci”.
Fibonacci Sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21, ….
*/

const prompt = require('prompt-sync')();

/*let fibonacci = [0, 1];
let parametro = parseInt(prompt("Ingrese un número: "), 10);

let secuenciaFibonacci = () => {
    let c = 0;
    let a, b;
    let siguiente;
    while (parametro != siguiente) {
        a = fibonacci[-1]; //1
        b = fibonacci[-2]; //0
        c = a+b // 1+ 0 = 1 
        fibonacci.push(c) // [0,1,1]
        siguiente = c;
    } 
    return fibonacci;
}

console.log(secuenciaFibonacci(parametro));*/


function secuenciaFibonacci() {
    let parametro = parseInt(prompt("Ingrese un número: "), 10);
    let a = 0;
    let b = 1;

    console.log(a, b);

    let siguiente;

    while (b <= parametro) {
        siguiente = a + b;
        console.log(siguiente);
    }
} 