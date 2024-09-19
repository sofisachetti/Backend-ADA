/*
Ejercicio 3: Switch
Utilizando la estructura switch, crea un programa que le pida al usuario
valorar la película que acaba de ver según la siguiente escala:
✓ Muy mala.
✓ Mala.
✓ Mediocre.
✓ Buena.
✓ Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás
o te alegrás por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos
mucho."
En caso de que el usuario ingrese un valor distinto, mostrarle el
mensaje: "Ingresaste un valor inválido".
Finalmente, agradecer al usuario por su visita.
*/

const prompt = require('prompt-sync')({sigint:true});
let valoracionPeli = prompt("Ingresa tu valoración de la película: ");

switch (valoracionPeli) {
    case "Muy malo":
        console.log("Calificaste la película como Muy mala. Lo lamentamos mucho.");
        break;
    case "Mala":
        console.log("Calificaste la película como Mala. Lo lamentamos mucho.");
        break;
    case "Mediocre":
        console.log("Calificaste la película como Mediocre. Lo lamentamos mucho.");
        break;
    case "Buena":
        console.log("Calificaste la película como Buena. ¡Que bien!.");
        break;
    case "Muy buena":
        console.log("Calificaste la película como Muy buena. ¡Que bien!.");
        break;
    default:
        console.log("Ingresaste un valor inválido.");
};

console.log("Gracias por tu calificación!");