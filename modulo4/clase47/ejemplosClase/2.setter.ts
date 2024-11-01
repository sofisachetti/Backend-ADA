class Triangle {
    private _base: number;
    private _height: number;

    constructor() {
        this._base = 0; // Inicializan en 0
        this._height = 0;
    }
    
    // Setter para la base, con validacion
    public set base(value: number) {
        if (value > 0) {
            this._base = value;
        } else {
            console.log('La base debe ser mayor a 0.');
        }
    }

    // Seter para la altura, con validacion
    public set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log('La altura debe ser mayor a 0.');
        }
    }

    // Metodo para calcular el area
    public calcularArea(): number {
        return (this._base * this._height) / 2; // Formula para area de un triangulo
    }
}

// Uso de la clase
const triang = new Triangle();

// Usamos los setters para establecer los valores (permitidos)
triang.base = 10;
triang.height = 5;

// calculamosy mostramos el area
console.log(`Area: ${triang.calcularArea()}`);
