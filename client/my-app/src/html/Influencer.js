import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import '../css/Influencer.css'
import Box_1 from './Box_1';
import { Button } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';



function Influencer() {
    const navigate=new useNavigate();
    return (
    <div>
        <Navbar/>
        <div className="box-1">
            <Box_1/>
        </div>
        <div className="main-div-5">
                <h1>Top Influencer</h1>
                <Button id="btn4" variant='contained' onClick={()=>navigate('/influencer')}>Find a influencer</Button>
                <Button id="btn5" variant='outlined' onClick={()=>navigate('/team')}>Find a team</Button>
        </div>
        <div className="main-div-6">
            <div>
                    <form action="/search" method="get">
                        <div id="icon"><SearchIcon/></div>
                        <input for="word" type='text' placeholder='Search Keyword'></input>
                        <div id="icon"><PlaceIcon/></div>
                        <input for="location" type='text' placeholder='Location'></input>
                        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                        <Button id="btn6" varient='contained'>Search</Button>
                    </form>
                    <div className="content-4">
                        <div class="filter">
                            <h1>Filters</h1>
                        </div>
                        <div className="showcase">
                            <h1>Showcase</h1>
                            <div class="influencercard">
                                <div id="info">
                                    <p>username</p>
                                    <p>location</p>
                                    <p>link</p>
                                    <p>Description</p>
                                </div>
                                <div><img onClick={()=>navigate('/profile')} src='https://images.unsplash.com/photo-1658845489483-6d54f6d5a766?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='error'></img></div>
                            </div>
                            <div className="influencercard">
                                <div id="info">
                                    <p>username</p>
                                    <p>location</p>
                                    <p>link</p>
                                    <p>Description</p>
                                </div>
                                <div><img onClick={()=>navigate('/profile')} src='https://images.unsplash.com/photo-1658845489483-6d54f6d5a766?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='error'></img></div>
                            </div>
                            <div className="influencercard">
                                <div id="info">
                                    <p>username</p>
                                    <p>location</p>
                                    <p>link</p>
                                    <p>Description</p>
                                </div>
                                <div><img onClick={()=>navigate('/profile')} src='https://images.unsplash.com/photo-1658845489483-6d54f6d5a766?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='error'></img></div>
                            </div>
                            <div className="influencercard">
                                <div id="info">
                                    <p>username</p>
                                    <p>location</p>
                                    <p>link</p>
                                    <p>Description</p>
                                </div>
                                <div><img onClick={()=>navigate('/profile')} src='https://images.unsplash.com/photo-1658845489483-6d54f6d5a766?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='error'></img></div>
                            </div>
                            <div className="influencercard">
                                <div id="info">
                                    <p>username</p>
                                    <p>location</p>
                                    <p>link</p>
                                    <p>Description</p>
                                </div>
                                <div><img onClick={()=>navigate('/profile')} src='https://images.unsplash.com/photo-1658845489483-6d54f6d5a766?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='error'></img></div>
                            </div>
                            <div className="influencercard">
                                <div id="info">
                                    <p>username</p>
                                    <p>location</p>
                                    <p>link</p>
                                    <p>Description</p>
                                </div>
                                <div><img onClick={()=>navigate('/profile')} src='https://images.unsplash.com/photo-1658845489483-6d54f6d5a766?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='error'></img></div>
                            </div>
                        </div>
                        </div>
                    {/* </div> */}
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Influencer
