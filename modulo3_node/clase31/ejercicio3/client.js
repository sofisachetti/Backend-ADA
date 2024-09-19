const net = require('net');

const client = net.createConnection({port: 7000});

client.on('connect', () => {
    console.log("Connected to server.");
});

client.on('data', (data) => {
    const parsJSON = JSON.parse(data);
    console.log("Your UUID v1 is: ", parsJSON);
    client.end();
});

client.on('end', () => {
    console.log("Server disconnected.");
});

client.on('error', (err) => {
    console.log("Error: ", err.message);
});