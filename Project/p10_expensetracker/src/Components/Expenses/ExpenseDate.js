import './ExpenseDate.css'
function ExpenseDate(props){

    const month = props.date.toLocaleDateString('en-US', {month:'long'});
    const day = props.date.toLocaleDateString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className="expense__item--date">
            <div className="date--day">{day}</div>
            <div className="date--month">{month}</div>
            <div className="date--year">{year}</div>
        </div>
    )
}

export default ExpenseDate;
