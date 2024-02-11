import React, { useEffect, useRef, useState  } from 'react';
import '../css/Chat.css'
import Box_1 from './Box_1'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import ChatComponent from './ChatComponent';

import { Link } from 'react-router-dom';
import ChatCard from './ChatCard';



const domain=process.env.REACT_APP_DOMAIN;


function Chat({ chatId }) {

    const [user, setUsers] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get('username');


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Make a GET request to fetch all users
                const response = await axios.get(`${domain}/app/user/${username}`);
                console.log(response.data);
                setUsers(response.data);
                console.log("sucessfully fetched the users");
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    // *******************************************************
    const [showHistory, setShowHistory] = useState(false); // State to control the visibility of ChatHistory

    const toggleChatHistory = () => {
        setShowHistory(!showHistory);
    };

    const [chatRooms, setChatRooms] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        chatId: '',
        username: '',
        destinationUsername: ''
        });
    
        useEffect(() => {
            fetchChatRooms();
        }, []);

    const fetchChatRooms = async () => {
        try {
        const response = await axios.get(`${domain}/api/chat-rooms`);
        setChatRooms(response.data);
        } catch (error) {
        console.error('Error fetching chat rooms:', error);
        }
    };

    const handleNewChatSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${domain}/api/chat-rooms`, { chatId: formData.chatId,username:{username}, destinationUsername: formData.otherUsername });
            fetchChatRooms();
            setShowForm(false); // Hide the form after submission
            // Optionally, you can clear the input fields after successful submission
        } catch (error) {
            console.error('Error creating chat room:', error);
        }
    };
    

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setFormData(prevState => ({
            ...prevState,
            username: username
        }));
    };

console.log(chatRooms);


    return (
        <div>
            <Navbar/>
            <div className="box-1">
                <Box_1/>
            </div>
            <div className="main-div-10">
                <div className="chat-nevigation">
                    <h1>Chat Box</h1>
                <ul>
                    {chatRooms.map(chatRoom => (
                        <ChatCard
                            onClick={toggleChatHistory}
                            key={chatRoom._id}
                            chatId={chatId}
                            username={username}
                            destinationUsername={chatRoom.destinationUsername} // Pass formData.otherUsername as prop
                            formData={formData} // Pass formData as prop
                        />
                    ))}
                </ul>
                <div className='chat-buttons'>
                    <button onClick={() => setShowForm(!showForm)}>Create New Chat</button>
                    {showForm && (
                        <form className='form-chat-room' onSubmit={handleNewChatSubmit}>
                        <input
                            type="text"
                            value={formData.chatId}
                            onChange={(e) => setFormData({ ...formData, chatId: e.target.value })}
                            placeholder="Enter Chat ID"
                        />

                        <input
                            type="text"
                            value={formData.otherUsername}
                            onChange={(e) => setFormData({ ...formData, destinationUsername: e.target.value })}
                            placeholder="Other User's Username"
                        />
                        <button type="submit">Create</button>
                        </form>
                    )}
                    <button onClick={toggleChatHistory}>Show Chat History</button>
                </div>
                </div>
                <div className="chat-section">
                    <div id="chat-display">
                        {showHistory && <ChatComponent chatId={formData.chatId} username={username} destinationUsername={formData.otherUsername}/>} {/* Render ChatHistory if showHistory is true */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Chat
