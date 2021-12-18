import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from "./ExpensesChart";
import "./Expense.css"

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.expenses.filter(exp => {
        return exp.date.getFullYear().toString() === filteredYear;
    });

    return (
      <div className="expense">
          <ExpenseFilter selected={filteredYear} onChangeFilter ={filterChangeHandler}/>
          <div>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList fExpenses = {filteredExpenses}/>
              {/* {filteredExpenses.length === 0 ? <p>No Entry Found for the year</p> : (
                  filteredExpenses.map((expenseItem) => {
                    return <ExpenseItem data={expenseItem} key={expenseItem.id}/>
                })
              )} */}


                {/* <ExpenseItem data={props.expenses[0]}/>
                <ExpenseItem data={props.expenses[1]}/>
                <ExpenseItem data={props.expenses[2]}/> */}
          </div>
        
      </div>
    );
  }
  
  export default Expense;