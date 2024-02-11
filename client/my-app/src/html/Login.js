import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/Login.css'
import axios from 'axios';

const domain=process.env.REACT_APP_DOMAIN;


function Login() {
    const navigate=new useNavigate();

    
    // const [formData, setFormData] = useState({
    //     username: '',
    //     password: '',
    //     rememberMe: false,
    //     });
        const [formData, setFormData] = useState({
            profilephoto:'',
            username:'',
            email:'',
            password:'',
            firstName: '',
            lastName: '',
            role: 'admin',
            address: {
                section: '',
                city: '',
                postalCode: '',
                state: '',
                country: 'default',
            },
            company: {
                companyName: '',
                timezone: '',
                location: 'default',
            },
            languages: [],
            rememberMe: false,
        });
        

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
            }));
            setFormData(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [name]: 'default'
                    }
                }));
                
            setFormData(prevState => ({
                ...prevState,
                company: {
                    ...prevState.address,
                    [name]: 'default'
                    }
                }));
        };

        const handleSubmit = async (event) => {
            event.preventDefault();
            if (!formData.rememberMe) {
                        alert('Please check the "Remember Me" checkbox before attempting to log in.');
                        return;
                        }
            try {
                // Make a POST request to login route (assuming it's /login)
                const response = await axios.post(`${domain}/app/user/login`, {formData});
                
                if (response.data.success) {
                    // Redirect to the home page if authentication is successful
                    console.log("login sucessfull");
                    console.log(formData.username);
                    navigate(`/?username=${formData.username}`);
                } else {
                    // Handle authentication failure
                    alert(response.data.message || 'Authentication failed');
                }
            } catch (error) {
                console.error('Error logging in:', error);
            }
        };

    return (
        <div className="main-div-7">
            <div className="login-section">
                <form onSubmit={handleSubmit}>
                    <input id='input-box' placeholder='Username'
                    type="text"
                    name="username"
                    value={formData.username}
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
