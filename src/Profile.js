import React, { useState } from "react";
import ProfilePost from "./ProfilePost"
import ProfilePostContainer from "./ProfilePostContainer"
import { NavLink } from "react-router-dom";

function Profile({ user }) {
    const { username, posts, profileimg, following, followers } = user
    const [isClicked, setIsClicked] = useState(false)
    const [idToScroll, setIdToScroll] = useState("")

    function handleClick(e) {
        setIsClicked(!isClicked)
        setIdToScroll(e.target.id)
    }

    const profilePosts = posts.map((post) => {
        return <ProfilePost key={post.id} post={post} handleClick={handleClick} />
    })

    return (
        <div className="profileContainer">
            <div className="profileInfoContainer">
                <img src={profileimg} id="profileImage" />
                <div className="profileInfo">{username}</div>
                <div className="profileInfo">Followers: {followers.length}</div>
                <div className="profileInfo">Following: {following.length}</div>
            </div>
            <div>
            {(isClicked ? <ProfilePostContainer key={user.id} posts={posts} user={user}/> : <div className="profilePosts">{profilePosts}</div> )}
            </div>
        </div>
    )
}

export default Profile