const net = require('net');
const readline = require('readline');

// Configurar conexion
const OPTIONS = {
    port: 7200,
    host: '127.0.0.1'
};

// Crear la conexion TCP al servidor
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const UserName = process.argv[2].split('=')[1] || 'Unknow' ;
//Obtener el nomrbre del usuario desde los argumentos de linea de comando (si no hay se pone 'unknow')

// Funcion para manejar la entrada del usuario
const handleInput = () => {
    rl.question('Client -> ', (clientMsg) => {
        clientTCP.write(clientMsg);
        handleInput();
    });
};

// Manejar la conexion del cliente
clientTCP.on('connect', () => {
    console.log('Connected to the server.');
    handleInput();
});

// Manejar la data del cliente
clientTCP.on('data', (serverData) => {
    const serverMsg = serverData.toString();
    console.log('Server ->', serverMsg);   
});

// Manejar la desconexion al servidor
clientTCP.on('end', () => {
    console.log('The server has ended the connection');
    rl.close(); //Para cerrar la interface de readline
});

// Manejar los errores
clientTCP.on('error', (err) => {
    console.log(`Error: ${err}`);
    rl.close();
});