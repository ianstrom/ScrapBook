import React from "react";

function Post({post, follower}) {
    const {likes, image, comments} = post
    const {username} = follower 
    
    return (
        <div className="PostContainer">
            <div>{username}</div>
            <img src={image} />
            <div>{likes}</div>
            <div>{comments}</div>
        </div>
    )
}

export default Post