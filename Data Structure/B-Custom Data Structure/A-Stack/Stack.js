class Stack {
    constructor() {          // Property
        this.items = []
    }

    push(element) {      // Methods
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString());
    }
}

// Create Instance
const stack = new Stack()
// console.log(stack);
console.log(stack.isEmpty());

stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size());
stack.print()

console.log(stack.pop());
console.log(stack.peek());

// The array is an "indexed" list that allows random read and write operations whereas the stack implements "LIFO principals", which means insertion and removal in the stack always has constant time complexity whereas in the array it is linear when you try to insert and remove elements at zero index.