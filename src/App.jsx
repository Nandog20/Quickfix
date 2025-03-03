import { BrowserRouter, Route, Routes } from 'react-router'


import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';

function App(){
    return(
        <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App