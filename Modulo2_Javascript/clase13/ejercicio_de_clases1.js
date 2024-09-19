const prompt = require('prompt-sync')();

//1. le pedimos al usuario año de nacimiento
let anioNacimiento = parseInt(prompt("Ingresá tu año de nacimiento: ")); //usar la ñ no es una buena práctica

//2. definir el año actual
const anioActual = 2024;

//3. calcular la edad
let edad = anioActual - anioNacimiento;

//4. imprimir en consola
console.log(`Tienes ${edad} años.`);