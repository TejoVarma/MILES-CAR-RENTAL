import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='main'>
      <Header/>
      <div className='body'>
        Hello World
      </div>
      <Footer/>
    </div>
  );
}

export default App;
