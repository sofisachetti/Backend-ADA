// Comparacion entre for in y for of

// Ejemplo 1: REcorrrun array de autos con for in y con for of
let auto = ['Toyota', 'Honda', 'Tesla'];

console.log('=== Recorrido de un array de autos ===');

// Uso for in (recorre indices)
console.log("Usando for in - Indice:");
for (let indice in auto) {
    console.log(`Indice: ${indice}, Auto: ${auto[indice]}`);
};

// Recorrido de un array de autos: Recorre los indices (0, 1, 2) y se accede a los nombres de los autos a traves de esos mismos indices
console.log('---------------------------');

// Uso de for of (Recorrer valores)
console.log("Usando for of - Valores");
for (let autos of auto) {
    console.log(`Auto: ${autos}`);
};

// For of recorre directamente los nombres de los autos, sin necesidad de acceder a los indices

console.log('\n=== Recorrido de un objeto auto ===');

// Ejemplo 2: Recorrer un objeto auto con for in
let autito = {
    marca: 'Fiat',
    modelo: 'Uno',
    anio: 1998
};

// Uso de for in
console.log('Usando for in (claves de un objeto)');

for (let propiedad in autito) {
    console.log(`Clave: ${propiedad}, Valor: ${autito[propiedad as keyof typeof autito]}`);
};

// Uso de for of, NO es posible con un objeto regular (DA ERROR)
// for (let valor of autito) {
//     console.log(valor);
// };

// El error: must have a '[Symbol.iterator]()' method that returns an iterator

// Recorrido de objeto autito:
// for in: se usa para recorrer las claves de un objeto que representa un auto y se imprimen tanto la clave como el valor correspondiente
// For of no es posibl usarlo con un objeto porque los objetos no son interables