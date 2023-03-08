import React from "react";

function Comment({comment}) {
    const {username, text} = comment

    return (
        <div>
            <div>{username}</div>
            <div>{text}</div>
        </div>
    )
}

export default Comment