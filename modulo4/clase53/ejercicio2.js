// Ejercicio 2: Hospital - Sistema de Registro de Pacientes con Promesas 
// Simula el sistema de registro de pacientes de un hospital. Crea una función registrarPaciente que reciba el nombre del paciente y su estado de emergencia (booleano). La función debe devolver una promesa:
// • Si emergencia es true, la promesa se resuelve con el mensaje Paciente
// <Nombre> registrado en emergencia.
// • Si emergencia es false, la promesa se resuelve con el mensaje Paciente
// <Nombre> registrado en sala de espera.
// • Si el nombre del paciente está vacío o es null, la promesa se rechaza con
// el mensaje Error: Nombre inválido para registro. Instrucciones:
// • Usa una promesa para manejar los casos de emergencia y sala de espera.
// • Asegúrate de validar que el nombre del paciente no esté vacío ni sea null.
// • Maneja la resolución o rechazo de la promesa en el código llamador con
// then y catch.

function registrarPaciente(nombre, emergencia) {
    return new Promise((resolve, reject) => {
        if(!nombre) {
            reject("Error: Nombre inválido para registro.");
            return;
        }

        setTimeout(() => {
            if (emergencia) {
                resolve(`Paciente ${nombre} registrado en emergencia.`);
            } else {
                resolve(`Paciente ${nombre} registrado en sala de espera.`)
            }
        }, 1000)
    })
}

// Llamada a funcion con un paciente de emergencia
registrarPaciente("Sofi", true)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))

registrarPaciente("Vicky", false)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))

registrarPaciente("Mariana", false)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))

registrarPaciente(false) // toma el error
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))

registrarPaciente(true) // lo pasa
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))
