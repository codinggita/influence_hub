import React, { useState } from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css'


function SignUp() {
    const navigate=new useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };


    const handleSignup = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://influence-hub.onrender.com/app/user/signup', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        
            if (response.ok) {
                // Handle successful signup, e.g., redirect to login page
                console.log('User successfully registered');
                navigate('/');

            } else {
                const data = await response.json();
                if (data.message.includes('Email is already registered') || data.message.includes('Username is already registered')) {
                // Display an alert message
                window.alert(data.message);
                } else {
                // Handle other errors
                console.error('Failed to register user:', data.message);
                }
            }
            } catch (error) {
            console.error('Error during signup:', error);
            }
        };


    return (
        <div className="main-div-7" >
            <div className="signup-section">
                <form id="main-div-7" onSubmit={handleSignup}>
                    
                    <input type="text"
                    id='input-box'
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder='Username'>
                    </input>

                    <input type="email"
                    id='input-box'
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} placeholder='Email'>
                    </input>

                    <input type="password"
                    id='input-box'
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange} placeholder='Password'>
                    </input>

                    <div id="terms">
                    <input id='check-box'  type='checkbox'></input>
                        <p>I agree to the Influencer Hub <span>User Agreement</span> and <span>Privacy Policy</span></p>
                    </div>
                    <Button id="btn7" variant='outlined' type="submit" >Register</Button>
                    
                    <div>
                    <p>Already have an account ?</p>
                    <Button id="btn8" variant='contained' onClick={()=>navigate('/login')}>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default  SignUp   
