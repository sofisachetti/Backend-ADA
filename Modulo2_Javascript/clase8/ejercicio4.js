// Ejercicio 4: 
// Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre.

const prompt = require('prompt-sync')();

let nombre = prompt("Ingresa tu nombre: ");
let miNombre = "Sofia";

if (nombre == miNombre || nombre == "sofia" || nombre == "SOFIA"){
    console.log("Tenemos el mismo nombre!")
}
else {
    console.log("Hola, " + nombre + ". Un gusto conocerte!")
};