import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes';
import "./styles/base.css"


function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
