// 1. Crea un arreglo inicial de productos con id y name. 
// Ejemplo: { id: 1, name: “Notebook”} 
// 2. Implementa dos endpoints: 
// • GET /products: Devuelve la lista de productos. 
// • POST /products: Permite agregar un producto enviando id y name en el body. 
// 3. Asegúrate de manejar errores si faltan datos. 
// Pistas: 
// • Usa estructuras similares a las del ejercicio de usuarios. 
// • El arreglo inicial puede contener al menos dos productos. 
// • Usa res.json() para devolver datos como respuesta.

const express = require('express');
const app = express();

const productos = [
    { id: 1, name: "Notebook"},
    { id: 2, name: "Celular"},
    { id: 3, name: "TV"}
]

app.use(express.json())

app.get('/products', (req, res) => {
    res.json(productos)
})

app.post('/products', (req, res) => {
    const { id, name } = req.body
    if (!id || !name) {
        return res.status(400).json({error: 'No se completaron los campos de id o name.'})
    }
    const newProduct = {id: productos.length + 1, name: name}
    const prodExiste = productos.find(prod => prod.id === id)
    if (!prodExiste) {
        productos.push(newProduct)
        res.status(201).json({message: 'Producto agregado con exito.'})
    } else {
        return res.status(400).json({error: 'El producto ya existe.'})
    }
})

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
})
