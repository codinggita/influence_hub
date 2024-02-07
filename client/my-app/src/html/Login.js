import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/Login.css'


const fakeAuthentication = async (username, password, rememberMe) => {
    const apiUrl = 'https://influence-hub.onrender.com/app/user/login'; // Replace with your actual backend API endpoint
    
        const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, rememberMe }),
        };
    
        try {
        const response = await fetch(apiUrl, requestOptions);
    
        if (!response.ok) {
            throw new Error('Authentication failed');
        }
    
        const data = await response.json();
    
        if (data.success) {
            return 'success';
        } else {
            throw new Error('Invalid username or password');
        }
        } catch (error) {
        throw new Error(`Authentication error: ${error.message}`);
        }
    };


function Login() {
    const navigate=new useNavigate();

    
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: '',
        rememberMe: false,
        });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
            }));
        };


        const handleSubmit = async (e) => {
            e.preventDefault();
        
            if (!formData.rememberMe) {
                alert('Please check the "Remember Me" checkbox before attempting to log in.');
                return;
                }
            
                try {
                // Call the authentication function
                await fakeAuthentication(formData.usernameOrEmail, formData.password, formData.rememberMe);
                alert('Login successful!');
                // Redirect to the home page (you can replace this with your actual home page route)
                navigate('/');
                } catch (error) {
                console.error('Authentication error:', error.message);
                alert('Invalid username or password. Please try again.');
                }
            };

    return (
        <div className="main-div-7">
            <div className="login-section">
                <form onSubmit={handleSubmit}>
                    <input id='input-box' placeholder='Username'
                    type="text"
                    name="usernameOrEmail"
                    value={formData.usernameOrEmail}
                    onChange={handleChange}
                    required
                    ></input>
                    <input id='input-box' placeholder='Password'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    ></input>
                    <div id="rememberme">
                        <div>
                        <input id='check-box'  
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        ></input>
                        <p>Remember me</p>
                        </div>
                        <p>Forgot Password ?</p>
                    </div>
                    <Button id="btn7" variant='outlined' type="submit">Login</Button>
                    <div>
                    <p>Don't have account ?</p>
                    <Button id="btn8" variant='contained' onClick={()=>navigate('/signup')}>Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default  Login   
