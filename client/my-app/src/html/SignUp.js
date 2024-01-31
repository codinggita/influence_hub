import React from 'react'

function SignUp() {
    return (
        <div class="signup">
            <form>
                <label id="username">Username</label>
                <input type="text" id="username" name="username" required></input>
                <label id="email">Email</label>
                <input type="email" id="email" name="email" required></input>
                <label id="password">Password</label>
                <input type="password" id="password" name="password" required></input>
                <button>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp
