function deliveryPromise(deliveryTime: number): Promise<string>{
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Your order has been delivered");
            }, deliveryTime);
        } catch (error){
            reject(error)
        }
    });

}

async function manageOrder(): Promise <void>{
    console.log("Thank you for placing your order!");
    try{
        const message = await deliveryPromise(2000);
        console.log(message);
        console.log("Order delivered successfully. Enjoy your products!")
    } catch (error) {
        console.log("An error occurred while delivering the order")
    
    }
}

manageOrder();