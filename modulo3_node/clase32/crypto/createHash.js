const crypto = require('crypto');

const data = 'Este es un mensaje secreto';
const hash = crypto.createHash('sha256');
hash.update(data); //Para actualizar el hash con los datos
const hashOutput = hash.digest('hex') //Para formato hexadecimal
console.log('Hash SHA-256', hashOutput);
