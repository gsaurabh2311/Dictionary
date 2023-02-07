import { TextField, ThemeProvider, createTheme, MenuItem} from '@mui/material';
import React from 'react';
import './Header.css'
import categories from '../../data/category'

const Header = ({category, setCategory, word, setWord, lightMode}) => {

    const darkTheme = createTheme({
        palette: {
          mode: lightMode ? "light" : "dark",
        },
      });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

    return (
        <div className='header'>
            <span className='title' style={{color: lightMode ? "black" :  'white'}}>{word ? word : "Dictionary"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                        <TextField 
                            className="search"
                            id="standard-basic" 
                            label="Enter a word" 
                            variant="standard" 
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                        />
                        <TextField
                            className="select"
                            select
                            label="Language"
                            value={category}
                            onChange={(e) => handleChange(e.target.value)}
                        >
                            {
                                categories.map((lang) => (
                                    <MenuItem key={lang.label} value={lang.label}>
                                    {lang.value}
                                </MenuItem>
                                ))
                            }
                        </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header