const net = require('net');
const { v4: uuid4} = require('uuid');

const server = net.createServer((socket) => {
    const idV4 = uuid4();

    console.log("Conexion establecida: ");
    console.log("UUID v4: ", idV4);
    
    socket.write(`Su UUID es: ${idV4}`);

    socket.on('end', () => {
        console.log("Conexión finalizada.");
    });
});

server.listen(8080, () => {
    console.log(`Servidor escuchando en el puerto 8080`);
});