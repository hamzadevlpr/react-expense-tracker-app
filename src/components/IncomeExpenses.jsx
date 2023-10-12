import React, { Component, useContext } from 'react';
import { TransactionContext } from './TransactionContext';

export class Expense extends Component {
    static contextType = TransactionContext;

    render() {
        const { state } = this.context;
        const transactions = state.transactions;

        // Calculate income and expenses
        const income = transactions
            .filter(transaction => transaction.amount > 0)
            .reduce((acc, transaction) => acc + transaction.amount, 0);

        const expense = transactions
            .filter(transaction => transaction.amount < 0)
            .reduce((acc, transaction) => acc + transaction.amount, 0);

        return (
            <div className="container">
                <div className="inc-exp-container">
                    <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money">+${income.toFixed(2)}</p>
                    </div>
                    <div>
                        <h4>Expense</h4>
                        <p id="money-minus" className="money">-${Math.abs(expense).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Expense;
