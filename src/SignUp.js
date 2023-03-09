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
        <div className="signUpContainer">
            {/* <form className="signUpForm" onSubmit={handleSubmit}>
                <div className="signUpInput">
                    <input className="signUpInputs" name="name" placeholder="Enter Name"></input>
                    <input className="signUpInputs" name="username" placeholder="Enter Username"></input>
                    <input className="signUpInputs" name="password" placeholder="Enter Password"></input>
                    <input className="signUpInputs" name="profileimg" placeholder="Profile Image"></input>
                    <div className="signUpButtons">
                        <button className="signUpButton" type="submit">Sign Up</button>
                        <button className="signUpButton" onClick={handleClick}>Have a profile?</button>
                    </div>
                </div>
            </form> */}

            <div class="loginContainer">
                <form onSubmit={handleSubmit}>
                    <div class="input" >
                        <input name="name" placeholder="Enter Name"></input>
                        <label>Name</label>
                    </div>
                    <div class="input" >
                        <input name="username" placeholder="Enter Username"></input>
                        <label>Username</label>
                    </div>
                    <div class="input" >
                        <input name="password" placeholder="Enter Password"></input>
                        <label>Password</label>
                    </div>
                    <div class="input" >
                        <input name="profileimg" placeholder="Profile Image"></input>
                        <label>Password</label>
                    </div>
                    <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginButton" onClick={handleClick}>Have a profile?</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp