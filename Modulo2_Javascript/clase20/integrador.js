/*Tenemos un array en una variable datos con números al azar, que pueden ser tanto positivos como negativos*/

const datos = [2, -4, 6, 0, 5, -1, 7];
//Queremos eliminar todos los números negativos
let datosPositivos = datos.filter(elementos => elementos >= 0)
console.log(`Este es el array de datos positivos: ${datosPositivos}`);

//Otra forma de eliminar negativos: nombre.splice(posicion, cantidad a eliminar)
for (i = 0; i < datos.length; i++) {
    if (datos[i] < 0) {
        datos.splice(i, 1);
    }
};
console.log(datos);

//Con los números restantes, obtener el doble de cada uno
let datosMultiplicados = datosPositivos.map(numero => numero * 2)
console.log(datosMultiplicados);

//Finalmente, obtener la suma de todos los números que obtuvimos
let x = datosMultiplicados.reduce((acum, num) => acum + num, 0);

// codear la solucion - reemplazar x
const total = x;
console.log(total);






/*const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]*/
