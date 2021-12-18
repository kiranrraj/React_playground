import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const {title, amount, date} = props.data;
    return(
        <li className="expense__item">
            <ExpenseDate date={date} />
            <div className="expense__item--description">
                <h2 className="expense__item--title">{title}</h2>
                <div className="expense__item--price">{amount}</div>
            </div>
        </li>
    )
}

export default ExpenseItem;