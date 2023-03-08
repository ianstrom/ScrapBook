import React from "react";
import Post from "./Post";

function PostContainer({posts, user, onLike, onComment, myUser}) {

    const postsToDisplay = posts.map((post) => {
        return <Post key={post.id} post={post} user={user} onLike={onLike} onComment={onComment} myUser={myUser}/>
    })

    return (
        <div>
            {postsToDisplay}
        </div>
    )
}

export default PostContainer