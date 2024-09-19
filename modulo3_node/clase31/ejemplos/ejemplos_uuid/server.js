const net = require('net');
const {v1: uuid1, v3: uuid3, v4: uuid4, v5: uuid5} = require('uuid');

const NAMESPACE = uuid3.URL;

const server = net.createServer((socket) => {
    const idV1 = uuid1();
    const idV3 = uuid3("usuario", NAMESPACE);
    const idV4 = uuid4();
    const idV5 = uuid5("usuario", NAMESPACE);

    console.log("Conexion establecida: ");
    console.log("UUID v1: ", idV1);
    console.log("UUID v3: ", idV3);
    console.log("UUID v4: ", idV4);
    console.log("UUID v5: ", idV5);
    
    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data}`);
    });

    socket.on('end', () => {
        console.log("Conexión finalizada.");
    });
});

server.listen(8080, () => {
    console.log(`Servidor escuchando en el puerto 8080`);
});