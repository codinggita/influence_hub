import React from 'react'
import '../css/Profile.css'
import { useNavigate } from 'react-router-dom'
import Box_1 from './Box_1';
import Navbar from './Navbar';
import Footer from './Footer';

function Profile() {
    const navigate=new useNavigate();
    return (
        <div>
            <Navbar/>
            <div className='box-1'>
                <Box_1/>
            </div>
            <div className="main-div-8">
                <div className="main-content-5">
                    <div >
                        <div id="profile-description">
                            <img id="profile-photo" src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww' alt='profile-photo'></img>
                            <h1>Id</h1>
                            <p>Name</p>
                            <p>Description</p>
                        </div>
                        <div id='profile-details'>
                            <div>
                                <h1 onClick={()=>navigate('/profiledetails')}>Profile Details</h1>
                            </div>
                        </div>
                        <div className="post-add" >
                                <h1>Post Add</h1>
                                <div>
                                    <form action="/your-handling-page" method="post" enctype="multipart/form-data">
                                        <label for="image">Select Image:</label>
                                        <input type="file" className="custom-file-upload" id="image" name="image" accept="image/*"></input>

                                        <label for="title">Title</label>
                                        <input type='text' id='title' name='title' ></input>

                                        <label for="description">Description:</label>
                                        <textarea id="description" name="description" rows="5"></textarea>

                                        <button type="submit">Post</button>
                                    </form>
                                </div>
                            </div>
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
            <Footer/>
        </div>
    )
}

export default  Profile 
