import React from 'react'
import Box_1 from './Box_1'
import '../css/Features.css'
import Navbar from './Navbar'
import Footer from './Footer'

function Features() {
    return (
        <div>
            <Navbar/>
            <Box_1/>
            <div class="main-div-11">
                    <h2>Key Features of My Website</h2>
                    <ul class="features-ul">
                        <li id="heading">User Authentication</li>
                        <ul>
                            <img id="image-section" src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8fDA%3D' alt='img'></img>
                        <li>User registration with email verification.</li>
                        <li>User login with secure authentication mechanisms.</li>
                        <li>Forgot password functionality for password recovery.</li>
                        </ul>

                        <li id="heading">Profile Management</li>
                        <ul>
                            <img id="image-section" src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8fDA%3D' alt='img'></img>
                        <li>User profile creation and customization.</li>
                        <li>Profile picture upload and avatar selection.</li>
                        <li>Edit and update profile information.</li>
                        <li>Option to delete the user account.</li>
                        </ul>

                        <li id="heading">Social Interaction</li>
                        <ul>
                            <img id="image-section" src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8fDA%3D' alt='img'></img>
                        <li>Posting feature for users to share updates, photos, or status.</li>
                        <li>Commenting on posts for user engagement.</li>
                        <li>Like or react to posts.</li>
                        <li>Real-time notifications for interactions.</li>
                        </ul>

                        <li id="heading">Chat System</li>
                        <ul>
                            <img id="image-section" src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8fDA%3D' alt='img'></img>
                        <li>Private messaging system for users.</li>
                        <li>Real-time chat with online/offline status.</li>
                        <li>Message notifications.</li>
                        <li>Emoticons or stickers for expressive communication.</li>
                        </ul>

                        <li id="heading">Privacy and Security</li>
                        <ul>
                            <img id="image-section" src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8fDA%3D' alt='img'></img>
                        <li>Privacy settings for posts (public, private, friends-only).</li>
                        <li>Secure password storage and data encryption.</li>
                        <li>HTTPS for secure data transmission.</li>
                        <li>Two-factor authentication for enhanced security.</li>
                        </ul>

                        <li id="heading">Responsive Design</li>
                        <ul>
                            <img id="image-section" src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8fDA%3D' alt='img'></img>
                        <li>Mobile-friendly layout for a seamless user experience on various devices.</li>
                        <li>Cross-browser compatibility to ensure functionality on different web browsers.</li>
                        </ul>

                        <li id="heading">Search and Discovery</li>
                        <ul>
                            <img id="image-section" src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8fDA%3D' alt='img'></img>
                        <li>User search functionality to find friends.</li>
                        <li>Explore or discover feature for trending posts or popular users.</li>
                        </ul>

                        <li id="heading">Notifications</li>
                        <ul>
                            <img id="image-section" src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8fDA%3D' alt='img'></img>
                        <li>Real-time notifications for new messages, friend requests, and post interactions.</li>
                        <li>Notification preferences to allow users to customize alerts.</li>
                        </ul>

                        <li id="heading">Settings and Preferences id="heading"</li>
                        <ul>
                            <img id="image-section" src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8fDA%3D' alt='img'></img>
                        <li>General settings for language, theme, and account preferences.</li>
                        <li>Notification settings for email and in-app alerts.</li>
                        <li>Privacy settings to control who can see user activities.</li>
                        </ul>
                    </ul>
            </div>
            <Footer/>
        </div>
    )
}

export default Features
