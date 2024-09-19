const net = require('net');
const readline = require('readline-sync');
const path = require('path');

const client = net.createConnection({ port: 8081 });

client.on('connect', () => { 
    console.log('Conexión satisfactoria');
    var line = readline.question('Escribe la ruta a normalizar: ')
    client.write(line);
    client.end();
});

client.on('data', (data) => { 
    console.log('El servidor dice: ', data.toString());
});

client.on('end', () => { 
    console.log('Servidor desconectado.');
});

client.on('error', (err) => {
    console.log(err.message);
});