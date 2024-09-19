const net = require('net');
const path = require('path');

const server = net.createServer(() => {
    console.log("Client connected.");
});

server.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log("Message from client: " + data.toString());
        const route = data.toString();
        const basename = path.basename(route);
        const dirname = path.dirname(route);
        const extname = path.extname(route);
        socket.write(`File name: ${basename}\n Extension of file: ${extname}\n Directory of file: ${dirname}`);
    });
    socket.on('close', () => {
        console.log("Client disconnected.");
    });
    socket.on('error', (err) => {
        console.log("Error: " + err.message);
    });
});

server.listen(8082, () => {
    console.log("Server listening on port 8082.");
});