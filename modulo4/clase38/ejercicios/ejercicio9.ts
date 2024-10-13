// Ejercicio 9: Comparaciones lógicas
// Declara dos variables booleanas y realiza una comparación lógica (como AND,
// OR). Imprime el resultado.

let esMayorEdad: boolean = true;
let tineLicencia: boolean = true;

if (esMayorEdad === true && tineLicencia === true) {
    console.log('Puede conducir.');
} else {
    console.log('Para conducir debe ser mayor de edad y tener licencia.');
}