import { useCallback, useState } from "react";
import axios from "axios";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Circles } from 'react-loader-spinner';
import SearchBox from "./Components/SearchBox/SearchBox";
import Dictionary from './Components/Dictionary/Dictionary'
import './App.css'
const App = () => {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [audioUrl, setAudioUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const getMeaning =  useCallback(async () => {
    if (!searchWord) {
      toast.error("Please enter a word");
      return;
    }
    
    if(!/^[a-z]+$/i.test(searchWord))
    {
      toast.error("Please enter a valid English word.");
      return;
    }
    setLoading(true)

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord.toLowerCase()}`)
      const result = response.data;
      setData(result);

    } catch (error) {
      if (error.response?.status === 404) {
        toast.error(`Sorry! No results found for '${searchWord}'.`);
        setData([]);
      } else {
        toast.error(`Error fetching data: ${error.message} `);
      }
    } finally {
      setLoading(false);
    }

  }, [searchWord, setData]);

   const playAudio = () => {
    if (!audioUrl) {
      toast.error("Audio url is empty to play audio");
    }
    try {
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (e) {
      toast.error("Unable to play audio");
    }
  };
  return (
    <div className='App'>
      <h1>React Dictionary App!</h1>
      <SearchBox setSearchWord={setSearchWord} getMeaning={getMeaning} />
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <Circles height="80" width="80" color="#4fa94d" ariaLabel="loading" />
        </div>
      ) : (
        <Dictionary data={data} audioUrl={audioUrl} playAudio={playAudio} setAudioUrl={setAudioUrl} />
      )}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  )
}

export default App
