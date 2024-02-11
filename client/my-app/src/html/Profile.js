import React, { useEffect, useState  } from 'react';
import '../css/Profile.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Box_1 from './Box_1';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const domain=process.env.REACT_APP_DOMAIN;


function Profile() {

    const navigate=new useNavigate();

    const [user, setUsers] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    {console.log(queryParams)};
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


// *********************************************************************
    const [selectedImage, setSelectedImage] = useState(null);

    // const handleInputChange = (event) => {
    //     const imageFile = event.target.files[0];

    //     if (imageFile) {
    //     setSelectedImage(imageFile);
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         // Check for errors (optional)
    //         if (reader.error) {
    //         console.error('Error reading image:', reader.error);
    //         // Handle errors appropriately, e.g., display an error message
    //         return;
    //         }
    //         // Display the preview image
    //         const previewUrl = reader.result;
    //         // Do something with the previewUrl, e.g., update a state variable
    //     };
    //     reader.readAsDataURL(imageFile);
    //     } else {
    //     setSelectedImage(null);
    //     }
    // };
// ******************************************************************

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');

    const [formData, setFormData] = useState({
        username:'',
        title: '',
        description: '',
        image: null,
    });

    const handleInputImageChange = (event) => {
        const imageFile = event.target.files[0];
    
        if (imageFile) {
            setSelectedImage(imageFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                // Check for errors (optional)
                if (reader.error) {
                console.error('Error reading image:', reader.error);
                // Handle errors appropriately, e.g., display an error message
                return;
                }
                // Set the preview URL
                setPreviewUrl(reader.result);
                setFormData(prevState => ({
                    ...prevState,
                    image: imageFile
                }));
            };
            reader.readAsDataURL(imageFile);
            } else {
            setSelectedImage(null);
            setPreviewUrl('');
            }
        };

        const handleInputChange = (event) => {
            if (event.target.name === 'title' || event.target.name === 'description') {
                setFormData({ ...formData, [event.target.name]: event.target.value });
                } else if (event.target.name === 'image') {
                setFormData({ ...formData, image: event.target.files[0] });
                }
            };

        // const handleFormSubmit = async (event) => {
        //     event.preventDefault();
        
        //     try {
        //         console.log(selectedImage)
        //         const formDataToSend = new FormData();
        //         formDataToSend.append('username',username)
        //         formDataToSend.append('title', formData.title);
        //         formDataToSend.append('description', formData.description);
        //         formDataToSend.append('image', selectedImage);
            
        //         const response = await axios.post('http://localhost:5000/app/posts', formDataToSend, {
        //             headers: {
        //             'Content-Type': 'multipart/form-data',
        //             },
        //         });
            
        //         console.log('Post created successfully:', response.data);
        //         // Optionally, redirect the user to another page or display a success message
        //         } catch (error) {
        //         console.error('Error creating post:', error);
        //         // Handle error (e.g., display an error message to the user)
        //         }
        //     };

            const handleFormSubmit = async (event) => {
                event.preventDefault();

                try {
                    const formDataToSend = new FormData();
                    formDataToSend.append('username',username);
                    formDataToSend.append('title', formData.title);
                    formDataToSend.append('description', formData.description);
                    formDataToSend.append('image', selectedImage); // Ensure the key matches the expected key on the server side
            
                    const response = await axios.post(`${domain}/app/posts`, formDataToSend, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
            
                    console.log('Post created successfully:', response.data);
                    // Optionally, redirect the user to another page or display a success message
                } catch (error) {
                    console.error('Error creating post:', error);
                    // Handle error (e.g., display an error message to the user)
                }
            };
        

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
                                {console.log(user)}
                                            <img id="profile-photo" src={user.profilephoto} alt='profile-photo'></img>
                                            <h1>{user.username}</h1>
                                            <p>{user.firstName} {user.lastName}</p>
                                            <p>{user.email}</p>
                                            <p>{user.description}</p>
                                            <p>{user.city}</p>
                                            <p>Languages: {user.language}</p>
                                        </div>
                        
                        <div id='profile-details'>
                            <div>
                                <h1 onClick={()=>navigate(`/profiledetails/?username=${username}`)}>Profile Details</h1>
                            </div>
                        </div>
                        <div className="post-add" >
                                <h1>Post Add</h1>
                                <div>
                                    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                                    <div className="image-upload-container">
                                        <label htmlFor="image-input">Choose an image</label>
                                        <input
                                            type="file"
                                            id="image-input"
                                            accept="image/*"
                                            onChange={handleInputImageChange}
                                        />
                                        {selectedImage && (
                                            <div className="image-preview">
                                            <img
                                            className="circle-image"
                                            src={previewUrl}
                                            alt="Uploaded image preview"
                                            />
                                            {/* Optionally, add actions like delete or edit */}
                                            </div>
                                        )}
                                        </div>

                                        
                                        <label for="title">Title</label>
                                        <input 
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        ></input>

                                        <label for="description">Description:</label>
                                        <textarea 
                                        id="description"
                                        name="description"
                                        rows="5"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        ></textarea>

                                        <button type="submit">Post</button>
                                    </form>
                                </div>
                            </div>
                    </div>
                    <div id="profile-feature">
                        <div id="review">
                            <h1>Review</h1>
                        </div>
                        <div id="chat-box" >
                            <h1>Chats</h1>
                            <div id="chats" onClick={()=>navigate(`/chat/?username=${user.username}`)}>
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
