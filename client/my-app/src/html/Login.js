import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../css/Login.css'


function Login() {
    const navigate=new useNavigate();
    return (
        <div class="main-div-7">
            <div class="login-section">
                <form>
                    <input type='text' placeholder='Username'></input>
                    <input type='text' placeholder='Password'></input>
                    <div id="rememberme">
                        <div>
                        <Checkbox/>
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
