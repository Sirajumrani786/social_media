import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './includes/Header';
import Sidebar from './includes/Sidebar';
import Main from './screens/Main';
import { Routes, Route } from 'react-router-dom';
import Profile from './screens/Profile';
import ChatSide from './screens/ChatSide';
import Setting from './screens/Setting';
import AccInfo from './screens/AccInfo';
import CntInfo from './screens/CntInfo';
import Password from './screens/Password';
import Help from './screens/Help';
import Notifictaion from './screens/Notifictaion';
import Register from './screens/Register';
import Followers from './screens/Followers';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/chat' element={<ChatSide />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/Account-info' element={<AccInfo />} />
        <Route path='/Contact-info' element={<CntInfo />} />
        <Route path='/password' element={<Password />} />
        <Route path='/notification' element={<Notifictaion />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/reg' element={<Register />} />
        <Route path='/followers' element={<Followers />} />

      </Routes>


    </div>
  );
}

export default App;
