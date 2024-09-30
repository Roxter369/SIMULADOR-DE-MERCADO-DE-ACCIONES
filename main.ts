import { MaxHeap } from './maxHeap';
import { MinHeap } from './minHeap';
import { Order } from './order';
import { OrderMatcher } from './matching';
import { TransactionHistory } from './transactionHistory';

const buyOrders = new MaxHeap(10);
const sellOrders = new MinHeap(10);
const transactionHistory = new TransactionHistory();

// Órdenes de compra con identificadores de compradores
buyOrders.insert(new Order('CompanyA', 100, 50, true, 'Comprador1'));
buyOrders.insert(new Order('CompanyA', 50, 55, true, 'Comprador2'));

// Órdenes de venta con identificadores de vendedores
sellOrders.insert(new Order('CompanyA', 60, 45, false, 'Vendedor1'));
sellOrders.insert(new Order('CompanyA', 90, 40, false, 'Vendedor2'));

// Realizar el emparejamiento
const matcher = new OrderMatcher(buyOrders, sellOrders, transactionHistory);
matcher.matchOrders();

// Historial de transacciones
transactionHistory.printHistory();