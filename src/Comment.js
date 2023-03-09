import React from "react";
import deleteButton from "./icons/delete.png"

function Comment({comment, myUser, onCommentDelete, user, post}) {
    const {username, text, commenterId, posterId} = comment
    const displayDelete = (commenterId === myUser.id || posterId === myUser.id ? true : false)

    function handleDelete() {
        onCommentDelete(user, post, comment)
        console.log("im deleting")
    }

    return (
        <div className="commentsDisplayContainer">
            <div className="captionUserName">{username}</div>
            <div className="commentText">{text}</div>
            {displayDelete ? <img className="commentDeleteButton" onClick={handleDelete} src={deleteButton}/> : null}
        </div>
    )
}

export default Comment