// Ejercicio 3: Usar parámetros dinámicos con :id 
// Consigna: En este ejercicio, vamos a permitir que el cliente busque información de un usuario por su ID. 
// Crea un endpoint GET que reciba un parámetro dinámico :id en la URL (por ejemplo, /users/1). 
// Usa req.params para capturar este valor y busca al usuario correspondiente en una lista. 
// Si no se encuentra el usuario, responde con un error 404.

const express = require('express');
const app = express();

// aca va el middleware
app.use(express.json());

const usuarios = [
    {"id": 1, name: "Ana", email: "ana@gmail.com"}, 
    {id: 2, name: "Juan", email: "juan@gmail.com"}
];

app.get('/usuarios/:id', (req, res) => {
    const {id} = req.params
    const userBuscado = usuarios.find(user => user.id === parseInt(id));
    if (!userBuscado) {
        return res.status(404).send('Usuario no encontrado')
    } 
    res.json(userBuscado);
})

app.listen(3000, () => {
    console.log('Servidor conectado en http://localhost:3000');
});
