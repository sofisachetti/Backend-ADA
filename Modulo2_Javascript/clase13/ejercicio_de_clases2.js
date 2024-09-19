//calculo de descuento x edad. (ej. 6 de la clase pasada)
//con funcion flecha

//solcitar al usuario la edad
const prompt = require('prompt-sync')();

const calcularDecuentoPorEdad = (edad) => {
    let descuento = (edad >= 65) ? 0.15 : 0;
    return descuento;
};

let edad = parseInt(prompt("Ingresa tu edad: "));
let descuento = calcularDecuentoPorEdad(edad);

if (descuento > 0) {
    console.log(`Tienes un descuento del ${descuento * 100}% por ser adulto mayor.`);
} else {
    console.log(`No tienes descuento por edad.`);
}