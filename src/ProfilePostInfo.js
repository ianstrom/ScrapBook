import React, { useState } from "react";
import Comment from "./Comment";
import like from "./icons/like.png"
import likeActive from "./icons/likeActive.png"
import comment from "./icons/comment.png"

function ProfilePostInfo({ post, user, onLike, onComment, myUser, onCommentDelete}){
    const [isClicked, setIsClicked] = useState(false)
    const [commentInput, setCommentInput] = useState("")
    const [alreadyLiked, setAlreadyLiked] = useState((post.likes.includes(myUser.username) ? true : false))
    const { likes, image, comments } = post
    const { username } = user

    const className = (isClicked ? "commentform" : "straightupnothin")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(commentInput)

        const comment = {
            id: Math.random(),
            posterId: user.id,
            commenterId: myUser.id,
            username: myUser.username,
            text: commentInput
        }

        onComment(user, post, comment)
    }

    function handleLike() {
        onLike(user, post)
        setAlreadyLiked(!alreadyLiked)
    }

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const commentsToDisplay = comments.map((comment) => {
        return <Comment key={comment.text} comment={comment} myUser={myUser} onCommentDelete={onCommentDelete} user={user} post={post}/>
    })
    return(
        <div className="PostContainer" id={post.id} >
            <div>{username}</div>
            <img src={image} alt="post" />
            <div>
                {(alreadyLiked ? <img className="islikedimg" src={likeActive} onClick={handleLike}/> : <img className="islikedimg" src={like} onClick={handleLike}/> )}
                <img className="commentButton" src={comment} onClick={handleClick}/>
            </div>
            <div>{likes}</div>
            <div>{commentsToDisplay}</div>
            <form className={className} onSubmit={handleSubmit}>
                <input placeholder={`Add a comment for ${user.username}`} value={commentInput} onChange={(e) => setCommentInput(e.target.value)}></input>
            </form>
        </div>
    )
}

export default ProfilePostInfo