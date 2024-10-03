export const PI = 3.141592;

export function add(a: number, b: number): number {
    return a + b;
}

export function substract(a: number, b: number): number {
    return a - b;
}

// Este codigo:
// Estamos exportando una constante PI y tambien dos funciones (add y substract)
// Cada exportacion esta nombrada, lo que significa que tienen
// que ser importadas usando sus nombres.