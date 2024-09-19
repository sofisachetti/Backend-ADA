const prompt = require('prompt-sync')();

let diaDeLaSemana = prompt("¿Qué día es hoy?: ");

if (diaDeLaSemana == "lunes" || diaDeLaSemana == "miercoles" || 
    diaDeLaSemana == "jueves" || diaDeLaSemana == "viernes") {
        console.log("Hoy nos toca trabajar hasta las 15 hs.");
    } else if (diaDeLaSemana == "martes") {
        console.log("Hoy nos toca trabajar hasta las 18 hs :(");
    } else if (diaDeLaSemana == "sabado" || diaDeLaSemana == "domingo") {
        console.log("Hoy descansamos!");
    } else {
        console.log("Día no válido.");
    };

if (diaDeLaSemana == "lunes" || diaDeLaSemana == "miercoles" || diaDeLaSemana == "viernes") {
    console.log("¡Acordate que tenemos clases!")
 } else {
    console.log("No hay clases, pero acordate de repasar.")
};
