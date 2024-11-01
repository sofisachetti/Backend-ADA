// 6. Ejercicio de Promesa - Validación de Email
// Crea una función validateEmail que acepte una dirección de email y devuelva una promesa. La promesa debe resolverse si el email contiene el símbolo "@" y el dominio ".com"; si no, debe rechazarse con un mensaje de error.

function validateEmail(email) {
    return new Promise((resolve, reject) => {
        if (email.includes('@') && email.includes('.com')) {
            resolve('Email valido.')
        } else {
            reject('Error: Email invalido.')
        }
    })
}

validateEmail("email@gmail.com")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))

    validateEmail("email")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))