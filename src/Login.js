import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ getCurrentUser, getAllUsers }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/users')
            .then(data => data.json())
            .then(users => {
                const user = users.find((user) => user.username === username && user.password === password)
                getCurrentUser(user)
                getAllUsers(users)
                navigate("/mainfeed")
            })
    }

    const handleUserChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    function handleClick() {
        navigate('/signup')
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="loginInput">
                    <input className="loginInputs" type="text" placeholder="User Name" value={username} onChange={(e) => handleUserChange(e)}></input>
                    <input className="loginInputs" type="password" placeholder="Password" value={password} onChange={(e) => handlePasswordChange(e)}></input>
                    <div className="logInButtons">
                        <button className="logInButton" type="submit">Login</button>
                        <button className="logInButton" onClick={handleClick} >New User?</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login