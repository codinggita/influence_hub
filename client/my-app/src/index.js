import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './html/Navbar';
import App from './App';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Influencer from './html/Influencer';
import Footer from './html/Footer';
import Home from './html/Home';
import Features from './html/Features';
import Login  from './html/Login';
import SignUp from './html/SignUp';
import Profile from './html/Profile';
import About from './html/About';
import Post from './html/Post';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/influencer' element={<Influencer/>}></Route>
    <Route path='/features' element={<Features/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/guide' element={<App/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/post' element={<Post/>}></Route>
  </Routes>
  <Footer/>
</BrowserRouter>
);
