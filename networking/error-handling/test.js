async function fetchData(url) {
  try {
	  const response = await fetch(url);
    
		if (!response.ok) {
      console.log("Error:", response.status);
    } else {
      const data = await response.json();
      console.log("Data received:", data);
    }
  } catch (error) {
    if (error instanceof Error){
      console.log("An error occurred while fetching data:", error.message)
    } else {
      console.log("An error occurred while fetching data:", error);
    }
  }
}

fetchData("https://jsonplaceholder.typicode.com/non-existing-route");