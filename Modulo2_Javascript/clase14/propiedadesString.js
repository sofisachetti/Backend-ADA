// Metodo de String
let mensaje = 'Gran día para practicar JavaScript!';

//Ejemplo de Lenght: cuenta cant de caracteres
console.log(mensaje.length); // resultado: 35

// indexOf: dice posicion especifica
console.log(mensaje.indexOf('día')); //Sensible a los acentos y mayusculas.

//Slice: para hacer un recorte
console.log(mensaje.slice(0, 24));

//Trim: elimina los espacios al principo y al final
let mensaje2 = '   Gran día para practicar JavaScript! '
console.log(mensaje2);
console.log(mensaje2.trim());

//Split: convierte en array. No se ejecuta en variable sin valor
let mensaje3 = 'Gran dia para practicar JavaSript!';
console.log(mensaje3.split()); //imprime todo junto
console.log(mensaje3.split(" ")); // imprime c/palabra separada x comilla simple

//Replace: reeemplazar cadenas de texto
let mensaje4 = 'Gran dia para practicar JavaScript!';
console.log(mensaje4.replace('JavaScript', 'lectura'));