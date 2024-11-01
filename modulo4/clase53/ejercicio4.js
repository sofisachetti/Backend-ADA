// 1. Ejercicio con setTimeout - Simulación de Retraso en Carga de Datos
// Crea una función simulateDataLoad que simule la carga de datos de un servidor
// utilizando setTimeout. La función debe aceptar como parámetros el tiempo en
// milisegundos que debe esperar y un callback que se ejecute al finalizar el
// tiempo. Este callback deberá recibir un arreglo de datos simulados como
// ["Producto 1", "Producto 2", "Producto 3"]. Implementa la función para que
// imprima los datos una vez cargados.

function simulateDataLoad(tiempo, callback) {
    console.log('Cargando datos...');
    const mensaje = ['TV Smart', 'Notebook', 'IPhone'];
    setTimeout(() => {
        callback(mensaje);
    }, tiempo)
}

function mostrarDatos(mensaje) {
    console.log('Listado de productos: \n');
    mensaje.forEach(producto => {
        console.log(producto);
    });
}

simulateDataLoad(500, mostrarDatos);