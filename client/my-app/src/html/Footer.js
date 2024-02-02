import React from 'react'
import '../css/Footer.css'
import { useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

function Footer() {
    const navigate=new useNavigate();
    return (
        <div>
            <div class="main-div-3">
                <div>
                    <Stack varient='text' size='larger'>
                        <h1>Influencer Hub</h1>
                        <Button onClick={()=>navigate('/category')}>Categories</Button>
                        <Button onClick={()=>navigate('/features')}>Features</Button>
                        <Button onClick={()=>navigate('/programs')}>Programs</Button>
                    </Stack>
                </div>
                <div>
                    <h1>Influencer Hub</h1>
                    <Stack varient='text' size='larger'>
                        <Button onClick={()=>navigate('/about')}>About Us</Button>
                        <Button onClick={()=>navigate('/guide')}>How it works</Button>
                        <Button onClick={()=>navigate('/team')}>Team</Button>
                        <Button onClick={()=>navigate('/contact')}>Contact</Button>
                    </Stack>
                </div>
                <div>
                    <h1>Logos and links</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
