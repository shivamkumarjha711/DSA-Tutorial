const LinkedList = require('./B-LinkedList-with-head-and-tail')
// import LinkedList from "./B-LinkedList-with-head-and-tail"   -- Not work

class LinkedListStack {              // Here let assumed that "list.head" is Last in Stack means most upper stack
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
        return this.list.removeFromFront()
    }

    peek() {
        return this.list.head.value
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}

const stack = new LinkedListStack()
console.log(stack.isEmpty());

stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.getSize());
stack.print()

console.log(stack.pop())
console.log(stack.peek());