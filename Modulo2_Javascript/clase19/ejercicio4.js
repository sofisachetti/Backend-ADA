/*Dado un numero entero positivo, mostrar su factorial. Pista: El
factorial de un número se obtiene multiplicando todos los
números enteros positivos que hay entre el 1 y ese número.*/

let numero = 5;

function valor() {
    let multiplicacion = 1;
    for(i = numero; i > 0; i--){
        multiplicacion *= i;
    }
    return multiplicacion;
};

console.log(valor());