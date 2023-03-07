import React from "react";
import Post from "./Post";

function ProfilePostContainer({posts, user}) {

    const postsToDisplay = posts.map((post) => {
        return <Post key={post.id} post={post} user={user}/>
    })

    return (
        <div>
            {postsToDisplay}
        </div>
    )
}

export default ProfilePostContainer