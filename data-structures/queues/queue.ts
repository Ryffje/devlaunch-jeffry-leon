class Queue <T> {
    private items: T[] = [];
    

    enqueue(item: T): void {
            this.items.push(item);
        }

    dequeue(): T | null {
        if (this.isEmpty()) {
            console.log ("Attempted to dequeue form empty queue.");
            return null;
        }

    
        return this.items.shift()!;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const queue = new Queue<number>();

console.log("Before queueing: ", queue.isEmpty())

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.isEmpty())

queue.enqueue(4)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.isEmpty())

console.log(queue.dequeue());
console.log(queue.isEmpty());