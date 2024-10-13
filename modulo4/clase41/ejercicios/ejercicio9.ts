// Ejercicio 9: Sistema de Gestión de Vehículos
// 1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
// o Vehiculo: Clase base con propiedades como marca, modelo y un
// método para mostrar información del vehículo.
// o Coche: Clase que extiende Vehiculo e incluye una propiedad para
// tipoCombustible y un método para mostrar la información completa
// del coche.
// o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad
// para cilindrada y un método para mostrar la información completa
// de la motocicleta.

class Vehiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarInfo(): void {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}`);
    }
}

export class Coche extends Vehiculo {
    tipoCombustible: string;

    constructor(marca: string, modelo: string, tipoCombustible: string) {
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Tipo de combustible: ${this.tipoCombustible}`);
    }
}

class Motocicleta extends Vehiculo {
    cilindrada: number;

    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Cilindrada: ${this.cilindrada}`);
    }
}

const auto = new Coche('Peugeot', '207', 'nafta');
auto.mostrarInfo();

console.log('-------------');

const moto = new Motocicleta('Honda', '125', 124.8);
moto.mostrarInfo()