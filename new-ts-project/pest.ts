class ListNode<T> {
    constructor(
        public value: T,
        public nextNode: ListNode<T> | null = null
    ){}
}

class LinkedList<T> {
    head: ListNode<T> | null
    constructor(){
        this.head = null

    }


    add(value: T){
        let current = this.head
        const newNode = new ListNode(value)

        if(!current){
            this.head = newNode
        } else {
            while(current.nextNode){
                current = current?.nextNode
            }

            current.nextNode = newNode
        }

    }

    print(){
        let current = this.head
        let text = ''

        while(current){
            text += current.value + '->'
            current = current?.nextNode
        }

        text += 'null'

        return text
    }

}


const list1 = new LinkedList<number>()

list1.add(1)
list1.add(4)
list1.add(2)
console.log(list1.print())