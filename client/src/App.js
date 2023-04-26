import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className='main'>
      <Header/>
        <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
