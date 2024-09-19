/*While y Do While
Implementa un programa que permita al usuario registrar la edad de
mascotas en una veterinaria hasta que decida dejar de agregar.
Cuando el usuario no agregue mas edades, imprimir en consola las
mascotas agregadas anteriormente y sus respectivas edades.*/

const prompt = require('prompt-sync')();

let nombreMascota = [];
let edadMascota = [];
let i = 0;

do {
    nombreMascota[i] = prompt("Ingrese el nombre de su mascota: ");
    edadMascota[i] = parseInt(prompt("Ingrese la edad de su mascota: "));
    continuar = prompt("¿Desea ingrsar otra mascota? Si/No: ");
    i++
} while (continuar === "Si");

console.log(nombreMascota, edadMascota);