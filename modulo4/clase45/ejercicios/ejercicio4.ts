// Ejercicio 4: Herencia de Métodos y Sobrescritura
// Consigna: Define una clase base Flor con el método describir(), que imprime un mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol, cada una sobrescribiendo el método describir() con un mensaje específico.

class Flor {
    descripcion() {
        console.log(`Esto es una flor.`);
    }
}

class Rosa extends Flor {
    descripcion(): void {
        console.log(`Esto es una rosa.`);
    }
}

class Girasol extends Flor {
    descripcion(): void {
        console.log(`Esto es un girasol.`);
    }
}

const rosa = new Rosa();
rosa.descripcion();
const girasol = new Girasol();
girasol.descripcion();
const flor = new Flor();
flor.descripcion();