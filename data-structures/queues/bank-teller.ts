class Customer {
    constructor (public name: string){}
}

class Queue {
    private queue: Customer [] = [];

    addCustomer(customer: Customer): void {
        this.queue.push(customer);
    }

    nextCustomer(): Customer | null {
        if (this.queue.length > 0) {
            return this.queue.shift() || null;
        }else{
            return null
        }
    }

    numCustomer(): number {
        return this.queue.length;
    }
}

const bankQueue = new Queue();
bankQueue.addCustomer({name: "John"});
bankQueue.addCustomer({name: "Jane"});
console.log(bankQueue.numCustomer());
bankQueue.addCustomer({name: "jack"})
console.log(bankQueue.nextCustomer());
console.log(bankQueue.nextCustomer());
console.log(bankQueue.nextCustomer());
console.log(bankQueue.nextCustomer());