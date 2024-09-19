/*Ejercicio 5:
Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.*/

const prompt = require('prompt-sync')();

let sueldoMensual = parseFloat(prompt("Ingrese su sueldo: "));

function horaTrabajo (sueldoMensual) {
    return sueldoMensual / 40;
}

console.log("Tu hora de trabajo es de: $" + horaTrabajo(sueldoMensual));