class Stack<T> {
    private data: T[] = [];

    push(x: T): void {
        this.data.push(x);
    }

    pop(): T | undefined {
        return this.data.pop();
    }

    peek(): T | undefined {
        return this.data[this.data.length - 1];
    }

    size(): number {
        return this.data.length;
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }
}

/*
| Operation   | Description             | Time Complexity | Notes                          |
| ----------- | ----------------------- | --------------- | ------------------------------ |
| **push**    | Add element to top      | O(1)*           | Amortized (resizing may occur) |
| **pop**     | Remove top element      | O(1)            | Direct removal from end        |
| **peek**    | Get top element         | O(1)            | Simple index access            |
| **size**    | Get number of elements  | O(1)            | Stored internally              |
| **isEmpty** | Check if stack is empty | O(1)            | Length comparison              |
*/
