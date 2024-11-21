class Queue <T> {
    private items: T [] = [];
    private capacity: number;

    constructor (capacity: number){
        this.capacity = capacity;
    }

    enqueue(item: T): void {
        if (this.items.length === this.capacity){
            return console.log("Queue overflow: Cannot add item, the queue is full.");
        }

        this.items.push(item);
    }

    dequeue(): void {
        if ( this.items.length === 0){
            return console.log("Queue underflow: Cannot remove item, the queue is empty.");
        }

        this.items.shift()

    }}

    const queue = new Queue <number>(5)
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

