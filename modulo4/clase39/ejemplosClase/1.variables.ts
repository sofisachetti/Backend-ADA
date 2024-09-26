// Ejemplos de var: Alcance y Hoisting
function ejemploVar() {
    //@ts-ignore
    console.log(variableVar); //sale undefined por hoisting
    var variableVar = "Soy una variable var";
    console.log(variableVar); // log normal
}
ejemploVar();

// Ejemplo de let: alcance de bloque y sin hoisting
function ejemploLet() {
    //console.log(variableLet); //Es para que salte el error. Error: no hay acceso a la variable
    let variableLet = "Soy una variable let";
    console.log(variableLet);
}
ejemploLet()

// Ejemplo de const: valor constante y alcance de bloque
function ejemploConst() {
    const variableConst = "Soy una variable const"
    console.log(variableConst);
    //variableConst = "otro valor"; // Aca sale error: asignar a una variable constante
}
ejemploConst()