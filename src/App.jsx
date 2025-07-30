import { useState } from "react";
import axios from "axios";

import SearchBox from "./Components/SearchBox/SearchBox";
import Dictionary from './Components/Dictionary/Dictionary'
import './App.css'
const App = () => {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const getMeaning = () => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className='App'>
      <h1>React Dictionary App!</h1>
      <SearchBox setSearchWord={setSearchWord} getMeaning={getMeaning} />
      <Dictionary data={data} playAudio={getMeaning} />
    </div>
  )
}

export default App
