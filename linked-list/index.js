// linked list items has no index
// linked list is a collection of nodes
// linked list is a linear data structure
// each linked list item refers to the next item

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const node = new Node('hello')
node.next = new Node('bye')
node.next.next = new Node('bye bye')

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let current = this.head
        let secondLast = current
        while(current.next) {
            secondLast = current
            current = current.next
        }
        this.tail = secondLast
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        if (!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0) this.tail = null
        return currentHead
    }
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let current = this.head
        let counter = 0;
        while (counter !== index) {
            counter++
            current = current.next
        }
        return current
    }
    set(index, val) {
        const foundNode = this.get(index)
        if (foundNode && val) {
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || this.length < index) return false
        if (index === this.length) return this.push(val)
        if (index === 0) return this.unshift(val)

        const perv = get(index - 1)
        const temp = perv.next
        const newNode = new Node(val)
        perv.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        const perv = this.get(index - 1)
        const removed = perv.next
        perv.next = removed.next
        this.length--
        return removed
    }
    reverse() {
        // swap head and tail
        const node = this.head
        this.head = this.tail
        this.tail = node

        let next = null
        let perv = null

        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = perv
            perv = node
            node = next
        }
        return this
    }
}

const list = new SinglyLinkedList()