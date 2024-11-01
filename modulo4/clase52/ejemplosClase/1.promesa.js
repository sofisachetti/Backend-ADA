// Creamos una promesa
const miPromesa = new Promise((resolve, reject) => {
    console.log('Estado: pendiente. La operacion ha comenzado...');
    
    // Simulamos una operacion asincrona
    setTimeout(() => {
        const exito = Math.random() > 0.5
        // Generamos un valor booleano aleatoreo, true es exito false es fallo
        if (exito) {
            resolve('Operacion completada con exito.')
        } else {
            reject('Error: no se pude completar la operacion.')
        }
    }, 2000);
})

// Manejo de la promesa
miPromesa
    // Este bloque se ejecuta si la promesa se resuelve con xito
    .then((resultado) => {
        console.log('Exito: ', resultado);
    })
    // Este bloque se ejecuta si la promesa es rechazada
    .catch((error) => {
        console.log('Error: ', error);
    })
    .finally(() => {
        console.log('Promesa finalizada.');
    })

console.log('Promesa creada, esperando resultado...');
