// Ejercicio 3: Métodos en Objetos
// 1. Modifica el objeto del ejercicio anterior para que incluya un método
// llamado descripcion() que devuelva una descripción del libro.
// 2. Llama al método y muestra el resultado en la consola.

export class Libro {
    public titulo: string;
    public autor: string;
    public anioPublicacion: number;

    constructor(titulo:string, autor:string, anioPublicacion:number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    public descripcion(): string {
        return `Titulo: ${libro1.titulo}, Autor: ${libro1.autor}, Anio de publicacion: ${libro1.anioPublicacion}`;
    }
}
const libro1 = new Libro("Cien Anios de Soledad", "Garcia Marquez", 1967);
console.log(libro1.descripcion())