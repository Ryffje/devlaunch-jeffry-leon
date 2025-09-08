import axios, {AxiosResponse} from 'axios';

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

interface Album {
    userId: number,
    id: number,
    title: string,
}

async function getUserWithAlbums(): Promise <void>{
    try {
        const userPromise = axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        const albumsPromise = axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums')

        const [userResponse, albumsResponse] = await Promise.all([
            userPromise,
            albumsPromise,
        ])

        if(userResponse.status !== 200 || albumsResponse.status !== 200){
            throw new Error('Failed to retrieve data')
        }

        const users = userResponse.data
        const albums = albumsResponse.data

        const usersWithAlbums = users.filter((user: User) => {
            return albums.some((album: Album) => 
                album.userId === user.id)
})

        console.log(usersWithAlbums)
    } catch(error) {

        console.error(error)

    }

}

getUserWithAlbums()