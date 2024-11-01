// Definimos una interfaz con propiedades de solo lectura
interface Punto {
    readonly x: number; // propiedad de solo lectura
    readonly y: number; // propiedad de solo lectura
}

// Creamos un objeto con las propiedades
const punto: Punto = { x:10, y:20 };

console.log(punto);

// Intentamos modificar una propiedad de solo lectura (causa error)
// punto.x = 15;