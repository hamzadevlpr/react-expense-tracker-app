import React, { createContext, useReducer } from 'react';

const initialState = {
    transactions: [],
};

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    const addTransaction = (text, amount) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                id: Math.floor(Math.random() * 1000000),
                text,
                amount: parseFloat(amount),
            },
        });
    };

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    };

    return (
        <TransactionContext.Provider value={{ state, addTransaction, deleteTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};

const TransactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            };
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
            };
        default:
            return state;
    }
};
