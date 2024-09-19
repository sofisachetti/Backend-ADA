//Instalar el readline: npm install readline-sync

const net = require('net');
const readline = require('readline-sync');

const options = {
    port: 5000,
    host: '127.0.0.1'
};
const client = net.createConnection(options);

client.on('connect', () => {
    console.log('Conexion satisfactoria!');
    sendLine();
});

client.on('data', (data) => {
    console.log('El servidor dice: ', data.toString());
    sendLine();
});

client.on('error', (err) => {
    console.log((err.message));
});

function sendLine() {
    var line = readline.question('\Ingrese su mensaje\t'); //muestra un prompt
    if (line == "0") {
        client.end(); //Si ingresó 0 se cierra la conexión con el servidor
    } else {
        client.write(line); //Envia el mje al servidor
    };
};