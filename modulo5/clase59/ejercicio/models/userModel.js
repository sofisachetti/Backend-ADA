// traemos la base de datos
const baseDatos = require('../database/users.json');

// funcion para mostrar todos los usuarios
const getAllUsers = () => baseDatos;

module.exports = {
    getAllUsers
}