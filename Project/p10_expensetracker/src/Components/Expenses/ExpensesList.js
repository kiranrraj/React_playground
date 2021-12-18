import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) =>{
    let output = <p>No Entry Found for the year</p>;

    if(props.fExpenses.length === 0 ){
        return output;
    }
    
    return (
        <ul className="expensesList">
            {props.fExpenses.map((expenseItem) => {
            return <ExpenseItem data={expenseItem} key={expenseItem.id}/>
        })}
        </ul>
    )
}

export default ExpensesList;

