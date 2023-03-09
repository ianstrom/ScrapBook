import React, { useState } from "react";


function CreatePost({user, getCurrentUser}) {
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
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({posts : allPosts})
        })
        .then(data => data.json())
        .then(user => getCurrentUser(user))
    }

    return (
        <div className="createPostContainer">
            <form className="createPostForm" onSubmit={handleSubmit}>
                <input placeholder="image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                <input placeholder="caption" value={caption} onChange={(e) => setCaption(e.target.value)}></input>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}
 
export default CreatePost