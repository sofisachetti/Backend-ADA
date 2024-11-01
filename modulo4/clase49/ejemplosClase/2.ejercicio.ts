// / Gestión de Vehículos
// // Se requiere implementar un sistema para gestionar diferentes tipos de vehículos 
// // (coches, motocicletas, bicicletas). 
// // Cada vehículo debe tener un identificador único, un tipo de combustible 
// // (en caso de que lo use), y todos los vehículos deben poder moverse.
// // Los vehículos motorizados como coches y motocicletas deben tener un método para arrancar.
// // Las bicicletas solo necesitan poder moverse, ya que no usan combustible ni motor.
// // Debes usar tuplas, alias (type) e interfaces para estructurar la solución.

type Coordenadas = [number, number]; 

// Funcion que acepta coordenadas como tupla y muestra la posicion
function mostrarPosicion(posicion: Coordenadas): void {
    console.log(`Posicion actual: X = ${posicion[0]}, Y = ${posicion[1]}`);
}

// Uso de type (definimos un alias para el combustible)
type Combustible = 'Gasolina' | 'Diesel' | 'Electrico';

// Alias para el ID de un vehiculo (string o number)
type VehiculoID = string | number;

// Alias para un objeto 'Motor' que contiene informacion del tipo de combustible.
type Motor = {
    tipoCombustible: Combustible;
    esEncendido: boolean;
}

// Uso de interface
// Definimos una interfaz Vehiculo que describe las propiedades comunes de cualquier vehiculo
interface Vehiculo {
    id: VehiculoID; // Identificador
    posicion: Coordenadas; // Posicion actual del vehiculo (usando tupla)
    mover(nuevaPsicion: Coordenadas): void; // Metodo para mover el vehiculo
}

// Interface para vehiculos que tienen motor
interface VehiculoMotorizado extends Vehiculo {
    motor: Motor; // Informacion del motor
    arrancar(): void; // Metodo para arrancar el vehiculo
}

// Clase coche que implemente la interface VehiculoMotorizado
export class Coche implements VehiculoMotorizado {
    id: VehiculoID;
    posicion: Coordenadas;
    motor: Motor;

    constructor(id: VehiculoID, posicion: Coordenadas, tipoCombustible: Combustible) {
        this.id = id;
        this.posicion = posicion;
        this.motor = {
            tipoCombustible,
            esEncendido: false
        }
    }

    arrancar(): void {
        this.motor.esEncendido = true;
        console.log('El coche ha arrancado.');
    }

    mover(nuevaPsicion: Coordenadas): void {
        this.posicion = nuevaPsicion;
        console.log(`El coche se ha movido a la nueva posicion.`);
        mostrarPosicion(this.posicion)
    }
}

// Clase Bicicleta que implementa Vehiculo
class Bicicleta implements Vehiculo {
    id: VehiculoID;
    posicion: Coordenadas;

    constructor(id: VehiculoID, posicion: Coordenadas) {
        this.id = id;
        this.posicion = posicion
    }
    mover(nuevaPsicion: Coordenadas): void {
        this.posicion = nuevaPsicion;
        console.log('La bicicleta se ha movido a la nueva posicion.');
        mostrarPosicion(this.posicion);
    }
}

let miCoche = new Coche(1, [0,0], 'Gasolina');
miCoche.arrancar();
miCoche.mover([10, 20]);

let miBici = new Bicicleta(2, [5, 5]);
miBici.mover([15, 25])