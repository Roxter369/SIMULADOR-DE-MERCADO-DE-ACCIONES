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

                // Registrar la transacción en el historial
                const transaction: Transaction = {
                    company: bestBuy.company,
                    quantity: quantityToTransact,
                    price: bestSell.price,
                    buyer: 'Comprador', // Puedes mejorar esto agregando más detalles sobre el comprador
                    seller: 'Vendedor' // y el vendedor si fuese necesario
                };
                this.transactionHistory.addTransaction(transaction);

                // Actualizar cantidades restantes en las órdenes
                bestBuy.quantity -= quantityToTransact;
                bestSell.quantity -= quantityToTransact;

                // Si alguna orden queda con cantidad 0, la eliminamos del heap
                if (bestBuy.quantity === 0) {
                    this.buyOrders.extractMax();
                }
                if (bestSell.quantity === 0) {
                    this.sellOrders.extractMin();
                }
            } else {
                // No se puede hacer más emparejamientos
                break;
            }
        }
    }
}
