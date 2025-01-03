// Importar el modulo express
const express = require('express');

// creamos una instancia de express
const app = express();

// Definimos un puerto donde va a estar el servidor
const PORT = 3000;

// Ruta GET para la url raiz
// '/' eso define la ruta raiz, lo primero que va a aparecer que seria: http://localhost:${PORT}
app.get('/', (req, res) => {
    res.send('Hola alumnas de Ada, bienvenidas al servidor de Express.JS')
})

// Ruta get para /pokemon
// http://localhost:${PORT}/pokemon es la otra ruta
app.get('/pokemon', (req, res) => {
    res.json({message: 'Aqui te muestro una lista de pokemones'})
})

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})