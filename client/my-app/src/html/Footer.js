import React from 'react'
import '../css/Footer.css'
import { useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    const navigate=new useNavigate();
    const CopyrightNotice = () => {
        const currentYear = new Date().getFullYear();
    }
    return (
        <div>
            <div class="main-div-3">
                <div>
                    <Stack varient='text' size='larger'>
                        <h1>Influencer Hub</h1>
                        {/* <Button onClick={()=>navigate('/category')}>Categories</Button> */}
                        <Button onClick={()=>navigate('/features')}>Features</Button>
                        {/* <Button onClick={()=>navigate('/programs')}>Programs</Button> */}
                    </Stack>
                </div>
                <div>
                    <h1>About Us</h1>
                    <Stack varient='text' size='larger'>
                        <Button onClick={()=>navigate('/about')}>About</Button>
                        <Button onClick={()=>navigate('/guide')}>How it works</Button>
                        <Button onClick={()=>navigate('/influencer')}>Influencer</Button>
                        <Button onClick={()=>navigate('/contact')}>Contact</Button>
                    </Stack>
                </div>
                <div>
                    <p><YouTubeIcon/> YouTube</p>
                    <p><FacebookIcon/> Facebook</p>
                    <p><InstagramIcon/> Instagram</p>
                    <p><LinkedInIcon/> Linkedin</p>
                    <p><XIcon/> X</p>
                </div>
            </div>
            <div class="footer-copyright">
                <p>&copy; {CopyrightNotice} Influencer Hub. All rights reserved.</p>
                <p>
                    The content, design, and graphics on this website are the intellectual property
                    of Influencer Hub and are protected by copyright law. Any unauthorized use,
                    reproduction, or distribution of the materials on this site without the express
                    written permission of Influencer Hub is strictly prohibited.
                </p>
                <p>
                    For inquiries regarding the use or licensing of our content, please contact us at{' '}
                    <a href="mailto:@email.com">ry9826653@gmail.com</a>.
                </p>
            </div>
        </div>
    )
}

export default Footer
