import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import '../css/Box_1.css'
import { useNavigate } from 'react-router-dom';


function Box_1() {
    const navigate=new useNavigate();
    return (
    <div class="main-div-2">
        <Stack spacing={3} direction='row'>                
                <Button variant='text' size='large' onClick={()=>navigate('/influencer')}>HIRE INFLUENCERS</Button>
                <Button variant='text' size='large' onClick={()=>navigate('/resources')}>RESOURCES</Button>
                <Button variant='text' size='large' onClick={()=>navigate('/about')}>ABOUT US</Button>
        </Stack>
    </div>
    )
}
    export default      Box_1
