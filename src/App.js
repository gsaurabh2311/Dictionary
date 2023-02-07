import { Container } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

function App() {

  //STATES

  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [lightMode, setLightMode] = useState(false)
  
  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
  
        setMeanings(data.data)
      } catch (error){
          console.log(error)
      }
    }
    dictionaryApi();
  }, [word,category])

  return (
    <div 
            className="App" 
            style={{height: '100vh', 
            backgroundColor: lightMode ? "#DEE4E7" : '#282c34', 
            color: lightMode ? "black" : 'white', 
            transition: 'all 0.4s linear'
      }}>

      <Container 
            maxWidth='md' 
            style={{display: 'flex', 
                    flexDirection: 'column', 
                    height: '100vh', 
                    justifyContent: 'space-evenly'
                    }}>
        <div 
            style={{position: "absolute", 
                  top: 0,
                  right: 15, 
                  paddingTop: 10
                  }}>
          
          {/* THEME SWITCHER TOGGLE */}
          <FormControlLabel
            value="Light"
            control={<Switch color="primary" />}
            label={lightMode ? "Dark Mode" : "Light Mode"}
            labelPlacement="Light"
            checked={lightMode} onChange={() => setLightMode(!lightMode)}
          />
        </div>
        <Header 
            category={category}
            setCategory = {setCategory}
            word={word} setWord={setWord} 
            lightMode={lightMode} 
          />
        {meanings && (<Definitions word={word}
                                   meanings={meanings} 
                                   category={category}
                                   lightMode={lightMode} />)}
      </Container>
    </div>
  );
}

export default App;
