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
            <form className="signUpForm" onSubmit={handleSubmit}>
                <div className="signUpInput">
                    <input className="signUpInputs" name="name" placeholder="Enter Name"></input>
                    <input className="signUpInputs" name="username" placeholder="Enter Username"></input>
                    <input className="signUpInputs" name="password" placeholder="Enter Password"></input>
                    <input className="signUpInputs" name="profileimg" placeholder="Profile Image"></input>
                    <div className="signUpButtons">
                    <button type="submit" class="box-1">
                            <button type="submit" class="btn btn-one">
                                <span>Sign Up</span>
                            </button>
                        </button>
                        <button type="submit" class="box-1" onClick={handleClick}>
                            <button type="submit" class="btn btn-one">
                                <span>Have a profile?</span>
                            </button>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp