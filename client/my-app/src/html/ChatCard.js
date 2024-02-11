import React, { useEffect ,useState} from 'react'
import '../css/ChatCard.css'
import axios from 'axios';


const domain=process.env.REACT_APP_DOMAIN;


export default function ChatCard({ chatId, username, destinationUsername, formData }) {
    const [user, setUsers] = useState([]);

    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Make a GET request to fetch all users
                const response = await axios.get(`${domain}/app/user/${destinationUsername}`);
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
        <div class="chat-card">
            <div id="chat-card">
                <img id="chat-logo" src={user.profilephoto} alt='chat logo'></img>
                <p><span>{username}</span></p>
                <p>{chatId}</p>
            </div>
        </div>
    )
}
