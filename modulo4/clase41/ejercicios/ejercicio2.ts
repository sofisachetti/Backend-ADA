// Ejercicio 2: Creación de Objetos y Atributos
// 1. Define un objeto que represente un libro con las siguientes propiedades:
// título, autor, y año de publicación.
// 2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.

class Libro {
    public titulo: string;
    public autor: string;
    public anioPublicacion: number;

    constructor(titulo:string, autor:string, anioPublicacion:number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }
}

const libro1 = new Libro("Cien Anios de Soledad", "Garcia Marquez", 1967);
console.log(`Titulo: ${libro1.titulo}, Autor: ${libro1.autor}, Anio de publicacion: ${libro1.anioPublicacion}`);
