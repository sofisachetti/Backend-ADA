/* Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular
el promedio.*/

const prompt = require('prompt-sync')();
// Ingreso de las notas
let notas = [];

for (let i = 0; i < 5; i++) {
    notas[i] = parseFloat(prompt("Ingrese la nota: "));
}
// Calcular el promedio
const calcularPromedio = (notas) => {
    let suma = 0; // Suma de los elementos
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
};

let promedio = calcularPromedio(notas);

console.log(`El promedio de las notas es de ${promedio}`);