/*Ejercicio 6:
Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.*/

const prompt = require('prompt-sync')();

let metros = parseFloat(prompt("Ingrese su altura en metros: "));
let peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));

function calculadorIMC(metros, peso) {
    return peso / (metros * metros);
}

console.log("Su IMC es de: " + calculadorIMC(metros, peso));