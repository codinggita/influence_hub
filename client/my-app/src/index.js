import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './html/Navbar';
import Footer from './html/Footer';
import Box1 from './html/Box1';
import App from './App';
import {BrowserRouter, createBrowserRouter,NavLink,Route,RouterProvider,Routes} from "react-router-dom";
import FindInfluencer from './html/FindInfluencer';
import SignUp from './html/SignUp';
import Login from './html/Login';
import FindTeam from './html/FindTeam'
import Home from './html/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Box1/>
  <Routes>
    <Route path='/findinfluencers' element={<FindInfluencer/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/findteam' element={<FindTeam/>}></Route>
    <Route path='/' element={<Home/>}></Route>
  </Routes>
  <Footer/>
</BrowserRouter>
);
