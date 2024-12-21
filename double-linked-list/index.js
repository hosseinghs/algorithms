class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.perv = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined
        const poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.perv
            this.tail.next = null
            poppedNode.perv = null
        }
        this.length--
        return poppedNode
    }
    shift() {
        if (!this.head) return undefined
        const oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.perv = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.perv = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
}