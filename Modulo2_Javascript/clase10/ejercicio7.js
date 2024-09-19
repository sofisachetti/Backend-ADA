/*Ejercicio 7: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
Luego, solicita al usuario ingresar un nombre y 
verifica si ese nombre se encuentra en el array. (Pueden desglosar en 
pasos el código si eso les facilita su desarrollo)*/

const prompt = require('prompt-sync')();

let nombres = [];

// acá solicitamos que ingresen los nombres e imprimimos en consola:
for (i = 0; i < 5; i++) {
    nombres[i] = prompt("Ingrese un nombre: ");
}
console.log(nombres);

//acá hacemos el buscador


for (i = 0; i < nombres.length; i++){
    let buscador = prompt("Ingrese el nombre a buscar: ");
    if (buscador === nombres[i]) {
        console.log(`El nombre ingresado se encuentra en la lista.`);
    } else {
        console.log(`El nombre que ingresó no está en la lista.`);
    }
};
