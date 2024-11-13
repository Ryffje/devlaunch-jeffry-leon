class Queue <T> {
    private items: T[] = [];
    private maxSize: number;

    constructor(maxSize: number){
        this.maxSize = maxSize
    }

    enqueue(item: T): void {
        if (this.items.length === this.maxSize){
            return console.log("Queue overflow")
        }

        this.items.push(item)
    }

    dequeue(): void {
        if (this.items.length === 0) {
            return console.log("Queue underflow")
        }

        this.items.shift()
    }
}

const queue = new Queue<number>(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()