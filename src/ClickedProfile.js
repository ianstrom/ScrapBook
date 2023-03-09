import React, { useState, useRef } from "react";
import ProfilePost from "./ProfilePost"
import ProfilePostContainer from "./ProfilePostContainer"

function ClickedProfile({clickedUser, isFollowing, onFollow, onLike, onComment, myUser, onCommentDelete}) {
    const { username, posts, profileimg, following, followers } = clickedUser
    const [isClicked, setIsClicked] = useState(false)
    const [postIndex, setPostIndex] = useState(null)
    const elementRef = useRef(null)

    function handleClick(clickedPost) {
        setIsClicked(!isClicked)
        setPostIndex((posts.findIndex(post => post.id === clickedPost.id)))
    }

    const profilePosts = posts.map((post) => {
        return <ProfilePost key={post.id} post={post} handleClick={handleClick} />
    })

    function onFollowClick() {
        onFollow()
    }

    const profilePostInfo = posts.map(post => {
        return <ProfilePostContainer key={post.id} post={post} user={clickedUser} elementRef={elementRef} onLike={onLike} onComment={onComment} myUser={myUser} increaseIndex={increaseIndex} decreaseIndex={decreaseIndex} goBackToProfile={goBackToProfile} onCommentDelete={onCommentDelete} />
    })

    function increaseIndex() {
        setPostIndex((postIndex === posts.length - 1 ? postIndex : postIndex + 1))
    }

    function decreaseIndex() {
        setPostIndex((postIndex == 0 ? postIndex : postIndex - 1))
    }

    function goBackToProfile() {
        setIsClicked(!isClicked)
    }

    return (
        <div className={isClicked ? "postsContainer" : "profilePostsContainer"}>
            <div className="profileInfoContainer">
                <img src={profileimg} id="profileImage" alt="profileimage" />
                <div className="profileInfo">{username}</div>
                <div className="profileInfo">Followers: {followers.length}</div>
                <div className="profileInfo">Following: {following.length}</div>
            </div>
            <button onClick={onFollowClick}>{isFollowing ? "Unfollow" : "Follow"}</button>
                {(isClicked ? profilePostInfo[postIndex] : <div className="profilePosts">{profilePosts}</div>)}
        </div>
    )
}

export default ClickedProfile