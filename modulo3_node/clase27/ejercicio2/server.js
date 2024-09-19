const net = require('net');

let clients = [];

const server = net.createServer((socket) => {

    clients.push(socket); //Para que los nuevos clientes que se conecten se guarden en el arreglo.
    console.log('A new client has connected: ' + socket.remoteAddress + ' : ' + socket.remotePort);
    
    socket.on('data', (data) => {
        sentMessage(data, socket);
        socket.write('Message received.')
    });

    socket.on('error', (err) => {
        console.log('Error: ' + err.message);
    });

    socket.on('close', () => {
        console.log('Client disconnected: ' + socket.remoteAddress + ":" + socket.remotePort);
    });

});

server.listen(9000, () => {
    console.log('Server listening in port 9000.');
});

function sentMessage(message, socketClient) {
    if (message.toString() === 'exit') { //Si un cliente sale del chat
        let index = clients.indexOf(socketClient); //Se busca el cliente que quiere salir dentro del array
        clients.splice(index,1); //Acá lo elimino del array
    } else {
        clients.forEach(socket => { //Para enviar el mensaje a todos los usuarios conectados
            if (socket !== socketClient) { //Para no enviar el mensaje al mismo cliente que lo envio
                socket.write(message);
            };
        });
    };
};