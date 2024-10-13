// Clase base
export class Animal {
    name: string // propiedad que alamcena el nombre del animal

    // Constructor
    constructor(name: string) {
        this.name = name
    }

    // Metodo
    makeSound(): void {
        console.log(`${this.name} hace un sonido.`);
    }
}

// Clase derivada
class Dog extends Animal {
    breed: string; // Nueva propiedadde la clase hija

    constructor(name: string, breed: string) {
        super(name); // Llama al contructor de la clase Animal
        this.breed = breed // Inicializa la propiedad breed
    }

    // Sobreescritura del metodo makeSound
    makeSound(): void {
        console.log(`${this.name} ladra.`);
    }

    // Nuevo metodo especifico de la clase hija
    search(): void {
        console.log(`${this.name} esta buscando la pelota.`);
    }
}

// Instanciar objetos de la clase base
const geneicoAnimal = new Animal("Animal"); // Creacion de un objeto de la clase base
geneicoAnimal.makeSound(); // Llamamos al metodo make sound de la clase base

const myDog = new Dog('Pipo', 'Caniche'); // Creacion de un objeto de la subclase Dog
myDog.makeSound();
myDog.search();