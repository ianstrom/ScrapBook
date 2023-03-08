import React from "react";
import PostContainer from "./PostContainer";

function MainFeed({following, onLike, onComment}) {
    
    const posts = following.map((follower) => {
            return <PostContainer key={follower.id} posts={follower.posts} user={follower} onLike={onLike} onComment={onComment}/>
    })

    return (
        <>
        {posts}
        </>
    )
}

export default MainFeed