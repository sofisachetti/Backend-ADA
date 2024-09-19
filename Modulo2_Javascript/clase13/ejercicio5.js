/*Ejercicio 5: Números Naturales
Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo
contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras.
Considerar que el usuario ingresa números de hasta dos cifras.*/

/* PRIMERA RESOLUCION
const dosCifras = 10;
const tresCifras = 100;

let numero = parseInt(prompt("Ingrese un número de hasta dos cifras: "));

if (numero < dosCifras && numero > 0) {
    let leFalta = dosCifras - numero; 
    console.log(`Al número ${numero} le faltan ${leFalta} para ser de dos cifras.`);
} else if (numero < tresCifras && numero > dosCifras) {
    let leFalta = tresCifras - numero;
    console.log(`Al número ${numero} le faltan ${leFalta} para ser de tres cifras.`);
};*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número: "));

if (numero < 10 && numero > 0) {
    let faltaParaDosCifras = 10 - numero;
    console.log(`A ${numero} le faltan ${faltaParaDosCifras} para ser de dos cifras.`);
} else if (numero < 100 && numero >= 10) {
    let faltaParaTresCifras = 100 - numero;
    console.log(`A ${numero} le faltan ${faltaParaTresCifras} para ser de tres cifras.`);
} else {
    console.log("Número no válido. Asegurese que sea un número de hasta dos cifras.")
};