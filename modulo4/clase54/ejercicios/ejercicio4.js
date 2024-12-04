// 4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores 
// Diseña una función que simule un proceso de pago que tarda 3 segundos en completarse. 
// Si el monto del pago es superior a $1000, el proceso debe fallar y lanzar un error. 
// Utiliza try/catch para manejar el error de manera adecuada. 
// Esta simulación es relevante para entender cómo gestionar errores en procesos financieros o de pago, en los cuales las validaciones son cruciales.

function validarMonto(monto) {
    return new Promise((resolve, reject) => {
        if (monto > 1000) {
            setTimeout(() => {
                reject('El monto no debe superar los $1000.');
            }, 1000);
        } else {
            setTimeout(() => {
                resolve('Pago realizado con exito.');
            }, 3000);
        }
    })
}

async function procesarPago(monto) {
    try {
        console.log('Procesando pago...');
        const pago = await validarMonto(monto);
        console.log(pago);
    } catch (error) {
        console.log('Error:', error);
    }
}

procesarPago(900);
procesarPago(2000);