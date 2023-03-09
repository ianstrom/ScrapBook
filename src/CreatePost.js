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
    }

    return (
        <div class="loginContainer">
            <form className="createPostForm" onSubmit={handleSubmit}>
                <div class="input">
                    <input placeholder="image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                </div>
                <div class="input">
                    <input placeholder="caption" value={caption} onChange={(e) => setCaption(e.target.value)}></input>
                </div>
                <div className="logInButtons">
                <button type="submit" class="box-1">
                    <button type="submit" class="btn btn-one">
                        <span>Post</span>
                    </button>
                </button>
            </div>
            </form>
        </div>
    )
}

export default CreatePost