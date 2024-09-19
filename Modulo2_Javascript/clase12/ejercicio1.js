// calcular precio final con IVA. 

const prompt = require('prompt-sync')();

const calcularPrecioIva = (precio, iva) => precio + (precio * iva / 100);

let precio = parseFloat(prompt("Ingresa el precio del producto: "));
let iva = parseFloat(prompt("Ingesa el porcentaje de IVA: "));
let precioFinal = calcularPrecioIva(precio, iva);

console.log(`El precio final con IVA es ${precioFinal}`);