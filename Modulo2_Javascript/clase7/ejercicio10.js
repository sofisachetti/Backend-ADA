//programa que calcule el precio final despues d haber aplicado un descuento
//pedir al usuario que ingrese el precio original
//que ingrese el porcentaje del descuento
//mostrar el precio final
//usar parseFloat
//let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

const prompt = require('prompt-sync')();

let precioOriginal = parseFloat(prompt("Ingrese el precio del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese su descuento: "));

let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
console.log("El precio final del producto es: " + montoDescuento);