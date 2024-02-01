import React from 'react'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import '../css/Navbar.css'
import { ButtonGroup } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate=new useNavigate();
    return (
    <div class="main-div-1">
        <div>
            <Stack spacing={3} direction="row">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <ButtonGroup variant="text" color='primary' size='large' aria-label="align-button-group">
                    <Button onClick={()=>navigate('/guide')}>HOW IT WORKS</Button>
                    <Button onClick={()=>navigate('/features')}>FEATURES</Button>
                    <Button onClick={()=>navigate('/influencer')}>FIND INFLUENCERS</Button>
                    <Button onClick={()=>navigate('/')}>Home</Button>
                </ButtonGroup>
            </Stack>
        </div>
        <div>
            <Stack spacing={3} direction="row">
                <ButtonGroup variant="text">
                    <Button onClick={()=>navigate('/login')}>LOGIN</Button>
                    <Button onClick={()=>navigate('/signup')}>SINGUP</Button>
                </ButtonGroup>
                <Button id="btn1" variant="contained" size="large" color='primary'>Post Request</Button>
            </Stack>
        </div>
    </div>
    )
}

export default Navbar
