// Ejercicio 10: Uso de objetos
// Declara un objeto en TypeScript con propiedades de tipo string, number y
// boolean. Accede a estas propiedades e imprímelas en la consola.

const alumno: {nombre: string, edad: number, esEstudiante: boolean} = {
    nombre: 'Ana',
    edad: 20,
    esEstudiante: true
}

console.log(`Nombre: ${alumno.nombre}\nEdad: ${alumno.edad}\n¿Es estudiante?: ${alumno.esEstudiante}`);