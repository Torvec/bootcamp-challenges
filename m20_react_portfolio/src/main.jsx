// Contains the root of the application, which is the App component


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>{/* The basename prop is so Github pages works properly */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
