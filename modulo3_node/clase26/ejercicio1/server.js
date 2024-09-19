const net = require('net');

const server = net.createServer((socket) => { //Acá había puesto createConnection lo que tiraba error*
    console.log('Cliente conectado ', socket.remoteAddress + " : " + socket.remotePort);

    socket.on('data', (data) => {
        console.log('Mensaje del cliente: ' + socket.remoteAddress + ":" + socket.remotePort + data.toString());
        socket.write(data);
   });

   socket.on('end', () => {
        console.log('Cliente desconectado' + socket.remoteAddress + ":" + socket.remotePort);
   });

   socket.on('error', (err) => {
       console.log('Error: ', err.message);
   });
});

server.listen(5000, () => {
    console.log('Escuchando en el puerto 5000');
});




/* Error que tiraba:
node:net:1294
    throw new ERR_INVALID_ARG_TYPE('options.port',
    ^
TypeError [ERR_INVALID_ARG_TYPE]: The "options.port" property must be one of type number or string. Received function
    at lookupAndConnect (node:net:1294:13)
    at Socket.connect (node:net:1254:5)
    at Object.connect (node:net:237:17)
    at Object.<anonymous> (C:\Users\Sofía\OneDrive\Escritorio\ADA_TRABAJOS\clase26\ejercicio1\server.js:3:20)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'ERR_INVALID_ARG_TYPE'
}*/