/*Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación.*/

const prompt = require('prompt-sync')();

let nombreMascota = prompt("Ingrese el nombre de su mascota: ");
let estaVacunada = prompt("¿Su mascota está vacunada? (Si/No): ");

let verificarVacunacion = (estaVacunada) => {
    if (estaVacunada === "Si") {
        return `${nombreMascota} tiene las vacunas al día.`;
    } else {
        return `Averigue qué vacunas le faltan a ${nombreMascota}.`;
    }
}

console.log(verificarVacunacion(estaVacunada));