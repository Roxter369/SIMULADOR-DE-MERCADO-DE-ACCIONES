// matching.ts (actualización)
import { MaxHeap } from './maxHeap';
import { MinHeap } from './minHeap';
import { Order } from './order';
import { TransactionHistory, Transaction } from './transactionHistory';

export class OrderMatcher {
    private buyOrders: MaxHeap;
    private sellOrders: MinHeap;
    private transactionHistory: TransactionHistory;

    constructor(buyOrders: MaxHeap, sellOrders: MinHeap, transactionHistory: TransactionHistory) {
        this.buyOrders = buyOrders;
        this.sellOrders = sellOrders;
        this.transactionHistory = transactionHistory;
    }

    public matchOrders(): void {
        while (!this.buyOrders.isEmpty() && !this.sellOrders.isEmpty()) {
            const bestBuy = this.buyOrders.getMax();
            const bestSell = this.sellOrders.getMin();

            if (bestBuy.price >= bestSell.price) {
                const quantityToTransact = Math.min(bestBuy.quantity, bestSell.quantity);

                console.log(`Realizar transacciones de ${quantityToTransact} acciones de ${bestBuy.company} a $${bestSell.price}`);

                const transaction: Transaction = {
                    company: bestBuy.company,
                    quantity: quantityToTransact,
                    price: bestSell.price,
                    buyer: 'Comprador',
                    seller: 'Vendedor'
                };
                this.transactionHistory.addTransaction(transaction);

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
