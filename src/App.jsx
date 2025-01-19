import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/User';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='bg-lightBlue h-screen'>
    <NavBar/>
    <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    
    </div>
      

  );
}

export default App;
