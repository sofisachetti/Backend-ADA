const prompt = require('prompt-sync')();

let gastosDelMes = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

let sumaSemana = [];

function conocerGastos(gastosDelMes) {  
    //total de gastos en una semana 
    for (let semana = 0; semana < gastosDelMes.length; semana++) {
        let suma = 0;
        for (let dia = 0; dia < gastosDelMes[semana].length; dia++) {
            suma += gastosDelMes[semana][dia];
        }
        sumaSemana.push(suma)
    }
    //Para que el usuario pueda elegir la semana para saber el resultado
    let numeroDeSemana = parseInt(prompt("Indique el numero de semana (del 0 al 3): "));
        if (numeroDeSemana === 0) {
            console.log(`El gasto de la semana ${numeroDeSemana} fue de $${sumaSemana[0]}.`);
        } else if (numeroDeSemana === 1) {
            console.log(`El gasto de la semana ${numeroDeSemana} fue de $${sumaSemana[1]}.`);
        } else if (numeroDeSemana === 2) {
            console.log(`El gasto de la semana ${numeroDeSemana} fue de $${sumaSemana[2]}.`);
        } else if (numeroDeSemana === 3) {
            console.log(`El gasto de la semana ${numeroDeSemana} fue de $${sumaSemana[3]}.`);
        } else {
            console.log(`El número de semana que ingresó no es válido.`);
    }
};
console.log(conocerGastos(gastosDelMes));

//Gasto de un día particular
let indiceSemana = parseInt(prompt("Ingrese el índice de la semana a consultar (del 0 al 3): "));
let indiceDia = parseInt(prompt("Ingrese el índice del día (del 0 al 6): "));
console.log(`b) El gasto de la semana ${indiceSemana} en el día ${indiceDia} fue de $${gastosDelMes[indiceSemana][indiceDia]}`);


//Total del mes:
let totalMes = 0;
for(i = 0; i < sumaSemana.length; i++){
    totalMes += sumaSemana[i];
};
console.log(`c) El total de gastos del mes es de $${totalMes}`);
