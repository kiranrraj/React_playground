import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUsers.module.css'
import Button from "../UI/Button";
import Modal from "../UI/Modal";


const AddUsers = (props) =>{
    const [enterdName, setEnteredName] = useState("");
    const [enterdAge, setEnteredAge] = useState("");
    const [errorStatus, setErrorStatus] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enterdName.trim().length === 0 || enterdAge.trim().length === 0){
            setErrorStatus({
                title:"Invalid inputs",
                message: "Please enter a valid name and age."
            })
        } else if(enterdAge < 1){
            setErrorStatus({
                title:"Invalid age",
                message: "Please enter a valid age."
            })
        } else{
            props.onAddUser(enterdName, enterdAge)
            console.log(enterdName, enterdAge)
        }

        setEnteredName("");
        setEnteredAge("");
        
    }

    const closeHandler = (event) => {
        setErrorStatus(null);
    }

    return(
        <div>
            {errorStatus && <Modal 
                title={errorStatus.title}
                msg={errorStatus.message}
                close={closeHandler}
            /> }
        <Card>
            <form onSubmit={addUserHandler}>
                <div className={classes.Card__item}>
                    <label htmlFor="username">UserName</label>
                    <input 
                        type="text" 
                        id="userName" 
                        value={enterdName}
                        className={classes.Card__input}
                        onChange={nameChangeHandler}>
                    </input>
                </div>
                <div className={classes.Card__item}>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        id="age" 
                        value={enterdAge}
                        className={classes.Card__input}
                        onChange={ageChangeHandler}>
                    </input>
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUsers;