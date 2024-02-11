import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import Box_1 from './Box_1'
import Footer from './Footer'
import '../css/AdminPage.css'
import ProfileCard from './ProfileCard';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ChatCard from './ChatCard';
import axios from 'axios';

const domain=process.env.REACT_APP_DOMAIN;


function AdminPage() {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedUser, setSearchedUser] = useState(null);


    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             // Make a GET request to fetch all users
    //             const response = await axios.get(`${domain}/app/user/${searchTerm}`);
    //             console.log(response.data);
    //             setUsers(response.data);
    //             console.log("sucessfully fetched the users");
    //         } catch (error) {
    //             console.error('Error fetching users:', error);
    //         }
    //     };

    //     fetchUsers();
    // }, []);


    const handleSearch = (e) => {
        e.preventDefault();
        try {
            // Make a GET request to fetch all users
            const response = axios.get(`${domain}/app/user/${searchTerm}`);
            console.log(response.data);
            setUsers(response.data);
            console.log("sucessfully fetched the users");
            } catch (error) {
                console.error('Error fetching users:', error);
            }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const foundUser = users.find(user => users.username === searchTerm);
        setSearchedUser(foundUser);
        // setSearchTerm(''); // Clear search term after submission
    };

    return (
        <div>
            <Navbar/>
            <div className="box-1">
                <Box_1/>
            </div>
                <div className="main-div-13">
                    <div id='user-search'>
                        <h2>User Search</h2>
                        <form onSubmit={handleSearchSubmit}>
                            <input 
                                type="text" 
                                placeholder="Search by username" 
                                value={searchTerm} 
                                onChange={handleSearch} 
                            />
                            <button type="submit">Search</button>
                        </form>
                        </div>
                    <div id='profile-card-section'>
                        <h1>Profile</h1>
                        <div>
                            <ProfileCard key={users.username} user={users}/>
                        </div>
                        <div id="admin-buttons">
                            <Button variant="contained">Create</Button>
                            <Button variant="contained" color='error' >Delete</Button>
                            <Button variant="contained" color='success' >Update</Button>
                            <Button variant="contained" color='warning' >Block</Button>
                        </div>
                    </div>
                    <div id='profile-chat-section'>
                        <h1>Profile chat history</h1>
                        <div id='profile-chat-history-display'>
                            <ChatCard/>
                            <ChatCard/>
                            <ChatCard/>
                        </div>
                        <div id="admin-buttons">
                            <Button variant="contained">Create</Button>
                            <Button variant="contained" color='error'>Delete</Button>
                            <Button variant="contained" color='success'>Update</Button>
                            <Button variant="contained" color='warning'>Block</Button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default AdminPage
