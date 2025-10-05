
import './App.css'
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
  
    <Navbar/>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/> 
      <Route path='/products' element={<Products/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='*' element={<NotFound/>}/> 
     </Routes>
   
    
    </>
  );
}

export default App
