import { Order } from './order';
import { MaxHeap } from './maxHeap';
import { MinHeap } from './minHeap';
import { OrderMatcher } from './matching';

const buyOrders = new MaxHeap(10);
const sellOrders = new MinHeap(10);

// Órdenes de compra
buyOrders.insert(new Order('CompanyA', 100, 50, true));
buyOrders.insert(new Order('CompanyA', 50, 55, true));

// Órdenes de venta
sellOrders.insert(new Order('CompanyA', 100, 45, false));
sellOrders.insert(new Order('CompanyA', 50, 40, false));

// Mejor orden de compra y venta
const matcher = new OrderMatcher(buyOrders, sellOrders);

matcher.matchOrders();