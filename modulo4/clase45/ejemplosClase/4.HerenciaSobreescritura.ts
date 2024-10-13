class Empleado {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    trabajar(): void {
        console.log(`${this.nombre} está trabajando.`);
    }
}

class Programador extends Empleado {
    lenguaje: string;

    constructor(nombre: string, lenguaje: string) {
        super(nombre);
        this.lenguaje = lenguaje;
    }

    trabajar(): void {
        super.trabajar() //  Utiliza el metodo original de Empleado
        console.log(`${this.nombre} está escribiendo código en ${this.lenguaje}`);
    }
}
const programadora = new Programador("Pau", "TypeScript");
programadora.trabajar();