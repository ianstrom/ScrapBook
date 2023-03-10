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
            e.target.reset()
    }

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="signUpContainer">
            <div className="loginContainer">
                <form onSubmit={handleSubmit}>
                    <div className="input" >
                        <input name="name" placeholder="Enter Name"></input>
                        <label>Name</label>
                    </div>
                    <div className="input" >
                        <input name="username" placeholder="Enter Username"></input>
                        <label>Username</label>
                    </div>
                    <div className="input" >
                        <input name="password" placeholder="Enter Password"></input>
                        <label>Password</label>
                    </div>
                    <div className="input" >
                        <input name="profileimg" placeholder="Profile Image"></input>
                        <label>Image</label>
                    </div>
                    <div className="signUpButtons">
                        <button type="submit" className="box-1">
                            <div className="btn btn-one">
                                <span>Sign Up</span>
                            </div>
                        </button>
                        <button type="submit" className="box-1" onClick={handleClick}>
                            <div className="btn btn-one">
                                <span>Have a profile?</span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp