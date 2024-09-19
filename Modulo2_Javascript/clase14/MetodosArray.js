// Metodos Array

/*let notas = [3, 5, 10, 9, 8, 8, 8];

// 1.Push (para agregar al array)
notas.push(1);
notas.push(2);
notas.push(4);

//2. Pop (eliminar el ultimo)
// notas.pop(); //Aca va a eliminar el 4
let elUltimo = notas.pop();
console.log(elUltimo)

//3. Shift: se elimina el 1ro
notas.shift(); 

//4. Unshift: agrega al principio
notas.unshift(10); 

console.log(notas); */

/*
let notasDos = [3, 5, 8, 10, 9, 7, 8, 8];

//5. IndexOf: preguntar la posicion
let posicionOcho = notasDos.indexOf(8);
console.log(posicionOcho);

//6. LastIndexOf: preg la ultima posicion.
let posicionOcho2 = notasDos.lastIndexOf(8);
console.log(posicionOcho2);

//Cuando buscamos una posición que no está, devuelve -1.
let posicionInexistente = notasDos.lastIndexOf(2);
console.log(posicionInexistente);

// Join: nos junta todo y lo separa con , (por defecto)

//Sin nada en parametros devulve con ,
let resultadoJuntado = notasDos.join();
console.log(resultadoJuntado);

//Si le damos con otros parametros (aca coma y espacio)
let resultadoJuntado2 = notasDos.join(", ");
console.log(resultadoJuntado2);

let resultadoJuntado3 = notasDos.join(" * ");
console.log(resultadoJuntado3); */

//7. Includes: busca el elemento y devuelve T o F

let animales = ["perro", "gato", "raton"];

console.log(animales.includes("perro")); // true
console.log(animales.includes("loro")); // false