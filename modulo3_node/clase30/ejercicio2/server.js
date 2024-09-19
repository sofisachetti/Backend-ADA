const net = require('net');
const path = require('path');

const server = net.createServer(() => {
    console.log('Cliente conectado');
});

server.on('connection', (socket) => { 
    
    socket.on('data', (data) => { 
        console.log('Mensaje del cliente: ' +  data.toString());
        const ruta = data.toString();
        const normalizado = path.normalize(ruta);
        socket.write('La ruta normalizada es: ' + normalizado);
        
    });

    socket.on('close', () => { 
        console.log('Cliente desconectado.');
    });

    socket.on('error', (err) => { 
        console.log('Error: ', err.message);
    });
});

server.listen(8081, () => {
    console.log('El servidor está escuchando en el puerto 8081.');
});
