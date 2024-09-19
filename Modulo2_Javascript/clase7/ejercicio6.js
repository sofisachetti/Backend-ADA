//1. Declara dos variables y asígnales valores numéricos de tu  elección.
//2. Utiliza los operadores > (mayor que) y && (y lógico) para verificar si 
//ambos números son mayores que 10.
//3. Utiliza console.log() para mostrar el resultado de la comparación.

let variableUno = 9
let variableDos = 23

if (variableUno > 10 && variableDos > 10) {
    console.log("Ambos números son mayores que 10.")
}
else if (variableUno > 10 || variableDos > 10) {
    console.log("Un número es mayor que 10 y el otro es menor que 10.")
}

else {
    console.log("Ninguno de los números es mayor que 10.")
}