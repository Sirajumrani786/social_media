import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './includes/Header';
import Sidebar from './includes/Sidebar';
import Main from './screens/Main';

function App() {
  return (
    <div className="App">
    <Header />
    <Sidebar />
    <Main/>

    </div>
  );
}

export default App;
