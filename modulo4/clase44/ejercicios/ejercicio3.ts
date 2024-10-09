// Actividad 3: Crear una función genérica
// Crea una función genérica que tome un parámetro de cualquier tipo y lo
// devuelva. Prueba la función con diferentes tipos de datos. 

function generica<T>(valor: T): T {
    return valor;
}

let tipoString = generica<string>("Hola");
let tipoNumber = generica<number>(3);
let tipoBoolean = generica<boolean>(true);
let tipoNull = generica<null>(null)
console.log(tipoString);
console.log(tipoNumber);
console.log(tipoBoolean);
console.log(tipoNull);
