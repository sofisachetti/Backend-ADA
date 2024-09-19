/*: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la cantidad.*/

const prompt = require('prompt-sync')();

let cantidadDeProductos = parseInt(prompt("Ingrese la cantidad del producto: "));
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto: "));

let descuentoPorCantidad = (cantidadDeProductos, precioUnitario) => {
    let precioTotal = precioUnitario * cantidadDeProductos;
    if (cantidadDeProductos >= 5) {
        let descuento = precioTotal - (precioTotal * 0.15)
        return `Al llevar más de 5 productos iguales tenés un 15% de descuento. El total a abonar es de ${descuento}.`;
    } else {
        return `El total a abonar es ${precioTotal}`;
    }
}

console.log(descuentoPorCantidad(cantidadDeProductos, precioUnitario));