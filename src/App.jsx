import { BrowserRouter, Route, Routes } from 'react-router'


import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import NewProduct from './pages/NewProduct';
import Citas from './pages/Citas';

function App(){
    return(
        <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/newProduct' element={<NewProduct/>}/>
        <Route path='/Cita' element={<Citas/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App