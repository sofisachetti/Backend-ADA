function procesoA() {
    return new Promise((resolve) => setTimeout(() => resolve('Proceso A completado.'), 2000));
}

function procesoB() {
    return new Promise((resolve) => setTimeout(() => resolve('Proceso B completado.'), 2000));
}

function procesoC() {
    return new Promise((resolve) => setTimeout(() => resolve('Proceso C completado.'), 2000));
}

async function ejecutarProcesos() {
    try {
        console.log('Iniciando los procesos paralelos.');
        const resultados = await Promise.all([procesoA(), procesoB(), procesoC()]);
        console.log('Resultados: ', resultados);
        console.log('Todos los procesos completados.');
    } catch (error) {
        console.log('Error en uno de los procesos: ', error);
    }
}

ejecutarProcesos();