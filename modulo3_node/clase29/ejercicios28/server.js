const net = require('net');
const readline = require('readline');
const path = require('path');

const PORT = 7200;
const HISTORY_FILE = path.join(__dirname, 'history.json'); //'path' es la ruta, aca seria la ruta del archivo history.json

// Arreglo para almacenar los clientes conectados
let clients = [];

// Crear el servidor
const server = net.createServer((socket) => {
    console.log('Cliente conectado: ', socket.remoteAddress);
    clients.push(socket); //Para agregar los clientes

    // Manejar los datos recibidos por el cliente
    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log('Mensaje rebido: ', message);
    });

    if (message === '--history') {
        const history = loadHistory();
        socket.write(JSON.stringify(history, null, 2));
    } else if (message === '--eraseMessages') {
        saveHistory([{}])
        socket.write('Historial fue borrado.');
    } else {
        clients.forEach(client => {
            if (client !== socket) {
                client.write(message);
            }
        });

        const timeStamp = getFormattedDate(); 
        const userName = process.argv[2]?.split('=')[1] || 'Unknown';

        const messageObject = {
            message,
            sentBy: userName,
            date: timeStamp
        }

        const history = loadHistory();
        history.push(messageObject);
        saveHistory(history);
    }
});

// Manejamos desconexion del cliente
socket.on('end', () => {
    console.log('Cliente desconectado: ', socket.remoteAddress);
    clients = clients.filter(client => client !== socket);
})