//Imprimir los números entre 5 y el 20, saltando de tres en tres.

let numerosSiguientes = [];

function valor() {
    for(i = 5; i <= 20; i += 3){  // i+=3 => i = i + 3
        numerosSiguientes.push(i);
    }
    return numerosSiguientes;
};

console.log(valor());