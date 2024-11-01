class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    // Getter para el area rectangulo
    public get area(): number {
        return this._width * this._height;
    }

    // Getter para obtener la altura
    public get height(): number {
        return this._height;
    }

    // Getter para obtener el ancho
    public get width(): number {
        return this._width;
    }
}

const rect = new Rectangle(10, 5);

// Acceder a los valores
console.log(`Ancho ${rect.width}`);
console.log(`Altura ${rect.height}`);
console.log(`Area ${rect.area}`);
