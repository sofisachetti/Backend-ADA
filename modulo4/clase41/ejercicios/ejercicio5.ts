// Ejercicio 5: Interfaz
// 1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
// método presentarse().
// 2. Crea una clase llamada Persona que implemente esta interfaz y
// proporciona la implementación del método presentarse().

interface IPersona {
    nombre: string;
    edad: number;

    presentarse: () => string
}

class Persona implements IPersona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): string {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} anios.`
    }
}

const persona1 = new Persona("Ana", 20)
console.log(persona1.presentarse());
