// Definir una clase abstracta
abstract class Vehiculo {
    // Constructor
    constructor(protected velocidad: number) {}

    // Metodo abstracto (debe ser implementado por la subclase)
    abstract acelerar(): void;

    // Metodo concreto que describe el vehiculo y muestra su velocidad actual
    describir(): void {
        console.log(`Este vehiculo va a ${this.velocidad} km/h.`);
    }
}

// Definimos la clase Moto, que extiende de la clase Vehiculo
class Moto extends Vehiculo {
    // Implementamos el metodo acelerar
    acelerar(): void {
        // Incrementamos la velocidad de la moto por 10 km/h
        this.velocidad += 10;
        console.log(`La moto acelera a ${this.velocidad} km/h.`);
    }
}

// Creacion de una instancio de la clase moto con una velocidad inicial de 20 km/h
const moto = new Moto(20);
// Llamamos al metodo acelerar que aumentara la velocidad y mostrara el mensaje
moto.acelerar();
// Llamamos al metodo describir que nos muestra la velocidad actual de la moto
moto.describir();
