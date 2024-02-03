import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'



function Login() {
    const navigate=new useNavigate();
    
    return (
        <div class="main-div-7">
            <div class="login-section">
                <form>
                    <input id='input-box' type='text' placeholder='Username'></input>
                    <input id='input-box' type='text' placeholder='Password'></input>
                    <div id="rememberme">
                        <div>
                        <input id='check-box'  type='checkbox'></input>
                        <p>Remember me</p>
                        </div>
                        <p>Forgot Password ?</p>
                    </div>
                    <Button id="btn7" variant='outlined' onClick={()=>navigate('/')}>Login</Button>
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
