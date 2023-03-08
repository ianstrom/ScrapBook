import React, { useState } from "react";
import Comment from "./Comment";

function Post({ post, user, onLike, onComment, myUser}) {
    const [isClicked, setIsClicked] = useState(false)
    const [commentInput, setCommentInput] = useState("")
    const { likes, image, comments } = post
    const { username } = user

    const className = (isClicked ? "commentform" : "straightupnothin")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(commentInput)

        const comment = {
            username: myUser.username,
            text: commentInput
        }

        onComment(user, post, comment)
    }

    function handleLike() {
        onLike(user, post)
    }

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const commentsToDisplay = comments.map((comment) => {
        return <Comment key={comment.text} comment={comment} />
    })

    return (
        <div className="PostContainer" id={post.id} >
            <div>{username}</div>
            <img src={image} alt="post" />
            <div>
                <button onClick={handleLike}>Like Button</button>
                <button onClick={handleClick}>Comment Button</button>
            </div>
            <div>{likes}</div>
            <div>{commentsToDisplay}</div>
            <form className={className} onSubmit={handleSubmit}>
                <input placeholder={`Add a comment for ${user.username}`} value={commentInput} onChange={(e) => setCommentInput(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Post