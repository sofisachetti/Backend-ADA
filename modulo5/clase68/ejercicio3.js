// Implementa dos endpoints adicionales para el CRUD de usuarios: 
// • PATCH /users/:id: Permite actualizar el name de un usuario. 
// • DELETE /users/:id: Elimina un usuario por id. 
// Pistas: 
// • Usa req.params para capturar el ID de la ruta. 
// • Valida que el usuario exista antes de realizar la operación.

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

app.patch('/users/:id', (req, res) => {
    const { id } = req.params
    
})

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
})
