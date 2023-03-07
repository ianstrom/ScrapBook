import React from "react";

function ProfilePost({ post, handleClick }) {
    const { image } = post

    const onClick = (e) => {
        handleClick(e)
    }



    return (
            <div className="profilePostImg" onClick={onClick} >
                <img src={image} id={post.id} />
            </div>
    )
}

export default ProfilePost