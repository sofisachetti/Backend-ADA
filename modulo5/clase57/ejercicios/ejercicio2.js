// Ejercicio 2: Ruta para Obtener Información de Usuarios (GET)
// Descripción:
// 1. Amplía tu servidor para manejar una solicitud GET en la ruta /usuarios.
// 2. Cuando el servidor reciba una solicitud en esta ruta, debe responder con un array de objetos JSON que contenga al menos 3 usuarios con los campos id y nombre.
// 3. Asegúrate de enviar el encabezado Content-Type: application/json para que el cliente sepa que está recibiendo datos en formato JSON.

const http = require('http'); 

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/usuarios') { // el if es para verificar si el req coincide con el metodo get
        res.writeHead(200, {"content-type" : 'application/json'}); // línea para configurar la respuesta

        // const users = [      se puede armar un array con los datos y despues pasarlo como parametro del .stringify()
        //     {"ID": 1, "nombre": "Ana"}, 
        //     {"ID": 2, "nombre": "Carlos"}, 
        //     {"ID": 3, "nombre": "Beatriz"}
        // ]
        
        // Para enviar el array con los datos en formato JSON
        res.end(JSON.stringify([{"ID": 1, "nombre": "Ana"}, {"ID": 2, "nombre": "Carlos"}, {"ID": 3, "nombre": "Beatriz"}])) 
    } else {
        res.writeHead(404, {'content-type' : 'text/plain'});
        res.end('Recuerso no encontrado');
    }
});

server.listen(3000, () => {
    console.log('Servidor ejecutandose en http://localhost:3000');
});