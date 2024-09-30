// Ejercicio 7: Tipos literales
// Usa un tipo literal para declarar una variable que solo acepte uno de los valores:
// "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en TypeScript.

let dias: "lunes" | "martes" | "miercoles" = "martes";
console.log("1:", dias);

dias = "lunes"
console.log("2:", dias);

// dias = "sabado"; // Ya marca error solo con declararlo
// console.log("3:", dias);
// Error: Type '"sabado"' is not assignable to type '"lunes" | "martes" | "miercoles"'.
