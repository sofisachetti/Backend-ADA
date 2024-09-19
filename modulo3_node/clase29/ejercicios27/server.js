const net = require('net');
const readline = require('readline');

const PORT = 10000;

//Crear servidor
const server = net.createServer((socket) => {
    console.log('Cliente conectado\n');

    // Enviar un mensaje inicial al cliente
    socket.write('Bienvenidos al servidor TCP. Envia "status" para verificar el estado.\n');

    // Manejar datos recibidos del cliente
    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Mensaje recibido del cliente: ${message}`);

        // Responder al cliente segun el status
        if (message === 'status') {
            socket.write('El servidor está en funcionamiento.\n');
        } else {
            socket.write(`Servidor recibio: ${message}`);
        }
    });

    // Manejar el cierre
    socket.on('end', () => {
        console.log('Cliente desconectado\n');
    });

    // Manejamos errorres
    socket.on('error', (err) => {
        console.log('Error en el socket: ', err.message);
    });

    // Enviar mensajes desde el servidor
    sendMessageFromServer(socket);
});

// Menejar errorres del servidor
server.on('error', (err) => {
    console.log(`Error en el servidor: ${err.message}\n`);
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}\n`);
});

// Funcion para enviar mensajes desde el servidor
function sendMessageFromServer(socket) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.setPrompt('Mensaje para el cliente: ');
    rl.prompt();

rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        console.log('Servidor cerrado.\n');
        rl.close();
        socket.end();
    } else {
        socket.write(input + '\n');
        rl.prompt();
    }
});
};