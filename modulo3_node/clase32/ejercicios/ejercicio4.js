// Ordenar una Lista de Números
const readlineSync = require('readline-sync');
const entrada = readlineSync.question('Ingrese una lista de numeros separados por comas: ');
const numeros = entrada.split(',').map(num => parseInt(num.trim(), 10));
numeros.sort((a,b) => a - b);   // Ordena de menor a mayor
console.log(`Lista de números ordenados: ${numeros.join(', ')}`);