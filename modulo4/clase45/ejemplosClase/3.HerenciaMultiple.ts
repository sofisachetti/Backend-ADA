// Interface
interface Flying {
    fly(): void // Metodo que implementamos para volar
}

// Interface
interface Swimming {
    swim(): void // Metodo para nadar
}

class Duck implements Flying, Swimming {
    fly() {
        console.log(`El pato esta volando.`);
    }
    swim() {
        console.log(`El pato está nadando.`);
    }
}

// Instanciar pato
const duck = new Duck()
duck.fly();
duck.swim();