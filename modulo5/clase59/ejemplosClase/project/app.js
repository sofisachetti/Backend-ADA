const express = require('express');
const app = express(); // Instancia de express
const taskRouters = require('./routes/taskRoutes');

// Agregamos las rutas bajo el prefijo de /api
app.use('/api', taskRouters);

// Iniciar el servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api/tasks`);
})