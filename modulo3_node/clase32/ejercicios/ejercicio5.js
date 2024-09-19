const readlineSync = require('readline-sync');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let text = readlineSync.question('Enter your text here: ');

let encriptado = cipher.update(text, 'utf-8', 'hex') 
encriptado += cipher.final('hex'); 

console.log('Your encrypted text is: ', encriptado);

const decifrado = crypto.createCipheriv(algorithm, key, iv);

let desencriptado = decifrado.update(encriptado, 'hex', 'utf-8');
desencriptado += decifrado.final('utf-8');

console.log('Your decrypted text is: ', desencriptado);