const crypto = require('crypto');
const readlineSync = require('readline-sync');

const userText = readlineSync.question('Ingrese el mensaje que desee encriptar: ');
const hash = crypto.createHash('sha256');
hash.update(userText);
const hashOutput = hash.digest('hex');
console.log(`El hash generado es: ${hashOutput}`);