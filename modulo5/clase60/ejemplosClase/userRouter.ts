// Importar express y el tipo router para manejar rutas
const  express = require('express') 
const userController = require('./userController');

// Importamos el controlador, que es el que tiene las funciones de las rutas

// Creamos una instancia del router
const router = express.Router()

// Ruta GET: Para obatener todos los usuarios
// Se ejecuta la funcion 'getAllUsers' del controlador
// Esta llamando a la instancia router
router.get('/', userController.getAllUsers);

// Ruta POST; para crear un usuario
// Se ejecuta la funcion 'createUser' del controlador
router.post('/users', userController.createUser);

// Ruta GET: Para obtener un usuario especifico por id
// El id se recibe como parametro en a url
// Se ejecuta la funcion 'getUserById' del controlador
router.get('/:id', userController.getUserById);

// Ruta PUT: para catualizar un usuario especifico por id
// El id se recibe como parametro en la url y se envia la info actualizada en el cuerpo de la solicitud
router.put('/:id', userController.updateUser);

// Ruta DELETE: para eliminar un usuario especifico  por su id
// El id se rcibe como parametro de la url
router.delete('/:id', userController.deleteUser);


// cada ruta se tiene que concatenar con una funcion del controlador

module.exports = {
    router
}