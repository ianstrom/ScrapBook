import React from "react";

function Comment({comment, myUser, onCommentDelete, user, post}) {
    const {username, text, commenterId, posterId} = comment
    const displayDelete = (commenterId === myUser.id || posterId === myUser.id ? true : false)

    function handleDelete() {
        onCommentDelete(user, post, comment)
    }

    return (
        <div className="commentsDisplayContainer">
            <div className="captionUserName">{username}</div>
            <div className="commentText">{text}</div>
            {displayDelete ? <button className="commentDeleteButton" onClick={handleDelete}>Delete</button> : null}
        </div>
    )
}

export default Comment