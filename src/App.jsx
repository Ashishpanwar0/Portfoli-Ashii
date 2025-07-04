import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'

const router = createBrowserRouter([
  {
    path:  "/",
    element: <Home/>
  }
]);

function App(){
  return <RouterProvider router={router}/>
}
export default App;
