/*Ejercicio 4:
Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/

const prompt = require('prompt-sync')();

let edadPerrito = parseInt(prompt("Ingrese la edad de su perro: "));

function calculadoraEdad (edadPerrito) {
    return edadPerrito * 7;
}

console.log("La edad de tu perrito en años humanos es: " + calculadoraEdad(edadPerrito));