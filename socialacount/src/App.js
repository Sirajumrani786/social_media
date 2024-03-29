// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './includes/Header';
import Sidebar from './includes/Sidebar';
import Main from './screens/Main';
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
import Login from './screens/Login';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Protected Component={Main} />} />
        <Route path='/profile' element={<Protected Component={Profile} />} />
        <Route path='/chat' element={<Protected Component={ChatSide} />} />
        <Route path='/setting' element={<Protected Component={Setting} />} />
        <Route path='/Account-info' element={<Protected Component={AccInfo} />} />
        <Route path='/Contact-info' element={<Protected Component={CntInfo} />} />
        <Route path='/password' element={<Protected Component={Password} />} />
        <Route path='/notification' element={<Protected Component={Notifictaion} />} />
        <Route path='/Help' element={<Protected Component={Help} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/followers' element={<Protected Component={Followers} />} />
      </Routes>
    </div>
  );
}

export default App;
