// Ejercicio 15: Arrays multidimensionales
// 1. Declara un array multidimensional que represente una tabla de notas de 3 estudiantes. Cada subarray debe tener el nombre del estudiante y sus notas en tres materias.
// 2. Añade los nombres "Maria", "Pedro" y "Luis", junto con sus respectivas notas.
// 3. Imprime el nombre y las notas del segundo estudiante (Pedro).
// 4. Muestra la nota promedio de cada estudiante recorriendo el array.

let arrayMultidimensional: [string, number[]][] = [
    ["Maria", [5, 6, 7]],
    ["Pedro", [9, 8, 4]],
    ["Luis", [3, 5, 10]]
]

console.log(`Nombre: ${arrayMultidimensional[1][0]}, Notas: ${arrayMultidimensional[1][1]}`);

arrayMultidimensional.forEach(estudiante => {
    let promedio = estudiante[1].reduce((total, num) => total + num, 0) / estudiante[1].length
    console.log(`El promedio del alumno ${estudiante[0]} es de: ${promedio}`);
})
