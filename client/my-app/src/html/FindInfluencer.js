import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/FindInfluencer.css'

function FindInfluencer() {
    return (
        <div class="mainbox1">
            <div id="box1">
                <h1>How Can Influencer Hub Help Your Business ?</h1>
            </div>
            <div id="box1">
                <p>The possibilities are endless. We have perfect profiles for your promotions.</p>
            </div>
            <div id="box1">
                <NavLink id="postrequest2" to="/request">Post A Request</NavLink>
            </div>
            <div class="box2">
                    <NavLink id='box2' to="/findinfluencers">How To Find Influencer</NavLink>
                    <NavLink id='box3' to="/findteam">How To Find Team</NavLink>
            </div>
            <div>
                <div>
                    <h1>Image</h1>
                </div>
                <div>
                    <h1>How It Works ?</h1>
                    <div>
                        <h2>1. Choose the perfect influencer</h2>
                        <p>Simply filter influencers as per your choice and review the profiles.</p>
                        <h2>2. Chat with them</h2>
                        <p>Finalize the rate at which they want to promote you.</p>
                        <NavLink id="postrequest2">POST A REQUEST</NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FindInfluencer
