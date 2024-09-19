/*Ejercicio 2: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos. 
Luego, escribe un algoritmo para sumar todos los numeros en la matriz*/
let matriz = [ 
    [5, 10, 3, 7, 2], 
    [8, 1, 6, 4, 9], 
    [12, 15, 11, 13, 17], 
    [20, 18, 14, 16, 19], 
    [25, 22, 23, 21, 24]
];

let suma = 0;

for (let fila = 0; fila < matriz.length; fila++){
    for (let columna = 0; columna < matriz[fila].length; columna++){
        suma += matriz[fila][columna];
    }
}

console.log(suma);