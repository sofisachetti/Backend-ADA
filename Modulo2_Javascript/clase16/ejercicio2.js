let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
    {nombre: 'Jake', promedio: 4, aprobado: false},
    {nombre: 'Jill', promedio: 9, aprobado: true}
];

// 1 Lista de aprobados y desaprobados
let aprobados = estudiantes.filter((alumno) => alumno.aprobado == true);
let desaprobados = estudiantes.filter((alumno) => alumno.aprobado == false);

//2 agregar un estudiante al inicio y al final de la lista de aprobados
aprobados.unshift({nombre: 'Luke', promedio: 7.6, aprobado: true});
aprobados.push({nombre: 'Tony', promedio: 6, aprobado: true});

//3) Manipula la lista de desaprobados eliminando al primero y al último estudiante.
desaprobados.shift();
desaprobados.pop();

// 4) Utiliza map junto con indexOf para buscar un estudiante específico en la lista de aprobados y muestra su índice si está presente.
let arrayNombresAprobados = aprobados.map(function(alumno){
     return alumno.nombre;
})
let posicion = arrayNombresAprobados.indexOf("Jane");
if(posicion != -1){
    console.log("El alumno se encuentra en la lista de aprobados. Su índice es ", posicion);
}

// 5) Utiliza includes para verificar si un estudiante está en la lista de desaprobados
// y muestra un mensaje indicando su presencia.
if (desaprobados.map(estudiante => estudiante.nombre).includes('Jake')) {
    console.log('Jake está en la lista de desaprobados.');
} else {
    console.log('Jake no está en la lista de desaprobados.');
}

// 6) Muestra las listas de aprobados y desaprobados actualizadas después de todas las operaciones.
console.log("Lista final de aprobados: ", aprobados);
console.log("Lista fina de desaprobados: ", desaprobados);











/*let arrayNombresDesaprobados = desaprobados.map(function(alumno){
    return alumno.nombre;
})
if(arrayNombresDesaprobados.includes("June") == true){
    console.log("June se encuentra en la lista")
}
// Utilizar includes en la lista de desaprobados
if (desaprobados.map(estudiante => estudiante.nombre).includes('Jake')) {
    console.log('Jake está en la lista de desaprobados.');
} else {
    console.log('Jake no está en la lista de desaprobados.');
}*/