import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import '../css/Home.css'
import Box_1 from './Box_1';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
    const navigate=new useNavigate();
    return (
        <div>
            <Navbar/>
            <div class="box-1">
                <Box_1/>
            </div>
            <div class="main-div-4">
                <div>
                    <img id='bg-img-1' src="https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5lb24lMjB2fGVufDB8fDB8fHww" alt='error'></img>
                    <div id="content-1">
                        <h1>HIRE THE BEST</h1>
                        <h2>INFLUENCERS FOR YOUR PROMOTIONS</h2>
                        <Stack spacing={5} direction='column'>
                            <Button id="btn2" variant="contained" size="large" color='primary' onClick={()=>navigate('/influencer')}>HIRE A INFLUENCER</Button>
                            <Button id="btn3" variant="outlined" size="large" color='primary' onClick={()=>navigate('/team')}>CONNECT TO TEAMS</Button>
                        </Stack>
                    </div>
                </div>
                <div>
                    <img id='bg-img-2' src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ybGQlMjBpbiUyMG5pZ2h0fGVufDB8fDB8fHww" alt='error'></img>
                    <div id="content-2">
                        <h1>TAP INTO A</h1>
                        <h1><span>GLOBAL NETWORK</span></h1>
                        <div id="items">
                            <div id="item-1">
                                <h1>Post your page</h1>
                                <p>It's free and easy! Start making your collaborations and promote team and businesses.</p>
                            </div>
                            <div id="item-1">
                                <h1>Choose your team</h1>
                            </div>
                            <div id="item-1">
                                <h1>Pay safely</h1>
                                <p>Our system protects you every step of the way.</p>
                            </div>
                            <div id="item-1">
                                <h1>We're here to help</h1>
                                <p>Your time is precious. let you save your time for searching teams for promotions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default  Home    

