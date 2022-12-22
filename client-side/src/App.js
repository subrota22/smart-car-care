
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import PageLoader from './components/Share/PageLoader/PageLoader';
import { routes } from './Routes/Routes';

function App() {
  return (
    <React.Fragment>
 <div className='max-w-screen-lg mx-auto my-12'> 
 <RouterProvider router={routes}  fallbackElement={<PageLoader></PageLoader>}></RouterProvider>
 </div>
    </React.Fragment>
  );
}

export default App;
