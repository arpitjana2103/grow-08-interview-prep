class Queue<T> {
    private data: Record<number, T> = {};
    private head = 0;
    private tail = 0;

    enqueue(x: T): void {
        this.data[this.tail++] = x;
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) return;

        const value = this.data[this.head];
        delete this.data[this.head];
        this.head++;

        return value;
    }

    peek(): T | undefined {
        if (this.isEmpty()) return;
        return this.data[this.head];
    }

    rear(): T | undefined {
        if (this.isEmpty()) return;
        return this.data[this.tail - 1];
    }

    size(): number {
        return this.tail - this.head;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    clear(): void {
        this.data = {};
        this.head = 0;
        this.tail = 0;
    }
}

/*
| Operation | Description             | Time Complexity | Notes                   |
| --------- | ----------------------- | --------------- | ----------------------- |
| enqueue   | Insert at rear          | O(1)            | Direct index assignment |
| dequeue   | Remove from front       | O(1)*           | Includes `delete`       |
| peek      | Get front element       | O(1)            | Direct access           |
| rear      | Get last element        | O(1)            | `tail - 1` index        |
| size      | Number of elements      | O(1)            | Pointer arithmetic      |
| isEmpty   | Check if queue is empty | O(1)            | Simple comparison       |
| clear     | Reset queue             | O(1)            | Reassign references     |
*/
