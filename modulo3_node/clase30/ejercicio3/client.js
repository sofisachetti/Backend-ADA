const net = require('net');
const readline = require('readline-sync');
const path = require('path');

const client = net.createConnection({ port: 8082 });

client.on('connect', () => {
    console.log("Connection successful.");
    var line = readline.question("Enter the path: ");
    client.write(line);
    client.end();
});

client.on('data', (data) => {
    console.log("Server said:\n" + data.toString());
});

client.on('end', () => {
    console.log("Server disconnected.");
});

client.on('error', (err) => {
    console.log("Error: " + err.message);
});