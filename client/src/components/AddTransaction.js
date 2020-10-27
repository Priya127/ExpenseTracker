import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {

  const [incomeText, setIncomeText] = useState('');
  const [expenseText, setExpenseText] = useState('');
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      incomeText,
      expenseText,
      income: +income,
      expense: +expense
    }
    if ((newTransaction.incomeText && newTransaction.income > 0) || (newTransaction.expenseText && newTransaction.expense > 0)) {
      addTransaction(newTransaction);

    }
    else {
      alert('Please select income/expense options\nPlease enter a number greater than 0.')
    }


    const reset = () => {
      setIncomeText('')
      setExpenseText('')
      setIncome(0)
      setExpense(0)
    }
    reset();
  }


  return (
    <>
      <h3 style={{ marginLeft: '100px' }}>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='inputDiv'>
          <div className="form-control">
            <select style={{ height: '30px', width: '100px' }} value={incomeText} onChange={(e) => setIncomeText(e.target.value)}>
              <option>Select</option>
              <option value='Paycheck'>Paycheck</option>
              <option value='Stocks'>Stocks</option>
              <option value='Tutoring'>Tutoring</option>
              <option value='Freelance'>Freelance</option>
              <option value='Ecommerce'>Ecommerce</option>
            </select>
          </div>
          <div className="form-control">

            <input style={{ marginBottom: '10px', height: '30px' }} type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="Enter amount..." />

          </div>
          <button className="btn">Add Income</button>
        </div>
      </form>
      <form onSubmit={onSubmit}>
        <div className='inputDiv'>
          <div className="form-control">
            <select style={{ height: '30px', width: '100px' }} value={expenseText} onChange={(e) => setExpenseText(e.target.value)}>
              <option>Select</option>
              <option value='Groceries'>Groceries</option>
              <option value='Shopping'>Shopping</option>
              <option value='Restaurant'>Restaurant</option>
              <option value='Car fuel'>Car fuel</option>
              <option value='Bills'>Bills</option>
            </select>
          </div>
          <div className="form-control">

            <input type="number" style={{ marginBottom: '10px', height: '30px' }} value={expense} onChange={(e) => setExpense(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add Expense</button>
        </div>
      </form>
    </>
  )
}