const net = require('net')

const client = net.createConnection({port : 8080})

client.on('connect', () => {
    console.log('Conectado al servidor.');
});