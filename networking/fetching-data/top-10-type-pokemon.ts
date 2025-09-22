import axios from "axios";

const apiUrl = 'https://pokeapi.co/api/v2/type/'

async function topTenPokemon (type: string): Promise <void> {

    try {
        const response = await axios.get(`${apiUrl}${type}`)
        const pokemonList = response.data.pokemon;
        const topPokemon = pokemonList
        .map(p => p.pokemon.name)
        .slice(0, 10);

        console.log(`Top 10 ${type} type Pokémon`, topPokemon);
    } catch (error){
        console.error("Error fetching Pokémon", error);
    }

}

topTenPokemon("fire")