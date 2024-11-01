// Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
// Implementa una clase Calculadora que tenga un método sumar. El método debe
// estar sobrecargado para permitir la suma de:
// • Dos números enteros.
// • Tres números enteros.
// • Dos cadenas, concatenando las dos cadenas.

class Calculadora {
    sumar(par1: number, par2: number, par3?: number): number;
    sumar(par1: string, par2: string): string;

    sumar(par1: number | string, par2: number | string, par3?: number): number | string {
        if (typeof par1 === "number" && typeof par2 === "number" && par3) {
            return par1 + par2 + par3;
        } else if (typeof par1 === "number" && typeof par2 === "number") {
            return par1 + par2;
        } else if (typeof par1 === "string" && typeof par2 === "string") {
            return par1 + " " + par2;
        } else {
            return 0;
        }
    }
}

const calculadora = new Calculadora();
console.log(calculadora.sumar(2, 2));
console.log(calculadora.sumar(2, 2, 2));
console.log(calculadora.sumar('Hola', 'Pau'));