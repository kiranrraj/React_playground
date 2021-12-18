import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const ddChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    };
    return(
        <div>
            <div>
                <label>Filter By Year</label>
                <select onChange={ddChangeHandler} value={props.selected}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;