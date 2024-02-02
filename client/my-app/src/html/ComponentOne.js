import React from 'react';
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import '../css/Component.css';


const ComponentOne = () => {
    const navigate=new useNavigate();

    return (
        <div>
            <div class="main-div-4">
                <div>
                    <img src="https://images.unsplash.com/photo-1643503640904-75c1a2093570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww" alt='error'></img>
                    <div id="content-1">
                    <h1>How can Influencer hub help your business?</h1>
                        <p>The possibilities are endless. We have perfect profiles for your promotions.</p>
                        <Button id="btn2" variant="contained" size="large" color='primary' onClick={()=>navigate('/influencer')}>FIND INFLUENCER </Button>
                    </div>
                </div>
                <div>
                    <div id="content-4">
                        <div id="div-1">
                            <img id="chat" src='https://plus.unsplash.com/premium_photo-1684761949512-fab7ef8a3b3c?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='chat'></img>
                        </div>
                        <div id="div-2">
                            <div>
                                <h1>How does it work ?</h1>
                                <h3>1. Choose the perfect influencer</h3>
                                <p>Simply filter influencers as per your choice and review the profiles.</p>
                                <h3>2. Chat with tem</h3>
                                <p>Finalize the rate at which they want to promote you.</p>
                                <Stack >
                                    <Button variant='contained' onClick={()=>navigate('/post')}>POST A REQUEST</Button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentOne;
