// Definir la interfaz 'Estudiante'  
interface Estudiante {
    nombre: string; // Propiedad 'nombre' del tipo string
    edad: number; // Propiedad 'edad' del tipo number
    materiaFavorita: string; // Propiedad 'materiaFavorita' del tipo string
    promedio: number; // Propiedad 'promedio' del tipo number

    saludar: () => void // Metodo saludar que no devuelve valor
    obetenerDetalles: () => string // Metodo que devuelve una cadena de texto  con detalles del alumno
}

// Creacion de un objeto que cumple con la interfaz 'Estudiante'
const estudiante1: Estudiante = {
    nombre: "Mariana", // Asignacion de los atributos
    edad: 21,
    materiaFavorita: "Lengua",
    promedio: 9.5,

    // Implementacion del metodo 'saludar'
    saludar: function() {
        console.log(`Hola soy ${estudiante1.nombre} y tengo ${estudiante1.edad} anios y mi materia favorita es ${estudiante1.materiaFavorita}. Mi promedio es ${estudiante1.promedio}.`);
    },

    // Implementacion del metodo 'obtener detalles'
    obetenerDetalles: function() {
        return `Nombre: ${estudiante1.nombre}, Edad: ${estudiante1.edad}, Materia favorita: ${estudiante1.materiaFavorita}, Promedio: ${estudiante1.promedio}`
    }
};

// Uso del metodo saludo
estudiante1.saludar();

// Uso del metodo ObtenerDetalles
const detalles = estudiante1.obetenerDetalles();
console.log(detalles);

