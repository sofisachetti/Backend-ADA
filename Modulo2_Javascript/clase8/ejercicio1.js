//•	Ejercicio 1: 
//Declara dos variables numéricas numero1 y numero2. 
//Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require('prompt-sync')();

let numeroUno = parseFloat(prompt("Ingrese su primer numero: "));
let numeroDos = parseFloat(prompt("Ingrese su segundo número: "));

if (numeroUno === numeroDos) {
    console.log("Los números son iguales.")
}
else if (numeroUno > numeroDos) {
    console.log("El primer número es mayor: " + numeroUno)
}
else {
    console.log("El segundo número es mayor: " + numeroDos)
};