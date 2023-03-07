import React from "react";
import Post from "./Post";

function ProfilePostContainer({posts, user, elementToScroll}) {


    const postsToDisplay = posts.map((post) => {
        
        return <Post key={post.id} post={post} user={user}/>
    })

    const postToScroll = postsToDisplay.find((post1) => post1.props.post.id == elementToScroll)
    const postSelector = document.getElementById(postToScroll.props.post.id)

    return (
        <div ref={postSelector.scrollIntoView()}>
            {postsToDisplay}     
        </div>
    )
}

export default ProfilePostContainer