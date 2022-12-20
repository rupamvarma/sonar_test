import { Button, IconButton, ThemeProvider } from '@mui/material';
import { styled } from '@mui/styles';
import React from 'react';
import theme from './theme';

const Styles = styled(Button)(
  {
    width: "200px !important",
    background: "red"
  }
)
  

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <Styles variant='contained'>Submit2</Styles>
        <IconButton>Submi</IconButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
