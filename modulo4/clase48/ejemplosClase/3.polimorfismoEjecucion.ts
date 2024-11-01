// clase base: personaje
class Personaje {
    // metodo que sera sobreescrito por la subclase por atacar
    atacar(): void {
        console.log("El personaje ataca.");
    }

    // Metodo que sera sobreescrito para mover el personaje
    mover(): void {
        console.log("El personaje se mueve.");
    }
}

// subclases: Enemigo
class Enemigo extends Personaje {
    atacar(): void {
        console.log('El enemigo ataca ferozmente.');
    }
    mover(): void {
        console.log('El enemigo se mueve sigilosamente.');
    }
}

class Aliado extends Personaje {
    atacar(): void {
        console.log('El aliado ataca ferozmente.');
    }
    mover(): void {
        console.log('El aliado se mueve sigilosamente.');
    }
}

// Funcion que ejecuta las acciones de personaje
function ejecutarAcciones(personaje: Personaje) {
    personaje.atacar(); // Llamamos al metodo sobreescrito 
    personaje.mover();
}

// Creacion de instancia enemigo y aliado
let enemigo: Personaje = new Enemigo();
let aliado: Personaje = new Aliado();

// Ejecutamos las acciones de los personajes
ejecutarAcciones(enemigo);
ejecutarAcciones(aliado);