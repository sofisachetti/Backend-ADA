export class Producto {
    nombre: string;
    categoria: CategoriaProductos;
    precio: number;

    constructor(nombre: string, categoria: CategoriaProductos, precio: number) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

export enum CategoriaProductos {
        Electronica = "Electronica",
        Ropa = "Ropa",
        Alimentos = "Alimentos",
    }

