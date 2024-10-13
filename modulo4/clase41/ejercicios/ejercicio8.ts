// Ejercicio 8: Integramos contenidos - Animales
// 1. Crea un pequeño sistema de gestión de Animales que incluya las clases
// Animal, Mascota, y MascotaExotica.
// o La clase Animal debe tener propiedades como nombre y tipo.
// o La clase Mascota debe extender Animal e incluir una propiedad para dueño.
// o La clase MascotaExotica debe extender Animal e incluir una
// propiedad para habitat.
// 2. Implementa métodos para mostrar información sobre cada tipo de animal y agrega ejemplos de instanciación.

export class Animal {
    nombre: string;
    tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}\nTipo: ${this.tipo}`);
    }
}

class Mascota extends Animal {
    tutor: string;

    constructor(nombre: string, tipo: string, tutor: string) {
        super(nombre,tipo);
        this.tutor = tutor;
    }

    mostrarInfo(): void {
        super.mostrarInfo()
        console.log(`Tutor: ${this.tutor}`);
    }
}

class MascotaExotica extends Animal {
    habitat: string;

    constructor(nombre: string, tipo: string, habitat: string) {
        super(nombre, tipo);
        this.habitat = habitat;
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Habitat: ${this.habitat}`);
    }
}

const mascota = new Mascota("Toby", "perro", "Ana");
mascota.mostrarInfo();

const mascotaExotica = new MascotaExotica('Pincho', 'carpincho', 'humedal');
mascotaExotica.mostrarInfo();
