import React from "react";

function Comment({comment, myUser, onCommentDelete, user, post}) {
    const {username, text, commenterId, posterId} = comment
    const displayDelete = (commenterId === myUser.id || posterId === myUser.id ? true : false)

    function handleDelete() {
        onCommentDelete(user, post, comment)
    }

    return (
        <div>
            <div>{username}</div>
            <div>{text}</div>
            {displayDelete ? <button onClick={handleDelete}>Delete</button> : null}
        </div>
    )
}

export default Comment