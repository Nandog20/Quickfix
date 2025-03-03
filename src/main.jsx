import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import Navbar from './components/Navbar';


import './global.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<App />}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
