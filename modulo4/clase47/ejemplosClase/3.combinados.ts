class Circle {
    private _radius: number; 

    constructor(radius: number) {
        this._radius = radius;
    }

    // Getter para el radio
    public get radius(): number {
        return this._radius; // Devuelve el valor del radio
    }

    // Setter para el radio, con una validacion
    public set radius(value: number) {
        if (value > 0) {
            this._radius = value; // asignamos el nuevo radio
        } else {
            console.log('El radio debe ser mayor a 0.');
        }
    }

    // Getter para calcular el are
    public get area(): number {
        return Math.PI * this._radius * this._radius;
    }

    // Getter para calcular la circunferencia
    public get circunferencia(): number {
        return 2 * Math.PI * this._radius;
    }
}

// Uso de la clase circulo
const circulo = new Circle(5)

console.log(`Radio: ${circulo.radius}`);
console.log(`Area: ${circulo.area}`);
console.log(`Circunferencia: ${circulo.circunferencia}`);

// Para modificar el radio
circulo.radius = 10;
console.log(`Nuevo radio: ${circulo.radius}`);

