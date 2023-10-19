import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/common/Footer/Footer';
import Header from './Components/common/Header/Header';
import MainComponent from './Components/landingPages/MainComponent';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
