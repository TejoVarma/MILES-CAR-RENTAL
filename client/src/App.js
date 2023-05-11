import React from 'react';
import AdminContext from './context/AdminContext';
import Routers from './routes/Routes';

function App() {
  return <>
    <AdminContext>
      <Routers />
    </AdminContext>
  </>

}

export default App;
