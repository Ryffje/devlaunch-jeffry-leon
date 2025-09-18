import axios from "axios";

const apiUrl = 'https://pokeapi.co/api/v2/type/'
const type1 = 'water'
const type2 = 'fire'

async function getPokemonType(type: string): Promise<any> {
    try{
        const response = await axios.get(apiUrl)
        const pokemonData = response.data.pokemon.map((entry: any) => entry.pokemon.name)
        return pokemonData
    } catch (error) {
        console.log(`An error occurred getting the pokemon type: ${type}`)

    }
}

async function filterPokemonByType (type1: string, type2: string): Promise<any[]>{
    try {
        const [pokemonOfType1, pokemonOfType2] = await Promise.all([
            getPokemonType(type1),
            getPokemonType(type2)
        ])

        const commonPokemonName = pokemonOfType1.filter((pokemon: string) => pokemonOfType2.includes(pokemon))
        return commonPokemonName
    } catch (error){
        throw error
    }
}

filterPokemonByType(type1, type2)
.then(commonPokemon => console.log(commonPokemon))
.catch(error => console.log(error))