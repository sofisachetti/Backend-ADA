async function pokemones(type) {
    try {
        if (!type) throw new Error('No existe ese tipo de Pokemon');

        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

        if (!response.ok) {
            throw new Error(`Error encontrando ese tipo de Pokemon ${response.status}`);
        }

        const data = await response.json();
        if (data.pokemon.length === 0) {
            console.log(`No hay Pokemon de tipo ${type} encontrado`);
        } else {
            // Extraer los 5 primero nombres de pokemones de este tipo
            const pokemonLista = data.pokemon.slice(0, 5).map(p => p.pokemon.name);
            console.log(`Pokemon de tipo ${type}: `, pokemonLista);
        }
    } catch (error) {
        console.error('Error: ', error.message);
    }
}

pokemones('water')