// importamos modulo http
const http = require('http');

// Creamos un servidor
const server = http.createServer((request, response) => {
    
    // Establece el codigo de estado de la respuesta a 200 (ok), indicando que la solicitud fue exitosa
    response.status = 200;

    // Configura el encabezado 'Content-Type' para que el client sepa que el conntenido sera de texto plano
    response.setHeader('Content-Type', 'text/plain');

    // Envia la respuesta al cliente con el mensaje Hola Chicas y finaliza la respuesta
    response.end('Hola, chicas');
})

server.listen(3000, () => {
    console.log('Servidor ejecutandose en http://localhost:3000');
})