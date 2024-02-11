import React, { useEffect, useState  } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import '../css/Influencer.css'
import Box_1 from './Box_1';
import ProfileCard from './ProfileCard';
import { Button } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

import ChatCard from './ChatCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const domain=process.env.REACT_APP_DOMAIN;


function Influencer() {

    const navigate=new useNavigate();

    const [users, setUsers] = useState([]);
    const [searchedUser, setSearchedUser] = useState(null);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Make a GET request to fetch all users
                const response = await axios.get(`${domain}/app/user`);
                console.log(response.data);
                setUsers(response.data);
                console.log("sucessfully fetched the users");
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);


    return (
    <div>
        <Navbar/>
        <div className="box-1">
            <Box_1/>
        </div>
        <div className="main-div-5">
                <h1>Top Influencer</h1>
                <Button id="btn4" variant='contained' onClick={()=>navigate('/user')}>Find a influencer</Button>
                <Button id="btn5" variant='outlined' onClick={()=>navigate('/user')}>Find a team</Button>
        </div>
        <div className="main-div-6">
            <div>
                    <form action="/search" method="get">
                        <div id="icon"><SearchIcon/></div>
                        <input for="word" type='text' placeholder='Search Keyword'></input>
                        <div id="icon"><PlaceIcon/></div>
                        <input for="location" type='text' placeholder='Location'></input>
                        <Button id="btn6" varient='contained'>Search</Button>
                    </form>
                    <div className="content-4">
                        <div class="filter">
                            <h1>Filters</h1>
                        </div>
                        <div className="showcase">
                            <h1>Showcase</h1>
                            {users.map(user => (
                                <ProfileCard key={user.username} user={user} />
                                ))}
                            </div>
                        </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Influencer
