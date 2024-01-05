import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Utilities } from './components/Utilities';
import ActiveUser from './components/pages/user/ActiveUsers';
import FetchDeletedUsers from './components/pages/user/FetchDeletedUsers';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Utilities />
        <Routes>
          <Route path='/active-users' element={<ActiveUser />} /> 
          <Route path='/fetch-deleted-users' element={<FetchDeletedUsers />} /> 
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
