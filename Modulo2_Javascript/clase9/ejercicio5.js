/*
1. Crear un array para almacenar las notas.
2. Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente a
posiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas.
*/

const prompt = require('prompt-sync')({sigint:true});

let notas = [];
const cantidadDeEstudiantes = 5;

console.log(`Ingrese las notas de ${cantidadDeEstudiantes} estudiantes.`);
for (let i = 1; i <= cantidadDeEstudiantes; i++) {
    notas[notas.length] = prompt("Ingrese la nota: ");
}
console.log(`Las notas ingresadas son ${notas}`);