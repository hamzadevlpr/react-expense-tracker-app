import React, { useState, useContext } from 'react'
import { TransactionContext } from './TransactionContext';
function AddTransaction() {
    const { addTransaction } = useContext(TransactionContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction(text, amount);
        setText('');
        setAmount(0);
    };
    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text"><span>Add Description</span></label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    ><span>Amount</span> <br />
                        For Expenses = use negative ( - ) <br />
                        For Incomes = use positive ( + )
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction