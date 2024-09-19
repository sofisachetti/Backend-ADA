//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.

function valor() {
    let suma = 0;
    for(i = 0; i <= 100; i ++){
        suma += i;
    }
    return suma;
};

console.log(valor());