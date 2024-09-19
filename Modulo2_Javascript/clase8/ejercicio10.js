// Ejercicio 10: 
// Pide al usuario que ingrese un número del 1 al 7 
// mostrar el día de la semana correspondiente
// Si el número no está dentro de ese rango, muestra un mensaje de error.
const prompt = require('prompt-sync')();

let diaElegido = parseInt(prompt("Ingrese un número del 1 al 7: "));

if (diaElegido === 1) {
    console.log("Su día es lunes.")
}
else if (diaElegido === 2) { 
    console.log("Su día es martes.")
}
else if (diaElegido === 3) {
    console.log("Su día es miércoles.")
}
else if (diaElegido === 4) {
    console.log("Su día es jueves.")
}
else if (diaElegido === 5) {
    console.log("Su día es viernes.")
}
else if (diaElegido === 6) {
    console.log("Su día es sábado.")
}
else if (diaElegido === 7) {
    console.log("Su día es domingo.")
}
else {
    console.log("El número no es válido")
};