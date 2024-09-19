const net = require('net');
const readline = require('readline-sync');

const server = net.createServer((socket) => {
    console.log('Cliente conectado.', socket.remoteAddress + " : " + socket.remotePort);
});

server.on('connection', (socket) => {

    socket.on('data', (data) => {
        console.log('El cliente dice: ' + data.toString());
        sendMessage(socket);
    });

    socket.on('close', () => {
        console.log('Cliente desconectado'); 
   });

    socket.on('error', (err) => {
        console.log("Error: " + err.message);
    });
});

server.listen(4000, () => {
    console.log('El servidor está escuchando en el puerto 4000');
});

function sendMessage(socket) {
    const message = readline.question('Ingrese una respuesta: ');
    if (message === '0') {
        console.log('Desconectado');
        process.exit(0);
    } else {
        socket.write(message);
    };
};


// aca hacer dos funciones a parte para cargar los datos en el historial de json. Googlear como conectar un json con un server