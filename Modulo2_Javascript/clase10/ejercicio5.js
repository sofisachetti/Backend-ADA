/* Escribe un programa que lea una nota (entero entre 0 y 100) e imprima 
el equivalente en letras siguiendo esta escala:
✓ A si la nota está entre 90 y 100
✓ B si la nota está entre 80 y 89
✓ C si la nota está entre 70 y 79
✓ D si la nota está entre 60 y 69
✓ F si la nota está entre 0 y 59
Utiliza operadores ternarios para determinar la calificación en letras. */

let nota = 45;

console.log((nota >= 90 && nota <= 100) ? "La nota es A." : nota >= 80 && nota <= 89 ? "La nota es B." : nota >= 70 && nota <= 79 ? "La nota es C." : nota >= 60 && nota <= 69 ? "La nota es D." : nota >= 0 && nota <= 59 ? "La nota es F." : " ");

// console.log((nota >= 90 && nota <= 100) ? "La nota es A." : " ");
// console.log((nota >= 80 && nota <= 89) ? "La nota es B." : " ");
// console.log((nota >= 70 && nota <= 79) ? "La nota es C." : " ");
// console.log((nota >= 60 && nota <= 69) ? "La nota es D." : " ");
// console.log((nota >= 0 && nota <= 59) ? "La nota es F." : " ");