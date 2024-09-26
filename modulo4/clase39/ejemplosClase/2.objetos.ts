// 1. Definicion basica de un objeto
let gato = {
    color: "naranja",
    nombre: "Arturo",
    anios: 1
};

// Mostrar las propiedades del objeto en consola
console.log(`Color: ${gato.color}, Nombre: ${gato.nombre}, Edad: ${gato.anios}`);

// 2. Declaracion explicita del tipo de dato
let libro: {titulo: string; autor: string; paginas: number} = {
    titulo: "Cien Anios de Soledad",
    autor: "Gabriel Garcia Marquez",
    paginas: 500
};

console.log(`Titulo: ${libro.titulo}, Nombre autor: ${libro.autor}, Cantida de paginas: ${libro.paginas}`);

// 3. Propiedades opcionales
let estudiantes: {nombre: string; edad?: number} = {
    nombre: "Ana"
};
console.log(`Nombre: ${estudiantes.nombre}, Edad: ${estudiantes.edad} ?? Desconocida`);

// 4. Metodo en un objeto
let perro = {
    nombre: "Khalua",
    raza: "schnauzer",
    ladrar: function(){
        return `${perro.nombre} esta ladrando!`
    }
};

console.log(perro.ladrar());
