//Escribir un porgrama que calcule en indice de masa corporal
//pedir al usuario que ingrese su peso y su altura
//mostrar el IMC calculado
//usar parseFloat
//let imc = peso / (altura * altura);

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Ingrese su peso: "));
let altura = parseFloat(prompt("Ingrese su altura: "));

let imc = peso / (altura * altura);

console.log("Su Índice de Masa Corporal es de: " + imc);
