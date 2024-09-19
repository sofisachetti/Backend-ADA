const prompt = require('prompt-sync')();

let suma = 0;
let numeroIngresado = parseInt(prompt("Ingrese un número: "));

while (numeroIngresado >= 0) {
    suma += numeroIngresado;
    numeroIngresado = parseInt(prompt("Ingrese un número: "));
}

console.log("La suma de todos los números es: " + suma);