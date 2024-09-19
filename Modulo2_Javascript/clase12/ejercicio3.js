/*Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
adolescente, adulto o adulto mayor.*/

const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingresa tu edad: "));

const clasificarEdad = edad => {
    if (edad > 0 && edad <= 12) {
        console.log("La clasificación es de: Niño.");
    } else if (edad >= 13 && edad <= 17) {
        console.log("La clasficación es de: Adolescente.");
    } else if (edad >= 18 && edad <= 65) {
        console.log("La clasificación es de: Adulto.");
    } else if (edad >= 66 && edad <= 120) {
        console.log("La clasificación es de: Adulto mayor.");
    } else {
        console.log("Edad incorrecta.")
    }
}

clasificarEdad(edad);