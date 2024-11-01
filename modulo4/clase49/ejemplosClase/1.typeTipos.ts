// Definicion: Alias de tipos en typescript
// Un alias de tipos permite crear un nombre descirptivo para un tipo ya existente
// Esto mejora la legibilidad del codigo

// 1. Alias de tipos primitivos (+ basico).
type ID = number;
type Nombre = string;
type Activo = boolean;

// Usamos los alias para declarar las variables
let usuarioId: ID = 123;
let nombreUsuario: Nombre = "Sofi";
let cuentaActiva: Activo = true;

console.log(`Usuario ID: ${usuarioId},\nNombre del usuario: ${nombreUsuario},\nCuenta activa: ${cuentaActiva}`);

console.log('--------------------------------');

// 2. Alias para objetos
type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: number;
}

// Usamos el alias "direccion"
let miDireccion: Direccion = {
    calle: "Avenida America",
    ciudad: "Neuquen",
    codigoPostal: 12345
}

console.log(`Vivo en ${miDireccion.calle} en la ciudad de ${miDireccion.ciudad} y mi codigo postal es ${miDireccion.codigoPostal}`);

console.log('--------------------------------');

// 3. Alias para uniones de tipo
type Resultado = "Exito" | "Error";
type IdUsuario = string | number;

// Usamos los alias para definir variables
let estadoOperacion: Resultado = "Exito";
let IdDeUsuario: IdUsuario = 456;
let IdDeUsuario2: IdUsuario = '123abc';

console.log(`Estado de operacion: ${estadoOperacion}, Usuario ID ${IdDeUsuario}, Usuario ID con letras: ${IdDeUsuario2}`);

console.log('--------------------------------');


// 4. Alias para funcion
// Alias para la funcion que se toma dos numeros como argumentos y devuelve un numero
// Esto se usa para definir la "firma" de funciones que deben cumplir con cierto formato
type OperacionMatematica = (a: number, b: number) => number;

// Implementacion de dos funciones que siguen el formato de "operacionMatematica"
const sumar: OperacionMatematica = (a, b) => a + b;
const restar: OperacionMatematica = (a, b) => a - b;

console.log(`Suma: ${sumar(5,3)}, Resta: ${restar(4,2)}`);

console.log('--------------------------------');

// 5. Alias para array
type ListaDeNumeros = number[];
type ListaDeCadenas = string[];

export let numeros: ListaDeNumeros = [1, 2, 3, 4];
let cadenas: ListaDeCadenas = ['uno', 'dos', 'tres', 'cuatro'];

console.log(`Numeros: ${numeros.join(', ')}`);
console.log(`Cadenas: ${cadenas.join(', ')}`);

console.log('--------------------------------');

// 6. Alias para objetos complejos
type Producto = {
    id: ID;
    nombre: string;
    precio: number;
    disponible: boolean;
    categoria: ListaDeCadenas;
    direccionEnvio: Direccion;
}

// Creamos el objeto producto
let producto: Producto = {
    id: 101,
    nombre: 'Computadora laptop',
    precio: 800,
    disponible: true,
    categoria: ['electronica', 'computacion'],
    direccionEnvio: {
        calle: "Avenida America",
        ciudad: 'Neuquen',
        codigoPostal: 1234
    }
}

console.log(`Producto ${producto.nombre},\nID: ${producto.id},\nPrecio: ${producto.precio},\nDisponibilidad: ${producto.disponible},\nCategorias: ${producto.categoria.join(', ')}`);
console.log(`Direccion para envios: ${producto.direccionEnvio.calle}, ${producto.direccionEnvio.ciudad}, ${producto.direccionEnvio.codigoPostal}`);


