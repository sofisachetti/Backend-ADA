// Funcion asincrona
async function saludo() { 
    return "Hola";
}

// llamamos a la funcion y la manejamos con .then
saludo().then((mensaje) => console.log(mensaje));