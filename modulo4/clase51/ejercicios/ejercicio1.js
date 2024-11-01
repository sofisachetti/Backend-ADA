// Ejercicio 1: Gestión de Entradas en un Museo 
// Un museo necesita recibir a los visitantes en diferentes horarios y desea optimizar la gestión de entradas disponibles. 
// 1. Crea una función checkTicketAvailability que reciba un arreglo de visitantes, 
// una hora de apertura (en milisegundos desde el inicio del día) y el horario en que cada visitante planea llegar. 
// 2. Usa setTimeout para simular la espera de cada visitante hasta la hora de apertura del museo (usa un valor aleatorio de hasta 2 segundos para cada visitante). 
// 3. Cada visitante debe recibir un mensaje de confirmación si hay entradas disponibles (simulado con un 70% de probabilidad). En caso contrario, debe recibir un mensaje indicando que debe esperar su turno. 
// 4. El callback debe recibir un objeto con el nombre del visitante, la hora de llegada y un mensaje de estado de su entrada.

// let visitantes = ['Ana', 'Juan', 'Maria'];

// // horario de apertura a los 5000

// function checkTicketAvailability(visitante, horaLlegada, horaApertura) {
//     if (horaApertura > horaLlegada) {
//         console.log(`La hora de apertura del museo es ${horaApertura}.`);
//     } else if (horaLlegada >= horaApertura) {
//         setTimeout(() => {
//             console.log('Ahora podes ingresar-');
//         }, horaLlegada);
//     }
// }

// HECHO EN CLASES
function checkTicketAvailability(visitantes, apertura, callback) {
    visitantes.forEach((visitantes) => {
        const llegada = visitantes.llegada;
        const delay = apertura - llegada;
        setTimeout(() => {
            const disponible = Math.random() > 0.2;
            const mensaje = disponible ? "Entrada confirmada" : "Debe esperar su turno";
            callback({name: visitantes.name, llegada, status: mensaje})
        }, delay)
    });
}

const visitante = [
    {name: "Sofi", llegada: 9000},
    {name: "Vicky", llegada: 6000},
    {name: "Katy", llegada: 8000},
    {name: "Juli", llegada: 7000},
];

checkTicketAvailability(visitante, 7000, (info) => {
    console.log(`Visitantes: ${info.name}, Llegada: ${info.llegada}, Estado: ${info.status}`);
});










// Lo qu dice chat gpt
// function checkTicketAvailability(visitors, openingTime, arrivalTimes) {
//     visitors.forEach((visitor, index) => {
//         // Simula un tiempo de espera aleatorio de hasta 2 segundos
//         const waitTime = Math.floor(Math.random() * 2000);

//         setTimeout(() => {
//             const arrivalTime = arrivalTimes[index];
//             let message;

//             // Comprobamos si hay entradas disponibles (70% de probabilidad)
//             const isAvailable = Math.random() < 0.7;

//             if (arrivalTime >= openingTime && isAvailable) {
//                 message = `Hola ${visitor}, tu entrada ha sido confirmada.`;
//             } else {
//                 message = `Hola ${visitor}, debes esperar tu turno.`;
//             }

//             // Callback con el objeto correspondiente
//             const ticketStatus = {
//                 name: visitor,
//                 arrivalTime: arrivalTime,
//                 message: message,
//             };

//             console.log(ticketStatus);
//         }, waitTime);
//     });
// }

// // Ejemplo de uso
// const visitors = ['Juan', 'María', 'Luis', 'Ana'];
// const openingTime = 9 * 60 * 60 * 1000; // 9:00 AM en milisegundos
// const arrivalTimes = [
//     9 * 60 * 60 * 1000,   // 9:00 AM
//     9 * 60 * 60 * 1000 + 5000, // 9:00:05 AM
//     9 * 60 * 60 * 1000 + 10000, // 9:00:10 AM
//     9 * 60 * 60 * 1000 + 15000  // 9:00:15 AM
// ];

// // Llamada a la función
// checkTicketAvailability(visitors, openingTime, arrivalTimes);
