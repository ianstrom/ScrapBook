import React, { useState, useRef } from "react";
import ProfilePost from "./ProfilePost"
import ProfilePostContainer from "./ProfilePostContainer"

function MyProfile({ user, onLike , onComment}) {
    const { username, posts, profileimg, following, followers } = user
    const [isClicked, setIsClicked] = useState(false)
    const elementRef = useRef(null)

    function handleClick(newValue) {
        setIsClicked(!isClicked)
        
        elementRef.current = newValue
    }

    const profilePosts = posts.map((post) => {
        return <ProfilePost key={post.id} post={post} handleClick={handleClick} />
    })

    console.log(elementRef)

    return (
        <div className="profileContainer">
            <div className="profileInfoContainer">
                <img src={profileimg} id="profileImage" alt="profileimage"/>
                <div className="profileInfo">{username}</div>
                <div className="profileInfo">Followers: {followers.length}</div>
                <div className="profileInfo">Following: {following.length}</div>
            </div>
            <div>
            {(isClicked ? <ProfilePostContainer key={user.id} posts={posts} user={user} elementRef={elementRef} onLike={onLike} onComment={onComment}/> : <div className="profilePosts">{profilePosts}</div> )}
            </div>
        </div>
    )
}

export default MyProfile