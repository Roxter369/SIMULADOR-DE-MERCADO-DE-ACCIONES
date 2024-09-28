import { MaxHeap } from './maxHeap';
import { MinHeap } from './minHeap';
import { Order } from './order';

export class OrderMatcher {
    private buyOrders: MaxHeap;
    private sellOrders: MinHeap;

    constructor(buyOrders: MaxHeap, sellOrders: MinHeap) {
        this.buyOrders = buyOrders;
        this.sellOrders = sellOrders;
    }

    public matchOrders(): void {
        while (!this.buyOrders.isEmpty() && !this.sellOrders.isEmpty()) {
            const bestBuy = this.buyOrders.getMax();
            const bestSell = this.sellOrders.getMin();

            if (bestBuy.price >= bestSell.price) {
                const quantityToTransact = Math.min(bestBuy.quantity, bestSell.quantity);

                console.log(`Transacting ${quantityToTransact} shares of ${bestBuy.company} at $${bestSell.price}`);

                bestBuy.quantity -= quantityToTransact;
                bestSell.quantity -= quantityToTransact;

                if (bestBuy.quantity === 0) {
                    this.buyOrders.extractMax();
                }
                if (bestSell.quantity === 0) {
                    this.sellOrders.extractMin();
                }
            } else {
                break;
            }
        }
    }
}