const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado al servidor.');
    
    socket.on('data', (data) => {
        
    })
});

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080.');
});