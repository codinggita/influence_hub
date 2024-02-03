import React, { useState } from 'react';
import Navbar from './Navbar'
import Box_1 from './Box_1'
import Footer from './Footer'
import '../css/AdminPage.css'
import ProfileCard from './ProfileCard';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ChatCard from './ChatCard';


function AdminPage() {

    const [username, setUsername] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        // Perform a search based on the provided username (simulated here)
        // You can replace this with your actual search logic

        try {
        // Simulating a fetch request to an API
        const response = await fetch(`https://api.example.com/users/${username}`);
        const data = await response.json();

        setSearchResults(data);
        } catch (error) {
        console.error('Error during search:', error);
        setSearchResults(null);
        }
    };

    return (
        <div>
            <Navbar/>
            <Box_1/>
                <div class="main-div-13">
                    <div id='user-search'>
                        <h2>User Search</h2>
                        <form onSubmit={handleSearch}>
                            <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder='Username'
                            />
                            </label>
                            <br />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div id='profile-card-section'>
                        <h1>Profile</h1>
                        <ProfileCard/>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained">Create</Button>
                            <Button variant="contained" color='error' >Delete</Button>
                            <Button variant="contained" color='success' >Update</Button>
                            <Button variant="contained" color='warning' >Block</Button>
                        </Stack>
                    </div>
                    <div id='profile-chat-section'>
                        <h1>Profile chat history</h1>
                        <div id='profile-chat-history-display'>
                            <ChatCard/>
                            <ChatCard/>
                            <ChatCard/>
                        </div>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained">Create</Button>
                            <Button variant="contained" color='error'>Delete</Button>
                            <Button variant="contained" color='success'>Update</Button>
                            <Button variant="contained" color='warning'>Block</Button>
                        </Stack>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default AdminPage
