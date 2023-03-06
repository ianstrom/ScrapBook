import React from "react";
import Post from "./Post"

function MainFeed({following}) {
    
    const postsToDisplay = following.map((follower) => {
        follower.posts.map((post) => {
            return <Post key={post.id} post={post} follower={follower} />
        })
    })

    return (
        <>
        {postsToDisplay}
        </>
    )
}

export default MainFeed