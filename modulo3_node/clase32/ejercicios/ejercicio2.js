const readlineSync = require('readline-sync');
const crypto = require('crypto');

const options = ['Ver mensaje de bienvenida', 'Generar un hash de un texto', 'Salir'];
const indexOptions = readlineSync.keyInSelect(options, 'Elija la opcion que desea: ');

switch (indexOptions) {
    case 0: //El case toma el número de índice del array, por eso arrancamos en 0.
        console.log(`Haz seleccionado: ${options[indexOptions]}`);
        console.log(`Bienvenida al sistema`);
        break;
    case 1: 
        console.log(`Haz seleccionado: ${options[indexOptions]}`);
        const data = readlineSync.question('Ingrese el mensaje que desee encriptar:');
        const hash = crypto.createHash('sha256');
        hash.update(data);
        const hashOutput = hash.digest('hex');
        console.log(`El texto encriptado es: ${hashOutput}`);
        break;
    case 2:
        console.log(`Haz seleccionado: ${options[indexOptions]}`);
        console.log(`Nos vemos pronto`);
        break;
    case -1:
        console.log('No seleccionaste ninguna opción');
        break;
    default:
        console.log('No seleccionaste ninguna opción');
};
