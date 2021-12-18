import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enterAmount: "",
    //     enterDate: ""
    // });

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData= {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // console.log(expenseData);
        props.savedData(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
        props.stopEditing();
    };

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
    };

    const amountChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        setEnteredDate(event.target.value);
    };

    return(
        <form onSubmit= {submitHandler}>
            <div className="new-expense--controls">
                <div className="new-expense--control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-expense--control">
                    <label>Amount</label>
                    <input type="number" min="0" max="1000000" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense--control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2021-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
                <button type="submit">Add</button>
                <button type="clear" onClick={props.stopEditing}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm;