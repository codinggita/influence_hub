import React from 'react'
import '../css/Profile.css'
import { useNavigate } from 'react-router-dom'
import Box_1 from './Box_1';

function Profile() {
    const navigate=new useNavigate();
    return (
        <div>
            <Box_1/>
            <div class="main-div-8">
                <div class="main-content-5">
                    <div id="profile-description">
                        <img id="profile-photo" src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww' alt='profile-photo'></img>
                        <h1>Id</h1>
                        <p>Name</p>
                        <p>description</p>
                    </div>
                    <div id="profile-feature">
                        <div id="review">
                            <h1>Review</h1>
                        </div>
                        <div id="chat-box">
                            <h1>Chats</h1>
                            <div id="chats" onClick={()=>navigate('/chat')}>
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats" onClick={()=>navigate('/chat')}>
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats" onClick={()=>navigate('/chat')}>
                                <p>sfhdjlsdfodkjfsolk</p>
                            </div>
                            <div id="chats" onClick={()=>navigate('/chat')}>
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats" onClick={()=>navigate('/chat')}>
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats" onClick={()=>navigate('/chat')}>
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats" onClick={()=>navigate('/chat')}>
                                <h4>Chat 1</h4>
                            </div>
                            <div id="chats" onClick={()=>navigate('/chat')}>
                                <h4>Chat 1</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Profile 
