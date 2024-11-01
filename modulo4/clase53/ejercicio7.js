// 4. Ejercicio de Promesas - Operación Matemática Asíncrona
// Crea una función multiplyNumbers que reciba dos números y devuelva una
// promesa. La promesa debe resolverse con el producto de los dos números si
// ambos son válidos; si uno o ambos no son números, la promesa debe
// rechazarse con el mensaje "Error: Ambos valores deben ser números".

    function multiplyNumbers(num1, num2) {
        return new Promise((resolve, reject) => {
            if(!isNaN(num1) && !isNaN(num2)) {
                resolve("El producto de los números es: " + num1 * num2);
            } else {
                reject("Error: Ambos valores deben ser números");
            }
        })
    }
    
multiplyNumbers(2, 3)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))
multiplyNumbers("hola", 3)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))