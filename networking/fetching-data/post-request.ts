import axios, {AxiosError} from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts'

interface Request {
    title: string,
    body: string,
    userId: number
}

interface Response {
    id: number,
    title: string,
    body: string,
    userId:number,

}

async function createPost(url: string, data: Request): Promise<Response>{
    try{
        const request = await axios.post<Response>(url, data)
        console.log(`New post created: ${JSON.stringify(request.data, null, 2)}`)
        return request.data
    } catch (error){
        if(isAxiosError(error)){
            console.log(`An error occurred: ${error.response?.statusText}`)
        } else {
            console.log(`An error occurred: ${(error as Error).message}`)
        }

        throw error

    }

}


function isAxiosError(error: any): error is AxiosError{
    return (error as AxiosError).isAxiosError !== undefined

}

const postData: Request = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

createPost(url, postData)