import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalContextProvider from './context/GlobalContext';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </GlobalContextProvider>
);
