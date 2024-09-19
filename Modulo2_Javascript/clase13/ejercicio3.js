/*Número secreto
Escribí un programa que piense un número de forma aleatoria del 1 al 10 y
le pida al usuario que lo trate de adivinar. Si el número es correcto debe
imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe
imprimir "Lo siento, ¡intenta nuevamente!"*/

const prompt = require('prompt-sync')();

let numeroAleatoreo = Math.floor(Math.random() * 10) + 1; // método? buscado en clases.

let numeroAAdivinar = parseInt(prompt("Adiviná un número del 1 al 10: "));

if (numeroAAdivinar === numeroAleatoreo) {
    console.log("Felicitaciones, ¡ese era!");
} else {
    console.log("Lo siento, ¡intenta nuevamente!")
}

console.log(`El número aleatorio era ${numeroAleatoreo}`);