import { MaxHeap } from './maxHeap';
import { MinHeap } from './minHeap';
import { Order } from './order';
import { OrderMatcher } from './matching';
import { TransactionHistory } from './transactionHistory';

const buyOrders = new MaxHeap(10);
const sellOrders = new MinHeap(10);
const transactionHistory = new TransactionHistory();

// Órdenes de compra
buyOrders.insert(new Order('CompanyA', 100, 50, true));
buyOrders.insert(new Order('CompanyA', 50, 55, true));

// Órdenes de venta
sellOrders.insert(new Order('CompanyA', 100, 45, false));
sellOrders.insert(new Order('CompanyA', 50, 40, false));

// Realizar el emparejamiento
const matcher = new OrderMatcher(buyOrders, sellOrders, transactionHistory);
matcher.matchOrders();

// Historial de transacciones
transactionHistory.printHistory();