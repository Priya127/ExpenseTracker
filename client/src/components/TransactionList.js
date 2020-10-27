import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var recent = [];
  if (transactions.length >= 4) {
    for (var i = transactions.length - 1; i > transactions.length - 5; i--) {
      recent.push(transactions[i])
    }
  }
  else {
    for (var j = 0; j < transactions.length; j++) {
      recent.push(transactions[j])
    }
  }

  console.log(recent)
  return (
    <>
      <h3 style={{ marginLeft: '100px' }}>History</h3>
      <ul className="list">
        {recent.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}