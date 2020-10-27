import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const sign = transaction.income ? '+' : '-';
    const { deleteTransaction } = useContext(GlobalContext);
    return (

        <li style={transaction.income ? style.plus : style.minus}>
            {transaction.income ? transaction.incomeText : transaction.expenseText} <span>{sign}{transaction.income ? Math.abs(transaction.income) : Math.abs(transaction.expense)}</span>
            <button onClick={() => deleteTransaction(transaction._id)}>X</button>
        </li>

    );

}


const style = {
    plus: { borderRight: 'green', color: 'green'},
    minus: { borderRight: 'red', color: 'red' }
}