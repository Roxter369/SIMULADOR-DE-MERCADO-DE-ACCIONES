import { Order } from "./order";
export class MinHeap {
    private heap: Order[];
    private n: number;

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }

    public getMin(): Order {
        return this.heap[1];
    }

    public isEmpty(): boolean {
        return this.n === 0;
    }

    public getQuantity(): number {
        return this.n;
    }

    public insert(order: Order): void {
        if (this.n === (this.heap.length - 1)) {
            this.resize(2 * this.heap.length);
        }
        this.n++;
        this.heap[this.n] = order;
        this.swapUp(this.n);
    }

    public extractMin(): Order | null {
        if (this.n === 0) return null;
        const minOrder = this.heap[1];
        this.heap[1] = this.heap[this.n];
        this.n--;
        this.swapDown(1);
        return minOrder;
    }

    private swapUp(i: number): void {
        let parent = Math.floor(i / 2);
        while (i > 1 && this.heap[parent].price > this.heap[i].price) {
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
            parent = Math.floor(i / 2);
        }
    }

    private swapDown(i: number): void {
        while (this.hasLeftChild(i)) {
            let smallerChildIndex = this.getLeftChildIndex(i);
            if (this.hasRightChild(i) && this.heap[this.getRightChildIndex(i)].price < this.heap[smallerChildIndex].price) {
                smallerChildIndex = this.getRightChildIndex(i);
            }

            if (this.heap[i].price <= this.heap[smallerChildIndex].price) break;

            [this.heap[i], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[i]];
            i = smallerChildIndex;
        }
    }

    private hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) <= this.n;
    }

    private hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) <= this.n;
    }

    private getLeftChildIndex(parentIndex: number): number {
        return 2 * parentIndex;
    }

    private getRightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }

    private resize(newSize: number): void {
        const newHeap: Order[] = new Array(newSize);
        for (let i = 1; i <= this.n; i++) {
            newHeap[i] = this.heap[i];
        }
        this.heap = newHeap;
    }
}
