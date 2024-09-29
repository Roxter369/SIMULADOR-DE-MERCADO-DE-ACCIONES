import { MaxHeap } from './maxHeap';
import { MinHeap } from './minHeap';
import { Order } from './order';
import { OrderMatcher } from './matching';
import { TransactionHistory } from './transactionHistory';

const buyOrders = new MaxHeap(10);
const sellOrders = new MinHeap(10);
const transactionHistory = new TransactionHistory();

// Órdenes de compra
try {
    buyOrders.insert(new Order('CompanyA', 100, 50, true));
    buyOrders.insert(new Order('', 50, 55, true));
    buyOrders.insert(new Order('CompanyA', -10, 55, true));
} catch (error) {
    console.error(error.message);
}

// Órdenes de venta
try {
    sellOrders.insert(new Order('CompanyA', 100, 45, false));
    sellOrders.insert(new Order('CompanyA', 50, -10, false));
} catch (error) {
    console.error(error.message);
}

// Realizar el emparejamiento
const matcher = new OrderMatcher(buyOrders, sellOrders, transactionHistory);
matcher.matchOrders();

// Historial de transacciones
transactionHistory.printHistory();
