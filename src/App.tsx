import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import theme from "./theme";
import AppRouter from './routes';
import "./styles/base.css"


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
