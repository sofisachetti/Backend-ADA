//Crear una función que reciba un string y luego imprimir la cantidad de vocales que se encuentran en dicha frase.

const prompt = require('prompt-sync')();

let frase = prompt("Ingrese una frase: ");

function cantidadVocales(frase) {
    let vocales = frase.split();
    return vocales;
};

console.log(cantidadVocales(frase));