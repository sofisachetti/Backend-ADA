// Definimos una interface
interface Persona {
    nombre: string; // propiedad obligatoria
    edad?: number; // propiedad opcional
}

// Objeto que implementa la interfaz con una sola propiedad
export const persona1: Persona = {nombre: 'Pau'};

// Objeto que implementa la interface con ambas propiedades
const persona2: Persona = {nombre: 'Mariana', edad: 25}

console.log(persona1);
console.log(persona2);

