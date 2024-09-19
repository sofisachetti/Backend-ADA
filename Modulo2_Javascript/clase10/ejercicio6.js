/* Bucle For-Array: escribir un programa que clasifique animales en "mamifero", "ave" o "reptil".
ya tengo el array con "animales"
crear un nuevo array que contenga cada clasificacion usando bucle for y operadores ternarios- */

let animales = ["perro", "gato", "loro", "serpiente", "elefante", "aguila"];
let mamifero = [];
let ave = [];
let reptil = [];

for (i = 0; i <= animales.length; i++) {
    animales[i] === "perro" || animales[i] === "gato" || animales[i] === "elefante" ? mamifero.push(animales[i]) : "Ese animal no pertenece a la categoría de mamífero.";
    animales[i] === "loro" || animales[i] === "aguila" ? ave.push(animales[i]) : "Ese animal no pertenece a la categoría de aves.";
    animales[i] === "serpiente" ? reptil.push(animales[i]) : "Ese animal no pertenece a la categoría de reptiles.";
};

console.log(`Los animales pertenecientes a la categoría de mamífero son: ${mamifero}.`);
console.log(`Los animales pertenecientes a la categoría de ave son: ${ave}.`);
console.log(`Los animales pertenecientes a la categoría de reptil son: ${reptil}.`);