import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

function Login() {
    return (
        <div className="container">
            <div className="left">
                <h1>Login</h1>
                <form className="form">
                    <div className="input-block">
                        <input className="input" type="text" id="email" required="" />
                        <label>Username</label>
                    </div>
                    <div className="input-block">
                        <input className="input" type="password" id="pass" required="" />
                        <label>Password</label>
                    </div>
                    <div className="input-block">
                        <span className="forgot"><Link to="#">Forgot Password?</Link></span>
                        <button>Submit</button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Login
