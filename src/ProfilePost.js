import React from "react";

function ProfilePost({ post, handleClick }) {
    const { image } = post

    const onClick = () => {


        handleClick(post)
    }

    return (
        <div className="profilePostImg" onClick={onClick}>
            <img src={image} alt="post" />
        </div>
    )
}

export default ProfilePost