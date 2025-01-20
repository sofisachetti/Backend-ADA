// 1. Crea un arreglo inicial de usuarios con propiedades id y name: 
// Por ejemplo: { id: 1, name: “Emma”} 
// 2. Implementa dos endpoints: 
// • GET /users: Devuelve la lista de usuarios. 
// • POST /users: Permite agregar un usuario enviando un objeto con id y name en el body. 
// 3. Si faltan datos, responde con un error adecuado. 
// Pistas: • Usa app.get() y app.post() para manejar las rutas. 
// • Utiliza req.body para capturar los datos enviados en la solicitud POST. 
// • Asegúrate de usar express.json() como middleware para procesar el cuerpo de la solicitud.

const express = require('express');

const app = express();

const users = [
    { id: 1, name: "Emma"},
    { id: 2, name: "Ana"},
    { id: 3, name: "Juan"}
]

app.use(express.json())

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    const { id, name } = req.body
    if (!id || !name) {
        return res.status(400).json({error: 'No se ingreso el id o el nombre de usuario.'})
    }
    const newUser = {id: id, name: name}
    users.push(newUser)
    res.status(201).json({message: 'Usuario agregado con exito.'})
})

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
})
