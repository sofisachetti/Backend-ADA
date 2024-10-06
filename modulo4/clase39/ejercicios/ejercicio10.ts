// Ejercicio 10: Funciones y arrays de objetos
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos
// libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
// función debe recorrer el array y mostrar los detalles de cada libro en la consola.

let libros = [
    {titulo: "Cien Anios de Soledad", autor: "Gabriel Garcia Marquez"},
    {titulo: "Orgullo y Prejuicio", autor: "Jane Austen"},
    {titulo: "Cumbres Borrascosas", autor: "Emily Bronte"},
    {titulo: "La Furia", autor: "Silvina Ocampo"}
]

function listarLibros(libros: {titulo: string, autor: string}[]): void {
    libros.forEach(libro => {
        console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}`);
    });
}

listarLibros(libros);