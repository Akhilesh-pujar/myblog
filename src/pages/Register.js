import React, { useState } from 'react'

import "./register.css"
import { Link } from 'react-router-dom'




function Register() {

    const [username, setusername] = useState('');
    const [lastname, setlastname] = useState('');
    const [mail, setmail] = useState('');
    const [password, setpasssword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');


    async function register(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: { 'Content-Type ': 'application/json' },
            body: JSON.stringify({ username, lastname, mail, password, confirmpassword }),

        });
        if (response.status === 200) {
            alert('registration successful');
        } else {
            alert('registration failed');
        }
    }

    return (

        <form className="form" onSubmit={register}>
            <p className="title">Register </p>
            <p className="message">Signup now and get full access to our app. </p>
            <div className="flex">

                <input type="text" placeholder='first name' className="input"
                    onChange={e => setusername(e.target.value)}
                    value={username}
                />




                <input type="text" placeholder='lastname' className="input"
                    onChange={e => setlastname(e.target.value)}
                    value={lastname}
                />

            </div>


            <input required="" placeholder="mail" type="email" className="input"
                onChange={e => setmail(e.target.value)}
                value={mail}
            />



            <input required="" placeholder="password" type="password" className="input"
                onChange={e => setpasssword(e.target.value)}
                value={password}
            />


            <input required="" placeholder="confirm password" type="password" className="input"
                onChange={e => setconfirmpassword(e.target.value)}
                value={confirmpassword}
            />

            <button className="submit">Submit</button>
            <p className="signin">Already have an acount ? <Link to="/login">Log-in</Link> </p>
        </form>

    )
}

export default Register
