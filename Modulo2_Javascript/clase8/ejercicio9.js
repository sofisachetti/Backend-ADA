// Ejercicio 9: 
// Define una constante PI con el valor de pi (3.14159). 
// Pide al usuario que ingrese el radio de un círculo y calcula su área y 
// perímetro utilizando la constante PI

const prompt = require('prompt-sync')();

const PI = 3.14159;
let radioCirculo = parseFloat(prompt("Ingrese el valor del radio: "));

let areaCirculo = PI * radioCirculo ** 2;
let perimetroCirculo = radioCirculo * PI;

console.log("El área de su círculo es: " + areaCirculo);
console.log("El perímetro de su círculo es: " + perimetroCirculo);