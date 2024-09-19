// prog que imprima los numero pares del
// 0 al 100.

//Bucle para recorrer del 0 al 100

let numerosPares = [];

for (let i = 0; i <= 100; i++) {
    // aca hay que verificar que el n es par.
    if (i % 2 === 0) {
        //se almacenan en un array. con el uso de length se va agregandoa los casilleros.
        numerosPares[numerosPares.length] = i;
    }
}

console.log(numerosPares);