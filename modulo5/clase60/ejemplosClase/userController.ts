// Importamos los tipos request y response para tipar los parametros de las funciones
export const { request, response } = require('express');

// Funcion para obtener los usuarios
// Responde con un mensaje indicando que se estan obteniendo los usuarios
export const getAllUsers = (req: request, res: response): void => {
    res.json({ message: 'Obteniendo todos los usuarios' })
}

// Funcion para crear un nuevo usuario
// Recibe los datos del usuario en el cuerpo de la solicitud
// (req.body) y responde con un mensaje que incluye el id
export const createUser = (req: request, res: response): void => {
    res.json({message: 'Usuario creado'})
}

// Funcion para obtner todos los usuarios por id
// el id se extrae de los parametros de la url (req.params.id)
// y se responde con un mensaje que incluye el id
export const getUserById = (req: request, res: response): void => {
    const usuarioId: string = req.params.id
    res.json({message: `Obteniendo usuario con ID: ${usuarioId}`})
}

// Funcion para actualizar un usuario por id
// El id se extrae de los parametros de la url y los datos actualizados del cuerpo de la solicitud
export const updateUser = (req: request, res: response): void => {
    const usuarioId: string = req.params.id
    res.json({message: `Usuario con id ${usuarioId} actualizado`, data:req.body})
}

// Funcion para eliminar un usuario por id
// El id se extrae de los parametros de la url 
export const deleteUser = (req: request, res: response): void => {
    const usuarioId: string = req.params.id
    res.json({message: `Usuario con id ${usuarioId} eliminado`})
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}