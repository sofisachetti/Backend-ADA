/*: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario 
menciona sus flores favoritas. Utiliza un array para almacenar las flores 
favoritas y realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
agrega cada una al array (aquí usa un método de los vistos en Arrays)
3. Pregunta al usuario por una flor específica y verifica si está entre sus 
favoritas (aquí usa un método de los vistos en Arrays)
4. Muestra por consola cuántas de las flores favoritas se mencionaron.
Pista: Se utiliza el método includes*/

const prompt = require('prompt-sync')();

let floresFavoritas = [];

for (i = 0; i < 3; i++) {
    let flores = prompt("Ingresa tus flores favoritas: ");
    floresFavoritas.push(flores);
};
console.log(floresFavoritas);

let busqueda = prompt("Ingrese el nombre de la flor que quiere buscar: ");
if (floresFavoritas.includes(busqueda)) {
    console.log(`${busqueda} se encuentra entre sus flores favoritas.`);
} else {
    console.log(`${busqueda} no se encuentra entre sus flores favoritas.`);
};

