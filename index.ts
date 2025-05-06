const MAX_METERS = 20
const MAX_STEPS = 3

const raceDogs = (): void => {
    let dog1Position = 0
    let dog2Position = 0

    while(true){

    dog1Position = moveDog(dog1Position)
    dog2Position = moveDog(dog2Position)

    if (dog1Position >= MAX_METERS) {
        announceWinners(1)
       
    } else if (dog2Position >= MAX_METERS) {
    announceWinners(2) }
    }
}

const moveDog = (position: number): number => {
const run = Math.floor(Math.random()*3)
return position + run
}

const announceWinners = (dogNumber: number): void => {
    console.log(`The winneeeeer is ${dogNumber}`)
}

raceDogs()




