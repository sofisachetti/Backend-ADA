/*Ejercicio 1:
Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/

const prompt = require('prompt-sync')();

let ingresoPulgadas = parseFloat(prompt("Ingrese la medida en pulgadas: ")); //1ro defino la variable

function calculadora (ingresoPulgadas) {
    return ingresoPulgadas * 2.54;
}

console.log("La conversión a centimetros es: " + calculadora(ingresoPulgadas));