import React from "react";

function Post({post, user}) {
    const {likes, image, comments} = post
    const {username} = user 

    return (
        <div className="PostContainer" id={post.id} >
            <div>{username}</div>
            <img src={image} alt="post" />
            <div>{likes}</div>
            <div>{comments}</div>
        </div>
    )
}

export default Post