import React, {useState} from 'react';

import './App.css';
import Expense from './Components/Expenses/Expense';
import NewExpense from './Components/Expenses/NewExpense';

const DummyExpenses = [
  {id: 101, title: "Loan", amount: 20000, date: new Date(2020, 11, 3) },
  {id: 102, title: "Food", amount: 1000, date: new Date(2021, 0, 12) },
  {id: 103, title: "Rent", amount: 10000, date: new Date(2021, 4, 5) },
  {id: 104, title: "Rent", amount: 10000, date: new Date(2020, 6, 5) },
  {id: 105, title: "Rent", amount: 10000, date: new Date(2021, 11, 5) },
  {id: 106, title: "Loan", amount: 20000, date: new Date(2020, 9, 3) },
  {id: 107, title: "Food", amount: 1000, date: new Date(2021, 10, 1) },
  {id: 108, title: "Rent", amount: 10000, date: new Date(2021, 18, 5) },
  {id: 109, title: "Rent", amount: 10000, date: new Date(2020, 10, 5) },
  {id: 110, title: "Rent", amount: 10000, date: new Date(2021, 1, 5) }
]

const App = () => {
  
  const [expenses, setExpenses] = useState(DummyExpenses);
  const addExpenseHandler = (data) =>{
    setExpenses((expenses) =>{
      setExpenses((prevState) => {
        return [data, ...expenses];
      })
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expenses = {expenses}/>
    </div>
  );
}

export default App;
