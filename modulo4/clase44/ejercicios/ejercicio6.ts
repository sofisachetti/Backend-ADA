// Actividad 6: Usar aserciones dobles
// Crea una variable de tipo any y haz una conversión con aserciones dobles para convertirla en un number. Muestra el resultado.

export let variableAny: any = "123"
let numero: number = (variableAny as any as number);
console.log(numero);
