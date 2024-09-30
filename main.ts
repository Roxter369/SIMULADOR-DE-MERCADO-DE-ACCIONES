import { MaxHeap } from './maxHeap';
import { MinHeap } from './minHeap';
import { Order } from './order';
import { OrderMatcher } from './matching';
import { TransactionHistory } from './transactionHistory';

const buyOrders = new MaxHeap(10);
const sellOrders = new MinHeap(10);
const transactionHistory = new TransactionHistory();

// Órdenes de compra
buyOrders.insert(new Order('CompanyA', 100, 50, true));  // Orden de compra de 100 acciones
buyOrders.insert(new Order('CompanyA', 50, 55, true));   // Orden de compra de 50 acciones

// Órdenes de venta
sellOrders.insert(new Order('CompanyA', 60, 45, false)); // Orden de venta de 60 acciones
sellOrders.insert(new Order('CompanyA', 90, 40, false)); // Orden de venta de 90 acciones

// Realizar el emparejamiento
const matcher = new OrderMatcher(buyOrders, sellOrders, transactionHistory);
matcher.matchOrders();

// Historial de transacciones
transactionHistory.printHistory();
