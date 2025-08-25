interface Application {
        experience: number;
        skills: string[];
};

function reviewApplication(application: Application): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(application.experience > 2 && application.skills.includes(`Javascript`)){
                resolve("Application approved! The candidate meets the requirement.")
            } else {
                reject("Application rejected. the candidate does not meet the minimum requirement")
            }
        }, 2000)
    })
}

async function manageApplication(){
    console.log("Thank you for submitting your application")
    console.log("Reviewing application...")
    const application = {
        experience: 3,
        skills: ['Javascript', 'HTML', 'CSS']
    }

    try {
        const message = await reviewApplication(application)
        console.log(message)
    } catch (error) {
        console.log(`An error occurred while reviewing the application: ${error}`)

    }
}

manageApplication()