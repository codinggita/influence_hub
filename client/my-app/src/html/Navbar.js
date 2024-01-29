import React from 'react'
import "../css/Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div class="navbar">
      <div id="nav-box-1">
        <NavLink to="/">Home</NavLink>
        <div id="nav-link-1">
          <div>
          <NavLink to="/working">How It Works</NavLink>
          </div>
          <div>
          <NavLink to="Features">Features</NavLink>
          </div>
          <div>
          <NavLink to="find-influencers">Find Influencers</NavLink>
          </div>
        </div>
      </div>    
      
      <div id="nav-link-2">
        <a href="">Login</a>
        <a href="">Sign Up</a>
        <button>Post Request</button>
      </div>
    </div>
  )
}

export default Navbar
