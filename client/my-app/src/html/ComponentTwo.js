import { Button, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Component.css';


const ComponentTwo = () => {
    const navigate=new useNavigate();
    return (
        <div>
            <div class="main-div-4">
                <div>
                    <img src="https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhdHxlbnwwfHwwfHx8MA%3D%3D" alt='error'></img>
                    <div id="content-1">
                        <h1>What kind of work can I do?</h1>
                        <p>Whatever the field ,you can find the best promotional teams.Complete your profile so we can match you to the right team.</p>
                        <Button id="btn2" variant="contained" size="large" color='primary' onClick={()=>navigate('/team')}>FIND TEAM</Button>
                    </div>
                </div>
                <div>
                    <div id="content-4">
                        <div id="div-1">
                            <img id="chat" src='https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww' alt='phoneimg'></img>
                        </div>
                        <div id="div-2">
                            <div>
                                <h1>How does it work ?</h1>
                                <h3>1. Choose the perfect team</h3>
                                <p>Simply find perfect company as per your choice.</p>
                                <h3>2. Take a concern with company</h3>
                                <p>Finalize the rate at your mutual concern and start your promotion and get paid.</p>
                                <Stack >
                                    <Button variant='contained' onClick={()=>navigate('/teams')}>FIND TEAM</Button>
                                </Stack>
                            </div>
                        </div>                    
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentTwo;
