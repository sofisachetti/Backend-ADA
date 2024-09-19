// Ejercicio 3 - Calculadora Simple: 
// Escribe un programa que pida al usuario dos números
//  y una operación (suma, resta, multiplicación o división). 
//  realiza la operación indicada y muestra el resultado en la consola.
// Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides usar “let” para definir variables.
// Pista 2: Investiga que es parseFloat, ya que este ejercicio lo necesitaras.

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese un número: "));
let numero2 = parseFloat(prompt("Ingrese otro número: "));
let operacion = prompt("Ingrese una operación (suma, resta, multiplicacion, division): ");
let resultado;

if (operacion == "suma") {
    console.log(resultado = numero1 + numero2);
} else if (operacion === "resta") {
    console.log(resultado = numero1 - numero2);
} else if (operacion === "multiplicacion") {
    console.log(resultado = numero1 * numero2);
} else if (operacion === "division") { 
    if (numero2 !== 0) {
        console.log(resultado = numero1 / numero2);
    } else {
        console.log("No puede dividir por 0.");
    }
} else {
    console.log("La operación no es válida.")
};