import React from "react";
import PostContainer from "./PostContainer";

function MainFeed({following}) {
    
    const posts = following.map((follower) => {
            return <PostContainer key={follower.id} posts={follower.posts} user={follower} />
    })

    return (
        <>
        {posts}
        </>
    )
}

export default MainFeed