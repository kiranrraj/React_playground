import classes from  './UsersList.module.css'

const UsersList = (props) => {
    const list = props.users;
    console.log(list)
    return(
        <ul className={classes.users}>
            {list.length > 0 ? (list.map(user => {
                return <li className={classes.user} key={Math.random()}>
                    <span>{user.name}</span> <span>{user.age}</span>
                    </li>
            })): null}
        </ul>
    )
}

export default UsersList;