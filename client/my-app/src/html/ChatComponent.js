// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ChatComponent.css';

const domain=process.env.REACT_APP_DOMAIN;


function ChatComponent({ chatId, username, destinationUsername }) {

    chatId='chat1';

    const [history, setHistory] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetchChatHistory();
    }, []);

    const fetchChatHistory = async () => {
        try {
        const response = await axios.get(`${domain}/api/chat-rooms/${chatId}/history`);
        setHistory(response.data);
        } catch (error) {
        console.error('Error fetching chat history:', error);
        }
    };

    const sendMessage = async () => {
        if (newMessage.trim() !== '') {
        try {
            const currentTime = new Date().toLocaleString();
            await axios.post(`${domain}/api/chat-rooms/${chatId}/send-message`, {
            text: newMessage,
            senderusername: username,
            destinationUsername,
            time: currentTime
            });
            setNewMessage('');
            fetchChatHistory(); // Optionally, you can update the chat history after sending a message
        } catch (error) {
            console.error('Error sending message:', error);
        }
        }
    };

    return (
        <div>
            <div className="chat-container">
                <div className='chat-box-button'>
                    <h3>Chat History</h3>
                    <ul>
                        {history.map((message, index) => (
                        <li id='message' key={index}>
                            <strong>{message.senderusername}:</strong> {message.text} (Time: {message.time})
                        </li>
                        ))}
                    </ul>
                    <div id='type-send'>
                        <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default ChatComponent
