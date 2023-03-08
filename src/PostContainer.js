import React from "react";
import Post from "./Post";

function PostContainer({posts, user, onLike, onComment, myUser, onCommentDelete}) {

    const postsToDisplay = posts.map((post) => {
        return <Post key={post.id} post={post} user={user} onLike={onLike} onComment={onComment} myUser={myUser} onCommentDelete={onCommentDelete}/>
    })

    return (
        <>
            {postsToDisplay}
        </>
    )
}

export default PostContainer