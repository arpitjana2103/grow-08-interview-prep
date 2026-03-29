class LNode<T> {
    value: T;
    next: LNode<T> | null;
    prev: LNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList<T> {
    private head: LNode<T> | null;
    private tail: LNode<T> | null;
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
        const str = "Hello World";
        console.log(str);
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
        let currLNode: LNode<T> | null = this.head;

        while (currLNode !== null && index > 0) {
            currLNode = currLNode.next;
            index--;
        }

        return currLNode?.value ?? null;
    }

    // Insertion Operations

    pushFront(value: T): void {
        this._size += 1;
        const newLNode: LNode<T> = new LNode(value);

        if (this.head === null) {
            this.head = newLNode;
            this.tail = newLNode;
            return;
        }

        this.head.prev = newLNode;
        newLNode.next = this.head;
        this.head = newLNode;
    }

    pushBack(value: T): void {
        this._size += 1;
        const newLNode: LNode<T> = new LNode(value);

        if (this.tail === null) {
            this.head = newLNode;
            this.tail = newLNode;
            return;
        }

        newLNode.prev = this.tail;
        this.tail.next = newLNode;
        this.tail = newLNode;
    }

    insert(value: T, index: number): void {
        if (index < 0 || index > this._size) return;
        if (index === 0) {
            this.pushFront(value);
            return;
        }
        if (index === this._size) {
            this.pushBack(value);
            return;
        }
        // 0 1 2 3 4
        // index = 1 | 2 | 3 | 4
        // let index be = 4;

        let prevLNode: LNode<T> = this.head!;

        for (let i = 0; i < index - 1; i++) {
            prevLNode = prevLNode.next!;
        }

        const newLNode = new LNode(value);

        // prevLNode = 3
        // 0 => 1 => 2 => 3(prev) => 4
        // 0 => 1 => 2 => 3(prev) => newLNode => 4

        newLNode.prev = prevLNode;
        newLNode.next = prevLNode.next;

        prevLNode.next!.prev = newLNode;
        prevLNode.next = newLNode;

        this._size += 1;
    }

    // Removal Operations

    print(): void {
        const result: T[] = [];
        let currLNode: LNode<T> | null = this.head;

        while (currLNode !== null) {
            result.push(currLNode.value);
            currLNode = currLNode.next;
        }

        console.log(`${result.join(" --> ")} --> null`);
    }
}

const list: LinkedList<number> = new LinkedList();
list.pushBack(2);
list.pushBack(3);
list.pushFront(1);
console.log(list.at(1));
list.insert(22, 3);
console.log("size : ", list.size);
list.print();
