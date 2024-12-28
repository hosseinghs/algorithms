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
    get(index) {
        if (index < 0 || index >= this.length) return null
        if (this.length === 1) return this.head

        let count = 0
        let currentItem = this.head
        
        if (index <= this.length / 2) {
            while (count < index) {
                currentItem = currentItem.next
                index++
            }
        } else {
            while (count > index) {
                currentItem = currentItem.perv
                count--
            }
        }

        return currentItem
    }
    set(index, val) {
        if (index < 0 || !val) return false
        const currentItem = this.get(index);
        if (currentItem) currentItem.val = val
        return true
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)
       
        const newNode = new Node(val)
        const pervNode = this.get(index - 1);
        const nextNode = pervNode.next;

        pervNode.next = newNode
        newNode.perv = pervNode
        newNode.next = nextNode
        nextNode.perv = newNode

        this.length++

        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const removedNode = this.get(index)
        const pervNode = removedNode.perv
        const nextNode = removedNode.next

        pervNode.next = nextNode
        nextNode.perv = pervNode
        
        this.length--
        
        return true
    }
    reverse () {}
}
