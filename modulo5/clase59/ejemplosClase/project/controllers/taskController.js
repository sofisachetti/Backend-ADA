const taskModel = require('../models/taskModel') // Importamos el modelo

// Funcion para manejar la solicitud de 'obtener todas las tareas'
const getTasks = (req, res) => {
    const tasks = taskModel.getAllTasks(); // llamamos al modelo para obtener las tareas
    res.json(tasks) // envia las tareas como respuesta en formato json
}

//Funcion para manejar solicitud de 'Crear una nueva tarea'
const createTask = (req, res) => {
    // Creamos una tarea con un id unico
    const newTask = {id: Date.now(), ...req.body, complete: false}
    taskModel.addTask(newTask) // llamamos al modelo para agregar la tarea
    // responde con la tarea
    res.status(201).json(newTask)
}

// Funcion para actualizar una tarea
const updateTask = (req, res) => {
    // Obtenemos el id de la tarea desde los parametros de la url
    const {id} = req.params
    // Obtenemos los datos actualizados del cuerpo de la solicitud
    const updateTask = req.body
    // llamamos al modelo para actualizar la tarea
    taskModel.updateTask(Number(id), updateTask)
    // Envia un mensaje de exito
    res.json({message: 'Tarea actualizada con exito'})
}

// Funcion para manejar la solicitud de eliminar una tarea
const deleteTask = (req, res) => {
    // Obtenemos el id de la tarea desde los parametros de la url
    const {id} = req.params
    taskModel.deleteTask(Number(id))
    res.json({message: 'Tarea eliminada con exito'})
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}