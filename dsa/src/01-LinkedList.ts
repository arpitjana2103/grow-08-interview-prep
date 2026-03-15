class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private _size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    // Container Methods

    get size(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    crear(): void {
        this.head = null;
    }

    // Element Access Operations

    front(): T | null {
        return this.head ? this.head.value : null;
    }

    back(): T | null {
        return this.tail ? this.tail.value : null;
    }

    at(index: number): T | null {
        if (index < 0) return null;
        let currNode: Node<T> | null = this.head;

        while (currNode !== null && index > 0) {
            currNode = currNode.next;
            index--;
        }

        return currNode?.value ?? null;
    }

    // Insertion Operations

    pushFront(value: T): void {
        this._size += 1;
        const newNode: Node<T> = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    pushBack(value: T): void {
        this._size += 1;
        const newNode: Node<T> = new Node(value);

        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    print(): void {
        const result: T[] = [];
        let currNode: Node<T> | null = this.head;

        while (currNode !== null) {
            result.push(currNode.value);
            currNode = currNode.next;
        }

        console.log(`${result.join(" --> ")} --> null`);
    }
}

const list: LinkedList<number> = new LinkedList();
list.pushBack(2);
list.pushBack(3);
list.pushFront(1);
console.log(list.at(1));
console.log("size : ", list.size);
list.print();
