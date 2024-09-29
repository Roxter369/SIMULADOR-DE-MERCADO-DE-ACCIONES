export interface Transaction {
    company: string;
    quantity: number;
    price: number;
    buyer: string;
    seller: string;
}

export class TransactionHistory {
    private transactions: Transaction[];

    constructor() {
        this.transactions = [];
    }

    public addTransaction(transaction: Transaction): void {
        this.transactions.push(transaction);
    }

    public getHistory(): Transaction[] {
        return this.transactions;
    }

    public printHistory(): void {
        if (this.transactions.length === 0) {
            console.log('Aún no se han realizado transacciones.');
            return;
        }

        console.log('Historial de transacciones:');
        for (const transaction of this.transactions) {
            console.log(`Compañía: ${transaction.company}, Cantidad: ${transaction.quantity}, Precio: $${transaction.price}, Comprador: ${transaction.buyer}, Vendedor: ${transaction.seller}`);
        }
    }
}