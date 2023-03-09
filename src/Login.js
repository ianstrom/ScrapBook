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
            <div className="loginContainer" >
                <form onSubmit={handleSubmit}>
                    <div className="input" >
                        <input placeholder="Enter Username" type="text" value={username} onChange={(e) => handleUserChange(e)}></input>
                        <label>Username</label>
                    </div>
                    <div className="input">
                        <input placeholder="Enter Password" type="password" value={password} onChange={(e) => handlePasswordChange(e)}></input>
                        <label>Password</label>
                    </div>
                    <div className="logInButtons">
                        <button type="submit" className="box-1">
                            <div className="btn btn-one">
                                <span>Login</span>
                            </div>
                        </button>
                        <button type="submit" className="box-1" onClick={handleClick}>
                            <button type="submit" className="btn btn-one">
                                <span>New User?</span>
                            </button>
                        </button>
                    </div>
                </form>
            </div >
        </div >

    )
}

export default Login