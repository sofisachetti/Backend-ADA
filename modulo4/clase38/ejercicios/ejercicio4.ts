// Ejercicio 4: Parámetros opcionales simulados
// Declara dos variables, una para almacenar un nombre y otra para almacenar una
// edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
// proporcionada". Si se asigna la edad, imprímela junto al nombre

let nombre2: string = "Ana";
let edad2: undefined;

if (edad2 === undefined) {
    console.log(`Edad de ${nombre2} no proporcionada`);
} else {
    console.log(`${nombre2} tiene ${edad2} anios`);
};