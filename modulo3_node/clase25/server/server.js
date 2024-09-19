const net = require('net'); //Importar el modulo netcd

const server = net.createServer();//Crear un servidor TCP

server.on('connection', (socket) => {
    socket.on('data', (data) => { //Mostrar en consola la direccion y puerto del cliente
        console.log('n\ El cliente ' + socket.remoteAddress + ": " + socket.remotePort + " dice: " + data);
        socket.write('Mensaje recibido.');
    });

    socket.on('close', () => { //Para saber cuando un cliente se desconecta
        console.log('Comunicacion finalizada');
    });

    socket.on('error', (err) => { //Para mostrar si ocurre un error
        console.log(err.message);
    });
});

//Inicio el servidor en el puerto 5000
server.listen(5000, () => {
    console.log('El servidor esta escuchando en el puerto', server.address().port);
});