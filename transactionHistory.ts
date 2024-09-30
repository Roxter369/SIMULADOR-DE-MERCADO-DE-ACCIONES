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
        this.transactions.push(transaction); //el push añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    }

    public getHistory(): Transaction[] {
        return this.transactions;
    }

    public printHistory(): void {
        if (this.transactions.length === 0) {
            console.log('No se han realizado transacciones.');
            return;
        }

        console.log('Historial de transacciones:');
        for (const transaction of this.transactions) {
            console.log(
                'Compañía: ' + transaction.company +
                ', Cantidad: ' + transaction.quantity +
                ', Precio: $' + transaction.price +
                ', Comprador: ' + transaction.buyer +
                ', Vendedor: ' + transaction.seller
            );
        }
    }

    public printTransactionsByCompany(company: string): void {
        let found = false;

        console.log('Historial de transacciones para la compañía ' + company + ':');
        for (const transaction of this.transactions) {
            if (transaction.company === company) {
                console.log(
                    'Compañía: ' + transaction.company +
                    ', Cantidad: ' + transaction.quantity +
                    ', Precio: $' + transaction.price +
                    ', Comprador: ' + transaction.buyer +
                    ', Vendedor: ' + transaction.seller
                );
                found = true;
            }
        }

        if (!found) {
            console.log('No se encontraron transacciones para la compañía: ' + company);
        }
    }
}
