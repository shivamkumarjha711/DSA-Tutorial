class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // Big - O(1)    (bcz "Node" add in satring)
    prepend(value) {          // Adding new "Node" from the begining
        const node = new Node(value)   // Creating new Instance of Node Class
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // Big - 0(n)    (bcz "Node" add at end)
    append(value) {               // Adding new "Node" at the end
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {            // Adding new "Node" at the given Index value
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    // Big - O(1)
    removeFrom(index) {              // remove "Node" by "Index No"
        if (index < 0 || index >= this.size) {
            console.log("Index is not found");
            return null
        }
        let removeNode
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.value
        }
        this.size--
        return removeNode.value
    }

    // Big - O(1)
    removeValue(value) {             // remove "Node" by "Node value"
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        while(curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let curr = this.head
            let listValues = ''
            while(curr) {
                listValues += `${curr.value} `        // OR, listValues = listValues + `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList()
console.log('List is Empty ?', list.isEmpty());
console.log('List Size', list.getSize());
list.print()

// list.prepend(10)
// list.print()

// list.append(10)
// list.print()

// list.prepend(20)
// list.prepend(30)
// list.print()

// list.append(20)
// list.append(30)
// list.print()

list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print()

list.insert(30, 1)
list.print()

list.insert(40, 2)
list.print()
console.log(list.getSize());


// console.log(list.removeFrom(10));

// console.log(list.removeFrom(0));
// list.print()

// console.log(list.removeFrom(1));
// list.print()
// console.log(list.getSize());


// console.log(list.removeValue(40));
// list.print()

// console.log(list.removeValue(20));
// list.print()

// console.log(list.removeValue(60));
// list.print()
// console.log(list.getSize());


// console.log(list.search(20));
// console.log(list.search(40));
// console.log(list.search(60));


list.reverse()
list.print()


