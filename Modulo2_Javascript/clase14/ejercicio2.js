/*Ejercicio 2: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✓ título: una cadena con el título del libro.
✓ autor: una cadena con el nombre del autor del libro.
✓ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
como parámetro y muestre por consola la información de cada libro en el
formato especificado.*/

let libro1 = {
    titulo : "El Señor de los Anillos",
    autor : "J.R.R. Tolkien",
    anioPublicacion :  1954,
} 

let libro2 = {
    titulo : "Nieve de Primavera",
    autor : "Mishima",
    anioPublicacion : 2024,
}

let libros = [];

function mostrarLibro() {
    libros.push(libro1);
    libros.push(libro2);
    return libros;
}

console.log(mostrarLibro());