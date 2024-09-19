const prompt = require('prompt-sync')();

const verificacionOrigen = (marca) => {
    let origen;

    // esto es para verificar origen del auto.
    if (marca === "Chevrolet" || marca === "Ford" || marca === "Fiat") {
        origen = `${marca} es de origen nacional.`;
    } else {
        origen = `${marca} es de origen importado.`;
    }
    return origen;
};

let marcaAuto = prompt("Ingresa la marca del auto: ");

let resultado = verificacionOrigen(marcaAuto);

console.log(resultado);