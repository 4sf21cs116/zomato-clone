import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from  './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/AddUser'; 
import Home from './Components/Home';
import RestuarantMenu from './Components/RestuarantMenu';
import BackButton from './Components/BackButton';
import Cart from './Components/Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/restaurants/:id" element={<RestuarantMenu />} />
         <Route path="/cart" element={<Cart/>} />
      </Routes>
      <BackButton/>
    </Router>
  );
};

export default App;

