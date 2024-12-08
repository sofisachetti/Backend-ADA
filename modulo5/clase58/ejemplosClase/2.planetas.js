// Declaramos una funcion para los planetas

async function fetchPlanet(name) {
    try {
        // verificar si se proporciona, si no que de error
        if (!name) throw new Error('No se proporcionó el nombre del planeta.');

        // Solicitud a la api para que busque el planeta
        const response = await fetch(`https://swapi.dev/api/planets/?search=${name}`);

        // convertimos la respuesta de la api a formato json para manipular los datos
        const data = await response.json();

        // verificamos si no se encontro ningun planeta del nombre proporcionado
        if (data.results.length === 0) {
            console.log('No se encontro el planeta con el nombre ' + name);
        } else {
            console.log('Datos del planeta: ', data.results[0]);
        }
    } catch (error) {
        console.error('Error: ', error.message);
    }
}

fetchPlanet('Tatooine')