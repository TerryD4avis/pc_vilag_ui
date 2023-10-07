import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import axios from 'axios';


axios.defaults.httpsAgent = {
    rejectUnauthorized: false
  };
  

const root = createRoot(document.getElementById('root')); 
root.render(<App />);
