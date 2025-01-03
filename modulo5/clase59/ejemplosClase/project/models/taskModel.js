// Simulamos una base de datos con un array en memoria
let tasks = [
    {id: 1, tite: 'Aprendemos NodeJS', completed: false},
    {id: 2, tite: 'Aprendemos MVC', completed: true},
];

// Funcion para obtener todas las tareas
const getAllTasks = () => tasks;

// Funcion para agregar una nueva tarea
const addTask = (task) => {
    tasks.push(task); // Agregamos con push una nueva tarea (al final del array)
}

// Funcion para actualizar una tarea existente
const updateTask = (id, updatedTask) => {

    // buasca el indice de la tarea con el id proporcionado 
    const index = tasks.findIndex((task) => task.id === id);

    // actualiza la tarea si existe
    if (index !== -1) tasks[index] = {...tasks[index], ...updatedTask}
}

// Funcion para eliminar una tarea oir su id
const deleteTask = (id) => {
    // Filtramos y eliminamos por id
    tasks = tasks.filter((task) => task.id !== id)
}

module.exports = {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask
}