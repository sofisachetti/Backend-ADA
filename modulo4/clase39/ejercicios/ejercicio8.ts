// Ejercicio 8: Funciones con diferentes tipos de retorno
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
// ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
// tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
// función debe retornar el área de la figura. Usa tipos específicos para cada caso.

function calcularArea(figura: "circulo" | "rectangulo", ...parametros: number[]): number {
    if (figura === "circulo") {
        let radio = parametros[0];
        return radio * 3.14;
    } else {
        let par1 = parametros[0];
        let par2 = parametros[1];
        return par1 * par2
    }
}

console.log(calcularArea("circulo", 10));
console.log(calcularArea("rectangulo", 10, 5));
