// Importar el framework de express
const express = require('express');

// Creamos una instancia de la api de express
const app = express();

// Habilitamos el middleware para analizar cuerpos de solicitudes en formato JSON
app.use(express.json());

// base de datos
let animals = [
    {id: 1, name: "Leon", species: "Felino"},
    {id: 2, name: "Elefante", species: "Mamifero"},
];

// Aplicamos un middleware para registrp global
//app.use(requestLogger)

// Midlleware para validar datos de animales en solicitudes POST y PUT
const validateAnimal = (req, res, next) => {
    const {name, species} = req.body // extraemos datos del cuerpo de la solicitud
    if (!name || !species) { // validando los campos
        return res.status(400).json({error: 'Los campos name y species son obligatorios'})
    }
    next()
}

// RUTAS: Funcionalidades principales de la api

// Enpoint para obtener los animales
app.get('/api/animals', (req, res) => {
    res.status(200).json(animals)
})

// Endpoint para agregar un animal nuevo
app.post('/api/animals', (req, res) => {
    const {name, species} = req.body // extraemos los datos del cuerpo de la solicitud
    const newAnimal = {id: animals.length + 1, name, species} // creamos un nuevo objeto
    animals.push(newAnimal)
    res.status(201).json(newAnimal)
})

// Endpoint para actualizar un animal
app.put('/api/animals/:id', validateAnimal, (req, res) => {
    const {id} = req.params // obtener el id del animal desde los parametros 
    const animal = animals.find(a => a.id == parseInt(id)) // buscamos por id
    // actualizamos el nombre y especie del animal que encontramos
    animal.name = name
    animal.species = species
    res.status(200).json(animal)
    if (!animal) {
        return res.status(404).json({error:'Animal no encontrado'})
    }
    
})

// Endpoint para eliminar
app.delete('/api/animals/:id', (req, res) => {
    const {id} = req.params
    animals = animals.filter(a => a.id !== parseInt(id))
    res.status(204).send()
})

// iniciamos el servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})