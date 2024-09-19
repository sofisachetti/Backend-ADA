//1. Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
//2. Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
//3. Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
//4. Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

//1. Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu 
//elección.
//2. Concatena el “string” de la variable texto con otro mensaje adicional.
//3. Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
//4. Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.

let verdadero = false
let texto = "Estamos aprendiendo JS."
let numero = 123
let nada = null

let suma = numero + 2
console.log(suma)

let mensaje = "Somos Sofi y Sofi y " + texto
console.log(mensaje)

if (verdadero === false) {
    console.log("Verdadero es true")
}
else if (verdadero === true){
    console.log("Verdadero es false")
};

if (nada === "23"){
    console.log("Es incorrecto")
}
else if (nada === null){
    console.log("Es correcto")
}; 