/*Ejercicio 1: Conversor de monedas
Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa
una función flecha para convertir el monto a pesos
dolar oficial 918.74*/

const prompt = require('prompt-sync')();

let tasaDeCambio = parseFloat(prompt("Ingrese la tasa de cambio: "));
let montoEnDolares = parseFloat(prompt("Ingrese el monto en dólares a convertir: "));

let conversorMoneda = (a, b) => a * b;

console.log(`El monto en pesos es $ ${conversorMoneda(montoEnDolares, tasaDeCambio)}.`);