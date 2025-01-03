// Ejercicio 2: Crear un Endpoint POST para agregar usuarios 
// Consigna: Ahora vamos a permitir que el cliente agregue nuevos usuarios a la lista. 
// Tu tarea es crear un endpoint POST que reciba los datos del usuario desde el cuerpo de la solicitud en formato JSON. 
// Los datos deben incluir name y email. Si alguno de estos datos falta, el servidor debe responder con un error (código 400). 
// Recuerda usar express.json() como middleware para procesar los datos del cuerpo de la solicitud.

const express = require('express');
const app = express();

// aca va el middleware
app.use(express.json());

const usuarios = [
    {"name": "Ana", "email": "ana@gmail.com"}, 
    {"name": "Juan", "email": "juan@gmail.com"}
];

app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
})

app.post('/usuarios/agregar', (req, res) => {
    const {name, email} = req.body
    if (!name || !email) {
        res.status(404).send('Falta completar uno de los datos')
    } else {
        const user = {name, email}
        usuarios.push(user);
        res.status(201).json({message: 'Usuario creado: ', user: { name, email }})
    }
}) 

app.listen(3000, () => {
    console.log('Servidor conectado en http://localhost:3000');
});