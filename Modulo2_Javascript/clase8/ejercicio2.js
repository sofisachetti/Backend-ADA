//•	Ejercicio 2: 
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. 
//Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes

const prompt = require('prompt-sync')();

const RANGO_MINIMO = 10
const RANGO_MAXIMO = 100

let numeroUsuario = parseFloat(prompt("Ingrese su número: "));

if (numeroUsuario >= RANGO_MINIMO && numeroUsuario <= RANGO_MAXIMO) {
    console.log("Su número está dentro del rango definido.")
}
else {
    console.log("Su número no está dentro del rango.")
};