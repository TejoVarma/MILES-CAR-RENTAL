import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminContext from './context/AdminContext';
import Routers from './routes/Routes';

function App() {
  return <>
    <Header />
    <AdminContext>
      <Routers />
    </AdminContext>
    <Footer />
  </>

}

export default App;
