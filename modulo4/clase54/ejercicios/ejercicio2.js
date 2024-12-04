// 2. Lectura de Datos con Retraso Simulado y Manejo de Errores 
// Escribe una función que simule la obtención de datos de una base de datos o API. 
// La función debe simular un retraso de 2 segundos para obtener los datos. Sin embargo, en ocasiones esta operación puede fallar (simula este fallo lanzando un error manualmente). 
// Detalles: 
// • Utiliza async y await para hacer que la función sea asíncrona. 
// • Usa try/catch para capturar posibles errores. 
// • Si todo va bien, muestra el mensaje "Datos obtenidos con éxito". 
// • En caso de error, muestra "Error al leer datos". 
// Esta simulación es muy útil para ver cómo manejar errores en operaciones de obtención de datos, una tarea común en programación backend.

function obtenerDatos(datos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(datos) {
                resolve('Datos obtenidos con exito.')
            } else {
                reject('Error en la obtencion de datos.')
            }
        }, 2000);
    })
}

async function consultarDatos() {
    try {
        console.log('Consultando datos...');
        const respuesta = await obtenerDatos('datos');
        console.log(respuesta);
    } catch (error) {
        console.log('Error: ', error);
    }
}

consultarDatos();