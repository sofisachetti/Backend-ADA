const net = require('net');

const client = net.createConnection({port:8080});

client.on('connect', ()=>{
    console.log("Conectado al servidor");
});

client.on('data', (data)=>{
    console.log("El servidor dice:  ", data.toString());
    client.end();  
});

client.on('end', ()=>{
    console.log("Servidor desconectado.");
});

client.on('error', (err) =>{
    console.log('Error: ' + err.message);    
});