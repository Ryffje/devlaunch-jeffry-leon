import axios from "axios";

const apiUrl = 'https://pokeapi.co/api/v2/type/'


async function getPokemonTypeWeakness(type: string): Promise<any>{

    try {
        const response = await axios.get(`${apiUrl}${type}`)
        const weakness = response.data.damage_relations.double_damage_from.map((entry: any) => entry.name)
        return weakness
    } catch {
        throw new Error (`An error occurred fetching weakness for ${type}`)
    }

}

getPokemonTypeWeakness('water')
.then(weakness => console.log(weakness))
.catch(error => console.log(error))