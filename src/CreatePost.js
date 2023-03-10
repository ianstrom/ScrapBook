import React, { useState } from "react";


function CreatePost({ user, getCurrentUser }) {
    const [image, setImage] = useState("")
    const [caption, setCaption] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const newPost = {
            id: user.posts.length + 1,
            image: image,
            caption: caption,
            comments: [],
            likes: [],
        }

        const allPosts = [...user.posts, newPost]

        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ posts: allPosts })
        })
            .then(data => data.json())
            .then(user => getCurrentUser(user))

        e.target.reset()
    }

    return (
        <div className="loginContainer">
            <form className="createPostForm" onSubmit={handleSubmit}>
                <div className="input">
                    <input placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                    <label>Image</label>
                </div>
                <div className="input">
                    <input placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)}></input>
                    <label>Caption</label>
                </div>
                <div className="logInButtons">
                <button type="submit" className="box-1">
                    <div className="btn btn-one">
                        <span>Post</span>
                    </div>
                </button>
            </div>
            </form>
        </div>
    )
}

export default CreatePost