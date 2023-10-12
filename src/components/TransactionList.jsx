import React, { useContext, useEffect } from 'react';
import { TransactionContext } from './TransactionContext';
import { Trash2 } from 'lucide-react';

function TransactionList() {
    const { state, deleteTransaction } = useContext(TransactionContext);
    const transactions = state.transactions.slice(0, 5); // Limit to the first 5 transactions
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions])
    const handleDelete = (id) => {
        deleteTransaction(id);
    };
    return (
        <>
            <h3>History</h3>
            <div className="transaction-list-container">
                <ul id="list" className="list">
                    {transactions.map((transaction) => (
                        <div key={transaction.id} style={{ position: 'relative' }}>
                            <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
                                {transaction.text} <span>${transaction.amount}</span>
                            </li>
                            <button className="delete-btn" onClick={() => handleDelete(transaction.id)}>
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                </ul>
            </div>

        </>
    );
}

export default TransactionList;
