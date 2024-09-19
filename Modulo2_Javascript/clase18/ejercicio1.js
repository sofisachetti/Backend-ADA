let estudiante = {
    nombre: "Juan",
    edad: 26,
    notas: [7, 8, 6, 4, 9]
}

function procesarEstudiante(estudiante) {
    estudiante.notas.push(10); //Agregar nueva nota
    estudiante.notas.shift(); //Eliminar la primera nota
    let sumaNotas = estudiante.notas.reduce((a,b) => a+b, 0); //Promedio
    let promedio = sumaNotas/estudiante.notas.length;
    let nombreMayusculas = estudiante.nombre.toUpperCase();
    return {
        nombre: nombreMayusculas,
        promedio: promedio
    }
}
let resultado = procesarEstudiante(estudiante);
console.log("Estudiante: ", resultado);