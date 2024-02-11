import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import '../css/Navbar.css'
import { useNavigate , useLocation } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';


function Navbar() {
    const navigate=new useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get('username');

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
                            <Button id='button-mui' onClick={()=>navigate('/guide')}>HOW IT WORKS</Button>
                            <Button id='button-mui' onClick={()=>navigate('/features')}>FEATURES</Button>
                            <Button id='button-mui' onClick={()=>navigate('/user')}>FIND INFLUENCERS</Button>
                            <Button id='button-mui' onClick={()=>navigate('/')}>HOME</Button>
                        </div>
                    </div>
                <div>

                    {console.log({username})}
                {username ? (
                        <div id='nav-div-2'>
                            <p>Hello, {username}!</p>
                            <button id='button-mui' onClick={()=>navigate('/')}>LOGOUT</button>
                            <button id="btn1" variant="contained" size="large" color='primary' onClick={()=>navigate('/post')}>Post Request</button>
                        </div>
                    ) : (
                        <div id='nav-div-2'>
                            <Button id='button-mui' onClick={()=>navigate('/login')}>LOGIN</Button>
                            <Button id='button-mui' onClick={()=>navigate('/signup')}>SIGN UP</Button>
                            <Button id="btn1" variant="contained" size="large" color='primary' onClick={()=>navigate('/post')}>Post Request</Button>
                        </div>
                    )}
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
