class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            const temp = this.first
            this.first = newNode
            this.first.next = temp
        }

        return ++this.size
    }
    pop() {
        if (this.size === 0) return null
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            const temp = this.first
            this.first = temp.next
            temp.next = null
        }

        return --this.size
    }
}
