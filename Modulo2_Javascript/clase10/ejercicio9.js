/*Ejercicio 9: 
En este ejercicio tienes un array ‘colores’ que contiene nombres de diferentes colores. 
Tu tarea es realizar las siguientes operaciones:
✓ Imprimir todos los colores del array.
✓ Modificar el primer color del array a "blanco".
✓ Agregar dos nuevos colores al final del array: "negro" y "gris".*/

let colores = ["rojo", "verde", "azul", "amarillo"];

console.log(colores);

colores[0] = "blanco";

console.log(colores);

colores[colores.length] = "negro";
colores.push("gris");

console.log(colores);