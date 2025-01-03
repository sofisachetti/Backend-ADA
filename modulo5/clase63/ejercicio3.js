// Ejercicio 3: Filtrar usuarios por nombre 
// Crea un endpoint GET que reciba un parámetro de consulta (query parameter) llamado name 
// y devuelva una lista de usuarios cuyo nombre coincida parcial o totalmente con el valor enviado. 
// Si no se encuentra ningún usuario, devuelve un arreglo vacío.

const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [
    {"id": 1, "name": "Ana", "email": "ana@gmail.com"}, 
    {"id": 2, "name": "Juan", "email": "juan@gmail.com"},
    {"id": 3, "name": "Luz Ana", "email": "ana@gmail.com"}, 
    {"id": 4, "name": "Anamaria", "email": "ana@gmail.com"}
]

app.get('/users', (req, res) => {
    const {name} = req.query
    const buscados = usuarios.filter(u => u.name.toLowerCase().startsWith(name));
    // se usa un includes() en lugar del startsWith()
    if (!buscados) {
        res.status(404).send(buscados)
    }
    res.status(200).json({message: 'Usuarios encontrados: ', buscados})
})

app.listen(3000, () => {
    console.log("Servidor conectado en http://localhost:3000");
})