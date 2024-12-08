// Consumo de una api externa con parametrizacion

// Definicion de una funcion asincrona llamada fetchCharacter(id) que recibira como parametro un id
async function fetchCharacter(id) {
    try {
        // Validamos si el id no fue proporcionado, lanzamos error con mensaje
        if (!id) throw new Error('No se proporcionó ID.');
    
        // Hacemos una solicitud a la api usando el id
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    
        // Verificamos si la respuesta fue exitosa (200 ok), sino error
        if (!response.ok) throw new Error(`Personaje no encontrado ${response.status}.`)
    
        // Convertimos la respuesta a formato JSON para obtener los datos del personaje
        const character = await response.json();

        // Imprimimos en consola los datos del personaje
        console.log('Datos del personaje: ', character);

    } catch (error) {
        console.log('Error: ', error.message);
    }
}

// Llamamos a la funcion (En este caso usamos el id 3)
fetchCharacter(5);