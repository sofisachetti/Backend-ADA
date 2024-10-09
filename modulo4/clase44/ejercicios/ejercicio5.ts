// Actividad 5: Usar aserciones de tipo
// Declara una variable de tipo any y usa una aserción para tratarla como string, accediendo a la propiedad .length.

let variableAny: any = "Probando";

let longitud: number = (variableAny as string).length;

console.log(`La longitud de "${variableAny}" es de: ${longitud} letras.`);
