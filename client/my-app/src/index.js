import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './html/Navbar';
import App from './App';
import {BrowserRouter, createBrowserRouter,NavLink,Route,RouterProvider,Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<p>Home</p>}></Route>
  </Routes>
</BrowserRouter>
);
