
function checkUsernameAvailability(username: string): Promise<string>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const existingUsernames = ["user1", "user2", "user3"];

            if(existingUsernames.includes(username)){
                reject(`the username ${username} is already taken`)
            } else {
                resolve(`the username ${username} is available`)
            }

        }, 2000)
    })
    
}

async function handleUsernameVerification(){
    console.log(`We're checking username availability...`)
    const user1 = "user1"
    const user4 = "user4"

    try {
        const message = await checkUsernameAvailability(user1)
        console.log(message)
    } catch (error) {
        console.log(error)
    }

    try {
        const message2 = await checkUsernameAvailability(user4)
        console.log(message2)
    } catch (error) {
        console.log(error)
    }
}

handleUsernameVerification()