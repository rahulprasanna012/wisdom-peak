import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetail';

import NotFound from './components/NotFound';

function App() {
  return (
    <div className='bg-lightBlue h-screen'>
   
    <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route eaxct path="/user/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    
    </div>
      

  );
}

export default App;
