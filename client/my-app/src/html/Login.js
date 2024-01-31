import React from 'react'

function Login() {
    return (
        <div class="login">
            <form>
                <label id="username">Username</label>
                <input type="text" id="username" name="username" required></input>
                <label id="password">Password</label>
                <input type="password" id="password" name="password" required></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
