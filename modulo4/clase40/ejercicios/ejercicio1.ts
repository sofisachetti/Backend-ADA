// Ejercicio 1: Operaciones básicas con Arrays

// 1. Declara un array de números con los valores [5, 10, 15, 20, 25].
let numeros: number[] = [5, 10, 15, 20, 25]

// 2. Imprime el tercer elemento del array.
let tercerNumero = numeros[2];
console.log(`El tercer numero del array es: ${tercerNumero}`);

// 3. Añade el número 30 al final del array.
numeros.push(30);

// 4. Elimina el primer número del array.
let primerNumero = numeros.shift();
console.log(`Numero eliminado: ${primerNumero}`);

// 5. Muestra por consola la longitud actual del array
console.log(`Longitud actual del array: ${numeros}`);