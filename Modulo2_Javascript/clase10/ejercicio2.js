const prompt = require('prompt-sync')();

let palabraEspañol = prompt("Ingrese su palabra a traducir: ");
switch (palabraEspañol) {
    case "casa":
        console.log("Su palabra en inglés es: 'House'");
    break;
    case "perro":
        console.log("Su palabra en inglés es: 'Dog'");
    break;
    case "pelota":
        console.log("Su palabra en inglés es: 'Ball'");
    break;
    case "arbol":
        console.log("Su palabra en inglés es: 'Tree'");
    break;
    case "genio":
        console.log("Su palabra en inglés es: 'Genie'");
    break;
    default:
        console.log("La palabra ingresada no es válida.");
};