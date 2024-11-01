const promesa1 = Promise.reject('Error en programa 1');
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hola')
})
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Chicas de back')
})

// Dvuelve la que se ejecute primero
Promise.any([promesa1, promesa2, promesa3])
    .then((resultado) => {
        console.log('Primera promesa resuelta: ', resultado);
    })
    .catch((error) => {
        console.log('Todas las promesas fueron rechazadas: ', error);
    })