import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const [btnOpen, setbtnOpen] = useState(false);

    const startEditingHandler = () => {
        setbtnOpen(true);
    }

    const stopEditingHandler = () => {
        setbtnOpen(false);
    }

    const saveHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return(
        <div className="NewExpense" >
            { !btnOpen ?<button onClick={startEditingHandler}>Add New Expense</button> : <ExpenseForm savedData = {saveHandler} stopEditing={stopEditingHandler}/> }
            
        </div>
        

    )
}

export default NewExpense;