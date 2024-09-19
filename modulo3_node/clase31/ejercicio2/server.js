const net = require('net');
const {v5: uuid5} = require('uuid');
//const fs = require('fs');

const server = net.createServer((socket) => {
    console.log("Client connected.");

    const NAMESPACE = uuid5.URL;
    const idV5 = uuid5('user', NAMESPACE);
    console.log(`The clients UUID is: ${idV5}`);

    const newJSON = JSON.stringify(idV5, null, 2);
    // fs.writeFile('uuid5.json', newJSON, (err) => {
    //     if (err) {
    //         console.log("Error writing JSON file: ", err);
    //     return;
    //     };
    // });

    socket.write(newJSON);

    socket.on('data', (data) => {
        console.log(`Data received: ${data}`);
    });

    socket.on('end', () => {
        console.log("Client disconnected.");
    });
});

server.listen(8000, () => {
    console.log("Server listening on port 8000.");
});
