
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <React.Fragment>
 <div className='max-w-screen-lg mx-auto'> 
 <RouterProvider router={routes}></RouterProvider>
 </div>
    </React.Fragment>
  );
}

export default App;
