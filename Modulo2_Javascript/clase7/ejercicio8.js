//Escribir un programa que convierta grados celsius a fahrenheit
//Pedirle al usuario que ingresa la temp. en grados celsius
//mostrar el resultado en fahrenheit
//investigar ParseFloat, ya que hay que usarlo
//let fahrenheit = celsius * 9 / 5 + 32;

const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

let fahrenheit = celsius * 9 / 5 + 32;

console.log("La temperatura en Fahrenheit es: " + fahrenheit);