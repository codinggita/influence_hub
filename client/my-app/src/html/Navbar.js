import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import '../css/Navbar.css'
import { ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Navbar() {
    const navigate=new useNavigate();

    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownVisibility(!isDropdownVisible);
    };

    return (
        <div>
            <div class="main-div-1">
                <div id='nav-div-1'>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" onClick={()=>navigate('/login')}/>
                
                            <button id='button-mui' onClick={()=>navigate('/guide')}>HOW IT WORKS</button>
                            <button id='button-mui' onClick={()=>navigate('/features')}>FEATURES</button>
                            <button id='button-mui' onClick={()=>navigate('/influencer')}>FIND INFLUENCERS</button>
                            <button id='button-mui' onClick={()=>navigate('/')}>HOME</button>
                </div>
                <div id='nav-div-2'>
                        <button id='button-mui' onClick={()=>navigate('/login')}>LOGIN</button>
                        <button id='button-mui' onClick={()=>navigate('/signup')}>SIGN UP</button>
                        <button id="btn1" variant="contained" size="large" color='primary' onClick={()=>navigate('/post')}>Post Request</button>
                </div>
                <div class="drop-down-menu">
                    <img
                    src="https://images.unsplash.com/photo-1489648022186-8f49310909a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGluZXxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image URL
                    alt="Dropdown Trigger"
                    onClick={handleToggleDropdown}
                    />
                    {isDropdownVisible && (
                    <div class="dropdown">
                        {/* Dropdown content goes here */}
                            <button id='drop-down-button' onClick={()=>navigate('/')}>HOME</button>
                            <button id='drop-down-button' onClick={()=>navigate('/guide')}>HOW IT WORKS</button>
                            <button id='drop-down-button' onClick={()=>navigate('/features')}>FEATURES</button>
                            <button id='drop-down-button' onClick={()=>navigate('/influencer')}>FIND INFLUENCERS</button>
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
