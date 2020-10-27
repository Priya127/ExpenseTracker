import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const incomes = transactions.map(transaction => transaction.income).reduce((a,c)=>(a+=c),0);
  const expenses = transactions.map(transaction => transaction.expense).reduce((a,c)=>(a+=c),0)*-1;

  const total = incomes+expenses

  return (
    <div className='balance'>
      <h4>Your Balance</h4>
    <h1>${numberWithCommas(total)}</h1>
    </div>
  )
}
