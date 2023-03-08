import React from "react";
import Post from "./Post";

function ProfilePostContainer({posts, user, elementRef, onLike, onComment}) {


    const postsToDisplay = posts.map((post) => {
        
        return <Post key={post.id} post={post} user={user} onLike={onLike} onComment={onComment}/>
    })

    // const postToScroll = postsToDisplay.find((post1) => post1.props.post.id.toString() === elementToScroll)
    // const postSelector = document.getElementById(postToScroll.props.post.id)

    // postSelector.focus()

    return (
        <div ref={elementRef.current.scrollIntoView()} >
            {postsToDisplay}     
        </div>
    )
}

export default ProfilePostContainer