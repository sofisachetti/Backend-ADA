const prompt = require ('prompt-sync')();

let oracion = prompt("Ingrese una oración: ");

function procesarOracion(oracion){
    //punto uno, quitar espacios
    let sacarEspacios = oracion.trim(); 
    //dividir la oracion en palabras
    let dividirOracion = oracion.split(" "); 
    // reemplace las vocales a por @ - HACER CON UN .MAP 
    let modificarOracion = dividirOracion.map(palabra => palabra.replace(/a/g, '@'));
    //encontrar posicion de la primera palabra javascript
    let posicionJs = oracion.indexOf("javascript");
    //cadena de palabras separadas x guiones
    oracionFinal = modificarOracion.join("-"); 
    return {
        oracion: oracionFinal,
        posicionJs: posicionJs
    }
};

let resultado = procesarOracion(oracion);
console.log("Resultado: ", resultado);

/*const prompt = require('prompt-sync')();
// let oracion = prompt("Ingrese una oración: ");
let oracion = "hola javascript estas";
let posicion;
// console.log(oracion.replace(/a/g, "@"));
function procesarOracion(oracion) {
    oracion = oracion.trim();
    oracion = oracion.split(" ");
    posicion = oracion.indexOf('javascript');
    oracion = oracion.join("-");
    return oracion;
};

console.log(procesarOracion(oracion));
console.log(posicion);*/