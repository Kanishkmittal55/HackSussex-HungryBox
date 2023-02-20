import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import BrandLogin from './pages/BrandLogin'
import BrandRegister from './pages/BrandRegister'
import Header from './components/Header'


function App() {
  return (
    <>
    <Router>
      <div className='container'>
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<BrandLogin />}/>
          <Route path='/register' element={<BrandRegister />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
