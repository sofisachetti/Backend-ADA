export class Empleado {
    nombre: string;
    cargo: string;
    salarioMensual: number;
    habilidades: string[];

    // Constructor
    constructor(nombre: string, cargo: string, salarioMensual: number) {
        this.nombre = nombre;
        this.cargo= cargo;
        this.salarioMensual = salarioMensual;
        this.habilidades = []; // Inicializa habilidades como un array
    }

    agregarHabilidad(habilidad: string): void {
        this.habilidades.push(habilidad);
    }

    obtenerSalarioAnual(): number {
        return this.salarioMensual * 12;
    }

    mostrarInformacion(): void {
        console.log(`Empleado: ${this.nombre}, Cargo: ${this.cargo}, Salario Anual: ${this.obtenerSalarioAnual()}`);
        console.log(`Habilidades: ${this.habilidades.join(", ")}`);
    }
}