const net = require('net');
const readline = require('readline-sync');

const client = net.createConnection({ port: 7000 });

client.on('connect', () => { //Evento connect
    console.log('Conexión satisfactoria');
    var line = readline.question('Escribe algo: ')
    client.write(line);
    client.end();
});

client.on('data', (data) => { //Evento data 
    console.log('El servidor dice: ', data.toString());
});

client.on('end', () => { //Evento end
    console.log('Servidor desconectado.');
});

client.on('error', (err) => { // Evento error
    console.log(err.message);
});