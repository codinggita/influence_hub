import React from 'react'
import "../css/Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div class="navbar">
      <div id="nav-box-1">
        <NavLink to="/">Home</NavLink>
        <div id="nav-link-1">
          <NavLink to="/findinfluencers">How It Works</NavLink>
          <NavLink to="/Features">Features</NavLink>
          <NavLink to="/influencerslist">Find Influencers</NavLink>
        </div>
      </div>    
      
      <div id="nav-link-2">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <button id="btnpost">Post Request</button>
      </div>
    </div>
  )
}

export default Navbar
