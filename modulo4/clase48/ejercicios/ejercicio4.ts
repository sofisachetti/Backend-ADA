// Ejercicio 4: Abstracción con Clases Abstractas
// Implementa una clase abstracta DispositivoElectronico con métodos abstractos encender y apagar. Crea dos clases concretas Televisor y Radio, que sobrescriban estos métodos.

abstract class DispositivoElectronico {
    abstract encender(): void;
    abstract apagar(): void;
}

class Televisor extends DispositivoElectronico {
    encender(): void {
        console.log('Televisor encendido.');
    }
    apagar(): void {
        console.log('Televisor apagado.');
    }
}

class Radio extends DispositivoElectronico {
    encender(): void {
        console.log('Radio encendida.');
    }
    apagar(): void {
        console.log('Radio apagada.');
    }
}

const tele = new Televisor();
const radio = new Radio();

tele.encender();
tele.apagar();

radio.encender();
radio.apagar();