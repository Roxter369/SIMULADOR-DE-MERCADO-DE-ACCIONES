export class Order {
    company: string;
    quantity: number;
    price: number;
    isBuyOrder: boolean;

    constructor(company: string, quantity: number, price: number, isBuyOrder: boolean) {
        this.company = company;
        this.quantity = quantity;
        this.price = price;
        this.isBuyOrder = isBuyOrder;
    }
}