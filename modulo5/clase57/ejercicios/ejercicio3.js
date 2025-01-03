// Ejercicio 3: Ruta Dinámica para Obtener un Usuario por su ID
// Descripción:
// 1. Modifica tu servidor para que responda con información de un usuario específico basado en el ID proporcionado en la URL.
// 2. Si se realiza una solicitud GET a /usuarios/1, el servidor debe devolver el usuario con id = 1.
// 3. Si el usuario no existe, el servidor debe responder con un código 404 y el mensaje "Usuario no encontrado".
// Ejemplo:
// • Solicitud: GET /usuarios/2
// • Respuesta: { "id": 2, "nombre": "Carlos" }
// Pistas:
// • Utiliza req.url para capturar el ID en la URL.
// • Usa res.statusCode = 404 para manejar el error si el usuario no existe.

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/usuarios') {
        res.writeHead(200, {"content-type" : "application/json"});
        const usuarios = [
            {"ID": 1, "nombre": "Ana"},
            {"ID": 2, "nombre": "Carlos"},
            {"ID": 3, "nombre": "Beatriz"},
        ];
        res.end(JSON.stringify(usuarios));
    } 
})