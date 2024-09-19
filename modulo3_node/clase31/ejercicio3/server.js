const net = require('net');
const {v1: uuid1} = require('uuid');

const server = net.createServer((socket) => {
    console.log("Client connected.");

    const idV1 = uuid1();
    console.log(`The clients UUID is: ${idV1}`);

    const idJSON = JSON.stringify(idV1);

    socket.write(idJSON);

    socket.on('data', (data) => {
        console.log("Data received: " + data);
    });

    socket.on('error', (err) => {
        console.log("Error: " + err.message);
    });

    socket.on('end', () => {
        console.log("Client disconnected.");
    });
});

server.listen(7000, () => {
    console.log("Server listening on port 7000");
});