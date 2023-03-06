import React, { useState } from "react";

function Login({getCurrentUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:3000/users')
        .then(data => data.json())
        .then(users => getCurrentUser(users.find((user) => user.username === username && user.password === password)))        
    }

    const handleUserChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="User Name" value={username} onChange={(e) => handleUserChange(e)}></input>
                <input type="password" placeholder="Password" value ={password} onChange={(e) => handlePasswordChange(e)}></input>
                <input type="submit">Login</input>
            </form>
        </div>
    )
}

export default Login