//•	Ejercicio 3:
//Declara dos variables booleanas condicion1 y condicion2. 
//Pide al usuario que ingrese dos valores booleanos (true o false) y 
//muestra el resultado de diversas combinaciones lógicas.
//comparar nuestros valores con los del usuario 

const prompt = require('prompt-sync')();

let condicion1 = prompt("Ingrese un valor booleano (true/false):") === "true";
let condicion2 = prompt("Ingrese un valor booleano (true/false):") === "false";

console.log(condicion1 && condicion2);
console.log(condicion1 || condicion2);