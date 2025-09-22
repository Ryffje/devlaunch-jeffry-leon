import axios from "axios"

const apiKey = 'nLtbzQJyPyKSbFPXQItpCdAEzr7zFVvu';

const apiUrl = `https://api.giphy.com/v1/gifs/search`;

async function fetchGiphyGif(keyword: string): Promise<string | null>{

    try{
    const response = await axios.get(`${apiUrl}?q=${keyword}&api_key=${apiKey}&limit=1`)
    const searchAGif = response.data.data.length === 0
    ? null
    : response.data.data[0].images.original.url
    return searchAGif
} catch (error) {
    console.error(`An error occurred fetching gif ${keyword}`)
    return null
}

}

fetchGiphyGif("cat")
  .then(url => {
    if (url) {
      console.log("GIF URL:", url);
    } else {
      console.log("No results found for cat");
    }
  })
  .catch(err => console.error("Error in fetchGiphyGif:", err));


