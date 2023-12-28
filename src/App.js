import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Utilities } from './components/Utilities';

import { Shop } from './components/pages/shop/Shop';
import { Categogy } from './components/pages/shop/Categogy';

import { Cart } from './components/pages/cart/Cart';
import { LookUpOrders } from './components/pages/cart/lookUpOrders';

import { LoginForm } from './components/pages/user/Login';
import { RegisterForm } from './components/pages/user/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Utilities />
        <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/categogy' element={<Categogy /> }/>
        <Route path="/lookUpOrders" element={<LookUpOrders />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<RegisterForm />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;