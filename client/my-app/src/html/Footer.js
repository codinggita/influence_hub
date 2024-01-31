import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Footer.css'

function Footer() {
    return (
        <div class="mainbox2">
            <div id="div1">
                <h1>Influencer Hub</h1>
                {/* <NavLink to="/">Categories</NavLink> */}
                <p>Categories</p>
                {/* <NavLink to="/">Features</NavLink> */}
                <p>Features</p>
                {/* <NavLink to="/">Program</NavLink> */}
                <p>Program</p>
            </div>
            <div id="div2">
                <h1>About</h1>
                {/* <NavLink to="/">About Us</NavLink> */}
                <p>About Us</p>
                {/* <NavLink to="/findinfluencers">How it works</NavLink> */}
                <p>How it works</p>
                {/* <NavLink to="/">Teams</NavLink> */}
                <p>Teams</p>
                {/* <NavLink to="/">Influencers</NavLink> */}
                <p>Influencers</p>
                {/* <NavLink to="/">Contact</NavLink> */}
                <p>Contact</p>
            </div>
            <div id="div3">
                <h1>Logos and links</h1>
            </div>
        </div>
        )
}

export default  Footer
