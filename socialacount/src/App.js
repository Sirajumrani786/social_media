import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './includes/Header';
import Sidebar from './includes/Sidebar';
import Main from './screens/Main';
import { Routes, Route } from 'react-router-dom';
import Profile from './screens/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>


    </div>
  );
}

export default App;
