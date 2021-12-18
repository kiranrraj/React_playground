import React, {useState} from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState("");
  const addUserListHandler = (uName, uAge) => {
    setUsersList((prevState) =>{
      return [...prevState, {name:uName, age: uAge}]
    });
  }

  return (
    <div className="App">
      <AddUsers onAddUser={addUserListHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
