// Ejercicio 5: Función con parámetros rest
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad
// indefinida de números y devuelva su suma. Luego, llama a la función con varios
// números y muestra el resultado en la consola.

function sumarTodos(...num: number[]): number {
    return num.reduce((num, suma) => num + suma, 0);
}

console.log(sumarTodos(2, 5, 7, 8));
console.log(sumarTodos(1, 3));
console.log(sumarTodos(15, 100, 40, 54, 87, 13, 1));
