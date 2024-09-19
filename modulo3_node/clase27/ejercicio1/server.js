const net = require('net');

const server = net.createServer(() => {
    console.log('Cliente conectado');
});

server.on('connection', (socket) => { //Evento connection
    
    socket.on('data', (data) => { //Evento data
        console.log('Mensaje del cliente: ' +  data.toString());
        socket.write('Mensaje recibido');
    });

    socket.setTimeout(10000);
    socket.on('timeout', () => { //Evento timeout
        console.log('Tiempo de espera alcanzado.');
        socket.end();
    });

    socket.on('close', () => { //Evento cerrar
        console.log('Cliente desconectado.');
    });

    socket.on('error', (err) => { //Evento error 
        console.log('Error: ', err.message);
    });
});

server.listen(7000, () => {
    console.log('El servidor está escuchando en el puerto 7000.');
});