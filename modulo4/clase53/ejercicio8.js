// 5. Ejercicio con Callbacks Anidados - Carga de Datos de Forma Encadenada
// Simula la carga de tres conjuntos de datos diferentes usando setTimeout y
// callbacks anidados. Crea una función loadData que reciba un mensaje y un callback. Esta función debe simular la carga de datos después de 1 segundo y
// luego ejecutar el callback. Llama a loadData tres veces de forma encadenada para mostrar "Datos 1", "Datos 2" y "Datos 3".

function loadData(mensaje, callback) {
    setTimeout(() => {
        console.log('Cargando...', mensaje);
        callback();
    }, 1000)
}

function mensajeFinal() {
    console.log('Datos cargados exitosamente.');
}

loadData('Datos 1', () => {
    loadData('Datos 2', () => {
        loadData('Datos 3', mensajeFinal)
    })
})