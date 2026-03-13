"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    head;
    tail;
    size;
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    print() {
        const result = new Array();
        let curr = this.head;
        while (curr !== null) {
            result.push(curr.value);
            curr = curr.next;
        }
        console.log(result.join(" -> "));
    }
}
const head = new LinkedList();
//# sourceMappingURL=01-linkedList.js.map