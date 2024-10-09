// Ejercicio 6: Combinando Arrays, Tuplas y Enum
// 1. Declara un enum llamado Colores con los valores Rojo, Verde, Azul.
// 2. Crea un array de tuplas donde cada tupla tenga el nombre de un color
// (string) y el valor correspondiente del enum.
// 3. Añade una tupla más con otro color y su valor del enum.
// 4. Muestra por consola todo el array de tuplas.


export enum Colores {
    Rojo,
    Verde, 
    Azul, 
}

let arrayColores: [string, Colores][] = [
    ["Rojo", Colores.Rojo],
    ["Verde", Colores.Verde],
    ["Azul", Colores.Azul]
];

arrayColores.push(["Amarillo", Colores.Verde]);
console.log(arrayColores);