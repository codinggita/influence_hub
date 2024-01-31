import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../css/SignUp.css'


function SignUp() {
    const navigate=new useNavigate();
    return (
        <div class="main-div-7" >
            <div class="signup-section">
                <form id="main-div-7">
                    <input type='text' placeholder='Username'></input>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Password'></input>
                    <div id="terms">
                        <Checkbox />
                        <p>I agree to the Influencer Hub <span>User Agreement</span> and <span>Privacy Policy</span></p>
                    </div>
                    <Button id="btn7" variant='outlined' onClick={()=>navigate('/')}>Register</Button>
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
