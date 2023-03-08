import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            "name": e.target.name.value,
            "profileimg": e.target.profileimg.value,
            "posts": [],
            "following": [],
            "followers": [],
            "username": e.target.username.value,
            "password": e.target.password.value
        }
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(r => r.json())
            .then(data => console.log(data))
    }

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Enter Name"></input>
                <input name="username" placeholder="Enter Username"></input>
                <input name="password" placeholder="Enter Password"></input>
                <input name="profileimg" placeholder="Profile Image"></input>
                <input type="submit"></input>
            </form>
            <button onClick={handleClick}>Have a profile?</button>
        </div>
    )
}

export default SignUp