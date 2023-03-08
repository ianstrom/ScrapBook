import React from "react";
import Post from "./Post";

function PostContainer({posts, user, onLike, onComment}) {

    const postsToDisplay = posts.map((post) => {
        return <Post key={post.id} post={post} user={user} onLike={onLike} onComment={onComment}/>
    })

    return (
        <div>
            {postsToDisplay}
        </div>
    )
}

export default PostContainer