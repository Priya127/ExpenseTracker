import React, { useEffect,useContext } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import Chart from './components/chartComponent';
import Donut from './components/donutComponent';
import { GlobalProvider } from './context/GlobalState';
import {GlobalContext} from './context/GlobalState'
import './App.css';


function App() {
  
  return (
    <GlobalProvider>
      <Header />
      <div className='current'>
        <Balance />
        <IncomeExpenses />
      </div>
      <div className='current1'>
        <TransactionList />
        <Chart />
        <Donut/>
      </div>
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
