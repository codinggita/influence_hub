import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate=new useNavigate();

    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownVisibility(!isDropdownVisible);
    };

    return (
        <div>
            <div className="main-div-1">
                    <div className="first-half-nav">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" onClick={()=>navigate('/login')}/>
                        <div id='nav-div-1'>                
                            <button id='button-mui' onClick={()=>navigate('/guide')}>HOW IT WORKS</button>
                            <button id='button-mui' onClick={()=>navigate('/features')}>FEATURES</button>
                            <button id='button-mui' onClick={()=>navigate('/user')}>FIND INFLUENCERS</button>
                            <button id='button-mui' onClick={()=>navigate('/')}>HOME</button>
                        </div>
                    </div>
                <div id='nav-div-2'>
                        <button id='button-mui' onClick={()=>navigate('/login')}>LOGIN</button>
                        <button id='button-mui' onClick={()=>navigate('/signup')}>SIGN UP</button>
                        <button id="btn1" variant="contained" size="large" color='primary' onClick={()=>navigate('/post')}>Post Request</button>
                </div>
                <div className="drop-down-menu">
                    <img
                    src='./3dot.jpg' // Replace with your image URL
                    alt="Dropdown Trigger"
                    onClick={handleToggleDropdown}
                    />
                    {isDropdownVisible && (
                    <div className="dropdown">
                        {/* Dropdown content goes here */}
                            <button id='drop-down-button' onClick={()=>navigate('/')}>HOME</button>
                            <button id='drop-down-button' onClick={()=>navigate('/guide')}>HOW IT WORKS</button>
                            <button id='drop-down-button' onClick={()=>navigate('/features')}>FEATURES</button>
                            <button id='drop-down-button' onClick={()=>navigate('/user')}>FIND INFLUENCERS</button>
                            <button id='drop-down-button' onClick={()=>navigate('/profile')}>PROFILE</button>
                            <button id='drop-down-button' onClick={()=>navigate('/chat')}>CHAT</button>
                            <button id='drop-down-button' onClick={()=>navigate('/post')}>POST</button>
                            <button id='drop-down-button' onClick={()=>navigate('/about')}>ABOUT US</button>
                    </div>
                    )}
                </div>
            </div>
    </div>
    )
}

export default Navbar
