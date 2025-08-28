function executePromise(): Promise<number>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log("Frist result: 1");
            resolve(1);

        }, 1000);
    })

    .then((result1)=> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result2 = (result1 as number) * 2
                console.log("second result:", result2)
                resolve(result2)
            }, 2000)
        })
    })
    
    .then((result2) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result3 = (result2 as number) - 4
                console.log("final result:", result3)
                resolve(result3)
            }, 500)
        })
    })
}


