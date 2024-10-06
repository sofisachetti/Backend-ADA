// Ejercicio 9: Funciones con retorno void y manipulación de objetos
// Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y
// encendido (booleano). Define una función encenderCoche que acepte el objeto
// coche y cambie el valor de encendido a true. Muestra el estado del coche en la
// consola antes y después de llamar a la función.

let coche: {marca: string, modelo: number | string, encendido: boolean } = {
    marca: "Toyota",
    modelo: "Corolla",
    encendido: false
}; 
console.log(`Encendido: ${coche.encendido}`);

function encenderCoche(coche: {marca: string, modelo: number | string, encendido: boolean}): void { // hay que pasarle el tipo de todos los parametros
    coche.encendido = true;
}

encenderCoche(coche);
console.log(`Encendido: ${coche.encendido}`);
