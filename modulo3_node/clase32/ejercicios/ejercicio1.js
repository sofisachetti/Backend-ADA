const readlineSync = require('readline-sync');

const nombre = readlineSync.question('Ingrese su nombre: ');
const edad = readlineSync.questionInt('Ingrese su edad: ');

console.log(`Hola, ${nombre}! Tu edad es: ${edad} anios.`);