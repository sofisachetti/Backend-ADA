// Ejercicio 5:
// Escribe un programa que pida al usuario que ingrese tres números 
// y determine cuál es el mayor de los tres.

const prompt = require('prompt-sync')();

let numeroUno = parseFloat(prompt("Ingrese el primer número: "));
let numeroDos = parseFloat(prompt("Ingrese el segundo número: "));
let numeroTres = parseFloat(prompt("Ingrese el tercer número: "));

if (numeroUno > numeroDos && numeroUno > numeroTres) {
    console.log("El primer número es el mayor: " + numeroUno)
}
else if (numeroDos > numeroUno && numeroDos > numeroTres) {
    console.log("El segundo número es el mayor: " + numeroDos)
}
else {
    console.log("El tercer número es el mayor: " + numeroTres)
};

// let numOne, numTwo, numThree;

// do {
    // numOne = parseFloat(prompt('Ingrese el primer número: '));
    // if (isNaN(numOne)) {
        // console.log('Por favor ingrese un número válido');
    // }
// } while (isNaN(numOne));

// do {
    // numTwo = parseFloat(prompt('Ingrese el segundo número: '));
    // if (isNaN(numTwo)) {
        // console.log('Por favor ingrese un número válido');
    // }
// } while (isNaN(numTwo));

// do {
    // numThree = parseFloat(prompt('Ingrese el tercer número: '));
    // if (isNaN(numThree)) {
        // console.log('Por favor ingrese un número válido');
    // }
// } while (isNaN(numThree));

// let mayor;

// if (numOne>=numTwo && numOne>=numThree ) {
    // mayor = numOne
// } else if(numTwo>=numOne && numTwo>= numThree) {
    //  mayor = numTwo
// }else{
    // mayor = numThree
// }

// console.log(`El número mayor es: ${mayor}`);