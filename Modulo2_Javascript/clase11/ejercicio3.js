/*Ejercicio 3:
Crear una función que recibe un string y devuelve la misma frase pero con
admiración.*/

const prompt = require('prompt-sync')();

let string = prompt("Ingrese su frase: ");

function admiracion (string) {
    return "¡" + string + "!";
}

console.log(admiracion(string));