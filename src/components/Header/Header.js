import { TextField, ThemeProvider, createTheme, MenuItem} from '@mui/material';
import React from 'react';
import './Header.css'

const Header = () => {

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    return (
        <div className='header'>
            <span className='title' style={{color: 'white'}}>Dictionary</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                     <TextField id="standard-basic" label="Enter a word" variant="standard" />
                        <TextField
                            select
                            label="Select"
                            helperText="Please select your language"
                        >
                            <MenuItem>
                                English
                            </MenuItem>
                        </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header