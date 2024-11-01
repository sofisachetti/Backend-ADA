const promesa1 = Promise.resolve(3);
// Creamos una promesa que se resuelve inmediatamente con el valor 3

const promesa2 = new Promise((resolve, reject) => {
    // Creamos una promesa que se resuelve despues de 100ms
    setTimeout(resolve, 100, "Hola")
    // Despues de los 100ms, la promesa se resuelve con valor "Hola"
})

const promesa3 = new Promise((resolve, reject) => {
    // Creamos una promesa que se resuelve despues de 500ms
    setTimeout(resolve, 500, "chicas!")
    // Despues de los 500ms, la promesa se resuelve con valor "chicas!"
})

Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log('Resultados de todas las promesas: ', resultados);
    })
    .catch((error) => {
        console.log('Una de las promesas fue rechazada ', error);
    })