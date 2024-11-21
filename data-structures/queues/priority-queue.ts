class MultiLevelPriorityQueue<T> {
    private queue: Map <number, T[]> = new Map();

    enqueue(item: T, priority: number): void {
        if (!this.queue.has(priority)){
            this.queue.set(priority, [])
        }

        this.queue.get (priority)?.push(item);

    }

        dequeue(): T | null {
            const highestPriority = Math.min(... Array.from(this.queue.keys()));

            if (this.queue.has(highestPriority) && this.queue.get(highestPriority)?.length! > 0){
                const items = this.queue.get(highestPriority)!;
                const item = items.shift();
                if (items.length === 0){
                    this.queue.delete(highestPriority);
                }

                return item!;
            }

            return null
        }

        isEmpty(): boolean {
            return this.queue.size === 0;
        }
    }

const priorityQueue = new MultiLevelPriorityQueue<string>();

priorityQueue.enqueue("A", 0);
priorityQueue.enqueue("B", 1);
priorityQueue.enqueue("C", 2);
priorityQueue.enqueue("D", 1);
priorityQueue.enqueue("E", 0);


console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());