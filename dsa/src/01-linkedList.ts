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
    private size: 0;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value: T): void {
        const newNode = new Node<T>(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    prepend(value: T): void {
        const newNode = new Node<T>(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
    }

    print(): void {
        const result: T[] = new Array();
        let curr = this.head;

        while (curr !== null) {
            result.push(curr.value);
            curr = curr.next;
        }

        console.log(result.join(" -> "));
    }
}

const head = new LinkedList<number>();
