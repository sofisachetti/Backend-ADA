/*Pide al usuario que ingrese una lista de nombres separados por comas.
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, 
“Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las 
siguientes tareas:*/

const prompt = require('prompt-sync')();

let nombres = prompt('Ingrese una lista de nombres separados por comas: ');

function transformarYAnalizarNombres(nombres) {
    //1. Quite los espacios en blanco alrededor de cada nombre.
    let sacarEspacios = nombres.trim().split(',').map((nombre) => nombre.trim);
    //2. Verifique si existe el nombre "Juan".
    let buscarNombre = nombres.includes("Juan");
    //3. Reemplace todos los nombres "María" por "Ana".
    let reemplazarNombre = nombres.replace(/Maria/g, 'Ana');
    //4. Encuentre el índice del nombre "Pedro".
    let buscarIndice = nombres.indexOf('Pedro');
    //5. Devuelva una cadena de nombres en orden alfabético separados por puntos. Investigar el método “.sort()
    let ordenAlf = nombres.split(',').sort().join('.');
    return {
        buscarNombre,
        reemplazarNombre,
        buscarIndice,
        ordenAlf
    }
};
console.log(transformarYAnalizarNombres(nombres));