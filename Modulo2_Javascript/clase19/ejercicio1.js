//1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingrese un número: "));
let numerosSiguientes = [];

function valor(numero) {
    for(i = numero; i <= numero + 10; i++){
        numerosSiguientes.push(i);
    }
    return numerosSiguientes;
};

console.log(valor(numero));