// Ejemplo basico For In con un objeto
let alumna = {
    nombre: 'Lucia',
    edad: 22,
    curso: 'Carrera Back'
};

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
};

// Propiedad keyof typeof alumna: le decimos al compilador que la variable propiedad
// es una clave valida de las propiedades del objeto alumna, es decir una de las
//propiedades alumna (nombre, edad y curso)

console.log('--------------------------------');

// Ejemplo con array
let lenguajes = ['Javascript', 'Python', 'Java'];

for (let inidice in lenguajes) {
    console.log(`Indice: ${inidice}, Valor: ${lenguajes[inidice]}`);
};

// Segundo ejemplo: el array lenguajes contiene tres lenguajes de programacion y el fon in recorre
// sus indices, mostrando el indice y el valor del lenguaje correspondiente en cada iteracion

