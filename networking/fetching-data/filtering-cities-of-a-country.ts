import axios from "axios";

const apiUrl = `https://restcountries.com/v2/name/name`
const countryName = `Costa Rica`

async function getCapitalFromCountry(countryName: string): Promise<string | null> {
    const url = `${apiUrl}${countryName}`

    try {
        const response = await axios.get(url)
        const capital = response.data[0].capital
        return capital
    } catch (error) {
        console.log(`An error occurred while fetching the capital from country ${countryName}`)
        return null

    }
}

async function displayCapital(): Promise<void> {
    const capital = await getCapitalFromCountry(countryName)

    if(capital){
        console.log(`The capital of ${countryName} is ${capital}`)
    } else {
        console.log(`No capital found for ${countryName}`)
    }
}

try{

displayCapital()

} catch (error){
    console.log(error)
}
