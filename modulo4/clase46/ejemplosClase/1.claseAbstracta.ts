// Definimos una clase abstracta llamda animal
export abstract class Animal {
    // Constructor: Define la propiedad nombre, establece solo en esta clase y sus subclases
    constructor(protected nombre: string) {}

    // Metodo abstracto que debera ser implementado por cada subclalse
    // este metodo definira como se mueve el animal.
    abstract moverse(): void;

    // Metodo concreto (con implementacion) que describe al animal
    describir(): void {
        console.log(`Este es un animal llamado: ${this.nombre}.`);
    }
}

// Definimos clase concreta "Perro" que extinde de la clase abstracta Animal
class Perro extends Animal {
    // Implementamos el metodo abstracto "moverse" de la clase Animal
    moverse(): void {
        console.log(`${this.nombre} está corriendo.`);
    }
}

// Definimos otra clase concreta "Pajaro" que extiende de Animal
class Pajaro extends Animal {
    moverse(): void {
        console.log(`${this.nombre} está volando.`);
    }
}

// Creamos las instancias
const miPerro = new Perro('Osito');
const miPajaro = new Pajaro('Chuequita');

// Usamos los metodos concretos y abstractos
miPerro.describir();
miPerro.moverse();
console.log('-----------');
miPajaro.describir();
miPajaro.moverse();