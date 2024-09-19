//•	Ejercicio 2 - Comparación de Tres Números: Escribe un programa que pida al usuario tres números 
//y determine cuál es el mayor de los tres. Muestra el número mayor en la consola.
//Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides usar “let” para definir variables.
//Pista 2: Investiga que es parseFloat, ya que este ejercicio lo necesitaras.

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('Ingrese el primer número: '));
let numero2 = parseFloat(prompt('Ingrese el segundo número: '));
let numero3 = parseFloat(prompt('Ingrese el tercer número: '));

if (numero1 > numero2 && numero1 > numero3) {
    console.log("El número más alto es: " + numero1)
}
else if (numero2 > numero3 && numero2 > numero1) {
    console.log("El número más alto es: " + numero2)
}
else if (numero3 > numero1 && numero3 > numero2) {
    console.log("El número más alto es: " + numero3)
}
else {
    console.log("Se encontraron 2 o más números mayores")
};