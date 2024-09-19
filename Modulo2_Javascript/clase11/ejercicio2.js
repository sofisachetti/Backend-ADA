/*Ejercicio 2:
Crear una función que recibe un string y lo convierte en una URL.*/

const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese un nombre: ");

function url (nombre) {
    return "http://www." + nombre + ".com";
}

console.log("Su URL es: " + url(nombre));