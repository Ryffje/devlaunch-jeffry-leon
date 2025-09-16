import axios, {AxiosError} from "axios";

const url = (id: number) => `https://jsonplaceholder.typicode.com/posts/${id}`
const postIdToDelete = 1

async function deleteRequest(id: number): Promise<void> {
    try {
        await axios.delete(url(id))
        console.log(`Post with ID ${id} was successfully deleted`)
    } catch (error){
        if(isAxiosError(error)){
            console.error(`Error: ${error.response?.statusText}`)
        } else {
            console.error(`Error: ${(error as Error).message}`)
        }
    }
}

function isAxiosError(error: any): error is AxiosError {
return (error as AxiosError).isAxiosError !== undefined
}

deleteRequest(postIdToDelete)

