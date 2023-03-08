import React, { useState, useRef } from "react";
import ProfilePost from "./ProfilePost"
import ProfilePostContainer from "./ProfilePostContainer"

function ClickedProfile({clickedUser, isFollowing, onFollow, onLike, onComment}) {
    // const isFollowingStateValue = (clickedUser.followers.find((id) => id === myUser.id) ? true : false)
    const { username, posts, profileimg, following, followers } = clickedUser
    const [isClicked, setIsClicked] = useState(false)
    const elementRef = useRef(null)

    // console.log(clickedUser)

    function handleClick(newValue) {
        setIsClicked(!isClicked)

        elementRef.current = newValue
    }

    const profilePosts = posts.map((post) => {
        return <ProfilePost key={post.id} post={post} handleClick={handleClick} />
    })

    function onFollowClick() {
        onFollow()
    }

    return (
        <div className="profileContainer">
            <div className="profileInfoContainer">
                <img src={profileimg} id="profileImage" alt="profileimage" />
                <div className="profileInfo">{username}</div>
                <div className="profileInfo">Followers: {followers.length}</div>
                <div className="profileInfo">Following: {following.length}</div>
            </div>
            <button onClick={onFollowClick}>{isFollowing ? "Unfollow" : "Follow"}</button>
            <div>
                {(isClicked ? <ProfilePostContainer key={clickedUser.id} posts={posts} user={clickedUser} elementRef={elementRef} onLike={onLike} onComment={onComment} /> : <div className="profilePosts">{profilePosts}</div>)}
            </div>
        </div>
    )
}

export default ClickedProfile