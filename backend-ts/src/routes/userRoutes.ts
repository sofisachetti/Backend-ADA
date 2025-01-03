// Importamos el modulo Router, desde express para definir rutas en un archivo separado
import { Router } from "express";

// Creamos una instancia de router
// Este objeto nos permite definir rutas especificas relacionadas con los usuarios, agrupandolos para una mejor organizacion
const userRouter = Router();

// Ruta GET '/' para obtener todos los usuarios
// Esta ruta responde con un mensaje generico ya que no estamos consultando una base de datos
userRouter.get('/', (req, res) => {
    res.json({message: 'Obtener todos los usuarios'})
});

// Ruta POST '/' para crear un nuevo usuario
// En esta ruta, los datos del usuario (name y email) se extraen del cuerpo de la solicitud (req.body). Luego devolvemos un estado 201 (creado) junto con el usuario creado en el cuerpo de la respuesta
userRouter.post('/', (req, res) => {
    const {name, email} = req.body // extraemos los datos enviados en la solicitud
    // Las llaves {} inidcan desesctructuracion. Son necesaria sporque indican a JS que se desea desesctructurar el objeto y extraer ciertas propiedades
    res.status(201).json({message: 'Usuario creado', user: {name, email}})
})

// Ruta GET '/:id' para obtener todos los usuarios por su id
// El id se pasa como parametro en la url y se puede acceder mediante "req.params". 
// En este caso, simplemente respondemos con un mensaje porque no hay base de datos
userRouter.get('/:id', (req, res) => {
    const {id} = req.params // extraemos el id del parametro de la url
    //.params objeto que contiene los parametro dinamicos de la ruta que se definieron en la url
    res.json({message: `Obtener usuario con ID ${id}`});
    // Los dos puntos en id (:) indican que el segmento de la url es una parametro dinamico en lugar de una parte fija de la ruta.
});

// Ruta PUT: '/:id' para actualizar un usuario por su id
// Obtenemos el id de req.params y los datos de usuario de req.body
userRouter.put('/:id', (req, res) => {
    const {id} = req.params // extraemos los datos enviados de la solicitud
    const {name, email} = req.body // extraemos los nuevos datos enviados en el cuerpo de a solicitud
    res.json({message: `Usuario con id ${id} actualizado`, user: {name, email}})
})

// Ruta DELETE '/:id' para eliminar un usuario por su id
// Obtenemos el id del paramentro de la url y respondemos con un mensaje
userRouter.delete('/:id', (req, res) => {
    const {id} = req.params // extraemos el id del parametro de la url
    res.json({message: `Usuario con ${id} eliminado.`})
})

export default userRouter