class PrintJob {

    name: string;

    constructor (name: string){
        this.name = name;
    }
}

class PrinterQueue {
    private queue: PrintJob [] = [];

    addJob(job: PrintJob): void {
        this.queue.push(job)
       
    }

    nextJob(): PrintJob | null {
        if (this.queue.length === 0){
          return null;
        }

        return this.queue.shift() || null

    }

    numJobs(): number {
        return this.queue.length
    }

    printJobs(): void {
        this.queue.forEach ((job) => {
        console.log(job);

});
}}

const printQueue = new PrinterQueue();

const job1 = new PrintJob("Johnny");
const job2 = new PrintJob("Ana");
const job3 = new PrintJob ("Pepe");

printQueue.addJob(job1);
printQueue.addJob(job2);
printQueue.addJob(job3);


console.log(printQueue.nextJob());
console.log(printQueue.nextJob());
console.log(printQueue.nextJob());
console.log(printQueue.nextJob());



