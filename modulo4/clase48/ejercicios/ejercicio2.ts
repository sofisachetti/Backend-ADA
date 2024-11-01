// Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución) Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y Moto. Cada clase debe sobrescribir el método arrancar de la clase base para proporcionar una implementación específica de cómo arrancar.


export class Vehiculo {
    arrancar(): void {
        console.log('El vehiculo arranco.');
    }
}

class Coche extends Vehiculo {
    arrancar(): void {
        console.log('El coche arrancó.');
    }
}

class Moto extends Vehiculo {
    arrancar(): void {
        console.log('La moto arrancó.');
    }
}

const coche: Vehiculo = new Coche();
const moto: Vehiculo = new Moto();

coche.arrancar();
moto.arrancar();