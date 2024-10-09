// Actividad 4: Crear una clase genérica
// Crea una clase genérica Caja que almacene un valor de cualquier tipo y tenga un método para obtener el valor almacenado.

export class Caja<T> {
    contenido: T

    constructor(valor: T) {
        this.contenido = valor;
    }

    obtenerContenido(): T {
        return this.contenido;
    }
}

let dado = new Caja<string>("dado");
let num = new Caja<number>(6)
console.log(dado.obtenerContenido());
console.log(num.obtenerContenido());

