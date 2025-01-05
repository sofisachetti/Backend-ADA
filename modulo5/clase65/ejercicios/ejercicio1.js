// Actividad 1: Crear una API REST con un Endpoint de Prueba 
// Consigna: 
// 1. Crea un proyecto de Node.js en una carpeta nueva. 
// 2. Configura Express y express.json(). 
// 3. Define un endpoint GET en la ruta /api/message que devuelva un mensaje JSON como respuesta.

const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/message', (req, res) => {
    res.status(200).json({message: 'Hola, esta es una respuesta'})
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})
