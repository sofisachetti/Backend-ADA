export class Persona {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public saludo() {
        console.log(`Hola, me llamo ${this.name}`);
    }
}

class Empleado extends Persona {
    private titulo: string;

    constructor(name:string, titulo:string) {
        super(name);
        this.titulo = titulo;
    }

    public trabajo() {
        console.log(`${this.name} está trabajando como ${this.titulo}`);
    }
}

const empleado1 = new Empleado("Vicky", "Backend");
empleado1.saludo();
empleado1.trabajo();