import React, {useState, useEffect} from 'react';
import Header from './Components/UI/header.js';
import '../src/App.css';
import axios from 'axios';
import CharacterGrid from './Components/characters/Character_grid'
import Search from "./Components/UI/Search.js"

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect( ()=> {
    const fetchItems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data);
      setItems(result.data)
      setIsLoading(false)

    }
    fetchItems()
  },[query])

  return (
    <div className="container">
        <Header/>
        <Search getQuery={(query)=> setQuery(query)}/>
        <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App;
