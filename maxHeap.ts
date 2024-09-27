import { Order } from "./main";
export class MaxHeap {
    private heap: Order[];
    private n: number;

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }

    public getMax(): Order {
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
        this.swap(this.n);
    }

    private swap(i: number): void {
        let parent = Math.floor(i / 2);
        while (i > 1 && this.heap[parent].price < this.heap[i].price) {
            const temp: Order = this.heap[parent];
            this.heap[parent] = this.heap[i];
            this.heap[i] = temp;
            i = parent;
            parent = Math.floor(i / 2);
        }
    }

    private resize(newSize: number): void {
        const newHeap: Order[] = new Array(newSize);
        for (let i = 1; i <= this.n; i++) {
            newHeap[i] = this.heap[i];
        }
        this.heap = newHeap;
    }
}