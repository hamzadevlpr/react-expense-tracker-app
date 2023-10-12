import React, { Component, useContext } from 'react';
import { TransactionContext } from './TransactionContext';
import { ArrowUp, ArrowDown } from 'lucide-react'; // Import Lucide icons

export class Balance extends Component {
  static contextType = TransactionContext;

  render() {
    const { state } = this.context;
    const transactions = state.transactions;

    // Calculate the balance by summing all transaction amounts
    const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    // Determine which icon to display based on the balance
    const icon = balance >= 0 ? <ArrowUp size={24} /> : <ArrowDown size={24} />;

    return (
      <>
        <h4>Your Balance</h4>
        <div id="balance" style={{ display: 'flex', alignItems: 'center' }}>
          {icon}
          <h1 style={{ marginLeft: '10px' }}>${balance.toFixed(2)}</h1>
        </div>
      </>
    );
  }
}

export default Balance;
