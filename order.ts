export class Order {
    company: string;
    quantity: number;
    price: number;
    isBuyOrder: boolean;
    userId: string;

    constructor(company: string, quantity: number, price: number, isBuyOrder: boolean, userId: string) {
        if (!company || company.trim() === '') {
            throw new Error('El nombre de la empresa no puede estar vacío.');
        }
        if (quantity <= 0) {
            throw new Error('La cantidad debe ser mayor que cero.');
        }
        if (price <= 0) {
            throw new Error('El precio debe ser mayor que cero.');
        }

        this.company = company;
        this.quantity = quantity;
        this.price = price;
        this.isBuyOrder = isBuyOrder;
        this.userId = userId;
    }
}