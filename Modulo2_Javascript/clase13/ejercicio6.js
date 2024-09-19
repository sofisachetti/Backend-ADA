/*Hacer un programa que calcule la suma de los N primeros números
naturales, dónde N es el número límite ingresado por teclado*/

const prompt = require('prompt-sync')();

let numeroLimite = parseInt(prompt("Ingrese un número: "));
let suma = 0;

for (let i = 1; i <= numeroLimite; i++) {
    suma += i;
}

console.log(`El resultado final es ${suma}.`);