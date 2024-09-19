//Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. 
//Muestra los valores antes y después del intercambio en la consola.
//Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), 
//eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

// 1 declarar dos variables
// 2 intercambiar sus valores
// 3 mostrar los valores antes y después del intercambio

let numeroUno = 15;
let numeroDos = 20;

console.log("Al principio Número Uno vale: " + numeroUno + " y Número Dos vale: " + numeroDos);

numeroUno = numeroUno + numeroDos;
numeroDos = numeroUno - numeroDos;
numeroUno = numeroUno - numeroDos;

console.log("Ahora Número Uno vale: " + numeroUno + " y Número Dos vale: " + numeroDos);